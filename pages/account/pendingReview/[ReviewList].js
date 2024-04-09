import React, { useState, useEffect, createContext } from 'react';
import { collection, getDocs, updateDoc, doc, arrayUnion,getDoc } from 'firebase/firestore';
import { firestore } from '../../../firebase';
import { AccountPageLayout } from "@/components/Account_Layout";
import TargetData from './TargetData';
import { useRouter } from 'next/router';

export const MyDataContext = createContext();

export default function ReviewList() {
    const [orderDocs, setOrderDocs] = useState([]);
    const [userOrders, setUserOrders] = useState([]);
    const [products, setProducts] = useState([]);
    const [evaluationsArray, setEvaluationsArray] = useState([]);

    useEffect(() => {
        // Get all orders Documents.
        getDocs(collection(firestore, 'order-details')).then(data => {
            setOrderDocs([...data.docs]);
        }).catch(err => {
            console.error('Error fetching order details:', err);
        });
    }, []);

    useEffect(() => {
        orderDocs.forEach((order) => {
            getDocs(collection(order.ref, 'orders')).then(data => {
                const ordersData = data.docs.map(doc => ({
                    id: doc.id, // Extracting document ID
                    ...doc.data()
                }));                
                setUserOrders(prevOrders => [...prevOrders, ...ordersData]);
            });
        });
    }, [orderDocs]);

    useEffect(() => {
        // Get all products documents.
        getDocs(collection(firestore, 'products')).then(data => {
            const ordersData = data.docs.map(doc => ({
                id: doc.id, // Extracting document ID
                ...doc.data()
            }));                
            setProducts(prevOrders => [...prevOrders, ...ordersData]);
        });
    }, []);
    // console.log(products)

    const router = useRouter();
    const { ReviewList } = router.query;

    const addUserOrders = async (evaluation) => {
        products.forEach(async (product, index) => {
            if (product.proId == ReviewList) {
                try {
                    const orderRef = doc(firestore, 'products', product.id);
                    const productSnapshot = await getDoc(orderRef);
                    const productData = productSnapshot.data();
                    
                    let updatedRating = productData.rating || [];
                    if (!Array.isArray(updatedRating)) {
                        updatedRating = [updatedRating];
                    }
                    
                    updatedRating = updatedRating.concat(evaluation);
                    
                    await updateDoc(orderRef, {
                        rating: updatedRating
                    });
                    
                    console.log("Product at index", index, ":", product);
                } catch (error) {
                    console.error('Error updating rating:', error);
                }
            }
        });
    };
    
    
    
    
console.log(userOrders)
    return (
        <MyDataContext.Provider value={userOrders}>
            <TargetData ReviewList={ReviewList} addUserOrders={addUserOrders} />
        </MyDataContext.Provider>
    );
}

ReviewList.getLayout = AccountPageLayout;
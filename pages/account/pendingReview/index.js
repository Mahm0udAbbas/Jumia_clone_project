import React, { useState, useEffect, createContext } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore, auth } from '../../../firebase'; // Assuming you have access to auth
import OrderData from './OrderData';
import { AccountPageLayout } from "@/components/Account_Layout";

export const MyDataContext = createContext()
export default function PendingReviews() {
    const [orderDocs, setOrderDocs] = useState([]);
    const [userOrders, setUserOrders] = useState([]);
    const [checker, setChecker] = useState(true);

    useEffect(() => {
        // Get all orders Documents.
        getDocs(collection(firestore, 'order-details')).then(data => {
            setOrderDocs([...data.docs]);
        }).catch(err => {
            console.error('Error fetching order details:', err);
        })
    }, []);
    // console.log(orderDocs);
    useEffect(() => {
        orderDocs.forEach((order) => {
            const userID = order.data().userId;
            if (userID === auth.currentUser.uid) {
                getDocs(collection(order.ref, 'orders')).then(data => {
                    const ordersData = data.docs.map(doc => doc.data());
                    setUserOrders(prevOrders => [...prevOrders, ...ordersData]);
                });
                setChecker(true);
            } 
            else {
                console.log('User ID does not match');
                setChecker(false);
            }
        });
    }, [orderDocs]);

    // useEffect(() => {
    //     console.log(userOrders);
    // }, [userOrders]);

    return (
        <MyDataContext.Provider value = {userOrders}> 
            <OrderData checker = {checker} />
        </MyDataContext.Provider>
    );
}

PendingReviews.getLayout = AccountPageLayout;

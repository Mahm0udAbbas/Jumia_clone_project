import React, { useState, useEffect } from 'react';
import { firestore } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import ListItem from './ListItem';

export default function PriceFilter({ value }) { // Receive value as a prop
    const [loading, setLoading] = useState(true);
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getData(value); // Pass value to getData
    }, [value]); // Make useEffect re-run when value changes

    async function getData(value) { // Receive value as a parameter
        try {
            const productsQuerySnapshot = await getDocs(collection(firestore, "products"));
            const productsData = productsQuerySnapshot.docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                .filter(product => product.price >= value[0] && product.price <= value[1]); // Filter products based on price range
            setProductsData(productsData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    }

    // Logging filtered productsData to console
    console.log("value:", value);
    console.log("Filtered productsData:", productsData);
    

    return (
        <div>

        </div>
    );
}

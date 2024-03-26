import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../../firebase';
import RatingsGenerator from './RatingsGenerator';
import Radio from './Radio';

export default function RatingFilter() {
    const [productsData, setProductsData] = useState([]);
    const [storage, setStorage] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const productsQuerySnapshot = await getDocs(collection(firestore, 'products'));
            const productsData = productsQuerySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProductsData(productsData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }

    const Ratings = RatingsGenerator();

    const handleRadioClick = (id) => {
        console.log(Number(id));

        // Filter products where price is greater than or equal to id
        const filteredProducts = productsData.filter((product) => product.rating >= Number(id));

        // Update storage state with filtered products
        setStorage(filteredProducts);

        console.log(storage);
    };

    return (
        <div>
            {Ratings.map((option, index) => (
                <div key={index}>
                    <Radio
                        name="Group2"
                        id={option.id}
                        value={option.value}
                        text={option.text}
                        onClick={() => handleRadioClick(option.id)} // Attach event handler
                    />
                </div>
            ))}
        </div>
    );
}

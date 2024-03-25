import React, { useState, useEffect } from 'react';
import { firestore } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import ListItem from './ListItem';

export default function CatFilter() {
    const [catProducts, setCatProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [productsData, setProductsData] = useState([]);

    useEffect(() => {
        getData();
    }, []);

    async function getData() {
        try {
            const catQuerySnapshot = await getDocs(collection(firestore, "categories"));
            const catData = catQuerySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setCatProducts(catData);
            const productsQuerySnapshot = await getDocs(collection(firestore, "products"));
            const productsData = productsQuerySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setProductsData(productsData);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching data:", error);
            setLoading(false);
        }
    }

    const handleCategoryClick = (categoryId, event) => {
        event.preventDefault(); // Prevents page from scrolling Top
        console.log("Clicked category ID:", categoryId);
        const filteredProducts = productsData.filter(product => product.categoryId === categoryId);
        console.log("Filtered Products:", filteredProducts);    
    };

    return (
        <div>
            {loading ? (
                <p>Loading...</p>
            ) : (
                catProducts.map((category) => (
                    <ListItem key={category.id} className="text-gray-700 hover:bg-gray-200 block px-6" onClick={() => handleCategoryClick(category.id, event)} >
                        {category.name}
                    </ListItem>
                ))
            )}
        </div>
    );
}

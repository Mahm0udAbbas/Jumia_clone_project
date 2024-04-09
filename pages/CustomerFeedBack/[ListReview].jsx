import React, { useState, useEffect } from 'react';
import StarIcon from "@mui/icons-material/Star";
import { collection, getDocs, doc } from 'firebase/firestore';
import { getAllProducts } from "../../firebase";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Progress } from "@material-tailwind/react";
import { useRouter } from 'next/router';
import Review from './review';
import { firestore } from '../../firebase';

const ListReview = () => {
    const [products, setProducts] = useState([]);
    const router = useRouter();
    const { ListReview } = router.query;

    // get all products
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getDocs(collection(firestore, 'products'));
                const ordersData = data.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProducts(ordersData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // choose the current product
    const product = products.find(prod => prod.id === ListReview);

    //calculate average of rating
    const rating = product ? product.rating : 0; 
    const ratingLength = rating.length;
    let sumOfRates = 0;
    for (let i = 0; i < rating.length; i++) {
        sumOfRates += Number(rating[i].rate);
    }    
    const averageRate = sumOfRates / ratingLength;
    const roundedAverageRate = averageRate.toFixed(1);
         
    return (
        <div className="w-full py-5 px-24 mx-auto">
        <div className="bg-white rounded">
        <div className="flex flex-col p-5">
            <div className="flex justify-between items-center w-full">
                <h3 className="text-gray-700 hover:text-gray-900 text-lg font-medium flex items-center gap-15">
                    <ArrowBackIcon onClick={() => router.back()} className="cursor-pointer" />
                    Verified Customer Feedback
                </h3>
                <div className="my-3 border-b border-gray-300"></div>
            </div>

            <div className="my-4 border-b border-gray-100 w-full"></div>

            <div className="grid grid-cols-12">
                <div className="col-span-12 md:col-span-4 ">
                    <div className="flex flex-col items-center p-3">
                        <p className="text-gray-700 hover:text-gray-900">
                            VERIFIED RATINGS ({ratingLength})
                        </p>
                        <div className="bg-gray-100 p-5 w-full text-center rounded">
                            <h2 className="text-amber-500 text-2xl font-bold mb-1">
                                {roundedAverageRate}/5
                            </h2>
                            <div className="flex justify-center pb-3">
                                <StarIcon className="text-amber-500" />
                            </div>
                            <p className="text-gray-700 hover:text-gray-900">
                                {ratingLength} verified ratings
                            </p>
                        </div>
                        <div className="flex flex-col w-full max-w-xs mt-5">
                            <div className="flex justify-between items-center w-full">
                                <span className="flex">
                                    <StarIcon className="text-amber-500" />(5)
                                </span>
                                {/* Assuming Progress component is implemented correctly */}
                                <Progress
                                    size="sm"
                                    value={(roundedAverageRate / 5) * 100}
                                    variant="filled"
                                    color="amber"
                                    style={{ width: '80%' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 md:col-span-8">
                <p className="text-gray-700 hover:text-gray-900 text-sm">
                PRODUCT REVIEWS ({ratingLength})
            </p>
            {rating && Array.isArray(rating) && rating.length > 0 && rating.map((review, index) => (
    <div key={index}>
        <Review
            title={review.ReviewTitle}
            detail={review.ReviewTitleDetail}
            name={review.name}
            rate={review.rate}
            date={review.date}
            className={index !== rating.length - 1 ? "border-b border-gray-300" : ""}
        />
        {index !== rating.length - 1 && <div className="border-b border-gray-300"></div>}
    </div>
))}

                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ListReview;
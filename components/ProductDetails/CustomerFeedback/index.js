import React from "react";
import StarIcon from "@mui/icons-material/Star";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Progress } from "@material-tailwind/react";
import Link from 'next/link';
import Rating from '@mui/material/Rating';

const FeedbackList = ({ product , id }) => {

  // console.log(id);
  const verifiedReting = 4;

  // Calculate average rating
  let roundedAverageRate = 0;
  if (product.rating && product.rating.length > 0) {
    const ratingLength = product.rating.length;
    let sumOfRates = 0;
    for (let i = 0; i < ratingLength; i++) {
      sumOfRates += Number(product.rating[i].rate);
    }
    const averageRate = sumOfRates / ratingLength;
    roundedAverageRate = parseFloat(averageRate.toFixed(1));
    console.log(roundedAverageRate);
  }

  return (
    <div className="flex flex-col p-5">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-gray-700 hover:text-gray-900 text-lg font-medium">
          Verified Customer Feedback
        </h3>
        <div className="my-3 border-b border-gray-300"></div>
        <Link href={`/CustomerFeedBack/${id}`}>
          <div className="flex items-center text-orange-500 cursor-pointer">
            SEE ALL <ArrowForwardIosIcon className="text-orange-500 text-sm" />
          </div>
        </Link>
      </div>

      <div className="my-4 border-b border-gray-100 w-full"></div>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">
          <div className="flex flex-col items-start p-3">
            <p className="text-gray-700 hover:text-gray-900">
              VERIFIED RATINGS ({verifiedReting})
            </p>
            <div className="bg-gray-100 p-5 w-4/5 text-center rounded">
              <h2 className="text-amber-500 text-2xl font-bold mb-1">
                {roundedAverageRate}/5
              </h2>
              <div className="flex justify-center">
                <Rating name="read-only" value={roundedAverageRate} readOnly />
              </div>
              <p className="text-gray-700 hover:text-gray-900">
                {verifiedReting} verified ratings
              </p>
            </div>
            <div className="flex flex-col mt-5 w-4/5">
              <div className="flex justify-between items-center w-full">
                <span className="flex">
                  <StarIcon className="text-amber-500" />({verifiedReting})
                </span>
                <Progress
                  size="sm"
                  value={(roundedAverageRate / 5) * 100}
                  variant="filled"
                  color="amber"
                  style={{ width: '70%' }}
                />
              </div>
            </div>
          </div>
        </div>

        {product.rating && product.rating.length > 0 && (
          <div className="col-span-12 md:col-span-8">
            <div className="flex flex-col items-start p-3">
              <p className="text-gray-700 hover:text-gray-900">
                PRODUCT REVIEWS ({product.rating.length})
              </p>
              <div className="flex justify-center pb-3">
                <div className="flex">
                  <Rating name="read-only" value={product.rating[0].rate} readOnly />
                </div>
              </div>
              <p className="font-bold text-gray-700 hover:text-gray-900 mb-2">
                {product.rating[0].ReviewTitle} {/* Example of accessing product property */}
              </p>
              <p className="text-gray-700 hover:text-gray-900 text-sm mb-4">
                {product.rating[0].ReviewTitleDetail} {/* Example of accessing product property */}
              </p>
              <div className="flex justify-between items-center w-full">
                <p className="text-gray-500 text-sm">
                  {product.rating[0].date} by {product.rating[0].name}
                </p>
                <div className="flex items-center">
                  <TaskAltIcon className="text-green-500 mr-1" />
                  <p className="text-green-500 text-sm">Verified Purchase</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackList;

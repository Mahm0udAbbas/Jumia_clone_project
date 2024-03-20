import React from "react";
import StarIcon from "@mui/icons-material/Star";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Progress } from "@material-tailwind/react";

const FeedbackList = () => {
  const now = 60;

  return (
    <div className="flex flex-col p-5">
      <div className="flex justify-between items-center w-full">
        <h3 className="text-gray-700 hover:text-gray-900 text-lg font-medium">
          Verified Customer Feedback
        </h3>
        <div className="my-3 border-b border-gray-300"></div>
        <button className="flex items-center text-orange-500">
          SEE ALL <ArrowForwardIosIcon className="text-orange-500 text-sm" />
        </button>
      </div>

      <div className="my-4 border-b border-gray-100 w-full"></div>

      <div className="grid grid-cols-12">
        <div className="col-span-12 md:col-span-4">
          <div className="flex flex-col items-center p-3">
            <p className="text-gray-700 hover:text-gray-900">
              VERIFIED RATINGS (8)
            </p>
            <div className="bg-gray-200 p-3 w-full max-w-xs text-center">
              <h2 className="text-amber-500 text-2xl font-bold mb-1">4.3/5</h2>
              <div className="flex justify-center pb-3">
                <StarIcon className="text-amber-500" />
              </div>
              <p className="text-gray-700 hover:text-gray-900">
                8 verified ratings
              </p>
            </div>
            <div className="flex flex-col w-full max-w-xs">
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <div
                  className="flex justify-between items-center w-full"
                  key={index}
                >
                  <span className="flex">
                    5 <StarIcon className="text-amber-500" />
                    (5)
                  </span>
                  <Progress
                    size="sm"
                    value={50}
                    variant="filled"
                    color="amber"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-8">
          <div className="flex flex-col items-start p-3">
            <p className="text-gray-700 hover:text-gray-900">
              PRODUCT REVIEWS (1)
            </p>
            <div className="flex justify-center pb-3">
              <StarIcon className="text-amber-500" />
              <StarIcon className="text-amber-500" />
              <StarIcon className="text-amber-500" />
              <StarIcon className="text-amber-500" />
            </div>
            <p className="font-bold text-gray-700 hover:text-gray-900 mb-2">
              حلوه
            </p>
            <p className="text-gray-700 hover:text-gray-900 text-sm mb-4">
              الخامه حلوه بس الجلد بتاعها لو اخربشت بيعلم و لون بيغير مكان
              الخربشه لكن ف المجمل حلوه و مقاسها مناسب تمام ل freebuds 4i
            </p>
            <div className="flex justify-between items-center w-full">
              <p className="text-gray-700 hover:text-gray-900">
                28-04-2022 by AH
              </p>
              <div className="flex items-center">
                <TaskAltIcon className="text-green-500 mr-1" />
                <p className="text-green-500 text-sm">Verified Purchase</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackList;

import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import Rating from '@mui/material/Rating';

export default function Review({ title , detail , name , rate ,date}) {

    return (
        <div className="flex flex-col items-start p-3">

            <div className="flex justify-center pb-3">
                <div className="flex">
                <Rating name="read-only" value={rate} readOnly />

                </div>
            </div>
            <p className="font-bold text-gray-700 hover:text-gray-900 mb-2">
            {title}
            </p>
            <p className="text-gray-700 hover:text-gray-900 text-sm mb-4">
            {detail}
            </p>
            <div className="flex justify-between items-center w-full">
                <p className="text-gray-500 text-sm">
                    {date} by {name}
                </p>
                <div className="flex items-center">
                    <TaskAltIcon className="text-green-500 mr-1" />
                    <p className="text-green-500 text-sm">Verified Purchase</p>
                </div>
            </div>
        </div>
    );
}

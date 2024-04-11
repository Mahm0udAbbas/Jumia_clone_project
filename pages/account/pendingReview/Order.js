import React from 'react';
import Button from '@mui/material/Button';
import Link from "next/link";

function Order({order}) {
  return (
    <>
        <div className="flex border rounded-lg p-3">
            <img src={order.items[0].product.thumbnail} alt="Product Image" className="mr-4 h-20" />
            <span className="flex flex-col mr-4 text-left flex-grow">
              <p>{order.items[0].product.en.title}</p>
              <small className ="text-gray-400">Order {order.items[0].product.proId}</small>
              <br/>
              <span className="bg-green-500 text-xs min-h-4 rounded text-white w-fit px-2">Delivered</span>
              <p>On {order.timestamp}</p>
            </span>
            <Link href={`/account/pendingReview/${order.items[0].product.proId}`}>
                <Button variant="text" color="warning" className="flex items-baseline h-fit">Review</Button>
            </Link>
        </div>
    </>
  );
}

export default Order;

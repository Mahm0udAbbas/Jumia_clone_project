import { AccountPageLayout } from "@/components/Account_Layout";
import Link from "next/link";
import React from "react";

function Orders() {
  return (
    <>
      <div>
        <h2 className="py-2 border-b px-4">ORDERS</h2>
        <div className="py-4      h-[80%] ">
          <div className=" border-b py-2  flex flex-col md:flex-row">
            <Link
              className="px-4 hover:text-orange-400 mb-2 md:mb-0 "
              href="/account/Orders"
            >
              ONGOING/DELIVERED (0)
            </Link>
            <Link
              className="px-4 hover:text-orange-400"
              href="/account/Orders/ClosedOrders"
            >
              CANCELED/RETURNED (2)
            </Link>
          </div>
          <div className=" text-center py-8 h-[100%]">
            <h2 className="py-2">You have placed no orders yet!</h2>
            <p className="py-2">
              All your orders will be saved here for you to access their state
              anytime.
            </p>
            <Link
              href="#"
              className="btn my-6 p-4 bg-amber-500 hover:bg-yellow-400 text-white"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Orders;
Orders.getLayout = AccountPageLayout;

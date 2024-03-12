import { AccountPageLayout } from "@/components/Account_Layout";
import Link from "next/link";
import React from "react";

function Orders() {
  return (
    <>
      <div className=" box-border  h-[100%]">
        <header className="py-2 border-b px-4">
          <h2>ORDERS</h2>
        </header>
        <div className="py-4  box-border   h-[80%] ">
          <div className=" border-b p-2 ">
            <Link className="px-4 hover:text-orange-400 " href="#">
              OPENED ORDERS (0)
            </Link>
            <Link className="px-4 hover:text-orange-400" href="#">
              CLOSED ORDERS (0)
            </Link>
          </div>
          <div className=" text-center mx-48  py-8    h-[100%]">
            <img
              src="/voucher.de9d55af.svg"
              className="w-100 h-100 my-2 "
              alt="image"
            />
            {/* <Image
              src="/voucher.de9d55af.svg"
              width="100"
              height="100"
              alt="image"
            /> */}

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

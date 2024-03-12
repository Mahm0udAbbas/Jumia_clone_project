import { AccountPageLayout } from "@/components/Account_Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Vouchers() {
  return (
    <>
      <div className=" box-border  h-[100%]">
        <header className="py-2 border-b px-4">
          <h2>Vouchers</h2>
        </header>
        <div className="py-4  box-border   h-[80%] ">
          <div className=" border-b">
            <Link className="px-4 hover:text-orange-400 " href="#">
              ACTIVE
            </Link>
            <Link
              className="px-4 hover:text-orange-400"
              href="/account/Voucher/InActive"
            >
              INACTIVE
            </Link>
          </div>
          <div className=" text-center mx-48  py-8    h-[100%]">
            <img
              src="/voucher.de9d55af.svg"
              className="w-100 h-100 my-2 "
              alt="image"
            />
            <h2 className="py-2">
              You currently have no available Jumia Credit
            </h2>
            <p className="py-2">
              All your available Jumia credit and coupons will be displayed here
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

export default Vouchers;
Vouchers.getLayout = AccountPageLayout;

import { AccountPageLayout } from "@/components/Account_Layout";
import Link from "next/link";
import React from "react";

function FollowedSeller() {
  return (
    <>
      <div className="box-border  h-[100%]">
        <header className="py-2 border-b px-4">
          <h2>Followed Sellers </h2>
        </header>
        <div className="text-center mx-48  py-8 items-center h-[100%]">
          <img src="/store.f07d2fad.svg" className="w-100 h-100 my-2  " />
          <p className="py-2">You don't follow any seller !</p>
          <p className="py-2">
            All your followed sellers will be displayed here
          </p>
          <Link
            href="#"
            className="btn my-6 p-4 bg-amber-500 hover:bg-yellow-400 text-white"
          >
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </>
  );
}

export default FollowedSeller;
FollowedSeller.getLayout = AccountPageLayout;

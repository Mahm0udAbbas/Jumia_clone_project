import { AccountPageLayout } from "@/components/Account_Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineDelete } from "react-icons/ai";

function SavedItem() {
  return (
    <>
      <div className="box-border sm:flex-col">
        <header className="py-2 px-4">
          Saved Items ("number of fav product")
        </header>
        <div className="p-4 box-border  ">
          <div className="card card-side bg-base-100 box-content container:md:flex-col  shadow-xl p-2 border">
            <figure className="w-40 h-40 box-border">
              <Link className=" " href="#">
                {/* src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" */}
                <img src="/tshirt_red_480x400.webp" />
              </Link>
            </figure>
            <div className="card-body p-2 box-border">
              <Link className="card-title" href="#">
                LC Waikiki Men's Hoodie Long Sleeve Sweatshirt
              </Link>
              <div className="mt-14">
                <p>product price : (36,000)</p>
              </div>
            </div>
            <div className="card-actions justify-start items-center flex-col p-4 ml-5">
              <form className="">
                <button className="rounded-lg py-3 px-4 text-white bg-yellow-400 hover:bg-yellow-500 w-[100%]">
                  BUY NOW
                </button>
              </form>
              <form className="mt-9 ">
                <button className="flex rounded-lg py-3  text-center px-4 text-yellow-500 bg-none  hover:bg-yellow-200">
                  <AiOutlineDelete size={20} className="mr-1" />
                  REMOVE
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="p-4 box-border  ">
          <div className="card card-side bg-base-100 container:sm:flex-col  shadow-xl p-2 border">
            <figure className="w-40 h-40 ">
              <Link className=" " href="#">
                {/* src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" */}
                <img src="/products/tshirt_black_480x400.webp" />
              </Link>
            </figure>
            <div className="card-body p-2 ">
              <Link className="card-title" href="#">
                LC Waikiki Men's Hoodie Long Sleeve Sweatshirt
              </Link>
              <div className="mt-14">
                <p>product price : (36,000)</p>
              </div>
            </div>
            <div className="card-actions justify-start items-center flex-col p-4 ml-5">
              <form className="">
                <button className="rounded-lg py-3 px-4 text-white bg-yellow-400 hover:bg-yellow-500 w-[100%]">
                  BUY NOW
                </button>
              </form>
              <form className="mt-9 ">
                <button className="flex rounded-lg py-3  text-center px-4 text-yellow-500 bg-none  hover:bg-yellow-200">
                  <AiOutlineDelete size={20} className="mr-1" />
                  REMOVE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SavedItem;
SavedItem.getLayout = AccountPageLayout;

import Link from "next/link";
import React from "react";
import { AccountPageLayout } from "../../../components/Account_Layout";

function Myaccount() {
  return (
    <>
      <main>
        <header className="border-b py-2 px-4">
          <h2>Account Overview</h2>
        </header>
        <div className=" grid grid-cols-2 box-border">
          <div className=" p-2  ">
            <div className=" border p-2 h-[100%]">
              <article>
                <header className="border-b p-4">ACCOUNT DETAILS</header>
                <div>
                  <p className="pt-2 px-2">User Name API</p>
                  <p className="p-2">User Email API</p>
                </div>
              </article>
            </div>
          </div>
          <div className=" p-2 ">
            <div className=" border p-2">
              <article>
                <header className="border-b p-4 flex justify-between items-center">
                  <h2>ADDRESS BOOK</h2>
                  <Link
                    className="hover:bg-orange-200 hover:rounded-full mx-4 "
                    href="#"
                  >
                    <svg
                      class="w-6 h-6 m-2  text-yellow-500 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m14.3 4.8 2.9 2.9M7 7H4a1 1 0 0 0-1 1v10c0 .6.4 1 1 1h11c.6 0 1-.4 1-1v-4.5m2.4-10a2 2 0 0 1 0 3l-6.8 6.8L8 14l.7-3.6 6.9-6.8a2 2 0 0 1 2.8 0Z"
                      />
                    </svg>
                  </Link>
                </header>
                <div>
                  <h3 className="pt-2 px-2">Your default shipping address:</h3>
                  <p className="p-2">User name API</p>
                  <p className="p-2">User address API</p>
                </div>
              </article>
            </div>
          </div>
          <div className=" p-2 ">
            <div className=" border p-2 h-[100%]">
              <article>
                <header className="border-b p-4">JUMIA STORE CREDIT</header>
                <div className="flex  items-center p-4 text-cyan-700 ">
                  <svg
                    class="w-6 h-6 mr-2 text-cyan-700 dark:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-width="2"
                      d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                    />
                  </svg>
                  <p className="">
                    <span>Jumia Pay Balance : </span>
                    <span> (EGP 0.00 )</span>
                  </p>
                </div>
              </article>
            </div>
          </div>
          <div className=" p-2 ">
            <div className=" border p-2">
              <article>
                <header className="border-b p-4">NEWSLETTER PREFERENCES</header>
                <div>
                  <p className="p-4">
                    You are currently not subscribed to any of our newsletters.
                  </p>
                  <Link
                    className="m-4 p-2 text-amber-600  hover:bg-orange-300 hover:rounded-lg "
                    href="#"
                  >
                    EDIT NEWSLETTER PREFERENCES
                  </Link>
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Myaccount;
Myaccount.getLayout = AccountPageLayout;

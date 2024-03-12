import Link from "next/link";
import React from "react";
import EditOldAddress from "./EditOldAddress";
import AddNewAddress from "./AddNewAddress";
import { AccountPageLayout } from "../../../components/Account_Layout";

function AddressBook() {
  return (
    <>
      <div>
        <header className="py-2 px-4 border-b flex text-center justify-between ">
          <h1>AddressBook</h1>
          <Link
            className=" p-1  bg-amber-500 text-white px-2 hover:rounded-lg hover:brightness-90 rounded-lg"
            href="/users/AddressBook/AddNewAddress"
          >
            ADD NEW ADDRESS
          </Link>
        </header>
        <div>
          <div className=" p-2 flex w-[50%] box-border">
            <div className=" border   w-[100%] box-border">
              <article className="p-4 bg-rose-100">
                <header className=" ">
                  <h2>address DETAILS</h2>
                </header>
                <div>
                  <p className="pt-2 px-2">User Name API</p>
                  <p className="p-2 text-slate-300">User address API</p>
                  <p className="mt-4 text-lime-600">Defult Address</p>
                </div>
              </article>
              <div className="p-2  flex justify-between box-border">
                <button className="btn my-1 ml-2  " disabled>
                  SET AS DEFAULT
                </button>
                <Link
                  href="/users/AddressBook/EditOldAddress"
                  className="hover:bg-amber-200 hover:rounded-full my-2 mx-2 p-2 "
                >
                  <svg
                    class="w-6 h-6  text-gray-800 dark:text-white"
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
              </div>
            </div>
          </div>
        </div>
        {/* <EditOldAddress />
        <AddNewAddress /> */}
      </div>
    </>
  );
}

export default AddressBook;
AddressBook.getLayout = AccountPageLayout;

import Link from "next/link";
import React from "react";
import EditOldAddress from "./EditOldAddress";
import AddNewAddress from "./AddNewAddress";
import { AccountPageLayout } from "../../../components/Account_Layout";
import BorderColorIcon from "@mui/icons-material/BorderColor";

function AddressBook() {
  return (
    <>
      <div>
        <header className="py-2 px-4 border-b flex  justify-between items-center ">
          <h1 className="font-bold">AddressBook</h1>
          <Link
            className=" py-3   bg-amber-500 text-white text-sm  px-2  hover:bg-amber-300 rounded-sm"
            href="/account/AddressBook/AddNewAddress"
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
                <button className="btn my-1 ml-2 rounded-sm " disabled>
                  SET AS DEFAULT
                </button>
                <Link
                  href="/account/AddressBook/EditOldAddress"
                  className="hover:bg-amber-200 hover:rounded-full my-2 mx-2 p-2 "
                >
                  <BorderColorIcon className="text-amber-500" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddressBook;
AddressBook.getLayout = AccountPageLayout;

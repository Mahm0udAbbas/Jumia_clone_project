import Link from "next/link";
import React from "react";

function AddNewAddress() {
  return (
    <>
      <div>
        <header className="border-b p-2 flex">
          <Link
            href="/users/AddressBook"
            className="me-4 hover:bg-amber-200 hover:rounded-full "
          >
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white "
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
                d="m15 19-7-7 7-7"
              />
            </svg>
          </Link>
          <h1>Add a New Address</h1>
        </header>
        <form className="py-4 box-border">
          <div className=" flex px-4 ">
            <div className="flex relative w-[50%] pt-2 mr-8">
              <input
                type="text"
                placeholder="Enter your first name"
                className="input input-bordered w-full max-w-xs px-4 py-3.5"
              />
              <label className=" absolute -top-2.5 left-2 bg-white p-1">
                first name
              </label>
            </div>
            <div className="flex relative pt-2 w-[50%]">
              <input
                type="text"
                placeholder="Enter your last name"
                className="input input-bordered w-full max-w-xs px-4 py-3.5"
              />
              <label className=" absolute -top-2.5 left-2 bg-white p-1">
                Last name
              </label>
            </div>
          </div>
          <div className="flex my-6 ">
            <div className="flex w-[50%] items-center ">
              <div className="relative">
                <div className="px-4 py-3.5 ">+20</div>
                <label className=" absolute -top-2.5 left-2 text-xs bg-white ">
                  prefix
                </label>
              </div>
              <div className="relative ms-6 w-[60%] ">
                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="input input-bordered w-full max-w-xs px-4 py-3.5"
                />
                <label className=" absolute -top-3.5 left-2 bg-white p-1">
                  Last name
                </label>
              </div>
            </div>

            <div className="flex w-[50%] items-center ">
              <div className="relative">
                <div className="px-4 py-3.5 ">+20</div>
                <label className=" absolute -top-2.5 left-2 text-xs bg-white ">
                  prefix
                </label>
              </div>
              <div className="relative ms-6 w-[60%]">
                <input
                  type="text"
                  placeholder="Enter your Additional phone number"
                  className="input input-bordered w-full max-w-xs py-3.5"
                />
                <label className=" absolute -top-3.5 left-2 bg-white p-1">
                  Additional Phone Number
                </label>
              </div>
            </div>
          </div>
          <div className=" px-4 box-border ">
            <div className="relative  w-[100%] pt-2">
              <input
                type="text"
                placeholder="Enter your Address"
                className="input input-bordered  w-full max-w-xs py-3.5 "
              />
              <label className=" absolute -top-3.5 left-2 bg-white p-1">
                Enter your Address
              </label>
            </div>

            {/* <div className="relative  pt-2 bg-slate-100">
              <input
                type="text"
                placeholder="Enter your Additional Information"
                className="input input-bordered w-full max-w-xs py-3.5"
              />
              <label className=" absolute -top-3.5 left-2 bg-white p-1">
                Additional Information
              </label>
            </div> */}
          </div>
          <div className="flex px-4 my-4">
            <div className="relative w-[50%] ">
              <div className="sm:col-span-3 w-[100%]">
                <label className="absolute -top-1 px-1 bg-white left-2 block text-sm  leading-6 text-gray-900">
                  Region
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="relative w-[50%]">
              <div className="sm:col-span-3 w-[100%]">
                <label className="absolute -top-1 px-1 bg-white left-2 block text-sm  leading-6 text-gray-900">
                  City
                </label>
                <div className="mt-2">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className=" px-4 my-4">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input
                  id="comments"
                  name="comments"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-300"
                />
              </div>
              <div className="text-sm leading-6">
                <label htmlFor="comments" className="font-medium text-gray-900">
                  Set as Default Address
                </label>
              </div>
            </div>
          </div>
          <div>
            <button
              type="submit"
              className=" px-4 py-2 text-sm font-medium text-white bg-orange-500 border border-transparent rounded-md shadow-sm hover:brightness-75      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddNewAddress;

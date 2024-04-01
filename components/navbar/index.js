"use client";
import { useRouter } from "next/router";
import Elementthree from "./elementthree";
import Shoppingcart from "./shoppingcart";
import Account from "./account";
import Help from "./help";
import { useState } from "react";
import { getSearch } from "@/firebase";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function Navbar() {
  const router = useRouter();
  const [productsSearch, setProductsSearch] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function handleSearch(value) {
    setInputValue(value);
    if (value.length) {
      getSearch(value).then(data => setProductsSearch([...data]));
    } else {
      setProductsSearch([]);
    }
  };

  function goToAllProducts(e) {
    if (inputValue) {
      router.push({
        pathname: "/category/allProducts",
        query: { queryString: inputValue }
      });
      setProductsSearch([]);
    }
    else {
      e.preventDefault();
    }
  }

  return (
    <>
      <div className="bg-orange-500 mb-3">
        <div className=" .mx-auto w-full align-middle  md:max-w-7xl mx-auto">
          <img
            src="https://ng.jumia.is/cms/0-1-cpr/2023/new-top-strip/free-delivery-top-strip_1.gif"
            alt="navimage"
          />
        </div>
      </div>
      <div className="bg-white align-middle relative">
        <div className="md:max-w-7xl mx-auto flex py-3 flex-row justify-between space-x-2 ">
          <span className="flex space-x-2">
            <Elementthree />
            <img
              src="/jumia.png"
              className="h-[40px] pt-3 cursor-pointer"
              alt="logo"
              onClick={() => router.push("/")}
            />
          </span>
          <div className="w-full outline-none max-w-md my-auto hidden lg:inline">
            <input
              onChange={(e) => handleSearch(e.target.value)}
              type="text"
              placeholder="Search Products"
              className="input input-bordered input-warning bg-white w-full outline-none max-w-md  my-auto hidden lg:inline"
            />
            <div hidden={productsSearch.length == 0 ? true : false} className="bg-white rounded-sm shadow-xl p-3 max-w-md z-10 absolute">
              {
                productsSearch.map((item) => {
                  const product = item.data();
                  return <Link key={item.id} href={`/ProductDetails/${item.id}`} onClick={() => setProductsSearch([])} className="text-sm p-1 block hover:bg-gray-200">{product.en.title}</Link>
                })
              }
            </div>
          </div>
          <button onClick={(e) => { goToAllProducts(e) }} type="submit" className="btn btn-warning rounded-2 text-white hidden lg:inline">
            Search
          </button>
          <Account />
          <Help />
          <Shoppingcart />
        </div>
      </div>
    </>
  );
}

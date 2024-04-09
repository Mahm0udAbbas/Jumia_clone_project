import { useRouter } from "next/router";
import Elementthree from "./elementthree";
import Shoppingcart from "./shoppingcart";
import Account from "./account";
import Help from "./help";
import { useState } from "react";
import { getSearch } from "@/firebase";
import Link from "next/link";
import LangToggel from "../langToggel/LangToggel";
import { useTranslation } from "next-i18next";

export default function Navbar() {
  const router = useRouter();
  const [productsSearch, setProductsSearch] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const { t } = useTranslation("nav");
  console.log(t);
  function handleSearch(value) {
    setInputValue(value);
    if (value.length) {
      getSearch(value).then((data) => setProductsSearch([...data]));
    } else {
      setProductsSearch([]);
    }
  }

  function goToAllProducts(e) {
    if (inputValue) {
      router.push({
        pathname: "/category/allProducts",
        query: { queryString: inputValue },
      });
      setProductsSearch([]);
    } else {
      e.preventDefault();
    }
  }

  return (
    <>
      <div className="bg-orange-500 ">
        <div className=" .mx-auto w-full align-middle  md:max-w-7xl mx-auto">
          <img
            src="https://ng.jumia.is/cms/0-1-cpr/2023/new-top-strip/free-delivery-top-strip_1.gif"
            alt="navimage"
          />
        </div>
      </div>
      <LangToggel />
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
              placeholder={t("Search Products")}
              className="input input-bordered input-warning bg-white w-full outline-none max-w-md  my-auto hidden lg:inline"
            />
            <div
              hidden={productsSearch.length == 0 ? true : false}
              className="bg-white rounded-sm shadow-xl p-3 max-w-md z-10 absolute"
            >
              {productsSearch.map((item) => {
                const product = item.data();
                return (
                  <Link
                    key={item.id}
                    href={`/ProductDetails/${item.id}`}
                    onClick={() => setProductsSearch([])}
                    className="text-sm p-1 block hover:bg-gray-200"
                  >
                    {product.en.title}
                  </Link>
                );
              })}
            </div>
          </div>
          <button
            onClick={(e) => {
              goToAllProducts(e);
            }}
            type="submit"
            className="btn btn-warning rounded-2 text-white hidden lg:inline"
          >
            {t("Search")}
          </button>
          <Account />
          <Help />
          <Shoppingcart />
        </div>
      </div>
    </>
  );
}

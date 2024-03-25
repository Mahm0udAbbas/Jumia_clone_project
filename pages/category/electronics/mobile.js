import React, { useEffect, useState } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Breadcrumbs } from "@material-tailwind/react";
import MySpinner from "@/components/order/Spiner/Spinner";
import CatProdList from "@/components/CatProdList/CatProdList";
import {
  getAllSubCategories,
  getCategoryByName,
  getProductsBySubCategoryId,
  getSubCategoryByName,
} from "@/firebase";

export default function Phones() {
  const [loading, setLoading] = useState(true);
  const [catProducts, setCatProducts] = useState([]);
  const [subCats, setSubCats] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProductsBySubCategoryId(
          "656e34938ab097079167133d"
        );
        const subCat = await getAllSubCategories("65527a31376a52ea210d9703");
        setCatProducts(products);
        setSubCats(subCat);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <MySpinner />
      </div>
    );
  } else {
    return (
      <main className="container mx-auto">
        <Breadcrumbs separator="/">
          <a href="/" className="opacity-60">
            Home
          </a>
          <a href={`/category/electronics`}>Electronics</a>
          <a href="/category/electronics/mobile">Mobile</a>
        </Breadcrumbs>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12   md:col-span-3">
            <Sidebar catData="Electronics" subCats={subCats} />;
          </div>
          <div className=" col-span-12 md:col-span-9 ">
            <CatProdList
              catProducts={catProducts}
              catData="Electronics"
              subCatData="Mobile"
            />
          </div>
        </div>
      </main>
    );
  }
}

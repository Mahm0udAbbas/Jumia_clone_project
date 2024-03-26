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
import { catIds, subCatIds } from "@/data";

export default function Labtop() {
  const [loading, setLoading] = useState(true);
  const [catProducts, setCatProducts] = useState([]);
  const [subCats, setSubCats] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProductsBySubCategoryId(subCatIds.labtop);
        const subCat = await getAllSubCategories(catIds.Electronics);
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
          <a href="/category/electronics/laptop">Labtops</a>
        </Breadcrumbs>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12   md:col-span-3">
            <Sidebar
              catData="Electronics"
              subCats={subCats}
              setCatProducts={setCatProducts}
              id={catIds.Electronics}
              subCatId={subCatIds.labtop}
            />
            ;
          </div>
          <div className=" col-span-12 md:col-span-9 ">
            <CatProdList
              catProducts={catProducts}
              catData="Electronics"
              subCatData="Labtops"
            />
          </div>
        </div>
      </main>
    );
  }
}

import React, { useEffect, useState } from "react";
import { getProductsByCategoryId } from "../../firebase";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Breadcrumbs } from "@material-tailwind/react";
import MySpinner from "@/components/order/Spiner/Spinner";
import CatProdList from "@/components/CatProdList/CatProdList";
import { catIds } from "@/data";

export default function Kindle() {
  const [loading, setLoading] = useState(true);

  const [catProducts, setCatProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProductsByCategoryId(catIds.Kindle);
        setCatProducts(products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
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
          <a href="/category/kindle">Kindle</a>
        </Breadcrumbs>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12 md:col-span-3">
            <Sidebar
              catData="Kindle"
              setCatProducts={setCatProducts}
              id={catIds.Kindle}
            />
            ;
          </div>
          <div className=" col-span-12 md:col-span-9 ">
            <CatProdList catProducts={catProducts} catData="Kindle" />
          </div>
        </div>
      </main>
    );
  }
}

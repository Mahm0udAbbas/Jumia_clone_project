import React, { useState, useEffect } from "react";
import RecomHeader from "../Product/header";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import db, { getAllProducts } from "../../firebase";
import Link from "next/link";

export default function SliderMainPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className=" mt-5  items-center justify-center ">
      <RecomHeader title="Recommended Products" color="bg-amber-700" />
      <div className=" grid grid-cols-1 sm:grid-cols-2  md:grid-cols-4  gap-2 mt-1">
        {products.map((product) => (
          <div key={product.id} className=" ">
            <div className="bg-white p-6 shadow-md rounded-md h-[400px] flex flex-col justify-between ">
              <div className="flex justify-center items-center">
                <img
                  src={product.thumbnail}
                  alt={product.en.title}
                  className="h-[150px]   "
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2 ">
                  {product.en.title}
                </h3>
              </div>
              <div className=" self-center">
                <Link
                  href={`/ProductDetails/${product.id}`}
                  className="btn btn-warning rounded-2 text-white  p-3 m-2"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

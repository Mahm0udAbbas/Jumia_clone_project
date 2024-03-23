import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import db, { getProductsByCategoryId } from "../../firebase";
import RecomHeader from "../Product/header";

export default function HealthPersonalCare() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProductsByCategoryId(
          "65527c8c376a52ea210d970a"
        );
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pt-5">
      <RecomHeader
        title="Recommended Health & Personal Care
"
        color="bg-yellow-300 "
      />
      <div className="carousel carousel-center w-full bg-white shadow-lg rounded-lg">
        {products.map((product) => (
          <div
            key={product.id}
            className="carousel-item flex flex-col w-[150px] md:w-[200px]"
          >
            <img
              src={product.thumbnail}
              className="rounded-box w-full h-40 md:h-48 p-10"
              alt={`Product ${product.en.title}`}
            />
            <span className="justify-center text-center">
              {product.en.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

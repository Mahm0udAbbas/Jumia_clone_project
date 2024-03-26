import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getProductsByCategoryId } from "../../firebase";
import RecomHeader from "../Product/header";
import Link from "next/link";

export default function Electronics() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProductsByCategoryId(
          "65527a31376a52ea210d9703"
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
      <RecomHeader title="Recommended Electronics" color="bg-yellow-300 " />
      <div className="carousel carousel-center w-full bg-white shadow-lg rounded-lg">
        {products.map((product) => (
          <Link key={product.id} href={`/ProductDetails/${product.id}`}>
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
          </Link>
        ))}
      </div>
    </div>
  );
}

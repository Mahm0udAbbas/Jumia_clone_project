import React, { useState, useEffect } from "react";
import db, { getProductsByCategoryId } from "../../firebase";
import RecomHeader from "../Product/header";
<<<<<<< HEAD
import MySpinner from "../order/Spiner/Spinner";

=======
>>>>>>> mahmoudhosni
export default function HealthPersonalCare() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProductsByCategoryId(
          "65527c8c376a52ea210d970a"
        );
        setProducts(products);
        setLoading(false);
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
        {!loading ? (
          products.map((product) => (
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
          ))
        ) : (
          <div className="flex justify-center items-center h-[100px] w-full  ">
            <MySpinner />
          </div>
        )}
      </div>
    </div>
  );
}

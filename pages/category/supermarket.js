import React, { useEffect, useState } from "react";
import { firestore } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Breadcrumbs } from "@material-tailwind/react";
import SubCategories from "@/components/Product/subcategories";
import Header from "@/components/Product/header";
import Product from "@/components/Product/product";
import MySpinner from "@/components/order/Spiner/Spinner";
import CatProdList from "@/components/CatProdList/CatProdList";

export default function Supermarket() {
  const [loading, setLoading] = useState(true);
  const imageUrls = [
    "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/24.png",
    " https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/18.png",
    "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/20.png",
    "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/22.png",
    "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/54.png",
    "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/16.png ",
    "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/12.png",
    "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/10.png",
    "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/8.png",
    "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/6.png",
    "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/64.png",
    "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/3.png",
  ];
  const imageUrls1 = [
    "https://eg.jumia.is/cms/Ramadan-24/CATs-UNs/Supermarket/Household-Cleaning/572x250EN.jpg",
    "https://eg.jumia.is/cms/Ramadan-24/CATs-UNs/Supermarket/Household-Cleaning/572x250EN.jpg",
  ];
  const imageUrls2 = [
    "    https://eg.jumia.is/cms/Ramadan-24/CATs-UNs/Supermarket/Feminine-Care/572x250EN.png",
    "https://eg.jumia.is/cms/Ramadan-24/CATs-UNs/Supermarket/Farida/572x250EN.png",
  ];
  const [catProducts, setCatProducts] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const querySnapshot = await getDocs(collection(firestore, "products"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCatProducts(data);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
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
          <a href="/category/supermarket">Supermarket</a>
        </Breadcrumbs>
        <div className="">
          <SubCategories>
            <Header title="Household Supplies" />
            <div className="grid gap-2  grid-cols-2 sm:grid-cols-3  md:grid-cols-6  p-5">
              {imageUrls.map((imageUrl, index) => (
                <div key={index} className="">
                  <Product imageUrl={imageUrl} imageAlt={`img ${index + 1}`} />
                </div>
              ))}
            </div>
          </SubCategories>
          <SubCategories>
            <div className="my-3">
              <Header title="Supermarket Top Deals" />
              <div className="grid gap-2  grid-cols-2   md:grid-cols-2  justify-center items-center p-5">
                {imageUrls1.map((imageUrl, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Product
                      imageUrl={imageUrl}
                      imageAlt={`img ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </SubCategories>
          <SubCategories>
            <div className="my-3">
              <Header title="Check More Deals" />
              <div className="grid gap-2  grid-cols-2   md:grid-cols-2  justify-center items-center p-5">
                {imageUrls2.map((imageUrl, index) => (
                  <div key={index} className="flex items-center justify-center">
                    <Product
                      imageUrl={imageUrl}
                      imageAlt={`img ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </SubCategories>
        </div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12   md:col-span-3">
            <Sidebar />;
          </div>
          <div className=" col-span-12 md:col-span-9 py-2">
            <CatProdList catProducts={catProducts} />
          </div>
        </div>
      </main>
    );
  }
}
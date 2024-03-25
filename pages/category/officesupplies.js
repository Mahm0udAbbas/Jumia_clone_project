import React, { useEffect, useState } from "react";
import { getProductsByCategoryId } from "../../firebase";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Breadcrumbs } from "@material-tailwind/react";
import SubCategories from "@/components/Product/subcategories";
import Header from "@/components/Product/header";
import Product from "@/components/Product/product";
import MySpinner from "@/components/order/Spiner/Spinner";
import CatProdList from "@/components/CatProdList/CatProdList";

export default function OfficeSupplies() {
  const [loading, setLoading] = useState(true);
  const imageUrls = [
    "https://eg.jumia.is/cms/Icons-2022/School/Writing-&-Correction-Supplies.png",
    " https://eg.jumia.is/cms/Icons-2022/School/Note_book.png",
    "https://eg.jumia.is/cms/Icons-2022/School/Math_Materials.png",
    "https://eg.jumia.is/cms/icons-21/260x144/office-school/Printer_Ink_&_Toner.jpg",
  ];
  const imageUrls1 = [
    "https://eg.jumia.is/cms/41-22/UNs-Deals/Stationery/EN/Casio__-_Floor-Desktop_-EN_.png",
    "https://eg.jumia.is/cms/41-22/UNs-Deals/Stationery/EN/_Stationary_Items_-_Floor-Desktop_-EN_.png",
  ];
  const imageUrls2 = [
    "  https://eg.jumia.is/cms/41-22/UNs-Deals/Stationery/EN/__Notes__-_Floor-Desktop_-EN_-(1).png",
    "  https://eg.jumia.is/cms/41-22/UNs-Deals/Stationery/EN/School_Supplies_-_Floor-Desktop_-EN_.png",
  ];
  const [catProducts, setCatProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProductsByCategoryId(
          "6562f3891cf9fca552f8c5ac"
        );
        setCatProducts(products);
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
          <a href="/category/officesupplies">"Office Supplies"</a>
        </Breadcrumbs>
        <div className="">
          <SubCategories>
            <Header title="Office Supplies" />
            <div className="grid gap-2  grid-cols-1 sm:grid-cols-3  md:grid-cols-6  p-5">
              {imageUrls.map((imageUrl, index) => (
                <div key={index} className="">
                  <Product imageUrl={imageUrl} imageAlt={`img ${index + 1}`} />
                </div>
              ))}
            </div>
          </SubCategories>
          <SubCategories>
            <div className="my-3">
              <Header title="Top Deals" />
              <div className="grid gap-2  grid-cols-1   md:grid-cols-2  justify-center items-center p-5">
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
              <div className="grid gap-2  grid-cols-1   md:grid-cols-2  justify-center items-center p-5">
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
            <Sidebar catData="Office Supplies" />;
          </div>
          <div className=" col-span-12 md:col-span-9 ">
            <CatProdList catProducts={catProducts} catData="Office Supplies" />
          </div>
        </div>
      </main>
    );
  }
}

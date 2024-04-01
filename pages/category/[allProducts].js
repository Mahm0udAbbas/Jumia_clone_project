import { getSearch } from "@/firebase";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Sidebar from "@/components/Sidebar/Sidebar";
import { Breadcrumbs } from "@material-tailwind/react";
import CatProdList from "@/components/CatProdList/CatProdList";
import MySpinner from "@/components/order/Spiner/Spinner";

function allProducts() {
  const [loading, setLoading] = useState(true);
  const [allQueryProducts, setAllQueryProducts] = useState([]);
  const convertQuerySnapshotToProducts = Array();
  const router = useRouter();
  const { queryString } = router.query;
  useEffect(() => {
    getSearch(queryString).then((data) => {
      data.map((product) => {
        convertQuerySnapshotToProducts.push(product.data());
      });
      setAllQueryProducts([...convertQuerySnapshotToProducts]);
      setLoading(false);
    });
  }, [queryString])

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
          <a>All Products</a>
        </Breadcrumbs>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-12   md:col-span-3">
            <Sidebar
              catData="All Products"
              setCatProducts={setAllQueryProducts}
            />
          </div>
          <div className=" col-span-12 md:col-span-9 py-2">
            <CatProdList catProducts={allQueryProducts} catData="All Products" />
          </div>
        </div>
      </main>
    );
  }
}

export default allProducts;
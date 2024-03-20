import { firestore } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import CatProdCard from "../card/MyCard";

function CatProdList({ catProducts }) {
  // console.log(catProducts);
  // const [catProducts, setCatProducts] = useState([]);
  // useEffect(() => {
  //   getDocs(collection(firestore, "products")).then((data) =>
  //     setCatProducts(data.docs)
  //   );
  // }, []);
  // console.log(catProducts);
  return (
    <>
      {/* {catProducts.length > 0 ? ( */}
      <div className="bg-white">
        <p className="p-3 tex t-black text-xl">{catProducts[0]?.category}</p>
        <hr />
        <p className="p-3">{catProducts.length} products found</p>
        <hr />
        <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-2 sm:grid-cols-1 sm:gap-1">
          {catProducts.map((product) => {
            return <CatProdCard key={product.id} cardData={product} />;
          })}
        </div>
      </div>
      {/* ) : (
        <div className="flex justify-center items-center ">
          <span className="loading loading-ball text-amber-500 loading-xs"></span>
          <span className="loading loading-ball text-amber-500 loading-sm"></span>
          <span className="loading loading-ball text-amber-500 loading-md"></span>
          <span className="loading loading-ball text-amber-500 loading-lg"></span>
        </div>
      )} */}
    </>
  );
}

export default CatProdList;

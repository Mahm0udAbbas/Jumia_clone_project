import { firestore } from "@/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import CatProdCard from "../card/MyCard";

function CatProdList() {
  const [catProducts, setCatProducts] = useState([]);
  useEffect(() => {
    getDocs(collection(firestore, "products")).then((data) => setCatProducts(data.docs))
  }, []);
  return (
    <>
      {
        catProducts.length > 0 ?
          <div className="bg-white">
            <p className="p-3 text-black text-xl">{catProducts[0]?.data().category}</p>
            <hr/>
            <p className="p-3">{catProducts.length} products found</p>
            <hr/>
            <div className="grid lg:grid-cols-4 lg:gap-4 md:grid-cols-2 md:gap-2 sm:grid-cols-1 sm:gap-1">
              {
                catProducts.map((data) => {
                  let product = data.data();
                  return <CatProdCard key={data.id} data={product} />
                })
              }
            </div>
          </div> 
          : 
          <div className="flex justify-center items-center ">
            <span className="loading loading-ball text-amber-500 loading-xs"></span>
            <span className="loading loading-ball text-amber-500 loading-sm"></span>
            <span className="loading loading-ball text-amber-500 loading-md"></span>
            <span className="loading loading-ball text-amber-500 loading-lg"></span>
          </div>
      }
      </>
  )
}

export default CatProdList

import React, { useState, useEffect } from "react";
import { getProductsByCategoryId } from "../../firebase";

export default function PriceFilter({ value, setCatProducts, catId }) {
  // Receive value as a prop
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData(value); // Pass value to getData
  }, [value]); // Make useEffect re-run when value changes

  async function getData(value) {
    // Receive value as a parameter
    try {
      const productsData = await getProductsByCategoryId(catId);
      let data = productsData.filter(
        (product) => product.price >= value[0] && product.price <= value[1]
      ); // Filter products based on price range
      console.log(data);
      setCatProducts(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return <div></div>;
}

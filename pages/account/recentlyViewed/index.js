import { AccountPageLayout } from "@/layouts/AccountLayout";
import CatProdList from "@/components/CatProdList/CatProdList";
import React from "react";

function RecentlyViewed({ catProducts }) {
  return (
    <div>
      <CatProdList catProducts={catProducts} />
    </div>
  );
}

export default RecentlyViewed;
RecentlyViewed.getLayout = AccountPageLayout;

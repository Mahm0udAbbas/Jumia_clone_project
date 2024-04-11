import { AccountPageLayout } from "@/layouts/AccountLayout";
import React from "react";
// import { DeleteForeverIcon } from "react-icons/ai";
import FavCard from "@/components/FavCard/FavCard";

function SavedItem() {
  return (
    <>
      <div className="box-border sm:flex-col">
        <header className="py-2 px-4 font-bold">
          Saved Items ("number of fav product")
        </header>
        <div>
          <FavCard />
        </div>
      </div>
    </>
  );
}

export default SavedItem;
SavedItem.getLayout = AccountPageLayout;

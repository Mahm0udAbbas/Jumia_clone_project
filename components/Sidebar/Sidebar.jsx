import React, { useState } from "react";
import Category from "./Category";
import NestedCat from "./NestedCat";
import List from "./List";
import ListItem from "./ListItem";
import RangeSlider from "./RangeSlider";
import RatingFilter from "./RatingFilter";

export default function Sidebar({
  catData,
  subCats,
  setCatProducts,
  id,
  subCatId,
}) {
  const checkedItems = false;
  const handleChange = (id) => {
    checkedItems != checkedItems;
  };
  return (
    <div>
      <Category>
        <NestedCat>CATEGORY</NestedCat>
        <List>
          <NestedCat>{catData}</NestedCat>
          {subCats
            ? subCats.map((category, index) => (
                <ListItem key={index}>{category}</ListItem>
              ))
            : ""}
        </List>
        <br />
        <hr />
        <RangeSlider
          setCatProducts={setCatProducts}
          catId={id}
          subCatId={subCatId}
        />
        <List
          style={{
            maxHeight: "100px",
            overflowY: "scroll",
            scrollbarColor: "#d4d4d6 transparent",
            scrollbarWidth: "thin",
            marginTop: "10px",
          }}
        ></List>
        <br />
        <hr />
        <NestedCat>PRODUCT RATING</NestedCat>
        <List>
          <RatingFilter
            setCatProducts={setCatProducts}
            catId={id}
            subCatId={subCatId}
          />
        </List>
      </Category>
    </div>
  );
}

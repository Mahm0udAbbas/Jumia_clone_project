import React from "react";
import Category from "./Category";
import NestedCat from "./NestedCat";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import CatFilter from "./CatFilter";
import RangeSlider from "./RangeSlider";
import RatingFilter from "./RatingFilter";

export default function Sidebar() {
  const CheckboxOptions = [
    { id: "Checkbox1", value: "option1", text: "Option 1" },
    { id: "Checkbox2", value: "option2", text: "Option 2" },
    { id: "Checkbox3", value: "option3", text: "Option 3" },
    { id: "Checkbox4", value: "option4", text: "Option 4" },
    { id: "Checkbox5", value: "option5", text: "Option 5" },
    { id: "Checkbox6", value: "option6", text: "Option 6" },
    { id: "Checkbox7", value: "option7", text: "Option 7" },
    { id: "Checkbox8", value: "option8", text: "Option 8" },
    { id: "Checkbox9", value: "option9", text: "Option 9" },
    { id: "Checkbox10", value: "option10", text: "Option 10" },
  ];

  const PERCENTAGE = [
    { id: "50", value: "50%", text: "50% or more" },
    { id: "40", value: "40%", text: "40% or more" },
    { id: "30", value: "30%", text: "30% or more" },
    { id: "20", value: "20%", text: "20% or more" },
    { id: "10", value: "10%", text: "10% or more" },
  ];


  const checkedItems = false;
  const handleChange = (id) => {
    checkedItems != checkedItems;
  };

  return (
    <div>
      <Category>
        <NestedCat>CATEGORY</NestedCat>
        <List>
          <CatFilter />
        </List>
        <br />
        <hr />
        <RangeSlider />
        <br />
        <hr />
        <NestedCat>BRAND</NestedCat>
        <Search />
        <List
          style={{
            maxHeight: "100px",
            overflowY: "scroll",
            scrollbarColor: "#d4d4d6 transparent",
            scrollbarWidth: "thin",
            marginTop: "10px",
          }}
        >
          {CheckboxOptions.map((option, index) => (
            <ListItem key={index}>
              <Checkbox
                id={option.id}
                value={option.value}
                text={option.text}
                checked={checkedItems[option.id]}
              />
            </ListItem>
          ))}
        </List>
        <br />
        <hr />
        <NestedCat>DISCOUNT</NestedCat>
        <Checkbox
          key="10"
          name="checkGroup"
          id="10"
          value="Show only discounted items"
          text="Show only discounted items"
        />
        <br />
        <hr />
        <NestedCat>DISCOUNT PERCENTAGE</NestedCat>
        <List>
          {PERCENTAGE.map((option, index) => (
            <Radio
              key={index}
              name="Group1"
              id={option.id}
              value={option.value}
              text={option.text}
            />
          ))}
        </List>
        <br />
        <hr />
        <NestedCat>PRODUCT RATING</NestedCat>
        <List>
            <RatingFilter />
        </List>
      </Category>
    </div>
  );
}

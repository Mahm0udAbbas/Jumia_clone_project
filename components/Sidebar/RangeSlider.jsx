import React, { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";
import styles from "../../styles/RangeSlider.module.css";
import { Button } from "@material-tailwind/react";
import { filterPrice } from "@/firebase";

function valuetext(value) {
  return `${value}`;
}

export default function RangeSlider(catProducts) {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (index) => (event) => {
    const newValue = parseInt(event.target.value);
    const updatedValue = [...value];
    updatedValue[index] = newValue;
    setValue(updatedValue);
  };

  return (
    <>
      <Box className="px-10">
        <Slider
          getAriaLabel={() => "Price range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={valuetext}
          color="warning"
          max={0}
          min={50000}
        />
        <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Input
            className={`${styles.Input}`}
            type="number"
            value={value[0]}
            onChange={handleInputChange(0)}
            inputProps={{
              "aria-label": "Start Point",
              style: { textAlign: "center" },
            }}
          />
          <p>_</p>
          <Input
            className={`${styles.Input}`}
            type="number"
            value={value[1]}
            onChange={handleInputChange(1)}
            inputProps={{
              "aria-label": "End Point",
              style: { textAlign: "center" },
            }}
          />
        </Box>
        <Button
          size="sm"
          color="amber"
          variant="outlined"
          className="text-red-700 rounded-none flex mt-5"
          onClick={() => filterPrice(catProducts, value)}
        >
          Apply
        </Button>
      </Box>
    </>
  );
}

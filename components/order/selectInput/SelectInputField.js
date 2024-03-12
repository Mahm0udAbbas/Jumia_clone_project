import { Label, Select } from "flowbite-react";
import { useState } from "react";
function SelectInputField({ governorates, lableValue, value, onChange, name }) {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="countries" value={lableValue} />
      </div>
      <Select
        id="countries"
        variant="outlined"
        color="error"
        name={name}
        value={value}
        onChange={onChange}
        required
        className="rounded-lg  border-grey-500    focus:border-red-900   "
      >
        {governorates.map((governorate) => {
          return <option key={governorate}>{governorate}</option>;
        })}
      </Select>
    </div>
  );
}

export default SelectInputField;

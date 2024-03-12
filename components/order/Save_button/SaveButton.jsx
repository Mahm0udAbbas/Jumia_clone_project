import { Button } from "@material-tailwind/react";

function SaveButton({ handleSubmit, label, color }) {
  return (
    <div>
      <Button
        color={color}
        className="font-semibold uppercase rounded w-full text-white "
        onClick={() => handleSubmit()}
      >
        {label}
      </Button>
    </div>
  );
}

export default SaveButton;

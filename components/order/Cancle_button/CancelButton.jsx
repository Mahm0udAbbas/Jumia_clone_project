import { Button } from "@material-tailwind/react";

function CancelButton({ handleSubmit }) {
  return (
    <div>
      <Button
        color="yellow"
        className="me-2 font-bold text-yellow-500 uppercase bg-grey-1 enabled:hover:bg-red-100 hover:text-white border-none rounded "
        onClick={() => handleSubmit()}
      >
        Cancel
      </Button>
    </div>
  );
}

export default CancelButton;

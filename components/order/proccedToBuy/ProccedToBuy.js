"use client";
import { Card } from "@material-tailwind/react";
// import { Card } from "flowbite-react";
import SaveButton from "../Save_button/SaveButton";
function ProccedToBuy({ cartProducts }) {
  let total = Number();
  // console.log(cartProducts);
  function handleSubmit() {
    console.log("submit");
  }
  return (
    <>
      <Card className="p-6">
        <div>
          <h5 className=" border-b-2 py-1 font-semibold text-sm ">
            Order summary
          </h5>
          <div className=" border-b-2 py-1 text-sm">
            <div className="flex flex-row justify-between items-center py-1  ">
              <p className="">Items total ({cartProducts.length})</p>
              <p className="font-semibold  ">
                {cartProducts.map((product, index) => {
                  total += product.product?.price * product.quantity;
                })}
                EGP {total}
              </p>
            </div>
            <div className="flex flex-row justify-between items-center py-1 ">
              <span>Delivery fees</span>
              <span className="font-semibold ">EGP 35</span>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-2">
            <span className="text-sm capitalize  font-medium">total</span>
            <span className="text-xl">EGP {total}</span>
          </div>
          <div>
            <SaveButton
              label="confirm order"
              handleSubmit={handleSubmit}
              color="amber"
            />
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProccedToBuy;

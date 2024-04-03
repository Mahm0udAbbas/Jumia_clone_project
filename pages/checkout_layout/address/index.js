"use client";
import Delivery from "@/components/order/DeliveryDetails/Delivery";
import EditAdressForm from "@/components/order/EditAdressForm/EditAdressForm";
import PaymentMethod from "@/components/order/PaymentMethod/PaymentMethod";
import { CheckPageLayout } from "../../../layouts/checkoutLayout";

function Adress({ setAddressConfirm }) {
  console.log("hi");
  return (
    <>
      <div>
        <EditAdressForm setAddressConfirm={setAddressConfirm} />
      </div>
      <div className="text-grey-100">
        <Delivery />
      </div>
      <div className="text-grey-100">
        <PaymentMethod />
      </div>
    </>
  );
}

export default Adress;
Adress.getLayout = CheckPageLayout;

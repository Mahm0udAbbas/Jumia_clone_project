"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { Alert } from "@mui/material";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useState } from "react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  );
}
function Paypal() {
  const [success, setSuccess] = useState(false);
  const [cancelled, setCancelled] = useState(false);
  // const paypalCreateOrder = async () => {
  //   try {
  //     let response = await axios.post("/api/paypal/createorder", {
  //       user_id: "aaaaa",
  //       order_price: "12",
  //     });
  //     return response.data.data.order.order_id;
  //   } catch (err) {
  //     return null;
  //   }
  // };
  // const paypalCaptureOrder = async (orderID) => {
  //   try {
  //     let response = await axios.post("/api/paypal/captureorder", {
  //       orderID,
  //     });
  //     if (response.data.success) {
  //     }
  //   } catch (err) {
  //     console.log("error is :" + err);
  //   }
  // };
  console.log(success);
  return (
    <>
      {" "}
      {
        // success === true ? (
        // <div flex justify-center container mx-auto>
        <div className="flex flex-col items-center justify-center ">
          <Alert
            icon={<CheckIcon />}
            className={
              success
                ? "rounded-none border-l-4 border-green-500 bg-green-500/10 font-medium text-green-500 my-8"
                : "hidden"
            }
          >
            Your Payment has been done Successfully
          </Alert>
        </div>
        // ) : (
        // ""
        // )
      }
      <div className="flex justify-center  container mx-auto  ">
        <Card className="w-full max-w-[26rem] shadow-lg h-fit my-3 overflow-hidden">
          <div className=" text-center  text-2xl uppercase font-bold bg-amber-500 text-white p-2   ">
            <header> Your Order Data</header>
          </div>
          <CardHeader floated={false} color="blue-gray">
            <img src="https://placehold.co/600x400" alt="ui/ux review check" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 " />
          </CardHeader>
          <CardBody>
            <div className="mb-3 flex items-center justify-between">
              <Typography
                variant="h5"
                color="blue-gray"
                className="font-medium"
              >
                Wooden House, Florida
              </Typography>
            </div>
            <Typography color="gray">
              Enter a freshly updated and thoughtfully furnished peaceful home
              surrounded by ancient trees, stone walls, and open meadows.
            </Typography>
            <Typography color="gray">
              <span>
                <span className="flex justify-between  my-2">
                  <span className="uppercase font-meduim text-lg">
                    Quantity
                  </span>
                  <span className="text-gray-500">2</span>
                </span>
                <span className="flex justify-between my-2 ">
                  <span className="uppercase font-meduim text-lg">Price</span>
                  <span className="text-gray-500">1500 EGP</span>
                </span>
              </span>
            </Typography>
          </CardBody>

          <CardFooter className="pt-3">
            <PayPalScriptProvider
              options={{
                clientId:
                  "Abfv8kkW0QrUOwA_Yc0_zwxYqJAjW9wVbhHK1F5onkEH4xm1n5BJn01pifr-sMGB875gWv6hZWzQzl8i",
              }}
            >
              <PayPalButtons
                style={{ color: "gold", layout: "vertical", label: "pay" }}
                createOrder={async () => {
                  const res = await fetch("/api/checkout", {
                    method: "POST",
                  });
                  const order = await res.json();
                  console.log(order);
                  return order.id;
                }}
                onApprove={(data, actions) => {
                  // return actions.order.capture().then(function (details) {
                  console.log(data);
                  setSuccess(true);
                  // });
                }}
                onCancel={(data, actions) => {
                  setCancelled(true);
                  console.log("canclled");
                  console.log(cancelled);
                }}
              />
            </PayPalScriptProvider>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}

export default Paypal;
// export const PaymentPage = (page) => page;
// Paypal.getLayout = PaymentPage;

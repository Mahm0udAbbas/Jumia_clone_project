"use client";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { Details } from "@mui/icons-material";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import axios from "axios";
import { useState } from "react";
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
  return (
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
            <Typography variant="h5" color="blue-gray" className="font-medium">
              Wooden House, Florida
            </Typography>
          </div>
          <Typography color="gray">
            <div>
              Enter a freshly updated and thoughtfully furnished peaceful home
              surrounded by ancient trees, stone walls, and open meadows.
            </div>
          </Typography>
          <Typography color="gray">
            <div>
              <span className="flex justify-between  my-2">
                <span className="uppercase font-meduim text-lg">Quantity</span>
                <span className="text-gray-500">2</span>
              </span>
              <span className="flex justify-between my-2 ">
                <span className="uppercase font-meduim text-lg">Price</span>
                <span className="text-gray-500">1500 EGP</span>
              </span>
            </div>
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
                const res = await fetch("/api/checkout", { method: "POST" });
                const order = await res.json();
                console.log(order);
                return order.id;
              }}
              onApprove={(data, actions) => {
                console.log(data);
              }}
              onCancel={(data, actions) => {
                setCancelled(true);
                console.log("canclled");
              }}
            />
          </PayPalScriptProvider>
        </CardFooter>
      </Card>
    </div>
  );
}

export default Paypal;
// export const PaymentPage = (page) => page;
// Paypal.getLayout = PaymentPage;

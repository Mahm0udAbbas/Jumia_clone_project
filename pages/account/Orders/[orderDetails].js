import { AccountPageLayout } from "@/components/Account_Layout";
import { auth, fetchOrderDetails, firestore } from "@/firebase";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "@mui/material";
import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export const getServerSideProps = async (context) => {
  console.log(context.params);
  const { orderDetails } = context.params;
  console.log("get User ID :" + orderDetails);

  try {
    const orderObject = await fetchOrderDetails(orderDetails);
    return {
      props: { orderObject },
    };
  } catch (e) {
    console.log("the error is :" + e);
    return {
      props: { product: null },
    };
  }
};
function OrderDetails({ orderObject }) {
  //   const [localOrders, setLocalOrders] = useState("");
  useEffect(() => {
    // setLocalOrders(orderObject);
  }, []);
  const router = useRouter();
  let total = Number();

  // go TO Order History Page
  function goToOrderHistory() {
    router.push("/account/Orders/trackItem");
  }

  // Cancel Order
  async function cancelOrder() {
    let updatedData;
    const orderDetailsRef = collection(firestore, "order-details");
    const q = query(
      orderDetailsRef,
      where("userId", "==", auth.currentUser.uid)
    );
    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        console.log(docData);
        updatedData = {
          ...docData,
          status: "canceled",
        }; // You can set the default method here

        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, updatedData);
      }
      //   router.push("/checkout_layout/payment-methods");
    } catch (error) {
      console.log("Error navigating to payment:" + error);
    }
    alert("Cancelling order");
  }

  const [orderProducts] = orderObject.orders.map((item) => item.items);
  // get Total
  orderProducts.map((product) => {
    console.log(product.product);
    return (total += product.product.price * product.quantity);
  });
  return (
    <div className="p-3">
      <Link
        href="/account/Orders"
        className="text-xl font-bold no-underline text-black"
      >
        <header className="flex items-center py-2">
          <KeyboardBackspaceIcon className="me-2" />
          <span className="text-xl font-bold">Order Details</span>
        </header>
      </Link>
      <hr></hr>
      <div className="py-2 text-gray-500 text-sm">
        <p className="mb-1">{orderObject.orders.length} items</p>
        <p className="mb-1">placed on {orderObject.timeStamp}</p>
        <p>Total:EGP {total} </p>
      </div>
      <hr></hr>
      <p className="font-semibold  py-2  capitalize">items in your order</p>
      <div className="py-2">
        {orderObject.orders.map((order, index) => {
          return order.items.map((item, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center p-3 border my-2 flex-col md:flex-row"
              >
                <img
                  src={item.product.thumbnail}
                  width={100}
                  height={100}
                  className="p-2"
                />
                <div className="flex-1 p-2 ">
                  <p className="font-semibold text-lg py-1">
                    {item.product.en.title}
                  </p>
                  <p
                    className={`text-white ${
                      order.status === "order-placed"
                        ? "bg-blue-800"
                        : order.status === "deliverd"
                        ? "bg-green-700"
                        : order.status === "canceled"
                        ? "bg-red-500"
                        : "bg-blue-500"
                    }
                   w-fit py-1 px-2 rounded-md text-sm`}
                  >
                    {order.status}
                  </p>
                  <div className="flex  items-center  text-gray-500  py-1 px-2  text-sm">
                    <p className="me-4">Qty : {item.quantity}</p>
                    <p>EGP: {item.product.price}</p>
                  </div>
                  <p className="py-1 text-sm text-gray-500">
                    deliverd in 3 Days from {order.timestamp}
                  </p>
                </div>
                <div className="p-2  flex flex-col justify-between items-center">
                  <div className="mb-10">
                    <button
                      disabled={order.status === "canceled"}
                      onClick={goToOrderHistory}
                      className={`${
                        order.status === "canceled"
                          ? "bg-gray-100 text-black   text-sm  rounded-md py-3 px-4 no-underline  uppercase cursor-not-allowed"
                          : "text-white  text-sm bg-amber-500 rounded-md py-3 px-4 no-underline  uppercase hover:bg-amber-400"
                      }`}
                    >
                      Track My Item
                    </button>
                  </div>
                  <div>
                    <button
                      disabled={orderObject.status === "canceled"}
                      onClick={cancelOrder}
                      className={`${
                        orderObject.status === "canceled"
                          ? "bg-gray-100 text-black   text-sm  rounded-md py-3 px-4 no-underline  uppercase cursor-not-allowed"
                          : "text-white  text-sm bg-amber-500 rounded-md py-3 px-4 no-underline  uppercase hover:bg-amber-400"
                      }`}
                    >
                      Cancel Oreder
                    </button>
                  </div>
                </div>
              </div>
            );
          });
        })}
      </div>

      <hr></hr>
      <div className="py-3 grid gap-4 grid-cols-1 md:grid-cols-2 ">
        <div className="border rounded-lg ">
          <header className="font-bold capitalize text-lg border-b py-2 px-3">
            payment information
          </header>
          <div className="mt-3 mb-5 py-2 px-3 capitalize">
            <p className="  font-semibold mb-2">payment method</p>
            <p className="text-sm text-gray-500 ">
              {orderObject.paymentMethod == "cash"
                ? "cash on delivery"
                : "pay by card"}
            </p>
          </div>
          <div className="mt-3 mb-5 py-2 px-3 capitalize">
            <p className="  font-semibold mb-2">payment details</p>
            <div className="text-sm text-gray-500 ">
              <p className="mb-1">item total :EGP{total}</p>
              <p className="mb-1">delivery fees :EGP 35.00</p>
              <p>total : {total + 35}</p>
            </div>
          </div>
        </div>
        <div className="border rounded-lg ">
          <header className="font-bold capitalize text-lg border-b py-2 px-3">
            delivery information
          </header>
          <div className="mt-3 mb-5 py-2 px-3 capitalize">
            <p className="  font-semibold mb-2">delivery method</p>
            <p className="text-sm text-gray-500 ">
              {orderObject.orderDetails.deliveryMethod == "express"
                ? "Door delivery"
                : "Pick Up Station"}
            </p>
          </div>
          <div className="mt-3 mb-5 py-2 px-3 capitalize">
            <p className="  font-semibold mb-2">shipping adress</p>
            <div className="text-sm text-gray-500 ">
              <p className="mb-1">{`${orderObject.orderDetails.shippingAddress.firstName} ${orderObject.orderDetails.shippingAddress.lastName}`}</p>
              <p className="mb-1">{` ${orderObject.orderDetails.shippingAddress.region} ${orderObject.orderDetails.shippingAddress.city}`}</p>
              <p className="mb-1">{` ${orderObject.orderDetails.shippingAddress.additionalInfo} `}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails;
OrderDetails.getLayout = AccountPageLayout;

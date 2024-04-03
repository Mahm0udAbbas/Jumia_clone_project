import { AccountPageLayout } from "@/components/Account_Layout";
import MySpinner from "@/components/order/Spiner/Spinner";
import { CancelOrderById, fetchOrderDetails, getOrderById } from "@/firebase";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { Link } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export const getServerSideProps = async (context) => {
  console.log(context.params);
  const { orderId, userId } = context.params;
  console.log("get User ID :" + userId);
  console.log("get Order ID :" + orderId);

  try {
    const orderObject = await getOrderById(userId, orderId);
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
  const [orderDetails, setOrderDetails] = useState(null);
  let total = Number();
  const router = useRouter();
  console.log(orderObject);
  useEffect(() => {
    async function getData() {
      setOrderDetails(await fetchOrderDetails(router.query.userId));
    }
    getData();
  }, [router.query]);
  console.log(orderDetails);
  // go TO Order History Page
  function goToOrderHistory() {
    router.push(
      `/account/Orders/trackItem/${router.query.userId}/${router.query.orderId}`
    );
  }

  // get Total
  orderObject.items.map((product) => {
    return (total += product.product.price * product.quantity);
  });
  if (orderDetails == null) {
    <MySpinner />;
  } else {
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
          <p className="mb-1">{orderObject.length} items</p>
          <p className="mb-1">placed on {orderObject.timestamp}</p>
          <p>Total:EGP {total} </p>
        </div>
        <hr></hr>
        <p className="font-semibold  py-2  capitalize">items in your order</p>
        <div className="py-2">
          {orderObject.items.map((order, index) => {
            return (
              <div
                key={index}
                className="flex justify-between items-center p-3 border my-2 flex-col md:flex-row"
              >
                <img
                  src={order.product.thumbnail}
                  width={100}
                  height={100}
                  className="p-2"
                />
                <div className="flex-1 p-2 ">
                  <p className="font-semibold text-lg py-1">
                    {order.product.en.title}
                  </p>
                  <p
                    className={`text-white ${
                      orderObject.status === "orderObject-placed"
                        ? "bg-blue-800"
                        : orderObject.status === "deliverd"
                        ? "bg-green-700"
                        : orderObject.status === "Cancelled"
                        ? "bg-red-500"
                        : "bg-blue-500"
                    }
                     w-fit py-1 px-2 rounded-md text-sm`}
                  >
                    {orderObject.status}
                  </p>
                  <div className="flex  items-center  text-gray-500  py-1 px-2  text-sm">
                    <p className="me-4">Qty : {order.quantity}</p>
                    <p>EGP: {order.product.price}</p>
                  </div>
                  <p className="py-1 text-sm text-gray-500">
                    deliverd in 3 Days from {orderObject.timestamp}
                  </p>
                </div>
                <div className="p-2  flex flex-col justify-between items-center">
                  <div className="mb-10">
                    <button
                      disabled={order.status === "Cancelled"}
                      onClick={goToOrderHistory}
                      className={`${
                        order.status === "Cancelled"
                          ? "bg-gray-100 text-black   text-sm  rounded-md py-3 px-4 no-underline  uppercase cursor-not-allowed"
                          : "text-white  text-sm bg-amber-500 rounded-md py-3 px-4 no-underline  uppercase hover:bg-amber-400"
                      }`}
                    >
                      Track My Item
                    </button>
                  </div>
                  <div>
                    <button
                      disabled={orderObject.status === "Cancelled"}
                      onClick={() => {
                        CancelOrderById(
                          router.query.userId,
                          router.query.orderId
                        );
                      }}
                      className={`${
                        orderObject.status === "Cancelled"
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
                {orderDetails.deliveryMethod == "express"
                  ? "Door delivery"
                  : "Pick Up Station"}
              </p>
            </div>
            <div className="mt-3 mb-5 py-2 px-3 capitalize">
              <p className="  font-semibold mb-2">shipping adress</p>
              <div className="text-sm text-gray-500 ">
                <p className="mb-1">{`${orderDetails.shippingAddress.firstName} ${orderDetails.shippingAddress.lastName}`}</p>
                <p className="mb-1">{` ${orderDetails.shippingAddress.city} ${orderDetails.shippingAddress.region}`}</p>
                <p className="mb-1">{` ${orderDetails.shippingAddress.additionalInfo} `}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderDetails;
OrderDetails.getLayout = AccountPageLayout;

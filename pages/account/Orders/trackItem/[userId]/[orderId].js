// "use client";

import { Timeline } from "flowbite-react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { AccountPageLayout } from "@/layouts/AccountLayout";
import { getOrderById } from "@/firebase";
import { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MySpinner from "@/components/order/Spiner/Spinner";
import Link from "next/link";
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
function TrackItem({ orderObject }) {
  const [orderDetails, setOrderDetails] = useState();
  //   useEffect(() => {
  //     // const unsubscribe = onAuthStateChanged(auth, async (user) => {
  //     //   setOrderDetails(await fetchOrderDetails(user.uid));
  //     // });
  //     // return () => {
  //     //   unsubscribe();
  //     };
  //   });
  console.log(orderObject);
  if (orderObject) {
    return (
      <div className="p-4">
        <Link href={`/account/Orders`}>
          <header className="flex items-center py-2">
            <KeyboardBackspaceIcon className="me-2" />
            <span className="text-xl font-bold">Order History</span>
          </header>
        </Link>
        <hr></hr>
        <br></br>
        {orderObject.status === "Cancelled" ? (
          <CancelledOrder time={orderObject.timestamp} />
        ) : (
          <Timeline>
            <>
              <Timeline.Item>
                <Timeline.Content>
                  <Timeline.Point icon={FiberManualRecordIcon} />
                  <Timeline.Title
                    className={`text-white font-normal text-sm px-3 py-1 ${
                      orderObject.status === "order-placed"
                        ? "bg-blue-900"
                        : " bg-gray-200"
                    }  w-fit rounded-lg`}
                  >
                    Order Palced
                  </Timeline.Title>
                  <Timeline.Time>{orderObject.timestamp}</Timeline.Time>
                  <Timeline.Body>order placed</Timeline.Body>
                </Timeline.Content>
              </Timeline.Item>
            </>
            <Timeline.Item>
              <Timeline.Point icon={FiberManualRecordIcon} />
              <Timeline.Content>
                <Timeline.Title
                  className={`text-white font-normal text-sm px-3 py-1 ${
                    orderObject.status === "pending-confirmation"
                      ? "bg-blue-900"
                      : " bg-gray-200"
                  }  w-fit rounded-lg`}
                >
                  pending confirmation
                </Timeline.Title>
                <Timeline.Time>{orderObject.timestamp}</Timeline.Time>
                <Timeline.Body>
                  {orderObject.status === "pending-confirmation"
                    ? "Your order is currently being processed, and we will notify you once the item has been shipped."
                    : orderObject.status === "shipped" ||
                      orderObject.status === "out-for-delivery" ||
                      orderObject.status === "deliverd"
                    ? "confirmed"
                    : ""}
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={FiberManualRecordIcon} />
              <Timeline.Content>
                <Timeline.Title
                  className={`text-white font-normal text-sm px-3 py-1 ${
                    orderObject.status === "shipped"
                      ? "bg-blue-900"
                      : " bg-gray-200"
                  }  w-fit rounded-lg`}
                >
                  Shipped
                </Timeline.Title>
                <Timeline.Time>April 2022</Timeline.Time>
                <Timeline.Body>
                  {orderObject.status === "shipped"
                    ? "Your order is currently being shipped, and we will notify you once the item is out for delivery."
                    : orderObject.status === "out-for-delivery" ||
                      orderObject.status === "deliverd"
                    ? "shipped"
                    : ""}
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={FiberManualRecordIcon} />
              <Timeline.Content>
                <Timeline.Title
                  className={`text-white font-normal text-sm px-3 py-1 ${
                    orderObject.status === "out-for-delivery"
                      ? "bg-blue-900"
                      : " bg-gray-200"
                  }  w-fit rounded-lg`}
                >
                  out for delivery
                </Timeline.Title>
                <Timeline.Time>April 2022</Timeline.Time>
                <Timeline.Body>
                  {orderObject.status === "out-for-delivery"
                    ? "Your order is currently out for delivery."
                    : orderObject.status === "deliverd"
                    ? "Deliverd"
                    : ""}
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
            <Timeline.Item>
              <Timeline.Point icon={FiberManualRecordIcon} />
              <Timeline.Content>
                <Timeline.Title
                  className={`text-white font-normal text-sm px-3 py-1 ${
                    orderObject.status === "delivered"
                      ? "bg-blue-300"
                      : " bg-gray-200"
                  }  w-fit rounded-lg`}
                >
                  delivered
                </Timeline.Title>
                <Timeline.Time>April 2022</Timeline.Time>
                <Timeline.Body>
                  {orderObject.status === "deliverd"
                    ? "Your order is deliverd successfully."
                    : ""}
                </Timeline.Body>
              </Timeline.Content>
            </Timeline.Item>
          </Timeline>
        )}
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-screen">
        <MySpinner />
      </div>
    );
  }
}

export default TrackItem;
TrackItem.getLayout = AccountPageLayout;

function CancelledOrder({ time }) {
  return (
    <Timeline>
      <Timeline.Item>
        <Timeline.Content>
          <Timeline.Point icon={FiberManualRecordIcon} />
          <Timeline.Title
            className="text-white font-normal text-sm px-3 py-1 
        bg-red-500
        w-fit rounded-lg"
          >
            Cancelled
          </Timeline.Title>
          <Timeline.Time>{time}</Timeline.Time>
          <Timeline.Body>Cancelled</Timeline.Body>
        </Timeline.Content>
      </Timeline.Item>
    </Timeline>
  );
}

import { Timeline } from "flowbite-react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { AccountPageLayout } from "@/layouts/AccountLayout";
import { onAuthStateChanged } from "firebase/auth";
import { auth, fetchOrderDetails } from "@/firebase";
import { useEffect, useState } from "react";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import MySpinner from "@/components/order/Spiner/Spinner";
import Link from "next/link";
function TrackItem() {
  const [orderDetails, setOrderDetails] = useState();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setOrderDetails(await fetchOrderDetails(user.uid));
    });
    return () => {
      unsubscribe();
    };
  });
  console.log(orderDetails);
  if (orderDetails) {
    return (
      <div className="p-4">
        <Link href={`/account/Orders/${orderDetails.orderDetails.userId}`}>
          <header className="flex items-center py-2">
            <KeyboardBackspaceIcon className="me-2" />
            <span className="text-xl font-bold">Order History</span>
          </header>
        </Link>
        <hr></hr>
        <br></br>
        <Timeline>
          <Timeline.Item>
            <Timeline.Point icon={FiberManualRecordIcon} />
            <Timeline.Content>
              <Timeline.Title
                className={`text-white font-normal text-sm px-3 py-1 ${
                  orderDetails.status === "order-placed"
                    ? "bg-blue-900"
                    : " bg-gray-200"
                }  w-fit rounded-lg`}
              >
                Order Palced
              </Timeline.Title>
              <Timeline.Time>{orderDetails.timeStamp}</Timeline.Time>
              <Timeline.Body>order placed</Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={FiberManualRecordIcon} />
            <Timeline.Content>
              <Timeline.Title
                className={`text-white font-normal text-sm px-3 py-1 ${
                  orderDetails.status === "pending-confirmation"
                    ? "bg-blue-900"
                    : " bg-gray-200"
                }  w-fit rounded-lg`}
              >
                pending confirmation
              </Timeline.Title>
              <Timeline.Time>{orderDetails.timeStamp}</Timeline.Time>
              <Timeline.Body>
                {orderDetails.status === "pending-confirmation"
                  ? "Your order is currently being processed, and we will notify you once the item has been shipped."
                  : orderDetails.status === "shipped" ||
                    orderDetails.status === "out-for-delivery" ||
                    orderDetails.status === "deliverd"
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
                  orderDetails.status === "shipped"
                    ? "bg-blue-900"
                    : " bg-gray-200"
                }  w-fit rounded-lg`}
              >
                Shipped
              </Timeline.Title>
              <Timeline.Time>April 2022</Timeline.Time>
              <Timeline.Body>
                {orderDetails.status === "shipped"
                  ? "Your order is currently being shipped, and we will notify you once the item is out for delivery."
                  : orderDetails.status === "out-for-delivery" ||
                    orderDetails.status === "deliverd"
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
                  orderDetails.status === "out-for-delivery"
                    ? "bg-blue-900"
                    : " bg-gray-200"
                }  w-fit rounded-lg`}
              >
                out for delivery
              </Timeline.Title>
              <Timeline.Time>April 2022</Timeline.Time>
              <Timeline.Body>
                {orderDetails.status === "out-for-delivery"
                  ? "Your order is currently out for delivery."
                  : orderDetails.status === "deliverd"
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
                  orderDetails.status === "delivered"
                    ? "bg-blue-300"
                    : " bg-gray-200"
                }  w-fit rounded-lg`}
              >
                delivered
              </Timeline.Title>
              <Timeline.Time>April 2022</Timeline.Time>
              <Timeline.Body>
                {orderDetails.status === "deliverd"
                  ? "Your order is deliverd successfully."
                  : ""}
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
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

import React, { useState, useEffect, createContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { firestore, auth } from "../../../firebase"; // Assuming you have access to auth
import OrderData from "./OrderData";
import { AccountPageLayout } from "@/layouts/AccountLayout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
// import { AccountPageLayout } from "@/components/Account_Layout";

export const MyDataContext = createContext();
export default function PendingReviews() {
  const [orderDocs, setOrderDocs] = useState([]);
  const [userOrders, setUserOrders] = useState([]);

  useEffect(() => {
    // Get all orders Documents.
    getDocs(collection(firestore, "order-details"))
      .then((data) => {
        setOrderDocs([...data.docs]);
      })
      .catch((err) => {
        console.error("Error fetching order details:", err);
      });
  }, []);
  useEffect(() => {
    const fetchUserOrders = async () => {
      for (const order of orderDocs) {
        const userID = order.data().userId;
        if (userID === auth.currentUser.uid) {
          const data = await getDocs(collection(order.ref, "orders"));
          const ordersData = data.docs.map((doc) => doc.data());
          setUserOrders((prevOrders) => [...prevOrders, ...ordersData]);
        } else {
          console.log("User ID does not match");
        }
      }
    };
    if (orderDocs.length > 0) {
      fetchUserOrders();
    }
  }, [orderDocs]);

  return (
    <MyDataContext.Provider value={userOrders}>
      <OrderData />
    </MyDataContext.Provider>
  );
}

PendingReviews.getLayout = AccountPageLayout;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "account", "nav"])),
      // Will be passed to the page component as props
    },
  };
}

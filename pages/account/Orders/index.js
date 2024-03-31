import { AccountPageLayout } from "@/components/Account_Layout";
import MySpinner from "@/components/order/Spiner/Spinner";
import { auth, firestore, getOrderSubcollection } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { collection, getDocs, query, where } from "firebase/firestore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Orders() {
  const [shippingData, setShippingData] = useState(null);
  const [orderData, setOrderData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        fetchOrderData(user);
        getOrderSubcollection(user.uid)
          .then((orders) => {
            setOrderData(orders);
          })
          .catch((error) => {
            console.log("Error fetching order subcollection:", error);
          });
      }
    });

    return () => unsubscribe();
  }, []);

  // async function getOrderSubcollection(userId) {
  //   const orderDetailsRef = collection(firestore, "order-details");
  //   const q = query(orderDetailsRef, where("userId", "==", userId));

  //   try {
  //     const querySnapshot = await getDocs(q);
  //     if (!querySnapshot.empty) {
  //       const docRef = querySnapshot.docs[0].ref;
  //       const orderSubcollectionRef = collection(docRef, "orders");
  //       const orderQuerySnapshot = await getDocs(orderSubcollectionRef);

  //       const orders = [];
  //       orderQuerySnapshot.forEach((doc) => {
  //         orders.push({ id: doc.id, ...doc.data() });
  //       });
  //       setOrderData(orders);
  //     } else {
  //       return []; // No orders found for the user
  //     }
  //   } catch (error) {
  //     console.log("Error getting order subcollection:", error);
  //     return null;
  //   }
  // }

  async function getOrderSubcollection(userId) {
    const orderDetailsRef = collection(firestore, "order-details");
    const q = query(orderDetailsRef, where("userId", "==", userId));

    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;
        const orderSubcollectionRef = collection(docRef, "orders");
        const orderQuerySnapshot = await getDocs(orderSubcollectionRef);

        const orders = [];
        orderQuerySnapshot.forEach((doc) => {
          orders.push({ id: doc.id, ...doc.data() });
        });
        setLoading(false);
        return orders; // Return the orders
      } else {
        console.log("No orders found for the user");
        return []; // No orders found for the user
      }
    } catch (error) {
      console.log("Error getting order subcollection:", error);
      throw error; // Propagate the error
    }
  }

  async function fetchOrderData(user) {
    try {
      if (user) {
        const orderDetailsRef = collection(firestore, "order-details");
        const q = query(orderDetailsRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          // console.log(data);

          setShippingData(data);
        } else {
          console.log("Ther is no order for this user");
        }
      } else {
        console.log("There is no user");
      }
    } catch (error) {
      console.log("Error Fetching data : " + error);
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <MySpinner />
      </div>
    );
  } else {
    return (
      <>
        {orderData.length ? (
          <div>
            <h2 className="py-2 border-b px-4">ORDERS</h2>
            <div className="py-4 h-[80%]">
              <div className=" border-b py-2  flex flex-col md:flex-row">
                <Link
                  className="px-4 hover:text-orange-400 mb-2 md:mb-0 "
                  href="/account/Orders"
                >
                  Your Orders ({orderData ? orderData.length : ""})
                </Link>
              </div>

              {orderData.map((order, index) => {
                return (
                  <div className=" p-3 border my-2 " key={index}>
                    <Link
                      href={`/account/Orders/${shippingData.userId}`}
                      className="text-amber-500  rounded-md py-1 px-2  uppercase hover:bg-red-200"
                    >
                      see details
                    </Link>
                    {order.items.map((item, index) => {
                      return (
                        <>
                          <div key={index}>
                            <div className="flex justify-between items-start p-3 border-b my-2 flex-col md:flex-row">
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
                                  className={`text-black ${
                                    order.status === "order-placed"
                                      ? "bg-blue-800"
                                      : order.status === "deliverd"
                                      ? "bg-green-700"
                                      : order.status === "canceled"
                                      ? "bg-red-500"
                                      : "bg-blue-500"
                                  }w-fit py-1 px-2 rounded-md text-sm`}
                                >
                                  {order.status}
                                </p>
                                <p className="py-1 text-sm text-gray-500">
                                  deliverd by Sunday 31-03
                                </p>
                              </div>
                              <div className="p-2"></div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          <div className=" text-center py-8 h-[100%]">
            <h2 className="py-2">You have placed no orders yet!</h2>
            <p className="py-2">
              All your orders will be saved here for you to access their state
              anytime.
            </p>
            <Link
              href="/"
              className="btn my-6 p-4 bg-amber-500 hover:bg-yellow-400 text-white"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        )}
      </>
    );
  }
}

export default Orders;
Orders.getLayout = AccountPageLayout;

import { useEffect, useState } from "react";
import {
  getDocs,
  collection,
  where,
  query,
  doc,
  onSnapshot,
} from "firebase/firestore";
import {
  auth,
  fetchCartProducts,
  firestore,
  getCartproducts,
} from "../../../firebase";
// import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import MySpinner from "@/components/order/Spiner/Spinner";
import ListHeader from "@/components/order/ListHeader/ListHeader";
import CustomerAdress from "@/components/order/customeradress/customeraddress";
import { CheckPageLayout } from "../../../layouts/checkoutLayout";
import { Card } from "@material-tailwind/react";
import { onAuthStateChanged } from "firebase/auth";
function Summery() {
  const [addressData, setAddressData] = useState(null);
  const [cartProducts, setCartProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      getData(user);
      fetchCartProducts(user, setCartProducts);
    });
  }, []);

  async function getData(user) {
    try {
      if (user) {
        const orderDetailsRef = collection(firestore, "order-details");
        const q = query(orderDetailsRef, where("userId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const data = querySnapshot.docs[0].data();
          setAddressData(data);
        } else {
          setError("No data found for this user.");
        }
      } else {
        setError("No user found.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Error fetching data. Please try again later.");
    } finally {
      setLoading(false);
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
        <section className="bg-[#e5e5e580]">
          <Card className="p-6">
            <div className="flex justify-between items-center">
              <ListHeader value="customer Adress" color="text-green-900" />
              <Link href="/checkout_layout/address">
                <span className="ms-2 text-blue-900 hover:underline">
                  Change
                </span>
              </Link>
            </div>
            {addressData && addressData.shippingAddress ? (
              <CustomerAdress
                title={`${addressData.shippingAddress.firstName} ${addressData.shippingAddress.lastName}`}
                info={`${addressData.shippingAddress.region} | ${addressData.shippingAddress.city} | ${addressData.shippingAddress.address} | ${addressData.shippingAddress.additionalInfo}`}
              />
            ) : (
              <MySpinner />
            )}
          </Card>
          <Card className="mt-3 p-6">
            <div className="flex justify-between items-center">
              <ListHeader value="delivery details" color="text-green-900" />
              <Link href="/checkout_layout/shipping-options">
                <span className="ms-2 text-blue-900 hover:underline">
                  Change
                </span>
              </Link>
            </div>
            {addressData ? (
              <CustomerAdress
                title={
                  addressData.deliveryMethod == "express"
                    ? "Door Delivery"
                    : "Pick-up Station"
                }
                info="Delivery Sheduled on 30 March"
              />
            ) : (
              <MySpinner />
            )}
            <div className="flex justify-between items-center pt-3">
              <span className="text-sm font-semibold text-black dark:text-gray-300">
                Shipment 1/1
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-300">
                Fulfilled by Dream2000 EG Marketplace
              </span>
            </div>
            <Card className="p-6 border rounded-none" shadow={false}>
              <div>
                <p className="text-sm">
                  {addressData.deliveryMethod == "express"
                    ? "Door Delivery"
                    : "Pick-up Station"}
                </p>
                <p className="text-xs">
                  Delivery between 10 March and 11 March
                </p>
              </div>
              {cartProducts.map((cartProduct, index) => {
                return (
                  <div key={index}>
                    <hr></hr>
                    <div className="flex justify-start items-center py-2 ">
                      <div>
                        <img
                          src={cartProduct.product.thumbnail}
                          width={80}
                          height={80}
                          alt="product photo"
                        />
                      </div>
                      <div className="ps-4">
                        <p className="text-sm">
                          {cartProduct.product.en.title}
                        </p>
                        <p className="text-xs">QTY: {cartProduct.quantity}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Card>
          </Card>

          <div className="text-grey-100 pt-3">
            <Card className="p-6">
              <div className="flex justify-between items-center">
                <ListHeader value="Payment method" color="text-green-900" />
                <Link href="/checkout_layout/payment-methods">
                  <span className="ms-2 text-blue-900 hover:underline">
                    Change
                  </span>
                </Link>
              </div>
              {addressData ? (
                <CustomerAdress
                  title={
                    addressData.paymentMethod == "cash"
                      ? "Cash on delivery"
                      : "Pay with card"
                  }
                  info="Delivery Sheduled on 30 March"
                />
              ) : (
                <MySpinner />
              )}
            </Card>
          </div>
        </section>
      </>
    );
  }
}

export default Summery;
Summery.getLayout = CheckPageLayout;

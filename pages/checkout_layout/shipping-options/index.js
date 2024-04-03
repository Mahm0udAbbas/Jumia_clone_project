import { useEffect, useState } from "react";
import { auth, firestore } from "../../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import { Card } from "flowbite-react";
import Link from "next/link";
import CustomerAdress from "@/components/order/customeradress/customeraddress";
import DeliveryDetailsForm from "@/components/order/deliveryDetailsForm/deliveryDetailsForm";
import PaymentMethod from "@/components/order/PaymentMethod/PaymentMethod";
import ListHeader from "@/components/order/ListHeader/ListHeader";
import MySpinner from "@/components/order/Spiner/Spinner";
import { CheckPageLayout } from "../../../layouts/checkoutLayout";
import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
function EditDelivery({ setDeliveryConfirm, setAddressConfirm }) {
  const [addressData, setAddressData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      getData(user);
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
          <Card>
            <div className="flex justify-between items-center">
              <ListHeader value="customer Adress" color="text-green-900" />
              <button
                onClick={() => {
                  setAddressConfirm(false);
                  router.push("/checkout_layout/address");
                }}
              >
                <span className="ms-2 text-blue-900 hover:underline">
                  Change
                </span>
              </button>
            </div>
            {/* {addressData && addressData.shippingAddress && ( */}
            <CustomerAdress
              title={`${addressData.shippingAddress.firstName} ${addressData.shippingAddress.lastName}`}
              info={`${addressData.shippingAddress.region} | ${addressData.shippingAddress.city} | ${addressData.shippingAddress.address} | ${addressData.shippingAddress.additionalInfo}`}
            />
            {/* )} */}
          </Card>
          <DeliveryDetailsForm
            orderData={addressData}
            setDeliveryConfirm={setDeliveryConfirm}
          />
          <div className="text-grey-100">
            <PaymentMethod />
          </div>
        </section>
      </>
    );
  }
}

export default EditDelivery;
EditDelivery.getLayout = CheckPageLayout;

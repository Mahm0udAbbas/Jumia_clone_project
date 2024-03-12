import { useEffect, useState } from "react";
import { firestore } from "../../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { Card } from "flowbite-react";
import Link from "next/link";
import CustomerAdress from "@/components/order/customeradress/customeraddress";
import DeliveryDetailsForm from "@/components/order/deliveryDetailsForm/deliveryDetailsForm";
import PaymentMethod from "@/components/order/PaymentMethod/PaymentMethod";
import ListHeader from "@/components/order/ListHeader/ListHeader";
import MySpinner from "@/components/order/Spiner/Spinner";
import { CheckPageLayout } from "..";
function EditDelivery() {
  const [addressdata, setAddressData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getData();
  }, []);
  async function getData() {
    try {
      const querySnapshot = await getDocs(
        collection(firestore, "order-details")
      );
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAddressData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  console.log(addressdata);

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
              <Link href="/checkout_layout/address">
                <span className="ms-2 text-blue-900 hover:underline">
                  Change
                </span>
              </Link>
            </div>
            <CustomerAdress
              title={`${addressdata[0].shippingAddress.firstName} ${addressdata[0].shippingAddress.lastName}`}
              info={`${addressdata[0].shippingAddress.region} | ${addressdata[0].shippingAddress.city}  | ${addressdata[0].shippingAddress.address} | ${addressdata[0].shippingAddress.additionalInfo}`}
            />
          </Card>
          <DeliveryDetailsForm />
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

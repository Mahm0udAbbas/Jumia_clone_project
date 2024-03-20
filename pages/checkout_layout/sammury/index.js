import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { firestore } from "../../../firebase";
import { Card } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

import MySpinner from "@/components/order/Spiner/Spinner";
import ListHeader from "@/components/order/ListHeader/ListHeader";
import CustomerAdress from "@/components/order/customeradress/customeraddress";
import { CheckPageLayout } from "..";
function Summery() {
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
          <Card className="mt-3">
            <div className="flex justify-between items-center">
              <ListHeader value="delivery details" color="text-green-900" />
              <Link href="/checkout_layout/shipping-options">
                <span className="ms-2 text-blue-900 hover:underline">
                  Change
                </span>
              </Link>
            </div>
            <CustomerAdress
              title={" Door Delivery"}
              info={"delivery between 7 March and 10 March"}
            />
            <div className="flex justify-between items-center pt-3">
              <span className="text-sm font-semibold text-black dark:text-gray-300">
                Shipment 1/1
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-300">
                Fulfilled by Dream2000 EG Marketplace
              </span>
            </div>
            <Card>
              <div>
                <p className="text-sm">Door Delivery</p>
                <p className="text-xs">
                  Delivery between 10 March and 11 March
                </p>
              </div>
              <hr></hr>
              <div className="flex justify-start items-center ">
                <div>
                  <Image src="" width={20} height={30} alt="product photo" />
                </div>
                <div className="ps-4">
                  <p className="text-sm">
                    Galaxy A14 - 6.6-inch 4GB/64GB Dual Sim 4G - Mobile Phone -
                    Light Green
                  </p>
                  <p className="text-xs">QTY: 1</p>
                </div>
              </div>
            </Card>
          </Card>

          <div className="text-grey-100 pt-3">
            <Card>
              <div className="flex justify-between items-center">
                <ListHeader value="Payment method" color="text-green-900" />
                <Link href="/checkout_layout/payment-methods">
                  <span className="ms-2 text-blue-900 hover:underline">
                    Change
                  </span>
                </Link>
              </div>
              <CustomerAdress
                title={"Cash On Delivery"}
                info={
                  "For more secure and contactless delivery and to get a 10 EGP discount we recommend using Pay by Card"
                }
              />
            </Card>
          </div>
        </section>
      </>
    );
  }
}

export default Summery;
Summery.getLayout = CheckPageLayout;

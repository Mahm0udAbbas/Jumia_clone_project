import { Modal } from "flowbite-react";
import Link from "next/link";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import ListHeader from "@/components/order/ListHeader/ListHeader";
import SaveButton from "@/components/order/Save_button/SaveButton";
import CustomerAdress from "@/components/order/customeradress/customeraddress";
import { CheckPageLayout } from "../../../layouts/checkoutLayout";
import { Card } from "@material-tailwind/react";
import { auth, firestore, getOrderDetailsData } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import MySpinner from "@/components/order/Spiner/Spinner";
function ChoosePaymant({ setIsCard }) {
  const [addressData, setAddressData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [openModal, setOpenModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [paymentMethodConfirmed, setPaymentMethodConfirmed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      getData(user);
    });
  });
  if (paymentMethod === "card") {
    setIsCard(true);
  } else {
    setIsCard(false);
  }
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

  // Handle Payment Method change
  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
    console.log(paymentMethod);
  };
  const handleSubmit = () => setOpenModal(false);
  const goToSammry = async () => {
    const orderDetailsRef = collection(firestore, "order-details");
    const q = query(
      orderDetailsRef,
      where("userId", "==", auth.currentUser.uid)
    );
    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const docData = querySnapshot.docs[0].data();
        const updatedData = {
          ...docData,
          paymentMethod: paymentMethod,
        }; // You can set the default method here
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, updatedData);
      }
      router.push("/checkout_layout/sammury");
      setPaymentMethodConfirmed(true);
    } catch (error) {
      console.log("Error navigating to payment:", error);
    }
  };
  console.log(paymentMethodConfirmed);
  return (
    <>
      <section className="bg-[#e5e5e580]">
        <Card className="p-6">
          <div className="flex justify-between items-center">
            <ListHeader value="customer Adress" color="text-green-900" />
            <Link href="/checkout_layout/address">
              <span className="ms-2 text-blue-900 hover:underline">Change</span>
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
          <div className="flex justify-between items-center ">
            <ListHeader value="Delivery Options" color="text-green-900" />
            <Link href="/checkout_layout/shipping-options">
              <span className="ms-2 text-blue-900 hover:underline">Change</span>
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
        </Card>

        <div className="text-grey-100">
          {" "}
          <Card className="mt-3 p-6">
            <ListHeader value={"payment method"} />
            <hr></hr>
            <div>
              <h2 className="py-3 font-bold">Payment on delivery</h2>
              <div className="flex justify-between">
                <div className="flex items-start ">
                  <div>
                    <input
                      id="cash"
                      aria-describedby="helper-radio-text"
                      type="radio"
                      value="cash"
                      name="payment-method"
                      checked={paymentMethod === "cash"}
                      onChange={handlePaymentMethodChange}
                      className="w-4 h-4 text-orange-500  border-orange-300 focus:text-orange-500  focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="ms-2 text-sm ">
                    <label
                      htmlFor="helper-radio"
                      className="font-medium text-gray-900 dark:text-gray-300"
                    >
                      <span className="font-semibold ">Cash On Delivery</span>
                    </label>
                    <p
                      id="helper-radio-text"
                      className="text-xs font-normal text-gray-500 dark:text-gray-300"
                    >
                      For more secure and contactless delivery and to get 10 EGP
                      discount we recommend using Pay by Card
                    </p>
                  </div>
                </div>
                <div>
                  <MonetizationOnIcon className="text-orange-500" />
                </div>
              </div>
            </div>
            <Card className="p-6 my-5">
              {/* <div className=" flex justify-between "> </div> */}
              <div className="flex justify-start items-center border rounded p-2">
                <div>
                  <p className="text-sm">
                    - When you choose Cash on delivery, you can pay for your
                    order in cash when you receive your shipment at home or
                    Jumia’s pick-up stations.
                  </p>
                  <p className="text-sm">
                    - Enjoy 10 EGP discount when you pay via prepaid method.
                  </p>
                  <p className="text-xs">
                    <Link
                      href={""}
                      className="text-blue-900 mt-2 flex justify-start items-center"
                      onClick={() => setOpenModal(true)}
                    >
                      <span className="hover:underline">Details</span>
                    </Link>
                    <Modal show={openModal} onClose={() => setOpenModal(false)}>
                      <Modal.Header>Cash on Delivery</Modal.Header>
                      <Modal.Body>
                        <div className="space-y-6">
                          <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            <div className="">
                              {" "}
                              - When you choose Cash on delivery, you can pay
                              for your order in cash when you receive your
                              shipment at home or Jumia’s pick-up stations. -
                              Enjoy 10 EGP discount when you pay via prepaid
                              method. - Egyptian pounds are accepted only. -
                              Please provide the specified amount only when
                              paying for the possibility that there will be
                              enough cash with the delivery representative if a
                              value is paid higher than the requested one. - You
                              must pay for the product before opening the
                              shipment. - In case the product is returned, the
                              available refund methods are (refund voucher -
                              postal transfer).
                            </div>
                          </div>
                        </div>
                      </Modal.Body>
                      <Modal.Footer>
                        <SaveButton
                          handleSubmit={handleSubmit}
                          label="Accept"
                          color="amber"
                        />
                      </Modal.Footer>
                    </Modal>
                  </p>
                </div>
              </div>
            </Card>
            <hr></hr>
            <div className="mt-2">
              <div className="flex justify-between">
                <div className="flex items-start h-5">
                  <div>
                    <input
                      id="helper-radio"
                      aria-describedby="helper-radio-text"
                      type="radio"
                      value="card"
                      name="payment-method"
                      checked={paymentMethod === "card"}
                      onChange={handlePaymentMethodChange}
                      className="w-4 h-4 text-orange-500  border-orange-300 focus:text-orange-500  focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="ms-2 text-sm">
                    <label
                      htmlFor="helper-radio"
                      className="font-medium text-gray-900 dark:text-gray-300"
                    >
                      <span className="text-semi ">Pay by Card</span>
                    </label>
                    <p
                      id="helper-radio-text"
                      className="text-xs font-normal text-gray-500 dark:text-gray-300"
                    >
                      Get 10 EGP off on shipping fees when You pay with Your
                      card
                    </p>
                  </div>
                </div>
                <div>
                  <LocalPoliceIcon className="text-orange-500" />
                </div>
              </div>
            </div>
            <div className="flex jusitfy-start mt-6">
              <SaveButton
                label="confirm Payment Details"
                color="amber"
                handleSubmit={goToSammry}
              />
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}

export default ChoosePaymant;
ChoosePaymant.getLayout = CheckPageLayout;

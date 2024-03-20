import { Modal } from "flowbite-react";
import Link from "next/link";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import LocalPoliceIcon from "@mui/icons-material/LocalPolice";
import { useState } from "react";
import { useRouter } from "next/router";
import ListHeader from "@/components/order/ListHeader/ListHeader";
import SaveButton from "@/components/order/Save_button/SaveButton";
import CustomerAdress from "@/components/order/customeradress/customeraddress";
import { CheckPageLayout } from "..";
import { Card } from "@material-tailwind/react";
function ChoosePaymant() {
  const [openModal, setOpenModal] = useState(false);
  const handleSubmit = () => setOpenModal(false);
  const cancel = () => setOpenModal(false);
  const router = useRouter();
  const goToSammry = () => {
    router.push("/checkout_layout/sammury");
  };
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
          <CustomerAdress
            title={"Mahmoud abbas"}
            info={"elmaady | Cairo - Maadi-Ashanat El Maadi | +02 1281935436"}
          />
        </Card>
        <Card className="mt-3 p-6">
          <div className="flex justify-between items-center ">
            <ListHeader value="Delivery Options" color="text-green-900" />
            <Link href="/checkout_layout/shipping-options">
              <span className="ms-2 text-blue-900 hover:underline">Change</span>
            </Link>
          </div>
          <CustomerAdress
            title={" Door Delivery"}
            info={"delivery between 7 March and 10 March"}
          />
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
                      id="helper-radio"
                      aria-describedby="helper-radio-text"
                      type="radio"
                      value=""
                      className="w-4 h-4 text-gray-200 bg-gray-100 border-gray-300 focus:text-orange-500  focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
                      value=""
                      className="w-4 h-4 text-gray-200 bg-gray-100 border-gray-300 focus:text-orange-500  focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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

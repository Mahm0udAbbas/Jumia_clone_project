import { Card, Modal } from "flowbite-react";
import ListHeader from "../ListHeader/ListHeader";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import MapIcon from "@mui/icons-material/Map";
import Link from "next/link";
import { useState } from "react";
import SelectInputField from "../selectInput/SelectInputField";
import SaveButton from "../Save_button/SaveButton";
import CancelButton from "../Cancle_button/CancelButton";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import Image from "next/image";
import { useRouter } from "next/router";
const governorates = [
  "Alexandria",
  "Aswan",
  "Asyut",
  "Beheira",
  "Beni Suef",
  "Cairo",
  "Dakahlia",
  "Damietta",
  "Faiyum",
  "Gharbia",
  "Giza",
  "Ismailia",
  "Kafr El Sheikh",
  "Luxor",
  "Matrouh",
  "Minya",
  "Monufia",
  "New Valley",
  "North Sinai",
  "Port Said",
  "Qalyubia",
  "Qena",
  "Red Sea",
  "Sohag",
  "South Sinai",
  "Suez",
];
const cairo_areas = [
  "Nasr City",
  "Heliopolis",
  "Maadi",
  "Zamalek",
  "Dokki",
  "New Cairo",
  "Mohandessin",
  "Helwan",
  "6th of October City",
  "Mokattam",
  "Abbassiya",
  "Hadayek El Kobba",
  "El Marg",
  "Shubra",
  "El Zeitoun",
  "Sayeda Zeinab",
  "Waili",
  "Manial",
  "Boulaq",
  "Bab El Shaareya",
  "Matariya",
  "Rod El Farag",
  "Khalifa",
  "Ain Shams",
  "El-Ma'asara",
  "El Khanka",
  "Benha",
  "Shubra El Kheima",
];
function DeliveryDetailsForm() {
  const [openModal, setOpenModal] = useState(false);
  const handleSubmit = () => setOpenModal(false);
  const cancel = () => setOpenModal(false);
  const router = useRouter();
  const goToPayment = () => {
    router.push("/checkout_layout/payment-methods");
  };
  return (
    <>
      <Card className="mt-3">
        <ListHeader value={"delevriy details"} />
        <div>
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
                  <span className="font-semibold ">Pick-up station</span>
                  <span>(from EGP 20.00)</span>
                </label>
                <p
                  id="helper-radio-text"
                  className="text-xs font-normal text-gray-500 dark:text-gray-300"
                >
                  Delivery between 07 March and 10 March
                </p>
              </div>
            </div>
            <div>
              <VolunteerActivismIcon className="text-orange-500" />
            </div>
          </div>
        </div>
        <Card>
          <div className=" flex justify-between ">
            <span className="text-sm">Pickup Station</span>
            <Link
              href={""}
              className="text-blue-900 mt-2 flex justify-start items-center"
              onClick={() => setOpenModal(true)}
            >
              <ArrowBackIosNewIcon className="text-sm me-1" />
              <span className="hover:underline">Select pickup station</span>
            </Link>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header>Select a Pick-up station close to you</Modal.Header>
              <Modal.Body>
                <div className="space-y-6">
                  <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    <div className="grid grid-cols-2 gap-4 p-0">
                      <div className="   ">
                        <SelectInputField
                          governorates={governorates}
                          lableValue={"Region"}
                        />
                      </div>
                      <div className="  mb-4 ">
                        <SelectInputField
                          governorates={cairo_areas}
                          lableValue={"City"}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <SaveButton
                  handleSubmit={handleSubmit}
                  label="save"
                  color="warning"
                />
                <CancelButton
                  handleSubmit={cancel}
                  label="save"
                  color="warning"
                />
              </Modal.Footer>
            </Modal>
          </div>
          <div className="flex justify-start items-center border rounded p-3">
            <MapIcon className="me-4 text-orange-500" />
            <div>
              <p className="text-sm">No Pickup Station Selected</p>
              <p className="text-xs">
                To use this option, you will need to add a pickup station near
                your location.
              </p>
            </div>
          </div>
        </Card>
        <hr></hr>
        <div>
          <div className="flex justify-between">
            <div className="flex items-start h-5">
              <div>
                <input
                  id="door-delivery"
                  aria-describedby="door-delivery-text"
                  type="radio"
                  value=""
                  className="w-4 h-4 text-gray-200 bg-gray-100 border-gray-300 focus:text-orange-500  focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
              </div>
              <div className="ms-2 text-sm">
                <label
                  htmlFor="door-delivery"
                  className="font-medium text-gray-900 dark:text-gray-300"
                >
                  <span className="text-semi ">Door delivery</span>
                  <span>(from EGP 35.00)</span>
                </label>
                <p
                  id="helper-radio-text"
                  className="text-xs font-normal text-gray-500 dark:text-gray-300"
                >
                  Delivery between 07 March and 10 March
                </p>
              </div>
            </div>
            <div>
              <LocalShippingIcon className="text-orange-500" />
            </div>
          </div>
        </div>
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
            <p className="text-xs">Delivery between 10 March and 11 March</p>
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
        <div className="flex jusitfy-start">
          <SaveButton
            label={"CONFIRM DELIVERY DETAILS"}
            color={"warning"}
            handleSubmit={goToPayment}
          />
        </div>
      </Card>
    </>
  );
}

export default DeliveryDetailsForm;

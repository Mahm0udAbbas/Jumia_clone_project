import SelectInputField from "../selectInput/SelectInputField";
import ListHeader from "../ListHeader/ListHeader";
import SaveButton from "../Save_button/SaveButton";
import CancelButton from "../Cancle_button/CancelButton";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { firestore } from "../../../firebase";
import { collection, addDoc } from "firebase/firestore";
import { Card, Input } from "@material-tailwind/react";
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

function EditAdressForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
    otherPhone: "",
    city: "",
    region: "",
    additionalInfo: "",
  });
  const [errors, setErrors] = useState({});

  const router = useRouter();
  const validateForm = () => {
    const errors = {};
    if (!formData.firstName.trim()) {
      errors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      errors.lastName = "Last name is required";
    }
    if (!formData.address.trim()) {
      errors.address = "Address is required";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Phone number is required";
    }
    return errors;
  };
  const handleGovernorateChange = (e) => {
    setFormData({ ...formData, region: e.target.value });
  };
  const handleCityChange = (e) => {
    setFormData({ ...formData, city: e.target.value });
  };
  const handleSubmit = async () => {
    console.log();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      // Form is valid, submit the data
      console.log("Form data:", formData);
      try {
        // Add form data to Firestore
        const docRef = await addDoc(collection(firestore, "order-details"), {
          shippingAddress: formData,
        });
        console.log("Form data added to Firestore");
      } catch (error) {
        console.error("Error adding form data to Firestore: ", error);
      }
      // Navigate to the next page
      router.push("/checkout_layout/shipping-options");
    } else {
      // Set errors state to display validation errors
      setErrors(errors);
    }
  };
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear validation errors when user types
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };
  return (
    <>
      <Card className=" rounded p-3">
        <ListHeader value={"1.customer adress"} />
        <form>
          <section className="px-0 ">
            <h6 className="uppercase mt-4 mb-2 text-xs ">edit adress</h6>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-2">
              <div>
                <Input
                  variant="outlined"
                  color="orange"
                  placeholder="Outlined"
                  label="FirstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-600">{errors.firstName}</p>
                )}
              </div>
              <div>
                <Input
                  color="orange"
                  label="LastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <p className="text-xs text-red-600">{errors.lastName}</p>
                )}
              </div>
            </div>
            <div className="grid grid-cols-1">
              <div className="flex items-center mb-2">
                <div className="me-2 text-xs">
                  <p>prefix</p>
                  <p>+20</p>
                </div>
                <Input
                  color="orange"
                  type="number"
                  label="Phone Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <p className="text-xs text-red-600">{errors.firstName}</p>
                )}
              </div>
              <div className="flex items-center mb-2">
                <div className="me-2 text-xs">
                  <p>prefix</p>
                  <p>+20</p>
                </div>
                <Input
                  color="orange"
                  type="number"
                  label="Additional Phone Number"
                  name="otherPhone"
                  value={formData.otherPhone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="py-2">
              <div>
                <Input
                  color="orange"
                  label="Address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <p className="text-xs text-red-600">{errors.address}</p>
                )}
              </div>
            </div>
            <div className="py-2">
              <Input
                color="orange"
                label="Additional Information"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 py-2">
              <div>
                <SelectInputField
                  governorates={governorates}
                  lableValue={"Region"}
                  name={"region"}
                  value={formData.region}
                  onChange={handleGovernorateChange}
                />
              </div>
              <div className="  mb-4 ">
                <SelectInputField
                  governorates={cairo_areas}
                  lableValue={"City"}
                  name={"city"}
                  value={formData.city}
                  onChange={handleCityChange}
                />
              </div>
            </div>
          </section>
          <div className="flex flex-row justify-items-center items-center  pt-2  ">
            <CancelButton />
            <SaveButton
              handleSubmit={handleSubmit}
              label="save"
              color="amber"
            />
          </div>
        </form>
      </Card>
    </>
  );
}

export default EditAdressForm;

"use client";
import { Card } from "@material-tailwind/react";
import SaveButton from "../Save_button/SaveButton";
import {
  Timestamp,
  addDoc,
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, firestore } from "@/firebase";
import { useRouter } from "next/router";
function ProccedToBuy({ cartProducts, isCard }) {
  console.log(isCard);
  const router = useRouter();
  let timeStamp = Timestamp.now();
  let jsDate = timeStamp.toDate();
  let orderDate = `${jsDate.getDate()} / ${
    jsDate.getMonth() + 1
  } / ${jsDate.getFullYear()}`;
  let total = Number();
  async function handleSubmit() {
    const orderDetailsRef = collection(firestore, "order-details");
    const q = query(
      orderDetailsRef,
      where("userId", "==", auth.currentUser.uid)
    );
    try {
      const querySnapshot = await getDocs(q);
      if (!querySnapshot.empty) {
        const docRef = querySnapshot.docs[0].ref;
        const docData = querySnapshot.docs[0].data();
        if (
          docData.paymentMethod &&
          docData.deliveryMethod &&
          docData.shippingAddress &&
          docData.pickUpStation
        ) {
          const orderSubcollectionRef = collection(docRef, "orders");
          const newOrderDocRef = await addDoc(orderSubcollectionRef, {
            items: cartProducts,
            timestamp: orderDate,
            status: "order-placed",
          });
          console.log("New order document added with ID: ", newOrderDocRef.id);
          await updateDoc(docRef, {
            ...docData,
            confirmed: true,
          });
        } else {
          await updateDoc(docRef, {
            ...docData,
            confirmed: false,
          });
        }
        alert("Your order is done");
        if (isCard === true) {
          router.push("/paypal");
        }
      }
    } catch (error) {
      console.log("Error navigating to payment:", error);
    }
  }

  return (
    <>
      <Card className="p-6">
        <div>
          <h5 className=" border-b-2 py-1 font-semibold text-sm ">
            Order summary
          </h5>
          <div className=" border-b-2 py-1 text-sm">
            <div className="flex flex-row justify-between items-center py-1  ">
              <p className="">Items total ({cartProducts.length})</p>
              <p className="font-semibold  ">
                {cartProducts.map((product, index) => {
                  total += product.product?.price * product.quantity;
                })}
                EGP {total}
              </p>
            </div>
            <div className="flex flex-row justify-between items-center py-1 ">
              <span>Delivery fees</span>
              <span className="font-semibold ">EGP 35</span>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center py-2">
            <span className="text-sm capitalize  font-medium">total</span>
            <span className="text-xl">EGP {total}</span>
          </div>
          <div>
            <SaveButton
              label="confirm order"
              handleSubmit={handleSubmit}
              color="amber"
            />
          </div>
        </div>
      </Card>
    </>
  );
}

export default ProccedToBuy;

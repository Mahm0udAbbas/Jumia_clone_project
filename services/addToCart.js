import { setDoc, doc, arrayUnion } from "firebase/firestore";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore } from "@/firebase";

function addToCart(product) {
  // signOut(auth);
  const cartObject = { product, quantity: 1 };
  const storageProducts = JSON.parse(localStorage.getItem("cart"));

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Set new cart by userID in cart collection.
      setDoc(doc(firestore, "cart", user.uid), {
        products: arrayUnion(cartObject),
      });
    } else {
      if (storageProducts) {
        let localProducts = [];
        localProducts = [...storageProducts, cartObject];
        localStorage.setItem("cart", JSON.stringify(localProducts));
      } else {
        localStorage.setItem("cart", JSON.stringify([cartObject]));
      }
    }
  });
  return 0;
}

export default addToCart;

import { getDoc, setDoc, doc, arrayUnion, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "@/firebase";

export default function useAddToCart(product) {
  const newCartProduct = { product, quantity: 1 };
  // Local storage.
  const localStorageCart = JSON.parse(localStorage.getItem("cart"));
  let tempCart = Array();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Set new cart by userID in cart collection.
      getDoc(doc(firestore, "cart", user.uid)).then((docSnap) => {
        let firebaseCart = docSnap.data()?.products || [];
        if (docSnap.exists() && firebaseCart.length) {
          firebaseCart.find((item) => {
            // If add product, but is exists increase quantity by one.
            if (item.product.proId == newCartProduct.product.proId) {
              ++item.quantity;
              setDoc(doc(firestore, "cart", user.uid), {
                products: firebaseCart,
              });
            } else {
              // Add new cart
              updateDoc(doc(firestore, "cart", user.uid), {
                products: arrayUnion(newCartProduct),
              });
            }
          });
        } else {
          setDoc(doc(firestore, "cart", user.uid), {
            products: [newCartProduct],
          });
        }
      });
    } else {
      if (localStorageCart && localStorageCart.length) {
        localStorageCart.find((item) => {
          // If add product, but is exists increase quantity by one.
          if (item.product.proId == newCartProduct.product.proId) {
            ++item.quantity;
            tempCart = [...localStorageCart];
          } else {
            // Add new cart
            tempCart = [...localStorageCart, newCartProduct];
          }
          localStorage.setItem("cart", JSON.stringify(tempCart));
        });
      } else {
        localStorage.setItem("cart", JSON.stringify([newCartProduct]));
      }
    }
    return 0;
  });
}

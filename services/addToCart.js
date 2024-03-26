import { getDoc, setDoc, doc, arrayUnion, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { auth, firestore } from "@/firebase";

function addToCart(product) {
  const newCartProduct = { product, quantity: 1 };
  const localCart = JSON.parse(localStorage.getItem("cart"));

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // Set new cart by userID in cart collection.
      getDoc(doc(firestore, "cart", user.uid)).then((docSnap) => {
        let firebaseCart = docSnap.data()?.products || [];
        if (docSnap.exists() && firebaseCart.length) {
          // If add product, but is exists add quantity by one.
          firebaseCart.find((item) => {
            if (item.product.proId == newCartProduct.product.proId) {
              ++item.quantity;
              setDoc(doc(firestore, "cart", user.uid), {
                products: firebaseCart,
              });
            } else {
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
      if (localCart && localCart.length) {
        localCart.find((item) => {
          // If add product, but is exists add quantity by one.
          let localProducts = [];
          if (item.product.proId == newCartProduct.product.proId) {
            ++item.quantity;
            localProducts = [...localCart];
          } else {
            localProducts = [...localCart, newCartProduct];
          }
          localStorage.setItem("cart", JSON.stringify(localProducts));
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
    }
    return 0;
  });
}

export default addToCart;

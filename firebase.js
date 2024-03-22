// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  query,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { data } from "./data";
import SuperJSON from "superjson";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyAThtL3FG5oSY1_-DQq6cvod0T463-Nwlc",
  authDomain: "iti-final-project0.firebaseapp.com",
  projectId: "iti-final-project0",
  storageBucket: "iti-final-project0.appspot.com",
  messagingSenderId: "590751786816",
  appId: "1:590751786816:web:cc6dbbc1feb8e65dda7ca5",
  measurementId: "G-5N6JRTD2XG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth(app);
// let products = data;
// console.log(data);
export const addNewProduct = async (product) => {
  const productDocRef = doc(firestore, "Products", product.proId);
  const productSnapshot = await getDoc(productDocRef);

  if (!productSnapshot.exists()) {
    const {
      en,
      ar,
      thumbnail,
      images,
      categoryId,
      subCategoryId,
      sku,
      quantityInStock,
      price,
      discountPercentage,
      rating,
      ratingQuantity,
      sold,
    } = product;
    try {
      await setDoc(productDocRef, {
        en,
        ar,
        thumbnail,
        images,
        categoryId,
        subCategoryId,
        sku,
        quantityInStock,
        price,
        discountPercentage,
        rating,
        ratingQuantity,
        sold,
      });
    } catch (err) {
      console.log("err creating", err.message);
    }
  }

  return productDocRef;
};
// addNewProduct(products);
async function addProducts(products) {
  try {
    for (const product of products) {
      // console.log(product);
      const docRef = await addDoc(collection(firestore, "products"), product);
      console.log("Product written with ID: ", docRef.id);
    }
  } catch (e) {
    console.error("Error adding products: ", e);
  }
}

// addProducts(products);
let lastDocument = null;
export const getAllProducts = async () => {
  try {
    let productsQuery;
    if (lastDocument) {
      productsQuery = query(startAfter(lastDocument), limit(20));
    } else {
      productsQuery = query(collection(firestore, "products"), limit(20));
    }
    const snapshot = await getDocs(productsQuery);
    const productsData = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(productsData);

    return productsData;
  } catch (error) {
    console.error("Error fetching products:", error);
  }
};
export const getProductById = async (id) => {
  // console.log(id);
  let productRef = doc(firestore, "products", id);

  let respose = await getDoc(productRef);
  if (respose.exists()) {
    const data = respose.data();
    console.log(data);
    let res = SuperJSON.serialize(data);
    return res;
  } else {
    console.log("No such document!");
  }
};

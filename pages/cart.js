import { Button } from "@material-tailwind/react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useRouter } from "next/router";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase";
import { useEffect, useState } from "react";
import Image from "next/image";
import logoExpress from "@/public/Logo-express.png";

function Cart() {
  const [cartProducts, setCartProducts] = useState([]);
  let separateProducts = [];
  let total = 0;

  useEffect(() => {
    onSnapshot(doc(firestore, "cart", "wj3GhaCeRd4pnKwMZ6Ny"), (snapShot) => {
      setCartProducts(snapShot.data().items);
    });
  }, []);

  const router = useRouter();

  function increaseCart(index) {
    separateProducts = [...cartProducts];
    ++separateProducts[index].quantity;
    updateDoc(doc(firestore, "cart", "wj3GhaCeRd4pnKwMZ6Ny"), {
      items: [...separateProducts],
    });
  }
  function decreaseCart(index) {
    separateProducts = [...cartProducts];
    --separateProducts[index].quantity;
    updateDoc(doc(firestore, "cart", "wj3GhaCeRd4pnKwMZ6Ny"), {
      items: [...separateProducts],
    });
  }
  function removeItemFromCart(index) {
    separateProducts = [...cartProducts];
    separateProducts.splice(index, 1);
    updateDoc(doc(firestore, "cart", "wj3GhaCeRd4pnKwMZ6Ny"), {
      items: [...separateProducts],
    });
  }
  return (
    <div className="container mx-auto px-4 max-w-7xl px-2 lg:px-0">
      <div className="mx-auto max-w-2xl py-8 lg:max-w-7xl">
        <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <section
            aria-labelledby="cart-heading"
            className="p-4 rounded-lg bg-white lg:col-span-8"
          >
            <ul role="list" className="divide-y divide-gray-200">
              {cartProducts.map((product, index) => {
                total += product.product.price * product.quantity;
                return (
                  <div key={product.product.id}>
                    <li className="flex py-6 sm:py-6 ">
                      <div className="flex-shrink-0">
                        <Image
                          width={100}
                          height={100}
                          src={product.product.images[0]}
                          alt={product.product.title}
                          className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
                        />
                      </div>
                      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                          <div className="flex justify-between">
                            <h3 className="text-sm">
                              <a
                                href={product.product.thumbnail}
                                className=" text-black"
                              >
                                {product.product.title}
                              </a>
                            </h3>
                          </div>
                          <div className="flex justify-end">
                            <p className="text-xl font-medium text-gray-900">
                              EGP {product.product.price}.00
                            </p>
                          </div>
                        </div>
                        <div className="flex justify-between">
                          <p className="text-xs text-orange-500">
                            {product.product.stock} units left
                          </p>
                          <div className="flex">
                            <p className="text-lg font-medium text-gray-500 line-through">
                              EGP 507.00
                            </p>
                            <p className="mx-1"></p>
                            <p className="text-md text-orange-700 px-2 rounded bg-orange-700/10">
                              -{Math.floor(product.product.discountPercentage)}%
                            </p>
                          </div>
                        </div>
                        <Image
                          width={100}
                          height={100}
                          src={logoExpress}
                          alt="jumia logo"
                          className="w-24 object-contain"
                        />
                      </div>
                    </li>
                    <div className="mb-2 flex justify-between">
                      <div className="flex">
                        <button
                          type="button"
                          className="flex rounded p-2 items-center space-x-2 hover:bg-orange-500/25 "
                        >
                          <DeleteForeverIcon
                            size={18}
                            className="text-orange-500"
                          />
                          <span
                            className="text-sm font-medium text-orange-500"
                            onClick={() => {
                              removeItemFromCart(index);
                            }}
                          >
                            REMOVE
                          </span>
                        </button>
                      </div>
                      <div className="min-w-24 flex">
                        <Button
                          className="text-white"
                          variant="gradient"
                          size="sm"
                          color="amber"
                          disabled={product.quantity == 1}
                          onClick={() => decreaseCart(index)}
                        >
                          -
                        </Button>
                        <span className="mx-6">{product.quantity}</span>
                        <Button
                          className="text-white"
                          variant="gradient"
                          size="sm"
                          color="amber"
                          onClick={() => increaseCart(index)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </ul>
          </section>
          <section className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0">
            <div className=" flex items-center p-3">
              <h2 className="m-0 p-0">CART SUMMARY</h2>
            </div>

            <div className="flex justify-between border-y my-2  p-3">
              <div className="text-base font-medium text-gray-900">
                Subtotel
              </div>
              <div className="text-base font-medium text-gray-900">
                EGP {total}.00
              </div>
            </div>
            <div className="flex justify-between p-3">
              <CheckCircleOutlineIcon className="text-3xl me-1" color="green" />
              <p className="p-0 m-0 text-sm">
                Jumia Express items are eligible for free delivery.
              </p>
            </div>
            <Image
              className="px-3"
              width={120}
              height={120}
              src={logoExpress}
              alt="logo express"
            />
            <div className="text-green-700 border-t">
              <div className="flex gap-4 p-2">
                <Button
                  onClick={() => router.push("/checkout_layout/address")}
                  variant="gradient"
                  className="text-lg text-white"
                  color="amber"
                  fullWidth
                >
                  {" "}
                  Checkout ({total}.00)
                </Button>
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
}

export default Cart;

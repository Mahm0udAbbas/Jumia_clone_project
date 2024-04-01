import React, { useEffect, useState } from "react";
import FeedbackList from "../../components/ProductDetails/CustomerFeedback/index";
import ProductSection from "../../components/ProductDetails/ProductSection/index";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import VolunteerActivismOutlinedIcon from "@mui/icons-material/VolunteerActivismOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import AssignmentReturnOutlinedIcon from "@mui/icons-material/AssignmentReturnOutlined";
import { getProductById } from "@/firebase";
import { Breadcrumbs } from "@mui/material";
import useAddToCart from "@/services/addToCart";

const data5 = [
  {
    id: 1,
    name: 'XIAOMI Redmi Note 13 6.67" 6GB RAM/128GB ROM Android 12 - Black',
    newPrice: "EGP 214,000",
    oldPrice: "EGP 230,500",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/3476082/1.jpg?5801",
  },

  {
    id: 2,
    name: 'itel S23 6.6" 8GB RAM/256GB ROM Android 12 - Sky Blue',
    newPrice: "EGP 99,990",
    oldPrice: "EGP 150,000",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/68/3355072/1.jpg?5389",
  },

  {
    id: 3,
    name: 'UMIDIGI G1 6.52" 2GB RAM/32GB ROM Android 12 - Galaxy Blue',
    newPrice: "EGP 66,800",
    oldPrice: "EGP 98,420",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/33/7833241/1.jpg?3144",
  },

  {
    id: 4,
    name: "Infinix Hot 30i 6.6 HD+, 4+4GB RAM /128GB ROM Android 12 - Blue",
    newPrice: "EGP 132,355",
    oldPrice: "EGP 139,000",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/17/3425342/1.jpg?3784",
  },

  {
    id: 5,
    name: 'itel A70 6.6" HD+, 128GB ROM + 3GB RAM, 5000mAh, 13MP + 8MP, 4G',
    newPrice: "EGP 97,990",
    oldPrice: "EGP 100,000",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/97/1194962/1.jpg?1450",
  },

  {
    id: 6,
    name: 'XIAOMI Redmi Note 13 Pro 6.67" 8GB RAM/256 GB ROM Android 12 -Black + Free Smart Light Sound Speaker',
    newPrice: "EGP 344,500",
    oldPrice: "EGP 365,000",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/77/2086082/1.jpg?9356",
  },

  {
    id: 7,
    name: "AGM PG001 Dual SIM, Torchlight, Wireless FM,SOS Function-Red",
    newPrice: "EGP 15,680",
    oldPrice: "EGP 19,100",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/95/8379422/1.jpg?0527",
  },

  {
    id: 8,
    name: 'Samsung Galaxy A03 Core 6.5" 2GB RAM/ 32GB ROM Android 11- Onyx Black',
    newPrice: "EGP 89,940",
    oldPrice: "EGP 94,740",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/39/4927521/1.jpg?8740",
  },

  {
    id: 9,
    name: "itel ICC-81 Car Charger, MP3 Player",
    newPrice: "EGP 5,290",
    oldPrice: "EGP 8,000",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/05/8619381/1.jpg?3983",
  },

  {
    id: 10,
    name: 'Samsung Galaxy A34 5G 6.4" 6GB RAM/128GB ROM Android 13 - Green',
    newPrice: "EGP 353,300",
    oldPrice: "EGP 485,000",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/78/6317722/1.jpg?7922",
  },

  {
    id: 11,
    name: "AGM PG001 Louder Speaker, FM Radio,SOS, Dual SIM Torch-Black",
    newPrice: "EGP 15,680",
    oldPrice: "EGP 19,100",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/53/2379422/1.jpg?1352",
  },

  {
    id: 12,
    name: 'Samsung Galaxy A25 5G 6.5" 8GB RAM/256GB ROM Android 14 - Light Blue',
    newPrice: "EGP 347,550",
    oldPrice: "EGP 390,000",
    imageUrl:
      "https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/31/6439772/1.jpg?9332",
  },
];
export const getServerSideProps = async (context) => {
  const { id } = context.params;

  try {
    const product = await getProductById(id);

    return {
      props: { product },
    };
  } catch (e) {
    console.log(e);
    return {
      props: { product: null },
    };
  }
};

const ProductDetails = ({ product }) => {
  product = product.json;
  let date = new Date();
  const [toast, setToast] = useState(false);
  let day = date.toLocaleDateString();
  date.setDate(date.getDate() + 3);
  let result = date.toLocaleDateString();
  return (
    <>
      <div className="container mx-auto">
        <h1></h1>
        <div>
          <div className="pt-4 text-md p-2.5">
            <Breadcrumbs separator=">">
              <a href="/" className="opacity-60">
                Home
              </a>
              <a href="">coffee</a>
              <a href={`/ProductDetails/${product.id}`}>
                {product.en.description}
              </a>
            </Breadcrumbs>
          </div>

          <div className="grid grid-cols-12 gap-4 px-2">
            <div className="bg-white mt-2 col-span-12 md:col-span-9 rounded">
              <div className="grid grid-cols-12  gap-4 mt-3">
                <div className="col-span-4">
                  <img src={product.thumbnail} alt="" />
                  <p className="ps-12 text-sm pt-1 text-gray-700 mx-2me-2 hover:text-gray-900 text-decoration-none">
                    SHARE THIS PRODUCT
                  </p>
                  <div className="flex mx-2 ps-20">
                    <div className="flex items-center justify-center mx-1 text-gray-700 border border-gray-700 rounded-full border-1 hover:text-gray-900">
                      <FacebookRoundedIcon />
                    </div>
                    <div className="flex items-center justify-center mx-1 text-gray-700 border border-gray-700 rounded-full border-1 hover:text-gray-900">
                      <TwitterIcon />
                    </div>
                  </div>
                </div>

                <div className="col-span-8 p-2.5">
                  <h3 className="text-gray-700 hover:text-gray-900 text-xl">
                    {product.en.title}
                  </h3>
                  <h4 className="text-sm">brand:{product.en.brand} </h4>
                  <div className="w-full border-b border-gray-200"></div>
                  <div className="flex items-end">
                    <p className="text-gray-700 me-1  text-2xl font-bold hover:text-gray-900">
                      EGP {product.price}
                    </p>
                  </div>
                  <p className="text-gray-700 text-[12px]  hover:text-gray-900">
                    {product.quantityInStock} units left
                  </p>
                  <p className="text-gray-700 text-[12px] hover:text-gray-900">
                    Delivery fees from EGP 35.00 to Minya. Save 10 EGP on
                    shipping with prepaid payment
                  </p>
                  <div className="flex items-center">
                    <div className="flex">
                      <StarIcon
                        className={
                          product.rating >= 1
                            ? "text-amber-500"
                            : "text-grey-100"
                        }
                      />
                      <StarIcon
                        className={
                          product.rating >= 2
                            ? "text-amber-500"
                            : "text-grey-100"
                        }
                      />
                      <StarIcon
                        className={
                          product.rating >= 3
                            ? "text-amber-500"
                            : "text-grey-100"
                        }
                      />
                      <StarIcon
                        className={
                          product.rating >= 4
                            ? "text-amber-500"
                            : "text-grey-100"
                        }
                      />
                      <StarIcon
                        className={
                          product.rating >= 5
                            ? "text-amber-500"
                            : "text-grey-100"
                        }
                      />
                    </div>
                    <div className="mt-1 ms-1 text-sm font-medium text-gray-700 hover:text-gray-900 text-sm color-blue-900">
                      {product.ratingQuantity} verified ratings
                    </div>
                  </div>
                  <div className="w-full my-2 border-b border-gray-200 "></div>
                  <p className="text-gray-700 hover:text-gray-900">
                    VARIATION AVAILABLE
                  </p>
                  <div className=" border border-amber-500 rounded-none text-center w-[60px]  py-1 text-amber-500 text-sm uppercase">
                    black
                  </div>

                  <button
                    className="flex items-center justify-center px-2 py-2 mx-1 my-2 w-full"
                    style={{
                      backgroundColor: "orange",
                      borderRadius: "4px",
                      color: "white",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      useAddToCart(product);
                      setToast(true);
                      setTimeout(() => setToast(false), 3000);
                    }}
                  >
                    <div className="self-center mx-2">
                      <AddShoppingCartOutlinedIcon />
                    </div>
                    <p className="text-center">ADD TO CART</p>
                  </button>

                  <div className="w-full my-3 border-b border-gray-200"></div>

                  <div>
                    <div className="text-gray-700 hover:text-gray-900">
                      PROMOTIONS
                    </div>
                    <div className="flex items-center mb-6">
                      <div className="text-amber-500 text-xl">
                        <StarHalfIcon />
                      </div>
                      <p className="text-sm text-blue-700 mt-1 ms-2">
                        Check All Our Installments Offers from here{" "}
                      </p>
                    </div>
                    {toast ? <Toast /> : ""}
                  </div>
                </div>
              </div>
              <p className="text-sm  mt-64 ms-2">
                report incorrect product information
              </p>
            </div>

            <section className="col-span-12 md:col-span-3">
              <div className="rounded text-black bg-white px-2 mt-2 pt-2">
                <div className="text-sm">
                  <p>DELIVERY RETURNS</p>
                </div>
                <div className="w-full my-2 border-b border-gray-200"></div>
                <div>
                  <img
                    src="https://vendorhub.jumia.co.ke/wp-content/uploads/2017/08/Jumia-Express-logo-e1556633520715.png"
                    alt=""
                  />
                  <p className="text-center">
                    Free delivery on thousands of products
                  </p>
                </div>
                <div className="w-full my-2 border-b border-gray-200"></div>
                <div className="flex flex-col p-2.5 ">
                  <select
                    className="my-3 form-select"
                    aria-label="Default select example"
                  >
                    <option>Al Minya</option>
                    <option value="1">Cairo</option>
                    <option value="2">Giza</option>
                    <option value="3">Alexandria</option>
                  </select>
                  <select
                    className="my-2 form-select"
                    aria-label="Default select example"
                  >
                    <option>Minya</option>
                    <option value="1">Magaha</option>
                    <option value="2">Malawi</option>
                    <option value="3">Samalot</option>
                  </select>
                </div>
                <div>
                  <div className="flex items-start justify-between p-2.5">
                    <div className="p-2 border me-2  h-10 rounded ">
                      <VolunteerActivismOutlinedIcon />
                    </div>
                    <div>
                      <div className="flex justify-between w-full ">
                        <p className="text-sm ">Pickup Station</p>
                        <p className=" text-xs text-blue-700">Details</p>
                      </div>
                      <p className="text-xs ">Delivery EGP 250</p>
                      <p className="text-xs ">
                        Arriving at pickup station between 26 February & 27
                        February when you order within next 5hrs 15mins
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-start justify-between p-2.5">
                    <div className="p-2 border me-2  h-10 rounded ">
                      <LocalShippingOutlinedIcon />
                    </div>
                    <div>
                      <div className="flex justify-between w-full">
                        <p className="text-sm ">Door Delivery</p>
                        <p className=" text-xs text-blue-700">Details</p>
                      </div>
                      <p className="text-xs ">Delivery </p>
                      <p className="text-xs ">
                        Ready for delivery between{day}& {result} when you order
                        within next 3hrs 24mins
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-start justify-between p-2.5">
                    <div className="p-2 border me-2  h-10 rounded ">
                      <AssignmentReturnOutlinedIcon />
                    </div>
                    <div>
                      <div className="flex justify-between w-full">
                        <p className="text-sm ">Return Policy</p>
                      </div>

                      <p className="text-xs ">
                        Free return within the legal return period from 14 to 30
                        days, and if they meet the terms & conditions, with the
                        need to report any apparent defect within 48 hours. For
                        more details about return policy.Details
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="grid grid-cols-12 gap-4 px-2">
            <div className="bg-white bg-white mt-2 col-span-12 md:col-span-9 rounded p-5 ">
              <p className="text-gray-700 hover:text-gray-900 font-semibold text-xl">
                Product details
              </p>
              <div className="w-full my-4 border-b border-gray-100"></div>
              <ul>
                <li className="text-gray-700 text-sm ">
                  {product.en.description}
                </li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 px-2">
            <section className="  bg-white mt-2 col-span-12 md:col-span-9 rounded p-5 text-xl ">
              <div className="bg-white ">
                <p className="text-gray-700 hover:text-gray-900 font-semibold text-xl">
                  Specifications
                </p>
                <div className="my-4 border-b border-gray-100"></div>
                <div className="flex  justify-center pt-6">
                  <div className="rounded-none border p-5">
                    <p className="text-center font-semibold text-sm p-3.5 text-gray-700 hover:text-gray-900">
                      SPECIFICATIONS
                    </p>
                    <ul className="list-disc list-inside p-1">
                      <li className="text-base text-gray-700 text-sm font-medium py-1 ">
                        SKU: {product.sku}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="grid grid-cols-12 gap-4 px-2 ">
            <div className="bg-white mt-2 col-span-12 md:col-span-9 p-5 rounded">
              <p className="text-gray-700 hover:text-gray-900 font-medium text-xl">
                Customers who viewed this also viewed
              </p>
              <ProductSection
                data={data5}
                display="hidden"
                flash="hidden"
                time="hidden"
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 px-2">
            <div className="mt-3 bg-white mt-2 col-span-12 md:col-span-9 rounded">
              <FeedbackList
                rating={product.rating}
                verifiedReting={product.ratingQuantity}
              />
            </div>
          </div>

          <div className="grid grid-cols-12 gap-4 px-2">
            <div className="bg-white mt-2 col-span-12 md:col-span-9 rounded p-5 ">
              <p className="text-gray-700 hover:text-gray-900 text-xl font-meduims">
                You may also like
              </p>
              <ProductSection
                data={data5}
                display="hidden"
                flash="hidden"
                time="hidden"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-10 gap-4 px-2">
          <div className="bg-white mt-2 col-span-10  rounded p-5">
            <p className="text-gray-700 hover:text-gray-900 font-medium text-xl">
              More items from this seller
            </p>
            <ProductSection
              data={data5}
              display="hidden"
              flash="hidden"
              time="hidden"
            />
          </div>
        </div>
        <div className="grid grid-cols-10 gap-4 px-2 pb-5">
          <section className="bg-white mt-2 col-span-10  rounded p-5">
            <div className="flex justify-between items-center w-full">
              <h3 className="text-gray-700 hover:text-gray-900 font-medium text-xl">
                Recently Viewed
              </h3>
              <div className="border-b border-gray-300"></div>
              <button className="flex text-amber-500  bg-transparent items-center ">
                SEE ALL{" "}
                <ArrowForwardIosIcon className="text-sm text-amber-500" />
              </button>
            </div>
            <ProductSection
              data={data5}
              display="hidden"
              flash="hidden"
              time="hidden"
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

function Toast() {
  return (
    <div
      id="toast-success"
      class="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
      role="alert"
    >
      <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
        </svg>
        <span class="sr-only">Check icon</span>
      </div>
      <div class="ms-3 text-sm font-normal">Item increased successfully.</div>
      <button
        type="button"
        class="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
        data-dismiss-target="#toast-success"
        aria-label="Close"
      >
        <span class="sr-only">Close</span>
        <svg
          class="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
}

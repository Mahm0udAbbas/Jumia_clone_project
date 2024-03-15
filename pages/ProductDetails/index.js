import React, { useEffect, useState } from "react";
import Styles from "./ProductDetails.module.css";
import { FaStar } from "react-icons/fa";
import ProductSection from "../../components/ProductDetails/ProductSection/index";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { TiSocialFacebook } from "react-icons/ti";
import { FaTwitter } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { FaHandsHolding } from "react-icons/fa6";
import { CiDeliveryTruck } from "react-icons/ci";
import { GoPackageDependencies } from "react-icons/go";
import { IoIosArrowForward } from "react-icons/io";
import FeedbackList from "../../components/ProductDetails/CustomerFeedback/index";
import Footer from "@/components/ProductDetails/Footer";

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

const ProductDetails = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (isClient)
    return (
      <>
        <div className="container-lg">
          <div className="block lg:hidden" style={{ padding: "20px" }}>
            <div style={{ padding: 10 }}>
              <p>
                <a
                  href="/"
                  className="me-2 text-reset text-decoration-none"
                  style={{ fontSize: 13 }}
                >
                  Home {"> "}{" "}
                </a>
                <a
                  href="/category"
                  className="me-2 text-reset text-decoration-none"
                  style={{ fontSize: 13 }}
                >
                  Phones & Tablet {">"}
                </a>
                <a
                  href="/category"
                  className="me-2 text-reset text-decoration-none"
                  style={{ fontSize: 13 }}
                >
                  Mobile Phones {">"}
                </a>
                <a
                  href="/ProductDetails"
                  className="me-2 text-decoration-none baby"
                  style={{ fontSize: 13 }}
                >
                  XIAOMI Redmi Note 13 6.67" 6GB RAM/128GB ROM Android 12 -
                  Black
                </a>
              </p>
            </div>
            <section
              className={`${Styles.detailsSection} bg-white mt-2 col-span-10`}
              id="detail"
              style={{ borderRadius: "5px", padding: 10 }}
            >
              <section
                className={`${Styles.detailsSection} bg-white mt-2 col-span-9`}
                id="detail"
                style={{ borderRadius: "5px", padding: 10 }}
              >
                <section
                  className={`${Styles.detailsSection} bg-white mt-2 col-span-9`}
                  id="detail"
                  style={{ borderRadius: "5px", padding: 10 }}
                >
                  <div className="grid grid-cols-12 gap-4 mt-3">
                    <div className="col-span-4">
                      <img
                        src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/3476082/1.jpg?5801"
                        alt=""
                        className=""
                      />
                      <p
                        className="mx-2 text-gray-700 me-2 hover:text-gray-900 text-decoration-none"
                        style={{ padding: 10 }}
                      >
                        SHARE THIS PRODUCT
                      </p>
                      <div className="flex mx-2">
                        <div className="flex items-center justify-center mx-1 text-gray-700 border border-gray-700 rounded-full border-1 hover:text-gray-900">
                          <TiSocialFacebook />
                        </div>
                        <div className="flex items-center justify-center mx-1 text-gray-700 border border-gray-700 rounded-full border-1 hover:text-gray-900">
                          <FaTwitter />
                        </div>
                      </div>
                    </div>

                    <div className="col-span-8">
                      <h3 className="text-gray-700 hover:text-gray-900">
                        XIAOMI Redmi Note 13 6.67" 6GB RAM/128GB ROM Android 12
                        - Black
                      </h3>
                      <h4>brand: </h4>
                      <div className="w-full border-b border-gray-200"></div>
                      <div className="flex items-end">
                        <p className="text-gray-700 me-1 pFirst hover:text-gray-900">
                          EGP 214,000
                        </p>
                      </div>
                      <p className="text-gray-700 pThird hover:text-gray-900">
                        {Math.floor(Math.random() * 20)} units left
                      </p>
                      <p className="text-gray-700 pFourth hover:text-gray-900">
                        Delivery fees from EGP 35.00 to Minya. Save 10 EGP on
                        shipping with prepaid payment
                      </p>
                      <div className="flex items-center">
                        <div className="flex">
                          <FaStar style={{ color: "orange" }} />
                          <FaStar style={{ color: "orange" }} />
                          <FaStar style={{ color: "orange" }} />
                          <FaStar style={{ color: "orange" }} />
                          <FaRegStarHalfStroke style={{ color: "orange" }} />
                        </div>
                        <div
                          className={`${Styles.random} mt-1 ms-1 text-gray-700 hover:text-gray-900`}
                        >
                          ({Math.floor(Math.random() * 300)} verified ratings)
                        </div>
                      </div>
                      <div className="w-full my-2 border-b border-gray-200 "></div>
                      <p className="text-gray-700 hover:text-gray-900">
                        VARIATION AVAILABLE
                      </p>
                      <div className={`${Styles.variation} py-1`}>black</div>

                      <div
                        className="flex items-center justify-between px-2 py-2 mx-1 my-2"
                        style={{
                          backgroundColor: "orange",
                          borderRadius: "4px",
                          color: "white",
                          cursor: "pointer",
                        }}
                      >
                        <div className={`${Styles.cartImg}`}>
                          <MdAddShoppingCart />
                        </div>
                        <p>ADD TO CART</p>
                        <div></div>
                      </div>

                      <div className="w-full my-3 border-b border-gray-200"></div>

                      <div>
                        <div className="text-gray-700 hover:text-gray-900">
                          PROMOTIONS
                        </div>
                        <div className="flex">
                          <div className={`${Styles.color1}`}>
                            <MdStars />
                          </div>
                          <p className={`${Styles.random} mt-1 ms-2`}>
                            Check All Our Installments Offers from here{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className={`${Styles.random} ${Styles.down} ms-2`}>
                    report incorrect product information
                  </p>
                </section>

                <section className="col-span-3">
                  <div
                    className={`bg-white px-2 mt-2 pt-2 ${Styles.detailsection2}`}
                    style={{ borderRadius: "5px", color: "black" }}
                  >
                    <div className={Styles.dtsub1}>
                      <p style={{ fontSize: ".875rem", fontWeight: 500 }}>
                        DELIVERY RETURNS
                      </p>
                    </div>
                    <div className="w-full my-2 border-b border-gray-200"></div>
                    <div className={Styles.expressanother}>
                      <img
                        src="https://vendorhub.jumia.co.ke/wp-content/uploads/2017/08/Jumia-Express-logo-e1556633520715.png"
                        alt=""
                      />
                      <p>Free delivery on thousands of products</p>
                    </div>
                    <div className="w-full my-2 border-b border-gray-200"></div>
                    <div
                      style={{
                        padding: "10px",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <select
                        className="my-3 form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Al Minya</option>
                        <option value="1">Cairo</option>
                        <option value="2">Giza</option>
                        <option value="3">Alexandria</option>
                      </select>
                      <select
                        className="my-2 form-select"
                        aria-label="Default select example"
                      >
                        <option selected>Minya</option>
                        <option value="1">Magaha</option>
                        <option value="2">Malawi</option>
                        <option value="3">Samalot</option>
                      </select>
                    </div>
                    <div>
                      <div className="flex">
                        <div className={`p-2 border me-2 ${Styles.ordering}`}>
                          <FaHandsHolding />
                        </div>
                        <div>
                          <div
                            className="flex justify-between w-full"
                            style={{ padding: 10 }}
                          >
                            <p className={Styles.subb1}>Pickup Station</p>
                            <p className={Styles.subb2}>Details</p>
                          </div>
                          <p className={Styles.subb3}>Delivery Fees EGP 250</p>
                          <p className={Styles.subb4}>
                            Arriving at pickup station between 26 February & 27
                            February when you order within next 5hrs 15mins
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex" style={{ padding: 10 }}>
                        <div className={`p-2 border me-2 ${Styles.ordering}`}>
                          <CiDeliveryTruck />
                        </div>
                        <div>
                          <div className="flex justify-between w-full">
                            <p className={Styles.subb1}>Door Delivery</p>
                            <p className={Styles.subb2}>Details</p>
                          </div>
                          <p className={Styles.subb3}>Delivery EGP 35.00</p>
                          <p className={Styles.subb4}>
                            Ready for delivery when you order within next 3hrs
                            24mins
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex">
                        <div className={`p-2 border me-2 ${Styles.ordering}`}>
                          <GoPackageDependencies />
                        </div>
                        <div>
                          <div className="flex justify-between w-full">
                            <p className={Styles.subb1}>Return Policy</p>
                          </div>

                          <p className={Styles.subb4}>
                            Free return legal return period from 14 to 30 days,
                            and if they meet the terms & conditions, with the
                            need to report any apparent defect within 48 hours.
                            For more details about return policy.Details
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </section>
            </section>
          </div>
        </div>

        <div className="container mx-auto">
          <div className="w-full mx-auto md:w-11/12 lg:w-11/12 xl:w-11/12">
            <div className="hidden lg:block">
              <div className={` pt-4${Styles.navtext}`} style={{ padding: 10 }}>
                <p>
                  <a
                    href="/"
                    className="me-2 text-decoration-none"
                    style={{ fontSize: 13 }}
                  >
                    Home {"> "}{" "}
                  </a>
                  <a
                    href="/category"
                    className="me-2 text-decoration-none"
                    style={{ fontSize: 13 }}
                  >
                    Phones & Tablet {">"}
                  </a>
                  <a
                    href="/category"
                    className="me-2 text-decoration-none"
                    style={{ fontSize: 13 }}
                  >
                    Mobile Phones {">"}
                  </a>
                  <a
                    href="/ProducDetails"
                    className="me-2 text-decoration-none"
                    style={{ fontSize: 13 }}
                  >
                    XIAOMI Redmi Note 13 6.67" 6GB RAM/128GB ROM Android 12 -
                    Black
                  </a>
                </p>
              </div>
              <div>
                <div className="grid grid-cols-12 gap-4 px-2">
                  <section
                    className={`${Styles.detailsSection} bg-white mt-2 col-span-9`}
                    id="detail"
                    style={{ borderRadius: "5px" }}
                  >
                    <div className="grid grid-cols-12 gap-4 mt-3">
                      <div className="col-span-4">
                        <img
                          src="https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/55/3476082/1.jpg?5801"
                          alt=""
                          className=""
                        />

                        <p
                          className="text-gray-700 mx-2me-2 hover:text-gray-900 text-decoration-none"
                          style={{
                            paddingLeft: 50,
                            fontSize: 13,
                            paddingTop: 5,
                          }}
                        >
                          SHARE THIS PRODUCT
                        </p>
                        <div className="flex mx-2" style={{ paddingLeft: 80 }}>
                          <div className="flex items-center justify-center mx-1 text-gray-700 border border-gray-700 rounded-full border-1 hover:text-gray-900">
                            <TiSocialFacebook />
                          </div>
                          <div className="flex items-center justify-center mx-1 text-gray-700 border border-gray-700 rounded-full border-1 hover:text-gray-900">
                            <FaTwitter />
                          </div>
                        </div>
                      </div>

                      <div className="col-span-8" style={{ padding: 10 }}>
                        <h3 className="text-gray-700 hover:text-gray-900">
                          XIAOMI Redmi Note 13 6.67" 6GB RAM/128GB ROM Android
                          12 - Black
                        </h3>
                        <h4>brand: </h4>
                        <div className="w-full border-b border-gray-200"></div>
                        <div className="flex items-end">
                          <p className="text-gray-700 me-1 pFirst hover:text-gray-900">
                            EGP 214,000
                          </p>
                        </div>
                        <p className="text-gray-700 pThird hover:text-gray-900">
                          {Math.floor(Math.random() * 20)} units left
                        </p>
                        <p className="text-gray-700 pFourth hover:text-gray-900">
                          Delivery fees from EGP 35.00 to Minya. Save 10 EGP on
                          shipping with prepaid payment
                        </p>
                        <div className="flex items-center">
                          <div className="flex">
                            <FaStar style={{ color: "orange" }} />
                            <FaStar style={{ color: "orange" }} />
                            <FaStar style={{ color: "orange" }} />
                            <FaStar style={{ color: "orange" }} />
                            <FaRegStarHalfStroke style={{ color: "orange" }} />
                          </div>
                          <div
                            className={`${Styles.random} mt-1 ms-1 text-gray-700 hover:text-gray-900`}
                            style={{ fontSize: ".875rem", fontWeight: 500 }}
                          >
                            ({Math.floor(Math.random() * 300)} verified ratings)
                          </div>
                        </div>
                        <div className="w-full my-2 border-b border-gray-200 "></div>
                        <p className="text-gray-700 hover:text-gray-900">
                          VARIATION AVAILABLE
                        </p>
                        <div className={`${Styles.variation} py-1`}>black</div>

                        <div
                          className="flex items-center justify-between px-2 py-2 mx-1 my-2"
                          style={{
                            backgroundColor: "orange",
                            borderRadius: "4px",
                            color: "white",
                            cursor: "pointer",
                          }}
                        >
                          <div className={`${Styles.cartImg}`}>
                            <MdAddShoppingCart />
                          </div>
                          <p>ADD TO CART</p>
                          <div></div>
                        </div>

                        <div className="w-full my-3 border-b border-gray-200"></div>

                        <div>
                          <div className="text-gray-700 hover:text-gray-900">
                            PROMOTIONS
                          </div>
                          <div className="flex">
                            <div className={`${Styles.color1}`}>
                              <MdStars />
                            </div>
                            <p className={`${Styles.random} mt-1 ms-2`}>
                              Check All Our Installments Offers from here{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className={`${Styles.random} ${Styles.down} ms-2`}>
                      report incorrect product information
                    </p>
                  </section>

                  <section className="col-span-3">
                    <div
                      className={`bg-white px-2 mt-2 pt-2 ${Styles.detailsection2}`}
                      style={{ borderRadius: "5px", color: "black" }}
                    >
                      <div className={Styles.dtsub1}>
                        <p>DELIVERY RETURNS</p>
                      </div>
                      <div className="w-full my-2 border-b border-gray-200"></div>
                      <div className={Styles.expressanother}>
                        <img
                          src="https://vendorhub.jumia.co.ke/wp-content/uploads/2017/08/Jumia-Express-logo-e1556633520715.png"
                          alt=""
                        />
                        <p>Free delivery on thousands of products</p>
                      </div>
                      <div className="w-full my-2 border-b border-gray-200"></div>
                      <div
                        style={{
                          padding: "10px",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <select
                          className="my-3 form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Al Minya</option>
                          <option value="1">Cairo</option>
                          <option value="2">Giza</option>
                          <option value="3">Alexandria</option>
                        </select>
                        <select
                          className="my-2 form-select"
                          aria-label="Default select example"
                        >
                          <option selected>Minya</option>
                          <option value="1">Magaha</option>
                          <option value="2">Malawi</option>
                          <option value="3">Samalot</option>
                        </select>
                      </div>
                      <div>
                        <div className="flex">
                          <div className={`p-2 border me-2 ${Styles.ordering}`}>
                            <FaHandsHolding />
                          </div>
                          <div>
                            <div
                              className="flex justify-between w-full"
                              style={{ padding: 10 }}
                            >
                              <p className={Styles.subb1}>Pickup Station</p>
                              <p className={Styles.subb2}>Details</p>
                            </div>
                            <p className={Styles.subb3}>Delivery EGP 250</p>
                            <p className={Styles.subb4}>
                              Arriving at pickup station between 26 February &
                              27 February when you order within next 5hrs 15mins
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div className="flex" style={{ padding: 10 }}>
                          <div className={`p-2 border me-2 ${Styles.ordering}`}>
                            <CiDeliveryTruck />
                          </div>
                          <div>
                            <div className="flex justify-between w-full">
                              <p className={Styles.subb1}>Door Delivery</p>
                              <p className={Styles.subb2}>Details</p>
                            </div>
                            <p className={Styles.subb3}>Delivery </p>
                            <p className={Styles.subb4}>
                              Ready for delivery between 12 March & 14 March
                              when you order within next 3hrs 24mins
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex" style={{ padding: 10 }}>
                          <div className={`p-2 border me-2 ${Styles.ordering}`}>
                            <GoPackageDependencies />
                          </div>
                          <div>
                            <div className="flex justify-between w-full">
                              <p className={Styles.subb1}>Return Policy</p>
                            </div>

                            <p className={Styles.subb4}>
                              Free return within the legal return period from 14
                              to 30 days, and if they meet the terms &
                              conditions, with the need to report any apparent
                              defect within 48 hours. For more details about
                              return policy.Details
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4 px-2">
                <section
                  className={`${Styles.detailsSection} bg-white mt-2 col-span-9`}
                  id="detail"
                  style={{ borderRadius: "5px", padding: "20px" }}
                >
                  <div className="bg-white ">
                    <p
                      className="text-gray-700 hover:text-gray-900"
                      style={{ fontSize: "1.25rem", fontWeight: "500" }}
                    >
                      Product details
                    </p>
                    <div className="w-full my-4 border-b border-gray-100"></div>
                    <ul>
                      <li className="text-gray-700 " style={{ fontSize: 13 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptate excepturi aspernatur modi sapiente quasi ullam
                        alias blanditiis, soluta placeat omnis fuga deserunt
                        quisquam commodi distinctio et quas in architecto
                        dignissimos.
                      </li>
                    </ul>
                  </div>
                </section>
              </div>

              <div className="grid grid-cols-12 gap-4 px-2">
                <section
                  className={`${Styles.detailsSection} bg-white mt-2 col-span-9`}
                  id="detail"
                  style={{ borderRadius: "5px", padding: "20px" }}
                >
                  <div className="bg-white">
                    <p
                      className="text-gray-700 hover:text-gray-900"
                      style={{ fontSize: "1.25rem", fontWeight: "500" }}
                    >
                      Specifications
                    </p>
                    <div className="my-4 border-b border-gray-100"></div>
                    <div className="flex gap-10 pt-6">
                      <table
                        className="w-1/2 border"
                        style={{ padding: "20px", borderRadius: "10px" }}
                      >
                        <thead>
                          <tr>
                            <th
                              className="text-gray-700 hover:text-gray-900"
                              style={{
                                fontSize: ".875rem",
                                fontWeight: "500",
                                padding: "15px",
                              }}
                            >
                              SPECIFICATIONS
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ padding: "5px" }}>
                              <ul className="list-disc list-inside">
                                <li
                                  className="text-base text-gray-700"
                                  style={{
                                    fontSize: "0.85rem",
                                    fontWeight: "500",
                                    padding: "5px",
                                  }}
                                >
                                  SKU: SA024MP1IC742NAFAMZ
                                </li>
                                <li
                                  className="text-base text-gray-700"
                                  style={{
                                    fontSize: "0.85rem",
                                    fontWeight: "500",
                                    padding: "5px",
                                  }}
                                >
                                  Model: SM-A145F
                                </li>
                                <li
                                  className="text-base text-gray-700"
                                  style={{
                                    fontSize: "0.85rem",
                                    fontWeight: "500",
                                    padding: "5px",
                                  }}
                                >
                                  Size (L x W x H cm): 167.7 x 78 x 9.1 mm
                                </li>
                                <li
                                  className="text-base text-gray-700"
                                  style={{
                                    fontSize: "0.85rem",
                                    fontWeight: "500",
                                    padding: "5px",
                                  }}
                                >
                                  Color: Black
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        className="w-1/2 border"
                        style={{ padding: "20px", borderRadius: "5px" }}
                      >
                        <thead>
                          <tr>
                            <th
                              className="text-gray-700 hover:text-gray-900"
                              style={{
                                fontSize: ".875rem",
                                fontWeight: "500",
                                padding: "15px",
                              }}
                            >
                              KEY FEATURES
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ padding: "5px" }}>
                              <ul className="list-disc list-inside">
                                <li
                                  className="text-base text-gray-700"
                                  style={{
                                    fontSize: "0.85rem",
                                    fontWeight: "500",
                                    padding: "5px",
                                  }}
                                >
                                  SKU: SA024MP1IC742NAFAMZ
                                </li>
                                <li
                                  className="text-base text-gray-700"
                                  style={{
                                    fontSize: "0.85rem",
                                    fontWeight: "500",
                                    padding: "5px",
                                  }}
                                >
                                  Model: SM-A145F
                                </li>
                                <li
                                  className="text-base text-gray-700"
                                  style={{
                                    fontSize: "0.85rem",
                                    fontWeight: "500",
                                    padding: "5px",
                                  }}
                                >
                                  Size (L x W x H cm): 167.7 x 78 x 9.1 mm
                                </li>
                                <li
                                  className="text-base text-gray-700"
                                  style={{
                                    fontSize: "0.85rem",
                                    fontWeight: "500",
                                    padding: "5px",
                                  }}
                                >
                                  Color: Black
                                </li>
                              </ul>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </section>
              </div>

              <div className="grid grid-cols-12 gap-4 px-2">
                <section
                  className={`${Styles.detailsSection} bg-white mt-2 col-span-9`}
                  id="detail"
                  style={{ borderRadius: "5px", padding: "20px" }}
                >
                  <div className="bg-white ">
                    <p
                      className="text-gray-700 hover:text-gray-900"
                      style={{ fontSize: "1.25rem", fontWeight: "500" }}
                    >
                      Customers who viewed this also viewed
                    </p>
                    <ProductSection
                      data={data5}
                      display="hidden"
                      flash="hidden"
                      time="hidden"
                    />
                  </div>
                </section>
              </div>

              <div className="grid grid-cols-12 gap-4 px-2">
                <section
                  className={`${Styles.detailsSection} bg-white mt-2 col-span-9`}
                  id="detail"
                  style={{ borderRadius: "5px" }}
                >
                  <div className="mt-3 bg-white">
                    <FeedbackList />
                  </div>
                </section>
              </div>

              <div className="grid grid-cols-12 gap-4 px-2">
                <section
                  className={`${Styles.detailsSection} bg-white mt-2 col-span-9`}
                  id="detail"
                  style={{ borderRadius: "5px", padding: 20 }}
                >
                  <div className="bg-white ">
                    <p
                      className="text-gray-700 hover:text-gray-900"
                      style={{ fontSize: "1.25rem", fontWeight: "500" }}
                    >
                      You may also like
                    </p>
                    <ProductSection
                      data={data5}
                      display="hidden"
                      flash="hidden"
                      time="hidden"
                    />
                  </div>
                </section>
              </div>
            </div>

            <div className="grid grid-cols-10 gap-4 px-2">
              <section
                className={`${Styles.detailsSection} bg-white mt-2 col-span-10`}
                id="detail"
                style={{ borderRadius: "5px", padding: 20 }}
              >
                <div className="bg-white">
                  <p
                    className="text-gray-700 hover:text-gray-900"
                    style={{ fontSize: "1.25rem", fontWeight: "500" }}
                  >
                    More items from this seller
                  </p>
                  <ProductSection
                    data={data5}
                    display="hidden"
                    flash="hidden"
                    time="hidden"
                  />
                </div>
              </section>
            </div>
            <div
              className="grid grid-cols-10 gap-4 px-2"
              style={{ paddingBottom: 20 }}
            >
              <section
                className={`${Styles.detailsSection} bg-white mt-2 col-span-10`}
                id="detail"
                style={{ borderRadius: "5px", padding: 20 }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <h3
                    className="text-gray-700 hover:text-gray-900"
                    style={{ fontSize: "1.25rem", fontWeight: "500" }}
                  >
                    Recently Viewed
                  </h3>
                  <div className="border-b border-gray-300"></div>
                  <button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      color: "orange",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    SEE ALL <IoIosArrowForward style={{ color: "orange" }} />
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
        </div>
        <Footer />
      </>
    );
  else return <h1>you have a problem with ssr</h1>;
};

export default ProductDetails;

import Test from "./Test";
import Test2 from "./Test2";
import styles from "../../styles/Toggler.module.css";
import React, { useState, useEffect } from "react";
import jsonData from "./dummyData.json";

export default function Toggler({ activeItemIndex }) {
  const [filteredData, setFilteredData] = useState(
    jsonData.filter((item) => item.id === 0)
  );

  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    setActiveItem(activeItemIndex);
  }, [activeItemIndex]);

  const handleClick = (index) => {
    setActiveItem(index);
    const filteredData = jsonData.filter((item) => item.id === index);
    setFilteredData(filteredData);
  };

  return (
    <>
      <div
        className={` ${styles.parent} mx-auto w-full max-w-1170 bg-gray-100 mt-6 lg:mt-0`}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-4 md:grid-cols-12 gap-6 mt-2">
            <div className="col-span-12 md:col-span-3">
              <div className="bg-white shadow rounded-lg">
                <div className="flex flex-col">
                  <ul className="font-semibold">
                    <li
                      className={`flex justify-start items-center gap-x-5 cursor-pointer border-b p-4 ${
                        activeItem === 0 ? `${styles.Left}` : ""
                      }`}
                      onClick={() => handleClick(0)}
                    >
                      <img
                        className={`${styles.icon}`}
                        src="https://cxp-desktop.netlify.app/jpg/payments.jpg"
                        alt="icon"
                      />
                      Payment
                    </li>
                    <li
                      className={`flex justify-start items-center gap-x-5 cursor-pointer border-b p-4 ${
                        activeItem === 1 ? `${styles.Left}` : ""
                      }`}
                      onClick={() => handleClick(1)}
                    >
                      <img
                        className={`${styles.icon}`}
                        src="https://cxp-desktop.netlify.app/jpg/vouchers.jpg"
                        alt="icon"
                      />
                      Vouchers
                    </li>
                    <li
                      className={`flex justify-start items-center gap-x-5 cursor-pointer border-b p-4 ${
                        activeItem === 2 ? `${styles.Left}` : ""
                      }`}
                      onClick={() => handleClick(2)}
                    >
                      <img
                        className={`${styles.icon}`}
                        src="https://cxp-desktop.netlify.app/jpg/delivery.jpg"
                        alt="icon"
                      />
                      Products
                    </li>
                    <li
                      className={`flex justify-start items-center gap-x-5 cursor-pointer border-b p-4 ${
                        activeItem === 3 ? `${styles.Left}` : ""
                      }`}
                      onClick={() => handleClick(3)}
                    >
                      <img
                        className={`${styles.icon}`}
                        src="https://cxp-desktop.netlify.app/jpg/returns-refunds.jpg"
                        alt="icon"
                      />
                      Delivery
                    </li>
                    <li
                      className={`flex justify-start items-center gap-x-5 cursor-pointer border-b p-4 ${
                        activeItem === 4 ? `${styles.Left}` : ""
                      }`}
                      onClick={() => handleClick(4)}
                    >
                      <img
                        className={`${styles.icon}`}
                        src="https://cxp-desktop.netlify.app/jpg/products.jpg"
                        alt="icon"
                      />
                      Orders
                    </li>
                    <li
                      className={`flex justify-start items-center gap-x-5 cursor-pointer border-b p-4 ${
                        activeItem === 5 ? `${styles.Left}` : ""
                      }`}
                      onClick={() => handleClick(5)}
                    >
                      <img
                        className={`${styles.icon}`}
                        src="https://cxp-desktop.netlify.app/jpg/account.jpg"
                        alt="icon"
                      />
                      Returns & Refunds
                    </li>
                    <li
                      className={`flex justify-start items-center gap-x-5 cursor-pointer border-b p-4 ${
                        activeItem === 6 ? `${styles.Left}` : ""
                      }`}
                      onClick={() => handleClick(6)}
                    >
                      <img
                        className={`${styles.icon}`}
                        src="https://cxp-desktop.netlify.app/jpg/jumia-express.jpg"
                        alt="icon"
                      />
                      Account
                    </li>
                    <li
                      className={`flex justify-start items-center gap-x-5 cursor-pointer p-4 ${
                        activeItem === 7 ? `${styles.Left}` : ""
                      }`}
                      onClick={() => handleClick(7)}
                    >
                      <img
                        className={`${styles.icon}`}
                        src="https://cxp-desktop.netlify.app/jpg/products.jpg"
                        alt="icon"
                      />
                      Sell on Jumia
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="bg-white shadow rounded-lg p-6">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
                  {activeItem < 7 ? (
                    <Test filteredData={filteredData} />
                  ) : (
                    console.log(activeItem),
                    <Test2  filteredData={filteredData} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.Chat1}`}>
          <div>
            <p style={{ fontWeight: 600, color: "#282828", fontSize: "20px" }}>
              Talk to an agent
            </p>
            <div className={`${styles.Chat}`}>
              <button
                className={`${styles.cta}`}
                data-btn-lc="true"
                data-eventcategory="LiveChat"
                data-eventaction="open"
                data-track-onclick="true"
                data-track-onclick-bound="true"
              >
                <img
                  src="https://cxp-desktop.netlify.app/jpg/chat.jpg"
                  className="w-12"
                  alt="icon"
                />
                <div
                  style={{
                    fontWeight: 600,
                    textAlign: "left",
                    fontSize: "20px",
                  }}
                >
                  <span>Live Chat</span>
                  <p
                    style={{
                      fontWeight: 600,
                      color: "#282828",
                      fontSize: "1.5vh",
                    }}
                    className={`${styles.text}`}
                  >
                    Ramadan Kareem! We are available from Sunday to Thursday and
                    on Saturday, between 8 pm and 2 am.
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

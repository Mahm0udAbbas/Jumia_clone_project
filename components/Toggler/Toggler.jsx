import styles from "../../styles/Toggler.module.css";
import React, { useState, useEffect } from "react";
import jsonData from "./dummyData.json";

export default function Toggler() {
  const [filteredData, setFilteredData] = useState(
    jsonData.filter((item) => item.id === 0)
  );
  const [toggles, setToggles] = useState(
    Array(filteredData.length).fill(false)
  );
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    setToggles(Array(filteredData.length).fill(false));
  }, [filteredData]);

  // Function to toggle the state of a specific item
  const toggleFAQ = (index) => {
    const newToggles = [...toggles];
    newToggles[index] = !newToggles[index];
    setToggles(newToggles);
  };

  const handleClick = (index) => {
    setActiveItem(index);

    const filteredData = jsonData.filter((item, id) => item.id === index);

    // Update toggles based on the length of filteredData
    setToggles(Array(filteredData.length).fill(false));

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
                  <ul className="w-full border border-solid border-gray-300 rounded-md ">
                    {filteredData.map((item, index) => (
                      <li key={index} className={`border-b w-full px-5`}>
                        <button
                          className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left md:text-lg border-base-content/10"
                          onClick={() => toggleFAQ(index)}
                          aria-expanded={toggles[index] ? "true" : "false"}
                        >
                          <span className="flex-1 text-base-content">
                            {item.title}
                          </span>
                          <svg
                            className="flex-shrink-0 w-2 h-2 ml-auto fill-current transform transition duration-200 ease-out"
                            viewBox="0 0 16 16"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            {/* Icon for the minus sign */}
                            {toggles[index] ? (
                              <rect
                                y="7"
                                width="16"
                                height="2"
                                rx="1"
                                className="transform origin-center transition duration-200 ease-out rotate-0"
                              ></rect>
                            ) : (
                              <>
                                <rect
                                  y="7"
                                  width="16"
                                  height="2"
                                  rx="1"
                                  className="transform origin-center transition duration-200 ease-out rotate-90"
                                ></rect>
                                <rect
                                  y="7"
                                  width="16"
                                  height="2"
                                  rx="1"
                                  className="transform origin-center transition duration-200 ease-out rotate-0"
                                ></rect>
                              </>
                            )}
                          </svg>
                        </button>
                        <div
                          className={`transition-all duration-200 ease-in-out max-h-0 overflow-hidden ${
                            toggles[index] ? "max-h-full" : ""
                          }`}
                          style={{
                            transition: "max-height 0.3s ease-in-out 0s",
                          }}
                        >
                          <div className="pb-5 leading-relaxed">
                            {/* Render HTML content safely */}
                            <div
                              className="space-y-2 leading-relaxed"
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            />
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${styles.Chat1}`}
        >
          <div>
            <p style={{ fontWeight: 600, color: "#282828", fontSize: "20px" }}>
              Talk to an agent
            </p>
            <div className={`${styles.Chat}`}>
              <button
                className={`${styles.cta}`}
                aria-type="cta"
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
                      Ramadan Kareem! We are available from Sunday to Thursday
                      and on Saturday, between 8 pm and 2 am.
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
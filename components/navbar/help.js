import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import React, { useState } from "react";
import Link from "next/link";
export default function Help() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <dropDown
        className="cursor-pointer flex items-center space-x-2"
        onClick={toggleDropdown}
      >
        <HelpOutlineOutlinedIcon className="h-12 font-bold" />
        <span className="font-bold capitalize">help</span>
      </dropDown>
      {isOpen && (
        <div
          className="absolute top-full w-52 left-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md "
          style={{ zIndex: 100 }}
        >
          <Link href="/help">
            <p className="block text-sm px-4 py-2  hover:bg-gray-100">
              <div className="flex items-center ">
                <span>help Center</span>
              </div>
            </p>
          </Link>
          <Link href="/help">
            <p className="block text-sm px-4 py-2 hover:bg-gray-100">
              <div className="flex items-center">
                <span>Place an Order</span>
              </div>
            </p>
          </Link>
          <Link href="/help">
            <p className="block text-sm px-4 py-2 hover:bg-gray-100 ">
              <div className="flex items-center">
                <span>Pay for Your Order</span>
              </div>
            </p>
          </Link>
          <Link href="/help">
            <p className="block text-sm px-4 py-2 hover:bg-gray-100 ">
              <div className="flex items-center">
                <span>Track Your Order</span>
              </div>
            </p>
          </Link>
          <Link href="/help">
            <p className="block text-sm px-4 py-2 hover:bg-gray-100 ">
              <div className="flex items-center">
                <span>Cancel an Order</span>
              </div>
            </p>
          </Link>
          <Link href="/help">
            <p className="block text-sm px-4 py-2 hover:bg-gray-100 ">
              <div className="flex items-center">
                <span>Create a return</span>
              </div>
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}
Help.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

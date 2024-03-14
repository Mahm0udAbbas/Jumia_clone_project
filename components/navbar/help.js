import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function Help() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="cursor-pointer flex items-center space-x-2"
        onClick={toggleDropdown}
      >
        <HelpOutlineOutlinedIcon className="h-12 font-bold" />
        <span >help</span>
      </div>
      {isOpen && (
        <div
          className="absolute top-full w-52 left-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md"
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

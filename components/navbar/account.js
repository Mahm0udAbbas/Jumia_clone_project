// import Link from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import InventoryIcon from "@mui/icons-material/Inventory";
import MailIcon from "@mui/icons-material/Mail";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import React, { useState } from "react";
import Link from "next/link";
export default function Account() {
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
        <PersonOutlineIcon className="h-12 font-bold" />
        <span className="font-bold capitalize">Account</span>
      </dropDown>
      {isOpen && (
        <div
          className="absolute top-full w-48 left-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md"
          style={{ zIndex: 100 }}
        >
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="btn btn-warning m-2 px-9 text-white hidden lg:inline"
            >
              SIGNUP
            </button>
          </div>
          <hr></hr>
          <Link href="/account/JumiaAccount">
            <p className="block px-4 py-2 hover:bg-gray-100">
              <div className="flex items-center space-x-2">
                <PersonOutlineIcon className="h-6" />
                <span>My Account</span>
              </div>
            </p>
          </Link>
          <Link href="/account/Orders">
            <p className="block px-4 py-2 hover:bg-gray-100">
              <div className="flex items-center space-x-2">
                <ShoppingBagOutlinedIcon className="h-6" />
                <span>Orders</span>
              </div>
            </p>
          </Link>
          <Link href="/account/inbox">
            <p className="block px-4 py-2 hover:bg-gray-100">
              <div className="flex items-center space-x-2">
                <EmailOutlinedIcon className="h-6" />
                <span>Inbox</span>
              </div>
            </p>
          </Link>
          <Link href="/account/Saveditems">
            <p className="block px-4 py-2 hover:bg-gray-100">
              <div className="flex items-center space-x-2">
                <FavoriteBorderIcon className="h-6" />
                <span>Saved Items</span>
              </div>
            </p>
          </Link>
          <Link href="/account/Voucher">
            <p className="block px-4 py-2 hover:bg-gray-100">
              <div className="flex items-center space-x-2">
                <LocalAtmIcon className="h-6" />
                <span>Vouchers</span>
              </div>
            </p>
          </Link>
        </div>
      )}
    </div>
  );
}

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import React, { useState, useEffect, useRef } from "react";
import { Button } from "@material-tailwind/react";
import { Spinner } from "@material-tailwind/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, firestore } from "@/firebase";
import { getDoc, doc } from "firebase/firestore";

export default function Account() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const dropdownRef = useRef(null);
  const [userState, setUserState] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        getDoc(doc(firestore, "users", user.uid)).then((user) =>
          setUserState(user.data())
        );
        setUserState(user);
      }
    });
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="cursor-pointer flex items-center justify-center"
        onClick={toggleDropdown}
      >
        {userState ? (
          <>
            <PersonOutlineIcon className="h-12 font-bold" />
            <span>
              Hi, {userState.displayName?.split(" ")[0] || <Spinner />}
            </span>
          </>
        ) : (
          <>
            <PersonOutlineIcon className="h-12 font-bold" />
            <span>Account</span>
          </>
        )}
      </div>
      {isOpen && (
        <div
          className="absolute top-full w-48 left-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md"
          style={{ zIndex: 100 }}
          id="container"
        >
          <div className="flex items-center justify-center">
            {userState ? (
              ""
            ) : (
              <button
                type="submit"
                className="btn btn-warning m-2 px-9 text-white hidden lg:inline"
                onClick={() => {
                  router.push("/identification");
                }}
              >
                SIGNUP
              </button>
            )}
          </div>
          <hr></hr>
          <Link href="/account/JumiaAccount">
            <div className="block px-4 py-2 hover:bg-gray-100">
              <div className="flex items-center space-x-2">
                <PersonOutlineIcon className="h-6" />
                <span>My Account</span>
              </div>
            </div>
          </Link>
          <Link href="/account/Orders">
            <div className="block px-4 py-2 hover:bg-gray-100">
              <div className="flex items-center space-x-2">
                <ShoppingBagOutlinedIcon className="h-6" />
                <span>Orders</span>
              </div>
            </div>
          </Link>
          <Link href="/account/Saveditems">
            <div className="block px-4 py-2 hover:bg-gray-100">
              <div className="flex items-center space-x-2">
                <FavoriteBorderIcon className="h-6" />
                <span>Saved Items</span>
              </div>
            </div>
          </Link>
          {userState ? (
            <Button
              type="submit"
              className="m-4 py-3 px-9 text-white"
              size="lg"
              loading={isLoading}
              color="amber"
              onClick={() => {
                signOut(auth).then(() => {
                  setLoading(true);
                  setTimeout(() => {
                    setLoading(false);
                    setUserState(null);
                  }, 3000);
                });
              }}
            >
              SIGNOUT
            </Button>
          ) : (
            ""
          )}
        </div>
      )}
    </div>
  );
}

import Link from "next/link";
import React from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import AddBusinessOutlinedIcon from "@mui/icons-material/AddBusinessOutlined";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import RateReviewOutlinedIcon from "@mui/icons-material/RateReviewOutlined";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
const AccountLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>
        <section className=" box-border ">
          <div className="grid md:grid-cols-4 gap-4 mx-auto py-4 px-2    ">
            <div className="bg-white grid-cols-4 mw-[25%]">
              <div className="bg-white col-span-1  ">
                <Link
                  href="/account/JumiaAccount"
                  className="flex py-3 px-4 hover:bg-blue-300 active:bg-blue-300"
                >
                  <PersonOutlineIcon className="me-4" />
                  My Jumia Account
                </Link>
                <Link
                  href="/account/Orders"
                  className="flex py-3 px-4 hover:bg-blue-300"
                >
                  <ShoppingBagOutlinedIcon className="me-4" />
                  Orders
                </Link>
                <Link
                  href="/account/inbox"
                  className="flex py-3 px-4 hover:bg-blue-300"
                >
                  <EmailOutlinedIcon className="me-4" />
                  Inbox
                </Link>
                <Link
                  href="/account/pendingReview"
                  className="flex py-3 px-4 hover:bg-blue-300"
                >
                  <RateReviewOutlinedIcon className="w-6 h-6 mr-4" />
                  Pending Reviews
                </Link>
                <Link
                  href="/account/Voucher"
                  className="flex py-3 px-4  hover:bg-blue-300"
                >
                  <LocalAtmIcon className="me-4" />
                  Voucheers
                </Link>
                <Link
                  href="/account/Saveditems"
                  className="flex py-3 px-4 hover:bg-blue-300"
                >
                  <FavoriteBorderOutlinedIcon className="me-4" />
                  Saved Item
                </Link>
                <Link
                  href="/account/followedSeller"
                  className="flex py-3 px-4 hover:bg-blue-300"
                >
                  <AddBusinessOutlinedIcon className="me-4" />
                  Followed Sellers
                </Link>
                <Link
                  href="/account/recentlyViewed"
                  className="flex py-3 px-4 hover:bg-blue-300"
                >
                  <RestoreOutlinedIcon className="me-4" />
                  Recently Viewed
                </Link>
                <Link
                  href="/account/AccountManagement"
                  className="flex p-3 hover:bg-blue-300"
                >
                  Account Management
                </Link>
                <Link
                  href="/account/AddressBook"
                  className="flex p-3 hover:bg-blue-300"
                >
                  Address Book
                </Link>
                <Link href="#" className="flex p-3 hover:bg-blue-300">
                  NewsLetters Preference
                </Link>
                <Link
                  href="/account/CloseAccount"
                  className="flex p-3 hover:bg-blue-300"
                >
                  Close Account
                </Link>
                <form className="p-4 text-center">
                  <button className="text-yellow-500 hover:bg-orange-300 rounded-lg m-4 p-2">
                    LOGOUT
                  </button>
                </form>
              </div>
              <main className="w-[75%]">
                <div className="bg-white  px-2 col-span-3  ">{children}</div>
              </main>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AccountLayout;

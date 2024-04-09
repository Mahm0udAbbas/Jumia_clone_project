import Link from "next/link";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import { AccountPageLayout } from "@/components/Account_Layout";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
function Myaccount() {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    onAuthStateChanged(auth, user => setUser(user));
  }, []);
  return (
    <>
      <main>
        <header className="border-b py-2 px-4">
          <h2>Account Overview</h2>
        </header>
        <div className=" grid md:grid-cols-2 ">
          <div className="p-2">
            <div className=" border p-2 h-[100%]">
              <article>
                <header className="border-b p-4">ACCOUNT DETAILS</header>
                {/* Get name and user email. */}
                <div>
                  <p className="pt-2 px-2">{user?.displayName}</p>
                  <p className="p-2">{user?.email}</p>
                </div>
              </article>
            </div>
          </div>
          <div className=" p-2">
            <div className=" border p-2  ">
              <div className="border-b p-4 flex justify-between ">
                <h3 className="p-0 ">ADDRESS BOOK</h3>
                <Link
                  className="hover:bg-orange-200 hover:rounded-full mx-4 text-amber-500 "
                  href="/account/AddressBook/EditOldAddress"
                >
                  <EditIcon />
                </Link>
              </div>
              <div>
                <h3 className="pt-2 px-2">Your default shipping address:</h3>
                <p className="p-2">User name API</p>
                <p className="p-2">User address API</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Myaccount;
Myaccount.getLayout = AccountPageLayout;

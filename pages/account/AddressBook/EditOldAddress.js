import { AccountPageLayout } from "@/components/Account_Layout";
import EditAdressForm from "@/components/order/EditAdressForm/EditAdressForm";
import Link from "next/link";
import React from "react";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
function EditOldAddress() {
  return (
    <>
      <div>
        <header className="border-b p-2 flex">
          <Link
            href="/account/AddressBook"
            className="flex items-center hover:underline "
          >
            <ArrowBackIosNewIcon className="text-md pe-2" />
            <h1>Edit Address</h1>
          </Link>
        </header>

        <EditAdressForm />
      </div>
    </>
  );
}

export default EditOldAddress;
EditOldAddress.getLayout = AccountPageLayout;

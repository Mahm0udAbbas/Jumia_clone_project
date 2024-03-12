import { AccountPageLayout } from "@/components/Account_Layout";
import Link from "next/link";
import React from "react";

function Inbox() {
  return (
    <>
      <div className="box-border  h-[100%]">
        <header className="py-2 border-b px-4">
          <h2>Pending Reviews</h2>
        </header>
        <div className="text-center mx-48  py-8 items-center h-[100%]">
          <img src="/empty-mail.648a482b.svg" className="w-100 h-100 my-2  " />
          <p className="py-2">You don't have any messages</p>
          <p className="py-2">
            Here you will be able to see all the messages that we send you. Stay
            tuned
          </p>
        </div>
      </div>
    </>
  );
}

export default Inbox;
Inbox.getLayout = AccountPageLayout;

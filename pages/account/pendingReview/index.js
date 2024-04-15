import { AccountPageLayout } from "@/layouts/AccountLayout";
import Link from "next/link";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
function PendingReviews() {
  const { t } = useTranslation("common", "account");

  return (
    <>
      <div className="box-border  h-[100%]">
        <header className="py-2 border-b px-4">
          <h2>Pending Reviews</h2>
        </header>
        <div className="text-center mx-48  py-8 items-center h-[100%]">
          <img src="/review.e9fae2f3 (1).svg" className="w-100 h-100 my-2  " />
          <p className="py-2">You have no orders waiting for feedback</p>
          <p className="py-2">
            After getting your products delivered, you will be able to rate and
            review them. Your feedback will be published on the product page to
            help all Jumia's users get the best shopping experience!
          </p>
          <Link
            href="#" //home path
            className="btn text-white bg-amber-500 hover:bg-yellow-400 my-6 p-4"
          >
            {" "}
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    </>
  );
}

export default PendingReviews;
PendingReviews.getLayout = AccountPageLayout;
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "account", "nav"])),
      // Will be passed to the page component as props
    },
  };
}

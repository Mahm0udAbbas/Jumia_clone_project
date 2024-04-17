import React from "react";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { useTranslation } from "next-i18next";

export default function NoReviews() {
  const { t } = useTranslation("productdetails");
  return (
    <div className="px-24 flex flex-col items-center">
      <img
        style={{ paddingBottom: "20px" }}
        src="https://www.jumia.com.eg/assets_he/images/chat.f9ff7ea4.svg"
        height="100"
        width="100"
        alt=""
      />
      <p style={{ paddingBottom: "10px" }}>
        {t(
          "Customers who have bought this product have not yet posted comments."
        )}
      </p>
    </div>
  );
}

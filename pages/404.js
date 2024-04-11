import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Error() {
  return (
    <div className="w-full text-center flex flex-col md:flex-row justify-between items-center p-10 container mx-auto">
      <div className="text-start p-4">
        <h1 className="mb-2 text-lg font-bold">Sorry Page Unavailable</h1>
        <p className="mb-2">We couldn’t find the page you are looking for</p>
        <p className="mb-2">
          But we have millions more shopping items for you to browse!
        </p>
        <Link href="/" className="btn btn-warning text-white mt-6 ">
          GO TO HOMEPAGE
        </Link>
      </div>{" "}
      <Image
        src="https://www.jumia.com.eg/assets_he/images/people.9416a3fb.svg"
        width={500}
        height={700}
      />
    </div>
  );
}

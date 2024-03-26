import Link from "next/link";
import React from "react";

export default function ListItem({ children, className, onClick, id }) {
  return (
    <>
      <li>
        <Link
          href={`/category/electronics/${children.name}`}
          className="text-gray-700 hover:bg-gray-200 block px-6"
          id={id}
          onClick={onClick}
        >
          {children.name}
        </Link>
      </li>
    </>
  );
}

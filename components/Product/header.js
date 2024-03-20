import React from "react";

export default function Header({ title, color }) {
  return (
    <div
      className={`${color} p-1 text-xl text-black bg-customYellow
     uppercase text-center`}
    >
      {title}
    </div>
  );
}

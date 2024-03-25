import React from "react";

export default function Header({ title, color }) {
  return (
    <div
      className={`${color} p-1 text-xl text-white bg-customYellow
     uppercase text-center`}
    >
      {title}
    </div>
  );
}

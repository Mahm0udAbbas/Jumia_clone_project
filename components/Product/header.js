import React from "react";

export default function Header({ title, color }) {
  return (
    <div className={`${color} p-3  text-xl text-black bg-customYellow
     uppercase text-center`}>
      {title}
    </div>
  );
}

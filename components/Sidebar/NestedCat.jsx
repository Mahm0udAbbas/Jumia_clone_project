import React from "react";

export default function NestedCat({ children }) {
  return (
    <div>
      <h3 className="text-lg mb-2 ml-2 cursor-default">{children}</h3>
    </div>
  );
}
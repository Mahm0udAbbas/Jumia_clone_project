"use client";
import React from "react";
import Product from "./product";
import Header from "./header";

const SubCategories = ({ children }) => {
  return <div className=" bg-white">{children}</div>;
};

export default SubCategories;

// import React from 'react';
// import Product from './product';
// import Header from './header';

// const Categories = () => {
//   const imageUrls = [
//     "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Fashion/NEW/Tops_copy_6.png",
//     "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/54.png",
//     "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/24.png",
//     "https://eg.jumia.is/cms/Icons-2023/Categories/Revamp/Supermarket/EN/24.png",
//     // Add more image URLs as needed
//   ];

//   // Split the imageUrls array into two arrays, each containing four elements
//   const firstRowImages = imageUrls.slice(0, 4);
//   const secondRowImages = imageUrls.slice(4);

//   return (
//     <div className='container bg-white'>
//       <Header title="Household Supplies" bgColor="bg-customYellow" />

//       {/* First row */}
//       <div className="row flex">
//         {firstRowImages.map((imageUrl, index) => (
//           <div key={index} className="flex flex-col w-[150px] md:w-[200px] m-2 bg-white p-4 items-center">
//             <Product imageUrl={imageUrl} imageAlt={`img ${index + 1}`} />
//           </div>
//         ))}
//       </div>

//       {/* Second row */}
//       <div className="row flex">
//         {secondRowImages.map((imageUrl, index) => (
//           <div key={index} className="flex flex-col w-[150px] md:w-[200px] m-2 bg-white p-4 items-center">
//             <Product imageUrl={imageUrl} imageAlt={`img ${index + 5}`} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SubCategories;

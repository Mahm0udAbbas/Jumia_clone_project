import React from 'react'

export default function ListItem({ children , className , onClick , id}) {
  return (
    <>
        <li>
            <a href="#" className={className} id={id} onClick={onClick}> {children} </a>
        </li>
    </>
  )
}

// // Assuming ListItem.js
// import React from 'react';

// const ListItem = ({ children }) => {
//     return (
//         <li>
//             {children}
//         </li>
//     );
// };

// export default ListItem;

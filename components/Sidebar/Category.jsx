import React from 'react'

export default function Category({ children }) {
  return (
    <div className="w-full md:w-4/12 px-16 my-8 shadow-black">
        <div className="bg-white py-6 rounded">
            {children}
        </div>
    </div>
  )
}

import React from 'react'

export default function Test2({filteredData}) {
    console.log(filteredData)
  return (
    <div>
      <p>{filteredData.id}</p>
    </div>
  )
}

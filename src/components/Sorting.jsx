import React, { useState } from 'react'
import { Sort } from '../icons'

const Sorting = ({ table }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleColumnClick = (key) => {
    const column = table.getColumn(key)
    column.toggleSorting(column.getIsSorted() === "asc")
    setIsOpen(false)
  }
  return (
    <div className="relative">
      <button onClick={() => setIsOpen(prev => !prev)} className={"flex items-center gap-3 border rounded px-[6px] py-1.5 cursor-pointer"}>
        Sort
        <Sort />
      </button>
      {
        isOpen && <div className="flex flex-col gap-1 bg-white z-20 w-[200px] rounded border absolute top-10 right-0">
          <button className="border-b px-[12px] py-[6px] text-left" onClick={() => handleColumnClick("orderDate")}>Sort by date</button>
          <button className="border-b px-[12px] py-[6px] text-left" onClick={() => handleColumnClick("orderAmount")}>Sort by amount</button>
          <button className="px-[12px] py-[6px] text-left" onClick={() => handleColumnClick("transactionFees")}>Transaction fees</button>
        </div>
      }
    </div>

  )
}

export default Sorting

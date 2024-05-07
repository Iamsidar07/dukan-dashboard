import { flexRender, getCoreRowModel, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import { Download, Help, Search, Sort } from "../icons.jsx";
import { FaCaretDown, FaChevronCircleRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GoChevronLeft, GoChevronRight } from "react-icons/go"
import { useState } from "react";
import Sorting from "./Sorting.jsx";

const formatter = new Intl.NumberFormat("en-US", {
  currency: "INR",
  style: "currency",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
})
const columns = [
  {
    accessorKey: "orderId",
    header: "Order ID",
    cell: (props) => <p className={"text-[#146EB4]"}>{props.getValue()}</p>
  }, {
    accessorKey: "orderDate",
    header: (props) => <button className={"flex items-center gap-1"}
      onClick={() => props.column.toggleSorting(props.column.getIsSorted() === "asc")}><p>Order date</p> <FaCaretDown className={"w-4 h-4"} />
    </button>,
    cell: (props) => <p
    >{new Date(props.getValue()).toLocaleString("en-US", { month: "long", year: "numeric", day: "numeric" })}</p>
  }, {
    accessorKey: "orderAmount",
    header: () => <p className={"text-right"}>Order amount</p>,
    cell: (props) => <p className={"text-right"}>{formatter.format(props.getValue())}</p>
  }, {
    accessorKey: "transactionFees",
    header: () => <p className={"flex items-center gap-1 justify-end"}>Transaction fees <Help /></p>,
    cell: (props) => <p className={"text-right"}>{formatter.format(props.getValue())}</p>
  },
]
const orderObj = {
  orderId: "#28190",
  orderDate: new Date().toString(),
  orderAmount: 1278.9,
  transactionFees: 22
}
const DATA = new Array(180).fill(orderObj)

const Table = () => {
  const [sorting, setSorting] = useState([])
  const [columnFilters, setColumnFilters] = useState([])
  const table = useReactTable({
    data: DATA,
    columns,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    state: {
      sorting,
      columnFilters
    },

  })

  const getCsvURL = () => {
    let csv = ''
    const headers = table.getAllColumns().map(t => t.id)
    headers.map((header, i) => csv += header + (i === 0 && i === headers.length - 1 ? "" : ","))
    csv += '\n'
    const rows = table.getRowModel().rowsById
    for (const key in rows) {
      const row = rows[key].original
      const { orderAmount, orderDate, orderId, transactionFees } = row
      csv += `${orderId}, ${orderDate}, ${orderAmount}, ${transactionFees}`
      csv += '\n'

    }
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    return url
  }


  return <div className="">
    <div className={"flex items-center justify-between mb-3"}>
      <div className={"flex items-center gap-2 bg-transparent border rounded px-[10px] py-2 w-full max-w-xs"}>
        <Search />
        <input
          value={table.getColumn("orderId")?.getFilterValue() ?? ""}
          onChange={e => table.getColumn("orderId")?.setFilterValue(e.target.value)}
          className={"bg-transparent outline-none flex-1"}
          placeholder={"Search by Order ID..."} />
      </div>
      <div className={"flex items-center gap-3"}>
        <Sorting table={table} />
        <a href={getCsvURL()} className={"grid place-items-center border rounded w-9 h-9 cursor-pointer"}>
          <Download />
        </a>
      </div>
    </div>
    <table className={"w-full"}>
      <thead className={"bg-[#F2F2F2]"}>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id} className={"px-[10px] py-[12px] text-left text-[#4D4D4D]"}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {
          table.getRowModel().rows.length ? (
            table.getRowModel().rows.map(row => (
              <tr key={row.id}>
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className={"px-[14px] py-[12px] border-b"}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            )
            )

          ) : (<tr>
            <td colSpan={columns.length} className="mx-auto h-24 w-full text-center">No results found</td>
          </tr>)
        }
      </tbody>
      <tfoot>
        {table.getFooterGroups().map(footerGroup => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map(header => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                    header.column.columnDef.footer,
                    header.getContext()
                  )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
    <div className="flex items-center justify-center gap-2 max-w-lg mx-auto p-2">
      <button
        className="py-[6px] pr-[12px] pl-[6px] border border-[#D9D9D9] rounded flex items-center gap-[6px] text-[#4D4D4D] disabled:opacity-80"
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}>
        <GoChevronLeft
          className="w-[18px] h-[18px] text-[#4D4D4D]"
        />
        Previous</button>
      <button onClick={() => table.setPageIndex(0)}
        className={`py-[6px] px-[8px] rounded w-7 h-7 grid place-content-center ${0 === table.getState().pagination.pageIndex && "bg-[#146EB4] text-white"}`}>
        1
      </button>
      <span className="items-end">...</span>
      {
        new Array(table.getPageCount()).fill(0).map((_, index) => {
          if (index < 9) return
          return <button key={index}
            onClick={() => table.setPageIndex(index)}
            className={`py-[6px] px-[8px]  w-7 h-7 grid place-content-center rounded ${index === table.getState().pagination.pageIndex && "bg-[#146EB4] text-white"}`}>
            {index + 1}
          </button>
        })
      }
      <button
        className="py-[6px] pr-[12px] pl-[6px] border border-[#D9D9D9] rounded flex items-center gap-[6px] text-[#4D4D4D] disabled:opacity-80"
        onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>Next
        <GoChevronRight className="w-[18px] h-[18px] text-[#4D4D4D]" />
      </button>
    </div>
  </div >
}
export default Table

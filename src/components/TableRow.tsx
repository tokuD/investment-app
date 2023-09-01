import React from 'react'

type Props = {
  year: number
  totalSavings: number
  interest: number
  totalInterest: number
  investedCapital: number
}

const TableRow = (props: Props) => {
  const { interest, investedCapital, totalInterest, totalSavings, year } = props
  return (
    <tr className="grid grid-cols-9 gap-2 text-white/[0.7]">
      <td className="text-end">{year.toFixed(0)}</td>
      <td className="money text-end col-span-2">{totalSavings.toFixed(2)}</td>
      <td className="money text-end col-span-2">{interest.toFixed(2)}</td>
      <td className="money text-end col-span-2">{totalInterest.toFixed(2)}</td>
      <td className="money text-end col-span-2">
        {investedCapital.toFixed(2)}
      </td>
    </tr>
  )
}

export default TableRow

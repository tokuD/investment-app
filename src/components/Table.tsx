'use client'
import { useInput } from '@/providers/InputProvider'
import { calcData } from '@/utils'
import React from 'react'
import TableRow from './TableRow'

type Props = {}

const Table = (props: Props) => {
  const input = useInput()
  const data = calcData(input)
  const length = Math.min(
    data.interest.length,
    data.investedCapital.length,
    data.totalInterest.length,
    data.totalSavings.length,
    data.years.length
  )
  return (
    <div className="mx-auto w-ful">
      <table className="table-auto flex flex-col">
        <thead>
          <tr className="grid grid-cols-9 gap-2 text-green-700/[0.8]">
            <th className="text-end">Year</th>
            <th className="text-end col-span-2">Total Savings</th>
            <th className="text-end col-span-2">Interest(Year)</th>
            <th className="text-end col-span-2">Total Interest</th>
            <th className="text-end col-span-2">Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {data.interest.map((_, ind) => (
            <TableRow
              key={ind}
              interest={data.interest.at(ind)!}
              investedCapital={data.investedCapital.at(ind)!}
              totalInterest={data.totalInterest.at(ind)!}
              totalSavings={data.totalSavings.at(ind)!}
              year={data.years.at(ind)!}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table

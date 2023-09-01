'use client'
import React, { Fragment, useState } from 'react'
import { Chart, Table } from '.'

type Props = {}

const Tab = (props: Props) => {
  const [showTable, setShowTable] = useState<boolean>(false)
  let content = <Chart />
  if (showTable) {
    content = <Table />
  }

  return (
    <div className="">
      <div className="flex border-b">
        <button
          className={`border border-b-0
          rounded-tl-md py-2 px-4 ${showTable && 'bg-white text-black'}`}
          onClick={() => setShowTable(true)}
        >
          Table
        </button>
        <button
          className={`border border-b-0 border-l-0
          rounded-tr-md py-2 px-4 ${showTable || 'bg-white text-black'}`}
          onClick={() => setShowTable(false)}
        >
          Graph
        </button>
      </div>
      {content}
    </div>
  )
}

export default Tab

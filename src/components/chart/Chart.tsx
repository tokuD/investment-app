'use client'
import React, { LegacyRef, useEffect, useRef } from 'react'
import { chartOption } from './option'
import * as echarts from 'echarts'
import { useInput } from '@/providers/InputProvider'
import { calcData } from '@/utils'

type Props = {}

const Chart = (props: Props) => {
  const input = useInput()
  const option = chartOption(calcData(input))
  const chartRef = useRef(null)

  useEffect(() => {
    const chart = echarts.init(chartRef.current, null, { renderer: 'svg' })
    chart.setOption(option)

    return () => {
      chart.dispose()
    }
  }, [option])

  return (
    <div
      ref={chartRef}
      className="w-full h-[400px]"
    ></div>
  )
}

export default Chart

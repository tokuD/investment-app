import { EChartsOption } from 'echarts'

export const chartOption = (data: {
  years: number[]
  totalSavings: number[]
  interest: number[]
  totalInterest: number[]
  investedCapital: number[]
}): EChartsOption => {
  const { years, interest, investedCapital, totalInterest, totalSavings } = data
  return {
    backgroundColor: '#fff',
    title: {
      text: 'Investment',
      textStyle: {
        color: '#000',
        fontSize: '24px',
      },
    },
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      data: [
        'Total Savings',
        'Interest(Year)',
        'Total Interest',
        'Invested Capital',
      ],
    },
    grid: {
      left: '3%',
      right: '5%',
      bottom: '3%',
      containLabel: true,
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: years,
      name: 'years',
    },
    yAxis: {
      type: 'value',
      name: '$',
      nameTextStyle: {
        fontWeight: 'bold',
        color: '#000',
      },
    },
    color: ['#5470c6', '#91cc75', '#fac858', '#ee6666'],
    series: [
      {
        name: 'Total Savings',
        type: 'line',
        stack: 'Total',
        data: totalSavings,
      },
      {
        name: 'Interest(Year)',
        type: 'line',
        stack: 'Total',
        data: interest,
      },
      {
        name: 'Total Interest',
        type: 'line',
        stack: 'Total',
        data: totalInterest,
      },
      {
        name: 'Invested Capital',
        type: 'line',
        stack: 'Total',
        data: investedCapital,
      },
    ],
  }
}

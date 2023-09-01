import { DataProps, InputProps } from '@/types'

export const calcData = (input: InputProps): DataProps => {
  if (
    input.currentSavings === '' ||
    input.expectedInterest === '' ||
    input.investmentDuration === '' ||
    input.yearlySavings === ''
  ) {
    return {
      years: [],
      interest: [],
      investedCapital: [],
      totalInterest: [],
      totalSavings: [],
    }
  }

  const years: number[] = []
  const totalSavings: number[] = []
  const interest: number[] = []
  const totalInterest: number[] = []
  const investedCapital: number[] = []

  for (let i = 0; i < (input.investmentDuration as number); i++) {
    const currentSavings =
      totalSavings.at(-1) || (input.currentSavings as number)
    years.push(i + 1)
    totalSavings.push(
      currentSavings * (1 + (input.expectedInterest as number) / 100)
    )
    interest.push((currentSavings * (input.expectedInterest as number)) / 100)
    totalInterest.push(interest.reduce((total, value) => total + value, 0))
    investedCapital.push(
      currentSavings * (1 - (input.expectedInterest as number) / 100)
    )
  }

  return {
    years,
    totalSavings,
    interest,
    totalInterest,
    investedCapital,
  }
}

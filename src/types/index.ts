export interface InputProps {
  currentSavings: number | ''
  yearlySavings: number | ''
  expectedInterest: number | ''
  investmentDuration: number | ''
}

export interface DataProps {
  years: number[]
  totalSavings: number[]
  interest: number[]
  totalInterest: number[]
  investedCapital: number[]
}

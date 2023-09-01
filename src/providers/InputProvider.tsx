'use client'
import { InputProps } from '@/types'
import React, {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from 'react'

const initInput: InputProps = {
  currentSavings: '',
  expectedInterest: '',
  investmentDuration: '',
  yearlySavings: '',
}

const InputValueContext = createContext<InputProps>(initInput)
const InputSetContext = createContext<Dispatch<SetStateAction<InputProps>>>(
  () => {}
)

const InputValueProvider = (props: {
  children: React.ReactNode
  value: InputProps
}) => {
  const { children, value } = props
  return (
    <InputValueContext.Provider value={value}>
      {children}
    </InputValueContext.Provider>
  )
}

const InputSetProvider = (props: {
  children: React.ReactNode
  value: Dispatch<SetStateAction<InputProps>>
}) => {
  const { children, value } = props
  return (
    <InputSetContext.Provider value={value}>
      {children}
    </InputSetContext.Provider>
  )
}

export const InputProvider = (props: { children: React.ReactNode }) => {
  const { children } = props
  const [input, setInput] = useState<InputProps>(initInput)
  return (
    <InputSetProvider value={setInput}>
      <InputValueProvider value={input}>{children}</InputValueProvider>
    </InputSetProvider>
  )
}

export const useInput = () => useContext(InputValueContext)

export const useSetInput = () => useContext(InputSetContext)

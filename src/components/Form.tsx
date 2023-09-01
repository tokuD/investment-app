'use client'
import { useSetInput } from '@/providers/InputProvider'
import React, { useState } from 'react'

type Props = {}

const Form = (props: Props) => {
  const [currentSavings, setCurrentSavings] = useState<number | ''>('')
  const [yearlySavings, setyearlySavings] = useState<number | ''>('')
  const [expectedInterest, setexpectedInterest] = useState<number | ''>('')
  const [investmentDuration, setinvestmentDuration] = useState<number | ''>('')
  const setInput = useSetInput()

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (
      currentSavings === '' ||
      yearlySavings === '' ||
      expectedInterest === '' ||
      investmentDuration === ''
    ) {
      return
    }
    setInput({
      currentSavings,
      yearlySavings,
      expectedInterest,
      investmentDuration,
    })
  }

  return (
    <form
      className="rounded-md bg-gradient-to-tr
     from-green-600 to-green-800 p-8
     grid grid-cols-12 gap-8 w-[600px] mx-auto"
      onSubmit={submitHandler}
    >
      <div className="flex flex-col col-span-6 gap-1">
        <label className="uppercase text-xs ">Current savings($)</label>
        <input
          className="rounded-md bg-transparent border border-white
          py-1 px-2"
          type="number"
          onChange={(event) => setCurrentSavings(Number(event.target.value))}
        />
      </div>
      <div className="flex flex-col col-span-6 gap-1">
        <label className="uppercase text-xs ">Yearly savings($)</label>
        <input
          className="rounded-md bg-transparent border border-white
          py-1 px-2"
          type="number"
          onChange={(event) => setyearlySavings(Number(event.target.value))}
        />
      </div>
      <div className="flex flex-col col-span-6 gap-1">
        <label className="uppercase text-xs ">
          Expected interest(%,Per Year)
        </label>
        <input
          className="rounded-md bg-transparent border border-white
          py-1 px-2"
          type="number"
          onChange={(event) => setexpectedInterest(Number(event.target.value))}
        />
      </div>
      <div className="flex flex-col col-span-6 gap-1">
        <label className="uppercase text-xs ">Investment duration(Years)</label>
        <input
          className="rounded-md bg-transparent border border-white
          py-1 px-2"
          type="number"
          onChange={(event) =>
            setinvestmentDuration(Number(event.target.value))
          }
        />
      </div>
      <div className="col-span-12 flex justify-end gap-4 -mt-4">
        <button
          type="reset"
          className="rounded-md bg-white/80 text-green-700 py-1 px-3"
        >
          reset
        </button>
        <button
          type="submit"
          className="rounded-md py-1 px-3 bg-gradient-to-tr from-green-800 to-green-950"
        >
          calculate
        </button>
      </div>
    </form>
  )
}

export default Form

import { Chart, Form, Tab, Table } from '@/components'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="mx-auto flex flex-col justify-center gap-8 max-w-5xl my-8">
      <div className="mx-auto">
        <h1 className="text-center text-2xl font-bold tracking-wider">
          Investment Calculator
        </h1>
      </div>
      <Form />
      <Tab />
    </main>
  )
}

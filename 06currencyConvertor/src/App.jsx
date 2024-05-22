import { useState } from 'react'
import InputBox from './components/InputBox'
import './App.css'

function App() {

  return (
    <>
    <div className='w-full h-screen relative flex items-center bg-black justify-center'>
      <div className='rounded-xl border-4 p-8 border border-gray-300 bg-gray-700 border-white-300 text-center'>
        <div className="max-w-sm mx-auto">
          <InputBox label="From" />

          <div className="relative w-full h-0.5">
          <button type="button" className="text-white border border-2 border-white font-large rounded-lg p-1 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 absolute left-1/2 -translate-x-1/2 -translate-y-1/2">swap</button>
          </div>

          <InputBox label="To" />

          <button type="button" className="block w-full text-white font-large rounded-lg text-md px-5 py-4 mt-4 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 ">Convert USD to INR</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App

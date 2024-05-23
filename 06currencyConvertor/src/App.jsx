import { useState } from 'react'
import {InputBox} from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import backgroundImage from './assets/bg.jpeg'
import './App.css'

function App() {
  const [ammount, setAmmount] = useState(0)
  const [to, setTo] = useState('usd');
  const [from, setFrom] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfoFrom = useCurrencyInfo(from)
  const option = Object.keys(currencyInfoFrom)

  const currencyConvertor = () => {
    setConvertedAmount(ammount * currencyInfoFrom[to])
  }

  const swapCurrency = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(ammount)
    setAmmount(convertedAmount)
  }

  return (
    <>
    <div className='w-full h-screen relative flex items-center bg-black justify-center' style={{
      backgroundImage: `url('${backgroundImage}')`
    }}>
      <div className='rounded-xl border-4 p-8 border border-gray-300 bg-gray-700 border-white-300 text-center'>
        <form 
        onSubmit={(e) => {
          e.preventDefault()
          currencyConvertor()
          }}
          >

        <div className="max-w-sm mx-auto">
          <InputBox 
          label="From" 
          ammount={ammount} 
          currencyOption={option} 
          onCurrencyChange={(currency)=> setAmmount(currency)}
          currentCurrency={from}
          onAmountChange={(ammount) => setAmmount(ammount)}
          ammountDisable={false}
          />

          <div className="relative w-full h-0.5">
          <button type="button" onClick={swapCurrency} className="text-white border border-2 border-white font-large rounded-lg p-1 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 absolute left-1/2 -translate-x-1/2 -translate-y-1/2">swap</button>
          </div>

          <InputBox 
          label="To" 
          ammount={convertedAmount} 
          currencyOption={option} 
          onCurrencyChange={(currency)=> setConvertedAmount(currency)}
          currentCurrency={to}
          ammountDisable={true}
          />

          <button type="button" onClick={currencyConvertor} className="block w-full text-white font-large rounded-lg text-md px-5 py-4 mt-4 mb-2 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-800 ">Convert {to.toUpperCase()} to {from.toUpperCase()}</button>

        </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default App

import { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("gkjhljjhkj")
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)

  const passwordGeneretor = () => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(number == true) str += "0123456789"
    if(character == true) str += "~!@#$%^&*()_+{}|:"
    let pass = '';
    for (let index = 0; index < length; index++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
     setPassword(pass)
  }

  useEffect(() => {
    passwordGeneretor()
  }, [length, number, character ])


  const passwordRef = useRef(null) //Using a useRef hook to reference the input element
  const copytext = () => {
    passwordRef.current?.select(); //selecting its content for copying
    passwordRef.current?.setSelectionRange(0,999)
    navigator.clipboard.writeText(password)
  }

  // const copytext = () => {
  //   navigator.clipboard.writeText(password)
  //   .then(() => {
  //     alert("Password copied to clipboard!")
  //   })
  //   .catch(err => {
  //     console.error("Failed to copy text: ", err)
  //   })
  // }

  return (
    <>
    <div className="flex h-100vh w-full justify-center p-6 bg-black">
      <div className="mx-auto sm:w-full sm:max-w-sm">
        <div className="space-y-6 shadow-inner border-4 rounded-xl p-5 bg-white">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Password Generator</h2>
          </div>
          <div>
            <div className="mt-2">
              <input value={password} name="password" type="text" className="block w-full rounded-md border-2 py-1.5 text-gray-900 shadow-sm px-3" ref={passwordRef} readOnly />
            </div>
          </div>

          <div>
            <button type="submit" onClick={copytext} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">Copy</button>
          </div>

          <div className='flex justify-center space-x-4'>

            <label htmlFor="steps-range" className="mb-2 text-sm font-medium text-gray-900">
            <input id="steps-range" type="range" min="0" max="20" value={length} step="1" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" onChange={(e) => setLength(Number(e.target.value))}/>Length ({length})</label>

            <p className="text-center text-sm text-gray-500">
              <input type="checkbox" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" defaultChecked={number} onChange={() => setNumber((prev) => !prev)} /> Number
            </p>
            <p className="text-center text-sm text-gray-500">
              <input type="checkbox" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" defaultChecked={character} onChange={() => setCharacter((prev) => !prev)} /> Characters
            </p>
        </div>
        </div>

        
      </div>
    </div>
    </>
  )
}

export default App

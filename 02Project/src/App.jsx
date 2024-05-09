import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const upCounter = () => {
      setCount(count+1) 
  }
  const downCounter = () => {
    if(count > 0){
      setCount(count-1)
    } 
    else{
      alert("Counter cann't be less than 0!")
    }
  }

  return (
    <>
      <h1>Counter: {count}</h1>
      <button onClick={upCounter}>Up Counter</button>&nbsp;&nbsp;
      <button onClick={downCounter}>Down Counter</button>
    </>
  )
}

export default App

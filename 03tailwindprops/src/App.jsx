import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='inline-flex'>
      <Card name="Parul" about="Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis?"/>
      <Card name="Soniya" btnText="View me" />
      </div>
    </>
  )
}

export default App

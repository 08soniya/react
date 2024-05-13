import { useState  } from "react"
function App() {
  const [color, setColor] = useState("red");

  return (
    <>
    <div className="relative w-full h-screen" style={{backgroundColor: color}}>
      <div className="absolute inset-x-0 bottom-10  ">
      <div className="flex flex-col space-y-2  shadow-sm md:flex-row md:space-x-2 md:space-y-0 justify-center bg-white p-4 rounder-md">

      <button onClick={() => setColor('orange')} type="button" className="rounded-md px-3 py-2 text-sm font-semibold text-black shadow-sm" style={{backgroundColor: "orange"}}>Orange</button>
      
      <button onClick={() => setColor('red')} type="button" className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm" style={{backgroundColor: "red"}} >Red</button>

      <button onClick={() => setColor('green')} type="button" className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm" style={{backgroundColor: "green"}}>Green</button>
      
      <button onClick={() => setColor('blue')} type="button" className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm" style={{backgroundColor: "blue"}} >Blue</button>
      
      <button onClick={() => setColor('yellow')} type="button" className="rounded-md px-3 py-2 text-sm font-semibold text-black shadow-sm" style={{backgroundColor: "yellow"}} >Yellow</button>
      
      <button onClick={() => setColor('grey')} type="button" className="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm" style={{backgroundColor: "grey"}}>Grey</button>

      </div>
      </div>
    </div>
    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'
import UseContent from './context/UseContent'
import Login from './component/Login'
import Profile from './component/Profile'

function App() {
  const [user, setUser] = useState(null)
  return (
    <>
      <UseContent.Provider value={{user, setUser}}>
        <Login />
        <Profile />
      </UseContent.Provider>
    </>
  )
}

export default App

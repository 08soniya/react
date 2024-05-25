import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Error from './component/Error.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './component/About.jsx'
import Home from './component/Home.jsx'
import Contact from './component/Contact.jsx'
import User from './component/User.jsx'
import Github, {githubInfo} from './component/Github.jsx'

// Configure nested routes with JSX
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} errorElement={<Error />} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
      <Route path='github' loader={githubInfo} element={<Github />} />
    </Route>
  )
)

// Or use plain objects
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <Error />,
//     children:[
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       }
//     ]
//   }

// ])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

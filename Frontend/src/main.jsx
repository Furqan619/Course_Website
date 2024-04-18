import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Course from './components/Course.jsx'
import Home from './components/Home/Home.jsx'
import Signup from './components/Signup.jsx'

const router = createBrowserRouter([
  {path: '/', element:<App/>, 
  children:[
    {path:"", element:<Home/>},
    {path:'/Course', element:<Course/>},
    {path:'/Signup', element:<Signup/>}
    // {path:'/contact', element:<Contact/>}
  ]}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <div className='dark:bg-slate-900 dark:text-white'>
    <RouterProvider router={router}/>
  </div>
  </React.StrictMode>,
)

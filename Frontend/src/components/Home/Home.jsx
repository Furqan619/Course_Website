import React from 'react'
import Navbar from '../Navbar'
import Banner from '../Banner'
import FreeBook from '../FreeBook'




function Home() {
  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white"'>
      <Navbar/>
      <Banner/>
      <FreeBook/>

    </div>
    </>
  )
}

export default Home

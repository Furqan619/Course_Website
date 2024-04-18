import React from 'react'
import List from '../../public/List.json'
import Cards from './Cards'
import {NavLink} from 'react-router-dom'

function Course() {

  

  return (
<>
<div className='items-center justify-center pt-28'>
<div className='max-w-screen-2xl container   mx-auto md:px-20 px-4 dark:bg-slate-900 dark:text-white pt-10'>
<div className=' text-center'>
    <h1 className='text-2xl md:text-4xl'>We are delighted to have you <span className='font-semibold text-2xl md:text-4xl text-blue-500'>here!</span></h1>
    <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum, fugiat natus nemo officiis saepe, repellendus possimus repellat, quibusdam iste iusto eligendi dicta quaerat facere dignissimos.</p>
    <NavLink to='/'>
    <button className='mt-6 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700'>Back</button>
    </NavLink>
    </div>
    <div className='mt-10 grid grid-cols-1 md:grid-cols-4'>
      {
        List.map((item)=>(
          <Cards item={item} key={item.id}/>
        ))
      }
    </div>
    </div>
    </div>
</>
  )
}

export default Course

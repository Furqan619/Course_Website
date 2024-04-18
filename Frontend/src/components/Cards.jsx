import React from 'react'

// we are reciving the props='item' from 'FreeBook.jsx' parent component to 'card.jsx' child component
function Cards({item}) {
    
  return (
    <div>
      <div className="card w-90 bg-base-100 shadow-xl  m-4 mt-4  hover:scale-105 hover:duration-300 dark:bg-slate-900 dark:text-white dark:border border-1" >
  <figure><img className='p-auto' src={item.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title sm:text-sm text-wrap">
      {item.name}
      <div className="badge badge-info text-white sm:text-sm">{item.category}</div>
    </h2>
    <p className='text text-wrap ...'>{item.title}</p>
    <div className="card-actions justify-between ">
      <div className="badge badge-outline md:p-4 p-2 sm:text-sm">${item.price}</div> 
      <div className=" cursor-pointer badge badge-outline md:p-4 p-2 hover:bg-blue-500 hover:text-white sm:text-sm">Buy Now</div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Cards

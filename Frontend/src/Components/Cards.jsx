import React from 'react'

function Cards({item}) {
    console.log(item)
  return (
    <>
      <div className='mt-4 my-3 p-3'>
         <div className="card bg-base-100 w-85 shadow-sm hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes"  className=''/>
  </figure>
  <div className="card-body">
    <h2 className="card-title">
     {item.Name}
      <div className="badge badge-secondary">{item.caregory}</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-between">
      <div className="badge badge-outline">${item.price}</div>
      <div className="badge badge-outline p-3 hover:bg-pink-500 hover:text-white">Buy now</div>
    </div>
  </div>
         </div>
    </div>
    </>
  )
}

export default Cards

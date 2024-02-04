import React from 'react'
import { catagories } from './data/data'

const Catagories = () => {
    console.log(catagories)
  return (
    <div className='max-w-[1520px] m-auto px-4 py-4'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Trending Catagories</h1>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
            {
            catagories.map((item) => (
                 <div key={item.id} className='w-full h-100px p-4 pt-15 pb-15 flex justify-center items-center hover:scale-105 duration-300'>
                    <img
                    className='object-cover rounded-xl w-40 h-20 cursor-pointer shadow-xl'
                     src={item.image} 
                     alt={item.name} />
                     </div>
            ))
            }
        </div>
    </div>
  )
}

export default Catagories
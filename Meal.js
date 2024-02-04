import React, { useState } from 'react'
import { mealData } from './data/data'

const Meal = () => {
    const [foods, setFoods] =useState(mealData)
    const fillterCat =(category) => {
        setFoods (
            mealData.filter((item)=>
            {
                return item.category === category;
            })
        )
    }
  return (
    <div className='max-w-[1520px] m-auto px-4 py-10'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>
            Our Meal
        </h1>
        <div className='flex flex-col lg:flex-row justify-center'>
            <div className='flex justify-center md:justify-center'>
             <button onClick={ () => setFoods(mealData)}
             className='m-1 rounded-full border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>All</button>
             <button onClick={ () => fillterCat("pizza") }
             className='m-1 rounded-full border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>pizza</button>
             <button onClick={ () => fillterCat("Chicken") }
             className='m-1 rounded-full border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Chicken</button>
             <button onClick={ () => fillterCat("Salad") }
              className='m-1 rounded-full border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Salad</button>
            </div>
        </div>
      
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4'>
            {
        mealData.map((item)=> (
            <div key={item.id} className='border-none hover:scale-105 duration-300 pt-2 pb-3'>
                <img src={item.image} alt={item.name}
                className='w-full h-full object-cover rounded-lg'/>
                <div className='flex justify-between py-2 px-2 pt-3'>
                    <p className='font-bold'>{item.name}</p>
                    <p className='bg-orange-700 h-11 w-13 rounded-full -mt-20 text-white py-2 px-2 border-7.5'>
                        {item.price}</p>
                </div>
        
            </div>

         ) )
            }
        </div>
    </div>
  );
}

export default Meal
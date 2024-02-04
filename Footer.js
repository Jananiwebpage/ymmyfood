import React from 'react'
import { FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagram, FaTwitterSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1520px] m-auto px-4 py-2 relative bg-[#2a2a2b]'>
        <div className='py-16 px-4 grid lg:grid-cols-3 gap-6 text-gray-300'>
            <div>
                <h1 className='text-orange-500 w-full font-bold text-3xl'>
                    YumEats
                </h1>
                <p>
                Delicious food to be delivered on prompt and healthy way.
                </p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
                <div className='lg:col-span-2 flex justify-between mt-6'>
                    <div>
                        <h6 className='font-medium text-gray-300'>
                            Location
                        </h6>
                        <ul>
                        <li className='py-2 text-sm'> Newyork </li>
                        <li className='py-2 text-sm'> USA </li>
                        <li className='py-2 text-sm'> India </li>
                        <li className='py-2 text-sm'> Canada </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-300'>
                            Location
                        </h6>
                        <ul>
                        <li className='py-2 text-sm'> Newyork </li>
                        <li className='py-2 text-sm'> USA </li>
                        <li className='py-2 text-sm'> India </li>
                        <li className='py-2 text-sm'> Canada </li>
                        </ul>
                    </div>
                    <div>
                        <h6 className='font-medium text-gray-300'>
                            Location
                        </h6>
                        <ul>
                        <li className='py-2 text-sm'> Newyork </li>
                        <li className='py-2 text-sm'> USA </li>
                        <li className='py-2 text-sm'> India </li>
                        <li className='py-2 text-sm'> Canada </li>
                        </ul>
                    </div>


                </div>
            </div>

        </div>
        </div>
  )
}

export default Footer
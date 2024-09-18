import React from 'react'
import { IoIosReturnRight } from 'react-icons/io'

const Button = ({title = "Get Started"}) => {
  return (
    <div className='md:w-40 w-32 px-4 py-2 bg-zinc-100 text-black rounded-full flex item-center justify-between'>
      <span className='text-sm font-medium'>{title}</span>
      <IoIosReturnRight/>
    </div>
  )
}

export default Button
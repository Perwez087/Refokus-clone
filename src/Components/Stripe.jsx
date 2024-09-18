import React from 'react'

const Stripe = ({data}) => {
    const {url,number} = data;
  return (
    <div className='w-[16.66%] border-b-[1.2px] border-t-[1.2px] border-zinc-600 border-r-[1.2px] px-4 py-4 flex items-center justify-between gap-10 overflow-hidden'>
      <img src={url} alt="" />
      <span className='font-semibold'>{number}</span>
    </div>
  )
}

export default Stripe

import React from 'react'
import Card from './Card'

const Cards = () => {
  return (
    <div className='w-full'>
       <div className='md:max-w-screen-xl md:mx-auto py-20 px-4 flex md:flex-row flex-col gap-3'>
         <Card width={"md:w-1/3"} start={false} para={true}/>
         <Card width={"md:w-2/3"} start={true} para={false} hover={"hover:bg-violet-600"}/>
       </div>
    </div>
  )
}

export default Cards

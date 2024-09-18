import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'

const Products = () => {
    var product = [
        {title:"arqitel", description:"Arque Executive and its employees continue to receive orders for customers and customers that are interested in the products", live:true,case:false},
        {title:"TTR", description:"Arque Executive and its employees continue to receive orders for customers and customers that are interested in the products", live:true,case:false},
        {title:"YIR 2022", description:"Arque Executive and its employees continue to receive orders for customers and customers that are interested in the products", live:true,case:true},
        {title:"Yahoo!", description:"Arque Executive and its employees continue to receive orders for customers and customers that are interested in the products", live:true,case:true},
    ]

    const [pos,setPos] = useState(0);

    const mover = (val) =>{
      setPos(val * 20);
    }
  return (
    <div className='relative mt-10'>
        {
            product.map((item,index)=>(
                <Product key={index} data={item} index={index} mover={mover}/>
            ))
        }
        <div className='md:block hidden absolute top-0 w-full h-full pointer-events-none'>
            <motion.div 
            initial={{y:pos,x:"-50%"}}
            animate={{y:pos+ `rem`}}
             transition={{ease: [0.76,0,0.24,1], duration:.6}}
            className='window absolute w-[30rem] h-[20rem] bg-white left-[44%] overflow-hidden'>
               <motion.div animate={{y:-pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration:.5}} className='w-full h-full bg-sky-100'></motion.div>
               <motion.div animate={{y:-pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration:.5}} className='w-full h-full bg-sky-300'></motion.div>
               <motion.div animate={{y:-pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration:.5}} className='w-full h-full bg-sky-500'></motion.div>
               <motion.div animate={{y:-pos+`rem`}} transition={{ease: [0.76,0,0.24,1], duration:.5}} className='w-full h-full bg-sky-600'></motion.div>
            </motion.div>
        </div>
    </div>
  )
}

export default Products

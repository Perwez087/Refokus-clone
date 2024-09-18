import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import img1 from "../assets/Refokus_Tools-1.png";
import img2 from "../assets/Refokus_Tools-2.png";
import img3 from "../assets/Refokus_Tools-3.png";
import img4 from "../assets/Refokus_Tools-4.png";
import img5 from "../assets/Refokus_Tools-5.png";
import img6 from "../assets/Refokus_Tools-6.png";

const Work = () => {

  const [image,setImage] = useState([
    { url: img1, top: "50%", left: "50%", isActive: false },
    { url: img2, top: "56%", left: "44%", isActive: false },
    { url: img3, top: "45%", left: "56%", isActive: false },
    { url: img4, top: "60%", left: "53%", isActive: false },
    { url: img5, top: "43%", left: "40%", isActive: false },
    { url: img6, top: "65%", left: "55%", isActive: false },
  ])

  const { scrollYProgress} = useScroll();

  scrollYProgress.on("change", (data) =>{

   function imagesShow(arr){
     setImage((prev)=>(
       prev.map((item,index)=>(
        arr.indexOf(index) === -1 ? (
          {...item, isActive: false}
        )
        : {...item, isActive: true}
       ))
     ))
   }
   switch (Math.floor(data*100)){
    case 0 :
      imagesShow([]);
      break;
    case 1 :
      imagesShow([0]);
      break;
    case 2 :
      imagesShow([0,1]);
      break;
    case 3 :
      imagesShow([0,1,2]);
      break;
    case 4 :
      imagesShow([0,1,2,3]);
      break;        
    case 5 :
      imagesShow([0,1,2,3,4]);
      break;        
    case 6 :
      imagesShow([0,1,2,3,4,5]);
      break;               
   }
  })

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl m-auto text-center">
        <h1 className="md:text-[30vw] text-9xl leading-none font-medium select-none tracking-tight">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {image.map(
            (item, index) =>
              item.isActive && (
                <img
                  className="md:w-60 w-28 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                  key={index}
                  src={item.url}
                  style={{ top: item.top, left: item.left }}
                  alt="image"
                />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Work;

import React from "react";
import Button from "./Button";

const Product = ({ data,mover,index}) => {
  return (
    <div onMouseOver={()=> mover(index)} className="w-full py-16 md:h-[20rem] text-white">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between md:px-0 px-4">
        <h1 className="md:text-6xl text-3xl font-medium capitalize">{data.title}</h1>
        <div className="dets md:w-1/3 w-1/2">
          <p className="mb-10">{data.description}</p>
          <div className="flex md:flex-row flex-col items-center gap-4">
            {data.live && <Button title={"Live Website"} />}
            {data.case && <Button title={"Case Study"} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

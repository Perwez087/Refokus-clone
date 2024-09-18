import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({ width, start, para, hover="none"}) => {
  return (
    <div className={`bg-zinc-800 p-5 rounded-xl ${width} ${hover} duration-300 hover:p-6 min-h-[30rem] flex flex-col justify-between`}>
      <div className="w-full">
        <div className="flex justify-between items-center w-full">
          <h1>One Heading</h1>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-meduim mt-5">Whatever heading.</h1>
      </div>

      <div className="down w-full">
        {start && (
          <>
            <h1 className="md:text-6xl text-3xl font-semibold tracking-tight leading-none">
              Start a Project
            </h1>
            <button className="rounded-full py-2 px-5 border-[1px] border-zinc-50 mt-5">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-500 font-medium">
            Lorem ipsum, dolor sit amet consectetur adipisicing.
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;

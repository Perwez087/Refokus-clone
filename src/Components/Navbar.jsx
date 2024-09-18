import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="max-w-screen-xl mx-auto py-6 px-6 flex items-center justify-between border-b border-zinc-600">
      <div className="nLeft flex items-center gap-20">
        <img className="w-24" src={logo} alt="logo" />
        <div className="links lg:flex hidden gap-14">
          {["Home", "Work", "Culture", "", "News"].map((elem, i) => {
            return (
              <a className="text-sm flex items-center gap-1" key={i} href="/">
                {elem.length === 0 ? (
                  <span className="w-[2px] h-6 bg-zinc-600"></span>
                ) : (
                  ""
                )}
                {i === 1 && (
                  <span
                    style={{ boxShadow: "0 0 0.45em #00FF19" }}
                    className="w-1 h-1 bg-green-500 inline-block rounded-full shadow-xl"
                  ></span>
                )}
                {elem}
              </a>
            );
          })}
        </div>
      </div>
      <Button/>
    </div>
  );
};

export default Navbar;

import React from "react";

const Footer = () => {
  return (
    <div className="w-full md:px-0 px-4">
      <div className="max-w-screen-xl mx-auto py-10 flex md:flex-row flex-col md:gap-32 gap-10">
        <div className="w-1/2">
          <h1 className="md:text-[11.5rem] text-6xl font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="md:w-1/2 flex gap-4">
           <div className="md:w-1/3">
               <h4 className="mb-10 text-zinc-500 capitalize">socials</h4>
               {["Instagram","Twitter (x?)","LinkedIn"].map((item,index)=>(
                <a key={index} className="block mt-2 capitalize text-zinc-600">{item}</a>
               ))}
           </div>
           <div className="md:w-1/3">
               <h4 className="mb-10 text-zinc-500 capitalize">Sitemap</h4>
               {["Home","Work (x?)","Careers","Contact"].map((item,index)=>(
                <a key={index} className="block mt-2 capitalize text-zinc-300">{item}</a>
               ))}
           </div>
           <div className="md:w-1/2 flex flex-col items-center">
            <p className="text-right">Refokus is a pioneering digital agency driven by design and empowered by technology.</p>
            <img src="https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66bd4a1138d6a32addf4b6b2_premium_partner_badge_enterprise_blue.webp" className="mt-10 w-56" alt="" />
           </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

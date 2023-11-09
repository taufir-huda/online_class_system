import React from "react";
import Image from "next/image";

function page() {
  const test =[1,2,3,4,5,6,7,8,9]
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              All upcoming courses
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {test.map(()=>{
            return(
            <div className="xl:w-1/4 md:w-1/2 p-4">
             <div className="bg-black p-6 rounded-lg text-bodydark2">
               <Image className="h-40 rounded w-full object-cover object-center mb-6"
               src={"/images/720x400.png"} alt="content" width={720}
               height={400}
               />
               <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                 SUBTITLE
               </h3>
               <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                 Chichen Itza
               </h2>
               <p className="leading-relaxed text-base">
                 Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                 hexagon disrupt edison bulbche.
               </p>
             </div>
            </div>)
          })}
        </div>
      </div>
    </section>
  );
}

export default page;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Course from "@/models/course"
import connectToMongo from "@/db";

async function page() {
  await connectToMongo()
  const allpastcourse = await Course.find({State : "past"})
  
  return (
    <section className="text-black-2 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 dark:text-white">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900 ">
              All past courses finished
            </h1>
            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
            Here you can find all the courses that has been completed and thier materials.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
        {allpastcourse.map((course)=>{
            return(
            <Link href={`../courses/Details/${course.shorttitle}`} className="xl:w-1/4 md:w-1/2 p-4 cursor-pointer" >
             <div className="bg-black p-6 rounded-lg text-bodydark2 dark:bg-white">
               <Image className="h-40 rounded w-full object-cover object-center mb-6" src={"/images/720x400.png"} alt="content" width={720} height={400} />
               <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                 {course.title}
               </h2>
               <p className="leading-relaxed text-base mx-5" dangerouslySetInnerHTML={{__html:course.shortdescription}}></p>
             </div>
            </Link>)
          })}
        </div>
      </div>
    </section>
  );
}

export default page;

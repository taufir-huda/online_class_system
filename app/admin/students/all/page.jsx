import React from 'react'
import Image from "next/image";
import Link from 'next/link';
import connectToMongo from "@/db"
import Student from "@/models/Student"


// const StudentData = [
//   {
//     Id: 23005,
//     name: "Abrar Omi",
//     institute: "BUET",
//     courses: 5
//   },
//   {
//     Id: 23005,
//     name: "Abrar Omi",
//     institute: "BUET",
//     courses: 5
//   },
//   {
//     Id: 23005,
//     name: "Abrar Omi",
//     institute: "BUET",
//     courses: 5
//   },
// ]

async function page() {
    connectToMongo()
    // const StudentData = await Student.find({name : /Ab/})
    const StudentData = await Student.find({})
    console.log(StudentData.courses==undefined)
    return (
      <div className="col-span-12 xl:col-span-8">
        <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
        <div className="m-3 flex justify-between">
          <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
            All Students
          </h4>
          <div className="hidden sm:block">
            <form>
              <div className="relative">
                <button className="absolute left-0 top-1/2 -translate-y-1/2">
                  <svg  className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z" fill=""/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z" fill="" />
                  </svg>
                </button>

                <input type="text" placeholder="Type to search..." className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125" 
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="grid grid-cols-2 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-4">
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                User Id
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
              Name
              </h5>
            </div>
            <div className="p-2.5 text-center xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
              Institute
              </h5>
            </div>
            <div className="hidden p-2.5 text-center sm:block xl:p-5">
              <h5 className="text-sm font-medium uppercase xsm:text-base">
                No of courses
              </h5>
            </div>
          </div>

          {StudentData.map((student, key) => (
            <div
              className={`grid grid-cols-2 sm:grid-cols-4 ${
                key === StudentData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-strokedark"
              }`}
              key={key}
            >
              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-black dark:text-white">{student.studentId}</p>
              </div>

              <Link href={`../students?id=${student.studentId}`}  className="flex items-center gap-3 p-2.5 xl:p-5 cursor-pointer">
                <div className="flex-shrink-0">
                  <Image src={`/images/student/${student.studentId}.jpg`} alt="Brand" width={48} height={48} className="rounded-full"/>
                </div>
                <p className="hidden text-black dark:text-white sm:block">
                  {student.name}
                </p>
              </Link>


              <div className="flex items-center justify-center p-2.5 xl:p-5">
                <p className="text-meta-3">{student.institution}</p>
              </div>

              <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
                <p className="text-black dark:text-white">{student.courses?Object.keys(student.course).length:0}</p>
              </div>

            </div>
          ))}
        </div>
        </div>
      </div>)
}

 
export default page

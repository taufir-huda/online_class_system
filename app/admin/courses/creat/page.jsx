"use client"

import { useEffect, useState } from "react";
import Datepicker from "react-tailwindcss-datepicker"; 

export default function Example() {
    const [value, setValue] = useState({ 
        startDate: new Date(), 
    }); 
        
    const handleValueChange = (newValue) => {
        console.log("newValue:", newValue); 
        setValue(newValue); 
        setcourse({...course,Startingdate:newValue.startDate})
    }     

    const [course,setcourse]=useState({
        shorttitle: "",
        title: "",
        courseFee: "",
        shortdescription: "",
        details:"",
        Startingdate: "",
    });

    useEffect(() => {
      console.log(course)
    }, [course])
    
  const onSubmit= async (e) => {
    e.preventDefault();
    console.log(user);
  }
  return (
        <div className="w-full flex flex-wrap mx-auto px-2">

            <div className="w-full">

            <h1 className="flex items-center font-sans font-bold break-normal text-gray-700 px-2 text-xl mt-12 lg:mt-0 md:text-2xl">
				Creat a new course
			</h1>

            <hr className="bg-gray-300 my-12" />

            <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
                Titles of the course
            </h2>

            <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
            <form>
                <div className="md:flex mb-6">
                    <div className="md:w-1/3">
                        <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                            Long Title
                        </label>
                    </div>
                    <div className="md:w-2/3">
                        <input 
                            className="form-input block w-full focus:bg-white" type="text" 
                            value={course.title}
                            onChange={(e) => {setcourse({...course,title:e.target.value})}} />
                        <p className="py-2 text-sm text-gray-600">
                            add a long title for the course. You can write in bangla
                        </p>
                    </div>
                </div>

                <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                Short Title
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input 
                                maxLength={10}
                                className="form-input block w-full focus:bg-white"
                                type="text" 
                                value={course.shorttitle}
                                onChange={(e) => {setcourse({...course,shorttitle:e.target.value})}}
                            />
                            <p className="py-2 text-sm text-gray-600">add a long title for the course ( must be unique)</p>
                        </div>
                </div>
                
                <div className="md:flex md:items-center">
                    <div className="md:w-1/3"></div>
                    <div className="md:w-2/3">
                        <button className="shadow bg-meta-8 hover:bg-meta-6 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"type="button">
                            Save
                        </button>
                    </div>
                </div>

            </form>
            </div>

            <hr className="bg-gray-300 my-12"/>

            <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
                Description of the course
            </h2>

            <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">
                <form>

                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                               Short Deescription of the course
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <textarea className="form-textarea block w-full focus:bg-white" value={course.shortdescription} rows="8" onChange={(e) => {setcourse({...course,shortdescription:e.target.value})}}></textarea>
                            <p className="py-2 text-sm text-gray-600">Write a short description for the course so that student get know about the course at glance</p>
                        </div>
                    </div>

                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textarea">
                               Long Deescription of the course
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <textarea className="form-textarea block w-full focus:bg-white" value={course.details} rows="20" onChange={(e) => {setcourse({...course,details:e.target.value})}}></textarea>
                            <p className="py-2 text-sm text-gray-600">
                                Write all the information, benefits, necessity for doing the course in details
                            </p>
                        </div>
                    </div>

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-meta-8 hover:bg-meta-6 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"type="button">
                                Save
                            </button>
                        </div>
                    </div>
                </form>

            </div>
            <hr className="bg-gray-300 my-12"/>

            <h2 className="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">
                Others
            </h2>

            <div className="p-8 mt-6 lg:mt-0 rounded shadow bg-white">

                <form>
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">
                                Starting Date
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <Datepicker useRange={false}  inputClassName=" w-full focus:ring-0 font-normal" containerClassName="relative mt-8" toggleClassName="absolute bg-black-2 text-white right-0 h-full px-3 text-gray-400 disabled:opacity-40 disabled:cursor-not-allowed"  primaryColor={"indigo"} value={value} onChange={handleValueChange} showShortcuts={false} asSingle={true} readOnly={true} /> 
                        </div>
                    </div>
                    
                    <div className="md:flex mb-6">
                        <div className="md:w-1/3">
                            <label className="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" htmlFor="my-textfield">
                                Course Fees
                            </label>
                        </div>
                        <div className="md:w-2/3">
                            <input 
                                className="form-input block w-full focus:bg-white" type="number" 
                                value={course.courseFee}
                                onChange={(e) => {setcourse({...course,courseFee:e.target.value})}} />
                            <p className="py-2 text-sm text-gray-600">
                                add the amount needed to buy the course
                            </p>
                        </div>
                    </div>

                    <div className="md:flex md:items-center">
                        <div className="md:w-1/3"></div>
                        <div className="md:w-2/3">
                            <button className="shadow bg-meta-8 hover:bg-meta-6 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"type="button">
                                Save
                            </button>
                        </div>
                    </div>
                </form>

            </div>

            <hr className="bg-gray-300 my-12" />

            </div>

            <div className="w-full h-10 text-2xl text-gray-600 text-yellow-600 rounded-lg text-center m-auto bg-indigo-500 cursor-pointer">
                Creat Course
            </div>

        </div>
  );
}

import React, { useEffect, useState } from 'react';
import { MdSports } from "react-icons/md";
import { PiFileTextFill } from "react-icons/pi";
import { BsFillCalendarEventFill } from "react-icons/bs";
const CollegeCardDesign = ({college}) => {

    return (
        <div className="card card-compact w-96 bg-slate-900 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className=" text-center text-2xl font-semibold m-0 p-0 text-white">{college.name}</h2>
                            <div className=" text-center  ">
                                <p className='text-lg font-medium'>Admission Dates</p>
                                <p className='font-bold font-serif text-sm'>{college.admissionDates[0]} to {college.admissionDates[1]}</p>
                            </div>
                            <div className="card-actions justify-end">
                                <p></p>
                                <button class="group flex w-44 cursor-pointer select-none items-center justify-center rounded-md  px-6 py-2 text-white hover:text-success  transition">
                                    <a href="#" class="group flex w-full items-center justify-center rounded py-1 text-center font-medium"> Details </a>
                                    <svg class="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                            <div className="">
                                {/* <hr  className=''/>
                                 */}
                                <hr style={{ backgroundColor: 'rgb(98,239,189)', height: '2px' }} />
                                <div className=" flex justify-around items-center my-4 font-mono text-lg">
                                    <div className=" flex items-center gap-1">
                                        <BsFillCalendarEventFill className='text-success '></BsFillCalendarEventFill> <span>/</span> <span className='font-bold'>{college.events.length}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <PiFileTextFill className='text-success'></PiFileTextFill> <span>/</span> <span className='font-bold'>{college.researchHistory.length}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MdSports className='text-success' ></MdSports> <span>/</span> <span className='font-bold'>{college.sports.length}</span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
    );
};

export default CollegeCardDesign;
import React, { useEffect, useState } from 'react';
import UseCollages from '../../../components/hooks/UseCollages';

const CollegeCard = () => {
    const [colleges, loading] = UseCollages()
    console.log(colleges)


    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Shoes!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            <button class="group flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-6 py-2 text-white transition">
                <a href="#" class="group flex w-full items-center justify-center rounded py-1 text-center font-bold"> Shop now </a>
                <svg class="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </div>
    );
};

export default CollegeCard;
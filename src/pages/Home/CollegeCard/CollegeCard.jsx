import React, { useEffect, useState } from 'react';
import UseCollages from '../../../components/hooks/UseCollages';
import { MdSports } from "react-icons/md";
import { PiFileTextFill } from "react-icons/pi";
import { BsFillCalendarEventFill } from "react-icons/bs";
import CollegeCardDesign from '../../../components/CollegeCardDesign';

const CollegeCard = () => {
    const [colleges] = UseCollages()
    console.log(colleges)

    return (
        <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-8'>
            {
                colleges.slice(0,3).map((college, i) => <CollegeCardDesign college={college} key={i} ></CollegeCardDesign>
                    )
            }


        </div>
    );
};

export default CollegeCard;
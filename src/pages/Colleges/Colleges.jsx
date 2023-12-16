import React from 'react';
import UseCollages from '../../components/hooks/UseCollages';
import CollegeCardDesign from '../../components/CollegeCardDesign';
import { Fade } from "react-awesome-reveal";


const Colleges = () => {
    const [colleges] = UseCollages() 
    return (
        <div>
            <div className="">
                <h1 className= 'underline underline-offset-4 text-white font-bold text-center my-4 text-xl md:text-2xl lg:text-3xl'>All Colleges</h1>
            </div>
            <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-8'>
            {
                colleges.map((college, i) => <Fade cascade key={college._id}><CollegeCardDesign college={college} key={i} ></CollegeCardDesign></Fade>
                    )
            }


        </div>
        </div>
    );
};

export default Colleges;
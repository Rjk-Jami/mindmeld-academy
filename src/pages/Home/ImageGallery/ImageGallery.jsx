import React, { useEffect, useState } from 'react';
import 'react-gallery-carousel/dist/index.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const ImageGallery = () => {
    const [graduates, setGraduates] = useState([])
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:5000/graduates')
            .then(res => res.json())
            .then(data => setGraduates(data))
            .catch(error => console.log(error))
        setLoading(false)
    }, [])
    console.log(graduates)

    return (
        <>
        <div className="my-5 md:my-7">
            <div className="">
                <h1 className= 'text-white font-bold text-center my-4 text-xl md:text-2xl lg:text-3xl'>Alumni Success: Capturing Milestones Through Graduation Group Portraits</h1>
            </div>
        <div className='w-3/5 mx-auto'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {graduates.map((graduate, i)=>(<SwiperSlide className=''><img className=' text-center' src={graduate.imageURL} alt="" /></SwiperSlide>))}
        
      </Swiper>
        </div>
        </div>
        </>
    );
};

export default ImageGallery;
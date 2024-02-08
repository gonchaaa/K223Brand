import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "../App.css";


export default function Banner() {



    return (
        <div className='p-3 border-[1px] border-[#DEE2E7] rounded flex'>
            <div className="hidden md:block w-[17%] ">


                <ul>
                    <li className='font-normal text-lg text-[#505050]'>Automobiles</li>
                    <li className='font-normal text-lg text-[#505050]'>Clothes and wearq</li>
                    <li className='font-normal text-lg text-[#505050]'>Home interiors</li>
                    <li className='font-normal text-lg text-[#505050]'>Computer and tech</li>
                    <li className='font-normal text-lg text-[#505050]'>Tools, equipments</li>
                    <li className='font-normal text-lg text-[#505050]'>Sports and outdoor</li>
                    <li className='font-normal text-lg text-[#505050]'>Animal and pets</li>
                    <li className='font-normal text-lg text-[#505050]'>Machinery tools</li>
                    <li className='font-normal text-lg text-[#505050]'>More category</li>
                </ul>
            </div>


            <div className="w-[100%] md:w-[58%]">


                <Swiper className="mySwiper">
                    <SwiperSlide className="bg-[url('/public/img/Banner.png')] bg-no-repeat bg-cover bg-center">
                        <div className="m-7">

                            <span className="font-normal text-[28px]">Latest trending</span>
                            <p className="font-bold text-[32px]">Electronic items</p>
                            <a href="" className="w-[119px] h-[40px] bg-white px-4 py-2 rounded-md inline-block mt-3 outline-none">Learn more</a>
                        </div>


                    </SwiperSlide>
                    <SwiperSlide>Slide 2</SwiperSlide>
                    <SwiperSlide>Slide 3</SwiperSlide>
                    <SwiperSlide>Slide 4</SwiperSlide>
                    <SwiperSlide>Slide 5</SwiperSlide>
                    <SwiperSlide>Slide 6</SwiperSlide>
                    <SwiperSlide>Slide 7</SwiperSlide>
                    <SwiperSlide>Slide 8</SwiperSlide>
                    <SwiperSlide>Slide 9</SwiperSlide>
                </Swiper>
            </div>


            <div className="hidden md:block w-[25%]">

                <div className="w-[90%] h-[150px] m-auto bg-[#E3F0FF] rounded-md p-2 flex flex-wrap justify-center">

                    <div className='w-[90%] h-[40px] flex gap-2'>

                        <img src="/img/Avatar.png" alt="" width={40} height={20} />

                        <div className="font-normal text-base text-black">Hi, user <br /> let’s get stated</div>
                    </div>
                    <button className='w-[90%] h-[30px] bg-[#127FFF] text-white font-medium text-[13px] rounded-md'>Join now</button>
                    <button className='w-[90%] h-[30px] bg-white text-[#127FFF] font-medium text-[13px] rounded-md'>Log in</button>
                </div>
                <div className="w-[90%] h-[95px] m-auto bg-[#F38332] mt-2 rounded-md pt-2 pl-3">
                    <div className='w-[55%] font-normal text-base text-white '>

                        Get US $10 off with a new supplier
                    </div>

                </div>
                <div className="w-[90%] h-[95px] m-auto bg-[#55BDC3] mt-2 rounded-md  pt-2 pl-3">

                    <div className='w-[60%] font-normal text-base text-white '>

                        Send quotes with supplier preferences
                    </div>




                </div>
            </div>
        </div>

    )
}

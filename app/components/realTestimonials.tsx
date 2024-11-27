import React, {useRef, useState} from 'react';
import {ArrowRightIcon} from '@heroicons/react/solid';
import {Link} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../styles/realTestimonials.css';
import {Pagination} from 'swiper/modules';

function TestimonialCard({video}: {video?: string}) {
  return (
    <video
      autoPlay
      muted
      loop
      className="min-w-full min-h-full rounded-md transform transition-transform duration-300 hover:scale-150"
    >
      {' '}
      <source src={video} type="video/mp4" /> Tu navegador no soporta el
      elemento de video.{' '}
    </video>
  );
}

function App() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <TestimonialCard video="/testimonial1.mp4" />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard video="/testimonial3.mp4" />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard video="/testimonial4.mp4" />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard video="/testimonial5.mp4" />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard video="/testimonial6.mp4" />
        </SwiperSlide>
        <SwiperSlide>
          <TestimonialCard video="/testimonial2.mp4" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export function RealTestimonialsContainer() {
  return (
    <>
      {' '}
      <div className="flex items-center justify-center py-20 px-8 bg-neutral-100 relative flex-wrap">
        <div className="w-full flex items-center justify-center">
          <div className="group flex border border-gray-300 rounded-md w-8 h-8 items-center justify-center cursor-pointer transition-colors transition-bg duration-1000 hover:bg-black">
            {' '}
            <ArrowRightIcon className="w-4 h-3 text-black transform rotate-180 group-hover:text-white" />{' '}
          </div>{' '}
          <div className="text-container flex-col text-center px-20">
            {' '}
            <p>Trusted & Proven by Science</p>{' '}
            <h1 className="text-[2.5rem] m-0 font-medium">
              Real People. Real Results.
            </h1>{' '}
            <Link to="/" className="pl-3">
              {' '}
              view all{' '}
            </Link>{' '}
          </div>
          <div className="group flex border border-gray-300 rounded-md w-8 h-8 items-center justify-center cursor-pointer transition-colors transition-bg duration-1000 hover:bg-black">
            <ArrowRightIcon className="w-4 h-3 text-black group-hover:text-white" />
          </div>
        </div>
        <div className="w-full flex flex-wrap justify-around gap-4 mt-10"></div>
        <App />
      </div>{' '}
    </>
  );
}

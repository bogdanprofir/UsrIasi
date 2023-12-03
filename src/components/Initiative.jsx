import React, { useState } from 'react';
import CetPlan from '../assets/CETPlan.jpg';
import FaraPacanele from '../assets/FaraPacaneleCarousel.jpg';
import TransportComun from '../assets/CarouselTransComun.jpg';
import ScoliNoi from '../assets/ScoliNoi.jpg';
import CentreScolare from '../assets/Centre-scolare.jpg'
import SolutiiCopou from '../assets/SolutiiAleeaSadoveanu.jpg'
import TraficBucium from '../assets/TraficBucium.jpg'
import TransportComunExtins from '../assets/TransportPublicEficient.jpg'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { Helmet } from 'react-helmet'

const slides = [
  {
    url: CetPlan,
        
  },
  {
    url: FaraPacanele,
      },
  {
    url: TransportComun,
      },
  {
    url: ScoliNoi,
     },
  {
    url: TraficBucium,
      },
  {
    url: CentreScolare,
      },
  {
    url: SolutiiCopou,
      },
  {
    url: TransportComunExtins,
  }    
  // Add more images and descriptions as needed
];


  function Initiative () {

    
const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () => {
  const isFirstSlide = currentIndex === 0;
  const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
  setCurrentIndex(newIndex);
};

const nextSlide = () => {
  const isLastSlide = currentIndex === slides.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};

const goToSlide = (slideIndex) => {
  setCurrentIndex(slideIndex);
};

  return (

    
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <Helmet>
        <title>Inițiative USR Iași</title>
      </Helmet>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full mt-5 h-[85vh] rounded-2xl bg-center bg-contain bg-no-repeat duration-500'
      ></div>
      {/* Left Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Initiative;
import React, { useState } from 'react';
import CandidatPrimarie from '../assets/CETPlan.jpg';
import ProiectDocFam from '../assets/CandidatUSRIasi.jpg';
import TransportComun from '../assets/CarouselTransComun.jpg';
import ScoliNoi from '../assets/ProiectScoli.jpg';
import TraficBucium from '../assets/TraficBucium.jpg'

const images = [
  {
    url: CandidatPrimarie,
    description: 'Comunicat Presa - Candidatul USR pentru Primaria Iasi',
    
  },
  {
    url: ProiectDocFam,
    description: 'Am dotat cabinetele medicilor de familie prin PNRR',
  },
  {
    url: TransportComun,
    description: 'Pregatim transport comun gratuit pentru ieseni!',
  },
  {
    url: ScoliNoi,
    description: 'Avem nevoie de scoli noi pentru a scapa de orele de "dupa-amiaza"',
  },
  {
    url: TraficBucium,
    description: 'Solutii pentru traficul din Bucium',
  },
  // Add more images and descriptions as needed
];

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="flex-1 h-screen font-eleron">
      {/* Carousel */}
      <div
        id="carouselExampleCaptions"
        className="relative h-full overflow-hidden"
        data-te-carousel-init
        data-te-ride="carousel"
      >
        {/* Carousel indicators */}
        <div
          className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
          data-te-carousel-indicators
        >
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              data-te-target="#carouselExampleCaptions"
              data-te-slide-to={index}
              onClick={() => handleSlideChange(index)}
              className={`mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] ${
                activeSlide === index ? 'opacity-100' : 'opacity-50'
              } transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none`}
              aria-current={activeSlide === index}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Carousel items */}
        <div className="relative w-full h-full overflow-hidden after:clear-both after:block after:content-['']">
          {images.map((slide, index) => (
            <div
              key={index}
              className={`relative float-left ${index === activeSlide ? '' : '-mr-[100%]'} w-full h-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
              data-te-carousel-active={index === activeSlide}
              data-te-carousel-item
              style={{ backfaceVisibility: 'hidden' }}
            >
              <img
                src={slide.url}
                className="block w-full h-full object-contain p-4 mt-4"
                alt={`Slide ${index + 1}`}
              />
              <div className="absolute inset-x-[15%] bg-[#002A59] bg-opacity-60 bottom-5 hidden py-5 text-center text-white md:block">
                <h5 className="text-xl font-bold">{`Proiectul nr. ${index + 1} pentru ieseni `}</h5>
                <p className='italic font-semibold'>{slide.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel controls - prev item */}
        <button
          className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="prev"
          onClick={() => handleSlideChange((activeSlide - 1 + images.length) % images.length)}
        >
          <span className="inline-block h-8 w-8">
            {/* Your custom previous image */}
            <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
        </button>

        {/* Carousel controls - next item */}
        <button
          className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
          type="button"
          data-te-target="#carouselExampleCaptions"
          data-te-slide="next"
          onClick={() => handleSlideChange((activeSlide + 1) % images.length)}
        >
          <span className="inline-block h-8 w-8">
            {/* Your custom next image */}
            <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
          </span>
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;

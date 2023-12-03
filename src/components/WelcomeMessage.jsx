import React from 'react';
import CookieSvg from '../assets/cookie-svg.svg'

const WelcomeMessage = ({ onAccept, onDecline }) => {
  return (
    <div className="bg-white font-eleron text-[#002A59] p-4 text-center">
      <h1 className='flex items-center justify-center'>Acest site utilizează <span><img src={CookieSvg} alt="cookie" className='w-6 h-6 ml-2' /></span> </h1>
      <p className="text-lg font-semibold">
        Folosim cookie-uri pentru a vă îmbunătăți experiența de navigare și pentru a analiza traficul nostru.
      </p>
      <div className="mt-4 flex justify-center space-x-4">
        <button className="px-6 py-2  font-medium bg-[#002A59] text-white w-fit transition-all shadow-[3px_3px_0px_black] rounded hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]" onClick={onAccept}>
          Permite 
        </button>
        <button className=" text-[#002A59] border-2 border-[#002A59] px-4 py-2  w-fit transition-all shadow-[3px_3px_0px_black] rounded hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]" onClick={onDecline}>
          Refuză
        </button>
      </div>
    </div>
  );
};

export default WelcomeMessage;



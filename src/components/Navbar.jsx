import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const NavLinks = ({ onMobileClose }) => (
    <>
    <Link to="/" onClick={onMobileClose}>
      <h4 className='hover:cursor-pointer hover:scale-105  font-eleron'>Acasa</h4>
    </Link>
    <Link to="/despre_usr" onClick={onMobileClose}>
      <h4 className='hover:cursor-pointer hover:scale-105 font-eleron'>Despre USR</h4>
    </Link>
    
    <div className="relative group inline-block hover:cursor-pointer">
          <h4 className='hover:scale-105 inline-block font-eleron'>
              Oameni
              <svg className="w-4 h-4 ml-1 inline-block fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path d="M10 12l-5-5h10l-5 5z"></path>
              </svg>
          </h4>
          <div className="absolute left-0 z-10 hidden mt-1 group-hover:block bg-[#002A59] text-[#fff] py-2 rounded shadow-lg">
              <Link to="/oameni/conducere" onClick={onMobileClose} className="block font-eleron px-4 py-2 hover:bg-[#FFF] hover:text-[#002A59]">Conducere</Link>
              <Link to="/oameni/parlamentari" onClick={onMobileClose} className="block font-eleron px-4 py-2 hover:bg-[#FFF] hover:text-[#002A59]">Parlamentari</Link>
              <Link to="/oameni/consilieriLocali" onClick={onMobileClose} className="block font-eleron px-4 py-2 hover:bg-[#FFF] hover:text-[#002A59]">Consilieri locali</Link>
              <Link to="/oameni/consilieriJudeteni" onClick={onMobileClose} className="block font-eleron px-4 py-2 hover:bg-[#FFF] hover:text-[#002A59]">Consilieri judeteni</Link>
          </div>
      </div>
      <Link to="/galerie-foto-usr" onClick={onMobileClose}>Galerie Foto</Link>
      <Link to="/contact" onClick={onMobileClose}>
      <h4 className='hover:cursor-pointer font-eleron hover:scale-105'>Contact</h4>
    </Link>
    
        </>
  )
  

  return (
    <div className="w-full fixed flex justify-between items-center p-5 bg-[#002A59] text-[#fff] uppercase font-bold z-50 h-[80px]">
      <Link to="/">
        <img className='hover:cursor-pointer' src={Logo} alt="USR" style={{width: '120px'}} />
      </Link>

      <div className="hidden md:flex space-x-7">
        <NavLinks />
      </div>

      <Link to="https://usr.ro/inscriere/" target="_blank" className="md:block hidden">
        <button className='font-eleron bg-[#FF0021] w-[100px] p-2 h-18 rounded-lg hover:scale-105 uppercase'>Inscriere</button>
      </Link>

      <div className="md:hidden flex items-center justify-end">
  <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col items-end justify-center">
    {isOpen ? (
      <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8 text-white">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    ) : (
      <>
        <div className="h-1 w-8 bg-white mb-1"></div>
        <div className="h-1 w-8 bg-white mb-1"></div>
        <div className="h-1 w-8 bg-white"></div>
      </>
    )}
  </button>
</div>


      <div className={`flex flex-col space-y-5 ${isOpen ? 'block md:hidden bg-[#002A59] p-5 absolute w-full top-[80px] left-0' : 'hidden'}`}>
        <NavLinks onMobileClose={() => setIsOpen(false)}  />
        <Link to="https://usr.ro/inscriere/" target="_blank" >
        <button className='font-eleron bg-[#FF0021] w-[100px] p-2 h-18 rounded-lg hover:scale-105 uppercase'>Inscriere</button>
      </Link>
        
      </div>
    </div>
  );
}


export default Navbar;

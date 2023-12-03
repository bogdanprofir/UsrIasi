import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="bg-[#002A59] text-white font-eleron font-bold p-6">
      <div className="container mx-auto md:flex justify-between align-middle items-center">
        <div className="mb-4 md:mb-0 flex space-x-2">
          <a
            href="https://www.facebook.com/usriasi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-gray-300"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/usrtiasi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-white hover:text-gray-300"
          >
            <FaInstagram />
          </a>
        </div>

        <div className="mb-4 md:mb-0">
          <address className="font-eleron text-base not-italic">
           Adresa: Bulevardul Independenței 19, Iași
          </address>
          <a href="tel:0743453228" className="block mt-1 font-eleron  text-base">
            Tel: 0743453228
          </a>
          <a
            href="mailto:contact@usr-iasi.ro"
            className="block mt-1 font-eleron text-base"
          >
            Email: contact@usr-iasi.ro
          </a>
        </div>
        <div className="mb-4 md:mb-0 gap-5 flex flex-col justify-center md:flex-row ">
         <a href="https://www.aldeparty.eu/"> <img className="w-[15rem] md:w-[10rem]" src='/AldeLogo.svg' alt="" /></a>
         <a href="https://www.usr.ro/wp-content/uploads/2017/04/ALDE-Party-2019-Freedom-opportunity-prosperity-the-Liberal-vision-for-the-future-of-Europe.pdf"> <img className="w-[15rem] md:w-[10rem]" src="/AldeManifesto.jpg" alt="" /></a>

        </div>

        <div className="flex flex-col gap-1">
          <p className="font-eleron text-sm mb-1">
            Uniunea Salvați România. © 2023
          </p>
          <Link to="/GDPR" className="text-base font-eleron hover:underline">
            Informare prelucrarea datelor
          </Link>
          <a className="font-eleron text-sm hover:underline" href="http://deisoconsulting.eu"> Produced by Deiso ©</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

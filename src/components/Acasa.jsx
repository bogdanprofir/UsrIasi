import React from 'react';
import PET1 from '../assets/faraPacanele.jpg';
import FP1 from '../assets/fp1.jpg'
import DNA1 from '../assets/DNA1.jpg'
import TF1 from '../assets/termoficare.jpg'
import EC1 from '../assets/ecologizare.jpg'
import PC1 from '../assets/protestCiolacu.jpg'
import DIZ1 from '../assets/dizabilitati.jpg'
import PCH1 from '../assets/protestChirica.jpg'
import UKR1 from '../assets/usrUcraina.jpg'
import EYS1 from '../assets/europeansummit.jpg'
import UTA1 from '../assets/UsrAsculta.jpg'
import DOC1 from '../assets/proiectDocFam.jpg'
import BRK1 from '../assets/break.jpg'
import XMAS1 from '../assets/Santa.jpg'
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

function Acasa() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-screen pt-20 mb-[80px]">

      {/* Left side: Buttons */}
      <div className="flex flex-col justify-center items-center md:w-1/3 p-4 h-full">
        <h1 className='text-3xl p-6 m-3 flex justify-center items-center align-middle text-[#002A59] font-extrabold'>USR  Iași </h1>
        <div className='flex flex-col md:space-y-4'>
          <button className='bg-[#FF0021] w-[10rem] mb-4 md:mb-0 p-2 hover:bg-white hover:text-[#002A59] font-bold text-white h-[2rem] items-center align-middle flex justify-center rounded-2xl  hover:shadow-lg'>Initiative</button>
          {/* <button className='bg-[#FF0021] w-[10rem] mb-4 md:mb-0 p-2 hover:bg-white hover:text-[#002A59] font-bold text-white h-[2rem] items-center align-middle flex justify-center  rounded-2xl hover:shadow-lg'>Programa</button> */}
          <Link to="https://usr.ro/doneaza/" target="_blank">
            <button className='bg-[#FF0021] w-[10rem] p-2 hover:bg-white hover:text-[#002A59] font-bold text-white h-[2rem] items-center align-middle flex justify-center rounded-2xl  hover:shadow-lg'>Doneaza</button>
          </Link>
        </div>
      </div>

      {/* Right side: Activitate si Stiri */}
      <div className="flex flex-col md:flex-row md:w-2/3 p-4">
        
        {/* Activitati Column */}
        <div className="flex flex-col overflow-y-auto w-full md:w-1/2 p-4 rounded-tr-lg mb-4 md:mb-0 h-full">
          <h2 className="text-2xl font-bold mb-4 text-[#002A59] flex justify-center">Activitate</h2>
          
          <Link to="/protest_chirica" className="flex flex-col justify-center items-center md:flex-row mb-4 border bg-[#002A59] rounded-tl-3xl rounded-br-3xl p-2 hover:shadow-lg">
            <img src={PCH1} alt="News" className="w-40 h-40 object-cover mr-4" />
            <div className='flex flex-col justify-evenly'>
              <h3 className="text-xl font-semibold text-white">Protest împotriva corupției  </h3>
              <p className="text-white">USR Iași a protestat împotriva celui mai corupt primar pe care orașul nostru l-a avut vreodată.</p>
            </div>
          </Link>
          <Link to="/caravanaDizabilitati" className="flex flex-col justify-center items-center md:flex-row mb-4 border bg-[#002A59] rounded-tl-3xl rounded-br-3xl p-2 hover:shadow-lg">
            <img src={DIZ1} alt="News" className="w-40 h-40 object-cover mr-4" />
            <div className='flex flex-col justify-evenly'>
              <h3 className="text-xl font-semibold text-white">Caravana USR Dizabilități La Iași </h3>
              <p className="text-white">Comunitatea USR Dizabilități a prezentat Ghidul practic cu soluții de bun simț privind drepturile persoanelor cu dizabilități. </p>
            </div>
          </Link>
          <Link to="/BreakIasi" className="flex flex-col justify-center items-center md:flex-row mb-4 border bg-[#002A59] rounded-tl-3xl rounded-br-3xl p-2 hover:shadow-lg">
            <img src={BRK1} alt="Activity" className="w-40 h-40 object-cover mr-4" />
            <div className='flex flex-col justify-evenly'>
              <h3 className="text-xl font-semibold text-white">B.R.E.A.K găzduit de USR Tineret Iași  </h3>
              <p className="text-white">USR Tineret Iași a găzduit evenimentul B.R.E.A.K, unde colegi din toată țara ni s-au alăturat pentru a învăța despre burn-out politic, stres, și cum pot fi gestionate aceste lucruri.</p>
            </div>
          </Link>
          
          <Link to="/EuropeanSummit" className="flex flex-col justify-center items-center md:flex-row mb-4 border bg-[#002A59] rounded-tl-3xl rounded-br-3xl p-2 hover:shadow-lg">
            <img src={EYS1} alt="Activity" className="w-40 h-40 object-cover mr-4" />
            <div className='flex flex-col justify-evenly'>
              <h3 className="text-xl font-semibold text-white">Future of European Youth Summit 3.0 Iași </h3>
              <p className="text-white">Cel mai mare eveniment internațional marca USR Tineret, organizat alături de FNF East and Southeast Europe. </p>
            </div>
          </Link>
          <Link to="/ecologizare" className="flex mb-4 border bg-[#002A59] rounded-tl-3xl rounded-br-3xl p-2 hover:shadow-lg">
            <img src={EC1} alt="Activity" className="w-40 h-40 object-cover mr-4" />
            <div className='flex flex-col justify-evenly'>
              <h3 className="text-xl font-semibold text-white">Ecologizare făcută de USR Iași  </h3>
              <p className="text-white">Cine se trezește de dimineață, mulți saci umple! </p>
            </div>
          </Link>
          <Link to="/protest_ciolacu" className="flex flex-col justify-center items-center md:flex-row mb-4 border bg-[#002A59] rounded-tl-3xl rounded-br-3xl p-2 hover:shadow-lg">
            <img src={PC1} alt="News" className="w-40 h-40 object-center mr-4" />
            <div className='flex flex-col justify-evenly'>
              <h3 className="text-xl font-semibold text-white">Protest USR Iași împotriva Guvernului Ciolacu </h3>
              <p className="text-white">USR nu va învârti roata între PNL și PSD, în timp ce soarta românilor este pariată ca la ruletă. </p>
            </div>
          </Link>
          
          <Link to="/actiuneCaritabila" className="flex flex-col justify-center items-center md:flex-row mb-4 border bg-[#002A59] rounded-tl-3xl rounded-br-3xl p-2 hover:shadow-lg">
            <img src={XMAS1} alt="Activity" className="w-40 h-40 object-cover mr-4" />
            <div className='flex flex-col justify-evenly'>
              <h3 className="text-xl font-semibold text-white">Acțiune caritabilă USR Iași  </h3>
              <p className="text-white">Am  fost și ajutoarele lui Moș Crăciun, și am dăruit tuturor copiilor din două grădinițe din Cornești și Poieni, cadouri. </p>
            </div>
          </Link>
          <Link to="/ajutor_ucraina" className="flex flex-col justify-center items-center md:flex-row mb-4 border bg-[#002A59] rounded-tl-3xl rounded-br-3xl p-2 hover:shadow-lg">
            <img src={UKR1} alt="News" className="w-40 h-40 object-cover mr-4" />
            <div className='flex flex-col justify-evenly'>
              <h3 className="text-xl font-semibold text-white">USR Tineret, solidar cu victimele războiului din Ucraina </h3>
              <p className="text-white">USR Tineret Iași, alături de colegii parlamentari, a fost în vămile apropiate pentru a oferi ajutorul refugiaților ucraineni. </p>
            </div>
          </Link>
          <Link to="/usrAsculta" className="flex flex-col justify-center items-center md:flex-row mb-4 border bg-[#002A59] rounded-tl-3xl rounded-br-3xl p-2 hover:shadow-lg">
            <img src={UTA1} alt="News" className="w-40 h-40 object-cover mr-4" />
            <div className='flex flex-col justify-evenly'>
              <h3 className="text-xl font-semibold text-white">Campania „USR Iași te ascultă” </h3>
              <p className="text-white">Ieșenii au fost entuziasmați să vadă că opiniile lor contează, și că USR este alături de ei. </p>
            </div>
          </Link>
          {/* Add more cards  */}
        </div>

        {/* xProiecte Column */}
        <div className="flex flex-col overflow-y-auto w-full md:w-1/2 p-4 rounded-tl-lg h-full">
          <h2 className="text-2xl font-bold mb-4 text-[#002A59] flex justify-center">Proiecte</h2>
          <Link to="/dna-ul_padurilor" className="flex flex-col justify-center items-center md:flex-row  mb-4 border bg-[#002A59] rounded-tl-3xl rounded-br-3xl p-2 hover:shadow-lg">
            <img src={DNA1} alt="News" className="w-40 h-40 object-cover mr-4" />
            <div className='flex flex-col justify-evenly'>
              <h3 className="text-xl font-semibold text-white">Susținem înființarea „DNA-ului Pădurilor” </h3>
              <p className="text-white">Colegi din toată țara pun timpul și umărul la bătaie pentru a proteja pădurile. </p>
            </div>
          </Link>
          <Link to="/fara_pacanele_usr" className="flex  mb-4 border bg-[#002A59] rounded-tl-3xl rounded-br-3xl p-2 hover:shadow-lg">
            <img src={FP1} alt="Activity" className="w-40 h-40 object-cover mr-4" />
            <div className='flex flex-col justify-evenly'>
              <h3 className="text-xl font-semibold text-white">Fără Păcănele Lângă Școli </h3>
              <p className="text-white">USR Iași continuă maratonul  #FărăPăcănele </p>
            </div>
          </Link>
          <Link to="/petitieUSR" className="flex flex-col  justify-center items-center md:flex-row mb-4 border bg-[#002A59] rounded-tl-3xl rounded-br-3xl p-2 hover:shadow-lg">
            <img src={PET1} alt="Activity" className="w-40 h-40 object-cover mr-4" />
            <div className='flex flex-col justify-evenly'>
              <h3 className="text-xl font-semibold text-white">Petiție USR Iași</h3>
              <p className="text-white">Vrem transport public gratuit, rapid, flexibil si modern la Iasi! </p>
            </div>
          </Link>
          <Link to="/termoficare" className="flex mb-4 border bg-[#002A59] rounded-tl-3xl rounded-br-3xl p-2 hover:shadow-lg">
            <img src={TF1} alt="Activity" className="w-40 h-40 object-cover mr-4" />
            <div className='flex flex-col justify-evenly'>
              <h3 className="text-xl font-semibold text-white">Termoficare verde pentru Iași </h3>
              <p className="text-white">USR Iași propune termoficare verde pentru Iași!  </p>
            </div>
          </Link>
          <Link to="/cabineteDotate" className="flex flex-col justify-center items-center md:flex-row mb-4 border bg-[#002A59] rounded-tl-3xl rounded-br-3xl p-2 hover:shadow-lg">
            <img src={DOC1} alt="Activity" className="w-40 h-40 object-cover mr-4" />
            <div className='flex flex-col justify-evenly'>
              <h3 className="text-xl font-semibold text-white">USR Iași, în ajutorul medicilor de familie  </h3>
              <p className="text-white">Vom avea cabinete ale medicilor de familie renovate și dotate modern, în mediul rural. </p>
            </div>
          </Link>
          
         
          
          
          {/* Add more cards  */}
        </div>
      </div>
    </div>
  );
}

export default Acasa;

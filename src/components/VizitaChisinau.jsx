import React from "react";
import VCh2 from '../assets/Gallery21.jpeg'
import VCh1 from '../assets/VCh1.jpeg'
import { Helmet } from 'react-helmet'

function EcologizareUSR() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center text-[#002A59] justify-center pt-20 bg-white bg-opacity-90">
      <Helmet>
        <title>Vizită a președintelui USR Iași la Chișinău</title>
      </Helmet>
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">Vizită a președintelui USR Iași la Chișinău</h1>
      
      <img src={VCh2} alt="Ecologizare făcută de USR Iași" className="w-[30rem] h-[20rem] mb-8" />
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify p-2 m-2  indent-5">Președintele USR Iași - Ștefan Tanasă s-a aflat într-o vizită în capitala Republicii Moldova - Chișinău, ocazie cu care a avut o întrevedere cu viceprimarul municipiului Chișinău, Cutasevici Angela, și cu dl. Boris Gilca, sef al Direcției Generale Asistentă Socială și Sănătate a primăriei Chișinău. </p>
        
          
          <div className="flex md:flex-row flex-col p-2 m-2 gap-2">
          <img src={VCh1} alt="actiune de plantare pomi" className="w-[20rem] h-[20rem] mb-8" />
          <div className="flex flex-col p-2">
          <p className="text-justify  indent-5">Ștefan Tanasă a participat la invitația celor din Primaria Capitalei, respectiv la Directia Generala Asistenta Sociala si Sanatate, la o întâlnire unde au discutat despre proiectele aflate in derulare, dar si despre oportunitatea demararii unor noi proiecte care sa vizeze noi perspective de dezvoltare a relatiilor interinstitutionale intre cele doua orase.</p> 
          <p className="indent-5 text-justify ">Este foarte important sa intensificăm relatiile de colaborare cu fratii de peste Prut si să stabilim acorduri de cooperare in toate domeniile de activitate.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EcologizareUSR;

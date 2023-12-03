import React from "react";
import Pet1 from '../assets/petitieUSR.jpg'; 
import PetitieUsrButton from "./ButonPetitie";
import { Helmet } from 'react-helmet'

function PetitieUSRIasi() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pt-20 bg-white bg-opacity-90">
      <Helmet>
        <title>Transport public GRATUIT | USR Iași</title>
      </Helmet>
      <h1 className="text-3xl flex justify-center font-bold mt-8 mb-5 text-[#002a59]">Petiție USR Iași</h1>
     
     <PetitieUsrButton />
      <h2 className="text-2xl flex justify-center font-bold mb-6 text-[#002a59] align-center text-center">Vrem transport public gratuit, rapid, flexibil și modern, care să acopere și suburbiile, la Iași!</h2>
      
      <img src={Pet1} alt="Petiție USR Iași" className="w-[28rem] mb-8" />
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify p-2 m-2 indent-5 text-[#002A59]">Dacă și tu vrei să devenim primul oraș din țară cu transport în comun complet gratuit pentru toți cetățenii, fără diferențiere, semnează petiția USR Iași și fă-ne cunoscută opinia ta despre acest proiect curajos! Totul pleacă de la ceea ce proiectăm împreună.</p>
        <h3 className="text-2xl font-extrabold mb-4 ml-[2.1rem] text-[#FF0021]">Ce se schimbă?</h3>
        <p className="text-justify p-2 m-2 indent-5 text-[#002A59]">Zeci de mii de ieșeni vor putea face economii în loc să plătească lunar abonamente, iar traficul redus va însemna mai puțină poluare, mai puțini nervi la volan și, evident, o mobilitate extinsă.</p>
        <h3 className="text-2xl font-extrabold mb-4 ml-[2.1rem] text-[#FF0021]">De unde bani? Simplu!</h3>
        <p className="text-justify p-2 m-2 indent-5 text-[#002A59]">Tăiem cheltuielile inutile, renunțăm la serviciile scumpe care generează doar risipă și investim în flota nouă de mașini, performante, curate, care să circule mai des, în absolut tot orașul și până la ore târzii.</p>
        <p className="text-justify p-2 m-2 indent-5 text-[#002A59]">Mai puțină hotie înseamnă zeci de milioane de euro pe care îi putem folosi pentru dorințele pe care le-ați avut dintotdeauna!</p>
        <p className="text-justify p-2 m-2 indent-5 text-[#002A59]">Semnează petiția și îndeamnă și alți prieteni să vină alături de noi! Mai multe semnături înseamnă un pas spre normalitate!</p>
        
      </div>
    </div>
  );
}

export default PetitieUSRIasi;

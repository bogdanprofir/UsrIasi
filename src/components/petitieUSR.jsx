import React from "react";
import Pet1 from '../assets/petitieUSR.jpg'; // 

function PetitieUSRIasi() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pt-20 bg-white bg-opacity-90">
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">Petiție USR Iași</h1>
      <a href="https://petition.qomon.org/transport-public-gratuit-la-iasi/?fbclid=IwAR0eJyOe0JXQF5i4OKHNeRpX6S_HG37nga2VGOXJUgAGZ_PtkCe_n5hcPmI" className="underline text-blue-500 flex justify-center items-center text-3xl">Semnează aici!</a>
      <h2 className="text-2xl flex justify-center font-medium mb-6">Vrem transport public gratuit, rapid, flexibil și modern, care să acopere și suburbiile, la Iași!</h2>
      
      <img src={Pet1} alt="Petiție USR Iași" className="w-[28rem] mb-8" />
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify p-2 m-2 indent-5">Dacă și tu vrei să devenim primul oraș din țară cu transport în comun complet gratuit pentru toți cetățenii, fără diferențiere, semnează petiția USR Iași și fă-ne cunoscută opinia ta despre acest proiect curajos! Totul pleacă de la ceea ce proiectăm împreună.</p>
        <h3 className="text-2xl font-extrabold mb-4">Ce se schimbă?</h3>
        <p className="text-justify p-2 m-2 indent-5">Zeci de mii de ieșeni vor putea face economii în loc să plătească lunar abonamente, iar traficul redus va însemna mai puțină poluare, mai puțini nervi la volan și, evident, o mobilitate extinsă.</p>
        <h3 className="text-2xl font-extrabold mb-4">De unde bani? Simplu!</h3>
        <p className="text-justify p-2 m-2 indent-5">Tăiem cheltuielile inutile, renunțăm la serviciile scumpe care generează doar risipă și investim în flota nouă de mașini, performante, curate, care să circule mai des, în absolut tot orașul și până la ore târzii.</p>
        <p className="text-justify p-2 m-2 indent-5">Mai puțină hotie înseamnă zeci de milioane de euro pe care îi putem folosi pentru dorințele pe care le-ați avut dintotdeauna!</p>
        <p className="text-justify p-2 m-2 indent-5">Semnează petiția și îndeamnă și alți prieteni să vină alături de noi! Mai multe semnături înseamnă un pas spre normalitate!</p>
        
      </div>
    </div>
  );
}

export default PetitieUSRIasi;

import React from "react";
import UKR2 from '../assets/ucraina.jpg'; // Ensure you have the image you want to use

function USRTineretSolidar() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pt-20 bg-white bg-opacity-10">
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">USR Tineret, solidar cu victimele războiului din Ucraina</h1>
      
      <img src={UKR2} alt="USR Tineret, solidar cu victimele războiului din Ucraina" className="w-[40rem] mb-8" />
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify p-2 m-2 indent-5">Încă din prima zi de război, noi, USR Tineret Iași, alături de colegii parlamentari, a fost în vămile apropiate pentru a oferi ajutorul refugiaților ucraineni, iar, la nivel național, USR a fost primul partid care să vină în sprijinul celor ce au fugit din calea bombelor. Suntem solidari cu Ucraina în continuare, cu românii din Ucraina și vom susține drumul său spre integrarea Europeană.</p>
      </div>
    </div>
  );
}

export default USRTineretSolidar;

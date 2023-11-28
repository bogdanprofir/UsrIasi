import React from "react";
import FP2 from '../assets/FP2.jpg'

function faraPacanele ()  {
  return (
    <div className="max-w-3xl mx-auto text-[#002A59] flex flex-col items-center justify-center pt-20 bg-white bg-opacity-90">
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">Acțiunea Fără Păcănele Lângă Școli</h1>
       
      <img src={FP2} alt="Acțiunea Fără Păcănele Lângă Școli" className="w-[28rem] mb-8" />
      <div className="prose prose-lg font-eleron text-xl ">
        <p className="text-justify p-2 m-2 indent-5">USR Iași continuă maratonul  <span className="font-bold text-[#ff0021] ">#FărăPăcănele</span> dialogând cu oamenii despre proiectul împotriva jocurilor de noroc inițiat de deputatul <span className="font-bold">Filip Havârneanu</span> și colegii săi parlamentari, <span className="font-bold">Diana Stoica și Sebastian Cernic</span>.</p>
        <p className="text-justify p-2 m-2 indent-5">Ieșenii au discutat cu noi deschis despre nenorocirea pe care o aduc jocurile de noroc și ne-au povestit întâmplări tragice legate de cazinouri care le-au marcat viața. Este evident că nu mai putem continua să privim cum peste drum de școli și locuri de joacă, un cazinou te invită înăuntru.</p>
        <p className="text-justify p-2 m-2 indent-5">Le mulțumim tuturor pentru încredere și susținere și vom face tot posibilul pentru că inițiativa USR să devină lege în toamnă!</p>
        <p className="text-justify p-2 m-2 indent-5"><span className="font-bold text-[#ff0021] ">45.000 de români</span> au semnat pentru <span className="font-bold text-[#ff0021] ">#FărăPăcănele</span> și credem că opinia lor trebuie să conteze!</p>
      </div>
    </div>
  );
};

export default faraPacanele;
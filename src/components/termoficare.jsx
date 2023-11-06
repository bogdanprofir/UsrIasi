import React from "react";
import TERM1 from '../assets/termo2.jpg'; // Make sure you have the image you want to use

function TermoficareVerde() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pt-20 bg-white bg-opacity-90">
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">Termoficare verde pentru Iași</h1>
      
      <img src={TERM1} alt="Termoficare verde pentru Iași" className="w-[28rem] mb-8" />
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify indent-5">Subiectul acțiunii noastre este proiectul termoficării verzi și ieftine propusă de senatorul USR Marius Bodea, un proiect care a fost înțeles ușor de către toți cei cu care am interacționat, indiferent de vârstă.</p>
        <p className="text-justify indent-5">Vom continua să discutăm onest cu ieșenii și să le arătăm că avem și soluții pentru problemele critice ale Iașiului.</p>
      </div>
    </div>
  );
}

export default TermoficareVerde;

import React from "react";
import USRTineretIasiImg from '../assets/usrAsculta2.jpg'; 

function USRIasiTeAsculta() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center h-screen justify-center  text-[#002A59] pt-20 bg-white bg-opacity-90">
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">Campania „USR Iași te ascultă”</h1>
      
      <img src={USRTineretIasiImg} alt="Campania „USR Iași te ascultă”" className="w-[40rem] mb-8" />
      
      <div className="prose prose-lg font-eleron text-xl mb-6">
        <p className="text-justify indent-5">USR Tineret Iași continua campania “USR te ascultă”. Ieșenii au fost entuziasmați să vadă că opiniile lor contează, și că USR este alături de ei.</p>
      </div>
    </div>
  );
}

export default USRIasiTeAsculta;

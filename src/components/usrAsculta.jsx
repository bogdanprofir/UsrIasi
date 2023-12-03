import React from "react";
import USRTineretIasiImg from '../assets/usrAsculta2.jpg'; 
import USRAsculta from '../assets/USRAlaturi.jpeg'
import { Helmet } from 'react-helmet'

function USRIasiTeAsculta() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center text-[#002A59] justify-center pt-20 bg-white bg-opacity-90">
      <Helmet>
        <title>USR Iași te ascultă!</title>
      </Helmet>
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">USR Iași te ascultă</h1>
      
      <img src={USRTineretIasiImg} alt="Ecologizare făcută de USR Iași" className="w-[40rem] h-[20rem] mb-8" />
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify p-2 m-2  indent-5">Impreună cu colegii din USR am luat la pas cartierul Tătărași și am discutat cu ieșenii despre problemele cu care se confruntă și despre cum și-ar dori să arate cartierul lor.</p>
        <p className="text-justify p-2 m-2 indent-5"> Vom continua campania "USR Iași te ascultă" și în celelalte cartiere.</p>
                <div className="flex md:flex-row flex-col p-2 m-2 gap-2">
          <img src={USRAsculta} alt="actiune de plantare pomi" className="w-[20rem] h-[20rem] mb-8" />
          <p className="indent-5"><strong>USR Tineret Iași</strong> continua campania “USR te ascultă”. Ieșenii au fost entuziasmați să vadă că opiniile lor contează, și că USR este alături de ei.</p>
            
          
        </div>
      </div>
    </div>
  );
}

export default USRIasiTeAsculta;

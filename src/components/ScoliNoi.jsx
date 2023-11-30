import React from 'react'
import Scoli from '../assets/ScoliNoiContent.png'

function ScoliNoi() {

  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-[#002A59] pt-20 bg-white bg-opacity-90">
  <h1 className="text-3xl flex justify-center font-bold text-center mt-4 mb-8"> Soluții pentru o infrastructură școlară adecvată nevoilor Iașului</h1>
  <img src={Scoli} alt="Campania „USR Iași te ascultă”" className="w-[30rem] mb-8" />
  <div className="prose prose-lg font-eleron text-xl">
    <p className="text-justify p-2 m-2 indent-5">Marius Bodea, candidatul USR pentru postul de primar al Municipiului Iași, propune construirea de la zero a patru școli noi în orașul Iași, în patru zone diferite ale orașului, pentru a suplini nevoia acută de săli de clasă în învățământul gimnazial și liceal din Iași și eliminarea, astfel, a învățământului de după-amiază în ciclul preuniversitar, cu efecte directe asupra eliminării blocajelor majore de trafic din oraș la orele de vârf, precum și diminuarea considerabilă a poluării (traficul fiind principala sursă).</p>
    <p className="text-justify p-2 m-2 indent-5">Acest nou proiect îl completează pe cel prezentat în urmă cu un an, și care propunea construirea a trei mari hub-uri școlare în capetele de oraș (zona Uricani, Copou/Aleea Sadoveanu și Bucium). </p>
  </div>
  <div className='flex justify-start items-start mb-4 gap-3 flex-col'>
    <button className="px-6 py-2  font-medium bg-[#ff021a] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
      <a href="https://mariusbodea.ro/wp-content/uploads/2023/09/Scoli-langa-noi-Marius-Bodea-USR.pdf" target='__blank'>PREZENTAREA SOLUȚIEI &#x2192;</a>
    </button>
    <button className="px-6 py-2  font-medium bg-[#ff021a] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
      <a href="https://track.smncl.com/view/778E3B6C" target='__blank'>Alte detalii, pe larg &#x2192;</a>
    </button>
  </div>
  
</div>


  )
}

export default ScoliNoi
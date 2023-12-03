import React from "react";
import EuropeanYouthImg from '../assets/summit.jpg'; 
import { Helmet } from 'react-helmet'

function EuropeanYouthSummitIasi() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pt-20 bg-white bg-opacity-90 text-[#002A59]">
      <Helmet>
        <title>Summit European de Tineret | USR Iași</title>
      </Helmet>
      
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">Future of European Youth Summit 3.0 a venit la Iași.</h1>
      
      <img src={EuropeanYouthImg} alt="European Youth Summit in Iași" className="w-[40rem] mb-8" />
      
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify p-2 m-2 indent-5">Cel mai mare eveniment internațional marca USR Tineret, organizat alături de FNF East and Southeast Europe a adus 90 de tineri din 16 țări. S-au dezbătut teme relevante pentru situația actuală internațională, precum combaterea dezinformării, conflictele înghețate din Europa, sau extinderea Uniunii Europene în viitorul apropriat.</p>

        <p className="text-justify p-2 m-2indent-5">În prima zi, deschisă de Filip Havarneanu, Diana Finkelstein și Alina Gîrbea, participanții au luat rolul decidenților politici, încercând să găsească rezoluții pentru problemele internaționale. Europarlamentarii USR Vlad Gheorghe și Vlad Botoș au fost, de asemenea, prezenți.</p>

        <p className="text-justify p-2 m-2indent-5">A doua zi a fost marcată de prezentarea și dezbaterea soluțiilor găsite de participanți, cu discuții despre dezinformare și fake news în contextul războiului de la granița Uniunii Europene.</p>

        <p className="text-justify p-2 m-2indent-5">Pe lângă sesiunile de dezbatere, participanții străini au fost invitați la un treasure hunt în zona universității și un tur al orașului Iași, plin de istorie.</p>
      </div>
    </div>
  );
}

export default EuropeanYouthSummitIasi;

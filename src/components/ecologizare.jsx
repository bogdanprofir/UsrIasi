import React from "react";
import ECO1 from '../assets/eco1.jpg'; 

function EcologizareUSR() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pt-20 bg-white bg-opacity-40">
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">Ecologizare făcută de USR Iași</h1>
      
      <img src={ECO1} alt="Ecologizare făcută de USR Iași" className="w-[40rem] h-[40rem] mb-8" />
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify p-2 m-2  indent-5">Cine se trezește de dimineață, mulți saci umple!</p>
        <p className="text-justify p-2 m-2 indent-5">USR Iași a pus la cale mai multe acțiuni de ecologizare pentru a strânge mizeriile aruncate la drumul mare, dar și în spațiile verzi. Dacă e normal? Pentru noi da, pentru că facem asta constant, pentru că vrem să-i convingem și pe alții să ni se alăture. Avem energie, mulți saci menajeri și determinare pentru a lăsa curățenie în urma noastră. O curățenie pe care nu trebuie să o prețuim doar în perimetrul nostru de acasă.</p>
        <p className="text-justify p-2 m-2 indent-5">Natura are nevoie de eroi. De oameni care să nu mai arunce gunoaie pe jos, la voia întâmplării, pentru că mediul atât de prețios, mediul spre care fugim pentru a respira aer curat nu poate fi lada de gunoi a celor care, din comoditate, nu vor să găsească o soluție ca să-l protejeze. Înainte de orice lege aș iniția în Parlament, cele mai de preț pentru mine sunt legea bunului simț și respectul pentru locul care ar trebui sfințit de om.</p>
      </div>
    </div>
  );
}

export default EcologizareUSR;

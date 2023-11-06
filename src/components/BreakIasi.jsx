import React from "react";
import USRBreakImg from '../assets/break2.jpg'; // Ensure you have the image you want to use

function USRBreakEvent() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pt-20 bg-white bg-opacity-90">
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">B.R.E.A.K găzduit de USR Tineret Iași</h1>
      
      <img src={USRBreakImg} alt="B.R.E.A.K găzduit de USR Tineret Iași" className="w-[40rem] mb-8" />
      
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify p-2 m-2 indent-5">USR Tineret Iași a găzduit evenimentul B.R.E.A.K, unde colegi din toată țara ni s-au alăturat pentru a învăța despre burn-out politic, stres, și cum pot fi gestionate aceste lucruri. Este important ca aceste aspecte să nu fie neglijate în viața politică de zi cu zi, pentru a ne putea păstra sănătatea mentală și motivația. Mulțumim invitaților noștri speciali și mai ales colegilor veniți din toate părțile tării, chiar și din afara ei pentru a fi din nou împreună!</p>
      </div>
    </div>
  );
}

export default USRBreakEvent;

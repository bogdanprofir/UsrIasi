import React from "react";
import PC2 from '../assets/protestCiolacu2.jpg'; // Ensure you have the image you want to use

function ProtestUSR() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pt-20 bg-white bg-opacity-90">
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">Protest USR Iași împotriva Guvernului Ciolacu</h1>
      
      <img src={PC2} alt="Protest USR Iași împotriva Guvernului Ciolacu" className="w-[45rem] mb-8" />
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify indent-5">USR nu va învârti roata între PNL și PSD, în timp ce soarta românilor este pariată ca la ruletă.</p>
        <p className="text-justify indent-5">USR Iași a protestat în fața Prefecturii împotriva Guvernului condus de Marcel Ciolacu. Ministerele au fost făcute cadou unui lot de incompetenți și corupți, iar altele au fost lăsate tot pe mâna celor care au dovedit că sunt un dezastru. Mesajul lansat de USR Iași astăzi trebuie să funcționeze ca un RO-Alert, pentru ca cetățenii să reacționeze la pericolul pe care această coaliție politică îl reprezintă pentru ei, pentru copii și pentru dezvoltarea țării.</p>
        <p className="text-justify indent-5">Ce poate livra Ciolacu la guvernare știm deja: scumpiri, privilegii pentru speciali, stagnare și blocarea reformelor. A trecut mai bine de un an și jumătate de când conduce practic Guvernul României.</p>
      </div>
    </div>
  );
}

export default ProtestUSR;

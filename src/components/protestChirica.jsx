import React from "react";
import PRC2 from '../assets/protestChirica2.jpg'; // Ensure you have the image you want to use

function ProtestImpotrivaCoruptiei() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pt-20 bg-white bg-opacity-10">
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">Protest împotriva corupției</h1>
      
      <img src={PRC2} alt="Protest împotriva corupției" className="w-[40rem] mb-8" />
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify indent-5">USR Iași a protestat împotriva celui mai corupt primar pe care orașul nostru l-a avut vreodată.</p>
        <p className="text-justify font-extrabold indent-5">Acest mandat închinat hoției trebuie să înceteze!</p>
        <p className="text-justify indent-5">USR Iași a atras atenția de nenumărate ori asupra mafiei care domnește având protecția primarului Chirica și a semnalat dezastrul administrativ din acești ani care reiese din analize, cifre și incapacitatea edilului de a soluționa marile probleme ale orașului, sufocat de trafic, poluare și caracatița imobiliară.</p>
        <p className="text-justify indent-5">Mesajele noastre trebuie să ajungă peste tot. Iașul merită un primar cinstit, prietenos cu oamenii din comunitate, nu cu interlopii. Iașul merită un primar care nu își caută rândul la furat, ci care vrea să construiască și să repare multe nedreptăți pe care cetățenii le suportă.</p>
        <p className="text-justify indent-5">Adevărul va ieși la lumină și toți cei care și-au rezervat primăria drept paravan pentru ilegalități, vor răspunde în fața legii, ceea ce îi dorim și domnului Chirica, acest „Sfânt” colecționar de dosare penale.</p>
      </div>
    </div>
  );
}

export default ProtestImpotrivaCoruptiei;

import React from "react";
import USRIasiImg from '../assets/proiectDocFam.jpg'; // Ensure you have the image you want to use

function USRIasiMediciFamilie() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pt-20 bg-white bg-opacity-10">
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">USR Iași, în ajutorul medicilor de familie pentru dotarea unor cabinete moderne</h1>
      
      <img src={USRIasiImg} alt="USR Iași, în ajutorul medicilor de familie pentru dotarea unor cabinete moderne" className="w-[40rem] mb-8" />
      
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify p-2 m-2  indent-5">Vom avea cabinete ale medicilor de familie renovate și dotate modern, în mediul rural. Ministerul Sănătății a aprobat proiectele prin PNRR, gândite de către echipa noastră de tineret, Dragoș Popa, vicepreședinte USR Iași, Filip Havarneanu, deputat de Iași și domnul doctor Razvan Socolov în luna august 2022, astfel încât să venim în ajutorul medicilor de familie din zonele rurale ale Iașului.</p>
        <p className="text-justify p-2 m-2 indent-5">După ce am depus primele proiecte de accesare a fondurilor PNRR pentru dotarea cu aparatură medicală a cabinetelor și renovarea acestora, iată că am primit confirmarea că ele sunt bine lucrate, pentru fiecare cabinet în parte, am solicitat între 30.000 și 45.000 de euro pentru achiziționarea de renovări și aparatură performantă.</p>
        <p className="text-justify p-2 m-2 indent-5">Pentru noi au fost foarte importante sesiunile de informare și consiliere ale USR Iași cu beneficiarii PNRR, în cazul acesta medicii de familie și sperăm că în curând ieșenii să găsească și la țară cabinete dotate, curate, cu instrumente care să sprijine actul medical de calitate. Pacienții din mediul rural sunt la fel de importanți, iar efortul medicilor nu trebuie să mai fie umbrit de lipsurile din sistemul de sănătate, care până acum i-a determinat să facă minuni cu minimul de condiții și instrumente.</p>
      </div>
    </div>
  );
}

export default USRIasiMediciFamilie;

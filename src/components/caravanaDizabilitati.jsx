import React from "react";
import DIZ2 from '../assets/dizabilitati2.jpg'; // Ensure you have the image you want to use

function CaravanaUSRDizabilitati() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pt-20 bg-white bg-opacity-10">
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">Caravana USR Dizabilități La Iași</h1>
      
      <img src={DIZ2} alt="Caravana USR Dizabilități La Iași" className="w-[40rem] mb-8" />
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify p-2 m-2  indent-5">Ne-am implicat să aducem la Iași "Caravana USR Dizabilități" și ne bucurăm că ceea ce am experimentat împreună a împletit umanitatea cu responsabilitatea politică și civică. A fost ca un clopoțel care ne-a avertizat că depind de noi multe lucruri bune.</p>
        <p className="text-justify p-2 m-2 indent-5">Comunitatea USR Dizabilități a prezentat Ghidul practic cu soluții de bun simț privind drepturile persoanelor cu dizabilități în oraș și în județ, iar în urma discuțiilor la care au participat parlamentari, consilieri locali și județeni ai USR, am identificat noi soluții, vrem să ajutăm și mai mult pentru a aduce o schimbare în privința incluziunii din Iași, pentru că persoanele cu dizabilități trebuie să aibă acces în mod egal la toate activitățile de zi cu zi, de la transport, la posibilitatea de angajare. Ne dorim ca elevii cu deficiențe să nu fie marginalizați și să poată învața în școli normale, chiar dacă au nevoie de mai multă atenție și sprijin.</p>
        <p className="text-justify p-2 m-2 indent-5">Le mulțumim tuturor celor care ne-au ajutat să facem posibilă această întâlnire și mai ales acestor oameni puternici și determinați de la USR Dizabilități care susțin cauza și drepturile românilor cu dizabilități care nu au nevoie doar de o societate care să îi accepte, ci care să le ofere șansa la o viață mai ușoară, cu toate ajustările și adaptările necesare. Le mulțumim colegilor de la USR Tineret Iași care se dedică fiecarui proiect și fiecărei actiuni pe care o dezvoltăm, ONG-urilor care ne-au onororat cu prezenta și care tot timpul vin cu idei și propuneri și tuturor acestor oameni deosebiți care se gândesc la cei din jurul lor.</p>
      </div>
    </div>
  );
}

export default CaravanaUSRDizabilitati;

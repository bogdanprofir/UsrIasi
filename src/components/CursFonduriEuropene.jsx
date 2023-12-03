import React from "react";
import FonduriEuropene from '../assets/FonduriEuropeneCover.jpeg' 
import { Helmet } from 'react-helmet'

function EcologizareUSR() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center text-[#002A59] justify-center pt-20 bg-white bg-opacity-90">
      <Helmet>
        <title>Workshop Fonduri Europene USR Iași</title>
      </Helmet>
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">Curs pentru accesarea de Fonduri Europene locale</h1>
      
      <img src={FonduriEuropene} alt="Curs Fonduri Europene pentru alesii locali" className="w-[30rem] h-[20rem] mb-8" />
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify p-2 m-2 font-bold  indent-5">Ne formăm pentru viitor aleșii locali, președinții de filiale și membrii implicați în dezvoltarea comunității.</p>
        <p className="text-justify p-2 m-2 indent-5">Cursul despre accesarea de Fonduri Europene a fost susținut de Corina Atanasiu, secretar de stat în Ministerul Investițiilor și Proiectelor Europene în timpul guvernării USR, persoana care a coordonat întocmiriea PNRR pe partea de educație, cercetare și investiții în tehnologii noi (precum hidrogen și microprocesoare). Alături, a fost prezent și Alexandru Horhocea, expert consultant în fonduri europene pentru dezvoltare rurală (AFIR).</p>
        <p className="text-justify p-2 m-2 indent-5">Cei prezenți au avut oportunitatea de a descoperi măsurile de finanțare disponibile pentru investiții private și măsurile aplicabile UAT-urilor.  Am explorat diverse posibilități, de la finanțări pentru cabinete medicale în mediul rural, la strategii de convingere a primarilor să investească în infrastructura educațională, inclusiv prin montarea de panouri fotovoltaice în școli.</p>
        <p className="text-justify p-2 m-2 indent-5"><strong>Rezultatul? </strong> Oameni încântați, un curs extrem de util și productiv, și mai important, o pregătire solidă pentru oamenii din USR ce vor câștiga alegerile viitoare.</p>
        <p className="text-justify p-2 m-2 indent-5">Așa cum v-am demonstrat de fiecare dată, suntem o echipă unită și hotărâtă să schimbăm județul în bine. Construim schimbarea, împreună. Așa vom reuși să realizăm transformări semnificative în fiecare comunitate în parte! </p>
        <p className="text-justify p-2 m-2 indent-5">A fost o adevărată bucurie să vedem o sală plină de oameni dornici să învețe și să dezvolte comunitățile lor.</p>
      </div>
    </div>
  );
}

export default EcologizareUSR;

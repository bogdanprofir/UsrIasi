import React from "react";
import LBC from '../assets/LiceuBelcestiCover.jpeg'
import { Helmet } from 'react-helmet'


function EcologizareUSR() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center text-[#002A59] justify-center pt-20 bg-white bg-opacity-90">
      <Helmet>
        <title>Demersuri Belcești | USR Iași</title>
      </Helmet>
      
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">Demersuri pentru deschiderea Campusului școlar la Liceul Tehnologic "Victor Mihăilescu Craiu" din comuna Belcești.</h1>
      
      <img src={LBC} alt="Ecologizare făcută de USR Iași" className="w-[30rem] h-[25rem] mb-8" />
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify p-2 m-2  indent-5"><strong>Ștefan Tanasă - președinte USR Iași</strong>a început demersurile în vara anului 2021 pentru deschiderea Campusului școlar la Liceul Tehnologic Victor Mihăilescu Craiu din comuna Belcești.</p>
        <p className="text-justify p-2 m-2 indent-5">După mai bine de 12 ani de la demararea proiectului, cel mai mare campus școlar din județ va fi deschis în perioada următoare.</p>
        <p className="text-justify p-2 m-2 indent-5">Campusul nu a putut fi deschis din cauza faptului că este necesară instalarea unor hidranți exteriori, fără de care nu se poate obține avizul ISU, aviz care certifică îndeplinirea de către construcție a măsurilor de securitate la incendiu impuse de reglementările în vigoare.</p>
        <p className="text-justify p-2 m-2 indent-5">Împreună cu colegul meu  Călin Badiu - secretar de stat USR PLUS, am început demersurile către CNI în vederea deblocării situației actuale. Astăzi am primit confirmarea de la CNI că a fost avizată în cadrul CTE-CNI documentația privind reavizarea indicatorilor tehnico-economici ai obiectivului de investiții. Este vorba despre o suplimentare de fonduri în valoare de două milioane de lei pentru realizarea rețelei de hidranți.</p>
        <p className="text-justify p-2 m-2 indent-5">De asemenea, am mers împreună cu Inspectorul Scolar Cristinel Iordăchioaia și cu domnul profesor Didi Constantinescu - consilier local USR PLUS Belcești la campus pentru a-l vizita. Am constatat că starea clădirlor este bună, fiind pregătite sa primească elevi în cele mai bune condiții.</p>
        <p className="text-justify p-2 m-2 indent-5">Am avut o întâlnire și cu domnul primar al comunei Belcești - Tanasă Dumitru, asigurându-mă ca se va achita de toate sarcinile care îi revin Unitatii Administrativ Teritoriale Belcești cu privire la acest proiect, întelegând pe deplin importanța finalizării acestuia.</p>
        
      </div>
    </div>
  );
}

export default EcologizareUSR;

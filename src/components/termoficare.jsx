import React from "react";
import TERM1 from '../assets/termoficare.jpg'; 
import { Helmet } from 'react-helmet'

function TermoficareVerde() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-[#002A59] pt-20 bg-white bg-opacity-90">
      <Helmet>
        <title>Termoficare verde pentru Iași</title>
      </Helmet>
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-1">Termoficare verde pentru Iași</h1>
      <h2 className="text-xl flex justify-center font-bold mt-4 mb-3">Planul pentru înlăturarea falimentului CET.
Pierderile transformate în profit!</h2>
      
      <img src={TERM1} alt="Termoficare verde pentru Iași" className="w-[40rem] mb-8" />
      <div className="prose prose-lg font-eleron text-l">
        <p className="text-justify p-2 m-2 indent-5">Subiectul acțiunii noastre este proiectul termoficării <strong>verzi și ieftine</strong> propusă de senatorul USR Marius Bodea, un proiect care a fost înțeles ușor de către toți cei cu care am interacționat, indiferent de vârstă.</p>
        <p className="text-justify p-2 m-2 indent-5">Un proiect integrat, bazat pe <strong>surse regenerabile de energie</strong>, care ar putea <span className="underline italic">rezolva pe termen nelimitat problema asigurării încălzirii în sistem centralizat pe timpul iernii la Iași</span>, producerea de gaz și energie electrică pe tot parcursul anului care să fie valorificată în sistemul național.</p>
        <p className="text-justify p-2 m-2 indent-5">Cu o investiție totală de 30-35 de milioane de euro, finanțabilă din <strong>fonduri nerambursabile prin programul RePowerEU și PNRR</strong> și implementată pe parcursul a trei ani, Iașul ar putea să devină furnizor de energie verde, în loc să achiziționeze la prețuri exorbitante sute de mii de tone cărbune pentru care plătește 10 milioane de euro anual doar pentru efectul poluator și doar pentru a încălzi 15% din locuințele din municipiul Iași.</p>
        <p className="text-justify p-2 m-2 indent-5">Vom continua să discutăm onest cu ieșenii și să le arătăm că avem și soluții pentru problemele critice ale Iașiului.</p>
      </div>
      <div className='flex justify-start items-start mb-4 gap-3 flex-col'>
    <button className="px-6 py-2  font-medium bg-[#ff021a] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
      <a href="https://mariusbodea.ro/wp-content/uploads/2023/03/Planul-Bodea-Energie-Verde.pdf" target='__blank'>PREZENTAREA SOLUȚIEI &#x2192;</a>
    </button>
    <button className="px-6 py-2  font-medium bg-[#ff021a] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
      <a href="https://mariusbodea.ro/wp-content/uploads/2023/07/Online-Planul-Bodea-pentru-Energie-Termica-compressed-1.pdf" target='__blank'>BROȘURA SOLUȚIEI &#x2192;</a>
    </button>
    <button className="px-6 py-2  font-medium bg-[#ff021a] text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
      <a href="https://track.smncl.com/view/8472D344" target='__blank'>Alte detalii, pe larg &#x2192;</a>
    </button>
  </div>
    </div>
  );
}

export default TermoficareVerde;

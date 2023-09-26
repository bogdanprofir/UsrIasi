import React from "react";
import USRCaritabilaImg from '../assets/charity.jpg'; // Ensure you have the image you want to use

function USRCaritabilaAction() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pt-20 bg-white bg-opacity-10">
      <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">Acțiune caritabilă USR Iași</h1>
      
      <img src={USRCaritabilaImg} alt="Acțiune caritabilă USR Iași" className="w-[40rem] mb-8" />
      
      <div className="prose prose-lg font-eleron text-xl">
        <p className="text-justify p-2 m-2 indent-5">Am fost și ajutoarele lui Moș Crăciun, și am dăruit tuturor copiilor din două grădinițe din Cornești și Poieni, cadouri. Micuții au fost încântați să îl întâlnească pe Moș Crăciun și de gestul nostru.</p>
        <p className="text-justify p-2 m-2 indent-5">Vrem să îi felicităm pe colegii noștri, Silviu Ghenghea și Vasilica Carlescu pentru tot ce fac, voi sunteți adevărații primari ai comunităților voastre!</p>
      </div>
    </div>
  );
}

export default USRCaritabilaAction;

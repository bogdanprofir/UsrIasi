import React from 'react';

function USRTermsIframe() {
  return (
    <div className="relative w-full h-screen pt-20">
      <h1 className='text-xl flex items-center justify-center font-eleron font-bold bg-white text-[#002A59]'>Informare prelucrare date cu caracter personal</h1>
      <iframe
        className=" top-25 left-0 p-2 m-2 w-full h-full border-none"
        src="https://e-usr.ro/static/terms.html"
        title="USR Terms"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default USRTermsIframe;

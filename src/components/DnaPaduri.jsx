import React from 'react';
import DNA2  from '../assets/DNA2.jpg'; 

function DnaPaduri() {
    return (
        <div className="max-w-3xl mx-auto flex flex-col items-center justify-center pt-20 bg-white bg-opacity-90">
            <h1 className="text-3xl flex justify-center font-bold mt-4 mb-8">Susținem înființarea „DNA-ului Pădurilor”</h1>
            
            <img src={DNA2} alt="DNA-ului Pădurilor" className="w-[40rem] mb-8" />
            
            <div className="prose prose-lg font-eleron text-xl">
                <p className="text-justify p-2 m-2 indent-5">Colegi din toată țara pun timpul și umărul la bătaie pentru a proteja pădurile.</p>
                <p className="text-justify p-2 m-2 indent-5">Caravana „DNA-ul Pădurilor” a fost la Iași și peste 1000 de oameni au semnat pentru înființarea Direcției de Investigare a Infracțiunilor de Mediu, un DNA al Pădurilor care să bage hoții de lemne la închisoare.</p>
                <p className="text-justify p-2 m-2 indent-5">Alături de colegii noștri de la USR Tineret, am ieșit în stradă și am vorbit cu ieșenii despre necesitatea și utilitatea acestei instituții. Cetățenii au dialogat, au înțeles gravitatea fenomenului defrișărilor masive și au ales să se implice alături de noi.</p>
                <p className="text-justify p-2 m-2 indent-5">Se taie milioane de metri cubi de lemn, dar mafia are spatele asigurat. În 2019, Inventarului Forestier Naţional anunța că anual se taie ilegal 20 de milioane de metri cubi de lemn din pădurile din România. Vinovații sunt în libertate și prosperă. În tot acest timp, aerul nostru este tot mai puțin bogat în oxigen, peisajele sunt dezolante, animalele sunt hăituite în propriul habitat, iar surpările și inundațiile sunt tot mai prezente.</p>
                <p className="text-justify p-2 m-2 indent-5">Salvarea puținelor păduri pe care le mai are România este o urgență, pentru că ele sunt jefuite în fiecare zi sub ochii autorităților care, de cele mai multe ori, ajung chiar complice la tăierile ilegale. De ani de zile pe drumurile din România trec mii de camioane încărcate cu lemn furat. România se confruntă cu un veritabil fenomen infracțional, dar pare că nimeni nu răspunde pentru acest măcel național. Infracțiunea a fost ridicată la rang de lege și nimeni nu ia nicio măsură.</p>
                <p className="text-justify p-2 m-2 indent-5">USR a pornit în primul rând un demers de conștientizare urmat de o serie de propuneri pentru prevenirea infracțiunilor de mediu. Iașul este unul dintre județele în care furtul de lemne și defrișările haotice pun în pericol sănătatea unui oraș deja declarat ca fiind cel mai poluat. Pădurea Bârnova-Repedea, „plămânul” ieșenilor a devenit în ultimii ani lemn de pus de foc, cu tot cu victorii în instanță. 99% din suprafață a fost considerat bun de tăiat cu drujba. În 2022, din 8.051 de cauze ,,soluționate” privind infracțiuni din Codul silvic, 3.111 au fost finalizate cu renunțare la urmărirea penală și 4.585 prin clasare, adică peste 95% din cauze nici nu au mai fost judecate. Este groaznic să ne gândim că mediul în care trăim mai este ocrotit doar de ONG-urile care, culmea, se luptă cu autoritățile responsabile de protejarea lui și cu hoții deopotrivă.</p>
                <p className="text-justify p-2 m-2 indent-5">USR dorește procurori specializați a căror prioritate să fie lupta împotriva mafiei lemnului. Avem nevoie de polițiști care să prindă hoții de lemne. Avem nevoie ca oamenii, indiferent de localitatea din care provin, să susțină proiectul USR, pentru că doar presiunea publică îi va face pe parlamentarii care până acum au întors privirea să voteze o lege care să îi trimită pe jefuitorii de păduri la închisoare.</p>
             
                
                
                <a href="https://protejampadurile.usr.ro" className="underline text-blue-500 flex justify-center align-middle items-center text-3xl mb-8">Vă invităm și pe voi să continuați a lua parte la schimbare. </a>
            </div>
        </div>
    );
}

export default DnaPaduri;

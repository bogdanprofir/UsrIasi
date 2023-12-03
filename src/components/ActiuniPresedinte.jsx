import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import Ziare from '../assets/ziare.jpeg'
import A7A8 from '../assets/A7A8.jpeg'
import IasiBotosani from '../assets/IasiBotosani.jpeg'
import vizitaPEU from '../assets/PrimariParlamentEuropean.jpeg'
import CPEU from '../assets/consilieriPEU.jpeg'
import RefugiatiUKR from '../assets/RefugiatiUKR.jpeg'
import CTP from '../assets/CTP.jpeg'
import Movileni from '../assets/CCMovileni.jpeg'
import { Helmet } from 'react-helmet'


const Accordion = () => {
  const tabs = [
    {
      title: 'Schimb de experiențe în Parlamentul European',
      description: 'Președintele USR Iași - Ștefan Tanasă împreună cu primarii USR Iași la un schimb de experiențe în Parlamentul European.' ,
      image: vizitaPEU, 
    },
    {
      title: 'Alaturi de consilierii locali din judet in Parlamentul European',
      description: 'Președintele USR Iași alături de doamnele consiliere locale la un schimb de experiențe în Parlamentul European.',
      image: CPEU,
    },
    {
      title: 'Proiecte promovate',
      description: 'Biroul Județean a inițiat și a susținut campania de promovare a realizărilor și proiectelor colegilor din județ prin distribuirea a peste 200.000 ziare.',
      image: Ziare,
    },
    {
        title: 'Sesizare Movileni',
        description: 'Ștefan Tanasă - Președinte USR Iași a cerut Companiei Nationale de Investitii să trimită urgent o comisie de control la Căminul Cultural din comuna Movileni pentru a evalua stadiul lucrărilor de executie. Vorbim de o investitie prin CNI privind reabilitarea Căminului Cultural de aproximativ 850.000 euro care ar fi trebui sa fie finalizată la data de 16.01.2019. Din nefericire, ne întâlnim tot mai des cu astfel de situații în care prestatorii sunt neserioși neducându-și la îndeplinire prevederile contractuale, fapt ce împiedică dezvoltarea comunităților locale.',
        image: Movileni
    },
    {
      title: 'Promovarea intereselor regionale ale Moldovei',
      description: 'Presedintele USR Iasi - Tanasă Stefan in Prefectura Iasi in vederea sprijinirii proiectelor celor doua autostrazi A7 si A8 si pentru promovarea intereselor regionale ale Moldovei. USR Iași va oferi know-how, soluții pentru deblocarea proiectelor și idei pentru a promova interesele regionale ale Moldovei, de fiecare dată când sprijinul nostru este solicitat.',
      image: A7A8,
    },
    {
      title: 'Pe șinele Iași - Botoșani: De la liniște la speranță',
      description: 'Pe Calea Ferată Iași - Botoșani este liniște. Din 1987. Călătoria cu trenul de la Iași la Botoșani durează, în prezent, 4 ore și jumătate, asta dacă nu rămâne blocat în mijlocul câmpului din cauza vreunei defecțiuni la locomotivă. Astfel, visul de a avea o cale ferată între cele două orașe, care să reducă timpul de deplasare cu 2 ore, rămâne în continuare o speranță. Această poveste dovedește faptul că „timpul (nu) le rezolvă pe toate” fără implicarea tuturor.',
      image: IasiBotosani,
    },
    {
      title: 'Ajutor pentru refugiați',
      description: 'Președintele USR Iași - Stefan Tanasă împreună cu colegii din USR Iași au participat la activități de susținere a refugiaților din Ucraina.',
      image: RefugiatiUKR,
    },
    {
      title: 'De vorbă cu angajații CTP Iași  ',
      description: 'Președintele USR Iași - Ștefan Tanasă a fost sa stea de vorbă cu șoferii CTP care au intrat în grevă spontană. S-au plâns de salarii mici, condiții grele de lucru, ore suplimentare neplătite și lipsă de respect din partea superiorilor. Șoferii care au intrat în grevă spontană sunt nemulțumiți pentru că nici cei din conducerea CTP Iași și nici cei din Primărie nu vor de fapt să-i asculte. Probleme la fel de mari sunt că nu le-au fost plătite orele suplimentare, că sunt condiții grele de muncă și că managementul companiei nu face nimic pentru a îmbunătăți situația.',
      image: CTP,
    },
  ];

  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (index) => {
    setActiveTab((prevTab) => (prevTab === index ? null : index));
  };

  return (
    <div className="container font-eleron mx-auto sm:w-full md:w-3/4 lg:w-1/2 min-h-screen p-4">
      <Helmet>
        <title>Acțiuni ale președintelui USR Iași</title>
      </Helmet>
    <h1 className="text-2xl font-bold mt-20 mb-9 text-center text-[#002A59]">
      Acțiuni ale președintelui USR Iași
    </h1>
    {tabs.map((tab, index) => (
      <div key={index} className="mb-4">
        <div
          className={`bg-[#002A59] p-4 hover:shadow-2xl hover:shadow-zinc-950 rounded-md cursor-pointer ${
            activeTab === index ? 'mb-0 -mt-2' : 'mb-4'
          }`}
          onClick={() => toggleTab(index)}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h2 className="text-lg font-semibold text-white">{tab.title}</h2>
            </div>
            <FontAwesomeIcon
              icon={activeTab === index ? faChevronUp : faChevronDown}
              className="text-white"
            />
          </div>
        </div>

        {activeTab === index && (
          <div className="bg-[#002A59] p-4  overflow-auto">
            <div className="flex flex-col items-center">
              <img
                src={tab.image}
                alt={`This is for ${tab.title}`}
                className="w-auto h-auto max-w-[30rem] max-h-[22rem] mb-4"
              />
              <p className="text-white indent-2">{tab.description}</p>
            </div>
          </div>
        )}
      </div>
    ))}
  </div>
);
};

export default Accordion;
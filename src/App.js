import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Acasa from './components/Acasa';
import DespreUsr from './components/DespreUsr';
import GDPR from './components/GDPR'
import ComunicatPresaNoiembrie from './components/CandidatPrimarie.jsx';
import Conducere from './components/Organigrama/Conducere';
import Parlamentari  from './components/Organigrama/Parlamentari';
import ConsilieriJudeteni from './components/Organigrama/ConsilieriJudeteni.jsx';
import Contact from './components/Contact';
import ConsilieriLocali from './components/Organigrama/ConsilieriLocali.jsx';
import FaraPaca from './components/FaraPaca.jsx';
import ActiuneCaritabila from './components/actiuneCaritabila'
import BreakIasi from './components/BreakIasi';
import CabineteDotate from './components/cabineteDotate'
import CaravanaDizabilitati from './components/caravanaDizabilitati'
import DNAulPadurilor from './components/DnaPaduri';
import Ecologizare from './components/ecologizare'
import EuropeanSummit from './components/EuropeanSummit'
import PetitieUSR from './components/petitieUSR'
import BiroulLocal from './components/Organigrama/BiroulLocal.jsx';
import ProtestChirica from './components/protestChirica'
import ProtestCiolacu from './components/ProtestCiolacu' 
import Termoficare from './components/termoficare'
import UsrAsculta from './components/usrAsculta'
import ScoliNoi from './components/ScoliNoi.jsx';
import ActiuneUcraina from './components/actiuneUcraina';
import './App.css'
import 'tailwindcss/tailwind.css'
import ImageGallery from './components/ImageGallery';
import ScrollToTop from './components/ScrollToTop.jsx';
import BirouTineret from './components/Organigrama/BirouTineret.jsx';



function App() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the route changes
  }, []);

  return (
    <Router >

      <ScrollToTop />
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Acasa />} />
          <Route path="/despre_usr" element={<DespreUsr />} />
          <Route path="/comunicat_presa_candidat_primaria_iasi" element={<ComunicatPresaNoiembrie />} />
          <Route path="/oameni/biroul-judetean-iasi" element={<Conducere />} />
          <Route path="/oameni/biroul-local-iasi" element={<BiroulLocal />} />
          <Route path="/oameni/biroul-tineret-iasi" element={<BirouTineret />} />
          <Route path="/oameni/parlamentari" element={<Parlamentari />} />
          <Route path="/oameni/consilieriJudeteni" element={<ConsilieriJudeteni />} />
          <Route path="/oameni/consilieriLocali" element={<ConsilieriLocali />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fara_pacanele_usr" element={<FaraPaca />} />
          <Route path="/actiunecaritabila" element={<ActiuneCaritabila />} />
          <Route path="/breakiasi" element={<BreakIasi />} />
          <Route path="/cabinetedotate" element={<CabineteDotate />} />
          <Route path='/galerie-foto-usr'element={<ImageGallery/>} />
          <Route path="/caravanadizabilitati" element={<CaravanaDizabilitati />} />
          <Route path="/dna-ul_padurilor" element={<DNAulPadurilor />} />
          <Route path="/ecologizare" element={<Ecologizare />} />
          <Route path="/europeansummit" element={<EuropeanSummit />} />
          <Route path="/petitieusr" element={<PetitieUSR />} />
          <Route path="/protest_chirica" element={<ProtestChirica />} />
          <Route path="/protest_ciolacu" element={<ProtestCiolacu />} />
          <Route path="/termoficare" element={<Termoficare />} />
          <Route path='ajutor_ucraina' element={<ActiuneUcraina/>}/>
          <Route path="/usrasculta" element={<UsrAsculta />} />
          <Route path="/scoli_noi_pentru_Iasi" element={<ScoliNoi />} />
          <Route path="/GDPR" element={<GDPR />} />
          
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;

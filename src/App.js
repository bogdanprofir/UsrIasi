import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Acasa from './components/Acasa';
import DespreUsr from './components/DespreUsr';
import GDPR from './components/GDPR'
import Stiri from './components/Stiri';
import Conducere from './components/Organigrama/Conducere';
import Parlamentari  from './components/Organigrama/Parlamentari';
import Reprezentanti from './components/Organigrama/Reprezentanti judeteni';
import Contact from './components/Contact';
import FaraPaca from './components/FaraPaca.jsx';
import ActiuneCaritabila from './components/actiuneCaritabila'
import BreakIasi from './components/BreakIasi';
import CabineteDotate from './components/cabineteDotate'
import CaravanaDizabilitati from './components/caravanaDizabilitati'
import DNAulPadurilor from './components/DnaPaduri';
import Ecologizare from './components/ecologizare'
import EuropeanSummit from './components/EuropeanSummit'
import PetitieUSR from './components/petitieUSR'
import ProtestChirica from './components/protestChirica'
import ProtestCiolacu from './components/ProtestCiolacu' 
import Termoficare from './components/termoficare'
import UsrAsculta from './components/usrAsculta'
import UsrSolidar from './components/usrSolidar'
import ActiuneUcraina from './components/actiuneUcraina';
import './App.css'
import 'tailwindcss/tailwind.css'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Acasa />} />
          <Route path="/despre_usr" element={<DespreUsr />} />
          <Route path="/stiri" element={<Stiri />} />
          <Route path="/oameni/conducere" element={<Conducere />} />
          <Route path="/oameni/parlamentari" element={<Parlamentari />} />
          <Route path="/oameni/reprezentanti" element={<Reprezentanti />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/fara_pacanele_usr" element={<FaraPaca />} />
          <Route path="/actiunecaritabila" element={<ActiuneCaritabila />} />
          <Route path="/breakiasi" element={<BreakIasi />} />
          <Route path="/cabinetedotate" element={<CabineteDotate />} />
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
          <Route path="/usrsolidar" element={<UsrSolidar />} />
          <Route path="/GDPR" element={<GDPR />} />
          
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}
export default App;

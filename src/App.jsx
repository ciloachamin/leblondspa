import "./App.css";
import HeroSection from "./components/HeroSection";

import CartProfesional from "./components/CartProfesional";
import SpaServices from "./components/SpaServices";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import RelaxationSpa from "./components/RelaxationSpa";
import RelaxationSpa2 from "./components/RelaxationSpa2";
import CollagenBioestimulators from "./components/CollagenBioestimulators";
import TratamientSpa from "./components/TratamientSpa";
import BioestimuladoresComponent from "./components/BioestimuladoresComponent";
import BioestimuladoresModerno from "./components/BioestimuladoresModerno";
import BioestimuladoresResultados from "./components/BioestimuladoresResultados";
function App() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <RelaxationSpa2></RelaxationSpa2>
      <BioestimuladoresModerno></BioestimuladoresModerno>
      <RelaxationSpa></RelaxationSpa>
      <CartProfesional></CartProfesional>
      <SpaServices></SpaServices>
      <TratamientSpa></TratamientSpa>
      <Footer></Footer>
    </>
  );
}

export default App;

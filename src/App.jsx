
import './App.css'
import HeroSection from './components/HeroSection'

import CartProfesional from './components/CartProfesional'
import SpaServices  from './components/SpaServices '
import NavBar from './components/NavBar'
import Footer  from './components/Footer'
import RelaxationSpa from './components/RelaxationSpa'
import RelaxationSpa2 from './components/RelaxationSpa2'
function App() {

  return (
    <>
     <NavBar></NavBar>
     <HeroSection></HeroSection>
     <RelaxationSpa2></RelaxationSpa2>

     <RelaxationSpa></RelaxationSpa>
     <CartProfesional></CartProfesional>
     <SpaServices></SpaServices>
     <Footer></Footer>
    </>
  )
}

export default App

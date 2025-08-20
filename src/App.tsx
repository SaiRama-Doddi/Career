
import './App.css'
import AboutSection from './components/AboutSection'
import WhyChooseUs from './components/ChooseUs'
import CTABanner from './components/CTABanner'
import FAQ from './components/FAQ'
import Features from './components/Features'
import Footer from './components/Footer'
import HomePage from './components/HomePage'
import HowItWorksSection from './components/HowItWorksSection'
import Navbar from './components/Navbar'
import PilotOnboardSection from './components/PilotOnboardSection'
import ServicesSection from './components/ServicesSection'
import StatsSection from './components/StatsSection'
import Testimonials from './components/Testinomials'
import UnderstandingSection from './components/UnderstandingSection'


function App() {


  return (
    <>
    <Navbar />
      <HomePage/>
      <Features/>
      <AboutSection />
      <PilotOnboardSection/>
      <ServicesSection/>
       <WhyChooseUs/>
       <UnderstandingSection/>
       <HowItWorksSection/>
      <StatsSection/>
      <Testimonials/>
      <FAQ/>
      <CTABanner/>
      <Footer/>
    </>
  )
}

export default App

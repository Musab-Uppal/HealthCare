import './App.css'
import AppointmentSection from './components/AppointmentSection'
import CaseStudySection from './components/CaseStudySection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import SpecializationsSection from './components/SpecializationsSection'
import TestimonialsSection from './components/TestimonialsSection'

function App() {
  return (
    <>
      <Navbar />

      <main className="bg-surface pt-20 text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
        <HeroSection />
        <SpecializationsSection />
        <TestimonialsSection />
        <CaseStudySection />
        <CtaSection />
        <AppointmentSection />
      </main>

      <Footer />
    </>
  )
}

export default App

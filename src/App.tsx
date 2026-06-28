import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Packages } from '@/components/Packages'
import { Process } from '@/components/Process'
import { Stats } from '@/components/Stats'
import { Gallery } from '@/components/Gallery'
import { Testimonials } from '@/components/Testimonials'
import { Booking } from '@/components/Booking'
import { FAQ } from '@/components/FAQ'
import { Footer } from '@/components/Footer'
import { AIAssistant } from '@/components/AIAssistant'
import { ScrollProgress, CursorGlow, Marquee } from '@/components/MotionFX'

function App() {
  return (
    <main id="top" className="min-h-screen overflow-x-hidden bg-background">
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <Hero />
      <Marquee items={["Mobile detailing", "9H ceramic coating", "Paint correction", "Eco — 2 L per wash", "Trained technicians", "Doorstep service", "Est. 2014"]} />
      <Stats />
      <Services />
      <Packages />
      <Process />
      <Gallery />
      <Marquee items={["12,400 cars finished", "4.9 average rating", "Auckland · Wellington · Christchurch", "Booking in 60 seconds", "Written warranty"]} />
      <Testimonials />
      <Booking />
      <FAQ />
      <Footer />
      <AIAssistant />
    </main>
  )
}

export default App

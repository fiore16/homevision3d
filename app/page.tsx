// import Maintenance from '@/components/Maintenance'

// ─── MAINTENANCE (uncomment to re-enable) ────────────────────────────────────
// export default function Home() {
//   return <Maintenance />
// }

// ─── FULL SITE ────────────────────────────────────────────────────────────────
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Statement from '@/components/Statement'
import ServicePanels from '@/components/ServicePanels'
import Portfolio from '@/components/Portfolio'
import Stats from '@/components/Stats'
import Process from '@/components/Process'
import Testimonials from '@/components/Testimonials'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Statement />
        <ServicePanels />
        <Portfolio />
        <Stats />
        <Process />
        <Testimonials />
        <About />
      </main>
      <Footer />
    </>
  )
}

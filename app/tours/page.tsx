import Navbar from '@/components/Navbar'
import VirtualTours from '@/components/VirtualTours'
import Footer from '@/components/Footer'

export default function ToursPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#0a0a0a] min-h-screen">
        <section className="pt-40 pb-16 px-6 text-center">
          <span className="text-[10px] tracking-[0.45em] uppercase font-sans text-white/40">
            HomeVision3D
          </span>
          <h1
            className="font-display font-bold text-white mt-4 leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
          >
            Immersive{' '}
            <span className="italic" style={{ color: '#00C864' }}>Experiences</span>
          </h1>
          <p
            className="mt-4 text-white/50 font-sans max-w-lg mx-auto"
            style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}
          >
            Explore our renders in full 360° before construction begins.
          </p>
        </section>
        <VirtualTours />
      </main>
      <Footer />
    </>
  )
}

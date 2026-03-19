import Navbar from '@/components/Navbar'
import VirtualTours from '@/components/VirtualTours'
import Footer from '@/components/Footer'

export default function ToursPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen pt-20">
        <VirtualTours />
      </main>
      <Footer />
    </>
  )
}

import Navbar from '@/components/Navbar'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-white min-h-screen">
        <div className="pt-28" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

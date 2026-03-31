import Image from 'next/image'
import { Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer id="contact" className="relative overflow-hidden">
      {/* Background render */}
      <div className="absolute inset-0">
        <Image
          src="/images/2026 New Orleans Dream Home.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-24">
        {/* Logo */}
        <div className="text-5xl font-display font-bold text-white mb-8">
          HomeVision <span className="text-gold">3D</span>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-3 mb-8">
          <a href="mailto:Matteo@homevision3D.com" className="text-white hover:text-gold transition-colors text-lg tracking-wide">
            Matteo@homevision3D.com
          </a>
          <a href="tel:5134319571" className="text-white hover:text-gold transition-colors text-lg tracking-wide">
            (513) 431-9571
          </a>
        </div>

        {/* CTA */}
        <a
          href="/contact"
          className="bg-gold text-black font-semibold px-8 py-3 rounded-full hover:bg-gold-light transition-colors text-sm mb-10"
        >
          Contact Us
        </a>

        {/* Social */}
        <div className="flex items-center gap-4 mb-10">
          <a href="https://instagram.com/official_homevision3d/" target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 border border-white/60 rounded-full flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all">
            <Instagram size={20} />
          </a>
          <a href="https://linkedin.com/company/homevision-3d" target="_blank" rel="noopener noreferrer"
            className="w-12 h-12 border border-white/60 rounded-full flex items-center justify-center text-white hover:border-gold hover:text-gold transition-all">
            <Linkedin size={20} />
          </a>
        </div>

        <p className="text-white/20 text-xs tracking-widest uppercase">
          © {year} HomeVision3D · All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

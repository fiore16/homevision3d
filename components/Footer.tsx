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
        <div className="text-3xl font-display font-bold text-white mb-6">
          HomeVision<span className="text-gold">3D</span>
        </div>

        {/* Contact info */}
        <div className="flex flex-col gap-2 mb-8">
          <a href="mailto:Matteo@homevision3D.com" className="text-white/60 hover:text-white transition-colors text-sm tracking-wide">
            Matteo@homevision3D.com
          </a>
          <a href="tel:5134319571" className="text-white/60 hover:text-white transition-colors text-sm tracking-wide">
            (513) 431-9571
          </a>
        </div>

        {/* CTA */}
        <a
          href="mailto:Matteo@homevision3D.com"
          className="bg-gold text-black font-semibold px-8 py-3 rounded-full hover:bg-gold-light transition-colors text-sm mb-10"
        >
          Contact Us
        </a>

        {/* Social */}
        <div className="flex items-center gap-4 mb-10">
          <a href="https://instagram.com/official_homevision3d/" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all">
            <Instagram size={15} />
          </a>
          <a href="https://linkedin.com/company/homevision-3d" target="_blank" rel="noopener noreferrer"
            className="w-9 h-9 border border-white/20 rounded-full flex items-center justify-center text-white/50 hover:text-white hover:border-white/50 transition-all">
            <Linkedin size={15} />
          </a>
        </div>

        <p className="text-white/20 text-xs tracking-widest uppercase">
          © {year} HomeVision3D · All Rights Reserved
        </p>
      </div>
    </footer>
  )
}

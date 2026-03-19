'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const lightBg = pathname === '/tours' || pathname === '/contact'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || lightBg
        ? 'bg-[#F5F4F0]/95 backdrop-blur-md border-b border-black/10 py-3'
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo — white on hero, dark on light pages */}
        <a href="/" className={`text-xl font-display font-bold tracking-tight flex items-center gap-1 transition-colors duration-300 ${
          scrolled || lightBg ? 'text-[#111111]' : 'text-white'
        }`}>
          HomeVision<span className="text-gold">3D</span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/tours" className={`text-sm font-sans transition-colors duration-300 ${
            scrolled || lightBg ? 'text-[#111111] hover:text-[#00C864]' : 'text-white/80 hover:text-white'
          }`}>
            Virtual Tours
          </a>
          <a href="/contact" className={`text-sm font-sans transition-colors duration-300 ${
            scrolled || lightBg ? 'text-[#111111] hover:text-[#00C864]' : 'text-white/80 hover:text-white'
          }`}>
            Contact
          </a>
        </div>

        {/* CTA — outlined on hero, solid on light pages */}
        <a
          href="/contact"
          className={`text-sm font-semibold px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled || lightBg
              ? 'bg-ink text-white hover:bg-gold hover:text-black'
              : 'border border-white/40 text-white hover:bg-white hover:text-black backdrop-blur-sm'
          }`}
        >
          Contact Us
        </a>
      </div>
    </nav>
  )
}

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

  const linkClass = `font-sans transition-colors duration-300 ${
    scrolled || lightBg ? 'text-[#111111] hover:text-[#00C864]' : 'text-white/80 hover:text-white'
  }`

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled || lightBg
        ? 'bg-[#F5F4F0]/95 backdrop-blur-md border-b border-black/10'
        : 'bg-transparent'
    }`}>
      {/* Top row: logo + CTA */}
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-3">
        <a href="/" className={`text-2xl md:text-3xl font-display font-bold tracking-tight flex items-center gap-1 transition-colors duration-300 ${
          scrolled || lightBg ? 'text-[#111111]' : 'text-white'
        }`}>
          HomeVision <span className="text-gold">3D</span>
        </a>

        {/* Desktop center links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="/" className={`text-sm ${linkClass}`}>Home</a>
          <a href="/tours" className={`text-sm ${linkClass}`}>Virtual Tours</a>
        </div>

        <a
          href="/contact"
          className={`text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 ${
            scrolled || lightBg
              ? 'bg-ink text-white hover:bg-gold hover:text-black'
              : 'border border-white/40 text-white hover:bg-white hover:text-black backdrop-blur-sm'
          }`}
        >
          Contact Us
        </a>
      </div>

      {/* Mobile bottom row: nav links */}
      <div className={`flex md:hidden items-center justify-center gap-8 pb-2 ${
        scrolled || lightBg ? 'border-t border-black/5' : ''
      }`}>
        <a href="/" className={`text-xs ${linkClass}`}>Home</a>
        <a href="/tours" className={`text-xs ${linkClass}`}>Virtual Tours</a>
      </div>
    </nav>
  )
}

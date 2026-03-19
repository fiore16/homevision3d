'use client'

import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-deeper/95 backdrop-blur-md border-b border-black/5 py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-display font-bold tracking-tight text-ink flex items-center gap-1">
          HomeVision<span className="text-gold">3D</span>
        </a>

        {/* Single CTA */}
        <a
          href="#contact"
          className="bg-ink text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-gold hover:text-black transition-colors duration-200"
        >
          Contact Us
        </a>
      </div>
    </nav>
  )
}

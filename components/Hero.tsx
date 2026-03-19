'use client'

import { ArrowDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const heroSlides = [
  '/images/Pool-Exterior.jpg',
  '/images/Grand-Exterior.jpg',
  '/images/Kitchen.jpg',
  '/images/Hiergeist-night.jpg',
]

import { useEffect, useRef, useState } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [slide, setSlide] = useState(0)

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // Mouse parallax glow
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      heroRef.current.style.setProperty('--mouse-x', `${x}%`)
      heroRef.current.style.setProperty('--mouse-y', `${y}%`)
    }
    const el = heroRef.current
    el?.addEventListener('mousemove', handleMouseMove)
    return () => el?.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
    >
      {/* Slideshow background */}
      {heroSlides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === slide ? 1 : 0 }}
        >
          <Image
            src={src}
            alt="HomeVision3D render"
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/55 to-black/80" />

      {/* Radial glow — follows mouse */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(200,169,110,0.10) 0%, transparent 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-1.5 mb-10 animate-fade-in backdrop-blur-sm bg-black/20">
          <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
          <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
            Photorealistic 3D Visualization
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-display font-bold leading-[0.88] mb-8 animate-fade-up"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8rem)' }}
        >
          Visualize the{' '}
          <span className="text-gradient-gold">Future</span>
          <br />
          of Your Homes
        </h1>

        {/* Sub */}
        <p
          className="text-white/70 leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-up [animation-delay:0.15s] opacity-0"
          style={{ fontSize: 'clamp(1.1rem, 2vw, 1.35rem)' }}
        >
          Before the foundation is poured — interior renders, exterior
          visualizations, and 360° tours that close deals faster and inspire
          confidence.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 animate-fade-up [animation-delay:0.3s] opacity-0">
          <a
            href="#portfolio"
            className="group flex items-center gap-2 bg-gold text-black font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-all duration-200 text-base w-full sm:w-auto justify-center"
          >
            View Our Work
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-white/25 text-white/90 hover:text-white hover:border-gold/50 backdrop-blur-sm bg-black/20 px-8 py-4 rounded-lg transition-all duration-200 text-base w-full sm:w-auto justify-center"
          >
            Request a Free Quote
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-8 text-sm text-white/40 animate-fade-in [animation-delay:0.5s] opacity-0">
          <div className="flex items-center gap-2">
            <span className="text-gold font-semibold text-base">100+</span>
            <span>Projects</span>
          </div>
          <div className="w-px h-4 bg-white/15" />
          <div className="flex items-center gap-2">
            <span className="text-gold font-semibold text-base">4.9★</span>
            <span>Rating</span>
          </div>
          <div className="w-px h-4 bg-white/15" />
          <div className="flex items-center gap-2">
            <span className="text-gold font-semibold text-base">24h</span>
            <span>Quote Turnaround</span>
          </div>
        </div>

        {/* Slide dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`rounded-full transition-all duration-300 ${
                i === slide ? 'w-6 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  )
}

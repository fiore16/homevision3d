'use client'

import { ArrowDown, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const heroSlides = [
  '/images/Pool-Exterior.jpg',
  '/images/Grand-Exterior.jpg',
  '/images/Kitchen.jpg',
  '/images/Hiergeist-night.jpg',
  '/images/2026 St. Jude Dream Home.jpg',
  '/images/Simplex_living.jpg',
]

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const [slide, setSlide] = useState(0)
  const [loaded, setLoaded] = useState<boolean[]>(new Array(heroSlides.length).fill(false))

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

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
      className="relative min-h-screen flex items-end justify-start overflow-hidden"
      style={{ '--mouse-x': '50%', '--mouse-y': '50%' } as React.CSSProperties}
    >
      {/* Slideshow — images are the hero */}
      {heroSlides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1500"
          style={{ opacity: i === slide ? 1 : 0, transitionDuration: '1500ms' }}
        >
          <Image
            src={src}
            alt="HomeVision3D render"
            fill
            className="object-cover"
            priority={i === 0}
            sizes="100vw"
            onLoad={() => {
              setLoaded(prev => {
                const next = [...prev]
                next[i] = true
                return next
              })
            }}
          />
        </div>
      ))}

      {/* Very light gradient — just enough to read text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />

      {/* Subtle mouse glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 50% 40% at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(200,169,110,0.07) 0%, transparent 70%)',
        }}
      />

      {/* Content — bottom-left, minimal */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 pb-16 md:pb-24">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-gold/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm bg-black/20 animate-fade-in">
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-gold text-xs font-medium tracking-[0.2em] uppercase">
              Photorealistic 3D Visualization
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display font-bold leading-[0.9] mb-6 animate-fade-up text-white"
            style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)' }}
          >
            Visualize the{' '}
            <span className="text-gradient-gold">Future</span>
            <br />
            of Your Homes
          </h1>

          {/* Sub */}
          <p className="text-white/65 text-lg leading-relaxed mb-8 animate-fade-up [animation-delay:0.15s] opacity-0 max-w-lg">
            Before the foundation is poured — renders and 360° tours that
            close deals and inspire confidence.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-3 animate-fade-up [animation-delay:0.3s] opacity-0">
            <a
              href="#portfolio"
              className="group flex items-center gap-2 bg-gold text-black font-semibold px-7 py-3.5 rounded-lg hover:bg-gold-light transition-all duration-200 text-sm"
            >
              View Our Work
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 border border-white/25 text-white/85 hover:text-white hover:border-white/50 backdrop-blur-sm bg-black/15 px-7 py-3.5 rounded-lg transition-all duration-200 text-sm"
            >
              Get a Free Quote
            </a>
          </div>
        </div>

        {/* Bottom row — stats + dots */}
        <div className="flex items-center justify-between mt-12">
          {/* Social proof */}
          <div className="flex items-center gap-6 text-sm text-white/45">
            <div className="flex items-center gap-2">
              <span className="text-gold font-semibold">100+</span>
              <span>Projects</span>
            </div>
            <div className="w-px h-3 bg-white/15" />
            <div className="flex items-center gap-2">
              <span className="text-gold font-semibold">4.9★</span>
              <span>Rating</span>
            </div>
            <div className="w-px h-3 bg-white/15" />
            <div className="flex items-center gap-2">
              <span className="text-gold font-semibold">24h</span>
              <span>Quotes</span>
            </div>
          </div>

          {/* Slide dots */}
          <div className="flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === slide
                    ? 'w-6 h-1.5 bg-gold'
                    : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  )
}

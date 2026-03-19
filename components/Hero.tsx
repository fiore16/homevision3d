'use client'

import { ArrowDown, ArrowRight } from 'lucide-react'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const { clientX, clientY, currentTarget } = e
      const target = currentTarget as HTMLElement
      const rect = target.getBoundingClientRect()
      const x = ((clientX - rect.left) / rect.width) * 100
      const y = ((clientY - rect.top) / rect.height) * 100
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
      {/* Deep dark background */}
      <div className="absolute inset-0 bg-deeper" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.8) 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />

      {/* Radial glow — follows mouse on desktop */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at var(--mouse-x, 50%) var(--mouse-y, 40%), rgba(200,169,110,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Static ambient orbs */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] rounded-full bg-gold/[0.06] blur-[140px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] rounded-full bg-gold/[0.04] blur-[160px] animate-pulse-slow [animation-delay:2s]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 pt-24">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-gold/25 rounded-full px-4 py-1.5 mb-10 animate-fade-in">
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
          className="text-white/55 leading-relaxed max-w-2xl mx-auto mb-12 animate-fade-up [animation-delay:0.15s] opacity-0"
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
            className="flex items-center gap-2 border border-white/15 text-white/80 hover:text-white hover:border-gold/40 px-8 py-4 rounded-lg transition-all duration-200 text-base w-full sm:w-auto justify-center"
          >
            Request a Free Quote
          </a>
        </div>

        {/* Social proof row */}
        <div className="flex items-center justify-center gap-8 text-sm text-white/30 animate-fade-in [animation-delay:0.5s] opacity-0">
          <div className="flex items-center gap-2">
            <span className="text-gold font-semibold text-base">100+</span>
            <span>Projects</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-gold font-semibold text-base">4.9★</span>
            <span>Rating</span>
          </div>
          <div className="w-px h-4 bg-white/10" />
          <div className="flex items-center gap-2">
            <span className="text-gold font-semibold text-base">24h</span>
            <span>Quote Turnaround</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/25">
        <span className="text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>
    </section>
  )
}

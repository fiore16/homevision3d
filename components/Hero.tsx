'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const slides = [
  '/images/Pool-Exterior.jpg',
  '/images/Grand-Exterior.jpg',
  '/images/Hiergeist-night.jpg',
  '/images/2026 St. Jude Dream Home.jpg',
]

export default function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-black">

      {/* ── Background slideshow ── */}
      {slides.map((src, i) => (
        <div key={src} className="absolute inset-0" style={{ opacity: i === slide ? 1 : 0, transition: 'opacity 1500ms ease' }}>
          <Image src={src} alt="" fill className="object-cover opacity-55" priority={i === 0} sizes="100vw" />
        </div>
      ))}

      {/* ── Gradient overlay ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/75" />

      {/* ── Center content ── */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto">

        {/* Brand mark */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-8 h-px bg-white/30" />
          <span className="text-white/50 text-xs tracking-[0.4em] uppercase font-sans">HomeVision</span>
          <span className="text-xs tracking-[0.4em] uppercase font-sans font-bold" style={{ color: '#00C864' }}>3D</span>
          <div className="w-8 h-px bg-white/30" />
        </div>

        {/* ── High-end slogan ── */}
        <h1
          className="font-display font-bold text-white leading-[0.92] tracking-tight mb-6"
          style={{ fontSize: 'clamp(3.2rem, 8vw, 7.5rem)' }}
        >
          The Future,{' '}
          <span className="italic" style={{ color: '#00C864' }}>Rendered.</span>
        </h1>

        {/* ── Excited one-liner ── */}
        <p
          className="text-white/65 font-sans leading-relaxed max-w-2xl"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
        >
          Stop describing your vision — start showing it. Photorealistic 3D renders
          that captivate clients, win bids, and bring your project to life before
          a single brick is laid.
        </p>

        {/* ── Animated arrow ── */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <a href="#services" className="flex flex-col items-center gap-2 group cursor-pointer">
            <span className="text-white/35 text-[10px] tracking-[0.4em] uppercase font-sans group-hover:text-white/60 transition-colors">
              See Our Work
            </span>
            {/* Animated triple-chevron arrow */}
            <div className="flex flex-col items-center gap-0.5">
              {[0, 1, 2].map((i) => (
                <svg
                  key={i}
                  width="20"
                  height="11"
                  viewBox="0 0 20 11"
                  fill="none"
                  className="opacity-0"
                  style={{
                    animation: `arrowFade 1.5s ease-in-out infinite`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                >
                  <path d="M1 1L10 9.5L19 1" stroke="#00C864" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ))}
            </div>
          </a>
        </div>
      </div>

      {/* ── Slide dots ── */}
      <div className="absolute bottom-8 right-8 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`rounded-full transition-all duration-300 ${
              i === slide ? 'w-5 h-1.5' : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
            }`}
            style={i === slide ? { backgroundColor: '#00C864' } : {}}
          />
        ))}
      </div>

      {/* ── Arrow animation keyframes ── */}
      <style>{`
        @keyframes arrowFade {
          0%, 100% { opacity: 0.15; transform: translateY(0); }
          50% { opacity: 0.9; transform: translateY(4px); }
        }
      `}</style>
    </section>
  )
}

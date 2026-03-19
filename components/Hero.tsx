'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'

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
        <div key={src} className="absolute inset-0 transition-opacity duration-1500"
          style={{ opacity: i === slide ? 1 : 0, transitionDuration: '1500ms' }}>
          <Image src={src} alt="" fill className="object-cover opacity-60" priority={i === 0} sizes="100vw" />
        </div>
      ))}

      {/* ── Gradient ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

      {/* ── GIANT text-mask headline — render shows through the letters ── */}
      <div className="relative z-10 text-center select-none px-4">
        <div
          className="font-display font-black uppercase leading-none tracking-tighter"
          style={{
            fontSize: 'clamp(5rem, 18vw, 16rem)',
            backgroundImage: `url('${slides[slide]}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            transition: 'background-image 1.5s ease',
            filter: 'brightness(1.4) contrast(1.1)',
          }}
        >
          HomeVision
        </div>
        <div
          className="font-display font-black uppercase leading-none tracking-tighter"
          style={{
            fontSize: 'clamp(5rem, 18vw, 16rem)',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '2px rgba(200,169,110,0.7)',
          }}
        >
          3D
        </div>
      </div>

      {/* ── Tagline ── */}
      <p className="relative z-10 text-white/50 text-sm md:text-base tracking-[0.3em] uppercase mt-6 font-sans">
        Photorealistic 3D Visualization
      </p>

      {/* ── Scroll cue ── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 z-10">
        <span className="text-[10px] tracking-[0.35em] uppercase">Featured Work</span>
        <ArrowDown size={14} className="animate-bounce" />
      </div>

      {/* ── Slide dots ── */}
      <div className="absolute bottom-10 right-8 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button key={i} onClick={() => setSlide(i)}
            className={`rounded-full transition-all duration-300 ${
              i === slide ? 'w-5 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-white/25 hover:bg-white/50'
            }`} />
        ))}
      </div>
    </section>
  )
}

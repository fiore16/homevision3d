'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { ArrowDown } from 'lucide-react'

const slides = [
  '/images/Pool-Exterior.jpg',
  '/images/Grand-Exterior.jpg',
  '/images/Kitchen.jpg',
  '/images/Hiergeist-night.jpg',
  '/images/2026 St. Jude Dream Home.jpg',
  '/images/Simplex_living.jpg',
]

export default function Hero() {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % slides.length), 5000)
    return () => clearInterval(t)
  }, [])

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Slideshow */}
      {slides.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === slide ? 1 : 0 }}
        >
          <Image src={src} alt="" fill className="object-cover" priority={i === 0} sizes="100vw" />
        </div>
      ))}

      {/* Gradient overlay — bottom-heavy so text pops */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Big centered text */}
      <div className="relative z-10 text-center px-6">
        <h1 className="font-display font-bold text-white leading-none tracking-tight uppercase"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}>
          Your New<br />
          <span className="text-gradient-gold">Rendering</span><br />
          Company
        </h1>
      </div>

      {/* Featured Work scroll cue */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 z-10">
        <span className="text-xs tracking-[0.3em] uppercase">Featured Work</span>
        <ArrowDown size={16} className="animate-bounce" />
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-10 right-8 flex gap-2 z-10">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`rounded-full transition-all duration-300 ${
              i === slide ? 'w-5 h-1.5 bg-gold' : 'w-1.5 h-1.5 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

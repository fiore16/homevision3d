'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const stats = [
  { end: 100, suffix: '+', label: 'Projects Delivered' },
  { end: 4.9, suffix: '★', label: 'Average Rating', decimals: 1 },
  { end: 24,  suffix: 'h', label: 'Quote Turnaround' },
  { end: 100, suffix: '%', label: 'Revision Guarantee' },
]

function Counter({ end, suffix, decimals = 0 }: { end: number; suffix: string; decimals?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1800
          const steps = 60
          const increment = end / steps
          let current = 0
          const timer = setInterval(() => {
            current = Math.min(current + increment, end)
            setCount(parseFloat(current.toFixed(decimals)))
            if (current >= end) clearInterval(timer)
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, decimals])

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}{suffix}
    </span>
  )
}

export default function Stats() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/images/Pool-Exterior.jpg" alt="" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-black/80" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {stats.map(({ end, suffix, label, decimals }, i) => (
            <div key={i} className="bg-[#F5F4F0]/80 backdrop-blur-sm px-8 py-12 text-center">
              <div className="font-display text-5xl md:text-6xl font-bold text-gold mb-2">
                <Counter end={end} suffix={suffix} decimals={decimals} />
              </div>
              <div className="text-[#111111]/50 text-sm tracking-wide">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

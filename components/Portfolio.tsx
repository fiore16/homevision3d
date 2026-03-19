'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const categories = ['All', 'Interior', 'Exterior'] as const
type Category = (typeof categories)[number]

const projects: {
  title: string
  category: Exclude<Category, 'All'>
  image: string
  cols: number // 1 = normal, 2 = wide
  rows: number // 1 = normal, 2 = tall
}[] = [
  { title: 'Pool Estate',               category: 'Exterior', image: '/images/Pool-Exterior.jpg',                   cols: 2, rows: 1 },
  { title: 'Grand Exterior',            category: 'Exterior', image: '/images/Grand-Exterior.jpg',                  cols: 1, rows: 2 },
  { title: 'Kitchen',                   category: 'Interior', image: '/images/Kitchen.jpg',                         cols: 1, rows: 1 },
  { title: 'Hiergeist Night',           category: 'Exterior', image: '/images/Hiergeist-night.jpg',                 cols: 1, rows: 1 },
  { title: 'The Grove',                 category: 'Exterior', image: '/images/the-grove.jpg',                       cols: 1, rows: 1 },
  { title: 'Master Bath',               category: 'Interior', image: '/images/Master Bath Tub_Shower.jpg',          cols: 1, rows: 2 },
  { title: 'Simplex Living Room',       category: 'Interior', image: '/images/Simplex_living.jpg',                  cols: 2, rows: 1 },
  { title: 'Denver Night',             category: 'Exterior', image: '/images/Denver-night.jpg',                    cols: 1, rows: 1 },
  { title: 'Dining Area',              category: 'Interior', image: '/images/dining area.jpg',                     cols: 1, rows: 1 },
  { title: '2026 St. Jude Dream Home', category: 'Exterior', image: '/images/2026 St. Jude Dream Home.jpg',        cols: 2, rows: 1 },
  { title: 'Game Room & Wet Bar',      category: 'Interior', image: '/images/Game Room_Wet Bar.jpg',               cols: 1, rows: 1 },
  { title: 'Duplex Kitchen',           category: 'Interior', image: '/images/Duplex_Kitchen.jpg',                  cols: 1, rows: 1 },
  { title: 'Rooftop',                  category: 'Exterior', image: '/images/Rooftop (1).jpg',                     cols: 1, rows: 1 },
  { title: 'Quadplex',                 category: 'Exterior', image: '/images/Quadplex.jpg',                        cols: 1, rows: 1 },
  { title: '2026 New Orleans Dream Home', category: 'Exterior', image: '/images/2026 New Orleans Dream Home.jpg',  cols: 2, rows: 1 },
  { title: 'Master Bath Vanity',       category: 'Interior', image: '/images/Master Bath Vanity.jpg',              cols: 1, rows: 1 },
  { title: 'Simplex Bedroom',          category: 'Interior', image: '/images/Simplex _Bedroom.jpg',                cols: 1, rows: 1 },
  { title: 'Balcony',                  category: 'Exterior', image: '/images/Balcony.png',                         cols: 1, rows: 1 },
  { title: 'Powder Room',              category: 'Interior', image: '/images/Powder Room.jpg',                     cols: 1, rows: 1 },
  { title: 'Fullerton Bath',           category: 'Interior', image: '/images/Fullerton-Bath.jpg',                  cols: 1, rows: 1 },
  { title: 'Simplex Hallway',          category: 'Interior', image: '/images/simplex-hallway.jpg',                 cols: 1, rows: 1 },
  { title: 'Simplex Kitchen',          category: 'Interior', image: '/images/simplex kitchen.jpg',                 cols: 1, rows: 1 },
]

export default function Portfolio() {
  const [active, setActive] = useState<Category>('All')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  const openLightbox = (i: number) => setLightbox(i)
  const closeLightbox = () => setLightbox(null)
  const prev = useCallback(() => setLightbox((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null)), [filtered.length])
  const next = useCallback(() => setLightbox((i) => (i !== null ? (i + 1) % filtered.length : null)), [filtered.length])

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [lightbox, prev, next])

  // Lock scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [lightbox])

  return (
    <section id="portfolio" className="py-24 px-6 bg-deeper">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
              Our Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 leading-tight text-ink">
              Featured Projects
            </h2>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? 'bg-ink text-white'
                    : 'border border-ink/15 text-ink/50 hover:border-gold hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-3">
          {filtered.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              className="group relative overflow-hidden rounded-xl bg-surface cursor-zoom-in"
              style={{
                gridColumn: `span ${project.cols}`,
                gridRow: `span ${project.rows}`,
              }}
              onClick={() => openLightbox(i)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 768px) 50vw, 33vw"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-gold text-[10px] font-semibold tracking-[0.2em] uppercase mb-0.5">
                  {project.category}
                </p>
                <h3 className="text-white font-display text-base font-bold leading-tight">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X size={18} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Image */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].image}
              alt={filtered[lightbox].title}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 md:right-8 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <ChevronRight size={22} />
          </button>

          {/* Caption */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-gold text-xs tracking-widest uppercase mb-1">
              {filtered[lightbox].category}
            </p>
            <p className="text-white font-display text-lg font-semibold">
              {filtered[lightbox].title}
            </p>
            <p className="text-white/30 text-xs mt-1">
              {lightbox + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

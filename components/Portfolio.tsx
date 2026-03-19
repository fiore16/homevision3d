'use client'

import { useState } from 'react'
import Image from 'next/image'

const categories = ['All', 'Interior', 'Exterior', '360° Tours'] as const
type Category = (typeof categories)[number]

const projects: {
  title: string
  category: Exclude<Category, 'All'>
  image: string
  span?: 'wide'
}[] = [
  {
    title: 'The Grove',
    category: 'Exterior',
    image: 'https://placehold.co/1200x800/141414/C8A96E?text=The+Grove+%E2%80%94+Exterior',
    span: 'wide',
  },
  {
    title: 'Modern Kitchen',
    category: 'Interior',
    image: 'https://placehold.co/800x800/141414/C8A96E?text=Kitchen+Render',
  },
  {
    title: 'Master Bathroom',
    category: 'Interior',
    image: 'https://placehold.co/800x800/141414/C8A96E?text=Master+Bath',
  },
  {
    title: 'Springfield',
    category: 'Exterior',
    image: 'https://placehold.co/800x800/141414/C8A96E?text=Springfield+%E2%80%94+Exterior',
  },
  {
    title: 'Dining Room',
    category: 'Interior',
    image: 'https://placehold.co/800x800/141414/C8A96E?text=Dining+Room+Render',
  },
  {
    title: 'Sister Bay',
    category: 'Exterior',
    image: 'https://placehold.co/1200x800/141414/C8A96E?text=Sister+Bay+%E2%80%94+Exterior',
    span: 'wide',
  },
]

export default function Portfolio() {
  const [active, setActive] = useState<Category>('All')

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <section id="portfolio" className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
              Our Work
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 leading-tight">
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
                    ? 'bg-gold text-black'
                    : 'border border-white/10 text-white/50 hover:border-gold/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <div
              key={`${project.title}-${i}`}
              className={`group relative overflow-hidden rounded-2xl bg-deeper cursor-pointer ${
                project.span === 'wide' ? 'sm:col-span-2' : ''
              }`}
              style={{ aspectRatio: project.span === 'wide' ? '16/9' : '4/3' }}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-gold text-xs font-semibold tracking-[0.2em] uppercase">
                  {project.category}
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-1">
                  {project.title}
                </h3>
              </div>

              {/* Corner badge */}
              <div className="absolute top-4 right-4 border border-white/20 rounded-lg px-2.5 py-1 text-xs text-white/60 backdrop-blur-sm bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                View
              </div>
            </div>
          ))}
        </div>

        {/* Note for owner */}
        <p className="text-center text-white/20 text-sm mt-10">
          Replace placeholder images with your actual renders in{' '}
          <code className="text-gold/40">components/Portfolio.tsx</code>
        </p>
      </div>
    </section>
  )
}

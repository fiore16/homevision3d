'use client'

import { useState } from 'react'
import Image from 'next/image'

const categories = ['All', 'Interior', 'Exterior'] as const
type Category = (typeof categories)[number]

const projects: {
  title: string
  category: Exclude<Category, 'All'>
  image: string
  span?: 'wide' | 'tall'
}[] = [
  {
    title: 'Pool Estate',
    category: 'Exterior',
    image: '/images/Pool-Exterior.jpg',
    span: 'wide',
  },
  {
    title: 'Grand Exterior',
    category: 'Exterior',
    image: '/images/Grand-Exterior.jpg',
  },
  {
    title: 'The Grove',
    category: 'Exterior',
    image: '/images/the-grove.jpg',
  },
  {
    title: 'Kitchen',
    category: 'Interior',
    image: '/images/Kitchen.jpg',
    span: 'wide',
  },
  {
    title: 'Master Bath',
    category: 'Interior',
    image: '/images/Master Bath Tub_Shower.jpg',
  },
  {
    title: 'Hiergeist Night',
    category: 'Exterior',
    image: '/images/Hiergeist-night.jpg',
  },
  {
    title: 'Dining Area',
    category: 'Interior',
    image: '/images/dining area.jpg',
  },
  {
    title: 'Denver Night',
    category: 'Exterior',
    image: '/images/Denver-night.jpg',
  },
  {
    title: '2026 St. Jude Dream Home',
    category: 'Exterior',
    image: '/images/2026 St. Jude Dream Home.jpg',
    span: 'wide',
  },
  {
    title: 'Duplex Kitchen',
    category: 'Interior',
    image: '/images/Duplex_Kitchen.jpg',
  },
  {
    title: 'Game Room & Wet Bar',
    category: 'Interior',
    image: '/images/Game Room_Wet Bar.jpg',
  },
  {
    title: 'Rooftop',
    category: 'Exterior',
    image: '/images/Rooftop (1).jpg',
  },
  {
    title: 'Simplex Living Room',
    category: 'Interior',
    image: '/images/Simplex_living.jpg',
    span: 'wide',
  },
  {
    title: 'Master Bath Vanity',
    category: 'Interior',
    image: '/images/Master Bath Vanity.jpg',
  },
  {
    title: 'Quadplex',
    category: 'Exterior',
    image: '/images/Quadplex.jpg',
  },
  {
    title: 'Simplex Bedroom',
    category: 'Interior',
    image: '/images/Simplex _Bedroom.jpg',
  },
  {
    title: 'Balcony',
    category: 'Exterior',
    image: '/images/Balcony.png',
  },
  {
    title: 'Powder Room',
    category: 'Interior',
    image: '/images/Powder Room.jpg',
  },
  {
    title: '2026 New Orleans Dream Home',
    category: 'Exterior',
    image: '/images/2026 New Orleans Dream Home.jpg',
    span: 'wide',
  },
  {
    title: 'Simplex Hallway',
    category: 'Interior',
    image: '/images/simplex-hallway.jpg',
  },
  {
    title: 'Fullerton Bath',
    category: 'Interior',
    image: '/images/Fullerton-Bath.jpg',
  },
  {
    title: 'Simplex Kitchen',
    category: 'Interior',
    image: '/images/simplex kitchen.jpg',
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
      </div>
    </section>
  )
}

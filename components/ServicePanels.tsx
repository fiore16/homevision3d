import Image from 'next/image'

const panels = [
  { label: 'Exteriors',      image: '/images/Grand-Exterior.jpg',         href: '#portfolio' },
  { label: 'Interiors',      image: '/images/Simplex_living.jpg',          href: '#portfolio' },
  { label: 'Virtual Tours',  image: '/images/Kitchen.jpg',                 href: '#contact'   },
  { label: 'Night Renders',  image: '/images/Hiergeist-night.jpg',         href: '#portfolio' },
]

export default function ServicePanels() {
  return (
    <section id="services" className="grid grid-cols-2 grid-rows-2" style={{ height: '200vh' }}>
      {panels.map(({ label, image, href }) => (
        <a
          key={label}
          href={href}
          className="group relative overflow-hidden block"
        >
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="50vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors duration-500" />

          {/* Label — top left */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8">
            <span className="text-white font-sans font-semibold text-sm md:text-base tracking-[0.15em] uppercase">
              {label}
            </span>
          </div>

          {/* Arrow — bottom right */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </div>
        </a>
      ))}
    </section>
  )
}

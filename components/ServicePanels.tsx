import Image from 'next/image'

const panels = [
  {
    label: 'Exteriors',
    desc: 'Curb appeal that sells before the first shovel hits the ground.',
    image: '/images/Grand-Exterior.jpg',
    href: '#portfolio',
  },
  {
    label: 'Interiors',
    desc: 'Every finish, fixture, and feeling — rendered to perfection.',
    image: '/images/Simplex_living.jpg',
    href: '#portfolio',
  },
  {
    label: 'Night Renders',
    desc: 'Dramatic lighting that makes your project unforgettable.',
    image: '/images/Hiergeist-night.jpg',
    href: '#portfolio',
  },
  {
    label: 'Virtual Tours',
    desc: 'Let clients walk through their future home from anywhere in the world.',
    image: '/images/Kitchen.jpg',
    href: '#contact',
  },
]

export default function ServicePanels() {
  return (
    <section id="services" className="grid grid-cols-2 grid-rows-2" style={{ height: '200vh' }}>
      {panels.map(({ label, desc, image, href }) => (
        <a
          key={label}
          href={href}
          className="group relative overflow-hidden block"
        >
          {/* Image */}
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
            sizes="50vw"
          />

          {/* Default overlay */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-500" />

          {/* Label — always visible top-left */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8">
            <span className="text-white font-sans font-bold text-sm md:text-base tracking-[0.2em] uppercase">
              {label}
            </span>
          </div>

          {/* Description — slides up on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
            <p className="text-white/80 text-sm leading-relaxed mb-3">{desc}</p>
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">
              View Gallery →
            </span>
          </div>

          {/* Corner arrow */}
          <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 w-10 h-10 rounded-full border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <path d="M7 17L17 7M7 7h10v10"/>
            </svg>
          </div>
        </a>
      ))}
    </section>
  )
}

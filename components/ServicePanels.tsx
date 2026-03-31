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
    href: '/tours',
  },
]

export default function ServicePanels() {
  return (
    <section id="services" className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 md:h-[200vh]">
      {panels.map(({ label, desc, image, href }) => (
        <a key={label} href={href} className="group relative overflow-hidden block h-[60vh] md:h-auto cursor-pointer">

          {/* Image */}
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000 ease-out"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10 group-hover:from-black/85 group-hover:via-black/45 transition-all duration-500" />

          {/* Centered title — always visible */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 pointer-events-none">
            <h2
              className="font-display font-bold text-white leading-tight tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] group-hover:scale-105 transition-transform duration-500 ease-out"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              {label}
            </h2>
            <div className="mt-3 h-px bg-[#00C864] opacity-70 w-8 group-hover:w-14 group-hover:opacity-100 transition-all duration-500" />
          </div>

          {/* Description + CTA — slides up on hover */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out text-center">
            <p className="text-white/75 text-sm md:text-base leading-relaxed mb-4 max-w-xs mx-auto">{desc}</p>
            <span className="inline-flex items-center gap-2 text-[#00C864] text-xs tracking-[0.25em] uppercase font-semibold border border-[#00C864]/40 px-4 py-2 rounded-full group-hover:bg-[#00C864]/10 transition-colors duration-300">
              View Gallery →
            </span>
          </div>

        </a>
      ))}
    </section>
  )
}

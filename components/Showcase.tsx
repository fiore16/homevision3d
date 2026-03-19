import Image from 'next/image'

const panels = [
  { image: '/images/Hiergeist-night.jpg',          label: 'Night Exterior' },
  { image: '/images/Master Bath Tub_Shower.jpg',   label: 'Master Bath' },
  { image: '/images/2026 New Orleans Dream Home.jpg', label: 'Dream Home' },
  { image: '/images/Game Room_Wet Bar.jpg',         label: 'Interior' },
]

export default function Showcase() {
  return (
    <section className="flex h-[50vh] md:h-[60vh]">
      {panels.map(({ image, label }) => (
        <div
          key={label}
          className="group relative flex-1 overflow-hidden cursor-pointer"
          style={{ transition: 'flex 0.5s cubic-bezier(0.4,0,0.2,1)' }}
          onMouseEnter={e => (e.currentTarget.style.flex = '2')}
          onMouseLeave={e => (e.currentTarget.style.flex = '1')}
        >
          <Image
            src={image}
            alt={label}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            sizes="25vw"
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
          <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="text-white/60 text-[10px] tracking-[0.25em] uppercase">{label}</span>
          </div>
        </div>
      ))}
    </section>
  )
}

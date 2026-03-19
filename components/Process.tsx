import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Share Your Plans',
    body: 'Send us your blueprints, drawings, or inspiration. We work with whatever you have — from napkin sketches to full CAD files.',
    image: '/images/Quadplex.jpg',
  },
  {
    number: '02',
    title: 'We Build the Vision',
    body: 'Our team crafts your project in 3D with obsessive attention to detail — materials, lighting, landscaping, and atmosphere.',
    image: '/images/Game Room_Wet Bar.jpg',
  },
  {
    number: '03',
    title: 'Receive Your Renders',
    body: 'High-resolution images and tours delivered within days, ready to impress investors, buyers, and partners.',
    image: '/images/2026 St. Jude Dream Home.jpg',
  },
]

export default function Process() {
  return (
    <section id="process" className="bg-[#F5F4F0]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-16 text-center">
        <p className="text-gold text-xs tracking-[0.3em] uppercase font-semibold mb-4">How It Works</p>
        <h2 className="font-display font-bold text-[#111111] leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
          Simple Process.<br />Stunning Results.
        </h2>
      </div>

      {/* Alternating rows */}
      {steps.map(({ number, title, body, image }, i) => (
        <div
          key={number}
          className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          style={{ minHeight: '70vh' }}
        >
          {/* Image — 60% */}
          <div className="relative md:w-3/5 h-72 md:h-auto overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="60vw"
            />
          </div>

          {/* Text — 40% */}
          <div className={`md:w-2/5 flex flex-col justify-center px-10 md:px-16 py-16 bg-[#F5F4F0] border-t md:border-t-0 ${
            i % 2 === 0 ? 'md:border-l' : 'md:border-r'
          } border-[#111111]/8`}>
            <span className="font-display text-7xl font-black text-[#111111]/5 leading-none mb-4 select-none">
              {number}
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[#111111] mb-4 -mt-8">
              {title}
            </h3>
            <p className="text-[#111111]/50 text-base leading-relaxed mb-8">{body}</p>
            {i === steps.length - 1 && (
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold text-black font-semibold px-6 py-3 rounded-full text-sm hover:bg-gold-light transition-colors self-start"
              >
                Get Started →
              </a>
            )}
          </div>
        </div>
      ))}
    </section>
  )
}

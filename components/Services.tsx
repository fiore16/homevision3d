import Image from 'next/image'

const services = [
  {
    title: 'Interior Renders',
    desc: 'Photorealistic visualizations of furniture, lighting, and finishes — before a single wall goes up.',
    features: ['Professional lighting & shadows', 'Multiple design variations', 'Virtual staging', 'High-resolution output'],
    image: '/images/Simplex_living.jpg',
  },
  {
    title: 'Exterior Renders',
    featured: true,
    desc: 'Architectural visualizations highlighting every detail — from curb appeal to landscaping in realistic context.',
    features: ['Day & evening lighting', 'Accurate architectural detail', 'Landscape integration', 'Aerial & street-level views'],
    image: '/images/Grand-Exterior.jpg',
  },
  {
    title: '360° Virtual Tours',
    desc: 'Interactive walkthroughs that let clients explore every room remotely — on any device, from anywhere.',
    features: ['Mobile & desktop', 'Interactive hotspots', 'Seamless navigation', 'Shareable links'],
    image: '/images/Kitchen.jpg',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-[#ECEAE4]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-xl mb-16">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
            What We Offer
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 mb-4 leading-tight">
            Three Ways to
            <br />
            Impress Your Clients
          </h2>
          <p className="text-white/50 leading-relaxed">
            From intimate interiors to sweeping exteriors — every project brought to life before construction begins.
          </p>
        </div>

        {/* Cards — image-forward */}
        <div className="grid md:grid-cols-3 gap-5">
          {services.map(({ title, desc, features, image, featured }, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover:-translate-y-1 ${
                featured
                  ? 'border-gold/40 shadow-[0_0_50px_rgba(200,169,110,0.10)]'
                  : 'border-white/5 hover:border-gold/20'
              }`}
            >
              {/* Render image — top half */}
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60" />

                {featured && (
                  <div className="absolute top-4 left-4 bg-gold text-black text-[10px] font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                    Most Popular
                  </div>
                )}
              </div>

              {/* Text — bottom half */}
              <div className="bg-[#F5F4F0] p-7">
                <h3 className="font-display text-xl font-bold mb-2">{title}</h3>
                <p className="text-[#111111]/45 text-sm leading-relaxed mb-5">{desc}</p>

                <ul className="space-y-2 mb-6">
                  {features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-[#111111]/55">
                      <span className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/contact"
                  className={`text-sm font-semibold transition-colors ${
                    featured ? 'text-gold hover:text-gold-light' : 'text-white/40 hover:text-gold'
                  }`}
                >
                  Request a Quote →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

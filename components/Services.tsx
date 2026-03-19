import { Camera, Building2, Globe } from 'lucide-react'

const services = [
  {
    Icon: Camera,
    title: 'Interior Renders',
    desc: 'Photorealistic visualizations showcasing furniture layouts, lighting, and finishes — before a single wall goes up.',
    features: [
      'Professional lighting & shadows',
      'Multiple design variations',
      'Virtual staging capabilities',
      'High-resolution output',
    ],
  },
  {
    Icon: Building2,
    title: 'Exterior Renders',
    featured: true,
    desc: 'Architectural visualizations highlighting building details and landscaping with realistic environmental context.',
    features: [
      'Day & evening lighting options',
      'Accurate architectural detail',
      'Landscape & context integration',
      'Aerial & street-level views',
    ],
  },
  {
    Icon: Globe,
    title: '360° Virtual Tours',
    desc: 'Interactive walkthroughs that let clients explore every room remotely — on any device, from anywhere in the world.',
    features: [
      'Mobile & desktop compatible',
      'Interactive hotspots',
      'Seamless room navigation',
      'Shareable & embeddable links',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
            What We Offer
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
            Three Ways to
            <br />
            Impress Your Clients
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            From intimate interiors to sweeping exteriors and immersive
            virtual tours — we bring every project to life before
            construction begins.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {services.map(({ Icon, title, desc, features, featured }, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                featured
                  ? 'bg-surface border-gold/30 shadow-[0_0_40px_rgba(200,169,110,0.08)]'
                  : 'bg-surface border-white/5 hover:border-gold/20'
              }`}
            >
              {featured && (
                <div className="absolute top-0 left-8 -translate-y-1/2 bg-gold text-black text-xs font-bold px-3 py-1 rounded-full tracking-widest uppercase">
                  Most Popular
                </div>
              )}

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-7 transition-colors ${
                  featured ? 'bg-gold/15' : 'bg-white/5 group-hover:bg-gold/10'
                }`}
              >
                <Icon className="text-gold" size={22} />
              </div>

              <h3 className="font-display text-2xl font-bold mb-3">{title}</h3>
              <p className="text-white/45 text-sm leading-relaxed mb-7">{desc}</p>

              <ul className="space-y-2.5">
                {features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm text-white/55">
                    <span className="mt-1.5 w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/5">
                <a
                  href="#contact"
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

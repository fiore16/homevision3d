const testimonials = [
  {
    quote:
      "HomeVision3D's exceptional rendering services bring our projects to life, making it so much easier to visualize and present to clients.",
    name: 'Payton S.',
    role: 'Customer Relations',
    initial: 'P',
  },
  {
    quote:
      "A visual product that enhances and elevates the architectural design and speaks directly to the client's vision. Truly impressive work.",
    name: 'Dan H.',
    role: 'Owner',
    initial: 'D',
  },
  {
    quote:
      "Second to none. Easily accessible, accommodating, professional, and quick. I can't recommend HomeVision3D enough.",
    name: 'Jason W.',
    role: 'Director of Operations',
    initial: 'J',
  },
  {
    quote:
      'They delivered exceptional photorealistic renderings on incredibly tight deadlines. An invaluable partner for our projects.',
    name: 'Kuan C.',
    role: 'Owner',
    initial: 'K',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
            Client Stories
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 leading-tight">
            Trusted by Builders,
            <br />
            Architects & Developers
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-deeper border border-white/5 rounded-2xl p-8 hover:border-gold/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <span key={j} className="text-gold text-sm">
                    ★
                  </span>
                ))}
              </div>

              {/* Quote mark */}
              <div className="font-display text-5xl text-gold/20 leading-none mb-4 select-none">
                "
              </div>

              {/* Quote */}
              <p className="text-white/70 text-base leading-relaxed mb-8 italic">
                {t.quote}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-gold font-bold text-sm">
                    {t.initial}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-white/35 text-xs mt-0.5">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

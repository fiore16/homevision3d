const steps = [
  {
    number: '01',
    title: 'Share Your Vision',
    desc: 'Submit your project details — blueprints, reference images, and design preferences — through our simple online form or by phone.',
  },
  {
    number: '02',
    title: 'Consultation & Quote',
    desc: "We review your project and schedule a quick consultation. You'll receive a detailed, no-obligation quote within 24 hours.",
  },
  {
    number: '03',
    title: 'Delivery & Revisions',
    desc: "Receive high-resolution renders or a full 360° tour, ready to share. Revisions are included until you're completely satisfied.",
  },
]

export default function Process() {
  return (
    <section id="process" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
            How It Works
          </span>
          <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
            Simple. Fast. Flawless.
          </h2>
          <p className="text-white/50 text-lg leading-relaxed">
            From your first message to final delivery — our process is
            designed to be effortless for you.
          </p>
        </div>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Connector line */}
          <div className="hidden md:block absolute top-10 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center md:items-start md:text-left">
              {/* Number bubble */}
              <div className="relative flex items-center justify-center w-20 h-20 mb-8">
                <div className="absolute inset-0 rounded-full border border-gold/20 bg-surface" />
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-gold/10 to-transparent" />
                <span className="relative font-display text-2xl font-bold text-gold">
                  {step.number}
                </span>
              </div>

              <h3 className="font-display text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/45 leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA under process */}
        <div className="text-center mt-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-surface border border-gold/20 text-gold hover:bg-gold hover:text-black font-semibold px-8 py-4 rounded-lg transition-all duration-200"
          >
            Start Your Project →
          </a>
        </div>
      </div>
    </section>
  )
}

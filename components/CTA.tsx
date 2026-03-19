import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-32 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto relative">
        {/* Background card */}
        <div className="relative rounded-3xl border border-gold/15 bg-surface overflow-hidden px-10 py-20 text-center">
          {/* Inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-transparent to-gold/[0.03] pointer-events-none" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
            Ready to Get Started?
          </span>

          <h2 className="font-display text-4xl md:text-6xl font-bold mt-5 mb-6 leading-tight">
            Transform How You
            <br />
            <span className="text-gradient-gold">Sell Your Projects</span>
          </h2>

          <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join the builders and developers who close deals faster with
            photorealistic renders. Get a custom quote within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-gold text-black font-semibold px-8 py-4 rounded-lg hover:bg-gold-light transition-all duration-200 text-base"
            >
              Get Your Free Quote
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="tel:5134319571"
              className="text-white/50 hover:text-white transition-colors text-sm"
            >
              Or call (513) 431-9571
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

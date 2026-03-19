import Image from 'next/image'

export default function Statement() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/Denver-night.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <p className="text-white/30 text-xs tracking-[0.4em] uppercase font-sans mb-8">
          Our Philosophy
        </p>
        <h2
          className="font-display font-bold italic text-white leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
        >
          "Before the foundation<br />
          <span className="text-gradient-gold">is poured.</span>"
        </h2>
        <p className="text-white/45 text-lg md:text-xl mt-10 leading-relaxed max-w-2xl mx-auto font-sans">
          Every great build starts with a vision. We make that vision undeniable —
          to your clients, your investors, and your team.
        </p>

        {/* Divider line */}
        <div className="flex items-center justify-center gap-6 mt-14">
          <div className="h-px w-24 bg-gold/30" />
          <a
            href="#portfolio"
            className="text-gold text-sm tracking-[0.2em] uppercase font-semibold hover:text-gold-light transition-colors"
          >
            See the Work
          </a>
          <div className="h-px w-24 bg-gold/30" />
        </div>
      </div>
    </section>
  )
}

import Image from 'next/image'

export default function About() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '60vh' }}>
      {/* Background render */}
      <div className="absolute inset-0">
        <Image
          src="/images/Balcony.png"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 flex flex-col md:flex-row items-center gap-14">
        {/* Headshot */}
        <div className="flex-shrink-0 w-52 h-64 md:w-64 md:h-80 rounded-2xl overflow-hidden border border-white/10 relative">
          <Image src="/matteo face.jpg" alt="Matteo Fiore" fill className="object-cover" />
        </div>

        {/* Bio */}
        <div className="max-w-xl">
          <p className="text-white/40 text-xs font-semibold tracking-[0.3em] uppercase mb-4">Meet the Owner</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-6">Matteo Fiore</h2>
          <p className="text-white/70 text-lg leading-relaxed mb-4">
            At HomeVision3D, I believe that every great build starts with a great vision. I created this company
            to give builders, architects, and developers the visual tools they need to communicate their ideas
            with clarity and confidence.
          </p>
          <p className="text-white/50 text-base leading-relaxed mb-8">
            From intimate interiors to large-scale exteriors — every render we produce is crafted to be
            photorealistic, accurate, and built to close deals.
          </p>
          <p className="text-white font-display text-xl italic">— Matteo</p>
        </div>
      </div>
    </section>
  )
}

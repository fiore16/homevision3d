import Image from 'next/image'

const testimonials = [
  {
    quote: "HomeVision3D's exceptional rendering services bring our projects to life, making it so much easier to visualize and present to clients.",
    name: 'Payton S.',
    role: 'Customer Relations',
  },
  {
    quote: "A visual product that enhances and elevates the architectural design and speaks directly to the client's vision. Truly impressive work.",
    name: 'Dan H.',
    role: 'Owner',
  },
  {
    quote: "Second to none. Easily accessible, accommodating, professional, and quick. I can't recommend HomeVision3D enough.",
    name: 'Jason W.',
    role: 'Director of Operations',
  },
  {
    quote: 'They delivered exceptional photorealistic renderings on incredibly tight deadlines. An invaluable partner for our projects.',
    name: 'Kuan C.',
    role: 'Owner',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-28 px-6 overflow-hidden">
      {/* Background render */}
      <div className="absolute inset-0">
        <Image
          src="/images/Master Bath Tub_Shower.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-14">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="text-gold text-2xl">★</span>
          ))}
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <div className="text-gold/40 font-display text-4xl leading-none mb-3 select-none">"</div>
              <p className="text-white/80 text-sm leading-relaxed mb-6 italic">{t.quote}</p>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-white/40 text-xs mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

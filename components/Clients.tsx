import Image from 'next/image'

const clients = [
  'Daley Design + Build',
  'St. Jude Dream Home',
  'New Orleans Dream Home',
  'Hiergeist Homes',
  'Rockford Homes',
  'Denver Build Group',
]

export default function Clients() {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      {/* Background render */}
      <div className="absolute inset-0">
        <Image
          src="/images/Rooftop (1).jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-white/50 text-xs font-semibold tracking-[0.35em] uppercase mb-12">
          Trusted By Industry Leaders
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-8">
          {clients.map((name) => (
            <div key={name} className="flex items-center justify-center">
              <span className="text-white/60 font-sans font-semibold text-sm md:text-base tracking-wide text-center hover:text-white transition-colors duration-200">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

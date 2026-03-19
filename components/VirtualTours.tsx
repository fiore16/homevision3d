'use client'

export default function VirtualTours() {
  const tours = [
    {
      url: 'https://storage.net-fs.com/hosting/8038806/17/',
      label: 'Tour 01',
      title: 'Exterior Walkthrough',
    },
    {
      url: 'https://storage.net-fs.com/hosting/8038806/10/',
      label: 'Tour 02',
      title: 'Interior Experience',
    },
  ]

  return (
    <section id="virtual-tours" className="bg-white py-24 px-6">
      {/* Section header */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-5">
          <div className="w-8 h-px bg-black/15" />
          <span className="text-[10px] tracking-[0.45em] uppercase font-sans text-black/40">Immersive</span>
          <div className="w-8 h-px bg-black/15" />
        </div>
        <h2
          className="font-display font-bold text-[#111111] leading-tight tracking-tight"
          style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
        >
          Virtual{' '}
          <span className="italic" style={{ color: '#00C864' }}>Tours</span>
        </h2>
        <p className="mt-4 text-black/50 font-sans max-w-xl mx-auto" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.1rem)' }}>
          Step inside before construction begins. Explore every angle in full 360°.
        </p>
      </div>

      {/* Tour embeds */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        {tours.map((tour) => (
          <div key={tour.url} className="group flex flex-col">
            {/* Label bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-black/[0.04] border border-black/10 rounded-t-xl">
              <span className="text-[10px] tracking-[0.4em] uppercase font-sans text-black/40">{tour.label}</span>
              <span className="text-sm font-sans font-medium text-[#111111]">{tour.title}</span>
              <a
                href={tour.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] tracking-[0.3em] uppercase font-sans transition-colors"
                style={{ color: '#00C864' }}
              >
                Open ↗
              </a>
            </div>

            {/* iframe */}
            <div className="relative w-full overflow-hidden rounded-b-xl border border-t-0 border-black/10"
              style={{ paddingTop: '60%' }}>
              <iframe
                src={tour.url}
                title={tour.title}
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const stats = [
  { number: '100+', label: 'Projects Delivered' },
  { number: '24h', label: 'Quote Turnaround' },
  { number: '4.9★', label: 'Average Rating' },
  { number: '100%', label: 'Revision Guarantee' },
]

export default function Stats() {
  return (
    <section className="bg-surface border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-white/5">
          {stats.map((stat, i) => (
            <div key={i} className="text-center md:px-8">
              <div className="font-display text-4xl md:text-5xl font-bold text-gold mb-2">
                {stat.number}
              </div>
              <div className="text-white/40 text-sm tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

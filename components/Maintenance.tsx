export default function Maintenance() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">

      {/* Subtle emerald glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl animate-pulse-slow pointer-events-none" style={{ backgroundColor: 'rgba(0,200,100,0.07)' }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-2xl mx-auto animate-fade-up">

        {/* Logo / Brand */}
        <div className="mb-6 flex items-center gap-3">
          <div className="w-px h-8" style={{ backgroundColor: 'rgba(0,200,100,0.6)' }} />
          <span className="text-xs font-sans font-semibold tracking-[0.35em] uppercase" style={{ color: '#00C864' }}>
            HomeVision3D
          </span>
          <div className="w-px h-8" style={{ backgroundColor: 'rgba(0,200,100,0.6)' }} />
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 text-white">
          Something{' '}
          <span style={{
            background: 'linear-gradient(135deg, #00C864 0%, #7FFFC4 50%, #00C864 100%)',
            backgroundSize: '200% auto',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            animation: 'shimmer 3s linear infinite',
          }}>
            Remarkable
          </span>
          <br />
          Is Coming
        </h1>

        {/* Sub-copy */}
        <p className="text-white/60 text-lg md:text-xl font-sans leading-relaxed mb-10 max-w-lg">
          We're crafting a brand-new experience for you. Our website is currently
          under construction — check back soon.
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-10">
          <div className="h-px w-16" style={{ backgroundColor: 'rgba(0,200,100,0.3)' }} />
          <span className="text-xs tracking-widest uppercase font-sans" style={{ color: 'rgba(0,200,100,0.6)' }}>Stay Connected</span>
          <div className="h-px w-16" style={{ backgroundColor: 'rgba(0,200,100,0.3)' }} />
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row gap-4">

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/company/homevision-3d"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-7 py-3.5 rounded-sm transition-all duration-300"
            style={{ border: '1px solid rgba(0,200,100,0.35)' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = '#00C864'
              ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,200,100,0.08)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,200,100,0.35)'
              ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
            }}
          >
            <svg className="w-5 h-5 transition-colors" style={{ color: '#00C864' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-white/80 group-hover:text-white text-sm font-sans font-medium tracking-wide transition-colors">
              LinkedIn
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/official_homevision3d/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-7 py-3.5 rounded-sm transition-all duration-300"
            style={{ border: '1px solid rgba(0,200,100,0.35)' }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.borderColor = '#00C864'
              ;(e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(0,200,100,0.08)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.borderColor = 'rgba(0,200,100,0.35)'
              ;(e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'
            }}
          >
            <svg className="w-5 h-5 transition-colors" style={{ color: '#00C864' }} fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
            <span className="text-white/80 group-hover:text-white text-sm font-sans font-medium tracking-wide transition-colors">
              Instagram
            </span>
          </a>

        </div>

        {/* Bottom note */}
        <p className="mt-12 text-white/25 text-xs tracking-widest uppercase font-sans">
          © {new Date().getFullYear()} HomeVision3D · All Rights Reserved
        </p>

      </div>
    </div>
  )
}

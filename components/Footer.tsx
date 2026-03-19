import { Instagram, Linkedin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-surface border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-14">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-display font-bold mb-4">
              HomeVision<span className="text-gold">3D</span>
            </div>
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
              Visualize the Future of Your Homes — Before the Foundation.
              Professional photorealistic 3D rendering for builders,
              architects, and developers.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://instagram.com/official_homevision3d/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-gold/30 transition-all duration-200"
              >
                <Instagram size={15} />
              </a>
              <a
                href="https://linkedin.com/company/homevision-3d"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 border border-white/10 rounded-lg flex items-center justify-center text-white/40 hover:text-white hover:border-gold/30 transition-all duration-200"
              >
                <Linkedin size={15} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white/20 uppercase tracking-[0.2em] text-xs mb-5">
              Services
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                ['Interior Renders', '#services'],
                ['Exterior Renders', '#services'],
                ['360° Virtual Tours', '#services'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-white/45 hover:text-white transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white/20 uppercase tracking-[0.2em] text-xs mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:5134319571"
                  className="flex items-center gap-2 text-white/45 hover:text-white transition-colors"
                >
                  <Phone size={13} className="text-gold/60" />
                  (513) 431-9571
                </a>
              </li>
              <li>
                <a
                  href="mailto:Matteo@homevision3D.com"
                  className="flex items-center gap-2 text-white/45 hover:text-white transition-colors"
                >
                  <Mail size={13} className="text-gold/60" />
                  Matteo@homevision3D.com
                </a>
              </li>
              <li className="text-white/30 text-xs mt-4 leading-relaxed">
                Mon – Fri, 9 AM – 5 PM EST
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-white/25 text-sm">
            © {year} HomeVision3D. All rights reserved.
          </p>
          <a
            href="#contact"
            className="text-sm text-gold/60 hover:text-gold transition-colors"
          >
            Request a Quote →
          </a>
        </div>
      </div>
    </footer>
  )
}

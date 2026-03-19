'use client'

import { useState } from 'react'
import { Phone, Mail, Clock, Send } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const res = await fetch(
      `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID ?? 'YOUR_FORM_ID'}`,
      { method: 'POST', body: data, headers: { Accept: 'application/json' } }
    )
    if (res.ok) setSubmitted(true)
  }

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left — info */}
          <div>
            <span className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
              Get In Touch
            </span>
            <h2 className="font-display text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight text-[#111111]">
              Request a
              <br />
              Free Quote
            </h2>
            <p className="text-black/50 text-lg leading-relaxed mb-14">
              Share your project details and we&apos;ll respond with a
              custom quote within 24 hours. No commitment required.
            </p>

            <div className="space-y-6">
              <a
                href="tel:5134319571"
                className="group flex items-center gap-5 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 bg-[#ECEAE4] rounded-xl border border-black/8 flex items-center justify-center flex-shrink-0 group-hover:border-gold/30 transition-colors">
                  <Phone className="text-gold" size={18} />
                </div>
                <div>
                  <div className="text-black/40 text-xs uppercase tracking-widest mb-0.5">
                    Phone
                  </div>
                  <div className="text-[#111111] font-medium">(513) 431-9571</div>
                </div>
              </a>

              <a
                href="mailto:Matteo@homevision3D.com"
                className="group flex items-center gap-5 hover:opacity-80 transition-opacity"
              >
                <div className="w-12 h-12 bg-[#ECEAE4] rounded-xl border border-black/8 flex items-center justify-center flex-shrink-0 group-hover:border-gold/30 transition-colors">
                  <Mail className="text-gold" size={18} />
                </div>
                <div>
                  <div className="text-black/40 text-xs uppercase tracking-widest mb-0.5">
                    Email
                  </div>
                  <div className="text-[#111111] font-medium">
                    Matteo@homevision3D.com
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div className="w-12 h-12 bg-[#ECEAE4] rounded-xl border border-black/8 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-gold" size={18} />
                </div>
                <div>
                  <div className="text-black/40 text-xs uppercase tracking-widest mb-0.5">
                    Hours
                  </div>
                  <div className="text-[#111111] font-medium">
                    Mon – Fri, 9 AM – 5 PM
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-[#ECEAE4] border border-white/5 rounded-2xl p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-gold/15 flex items-center justify-center mx-auto mb-6">
                  <Send className="text-gold" size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold mb-3">
                  Message Received!
                </h3>
                <p className="text-white/50">
                  Thanks for reaching out. We&apos;ll send you a quote within
                  24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-[#111111]/60 uppercase tracking-widest mb-2">
                      Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      placeholder="Your name"
                      className="w-full bg-[#F5F4F0] border border-white/8 rounded-lg px-4 py-3 text-[#111111] text-sm placeholder-black/30 focus:border-gold/40 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-[#111111]/60 uppercase tracking-widest mb-2">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@email.com"
                      className="w-full bg-[#F5F4F0] border border-white/8 rounded-lg px-4 py-3 text-[#111111] text-sm placeholder-black/30 focus:border-gold/40 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-[#111111]/60 uppercase tracking-widest mb-2">
                    Phone (optional)
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    className="w-full bg-[#F5F4F0] border border-white/8 rounded-lg px-4 py-3 text-[#111111] text-sm placeholder-black/30 focus:border-gold/40 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs text-[#111111]/60 uppercase tracking-widest mb-2">
                    Service Needed
                  </label>
                  <select
                    name="service"
                    required
                    className="w-full bg-[#F5F4F0] border border-black/8 rounded-lg px-4 py-3 text-[#111111] text-sm focus:border-gold/40 focus:outline-none transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a service
                    </option>
                    <option value="interior">Interior Render</option>
                    <option value="exterior">Exterior Render</option>
                    <option value="360">360° Virtual Tour</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs text-[#111111]/60 uppercase tracking-widest mb-2">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your project — size, style, timeline, references..."
                    className="w-full bg-[#F5F4F0] border border-white/8 rounded-lg px-4 py-3 text-[#111111] text-sm placeholder-black/30 focus:border-gold/40 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold text-black font-semibold py-4 rounded-lg hover:bg-gold-light transition-colors text-base mt-2"
                >
                  Send Request — Get Quote in 24h
                </button>

                <p className="text-black/30 text-xs text-center">
                  No commitment required. We respond within 24 hours.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

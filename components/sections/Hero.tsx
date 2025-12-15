'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Hero() {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Speaker Kit requested:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setShowModal(false)
      setSubmitted(false)
      setFormData({ name: '', email: '', phone: '' })
    }, 2000)
  }

  return (
    <>
      <section className="min-h-screen flex items-center relative overflow-hidden text-white pt-24 pb-16">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://raycashcare.com/wp-content/uploads/2023/01/hero-raycare_tablet_bg.webp)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        </div>

        {/* Animated Accent Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
                <span className="text-sm font-medium text-accent">Navy SEAL Combat Veteran</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-[1.1] text-text-primary">
                Inspire Your Audience With{' '}
                <span className="gradient-text">Truth Bombs</span>{' '}
                They Need To Hear
              </h1>

              <p className="text-lg md:text-xl mb-10 max-w-xl leading-relaxed text-text-secondary">
                Ray Care has a unique way of incorporating his time on the battlefield into relatable life lessons guaranteed to captivate and motivate your team.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link href="https://raycashcarecommunity.com/" target="_blank" className="btn-primary">
                  Contact Ray
                </Link>
                <button onClick={() => setShowModal(true)} className="btn-secondary">
                  Download Speaker Kit
                </button>
              </div>

            {/* Stats Strip */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-10 border-t border-border/50">
              <div className="group">
                <p className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1 group-hover:scale-105 transition-transform">500+</p>
                <p className="text-xs text-text-muted uppercase tracking-wide">Keynotes</p>
              </div>
              <div className="group">
                <p className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1 group-hover:scale-105 transition-transform">100K+</p>
                <p className="text-xs text-text-muted uppercase tracking-wide">Inspired</p>
              </div>
              <div className="group">
                <p className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1 group-hover:scale-105 transition-transform">20+</p>
                <p className="text-xs text-text-muted uppercase tracking-wide">Years</p>
              </div>
              <div className="group">
                <p className="text-3xl md:text-4xl font-heading font-bold text-accent mb-1 group-hover:scale-105 transition-transform">98%</p>
                <p className="text-xs text-text-muted uppercase tracking-wide">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right - Ray Image (hidden on mobile, shown on lg) */}
          <div className="hidden lg:block relative">
            <div className="relative">
              <img
                src="https://raycashcare.com/wp-content/uploads/2022/12/raycashcare-pointing-white.webp"
                alt="Ray Cash Care"
                className="w-full max-w-lg ml-auto"
              />
              {/* Decorative ring */}
              <div className="absolute -bottom-4 -left-4 w-32 h-32 border-4 border-accent/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Speaker Kit Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowModal(false)}></div>
          <div className="relative bg-surface border border-border rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-text-muted hover:text-white transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-text-secondary">Your speaker kit is on its way to your inbox.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-white mb-2">Download Speaker Kit</h3>
                <p className="text-text-secondary mb-6">Enter your details below and we'll send Ray's complete speaker kit directly to your inbox.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-secondary mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full mt-6">
                    Send Me The Kit
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  )
}

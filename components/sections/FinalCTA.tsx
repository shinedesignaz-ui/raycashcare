'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function FinalCTA() {
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
      <section className="py-24 relative overflow-hidden">
        {/* Background with Ray's image */}
        <div
          className="absolute inset-0 bg-cover bg-right bg-no-repeat"
          style={{
            backgroundImage: 'url(https://raycashcare.com/wp-content/uploads/2022/12/raycashcare-pointing-white.webp)',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/60"></div>
        </div>

        {/* Accent Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[150px]"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8">
              <span className="text-sm font-medium text-accent">Limited Availability for 2025</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 text-text-primary leading-tight">
              Ready to <span className="gradient-text">Transform</span> Your Team?
            </h2>

            <p className="text-lg text-text-secondary mb-10 leading-relaxed">
              Let's talk about how Ray can help your organization achieve extraordinary results under pressure. Customized for your specific challenges.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="https://raycashcarecommunity.com/" target="_blank" className="btn-primary">
                Contact Ray
              </Link>
              <button onClick={() => setShowModal(true)} className="btn-secondary">
                Download Speaker Kit
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-10 border-t border-border/50">
              <div className="flex items-center gap-2 text-text-muted">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Response within 24 hours</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-sm">Free consultation</span>
              </div>
              <div className="flex items-center gap-2 text-text-muted">
                <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-sm">100% satisfaction guarantee</span>
              </div>
            </div>
          </div>
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

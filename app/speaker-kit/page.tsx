'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function SpeakerKit() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    eventTimeframe: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Speaker Kit requested:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', role: '', eventTimeframe: '' })
    }, 3000)
  }

  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-20 bg-navy min-h-screen">
          <div className="container max-w-3xl">
            <h1 className="text-h1-desktop md:text-h1-mobile font-heading font-bold mb-6 text-text-primary">
              Speaker Kit
            </h1>
            <p className="text-body-lg text-text-secondary">
              Everything you need to know about Ray speaking programs, frameworks, and approach.
            </p>
          </div>
        </section>

        <section className="py-20 bg-charcoal border-t border-border">
          <div className="container max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-8 text-text-primary">
                  What is Included
                </h2>
                
                <ul className="space-y-4">
                  {[
                    'Complete bio and background',
                    'High-resolution headshots',
                    'Speaking program descriptions',
                    'Framework overviews',
                    'Case study summaries',
                    'Testimonials and social proof',
                    'AV requirements',
                    'Promotional assets',
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-accent-crimson mr-3 mt-1">+</span>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-8 text-text-primary">
                  Download Now
                </h2>
                
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border text-text-primary placeholder-text-secondary pb-2 focus:outline-none focus:border-accent-crimson"
                    />
                    
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-border text-text-primary placeholder-text-secondary pb-2 focus:outline-none focus:border-accent-crimson"
                    />
                    
                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border text-text-primary placeholder-text-secondary pb-2 focus:outline-none focus:border-accent-crimson"
                    />
                    
                    <input
                      type="text"
                      name="role"
                      placeholder="Your Role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border text-text-primary placeholder-text-secondary pb-2 focus:outline-none focus:border-accent-crimson"
                    />
                    
                    <select
                      name="eventTimeframe"
                      value={formData.eventTimeframe}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-border text-text-primary pb-2 focus:outline-none focus:border-accent-crimson"
                    >
                      <option value="">Event Timeframe</option>
                      <option value="0-3-months">0-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="6-12-months">6-12 months</option>
                      <option value="12-plus-months">12+ months</option>
                    </select>
                    
                    <button type="submit" className="btn-primary w-full mt-6">
                      Download Speaker Kit
                    </button>
                  </form>
                ) : (
                  <div className="card bg-accent-crimson/10 border border-accent-crimson">
                    <p className="text-accent-crimson font-bold mb-2">Thank you!</p>
                    <p className="text-text-secondary">Your Speaker Kit is downloading. Check your email for a copy.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-navy border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-8 text-text-primary">
              Why Ray?
            </h2>
            
            <div className="space-y-6">
              {[
                { title: 'Combat-Tested', desc: '20+ years in the Navy SEAL Teams.' },
                { title: 'Proven Results', desc: 'Fortune 500 companies, military organizations, and startups.' },
                { title: 'Customized', desc: 'Every program tailored to your specific challenges.' },
                { title: 'Frameworks', desc: 'Practical, actionable systems your team can implement immediately.' },
              ].map((item, idx) => (
                <div key={idx} className="card">
                  <h3 className="font-bold text-accent-crimson mb-2">{item.title}</h3>
                  <p className="text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-charcoal border-t border-border text-center">
          <div className="container">
            <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-6 text-text-primary">
              Ready to Book?
            </h2>
            <button className="btn-primary">
              Check Availability
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    eventDate: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you! We\'ll be in touch within 24 hours.')
    setFormData({ name: '', email: '', company: '', role: '', eventDate: '', message: '' })
  }

  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-20 bg-navy min-h-screen">
          <div className="container">
            <h1 className="text-h1-desktop md:text-h1-mobile font-heading font-bold mb-6 text-text-primary">
              Get in Touch
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Ready to book Ray for your next event? Let's talk about your goals and how we can help.
            </p>
          </div>
        </section>

        <section className="py-20 bg-charcoal border-t border-border">
          <div className="container max-w-3xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-8 text-text-primary">
                  Contact Info
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-accent-crimson font-bold mb-2">Email</p>
                    <a href="mailto:hello@raycashcare.com" className="text-text-secondary hover:text-accent-crimson">
                      hello@raycashcare.com
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-accent-crimson font-bold mb-2">Phone</p>
                    <a href="tel:+1-555-123-4567" className="text-text-secondary hover:text-accent-crimson">
                      +1 (555) 123-4567
                    </a>
                  </div>
                  
                  <div>
                    <p className="text-accent-crimson font-bold mb-2">Response Time</p>
                    <p className="text-text-secondary">Within 24 hours</p>
                  </div>
                </div>
              </div>

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
                
                <input
                  type="date"
                  name="eventDate"
                  value={formData.eventDate}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-border text-text-primary placeholder-text-secondary pb-2 focus:outline-none focus:border-accent-crimson"
                />
                
                <textarea
                  name="message"
                  placeholder="Tell us about your event"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-b border-border text-text-primary placeholder-text-secondary pb-2 focus:outline-none focus:border-accent-crimson resize-none"
                />
                
                <button type="submit" className="btn-primary w-full mt-6">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-20 bg-navy border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-8 text-text-primary">
              What Happens Next
            </h2>
            
            <div className="space-y-6">
              {[
                { step: '1', title: 'Initial Consultation', desc: 'We discuss your event, goals, and audience.' },
                { step: '2', title: 'Proposal & Availability', desc: 'We send a customized proposal with dates and pricing.' },
                { step: '3', title: 'Discovery Call', desc: 'Deep dive into your challenges and desired outcomes.' },
                { step: '4', title: 'Confirmation & Planning', desc: 'Finalize details, AV requirements, and promotion.' },
              ].map((item, idx) => (
                <div key={idx} className="card">
                  <p className="text-accent-crimson font-bold mb-2">Step {item.step}: {item.title}</p>
                  <p className="text-text-secondary">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

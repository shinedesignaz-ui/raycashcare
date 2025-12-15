'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  const faqs = [
    {
      q: 'What industries do you speak to?',
      a: 'Tech, finance, manufacturing, healthcare, military, non-profit, and government. Any organization with teams under pressure.',
    },
    {
      q: 'Can you customize the content?',
      a: 'Yes. We conduct a discovery call and pre-event survey to tailor examples, frameworks, and outcomes to your specific challenges.',
    },
    {
      q: 'Do you offer virtual keynotes?',
      a: 'Absolutely. Virtual programs are fully interactive with breakout sessions, Q&A, and engagement tools.',
    },
    {
      q: 'What is your typical booking timeline?',
      a: '3-6 months ideal. We can accommodate shorter timelines depending on availability.',
    },
    {
      q: 'What is included in a keynote?',
      a: 'Speaker prep call, AV rider, promotional assets, post-event recap, and optional meet and greet with leadership.',
    },
    {
      q: 'Do you offer follow-up coaching?',
      a: 'Yes. We offer optional post-event coaching packages to sustain momentum and embed frameworks.',
    },
    {
      q: 'What audience sizes do you work with?',
      a: 'From intimate leadership teams (20 people) to large conferences (2,000+). Format adapts to your needs.',
    },
    {
      q: 'Can attendees record the session?',
      a: 'Recording is available upon request. We provide edited clips for internal use.',
    },
  ]

  return (
    <section className="py-20 bg-background border-t border-border">
      <div className="container max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-text-primary">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="card">
              <button
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full text-left flex justify-between items-center"
              >
                <h3 className="font-bold text-text-primary">{faq.q}</h3>
                <span className="text-accent text-xl">{openIdx === idx ? '−' : '+'}</span>
              </button>
              {openIdx === idx && (
                <p className="text-text-secondary mt-4 pt-4 border-t border-border">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

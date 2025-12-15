export default function Testimonials() {
  const testimonials = [
    { quote: 'Ray\'s keynote was the most impactful speaker we\'ve had in 5 years. Our team still talks about it.', author: 'VP of Talent', company: 'Fortune 500 Tech', rating: 5 },
    { quote: 'His frameworks became embedded in our culture. The ROI has been immeasurable.', author: 'Chief Operating Officer', company: 'National Sales Org', rating: 5 },
    { quote: 'Teams left with clarity, purpose, and accountability. Exactly what we needed.', author: 'Executive Director', company: 'Leadership Institute', rating: 5 },
    { quote: 'Combat-tested wisdom that actually works in the boardroom. Ray delivers.', author: 'CEO', company: 'Growth-Stage Startup', rating: 5 },
    { quote: 'Ray doesn\'t just motivate — he transforms. Our leadership team is forever changed.', author: 'Chief People Officer', company: 'Tech Company', rating: 5 },
    { quote: 'Our leaders still reference his frameworks 18 months later. That\'s staying power.', author: 'VP of Operations', company: 'Manufacturing', rating: 5 },
  ]

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.02] rounded-full blur-[100px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            What Leaders Say
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">Trusted by executives and teams across Fortune 500 companies and high-growth startups.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="card group">
              {/* Quote Icon */}
              <div className="mb-6">
                <svg className="w-10 h-10 text-accent/30" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="text-text-primary mb-8 leading-relaxed text-lg font-medium">{test.quote}</p>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <div>
                  <p className="text-accent font-bold">{test.author}</p>
                  <p className="text-text-muted text-sm mt-1">{test.company}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(test.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

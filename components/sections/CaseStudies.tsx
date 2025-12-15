export default function CaseStudies() {
  const studies = [
    {
      client: 'Fortune 500 Tech Company',
      challenge: 'Leadership silos preventing cross-functional execution',
      outcome: '34% improvement in project delivery speed',
      quote: 'Ray transformed how our leaders communicate under pressure.',
    },
    {
      client: 'National Sales Organization',
      challenge: 'High turnover and accountability gaps',
      outcome: '28% reduction in turnover, 42% increase in quota attainment',
      quote: 'His frameworks became our operating system.',
    },
    {
      client: 'Military Leadership Program',
      challenge: 'Developing next-generation command officers',
      outcome: '95% of participants promoted within 18 months',
      quote: 'Combat-tested wisdom applied to modern leadership.',
    },
  ]

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container">
        <div className="mb-16">
          <div className="accent-line mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary">
            Case Studies
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl">Real results from organizations that transformed their leadership culture.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {studies.map((study, idx) => (
            <div key={idx} className="card-lg border-t-4 border-t-accent group hover:border-t-accent-dark">
              <div className="mb-6">
                <p className="badge badge-gold mb-4">{study.client}</p>
                <p className="text-text-secondary text-sm leading-relaxed"><strong>Challenge:</strong> {study.challenge}</p>
              </div>

              <div className="bg-accent/10 rounded-lg p-4 mb-6 border border-accent/20">
                <p className="text-accent font-bold text-lg">{study.outcome}</p>
              </div>

              <p className="text-text-secondary italic text-sm leading-relaxed border-t border-border pt-4">"{study.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

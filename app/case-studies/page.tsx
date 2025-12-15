import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Case Studies | Ray Cash Care',
  description: 'Real results from Fortune 500 companies, military organizations, and growth-stage startups.',
}

export default function CaseStudies() {
  const studies = [
    {
      client: 'Fortune 500 Tech Company',
      industry: 'Technology',
      format: 'Full-Day Leadership Intensive',
      challenge: 'Leadership silos preventing cross-functional execution',
      outcome: '34% improvement in project delivery speed',
      quote: 'Ray transformed how our leaders communicate under pressure.',
    },
    {
      client: 'National Sales Organization',
      industry: 'Sales & Distribution',
      format: 'Keynote + Workshop Series',
      challenge: 'High turnover and accountability gaps',
      outcome: '28% reduction in turnover, 42% increase in quota attainment',
      quote: 'His frameworks became our operating system.',
    },
    {
      client: 'Military Leadership Program',
      industry: 'Government/Military',
      format: 'Executive Coaching + Workshops',
      challenge: 'Developing next-generation command officers',
      outcome: '95% of participants promoted within 18 months',
      quote: 'Combat-tested wisdom applied to modern leadership.',
    },
    {
      client: 'Healthcare System',
      industry: 'Healthcare',
      format: 'Keynote + Q&A',
      challenge: 'Burnout and communication breakdown in clinical teams',
      outcome: '31% improvement in employee engagement scores',
      quote: 'Ray message resonated with every level of our organization.',
    },
    {
      client: 'Manufacturing Leader',
      industry: 'Manufacturing',
      format: 'Half-Day Workshop',
      challenge: 'Safety culture and accountability on the floor',
      outcome: '47% reduction in safety incidents',
      quote: 'His frameworks made accountability tangible for our teams.',
    },
    {
      client: 'Growth-Stage Startup',
      industry: 'Technology',
      format: 'Keynote + Coaching',
      challenge: 'Building leadership culture as company scales',
      outcome: 'Successful Series B funding, 3x team growth',
      quote: 'Ray doesn't motivate—he transforms.',
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-20 bg-navy min-h-screen">
          <div className="container">
            <h1 className="text-h1-desktop md:text-h1-mobile font-heading font-bold mb-6 text-text-primary">
              Case Studies
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Real results from organizations that transformed their teams and culture.
            </p>
          </div>
        </section>

        <section className="py-20 bg-charcoal border-t border-border">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {studies.map((study, idx) => (
                <div key={idx} className="card-lg">
                  <p className="text-accent-gold text-sm font-semibold mb-2 uppercase tracking-wide">{study.client}</p>
                  <p className="text-text-secondary text-xs mb-4">{study.industry} • {study.format}</p>
                  <p className="text-text-secondary text-sm mb-4"><strong>Challenge:</strong> {study.challenge}</p>
                  <p className="text-accent-crimson font-bold mb-4">{study.outcome}</p>
                  <p className="text-text-secondary italic text-sm">"{study.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-navy border-t border-border text-center">
          <div className="container">
            <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-6 text-text-primary">
              Your Organization Could Be Next
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

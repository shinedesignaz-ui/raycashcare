import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Speaking Programs | Ray Cash Care',
  description: 'Keynotes, workshops, and leadership intensives designed for high-performing teams.',
}

export default function Speaking() {
  const packages = [
    {
      title: 'Keynote',
      duration: '45–60 minutes',
      audience: 'All levels',
      outcomes: ['Inspiration', 'Clarity', 'Accountability'],
      description: 'A powerful, focused message that sets the tone for transformation.',
    },
    {
      title: 'Keynote + Q&A',
      duration: '60–90 minutes',
      audience: 'Executive teams',
      outcomes: ['Deep engagement', 'Customized insights', 'Action items'],
      description: 'Interactive session with direct dialogue on your specific challenges.',
    },
    {
      title: 'Half-Day Workshop',
      duration: '4 hours',
      audience: 'Leadership teams',
      outcomes: ['Skill building', 'Team alignment', 'Frameworks'],
      description: 'Hands-on training with frameworks, exercises, and team alignment.',
    },
    {
      title: 'Full-Day Leadership Intensive',
      duration: '8 hours',
      audience: 'High-performing teams',
      outcomes: ['Transformation', 'Culture shift', 'Sustained change'],
      description: 'Deep-dive program with multiple modules, breakouts, and action planning.',
    },
  ]

  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-20 bg-navy min-h-screen">
          <div className="container">
            <h1 className="text-h1-desktop md:text-h1-mobile font-heading font-bold mb-6 text-text-primary">
              Speaking Programs
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Customized keynotes and workshops designed for your organization's specific challenges and goals.
            </p>
          </div>
        </section>

        <section className="py-20 bg-charcoal border-t border-border">
          <div className="container">
            <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-12 text-text-primary">
              Our Packages
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {packages.map((pkg, idx) => (
                <div key={idx} className="card-lg">
                  <h3 className="font-heading font-bold text-accent-crimson mb-2 text-lg">{pkg.title}</h3>
                  <p className="text-text-secondary text-sm mb-4">{pkg.duration} • {pkg.audience}</p>
                  <p className="text-text-primary mb-4">{pkg.description}</p>
                  <ul className="space-y-2">
                    {pkg.outcomes.map((outcome, i) => (
                      <li key={i} className="text-text-secondary text-sm flex items-center">
                        <span className="text-accent-crimson mr-2">+</span> {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-navy border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-8 text-text-primary">
              How Customization Works
            </h2>
            
            <div className="space-y-8">
              <div className="card">
                <h3 className="font-bold text-accent-crimson mb-2">1. Discovery Call</h3>
                <p className="text-text-secondary">We discuss your organization, challenges, audience, and desired outcomes.</p>
              </div>
              <div className="card">
                <h3 className="font-bold text-accent-crimson mb-2">2. Pre-Event Survey</h3>
                <p className="text-text-secondary">Attendees share their biggest challenges so we can tailor examples and frameworks.</p>
              </div>
              <div className="card">
                <h3 className="font-bold text-accent-crimson mb-2">3. Tailored Delivery</h3>
                <p className="text-text-secondary">Ray delivers a customized program with your industry examples and specific outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-charcoal border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-8 text-text-primary">
              What is Included
            </h2>
            
            <ul className="space-y-4">
              {[
                'Speaker prep call (30 min)',
                'AV rider and technical requirements',
                'Promotional assets (bio, headshots, social copy)',
                'Post-event recap and feedback',
                'Optional meet & greet with leadership',
                'Access to frameworks and resources',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start">
                  <span className="text-accent-crimson mr-3 mt-1">+</span>
                  <span className="text-text-primary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="py-20 bg-navy border-t border-border text-center">
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

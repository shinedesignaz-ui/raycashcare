import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Media | Ray Cash Care',
  description: 'Podcast appearances, press features, and video clips.',
}

export default function Media() {
  const podcasts = [
    { title: 'Leadership Under Pressure', host: 'The Executive Podcast', link: '#' },
    { title: 'Building Accountability Culture', host: 'Business Leaders Daily', link: '#' },
    { title: 'Navy SEAL Lessons for Business', host: 'Entrepreneur\'s Journey', link: '#' },
    { title: 'Execution Frameworks That Work', host: 'The Strategy Room', link: '#' },
  ]

  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-20 bg-navy min-h-screen">
          <div className="container">
            <h1 className="text-h1-desktop md:text-h1-mobile font-heading font-bold mb-6 text-text-primary">
              Media & Press
            </h1>
            <p className="text-body-lg text-text-secondary max-w-2xl">
              Featured in leading business publications and podcasts.
            </p>
          </div>
        </section>

        <section className="py-20 bg-charcoal border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-12 text-text-primary">
              Podcast Appearances
            </h2>
            
            <div className="space-y-4">
              {podcasts.map((pod, idx) => (
                <div key={idx} className="card">
                  <h3 className="font-bold text-accent-crimson mb-1">{pod.title}</h3>
                  <p className="text-text-secondary text-sm mb-3">{pod.host}</p>
                  <a href={pod.link} className="btn-tertiary text-sm">Listen →</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-navy border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-8 text-text-primary">
              Featured In
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {['Forbes', 'Harvard Business Review', 'Inc.', 'Entrepreneur', 'Fast Company', 'LinkedIn'].map((pub, idx) => (
                <div key={idx} className="card text-center">
                  <p className="text-text-secondary font-semibold">{pub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-charcoal border-t border-border text-center">
          <div className="container">
            <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-6 text-text-primary">
              Want to Feature Ray?
            </h2>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Ray is available for podcast interviews, speaking engagements, and media appearances.
            </p>
            <button className="btn-primary">
              Get in Touch
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

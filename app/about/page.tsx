import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'About Ray Cash Care | Navy SEAL Leadership Speaker',
  description: 'Learn about Ray\'s Navy SEAL background and leadership philosophy.',
}

export default function About() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-20 bg-navy min-h-screen">
          <div className="container max-w-3xl">
            <h1 className="text-h1-desktop md:text-h1-mobile font-heading font-bold mb-6 text-text-primary">
              About Ray Cash Care
            </h1>
            <p className="text-body-lg text-text-secondary">
              Navy SEAL. Leadership coach. Executive speaker. Dedicated to helping organizations unlock their full potential through combat-tested strategies.
            </p>
          </div>
        </section>

        <section className="py-20 bg-charcoal border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-8 text-text-primary">
              The Navy SEAL Difference
            </h2>
            
            <div className="space-y-6 text-text-secondary">
              <p>Ray 20+ years in the Navy SEAL Teams taught him what it takes to execute under extreme pressure. Every mission required perfect communication, absolute accountability, and teams that trusted each other completely.</p>
              
              <p>Those lessons translate directly to business. In the SEAL Teams, failure isn't an option—and neither is it in high-performing organizations.</p>
              
              <p>Ray brings that mindset to every keynote, workshop, and coaching engagement. He doesn't offer motivation. He offers frameworks, accountability, and a proven path to transformation.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-navy border-t border-border">
          <div className="container max-w-3xl">
            <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-8 text-text-primary">
              Core Frameworks
            </h2>
            
            <div className="space-y-6">
              {[
                { name: 'TEAM Framework', desc: 'Trust, Execution, Accountability, Mission-focus.' },
                { name: '3 Rs', desc: 'Resilient, Resourceful, Relentless—the mindset for execution.' },
                { name: 'Four Pillars of Execution', desc: 'Clarity, Ownership, Communication, Measurement.' },
                { name: 'Guard Your Time', desc: 'Discipline framework for leaders to protect focus.' },
              ].map((fw, idx) => (
                <div key={idx} className="card">
                  <h3 className="font-bold text-accent-crimson mb-2">{fw.name}</h3>
                  <p className="text-text-secondary">{fw.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-charcoal border-t border-border text-center">
          <div className="container">
            <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-6 text-text-primary">
              Ready to Learn More?
            </h2>
            <button className="btn-primary">
              Download Speaker Kit
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Refund Policy | Ray Cash Care',
}

export default function Refund() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-20 bg-navy">
          <div className="container max-w-3xl">
            <h1 className="text-h1-desktop md:text-h1-mobile font-heading font-bold mb-6 text-text-primary">
              Refund Policy
            </h1>
          </div>
        </section>

        <section className="py-20 bg-charcoal border-t border-border">
          <div className="container max-w-3xl">
            <div className="space-y-6 text-text-secondary">
              <div>
                <h3 className="text-lg font-bold text-accent-crimson mb-2">Booking Cancellations</h3>
                <p>If you need to cancel your booking, the following refund schedule applies:</p>
                <ul className="list-disc list-inside mt-2 space-y-1">
                  <li>60+ days before event: Full refund</li>
                  <li>30-59 days before event: 50% refund</li>
                  <li>Less than 30 days: No refund</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-accent-crimson mb-2">Event Postponement</h3>
                <p>If Ray must postpone due to unforeseen circumstances, we will reschedule at no additional cost or provide a full refund.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-accent-crimson mb-2">Speaker Kit Downloads</h3>
                <p>Digital downloads are non-refundable once accessed. If you experience technical issues, contact us for support.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-accent-crimson mb-2">How to Request a Refund</h3>
                <p>Email hello@raycashcare.com with your booking details. Refunds are processed within 10 business days.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-accent-crimson mb-2">Questions?</h3>
                <p>Contact us at hello@raycashcare.com or call +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

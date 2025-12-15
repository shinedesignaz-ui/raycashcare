import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Terms of Service | Ray Cash Care',
}

export default function Terms() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-20 bg-navy">
          <div className="container max-w-3xl">
            <h1 className="text-h1-desktop md:text-h1-mobile font-heading font-bold mb-6 text-text-primary">
              Terms of Service
            </h1>
          </div>
        </section>

        <section className="py-20 bg-charcoal border-t border-border">
          <div className="container max-w-3xl">
            <div className="space-y-6 text-text-secondary">
              <div>
                <h3 className="text-lg font-bold text-accent-crimson mb-2">Agreement</h3>
                <p>By using this website and booking Ray services, you agree to these terms and conditions.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-accent-crimson mb-2">Booking & Payment</h3>
                <p>A 50% deposit is required to confirm a booking. Final payment is due 30 days before the event.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-accent-crimson mb-2">Cancellation</h3>
                <p>Cancellations made 60+ days before the event receive a full refund. Less than 60 days: 50% refund.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-accent-crimson mb-2">Intellectual Property</h3>
                <p>All content on this website is owned by Ray Cash Care. Reproduction without permission is prohibited.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-accent-crimson mb-2">Limitation of Liability</h3>
                <p>Ray Cash Care is not liable for indirect, incidental, or consequential damages arising from your use of this site or services.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

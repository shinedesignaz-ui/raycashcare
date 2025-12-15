import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Privacy Policy | Ray Cash Care',
}

export default function Privacy() {
  return (
    <>
      <Navigation />
      <main>
        <section className="pt-32 pb-20 bg-navy">
          <div className="container max-w-3xl">
            <h1 className="text-h1-desktop md:text-h1-mobile font-heading font-bold mb-6 text-text-primary">
              Privacy Policy
            </h1>
          </div>
        </section>

        <section className="py-20 bg-charcoal border-t border-border">
          <div className="container max-w-3xl prose prose-invert">
            <h2 className="text-h2-desktop md:text-h2-mobile font-heading font-bold mb-6 text-text-primary">
              Your Privacy Matters
            </h2>
            
            <div className="space-y-6 text-text-secondary">
              <div>
                <h3 className="text-lg font-bold text-accent-crimson mb-2">Information We Collect</h3>
                <p>We collect information you provide directly, such as name, email, company, and event details when you contact us or download resources.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-accent-crimson mb-2">How We Use Your Information</h3>
                <p>We use your information to respond to inquiries, send newsletters, and improve our services. We never sell your data.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-accent-crimson mb-2">Data Security</h3>
                <p>We implement industry-standard security measures to protect your information.</p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-accent-crimson mb-2">Contact Us</h3>
                <p>Questions about this policy? Email us at hello@raycashcare.com</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

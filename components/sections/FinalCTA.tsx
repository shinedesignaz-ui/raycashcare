export default function FinalCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with Ray's image */}
      <div
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: 'url(https://raycashcare.com/wp-content/uploads/2022/12/raycashcare-pointing-white.webp)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/95 to-black/60"></div>
      </div>

      {/* Accent Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-accent/10 rounded-full blur-[150px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/30 mb-8">
            <span className="text-sm font-medium text-accent">Limited Availability for 2025</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 text-text-primary leading-tight">
            Ready to <span className="gradient-text">Transform</span> Your Team?
          </h2>

          <p className="text-lg text-text-secondary mb-10 leading-relaxed">
            Let's talk about how Ray can help your organization achieve extraordinary results under pressure. Customized for your specific challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="btn-primary">
              Book Ray Now
            </button>
            <button className="btn-secondary">
              Download Speaker Kit
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-6 pt-10 border-t border-border/50">
            <div className="flex items-center gap-2 text-text-muted">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Response within 24 hours</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Free consultation</span>
            </div>
            <div className="flex items-center gap-2 text-text-muted">
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              <span className="text-sm">100% satisfaction guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

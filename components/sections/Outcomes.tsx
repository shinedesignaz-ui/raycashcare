export default function Outcomes() {
  const outcomes = [
    {
      title: 'Accountability',
      description: 'Teams that own their outcomes and drive results without excuses.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Ownership',
      description: 'Leaders who take full responsibility at every level.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    },
    {
      title: 'Communication',
      description: 'Clear, direct dialogue especially under pressure.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: 'Execution',
      description: 'Strategies that translate to measurable impact.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Resilience',
      description: 'Teams that bounce back from adversity stronger.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      )
    },
  ]

  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/[0.03] rounded-full blur-[100px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">Transform Your Team</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary mb-6">
            What You'll Achieve
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Real outcomes that create lasting change in your organization
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {outcomes.map((outcome, idx) => (
            <div key={idx} className="card group text-center">
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-6 text-accent group-hover:bg-accent group-hover:text-black transition-all duration-300">
                {outcome.icon}
              </div>
              <h3 className="font-heading font-bold text-text-primary mb-3 text-lg">{outcome.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{outcome.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

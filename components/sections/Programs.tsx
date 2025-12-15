export default function Programs() {
  const programs = [
    {
      title: 'Keynote',
      duration: '45–60 min',
      audience: 'All levels',
      outcomes: ['Inspiration', 'Clarity', 'Accountability'],
      featured: false,
    },
    {
      title: 'Keynote + Q&A',
      duration: '60–90 min',
      audience: 'Executive teams',
      outcomes: ['Deep engagement', 'Customized insights', 'Action items'],
      featured: true,
    },
    {
      title: 'Half-Day Workshop',
      duration: '4 hours',
      audience: 'Leadership teams',
      outcomes: ['Skill building', 'Team alignment', 'Frameworks'],
      featured: false,
    },
    {
      title: 'Full-Day Intensive',
      duration: '8 hours',
      audience: 'High-performers',
      outcomes: ['Transformation', 'Culture shift', 'Sustained change'],
      featured: false,
    },
  ]

  return (
    <section className="py-28 bg-background-secondary relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px]"></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-4">Programs</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary">
              Speaking Programs
            </h2>
            <p className="text-text-secondary mt-4 max-w-xl text-lg">Choose the format that fits your event. All programs are fully customizable.</p>
          </div>
          <button className="btn-secondary self-start lg:self-auto">View All Programs</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((prog, idx) => (
            <div key={idx} className={`card-lg group relative ${prog.featured ? 'ring-2 ring-accent' : ''}`}>
              {prog.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge badge-gold">Most Popular</span>
                </div>
              )}
              <div className="mb-6">
                <h3 className="font-heading font-bold text-text-primary mb-2 text-xl group-hover:text-accent transition-colors">{prog.title}</h3>
                <div className="flex items-center gap-3 text-text-muted text-xs">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {prog.duration}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-text-muted"></span>
                  <span>{prog.audience}</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {prog.outcomes.map((outcome, i) => (
                  <li key={i} className="text-text-secondary text-sm flex items-center">
                    <svg className="w-5 h-5 text-accent mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {outcome}
                  </li>
                ))}
              </ul>
              <button className="btn-tertiary text-sm w-full justify-center">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

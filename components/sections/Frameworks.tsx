export default function Frameworks() {
  const frameworks = [
    {
      name: 'TEAM Framework',
      description: 'Trust, Execution, Accountability, Mission-focus. The four pillars of high-performing teams.',
    },
    {
      name: '3 Rs: Resilient, Resourceful, Relentless',
      description: 'The mindset required to execute under pressure and adapt to change.',
    },
    {
      name: 'Four Pillars of Execution',
      description: 'Clarity, Ownership, Communication, Measurement. How to turn strategy into results.',
    },
    {
      name: 'Guard Your Time',
      description: 'Discipline framework for leaders to protect focus and drive impact.',
    },
  ]

  return (
    <section className="py-24 bg-background border-t border-border">
      <div className="container">
        <div className="mb-16">
          <div className="accent-line mb-4"></div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-text-primary">
            Frameworks You'll Learn
          </h2>
          <p className="text-text-secondary mt-4 max-w-2xl">Combat-tested models that drive measurable change in your organization.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {frameworks.map((fw, idx) => (
            <div key={idx} className="card-lg border-l-4 border-l-accent group hover:border-l-accent-dark hover:bg-surface/80">
              <div className="flex items-start gap-4">
                <div className="text-4xl text-accent group-hover:text-accent-dark transition-colors">◆</div>
                <div className="flex-1">
                  <h3 className="font-heading font-bold text-accent mb-3 group-hover:text-accent-dark transition-colors text-lg">{fw.name}</h3>
                  <p className="text-text-secondary leading-relaxed">{fw.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

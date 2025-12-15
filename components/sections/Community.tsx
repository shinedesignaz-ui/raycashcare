import Link from 'next/link'

const merchItems = [
  {
    name: 'CASH Gear Collection',
    image: 'https://7gcbcz-51.myshopify.com/cdn/shop/files/AV1A5893-2.jpg',
    link: 'https://raycashcare.com/cash-gear/',
  },
  {
    name: 'Premium Apparel',
    image: 'https://7gcbcz-51.myshopify.com/cdn/shop/files/1.png',
    link: 'https://raycashcare.com/cash-gear/',
  },
  {
    name: 'Exclusive Designs',
    image: 'https://7gcbcz-51.myshopify.com/cdn/shop/files/SC4J3IqA.jpg',
    link: 'https://raycashcare.com/cash-gear/',
  },
]

export default function Community() {
  return (
    <section className="py-24 bg-surface">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">Join The Movement</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-text-primary mb-6">
            Join the <span className="gradient-text">CONQUER</span> Community
          </h2>
          <p className="text-text-secondary text-lg">
            Get exclusive access to Ray's mindset training, live events, and a community of high-performers pushing their limits every day.
          </p>
        </div>

        {/* Community CTA */}
        <div className="relative mb-20 rounded-2xl overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://raycashcare.com/wp-content/uploads/2023/01/hero-raycare_tablet_bg.webp)',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-transparent"></div>
          </div>
          
          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/40 mb-6">
                <span className="text-sm font-medium text-accent">100% Satisfaction Guaranteed</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-white mb-4">
                CONQUER Community
              </h3>
              <p className="text-gray-300 mb-6">
                Weekly mindset training, exclusive content, live Q&As with Ray, and a brotherhood of warriors committed to excellence. This isn't just a community—it's a lifestyle.
              </p>
              <ul className="space-y-3 mb-8">
                {['Weekly live training sessions', 'Exclusive video content', 'Private community access', 'Direct interaction with Ray'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-300">
                    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link 
                href="https://raycashcarecommunity.com/" 
                target="_blank"
                className="btn-primary inline-flex items-center gap-2"
              >
                Join the Community
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '500+', label: 'Active Members' },
                { value: '100%', label: 'Satisfaction' },
                { value: '50+', label: 'Training Videos' },
                { value: '24/7', label: 'Community Access' },
              ].map((stat, idx) => (
                <div key={idx} className="text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Merch Section */}
        <div className="text-center mb-12">
          <span className="inline-block text-accent text-sm font-semibold tracking-wider uppercase mb-4">Rep The Mindset</span>
          <h3 className="text-2xl md:text-3xl font-heading font-bold text-text-primary mb-4">
            "CASH" Gear
          </h3>
          <p className="text-text-secondary max-w-xl mx-auto">
            Premium gear for those who live the CONQUER lifestyle. Wear the mindset.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {merchItems.map((item, idx) => (
            <Link 
              key={idx} 
              href={item.link}
              target="_blank"
              className="group relative rounded-xl overflow-hidden bg-background border border-border hover:border-accent/50 transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-lg font-semibold text-white mb-2">{item.name}</h4>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-medium">
                  Shop Now
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Shop All Button */}
        <div className="text-center mt-12">
          <Link 
            href="https://raycashcare.com/cash-gear/"
            target="_blank"
            className="btn-secondary inline-flex items-center gap-2"
          >
            Shop All Gear
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}


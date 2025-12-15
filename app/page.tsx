import Hero from '@/components/sections/Hero'
import Outcomes from '@/components/sections/Outcomes'
import Programs from '@/components/sections/Programs'
import CaseStudies from '@/components/sections/CaseStudies'
import Testimonials from '@/components/sections/Testimonials'
import Frameworks from '@/components/sections/Frameworks'
import Community from '@/components/sections/Community'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export const metadata = {
  title: 'Ray Cash Care | Navy SEAL Leadership & Executive Keynote Speaker',
  description: 'Leadership under pressure. Keynotes and workshops that turn teams into owners. Built for high-stakes execution.',
  openGraph: {
    title: 'Ray Cash Care | Navy SEAL Leadership Speaker',
    description: 'Transform your team with combat-tested leadership strategies.',
    type: 'website',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <Outcomes />
      <Programs />
      <CaseStudies />
      <Testimonials />
      <Frameworks />
      <Community />
      <FAQ />
      <FinalCTA />
    </>
  )
}


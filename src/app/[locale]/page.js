import Hero from '@/app/[locale]/homePage/Hero'
import TejoOneHighlights from '@/app/[locale]/homePage/TejoOneHighlights'
import MissionSection from '@/app/[locale]/homePage/MissionSection'
import ProjectsPreview from '@/app/[locale]/homePage/ProjectsPreview'
import BlogPreview from '@/app/[locale]/homePage/BlogPreview'
import CTASection from '@/app/[locale]/homePage/CTASection'
import SponsorGrid from '@/components/SponsorGrid'

export default function Home() {
  return (
    <>
      <Hero />
      <TejoOneHighlights />        
      <MissionSection />         
      <ProjectsPreview />
      <BlogPreview />
      <CTASection />                
      <SponsorGrid />
    </>
  )
}
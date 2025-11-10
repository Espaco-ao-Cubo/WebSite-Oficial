import Hero from '@/app/[locale]/homePage/Hero'
import TejoOneHighlights from '@/app/[locale]/homePage/TejoOneHighlights'
import MissionSection from '@/app/[locale]/homePage/MissionSection'
import ProjectsPreview from '@/app/[locale]/homePage/ProjectsPreview'
import BlogPreview from '@/app/[locale]/homePage/BlogPreview'
import CTASection from '@/app/[locale]/homePage/CTASection'
import SponsorGrid from '@/components/SponsorGrid'

export default async function Home({ params }) {
  // Extrair o locale dos params
  const { locale } = await params

  return (
    <>
      <Hero />
      <TejoOneHighlights />        
      <MissionSection />         
      <ProjectsPreview locale={locale} />
      <BlogPreview locale={locale}/>
      <CTASection />                
      <SponsorGrid />
    </>
  )
}
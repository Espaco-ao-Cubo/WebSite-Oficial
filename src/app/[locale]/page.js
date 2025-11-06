// src/app/page.js
import Hero from '@/app/[locale]/homePage/Hero'
import MissionSection from '@/app/[locale]/homePage/MissionSection'
import ProjectsPreview from '@/app/[locale]/homePage/ProjectsPreview'
import BlogPreview from '@/app/[locale]/homePage/BlogPreview'
import SponsorGrid from '@/components/SponsorGrid'

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <ProjectsPreview />
      <BlogPreview />
      <SponsorGrid />
    </>
  )
}

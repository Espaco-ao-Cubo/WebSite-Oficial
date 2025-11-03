// src/app/page.js
import Hero from '@/components/Hero'
import MissionSection from '@/components/MissionSection'
import ProjectsPreview from '@/components/ProjectsPreview'
import BlogPreview from '@/components/BlogPreview'
import SponsorGrid from '@/components/SponsorGrid'

export default function Home() {
  return (
    <>
      <Hero />
      <MissionSection />
      <ProjectsPreview />
      <BlogPreview />
      {/* <SponsorGrid /> */}
    </>
  )
}

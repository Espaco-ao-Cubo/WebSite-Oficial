"use client"
import Header from "./components/Header";
import SpaceSlideshow from './components/SpaceSlidshow';
import ProjectSection from "@/app/components/ProjectSection";
import ContactSection from "@/app/components/ContactSection";
import SponsorsSection from "@/app/components/SponsorSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
        <SpaceSlideshow />
        <ProjectSection />
        <SponsorsSection />
        <ContactSection />
    </div>
  );
}

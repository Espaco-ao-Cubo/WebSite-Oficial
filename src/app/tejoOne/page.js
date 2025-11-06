import TejoOneHero from './components/tejoone/TejoOneHero'
import MissionObjectives from './components/tejoone/MissionObjectives'
import Timeline from './components/tejoone/Timeline'
import Subsystems from './components/tejoone/Subsystems'
import SponsorGrid from '@/components/SponsorGrid'

export const metadata = {
  title: 'TejoOne - Espaço ao Cubo',
  description: 'O primeiro CubeSat português desenvolvido por estudantes',
}

export default function TejoOnePage() {
  return (
    <>
      <TejoOneHero />
      <MissionObjectives />
      <Timeline />
      <Subsystems />
      <SponsorGrid />
    </>
  )
}
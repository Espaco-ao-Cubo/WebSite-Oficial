import TejoOneHero from './components/TejoOneHero'
import TechnicalSpecs from './components/TechnicalSpecs'
import MissionObjectives from './components/MissionObjectives'
import Subsystems from './components/Subsystems'
import Timeline from './components/Timeline'
import MeetTheTeam from './components/MeetTheTeam'
import SponsorGrid from '@/components/SponsorGrid'

export const metadata = {
  title: 'TejoOne',
  description: 'O primeiro CubeSat português desenvolvido por estudantes',
}

export default function TejoOnePage() {
  return (
    <>
      <TejoOneHero />
      <Timeline />
      <MissionObjectives />
      {/*<TechnicalSpecs />*/}
      <Subsystems />
      <MeetTheTeam />
    </>
  )
}
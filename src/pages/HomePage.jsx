import AboutFirm from "../components/home/AboutFirm"
import ClientReviews from "../components/home/ClientReviews"
import ConsultationCTA from "../components/home/ConsultationCTA"
import HeroSection from "../components/home/HeroSection"
import PracticeAreas from "../components/home/PracticeAreas"
import RecentVictories from "../components/home/RecentVictories"

const HomePage = () => {
  return <>
    <HeroSection />
    <RecentVictories />
    <PracticeAreas />
    <ConsultationCTA />
    <ClientReviews />
    <AboutFirm />
  </>
}

export default HomePage
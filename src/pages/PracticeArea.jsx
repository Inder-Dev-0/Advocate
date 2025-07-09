import ConsultationCTA from "../components/home/ConsultationCTA"
import RecentVictories from "../components/home/RecentVictories"
import Practices from "../components/practice-area/Practices"
import PracticeSection from "../components/practice-area/PracticeSection"

const PracticeArea = () => {
    return <>
        <PracticeSection />
        <Practices />
        <RecentVictories />
        <ConsultationCTA />
    </>
}

export default PracticeArea
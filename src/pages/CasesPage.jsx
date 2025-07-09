import CaseHistory from "../components/cases/CaseHistory"
import CasesSection from "../components/cases/CasesSection"
import RecentVictories from "../components/home/RecentVictories"

const CasesPage = () => {
    return <>
        <CasesSection />
        <CaseHistory />
        <RecentVictories />
    </>
}

export default CasesPage
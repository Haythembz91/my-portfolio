import ContactMe from "@/components/Contact"
import IntroSection from "@/components/IntroSection"
import ProjectsContainer from "@/components/ProjectsContainer"
import SkillsSection from "@/components/SkillsSection"

const Home = ()=>{
    return(
            <main className="container-fluid">
                <IntroSection></IntroSection>
                <SkillsSection></SkillsSection>
                <ProjectsContainer></ProjectsContainer>
                <ContactMe></ContactMe>
            </main>
    )
}

export default Home
import { HeroSection } from "./components/hero-section"
import { ProblemSection } from "./components/problem-section"
import { AppIntroSection } from "./components/app-intro-section"
import { HowToSection } from "./components/how-to-section"
import { TechStackSection } from "./components/tech-stack-section"
import { SiteFooter } from "./components/site-footer"
import { SiteNav } from "./components/site-nav"

export default function App() {
  return (
    <main>
      <SiteNav />
      <HeroSection />
      <ProblemSection />
      <AppIntroSection />
      <HowToSection />
      <TechStackSection />
      <SiteFooter />
    </main>
  )
}

"use client"

import { useEffect } from "react"
import Layout from "../components/Layout"
import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import SkillsSection from "../components/SkillsSection"
import ProjectsSection from "../components/ProjectsSection"
import EducationSection from "../components/EducationSection"
import ContactSection from "../components/ContactSection"
import Footer from "../components/Footer"

export default function HomePage() {
  useEffect(() => {
    // Set page title
    document.title = "Om Borle | Portfolio"
  }, [])

  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      <Footer/>
    </Layout>
  )
}

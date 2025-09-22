"use client";
import HomeSection from "../components/HomeSection";
import ServicesSection from "../components/AboutSection";
import WhyCoachesSection from "../components/WhyCoachesSection";
import TestimonialsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import PricingSection from "../components/PricingSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";


export default function Home() {

 
  return (
    <>
      
      <div className="min-h-screen bg-background text-foreground">
        <HomeSection />
        <ServicesSection />
        <WhyCoachesSection />
        <TestimonialsSection />
        <ProjectsSection />
        <PricingSection />
        <ContactSection />
        <Footer />
      </div></>

  );
}

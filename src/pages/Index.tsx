
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductsSection";
import FeaturesSection from "@/components/FeaturesSection";
import IndustrySection from "@/components/IndustrySection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const featuresRef = useRef<HTMLDivElement>(null);
  const industryRef = useRef<HTMLDivElement>(null);
  const productsRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const refMap: Record<string, React.RefObject<HTMLDivElement>> = {
        features: featuresRef,
        industry: industryRef,
        products: productsRef,
        projects: projectsRef,
        about: aboutRef,
        contact: contactRef
      };
      
      const targetRef = refMap[sectionId];
      if (targetRef && targetRef.current) {
        // Add a small delay to ensure DOM is fully loaded
        setTimeout(() => {
          targetRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      // Scroll to top when no hash is present
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <div ref={featuresRef}>
          <FeaturesSection />
        </div>
        <div ref={industryRef}>
          <IndustrySection />
        </div>
        <div ref={productsRef}>
          <ProductsSection />
        </div>
        <div ref={projectsRef}>
          <ProjectsSection />
        </div>
        <div ref={aboutRef}>
          <AboutSection />
        </div>
        <div ref={contactRef}>
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

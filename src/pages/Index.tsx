
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import IndustrySection from "@/components/IndustrySection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ProductShowcase from "@/components/ProductShowcase";

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

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  // Product showcase data with updated images
  const products = [
    {
      id: "yellow-lockers",
      title: "Κίτρινα Μεταλλικά Ντουλάπια",
      description: "Φωτεινά κίτρινα ντουλάπια με μαύρο πλαίσιο και μεταλλική κατασκευή, ιδανικά για παιδικούς σταθμούς, σχολικές εγκαταστάσεις και χαρούμενους χώρους.",
      image: "/lovable-uploads/00772ab6-6083-4b70-8f34-b4542e7c725b.png",
      type: "locker"
    },
    {
      id: "orange-white-locker",
      title: "Ντουλάπια Locker Πολλαπλών Θέσεων",
      description: "Κλασικά μεταλλικά ντουλάπια πολλαπλών θέσεων με πορτοκαλί πόρτες και λευκό πλαίσιο για επαγγελματικούς χώρους και αποδυτήρια.",
      image: "/lovable-uploads/64d9716d-261a-44b6-b469-c4dff49cea91.png",
      type: "locker"
    },
    {
      id: "red-school-lockers",
      title: "Κόκκινα Σχολικά Ντουλάπια",
      description: "Ανθεκτικά μεταλλικά ντουλάπια σε κόκκινο χρώμα με μαύρο πλαίσιο, σχεδιασμένα για σχολεία και εκπαιδευτικά ιδρύματα με αριθμημένες θήκες.",
      image: "/lovable-uploads/3bb3c4b3-5ff5-4519-9c92-967be1786ba4.png",
      type: "locker"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      <Navbar />
      <main className="overflow-hidden">
        <HeroSection />
        
        <motion.div 
          ref={aboutRef}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <AboutSection />
        </motion.div>
        
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProductShowcase 
            product={products[0]}
            alignment="right"
          />
        </motion.div>
        
        <motion.div 
          ref={featuresRef}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FeaturesSection />
        </motion.div>
        
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProductShowcase 
            product={products[1]}
            alignment="left"
          />
        </motion.div>
        
        <motion.div 
          ref={industryRef}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <IndustrySection />
        </motion.div>
        
        <motion.div 
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProductShowcase 
            product={products[2]}
            alignment="right"
          />
        </motion.div>
        
        <motion.div 
          ref={projectsRef}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ProjectsSection />
        </motion.div>
        
        <motion.div 
          ref={contactRef}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          id="contact"
        >
          <ContactSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

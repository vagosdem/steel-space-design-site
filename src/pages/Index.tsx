
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

  // Product showcase data
  const products = [
    {
      id: "white-brown-locker",
      title: "Ντουλάπια Λευκά με Καφέ Πλαίσιο",
      description: "Κλασικά μεταλλικά ντουλάπια τριών θέσεων με λευκές πόρτες και καφέ πλαίσιο για επαγγελματικούς χώρους.",
      image: "/lovable-uploads/d6bb8bc5-c886-4cd5-8dda-0b5c84a7e94e.png",
      type: "locker"
    },
    {
      id: "metal-cabinet",
      title: "Μεταλλική Ντουλάπα με Τζάμια",
      description: "Επαγγελματική μεταλλική ντουλάπα με τζάμια, ιδανική για αρχειοθέτηση και αποθήκευση σε γραφεία και επαγγελματικούς χώρους.",
      image: "/lovable-uploads/0f7b939c-3012-47f1-8cc8-13033e7dd152.png",
      type: "cabinet"
    },
    {
      id: "yellow-locker",
      title: "Κίτρινα Μεταλλικά Ντουλάπια",
      description: "Φωτεινά κίτρινα ντουλάπια με καφέ πλαίσιο, ιδανικά για παιδικούς σταθμούς και σχολικές εγκαταστάσεις.",
      image: "/lovable-uploads/f308ce90-e4fe-4c0d-b442-8d3bed0566f3.png",
      type: "drawer"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main>
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
        >
          <ContactSection />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;

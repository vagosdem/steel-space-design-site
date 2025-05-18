
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

  // Product showcase data with updated images - changed order to put the second image first
  const products = [
    {
      id: "metal-cabinet",
      title: "Μεταλλική Ντουλάπα Αρχειοθέτησης",
      description: "Επαγγελματική μεταλλική ντουλάπα αρχειοθέτησης με γυάλινες πόρτες, ιδανική για γραφεία, ιατρεία και επαγγελματικούς χώρους.",
      image: "/lovable-uploads/c1ccbc5f-2ae1-4c2b-98b3-88300b22ae67.png",
      type: "cabinet"
    },
    {
      id: "white-brown-locker",
      title: "Ντουλάπια Locker Πολλαπλών Θέσεων",
      description: "Κλασικά μεταλλικά ντουλάπια πολλαπλών θέσεων με πορτοκαλί πόρτες και λευκό πλαίσιο για επαγγελματικούς χώρους και αποδυτήρια.",
      image: "/lovable-uploads/64d9716d-261a-44b6-b469-c4dff49cea91.png",
      type: "locker"
    },
    {
      id: "metal-drawers",
      title: "Συρταριέρες Μεταλλικές Πολλαπλών Χρωμάτων",
      description: "Μεταλλικές συρταριέρες σε ποικιλία χρωμάτων, ιδανικές για αρχειοθέτηση εγγράφων και αποθήκευση αντικειμένων σε επαγγελματικούς χώρους.",
      image: "/lovable-uploads/28a84624-2235-4f42-a8df-59c526397527.png",
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

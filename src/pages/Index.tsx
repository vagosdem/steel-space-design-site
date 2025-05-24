
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import IndustrySection from "@/components/IndustrySection";
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
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const refMap: Record<string, React.RefObject<HTMLDivElement>> = {
        features: featuresRef,
        industry: industryRef,
        products: productsRef,
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
      id: "modern-office-storage",
      title: "Μοντέρνες Λύσεις Γραφείου",
      description: "Κομψά μεταλλικά ντουλάπια με καθαρές γραμμές και μοντέρνο design, ιδανικά για σύγχρονους χώρους γραφείου και επαγγελματικούς χώρους.",
      image: "/lovable-uploads/f308ce90-e4fe-4c0d-b442-8d3bed0566f3.png",
      type: "storage"
    },
    {
      id: "colorful-educational-lockers",
      title: "Εκπαιδευτικά Ντουλάπια Πολλαπλών Χρωμάτων",
      description: "Δημιουργικά και λειτουργικά ντουλάπια σε έντονα χρώματα, σχεδιασμένα ειδικά για σχολεία, πανεπιστήμια και εκπαιδευτικά ιδρύματα.",
      image: "/lovable-uploads/0f7b939c-3012-47f1-8cc8-13033e7dd152.png",
      type: "locker"
    },
    {
      id: "professional-storage-solutions",
      title: "Επαγγελματικές Αποθηκευτικές Λύσεις",
      description: "Ανθεκτικά και πρακτικά ντουλάπια για επαγγελματική χρήση, με δυνατότητες εξατομίκευσης για κάθε είδους επιχειρηματικό χώρο.",
      image: "/lovable-uploads/28a84624-2235-4f42-a8df-59c526397527.png",
      type: "cabinet"
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

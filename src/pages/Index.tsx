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
import SEOHead from "@/components/SEOHead";
import { useMobileOptimization } from "@/hooks/use-mobile-optimization";

const Index = () => {
  const location = useLocation();
  const { isMobile } = useMobileOptimization();
  
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
          targetRef.current?.scrollIntoView({
            behavior: 'smooth'
          });
        }, 100);
      }
    } else {
      // Scroll to top when no hash is present
      window.scrollTo(0, 0);
    }
  }, [location.hash]);

  // Animation variants for sections - reduced on mobile
  const sectionVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: isMobile ? 0.3 : 0.6
      }
    }
  };

  // Updated product showcase data with new WebP images
  const products = [{
    id: "professional-storage-cabinet",
    title: "Επαγγελματικό Ντουλάπι Αποθήκευσης",
    description: "Ανθεκτικό μεταλλικό ντουλάπι με πολλαπλές θέσεις, ιδανικό για επαγγελματικούς χώρους και γραφεία με υψηλές απαιτήσεις οργάνωσης.",
    image: "/lovable-uploads/IMG_10252.webp",
    type: "cabinet"
  }, {
    id: "multi-door-locker-system",
    title: "Σύστημα Πολλαπλών Ντουλαπιών",
    description: "Μοντέρνο σύστημα ντουλαπιών με πολλαπλές πόρτες και θέσεις, σχεδιασμένο για αποδυτήρια, γυμναστήρια και εκπαιδευτικά ιδρύματα.",
    image: "/lovable-uploads/IMG_13742.webp",
    type: "locker"
  }, {
    id: "industrial-storage-solution",
    title: "Βιομηχανική Λύση Αποθήκευσης",
    description: "Ανθεκτικά μεταλλικά ντουλάπια για βιομηχανικούς χώρους, με έμφαση στην αντοχή και τη λειτουργικότητα σε απαιτητικά περιβάλλοντα.",
    image: "/lovable-uploads/IMG_23802.webp",
    type: "storage"
  }];

  return (
    <>
      <SEOHead 
        title="Stereon - Μεταλλικά Ντουλάπια & Ντουλάπες Ποιότητας | Επαγγελματικές Λύσεις Αποθήκευσης"
        description="Κατασκευή και πώληση μεταλλικών ντουλαπιών υψηλής ποιότητας. Ντουλάπια locker, επαγγελματικά συστήματα αποθήκευσης, αποδυτήρια για σχολεία, γραφεία, γυμναστήρια. Ποιότητα Made in Greece."
        canonical="/"
        image="/lovable-uploads/IMG_054822.webp"
      />
      <div className="flex flex-col min-h-screen bg-white overflow-hidden">
        <Navbar />
        <main className="overflow-hidden pt-20">
          <HeroSection />
          
          <motion.section ref={aboutRef} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{
            once: true
          }} aria-labelledby="about-heading">
            <AboutSection />
          </motion.section>
          
          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{
            once: true
          }} aria-labelledby="products-heading">
            <ProductShowcase product={products[0]} alignment="right" />
          </motion.section>
          
          <motion.section ref={featuresRef} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{
            once: true
          }} aria-labelledby="features-heading">
            <FeaturesSection />
          </motion.section>
          
          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{
            once: true
          }} aria-labelledby="products-heading-2">
            <ProductShowcase product={products[1]} alignment="left" />
          </motion.section>
          
          <motion.section ref={industryRef} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{
            once: true
          }} aria-labelledby="industry-heading">
            <IndustrySection />
          </motion.section>
          
          <motion.section variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{
            once: true
          }} aria-labelledby="products-heading-3">
            <ProductShowcase product={products[2]} alignment="right" />
          </motion.section>
          
          <motion.section ref={contactRef} variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{
            once: true
          }} id="contact" aria-labelledby="contact-heading" className="py-0">
            <ContactSection />
          </motion.section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

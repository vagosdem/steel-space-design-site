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

  // Animation variants for sections
  const sectionVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  // Updated product showcase data with new images
  const products = [{
    id: "industrial-storage-cabinet",
    title: "Βιομηχανικό Ντουλάπι Αποθήκευσης",
    description: "Ανθεκτικό μεταλλικό ντουλάπι με γυάλινες πόρτες, ιδανικό για βιομηχανικούς χώρους και εργαστήρια με υψηλές απαιτήσεις αποθήκευσης.",
    image: "/lovable-uploads/c142e30d-546a-43fe-bbe9-9367ce9e5bb1.png",
    type: "cabinet"
  }, {
    id: "multi-unit-lockers-orange",
    title: "Πολλαπλά Ντουλάπια Πορτοκαλί",
    description: "Σύστημα πολλαπλών ντουλαπιών σε έντονο πορτοκαλί χρώμα, σχεδιασμένο για αποδυτήρια, γυμναστήρια και εκπαιδευτικά ιδρύματα.",
    image: "/lovable-uploads/64d9716d-261a-44b6-b469-c4dff49cea91.png",
    type: "locker"
  }, {
    id: "blue-metallic-storage",
    title: "Μπλε Μεταλλικά Ντουλάπια Αποθήκευσης",
    description: "Κομψά μεταλλικά ντουλάπια σε μπλε απόχρωση με αριθμημένες θέσεις, ιδανικά για οργανωμένους επαγγελματικούς χώρους.",
    image: "/lovable-uploads/82e9823c-05e0-4a3d-bb0e-1a8079b79bf8.png",
    type: "storage"
  }];
  return <div className="flex flex-col min-h-screen bg-white overflow-hidden">
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
    </div>;
};
export default Index;
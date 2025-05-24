
import { motion } from "framer-motion";
import HeroContent from "./HeroContent";
import HeroCarousel from "./HeroCarousel";
import HeroDescription from "./HeroDescription";

export default function HeroSection() {
  const productImages = [
    "/lovable-uploads/IMG_23802.webp",
    "/lovable-uploads/IMG_99002.webp",
    "/lovable-uploads/IMG_97682.webp",
    "/lovable-uploads/IMG_054822.webp"
  ];

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 80; // Adjusted offset for better positioning
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="bg-white text-metal-900 pt-24 pb-16 overflow-hidden">
      <div className="container-section text-center">
        <HeroContent onContactClick={scrollToContact} />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.3 }} 
          className="mt-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          <HeroCarousel images={productImages} />
          <HeroDescription onContactClick={scrollToContact} />
        </motion.div>
      </div>
    </section>
  );
}

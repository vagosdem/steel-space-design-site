
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef, TouchEvent } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const isMobile = useIsMobile();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Updated product images array with critical images first for better LCP
  const productImages = [
    "/lovable-uploads/ea0663a1-83d9-4b6e-bd66-c2a1b01af9da.png",
    "/lovable-uploads/d45ac80e-568d-4711-afdf-441b647c88bd.png", 
    "/lovable-uploads/82f9ab23-6721-4a6e-90e5-13cf0745af0c.png",
    "/lovable-uploads/IMG_13722.webp", 
    "/lovable-uploads/IMG_21202.webp",
    "/lovable-uploads/IMG_97682.webp",
    "/lovable-uploads/IMG_10252.webp",
    "/lovable-uploads/IMG_13742.webp",
    "/lovable-uploads/IMG_23802.webp"
  ];

  // Touch handling for mobile swipe
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const difference = touchStartX.current - touchEndX.current;
    
    // If swipe distance is significant enough (more than 50px)
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        // Swiped left - go to next
        setCurrentImage((prev) => (prev + 1) % productImages.length);
      } else {
        // Swiped right - go to previous
        setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
      }
    }
  };

  // Navigate to previous image
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  // Navigate to next image
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  return (
    <section className="bg-white text-metal-900 pt-24 pb-16 overflow-hidden">
      {/* Skip navigation link for accessibility */}
      <a href="#main-content" className="skip-nav">
        Μετάβαση στο κύριο περιεχόμενο
      </a>
      
      <div className="container-section text-center" id="main-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4 }} 
          className="space-y-6 max-w-4xl mx-auto"
        >
          <h1 className={`font-medium tracking-tight ${
            isMobile 
              ? 'text-2xl sm:text-3xl' 
              : 'text-4xl md:text-5xl lg:text-6xl'
          } text-metal-900`}>
            <span className="block">Προσαρμοσμένες Μεταλλικές</span>
            <span className="block">Λύσεις Αποθήκευσης</span>
            <span className="text-blue-600 block">και Οργάνωσης</span>
          </h1>
          <p className={`text-gray-600 max-w-3xl mx-auto ${
            isMobile ? 'text-base' : 'text-lg md:text-xl'
          }`}>
            Custom lockers, συρταριέρες πολλαπλών θέσεων & industrial αποθηκευτικές λύσεις, 
            σχεδιασμένες και κατασκευασμένες στην Ελλάδα.
          </p>
          <div className="flex justify-center pt-4">
            <Link to="#contact">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl touch-target">
                Ζητήστε Προσφορά
              </Button>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5, delay: 0.2 }} 
          className="mt-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          <div 
            ref={carouselRef}
            className={`md:w-1/2 relative w-full ${
              isMobile ? 'h-[250px]' : 'h-[300px] sm:h-[400px]'
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-label="Carousel προϊόντων"
          >
            {/* Navigation arrows with improved mobile handling */}
            <button 
              onClick={prevImage} 
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition-all ${
                isMobile 
                  ? 'w-12 h-12 active:scale-95 active:bg-gray-100' 
                  : 'w-10 h-10 hover:scale-105'
              }`}
              aria-label="Προηγούμενη εικόνα"
              style={{ touchAction: 'manipulation' }}
            >
              <ArrowLeft size={isMobile ? 20 : 16} className="mx-auto" />
            </button>
            
            <button 
              onClick={nextImage} 
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition-all ${
                isMobile 
                  ? 'w-12 h-12 active:scale-95 active:bg-gray-100' 
                  : 'w-10 h-10 hover:scale-105'
              }`}
              aria-label="Επόμενη εικόνα"
              style={{ touchAction: 'manipulation' }}
            >
              <ArrowRight size={isMobile ? 20 : 16} className="mx-auto" />
            </button>
            
            {/* Optimized images with better loading priorities */}
            {productImages.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Προϊόν showcase ${index + 1}`} 
                width={isMobile ? "250" : "600"}
                height={isMobile ? "250" : "400"}
                loading={index < 3 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : index < 3 ? "high" : "low"}
                decoding={index < 3 ? "sync" : "async"}
                className={`w-full h-auto object-contain mx-auto rounded-2xl p-0 absolute top-0 left-0 ${
                  currentImage === index ? "opacity-100" : "opacity-0"
                } transition-opacity duration-1000`}
                style={{ 
                  maxHeight: isMobile ? "250px" : "400px",
                  willChange: currentImage === index ? 'auto' : 'unset'
                }}
              />
            ))}
            
            {/* Much smaller indicators positioned at the bottom with more spacing */}
            <div className="absolute -bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-200 ${
                    currentImage === index 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-400 hover:bg-gray-500 hover:scale-110'
                  }`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Μετάβαση στη διαφάνεια ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 text-left space-y-4">
            <h2 className={`font-semibold text-metal-900 ${
              isMobile ? 'text-xl' : 'text-2xl'
            }`}>Ποιοτικές Λύσεις Αποθήκευσης</h2>
            <p className={`text-gray-600 ${isMobile ? 'text-sm' : 'text-base'}`}>
              Τα μεταλλικά ντουλάπια και οι συρταριέρες μας προσφέρουν ανθεκτικές και αισθητικά 
              καλαίσθητες λύσεις για την οργάνωση και αποθήκευση εγγράφων, υλικών και προσωπικών 
              αντικειμένων στους επαγγελματικούς σας χώρους.
            </p>
            <p className={`text-gray-600 ${isMobile ? 'text-sm' : 'text-base'}`}>
              Με εξατομικευμένες επιλογές διαστάσεων, χρωμάτων και διαμορφώσεων, σχεδιάζουμε 
              λύσεις που ανταποκρίνονται ακριβώς στις ανάγκες σας.
            </p>
            <Link to="#contact">
              <Button className={`flex items-center gap-2 rounded-xl mt-2 bg-blue-600 hover:bg-blue-700 touch-target ${
                isMobile ? 'text-sm px-4 py-2' : 'px-6 py-3'
              }`}>
                Θέλω και εγώ παρόμοια λύση 
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

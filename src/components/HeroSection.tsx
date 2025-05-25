
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef, TouchEvent } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const [autoAdvancePaused, setAutoAdvancePaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const pauseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isMobile = useIsMobile();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Extended product images array with 7 total images (no duplicates)
  const productImages = [
    "/lovable-uploads/IMG_054822.webp",
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
    pauseAutoAdvance();
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

  // Function to clear intervals and pause auto-advance
  const pauseAutoAdvance = () => {
    setAutoAdvancePaused(true);
    
    // Clear the auto-advance interval immediately
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    
    // Clear any existing pause timer
    if (pauseTimerRef.current) {
      clearTimeout(pauseTimerRef.current);
    }
    
    // Set new timer to resume auto-advance after 8 seconds
    pauseTimerRef.current = setTimeout(() => {
      setAutoAdvancePaused(false);
    }, 8000);
  };

  // Navigate to previous image - fixed to cycle through all images
  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
    pauseAutoAdvance();
  };

  // Navigate to next image - fixed to cycle through all images  
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
    pauseAutoAdvance();
  };

  useEffect(() => {
    // Clear any existing interval first
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    // Only start auto-advance if not paused
    if (!autoAdvancePaused) {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % productImages.length);
      }, 5000); // Change image every 5 seconds
    }
    
    // Clean up on unmount or dependency change
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (pauseTimerRef.current) {
        clearTimeout(pauseTimerRef.current);
      }
    };
  }, [autoAdvancePaused, productImages.length]);

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
          <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl text-metal-900 tracking-tight">
            Μεταλλικές Ντουλάπες & Συρταριέρες Αρχειοθέτησης
            <br className="hidden sm:inline" />
            <span className="text-blue-600"> για Επαγγελματικούς Χώρους</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
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
            className="md:w-1/2 relative h-[300px] sm:h-[400px] w-full"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-label="Carousel προϊόντων"
          >
            {/* Navigation arrows with improved mobile handling */}
            <button 
              onClick={prevImage} 
              className={`absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition-all ${
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
              className={`absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition-all ${
                isMobile 
                  ? 'w-12 h-12 active:scale-95 active:bg-gray-100' 
                  : 'w-10 h-10 hover:scale-105'
              }`}
              aria-label="Επόμενη εικόνα"
              style={{ touchAction: 'manipulation' }}
            >
              <ArrowRight size={isMobile ? 20 : 16} className="mx-auto" />
            </button>
            
            {/* Images with explicit dimensions and lazy loading */}
            {productImages.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Προϊόν showcase ${index + 1}`} 
                width={isMobile ? "300" : "600"}
                height={isMobile ? "300" : "400"}
                loading={index === 0 ? "eager" : "lazy"}
                className={`w-full h-auto object-contain mx-auto rounded-2xl p-0 absolute top-0 left-0 ${
                  currentImage === index ? "opacity-100" : "opacity-0"
                } transition-opacity duration-1000`}
                style={{ maxHeight: isMobile ? "300px" : "400px" }}
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
                  onClick={() => {
                    setCurrentImage(index);
                    pauseAutoAdvance();
                  }}
                  aria-label={`Μετάβαση στη διαφάνεια ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 text-left space-y-4">
            <h2 className="text-2xl font-semibold text-metal-900">Ποιοτικές Λύσεις Αποθήκευσης</h2>
            <p className="text-gray-600">
              Τα μεταλλικά ντουλάπια και οι συρταριέρες μας προσφέρουν ανθεκτικές και αισθητικά 
              καλαίσθητες λύσεις για την οργάνωση και αποθήκευση εγγράφων, υλικών και προσωπικών 
              αντικειμένων στους επαγγελματικούς σας χώρους.
            </p>
            <p className="text-gray-600">
              Με εξατομικευμένες επιλογές διαστάσεων, χρωμάτων και διαμορφώσεων, σχεδιάζουμε 
              λύσεις που ανταποκρίνονται ακριβώς στις ανάγκες σας.
            </p>
            <Link to="#contact">
              <Button className="flex items-center gap-2 rounded-xl mt-2 bg-blue-600 hover:bg-blue-700 touch-target">
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

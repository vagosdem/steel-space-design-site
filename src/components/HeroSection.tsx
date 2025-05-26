
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useRef, TouchEvent, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const isMobile = useIsMobile();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Optimized product images array - removed first two duplicates, keeping only WebP images
  const productImages = [
    "/lovable-uploads/IMG_054822.webp",
    "/lovable-uploads/IMG_13722.webp", 
    "/lovable-uploads/IMG_21202.webp",
    "/lovable-uploads/IMG_97682.webp",
    "/lovable-uploads/IMG_10252.webp",
    "/lovable-uploads/IMG_13742.webp",
    "/lovable-uploads/IMG_23802.webp",
    "/lovable-uploads/IMG_99002.webp"
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % productImages.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [productImages.length]);

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
    
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        setCurrentImage((prev) => (prev + 1) % productImages.length);
      } else {
        setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
      }
    }
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productImages.length);
  };

  return (
    <section className="bg-white text-metal-900 pt-20 pb-12 overflow-hidden">
      <a href="#main-content" className="skip-nav">
        Μετάβαση στο κύριο περιεχόμενο
      </a>
      
      <div className="container-section text-center" id="main-content">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.3 }} 
          className="space-y-4 max-w-4xl mx-auto"
        >
          <h1 className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-metal-900 tracking-tight leading-tight">
            <span className="block">Μεταλλικές Ντουλάπες &</span>
            <span className="block">Συρταριέρες Αρχειοθέτησης</span>
            <span className="text-blue-600 block">για Επαγγελματικούς Χώρους</span>
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Custom lockers, συρταριέρες πολλαπλών θέσεων & industrial αποθηκευτικές λύσεις, 
            σχεδιασμένες και κατασκευασμένες στην Ελλάδα.
          </p>
          <div className="flex justify-center pt-2">
            <Link to="#contact">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 text-base rounded-xl touch-target">
                Ζητήστε Προσφορά
              </Button>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.4, delay: 0.1 }} 
          className="mt-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6"
        >
          <div 
            ref={carouselRef}
            className="md:w-1/2 relative w-full h-[300px] sm:h-[400px] md:h-[450px]"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-label="Carousel προϊόντων"
          >
            <button 
              onClick={prevImage} 
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-md transition-all w-10 h-10 sm:w-12 sm:h-12 active:scale-95"
              aria-label="Προηγούμενη εικόνα"
              style={{ touchAction: 'manipulation' }}
            >
              <ArrowLeft size={16} className="mx-auto" />
            </button>
            
            <button 
              onClick={nextImage} 
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-2 sm:p-3 rounded-full shadow-md transition-all w-10 h-10 sm:w-12 sm:h-12 active:scale-95"
              aria-label="Επόμενη εικόνα"
              style={{ touchAction: 'manipulation' }}
            >
              <ArrowRight size={16} className="mx-auto" />
            </button>
            
            {productImages.map((image, index) => {
              // Apply proper sizing for each image
              let imageClass = "w-full h-full object-contain mx-auto rounded-2xl absolute top-0 left-0";
              
              // Make IMG_10252.webp and IMG_13742.webp bigger
              if (image.includes('IMG_10252') || image.includes('IMG_13742')) {
                imageClass += " scale-110";
              }
              
              // Fix the first image (IMG_054822.webp) to prevent stretching
              if (image.includes('IMG_054822')) {
                imageClass = "w-auto h-full max-w-full max-h-full object-contain mx-auto rounded-2xl absolute top-0 left-1/2 transform -translate-x-1/2";
              }
              
              return (
                <img 
                  key={index}
                  src={image} 
                  alt={`Προϊόν showcase ${index + 1}`} 
                  width="500"
                  height="400"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "low"}
                  className={`${imageClass} ${
                    currentImage === index ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-500`}
                  style={{ 
                    willChange: currentImage === index ? 'auto' : 'unset'
                  }}
                />
              );
            })}
            
            <div className="absolute -bottom-4 left-0 right-0 flex justify-center gap-1.5 z-10">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    currentImage === index 
                      ? 'bg-blue-600 scale-125' 
                      : 'bg-gray-400 hover:bg-gray-500'
                  }`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Μετάβαση στη διαφάνεια ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 text-left space-y-3">
            <h2 className="font-semibold text-metal-900 text-lg sm:text-xl md:text-2xl">
              Ποιοτικές Λύσεις Αποθήκευσης
            </h2>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Τα μεταλλικά ντουλάπια και οι συρταριέρες μας προσφέρουν ανθεκτικές και αισθητικά 
              καλαίσθητες λύσεις για την οργάνωση και αποθήκευση εγγράφων, υλικών και προσωπικών 
              αντικειμένων στους επαγγελματικούς σας χώρους.
            </p>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              Με εξατομικευμένες επιλογές διαστάσεων, χρωμάτων και διαμορφώσεων, σχεδιάζουμε 
              λύσεις που ανταποκρίνονται ακριβώς στις ανάγκες σας.
            </p>
            <Link to="#contact">
              <Button className="flex items-center gap-2 rounded-xl mt-3 bg-blue-600 hover:bg-blue-700 touch-target text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3">
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

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef, TouchEvent } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const isMobile = useIsMobile();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const productImages = [
    "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "/lovable-uploads/5c723acb-8f8a-443f-83b6-3a43571ccdb3.png",
    "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "/lovable-uploads/3786273d-64ad-4ed4-945c-1886fa8c5957.png"
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % productImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-white text-metal-900 pt-24 pb-16 overflow-hidden">
      <div className="container-section text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }} 
          className="space-y-6 max-w-4xl mx-auto"
        >
          <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl text-metal-900 tracking-tight">
            Μεταλλικές Ντουλάπες & Συρταριέρες Αρχειοθέτησης
            <br className="hidden sm:inline" />
            <span className="text-blue-600"> για Επαγγελματικούς Χώρους</span>
          </h1>
          <p className="text-lg md:text-xl text-metal-600 max-w-3xl mx-auto">
            Custom lockers, συρταριέρες πολλαπλών θέσεων & industrial αποθηκευτικές λύσεις, 
            σχεδιασμένες και κατασκευασμένες στην Ελλάδα.
          </p>
          <div className="flex justify-center pt-4">
            <a href="#contact">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 text-lg rounded-xl">
                Ζητήστε Προσφορά
              </Button>
            </a>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.3 }} 
          className="mt-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          <div 
            ref={carouselRef}
            className="md:w-1/2 relative h-[300px] sm:h-[400px] w-full"
            onTouchStart={(e: TouchEvent<HTMLDivElement>) => {
              const touchStartX = e.touches[0].clientX;
              (e.currentTarget as any).touchStartX = touchStartX;
            }}
            onTouchMove={(e: TouchEvent<HTMLDivElement>) => {
              const touchEndX = e.touches[0].clientX;
              (e.currentTarget as any).touchEndX = touchEndX;
            }}
            onTouchEnd={(e: TouchEvent<HTMLDivElement>) => {
              const touchStartX = (e.currentTarget as any).touchStartX;
              const touchEndX = (e.currentTarget as any).touchEndX;
              const difference = touchStartX - touchEndX;
              
              if (Math.abs(difference) > 50) {
                if (difference > 0) {
                  setCurrentImage((prev) => (prev + 1) % productImages.length);
                } else {
                  setCurrentImage((prev) => (prev - 1 + productImages.length) % productImages.length);
                }
              }
            }}
          >
            {/* Navigation arrows */}
            <button 
              onClick={prevImage} 
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 p-2 rounded-full shadow-md transition-all"
              aria-label="Previous image"
            >
              <ArrowLeft size={24} />
            </button>
            
            <button 
              onClick={nextImage} 
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 p-2 rounded-full shadow-md transition-all"
              aria-label="Next image"
            >
              <ArrowRight size={24} />
            </button>
            
            {/* Images */}
            {productImages.map((image, index) => (
              <img 
                key={index}
                src={image} 
                alt={`Product showcase ${index + 1}`} 
                className={`w-full h-auto object-contain mx-auto rounded-2xl p-0 absolute top-0 left-0 ${
                  currentImage === index ? "opacity-100" : "opacity-0"
                } transition-opacity duration-1000`}
                style={{ maxHeight: isMobile ? "300px" : "400px" }}
              />
            ))}
            
            {/* Indicators */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2 z-10">
              {productImages.map((_, index) => (
                <button
                  key={index}
                  className={`w-2.5 h-2.5 rounded-full ${currentImage === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          <div className="md:w-1/2 text-left space-y-4">
            <h2 className="text-2xl font-semibold text-metal-900">Ποιοτικές Λύσεις Αποθήκευσης</h2>
            <p className="text-metal-600">
              Τα μεταλλικά ντουλάπια και οι συρταριέρες μας προσφέρουν ανθεκτικές και αισθητικά 
              καλαίσθητες λύσεις για την οργάνωση και αποθήκευση εγγράφων, υλικών και προσωπικών 
              αντικειμένων στους επαγγελματικούς σας χώρους.
            </p>
            <p className="text-metal-600">
              Με εξατομικευμένες επιλογές διαστάσεων, χρωμάτων και διαμορφώσεων, σχεδιάζουμε 
              λύσεις που ανταποκρίνονται ακριβώς στις ανάγκες σας.
            </p>
            <a href="#contact">
              <Button className="flex items-center gap-2 rounded-lg mt-2 bg-blue-600 hover:bg-blue-700">
                Θέλω και εγώ παρόμοια λύση 
                <ArrowRight size={16} />
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

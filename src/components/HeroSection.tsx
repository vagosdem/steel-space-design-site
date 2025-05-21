import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef, TouchEvent } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const isMobile = useIsMobile();
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const productImages = [
    "/lovable-uploads/64d9716d-261a-44b6-b469-c4dff49cea91.png",
    "/lovable-uploads/00772ab6-6083-4b70-8f34-b4542e7c725b.png",
    "/lovable-uploads/3bb3c4b3-5ff5-4519-9c92-967be1786ba4.png",
    "/lovable-uploads/c1ccbc5f-2ae1-4c2b-98b3-88300b22ae67.png"
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
            Premium Steel Lockers & Custom Storage Solutions
            <br className="hidden sm:inline" />
            <span className="text-blue-600"> for Your Space</span>
          </h1>
          <p className="text-lg md:text-xl text-metal-600 max-w-3xl mx-auto">
            High-quality steel lockers and custom closets for homes, gyms, and offices. 
            Durable, secure, and stylish storage solutions with free quotes and fast delivery.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link to="#contact">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Get Your Custom Locker Today →
              </Button>
            </Link>
            <Link to="#projects">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-metal-300 px-8 py-6 text-lg text-slate-50 bg-zinc-950 hover:bg-zinc-800 rounded-xl">
                View Our Projects
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm font-medium">Free Quotes</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-medium">Fast Delivery</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span className="text-sm font-medium">10-Year Warranty</span>
            </div>
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
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
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
            <Link to="#contact">
              <Button className="flex items-center gap-2 rounded-xl mt-2 bg-blue-600 hover:bg-blue-700">
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


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
  
  // Updated product images array with corresponding captions and links
  const productSlides = [
    {
      image: "/lovable-uploads/ea0663a1-83d9-4b6e-bd66-c2a1b01af9da.png",
      title: "Μεταλλικοί Lockers Βαρέως Τύπου για Βιομηχανική Χρήση",
      description: "Ανθεκτικοί lockers για απαιτητικά βιομηχανικά περιβάλλοντα",
      link: "/products?category=lockers"
    },
    {
      image: "/lovable-uploads/d45ac80e-568d-4711-afdf-441b647c88bd.png",
      title: "Πολύχρωμες Μεταλλικές Συρταριέρες Αρχειοθέτησης Γραφείου",
      description: "Οργανωμένη αποθήκευση εγγράφων με στυλ και λειτουργικότητα",
      link: "/products?category=filing-cabinets"
    },
    {
      image: "/lovable-uploads/82f9ab23-6721-4a6e-90e5-13cf0745af0c.png",
      title: "Custom Μεταλλικά Ντουλάπια με Εξατομικευμένες Διαστάσεις",
      description: "Προσαρμοσμένες λύσεις για κάθε χώρο και ανάγκη",
      link: "/products?category=cabinets"
    },
    {
      image: "/lovable-uploads/IMG_13722.webp",
      title: "Επαγγελματικές Λύσεις Αποθήκευσης για Γραφεία",
      description: "Μοντέρνα σχεδίαση για σύγχρονα επαγγελματικά περιβάλλοντα",
      link: "/products?category=cabinets"
    },
    {
      image: "/lovable-uploads/IMG_21202.webp",
      title: "Βιομηχανικά Ντουλάπια Υψηλής Αντοχής",
      description: "Κατασκευασμένα για μακροχρόνια χρήση σε δύσκολες συνθήκες",
      link: "/products?category=lockers"
    },
    {
      image: "/lovable-uploads/IMG_97682.webp",
      title: "Συστήματα Οργάνωσης για Εκπαιδευτικά Ιδρύματα",
      description: "Ασφαλείς και λειτουργικές λύσεις για σχολεία και πανεπιστήμια",
      link: "/products?category=lockers"
    },
    {
      image: "/lovable-uploads/IMG_10252.webp",
      title: "Μεταλλικές Συρταριέρες Πολλαπλών Θέσεων",
      description: "Μέγιστη χωρητικότητα και οργάνωση σε συμπαγή σχεδίαση",
      link: "/products?category=filing-cabinets"
    },
    {
      image: "/lovable-uploads/IMG_13742.webp",
      title: "Lockers Αποδυτηρίων και Γυμναστηρίων",
      description: "Ανθεκτικές λύσεις για χώρους υψηλής χρήσης",
      link: "/products?category=lockers"
    },
    {
      image: "/lovable-uploads/IMG_23802.webp",
      title: "Βιομηχανικά Συστήματα Αποθήκευσης",
      description: "Ειδικά σχεδιασμένα για βαριά βιομηχανική χρήση",
      link: "/products?category=cabinets"
    }
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
    
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        setCurrentImage((prev) => (prev + 1) % productSlides.length);
      } else {
        setCurrentImage((prev) => (prev - 1 + productSlides.length) % productSlides.length);
      }
    }
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + productSlides.length) % productSlides.length);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % productSlides.length);
  };

  const currentSlide = productSlides[currentImage];

  return (
    <section className="bg-white text-metal-900 pt-24 pb-16 overflow-hidden">
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
              isMobile ? 'h-[300px]' : 'h-[350px] sm:h-[450px]'
            }`}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            role="region"
            aria-label="Carousel προϊόντων"
          >
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
            
            {/* Clickable images with dynamic captions */}
            {productSlides.map((slide, index) => (
              <div key={index} className={`absolute top-0 left-0 w-full h-full ${
                currentImage === index ? "opacity-100" : "opacity-0"
              } transition-opacity duration-1000`}>
                <Link to={slide.link} className="block w-full h-full group">
                  <div className="relative w-full h-full">
                    <img 
                      src={slide.image} 
                      alt={slide.title} 
                      width={isMobile ? "300" : "650"}
                      height={isMobile ? "300" : "450"}
                      loading={index < 3 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : index < 3 ? "high" : "low"}
                      decoding={index < 3 ? "sync" : "async"}
                      className="w-full h-full object-contain rounded-2xl group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Dynamic caption overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-b-2xl p-4">
                      <h3 className={`text-white font-semibold ${
                        isMobile ? 'text-sm' : 'text-lg'
                      } mb-1`}>
                        {slide.title}
                      </h3>
                      <p className={`text-white/90 ${
                        isMobile ? 'text-xs' : 'text-sm'
                      }`}>
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
            
            {/* Indicators */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2 z-10">
              {productSlides.map((_, index) => (
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
            }`}>
              {currentSlide.title}
            </h2>
            <div className={`text-gray-600 space-y-3 ${isMobile ? 'text-sm' : 'text-base'}`}>
              <p>
                Τα μεταλλικά ντουλάπια, lockers και συρταριέρες μας προσφέρουν ανθεκτικές και αισθητικά 
                καλαίσθητες λύσεις για την οργάνωση και αποθήκευση εγγράφων, υλικών και προσωπικών 
                αντικειμένων στους επαγγελματικούς σας χώρους.
              </p>
              <p>
                <strong>Ιδανικές για βιομηχανίες, γραφεία, σχολεία, γυμναστήρια και νοσοκομεία.</strong> 
                Κατασκευασμένες από ενισχυμένο χάλυβα, εγγυώνται μακροχρόνια αντοχή και ασφάλεια.
              </p>
              <p>
                Με εξατομικευμένες επιλογές διαστάσεων, χρωμάτων και διαμορφώσεων, σχεδιάζουμε 
                λύσεις που ανταποκρίνονται ακριβώς στις ανάγκες σας. 
                <strong> Υποστηρίζουμε μεγάλα έργα και προσφέρουμε λύσεις σε χονδρική βάση.</strong>
              </p>
            </div>
            <Link to={currentSlide.link}>
              <Button className={`flex items-center gap-2 rounded-xl mt-2 bg-blue-600 hover:bg-blue-700 touch-target ${
                isMobile ? 'text-sm px-4 py-2' : 'px-6 py-3'
              }`}>
                Δείτε περισσότερα για αυτό το προϊόν
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

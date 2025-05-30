
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
  
  // Updated product images array with correct product IDs that exist in the system
  const productSlides = [
    {
      image: "/lovable-uploads/ea0663a1-83d9-4b6e-bd66-c2a1b01af9da.png",
      title: "Λευκά Ντουλάπια 6 Θέσεων - Κλασική Κομψότητα για Αποδυτήρια & Γυμναστήρια",
      description: "Αυτά τα Λευκά Ντουλάπια 6 Θέσεων αποτελούν την κλασική επιλογή για αποδυτήρια, γυμναστήρια και σχολικούς χώρους που αναζητούν συνδυασμό καθαρής αισθητικής, εξαιρετικής αντοχής και λειτουργικότητας. Σχεδιασμένα για εντατική καθημερινή χρήση, προσφέρουν ασφαλή και οργανωμένη αποθήκευση προσωπικών αντικειμένων με την κομψότητα που χαρακτηρίζει τα ποιοτικά προϊόντα.",
      link: "/product/six-door-locker-white"
    },
    {
      image: "/lovable-uploads/d45ac80e-568d-4711-afdf-441b647c88bd.png",
      title: "Ντουλάπια με Γυάλινες Πόρτες 12 Θέσεων - Σύγχρονη Διαφάνεια για Επαγγελματικούς Χώρους",
      description: "Αυτά τα Ντουλάπια με Γυάλινες Πόρτες 12 Θέσεων αντιπροσωπεύουν την αιχμή της σύγχρονης σχεδίασης στον τομέα των επαγγελματικών συστημάτων αποθήκευσης. Σχεδιασμένα για χώρους που χρειάζονται οπτική επαφή με το περιεχόμενο διατηρώντας παράλληλα την ασφάλεια, προσφέρουν μια μοντέρνα λύση που συνδυάζει λειτουργικότητα με εντυπωσιακή αισθητική.",
      link: "/product/glass-door-lockers-12"
    },
    {
      image: "/lovable-uploads/82f9ab23-6721-4a6e-90e5-13cf0745af0c.png",
      title: "Σκούρα Γκρι Ντουλάπα Αποθήκευσης - Βιομηχανική Αντοχή με Επαγγελματική Εμφάνιση",
      description: "Αυτή η Σκούρα Γκρι Ντουλάπα Αποθήκευσης αποτελεί την ιδανική λύση για βιομηχανικούς χώρους και αποθήκες που απαιτούν συνδυασμό ανθεκτικότητας, ασφάλειας και επαγγελματικής εμφάνισης. Σχεδιασμένη για απαιτητικά περιβάλλοντα εργασίας, προσφέρει στιβαρή προστασία για εξοπλισμό, εργαλεία και υλικά υψηλής αξίας.",
      link: "/product/dark-gray-storage-cabinet"
    },
    {
      image: "/lovable-uploads/IMG_13722.webp",
      title: "Μεταλλική Ντουλάπα Locker Πολλαπλών Θέσεων - Προσαρμόσιμη σε Κάθε Χρώμα για Επαγγελματική Χρήση",
      description: "Αυτή η Μεταλλική Ντουλάπα Locker Πολλαπλών Θέσεων αποτελεί ένα εξαιρετικό δείγμα της τεχνογνωσίας και της προσαρμοστικότητας που προσφέρει η Stereon στις μεταλλικές κατασκευές. Σχεδιασμένη για να παρέχει ασφαλή και οργανωμένη αποθήκευση προσωπικών αντικειμένων ή εξοπλισμού, είναι ιδανική για γραφεία, εργοστάσια, σχολεία, γυμναστήρια, αποδυτήρια και κάθε χώρο που απαιτεί ατομικές θυρίδες αποθήκευσης.",
      link: "/product/modern-locker-system"
    },
    {
      image: "/lovable-uploads/IMG_13742.webp",
      title: "Μεταλλική Ντουλάπα Διπλής Πόρτας - Πλήρως Προσαρμόσιμη & Ανθεκτική για Κάθε Χώρο",
      description: "Αυτή η Μεταλλική Ντουλάπα Διπλής Πόρτας αποτελεί ένα εξαιρετικό δείγμα της υψηλής ποιότητας, της λειτουργικότητας και της αισθητικής προσαρμοστικότητας που προσφέρει η Stereom.gr στις μεταλλικές κατασκευές. Σχεδιασμένη για να καλύψει τις ανάγκες γραφείων, αποθηκών, εργαστηρίων, σχολείων, καταστημάτων, αλλά και οικιακών χώρων, αναδεικνύει την ικανότητά μας να δημιουργούμε στιβαρές λύσεις αποθήκευσης που ενσωματώνονται αρμονικά σε κάθε περιβάλλον.",
      link: "/product/multi-door-locker-system"
    },
    {
      image: "/lovable-uploads/IMG_21202.webp",
      title: "Πολύχρωμα Σχολικά Ντουλάπια - Εκπαιδευτικές Λύσεις Αποθήκευσης με Φωτεινά & Χαρούμενα Χρώματα",
      description: "Αυτά τα Πολύχρωμα Σχολικά Ντουλάπια αποτελούν την ιδανική λύση για εκπαιδευτικά ιδρύματα που επιθυμούν να συνδυάσουν τη λειτουργικότητα με τη δημιουργία ενός ζωντανού και εμπνευσμένου περιβάλλοντος μάθησης. Σχεδιασμένα ειδικά για παιδιά και εφήβους, προσφέρουν ασφαλή αποθήκευση προσωπικών αντικειμένων ενώ ταυτόχρονα εμψυχώνουν τους χώρους με τα φωτεινά τους χρώματα.",
      link: "/product/colorful-school-lockers"
    },
    {
      image: "/lovable-uploads/IMG_23802.webp",
      title: "Βιομηχανική Λύση Αποθήκευσης - Μεταλλικά Ντουλάπια Βαρέως Τύπου για Απαιτητικά Περιβάλλοντα",
      description: "Αυτή η Βιομηχανική Λύση Αποθήκευσης αντιπροσωπεύει την κορυφή της μηχανικής κατασκευής στον τομέα των μεταλλικών συστημάτων αποθήκευσης. Σχεδιασμένη ειδικά για βιομηχανικούς χώρους, εργοστάσια, αποθήκες και περιβάλλοντα με ακραίες συνθήκες, προσφέρει απαράμιλλη αντοχή και αξιοπιστία για την προστασία πολύτιμου εξοπλισμού και υλικών.",
      link: "/product/industrial-storage-solution"
    },
    {
      image: "/lovable-uploads/IMG_97682.webp",
      title: "Επαγγελματικά Ντουλάπια Γραφείου - Κομψές Λύσεις Αποθήκευσης για Σύγχρονους Εργασιακούς Χώρους",
      description: "Αυτά τα Επαγγελματικά Ντουλάπια Γραφείου αποτελούν την τέλεια σύνθεση κομψότητας, λειτουργικότητας και σύγχρονης αισθητικής για τους απαιτητικούς επαγγελματικούς χώρους. Σχεδιασμένα ειδικά για γραφεία, εταιρικά κτίρια, και σύγχρονα εργασιακά περιβάλλοντα, προσφέρουν διακριτική και ασφαλή αποθήκευση ενώ ενισχύουν την επαγγελματική εικόνα του χώρου.",
      link: "/product/professional-office-lockers"
    },
    {
      image: "/lovable-uploads/IMG_10252.webp",
      title: "Συμπαγή Αποθηκευτικά Συστήματα - Μέγιστη Αποδοτικότητα σε Ελάχιστο Χώρο",
      description: "Αυτά τα Συμπαγή Αποθηκευτικά Συστήματα αντιπροσωπεύουν την κορυφή της βελτιστοποίησης χώρου στον τομέα των μεταλλικών λύσεων αποθήκευσης. Σχεδιασμένα ειδικά για χώρους με περιορισμένες διαστάσεις αλλά υψηλές απαιτήσεις αποθήκευσης, προσφέρουν εξαιρετική χωρητικότητα και οργάνωση χωρίς να θυσιάζουν τη λειτουργικότητα ή την αισθητική.",
      link: "/product/compact-storage-units"
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
            
            {/* Clickable images without overlay text */}
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
                {currentSlide.description}
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

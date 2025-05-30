
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
  
  // Updated product images array with corresponding product details and individual product links
  const productSlides = [
    {
      image: "/lovable-uploads/ea0663a1-83d9-4b6e-bd66-c2a1b01af9da.png",
      title: "Μεταλλικοί Lockers Βαρέως Τύπου για Βιομηχανική Χρήση",
      description: "Ανθεκτικοί μεταλλικοί lockers σχεδιασμένοι ειδικά για βιομηχανικές εφαρμογές. Κατασκευασμένοι από εξαιρετικής ποιότητας χάλυβα με ειδική αντιδιαβρωτική επεξεργασία, προσφέρουν μέγιστη αντοχή σε απαιτητικά περιβάλλοντα. Διαθέτουν ενισχυμένες μεντεσές, ασφαλή κλειδαριά και εσωτερικά ράφια για βέλτιστη οργάνωση. Ιδανικοί για εργοστάσια, αποθήκες και βιομηχανικούς χώρους όπου απαιτείται υψηλή αντοχή και ασφάλεια.",
      link: "/product/industrial-heavy-duty-lockers"
    },
    {
      image: "/lovable-uploads/d45ac80e-568d-4711-afdf-441b647c88bd.png",
      title: "Πολύχρωμες Μεταλλικές Συρταριέρες Αρχειοθέτησης Γραφείου",
      description: "Στυλάτες συρταριέρες με πολλαπλά συρτάρια που συνδυάζουν λειτουργικότητα με μοντέρνο design. Κατασκευασμένες από premium μέταλλο με ηλεκτροστατική βαφή σε διάφορα χρώματα για να ταιριάζουν με κάθε γραφειακό περιβάλλον. Διαθέτουν τηλεσκοπικούς οδηγούς πλήρους επέκτασης, κεντρικό κλείδωμα ασφαλείας και φακέλους κρεμαστούς. Ιδανικές για αρχειοθέτηση εγγράφων σε γραφεία, δικηγορικά γραφεία και διοικητικούς χώρους.",
      link: "/product/colorful-office-filing-cabinets"
    },
    {
      image: "/lovable-uploads/82f9ab23-6721-4a6e-90e5-13cf0745af0c.png",
      title: "Custom Μεταλλικά Ντουλάπια με Εξατομικευμένες Διαστάσεις",
      description: "Προσαρμοσμένα μεταλλικά ντουλάπια κατασκευασμένα ακριβώς στις δικές σας προδιαγραφές. Με δυνατότητα εξατομίκευσης διαστάσεων, αριθμού θέσεων, εσωτερικής διαρρύθμισης και χρώματος. Κάθε ντουλάπι σχεδιάζεται και κατασκευάζεται ειδικά για τον χώρο σας, εξασφαλίζοντας τέλεια εφαρμογή και μέγιστη αξιοποίηση του διαθέσιμου χώρου. Ιδανικά για χώρους με ειδικές απαιτήσεις όπως νοσοκομεία, εργαστήρια και εκπαιδευτικά ιδρύματα.",
      link: "/product/custom-metal-cabinets"
    },
    {
      image: "/lovable-uploads/IMG_13722.webp",
      title: "Επαγγελματικές Λύσεις Αποθήκευσης για Γραφεία",
      description: "Σύγχρονα συστήματα αποθήκευσης σχεδιασμένα για μοντέρνα επαγγελματικά περιβάλλοντα. Συνδυάζουν αισθητική με λειτουργικότητα, προσφέροντας κομψές λύσεις για την οργάνωση γραφειακών χώρων. Κατασκευασμένα από υψηλής ποιότητας υλικά με φινίρισμα που αντέχει στην καθημερινή χρήση. Διαθέτουν ευέλικτη εσωτερική διαρρύθμιση και δυνατότητα επέκτασης για μελλοντικές ανάγκες.",
      link: "/product/professional-office-storage"
    },
    {
      image: "/lovable-uploads/IMG_21202.webp",
      title: "Βιομηχανικά Ντουλάπια Υψηλής Αντοχής",
      description: "Εξαιρετικά ανθεκτικά ντουλάπια κατασκευασμένα για την αντιμετώπιση των πιο δύσκολων συνθηκών. Με ενισχυμένη κατασκευή από ελάσματα χάλυβα μεγάλου πάχους και ειδική αντισκωριακή προστασία. Διαθέτουν στιβαρές μεντεσές βαρέως τύπου, πολλαπλά σημεία κλειδώματος και αντικραδασμική δομή. Ιδανικά για χρήση σε εργοστάσια, ναυπηγεία και περιβάλλοντα με υψηλή υγρασία ή χημικά.",
      link: "/product/heavy-duty-industrial-cabinets"
    },
    {
      image: "/lovable-uploads/IMG_97682.webp",
      title: "Συστήματα Οργάνωσης για Εκπαιδευτικά Ιδρύματα",
      description: "Ειδικά σχεδιασμένα συστήματα αποθήκευσης για σχολεία, πανεπιστήμια και εκπαιδευτικά κέντρα. Με έμφαση στην ασφάλεια, την αντοχή και την εύκολη χρήση από άτομα όλων των ηλικιών. Διαθέτουν στρογγυλεμένες γωνίες για ασφάλεια, ανθεκτικά υλικά που αντέχουν στη συχνή χρήση και χρώματα που δημιουργούν φιλικό περιβάλλον. Ιδανικά για αποδυτήρια, βιβλιοθήκες και αίθουσες διδασκαλίας.",
      link: "/product/educational-storage-systems"
    },
    {
      image: "/lovable-uploads/IMG_10252.webp",
      title: "Μεταλλικές Συρταριέρες Πολλαπλών Θέσεων",
      description: "Υψηλής χωρητικότητας συρταριέρες με πολλαπλά συρτάρια για μέγιστη αξιοποίηση του χώρου. Κάθε συρτάρι διαθέτει πλήρη επέκταση, φέρουσα ικανότητα έως 35kg και αθόρυβη λειτουργία χάρη στους ποιοτικούς οδηγούς. Με κεντρικό σύστημα κλειδώματος και αντιανατροπικό μηχανισμό για ασφάλεια. Ιδανικές για αρχειοθέτηση μεγάλου όγκου εγγράφων σε γραφεία, δημόσιες υπηρεσίες και επαγγελματικούς χώρους.",
      link: "/product/multi-drawer-filing-cabinets"
    },
    {
      image: "/lovable-uploads/IMG_13742.webp",
      title: "Lockers Αποδυτηρίων και Γυμναστηρίων",
      description: "Ειδικά σχεδιασμένοι lockers για αποδυτήρια γυμναστηρίων, αθλητικών κέντρων και spa. Κατασκευασμένοι από ανοξείδωτο χάλυβα ή γαλβανισμένο μέταλλο με ειδική αντιμικροβιακή επεξεργασία. Διαθέτουν σύστημα αερισμού για αποφυγή υγρασίας, ανθεκτικά κλειδαριά στην υγρασία και εσωτερικούς γάντζους για κρέμασμα ρούχων. Σχεδιασμένοι για εντατική χρήση και εύκολη συντήρηση.",
      link: "/product/gym-locker-systems"
    },
    {
      image: "/lovable-uploads/IMG_23802.webp",
      title: "Βιομηχανικά Συστήματα Αποθήκευσης",
      description: "Ολοκληρωμένα συστήματα αποθήκευσης για βιομηχανικές εφαρμογές. Μοντουλάρα σχεδίαση που επιτρέπει την προσαρμογή σε κάθε χώρο και ανάγκη. Κατασκευασμένα από εξαιρετικής αντοχής υλικά με ειδικές επιφάνειες που αντέχουν σε χημικά, υγρασία και ακραίες θερμοκρασίες. Διαθέτουν ενισχυμένη στατική και δυναμική φέρουσα ικανότητα για αποθήκευση βαρέων αντικειμένων και εργαλείων.",
      link: "/product/industrial-storage-systems"
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

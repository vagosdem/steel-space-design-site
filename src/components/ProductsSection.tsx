
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { lazy, Suspense } from "react";

const LazyMotionDiv = lazy(() => Promise.resolve({ 
  default: motion.div 
}));

const productCategories = [{
  id: "professional-storage-cabinet",
  title: "Επαγγελματικά Ντουλάπια Αποθήκευσης",
  description: "Μεταλλικά ντουλάπια υψηλής ποιότητας για επαγγελματικούς χώρους, γραφεία και χώρους εργασίας με σύγχρονο σχεδιασμό.",
  image: "/lovable-uploads/IMG_10252.webp"
}, {
  id: "colorful-school-lockers",
  title: "Πολύχρωμα Σχολικά Ντουλάπια",
  description: "Φωτεινά και χαρούμενα ντουλάπια με διάφορα χρώματα, ιδανικά για σχολικές εγκαταστάσεις και παιδικούς σταθμούς.",
  image: "/lovable-uploads/IMG_21202.webp"
}, {
  id: "modern-locker-system",
  title: "Μοντέρνα Συστήματα Ντουλαπιών",
  description: "Σύγχρονα μεταλλικά ντουλάπια με καθαρές γραμμές για επαγγελματικούς χώρους και σύγχρονα γραφεία.",
  image: "/lovable-uploads/IMG_13722.webp"
}, {
  id: "industrial-storage-solution",
  title: "Βιομηχανικές Λύσεις Αποθήκευσης",
  description: "Ανθεκτικά μεταλλικά ντουλάπια για βιομηχανικούς χώρους, εργοστάσια και απαιτητικά περιβάλλοντα εργασίας.",
  image: "/lovable-uploads/IMG_23802.webp"
}, {
  id: "white-glass-cabinet",
  title: "Λευκή Μεταλλική Ντουλάπα με Τζάμια",
  description: "Επαγγελματική λευκή μεταλλική ντουλάπα με γυάλινες πόρτες, ιδανική για αρχειοθέτηση σε γραφεία και χώρους υγείας.",
  image: "/lovable-uploads/IMG_054822.webp"
}, {
  id: "multi-door-locker-system",
  title: "Σύστημα Πολλαπλών Ντουλαπιών",
  description: "Ανθεκτικά μεταλλικά ντουλάπια με πολλαπλές πόρτες και θέσεις, σχεδιασμένα για αποδυτήρια και γυμναστήρια.",
  image: "/lovable-uploads/IMG_13742.webp"
}, {
  id: "professional-office-lockers",
  title: "Επαγγελματικά Ντουλάπια Γραφείου",
  description: "Κομψά μεταλλικά ντουλάπια σχεδιασμένα ειδικά για σύγχρονους επαγγελματικούς χώρους και γραφεία.",
  image: "/lovable-uploads/IMG_97682.webp"
}, {
  id: "compact-storage-units",
  title: "Συμπαγή Αποθηκευτικά Συστήματα",
  description: "Μεταλλικά ντουλάπια με συμπαγή σχεδιασμό, ιδανικά για χώρους με περιορισμένο χώρο αλλά υψηλές απαιτήσεις αποθήκευσης.",
  image: "/lovable-uploads/IMG_99002.webp"
}];

export default function ProductsSection() {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  
  const handleRequestQuote = () => {
    navigate("/#contact");
  };

  const MotionComponent = isMobile ? motion.div : LazyMotionDiv;
  
  return (
    <section id="products" className="bg-metal-50 py-16">
      <div className="container-section">
        <MotionComponent 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-metal-900 mb-3 text-2xl sm:text-3xl md:text-4xl">Τα Προϊόντα Μας</h2>
          <p className="text-metal-600 text-base sm:text-lg leading-relaxed">
            Ανακαλύψτε τη σειρά μεταλλικών λύσεων αποθήκευσης υψηλής ποιότητας, σχεδιασμένων για επαγγελματικούς χώρους και επιχειρήσεις.
          </p>
        </MotionComponent>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {productCategories.map((product, index) => (
              <CarouselItem key={index} className="md:basis-full">
                <div className="p-1">
                  <Card className="overflow-hidden border-none shadow-none">
                    <div className="flex flex-col md:flex-row items-center gap-6 py-4 min-h-[400px] sm:min-h-[450px]">
                      <div className="w-full md:w-1/2">
                        <MotionComponent
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="p-0 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <img 
                            src={product.image} 
                            alt={product.title}
                            width={300}
                            height={300}
                            loading="lazy"
                            className="w-full h-auto object-contain mx-auto rounded-2xl"
                            style={{ aspectRatio: '1 / 1', maxHeight: '300px' }}
                          />
                        </MotionComponent>
                      </div>
                      <div className="w-full md:w-1/2 space-y-4 flex flex-col justify-between min-h-[300px]">
                        <div className="flex-grow">
                          <MotionComponent
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                          >
                            <h3 className="text-xl sm:text-2xl font-medium text-metal-900 mb-2">{product.title}</h3>
                            <p className="text-metal-600 text-sm sm:text-base leading-relaxed">{product.description}</p>
                          </MotionComponent>
                        </div>
                        <div className="mt-auto">
                          <MotionComponent 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="flex flex-col sm:flex-row gap-3"
                          >
                            <Button 
                              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 rounded-xl text-sm sm:text-base px-4 py-2"
                              onClick={handleRequestQuote}
                            >
                              Ζητήστε Προσφορά
                            </Button>
                            <Link to={`/product/${product.id}`} className="w-full sm:w-auto">
                              <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 rounded-xl text-sm sm:text-base px-4 py-2">
                                Περισσότερες Πληροφορίες
                              </Button>
                            </Link>
                          </MotionComponent>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6 gap-3">
            <CarouselPrevious className="relative static left-0 translate-y-0 h-6 w-6 sm:h-7 sm:w-7 rounded-xl" />
            <CarouselNext className="relative static right-0 translate-y-0 h-6 w-6 sm:h-7 sm:w-7 rounded-xl" />
          </div>
        </Carousel>
        
        <MotionComponent 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 text-center"
        >
          <Link to="/products">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl text-sm sm:text-base px-6 py-3">
              Δείτε Όλα τα Προϊόντα
            </Button>
          </Link>
        </MotionComponent>
      </div>
    </section>
  );
}

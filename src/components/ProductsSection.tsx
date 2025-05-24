
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
import { Card, CardContent } from "@/components/ui/card";

// Product data with updated images
const productCategories = [{
  id: "red-blue-lockers",
  title: "Κόκκινα και Μπλε Μεταλλικά Ντουλάπια",
  description: "Έντονα χρώματα σε μεταλλικά ντουλάπια για σχολεία, γυμναστήρια και παιδικούς χώρους με ανθεκτική κατασκευή.",
  image: "/lovable-uploads/7cc3aac9-9af0-4f81-b131-0622591eebc1.png"
}, {
  id: "colorful-school-lockers",
  title: "Πολύχρωμα Σχολικά Ντουλάπια",
  description: "Φωτεινά και χαρούμενα ντουλάπια με διάφορα χρώματα, ιδανικά για σχολικές εγκαταστάσεις και παιδικούς σταθμούς.",
  image: "/lovable-uploads/c4658bc3-024c-4602-beec-fb6449e32749.png"
}, {
  id: "professional-storage",
  title: "Επαγγελματικές Λύσεις Αποθήκευσης",
  description: "Μοντέρνα μεταλλικά ντουλάπια σε κλασικά χρώματα για επαγγελματικούς χώρους, γραφεία και κέντρα εργασίας.",
  image: "/lovable-uploads/cb3b7ccd-56d5-4cb0-99ce-dfb7b75f6400.png"
}, {
  id: "industrial-lockers",
  title: "Βιομηχανικά Ντουλάπια",
  description: "Ανθεκτικά μεταλλικά ντουλάπια για βιομηχανικούς χώρους, εργοστάσια και αποδυτήρια εργαζομένων.",
  image: "/lovable-uploads/d6bb8bc5-c886-4cd5-8dda-0b5c84a7e94e.png"
}];

export default function ProductsSection() {
  const navigate = useNavigate();
  
  // Handler to navigate to the contact section on the home page
  const handleRequestQuote = () => {
    navigate("/#contact");
  };
  
  return (
    <section id="products" className="bg-metal-50 py-20">
      <div className="container-section">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-metal-900 mb-4">Τα Προϊόντα Μας</h2>
          <p className="text-metal-600 text-lg">
            Ανακαλύψτε τη σειρά μεταλλικών λύσεων αποθήκευσης υψηλής ποιότητας, σχεδιασμένων για επαγγελματικούς χώρους και επιχειρήσεις.
          </p>
        </motion.div>

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
                    <div className="flex flex-col md:flex-row items-center gap-8 py-6">
                      <div className="w-full md:w-1/2">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.2 }}
                          className="p-0 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300"
                        >
                          <img 
                            src={product.image} 
                            alt={product.title}
                            className="w-full h-auto object-contain mx-auto rounded-2xl"
                          />
                        </motion.div>
                      </div>
                      <div className="w-full md:w-1/2 space-y-6">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5 }}
                        >
                          <h3 className="text-2xl font-medium text-metal-900">{product.title}</h3>
                          <p className="text-metal-600 mt-2">{product.description}</p>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="flex flex-col sm:flex-row gap-4"
                        >
                          <Button 
                            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 rounded-xl"
                            onClick={handleRequestQuote}
                          >
                            Ζητήστε Προσφορά
                          </Button>
                          <Link to={`/product/${product.id}`} className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 rounded-xl">
                              Περισσότερες Πληροφορίες
                            </Button>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative static left-0 translate-y-0 h-9 w-9 rounded-xl" />
            <CarouselNext className="relative static right-0 translate-y-0 h-9 w-9 rounded-xl" />
          </div>
        </Carousel>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link to="/products">
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-xl">
              Δείτε Όλα τα Προϊόντα
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}


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
 id: "white-brown-locker",
  title: "Ντουλάπια Πορτοκαλί με Λευκό Πλαίσιο",
  description: "Κλασικά μεταλλικά ντουλάπια πολλαπλών θέσεων με πορτοκαλί πόρτες και λευκό πλαίσιο για επαγγελματικούς χώρους.",
  image: "/lovable-uploads/IMG_10252.jpg"
}, {
  id: "blue-locker",
  title: "Μπλε Μεταλλικά Ντουλάπια",
  description: "Μοντέρνα μεταλλικά ντουλάπια σε μπλε χρώμα με λευκό πλαίσιο για χρήση σε γυμναστήρια και σχολεία.",
  image: "/lovable-uploads/IMG_13722.jpg"
}, {
  id: "orange-display-cabinet",
  title: "Πορτοκαλί Βιτρίνα",
  description: "Μεταλλική βιτρίνα με γυάλινη πόρτα σε έντονο πορτοκαλί χρώμα, ιδανική για εκθετήρια και αποθήκευση προϊόντων.",
  image: "/lovable-uploads/IMG_97682.jpg"
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

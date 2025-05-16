
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

// Product data
const productCategories = [{
  id: "white-brown-locker",
  title: "Ντουλάπια Λευκά με Καφέ Πλαίσιο",
  description: "Κλασικά μεταλλικά ντουλάπια τριών θέσεων με λευκές πόρτες και καφέ πλαίσιο για επαγγελματικούς χώρους.",
  image: "/lovable-uploads/d6bb8bc5-c886-4cd5-8dda-0b5c84a7e94e.png"
}, {
  id: "red-locker",
  title: "Κόκκινα Μεταλλικά Ντουλάπια",
  description: "Μοντέρνα μεταλλικά ντουλάπια σε ζωηρό κόκκινο χρώμα με μαύρο πλαίσιο για χρήση σε γυμναστήρια και σχολεία.",
  image: "/lovable-uploads/3d7fe985-2f29-443b-8ab2-3d6f769ff6df.png"
}, {
  id: "yellow-locker",
  title: "Κίτρινα Μεταλλικά Ντουλάπια",
  description: "Φωτεινά κίτρινα ντουλάπια με καφέ πλαίσιο, ιδανικά για παιδικούς σταθμούς και σχολικές εγκαταστάσεις.",
  image: "/lovable-uploads/f308ce90-e4fe-4c0d-b442-8d3bed0566f3.png"
}, {
  id: "turquoise-orange-locker",
  title: "Ντουλάπια Τυρκουάζ με Πορτοκαλί",
  description: "Μοντέρνος συνδυασμός χρωμάτων με τυρκουάζ πόρτα και πορτοκαλί πλαίσιο, ιδανικά για δημιουργικούς χώρους εργασίας.",
  image: "/lovable-uploads/3e491c70-934b-4056-b1e1-58c080f32010.png"
}];

export default function ProductsSection() {
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
                        <motion.img 
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.7, delay: 0.2 }}
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-auto object-contain mx-auto"
                        />
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
                          <Link to="/contact" className="w-full sm:w-auto">
                            <Button className="w-full bg-blue-600 hover:bg-blue-700">
                              Ζητήστε Προσφορά
                            </Button>
                          </Link>
                          <Link to={`/product/${product.id}`} className="w-full sm:w-auto">
                            <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50">
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
            <CarouselPrevious className="relative static left-0 translate-y-0 h-9 w-9" />
            <CarouselNext className="relative static right-0 translate-y-0 h-9 w-9" />
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
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Δείτε Όλα τα Προϊόντα
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

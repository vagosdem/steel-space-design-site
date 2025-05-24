
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
import React, { useCallback } from "react";
import ProductCard from "./ProductCard";

// Product data with updated images
const productCategories = [{
 id: "white-brown-locker",
  title: "Ντουλάπια Πορτοκαλί με Λευκό Πλαίσιο",
  description: "Κλασικά μεταλλικά ντουλάπια πολλαπλών θέσεων με πορτοκαλί πόρτες και λευκό πλαίσιο για επαγγελματικούς χώρους.",
  image: "/lovable-uploads/IMG_99002.webp"
}, {
  id: "blue-locker",
  title: "Μπλε Μεταλλικά Ντουλάπια",
  description: "Μοντέρνα μεταλλικά ντουλάπια σε μπλε χρώμα με λευκό πλαίσιο για χρήση σε γυμναστήρια και σχολεία.",
  image: "/lovable-uploads/IMG_13722.webp"
}, {
  id: "orange-display-cabinet", // Keep this ID consistent with the product detail page link
  title: "Πορτοκαλί Βιτρίνα",
  description: "Μεταλλική βιτρίνα με γυάλινη πόρτα σε έντονο πορτοκαλί χρώμα, ιδανική για εκθετήρια και αποθήκευση προϊόντων.",
  image: "/lovable-uploads/IMG_21202.webp" // Replaced with compressed image
}];

export default function ProductsSection() {
  const navigate = useNavigate();

  // Handler to navigate to the contact section on the home page
  const handleRequestQuote = useCallback(() => {
    navigate("/#contact");
  }, [navigate]);

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
                <ProductCard product={product} onRequestQuote={handleRequestQuote} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-8 gap-4">
            <CarouselPrevious className="relative static left-0 translate-y-0 h-9 w-9 rounded-lg" />
            <CarouselNext className="relative static right-0 translate-y-0 h-9 w-9 rounded-lg" />
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
            <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg">
              Δείτε Όλα τα Προϊόντα
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

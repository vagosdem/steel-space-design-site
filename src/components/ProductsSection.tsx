
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Building, Archive, PackageOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const productCategories = [{
  id: "white-brown-locker",
  title: "Ντουλάπια Λευκά με Καφέ Πλαίσιο",
  description: "Κλασικά μεταλλικά ντουλάπια τριών θέσεων με λευκές πόρτες και καφέ πλαίσιο για επαγγελματικούς χώρους.",
  icon: Package,
  image: "/lovable-uploads/d6bb8bc5-c886-4cd5-8dda-0b5c84a7e94e.png"
}, {
  id: "red-locker",
  title: "Κόκκινα Μεταλλικά Ντουλάπια",
  description: "Μοντέρνα μεταλλικά ντουλάπια σε ζωηρό κόκκινο χρώμα με μαύρο πλαίσιο για χρήση σε γυμναστήρια και σχολεία.",
  icon: Building,
  image: "/lovable-uploads/3d7fe985-2f29-443b-8ab2-3d6f769ff6df.png"
}, {
  id: "yellow-locker",
  title: "Κίτρινα Μεταλλικά Ντουλάπια",
  description: "Φωτεινά κίτρινα ντουλάπια με καφέ πλαίσιο, ιδανικά για παιδικούς σταθμούς και σχολικές εγκαταστάσεις.",
  icon: PackageOpen,
  image: "/lovable-uploads/f308ce90-e4fe-4c0d-b442-8d3bed0566f3.png"
}, {
  id: "turquoise-orange-locker",
  title: "Ντουλάπια Τυρκουάζ με Πορτοκαλί",
  description: "Μοντέρνος συνδυασμός χρωμάτων με τυρκουάζ πόρτα και πορτοκαλί πλαίσιο, ιδανικά για δημιουργικούς χώρους εργασίας.",
  icon: Archive,
  image: "/lovable-uploads/3e491c70-934b-4056-b1e1-58c080f32010.png"
}];

// Add new images to the product categories
const additionalImages = [
  { id: "red-locker", image: "/lovable-uploads/c4658bc3-024c-4602-beec-fb6449e32749.png" },
  { id: "yellow-locker", image: "/lovable-uploads/7cc3aac9-9af0-4f81-b131-0622591eebc1.png" },
  { id: "turquoise-orange-locker", image: "/lovable-uploads/0f7b939c-3012-47f1-8cc8-13033e7dd152.png" }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProductsSection() {
  return <section id="products" className="bg-metal-50">
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

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {productCategories.map((category, index) => (
            <motion.div variants={item} key={index}>
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                <Link to={`/product/${category.id}`} className="aspect-[3/2] overflow-hidden block">
                  <img src={category.image} alt={category.title} className="w-full h-full object-cover transition-transform hover:scale-105 duration-500" />
                </Link>
                <CardHeader className="pb-4 flex-grow">
                  <div className="flex items-center gap-2 mb-2">
                    <category.icon className="h-5 w-5 text-blue-600" />
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                  </div>
                  <CardDescription className="text-metal-600">{category.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link to={`/product/${category.id}`} className="w-full">
                    <Button variant="default" className="w-full bg-blue-600 hover:bg-blue-700">
                      Περισσότερες Πληροφορίες
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        
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
    </section>;
}

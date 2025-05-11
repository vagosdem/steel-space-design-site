
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Building, Archive, PackageOpen } from "lucide-react";
import { Link } from "react-router-dom";

const productCategories = [
  {
    id: "white-brown-locker",
    title: "Ντουλάπια Λευκά με Καφέ Πλαίσιο",
    description: "Κλασικά μεταλλικά ντουλάπια τριών θέσεων με λευκές πόρτες και καφέ πλαίσιο για επαγγελματικούς χώρους.",
    icon: Package,
    image: "/lovable-uploads/d6bb8bc5-c886-4cd5-8dda-0b5c84a7e94e.png"
  },
  {
    id: "red-locker",
    title: "Κόκκινα Μεταλλικά Ντουλάπια",
    description: "Μοντέρνα μεταλλικά ντουλάπια σε ζωηρό κόκκινο χρώμα με μαύρο πλαίσιο για χρήση σε γυμναστήρια και σχολεία.",
    icon: Building,
    image: "/lovable-uploads/3d7fe985-2f29-443b-8ab2-3d6f769ff6df.png"
  },
  {
    id: "yellow-locker",
    title: "Κίτρινα Μεταλλικά Ντουλάπια",
    description: "Φωτεινά κίτρινα ντουλάπια με καφέ πλαίσιο, ιδανικά για παιδικούς σταθμούς και σχολικές εγκαταστάσεις.",
    icon: PackageOpen,
    image: "/lovable-uploads/f308ce90-e4fe-4c0d-b442-8d3bed0566f3.png"
  },
  {
    id: "turquoise-orange-locker",
    title: "Ντουλάπια Τυρκουάζ με Πορτοκαλί",
    description: "Μοντέρνος συνδυασμός χρωμάτων με τυρκουάζ πόρτα και πορτοκαλί πλαίσιο, ιδανικά για δημιουργικούς χώρους εργασίας.",
    icon: Archive,
    image: "/lovable-uploads/3e491c70-934b-4056-b1e1-58c080f32010.png"
  }
];

export default function ProductsSection() {
  return (
    <section id="products" className="bg-metal-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-metal-900 mb-4">Τα Προϊόντα Μας</h2>
          <p className="text-metal-600 text-lg">
            Ανακαλύψτε τη σειρά μεταλλικών λύσεων αποθήκευσης υψηλής ποιότητας, σχεδιασμένων για τις συγκεκριμένες ανάγκες σας.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-2 mb-2">
                  <category.icon className="h-5 w-5 text-blue-600" />
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </div>
                <CardDescription className="text-metal-600">{category.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link to={`/product/${category.id}`} className="w-full">
                  <Button variant="outline" className="w-full">Λεπτομέρειες</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

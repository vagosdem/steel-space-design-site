
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Package, Building, Archive, PackageOpen } from "lucide-react";

const productCategories = [
  {
    title: "Μεταλλικά Ντουλάπια",
    description: "Ανθεκτικές, ασφαλείς λύσεις αποθήκευσης για σχολεία, γυμναστήρια και εργασιακούς χώρους.",
    icon: Package,
    image: "https://images.unsplash.com/photo-1618220048045-10a6dbdf83e0?auto=format&fit=crop&w=500&h=300"
  },
  {
    title: "Ντουλάπες σε Προσαρμοσμένα Μεγέθη",
    description: "Μεταλλικά συστήματα αποθήκευσης ειδικά σχεδιασμένα για το δικό σας χώρο.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=500&h=300"
  },
  {
    title: "Αποθήκευση Γραφείου",
    description: "Λειτουργικά και κομψά μεταλλικά ντουλάπια ιδανικά για κάθε περιβάλλον γραφείου.",
    icon: PackageOpen,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=500&h=300"
  },
  {
    title: "Βιομηχανική Αποθήκευση",
    description: "Ισχυρές μεταλλικές λύσεις αποθήκευσης για αποθήκες και εργοστάσια.",
    icon: Archive,
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=500&h=300"
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
                <Button variant="outline" className="w-full">Λεπτομέρειες</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

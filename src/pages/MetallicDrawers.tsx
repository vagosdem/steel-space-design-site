import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Layers, Lock, Settings, FileText } from "lucide-react";
import { products } from "@/data/products";
export default function MetallicDrawers() {
  const navigate = useNavigate();
  const topRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({
        behavior: 'smooth'
      });
      window.scrollTo(0, 0);
    }
  }, []);
  const drawerProducts = products.filter(product => product.type === "drawer" || product.features?.includes("συρτάρια"));
  const handleRequestQuote = () => {
    navigate("/?scrollTo=contact");
  };
  return <>
      <SEOHead title="Μεταλλικές Συρταριέρες Γραφείου Χονδρική | Αρχειοθέτηση | Stereom.gr" description="Επαγγελματικές μεταλλικές συρταριέρες γραφείου χονδρική. Πολλαπλά συρτάρια, κλειδαριές ασφαλείας, τέλεια οργάνωση αρχείων. Ποιότητα & αντοχή." canonical="/metallic-drawers" image="/lovable-uploads/IMG_23802.webp" />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div ref={topRef} className="container-section">
            {/* Hero Section */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Μεταλλικές Συρταριέρες Γραφείου Χονδρική</h1>
              <p className="text-xl text-metal-600 max-w-3xl mx-auto">
                Ανακαλύψτε την προηγμένη γκάμα μεταλλικών συρταριέρων για επαγγελματικούς χώρους. Πολλαπλά συρτάρια, προηγμένα συστήματα ασφαλείας και τέλεια οργάνωση αρχείων.
              </p>
            </motion.div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 border rounded-lg">
                <Layers className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Πολλαπλά Συρτάρια</h3>
                <p className="text-sm text-gray-600">2-6 συρτάρια ανά μονάδα για μέγιστη χωρητικότητα</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <Lock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Κλειδαριές Ασφαλείας</h3>
                <p className="text-sm text-gray-600">Κεντρικό κλείδωμα και ατομικές κλειδαριές</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <Settings className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Πλήρης Επέκταση</h3>
                <p className="text-sm text-gray-600">Συρτάρια 100% επέκτασης για εύκολη πρόσβαση</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <FileText className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Οργάνωση Αρχείων</h3>
                <p className="text-sm text-gray-600">Συστήματα διαχωριστών για τέλεια ταξινόμηση</p>
              </div>
            </div>

            {/* Types of Drawer Units */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Τύποι Μεταλλικών Συρταριέρων</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-700">Συρταριέρες Γραφείου</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 2-4 συρτάρια A4/Letter</li>
                    <li>• Κάτω από γραφείο</li>
                    <li>• Ρυθμιζόμενοι διαχωριστές</li>
                    <li>• Αντι-τίλτ μηχανισμός</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-700">Πολυλειτουργικές Συρταριέρες</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Συρτάρια διαφόρων μεγεθών</li>
                    <li>• Ειδικές θέσεις για αρχεία</li>
                    <li>• Συρτάρια εργαλείων</li>
                    <li>• Κλειδαριές υψηλής ασφαλείας</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-700">Βιομηχανικές Συρταριέρες</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ενισχυμένη κατασκευή</li>
                    <li>• Αντοχή σε βαρέα φορτία</li>
                    <li>• Ειδικά συρτάρια εργαλείων</li>
                    <li>• Αντιολισθητικές επιφάνειες</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Capacities and Organization */}
            

            {/* Technical Specifications */}
            

            {/* Use Cases */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Χρήσεις Μεταλλικών Συρταριέρων</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Λογιστικά Γραφεία</h3>
                  <p className="text-sm text-gray-600">Οργάνωση φορολογικών στοιχείων και πελατολογίων</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Νομικά Γραφεία</h3>
                  <p className="text-sm text-gray-600">Αρχειοθέτηση συμβολαίων και νομικών εγγράφων</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Ιατρικά Κέντρα</h3>
                  <p className="text-sm text-gray-600">Ιατρικά αρχεία και στοιχεία ασθενών</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Εταιρικά Γραφεία</h3>
                  <p className="text-sm text-gray-600">Αρχεία HR, οικονομικά και διοικητικά</p>
                </div>
              </div>
            </section>

            {/* Security Features */}
            <section className="mb-12 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-center text-zinc-950">Προηγμένα Συστήματα Ασφαλείας</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-zinc-700">Κεντρικό Κλείδωμα</h3>
                  <p className="text-gray-600">Ένα κλειδί κλειδώνει όλα τα συρτάρια ταυτόχρονα για μέγιστη ασφάλεια</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-zinc-700">Αντι-Τίλτ Προστασία</h3>
                  <p className="text-gray-600">Μόνο ένα συρτάρι ανοίγει τη φορά για αποφυγή ανατροπής</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-zinc-700">Ψηφιακές Κλειδαριές</h3>
                  <p className="text-gray-600">Προγραμματιζόμενα PIN και audit trail για κάθε πρόσβαση</p>
                </div>
              </div>
            </section>

            {/* Product Gallery */}
            <section className="mb-12">
              
              <div className="grid md:grid-cols-3 gap-6">
                {drawerProducts.slice(0, 6).map(product => <div key={product.id} className="border rounded-lg overflow-hidden">
                    <img src={product.image} alt={`Μεταλλική συρταριέρα ${product.title}`} className="w-full h-48 object-cover" loading="lazy" />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{product.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                      <Button size="sm" className="w-full" onClick={() => navigate(`/product/${product.id}`)}>
                        Δείτε Λεπτομέρειες
                      </Button>
                    </div>
                  </div>)}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-zinc-950">Ζητήστε Προσφορά για Μεταλλικές Συρταριέρες</h2>
              <p className="text-lg text-gray-600 mb-6">
                Οργανώστε τέλεια τα αρχεία σας με τις επαγγελματικές συρταριέρες μας
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleRequestQuote}>
                  Ζήτηση Προσφοράς
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/products')}>
                  Δείτε Όλα τα Προϊόντα
                </Button>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>;
}
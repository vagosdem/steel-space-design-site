import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Download, Shield, Wrench, Clock } from "lucide-react";
import { products } from "@/data/products";
export default function MetallicCabinets() {
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
  const cabinetProducts = products.filter(product => product.category === "ντουλάπα" || product.type === "cabinet");
  const handleRequestQuote = () => {
    navigate("/?scrollTo=contact");
  };
  return <>
      <SEOHead title="Μεταλλικές Ντουλάπες Χονδρική Ελλάδα | Επαγγελματικές Λύσεις Αποθήκευσης | Stereom.gr" description="Κατασκευάζουμε μεταλλικές ντουλάπες χονδρική για επαγγελματικούς χώρους στην Ελλάδα. Ανθεκτικές κατασκευές, προσαρμόσιμες διαστάσεις, 5ετή εγγύηση. Ζητήστε προσφορά τώρα." canonical="/metallic-cabinets" image="/lovable-uploads/IMG_054822.webp" />
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
              <h1 className="text-4xl font-bold mb-4">Μεταλλικές Ντουλάπες Χονδρική Ελλάδα</h1>
              <p className="text-xl text-metal-600 max-w-3xl mx-auto">
                Ανακαλύψτε την επαγγελματική γκάμα μεταλλικών ντουλαπών μας. Κατασκευάζουμε ανθεκτικές λύσεις αποθήκευσης για γραφεία, εργοστάσια και επαγγελματικούς χώρους με 5ετή εγγύηση.
              </p>
            </motion.div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 border rounded-lg">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Μέγιστη Αντοχή</h3>
                <p className="text-sm text-gray-600">Χάλυβας υψηλής ποιότητας με αντισκωριακή επεξεργασία</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <Wrench className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Προσαρμόσιμες Διαστάσεις</h3>
                <p className="text-sm text-gray-600">Custom κατασκευές σύμφωνα με τις ανάγκες σας</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <Clock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Γρήγορη Παράδοση</h3>
                <p className="text-sm text-gray-600">Παραγωγή και παράδοση σε 15-20 εργάσιμες ημέρες</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <Download className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Τεχνικά Φυλλάδια</h3>
                <p className="text-sm text-gray-600">Αναλυτικές προδιαγραφές και τεχνικά χαρακτηριστικά</p>
              </div>
            </div>

            {/* Product Categories */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Τύποι Μεταλλικών Ντουλαπών</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-700">Ντουλάπες Γραφείου</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Διπλές και τριπλές πόρτες</li>
                    <li>• Ρυθμιζόμενα ράφια</li>
                    <li>• Κλειδαριές ασφαλείας</li>
                    <li>• Χρώματα RAL</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-700">Βιομηχανικές Ντουλάπες</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ενισχυμένη κατασκευή</li>
                    <li>• Αντοχή σε βαρέα φορτία</li>
                    <li>• Αντιχημικές επιφάνειες</li>
                    <li>• Ειδικά συστήματα εξαερισμού</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-700">Ντουλάπες Αποθήκευσης</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Μεγάλος εσωτερικός χώρος</li>
                    <li>• Πολλαπλά διαμερίσματα</li>
                    <li>• Συρτάρια και θήκες</li>
                    <li>• Σύστημα αρίθμησης</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Technical Specifications */}
            

            {/* Product Gallery */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Δείγματα Μεταλλικών Ντουλαπών</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {cabinetProducts.slice(0, 6).map(product => <div key={product.id} className="border rounded-lg overflow-hidden">
                    <img src={product.image} alt={`Μεταλλική ντουλάπα ${product.title}`} className="w-full h-48 object-contain bg-gray-50" loading="lazy" />
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

            {/* Industries Served */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Κλάδοι που Εξυπηρετούμε</h2>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <h3 className="font-semibold mb-2">Γραφεία & Επιχειρήσεις</h3>
                  <p className="text-sm text-gray-600">Οργάνωση αρχείων και προσωπικών αντικειμένων</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="font-semibold mb-2">Εκπαιδευτικά Ιδρύματα</h3>
                  <p className="text-sm text-gray-600">Σχολεία, πανεπιστήμια, φροντιστήρια</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="font-semibold mb-2">Βιομηχανία & Εργοστάσια</h3>
                  <p className="text-sm text-gray-600">Αποθήκευση εργαλείων και εξοπλισμού</p>
                </div>
                <div className="text-center p-4">
                  <h3 className="font-semibold mb-2">Χώροι Υγείας</h3>
                  <p className="text-sm text-gray-600">Νοσοκομεία, κλινικές, ιατρεία</p>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Ζητήστε Προσφορά για Μεταλλικές Ντουλάπες</h2>
              <p className="text-lg text-gray-600 mb-6">
                Επικοινωνήστε μαζί μας για προσαρμοσμένη προσφορά σύμφωνα με τις ανάγκες σας
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleRequestQuote}>
                  Ζήτηση Προσφοράς
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/products?category=ντουλάπα')}>
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

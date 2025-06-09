
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { FileText, Lock, Shield, Archive } from "lucide-react";
import { products } from "@/data/products";

export default function MetallicFilingCabinets() {
  const navigate = useNavigate();
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo(0, 0);
    }
  }, []);

  const filingProducts = products.filter(product => 
    product.category === "αρχειοθήκη" || product.type === "filing"
  );

  const handleRequestQuote = () => {
    navigate("/?scrollTo=contact");
  };

  return (
    <>
      <SEOHead 
        title="Μεταλλικές Αρχειοθήκες B2B Ελλάδα | GDPR Συμβατές Λύσεις | Stereom.gr"
        description="Επαγγελματικές μεταλλικές αρχειοθήκες B2B για ασφαλή αποθήκευση εγγράφων. GDPR συμβατές, πυράντοχες, με κλειδαριές ασφαλείας. Χονδρική πώληση στην Ελλάδα."
        canonical="/metallic-filing-cabinets"
        image="/lovable-uploads/IMG_23802.webp"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div ref={topRef} className="container-section">
            {/* Hero Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl font-bold mb-4">Μεταλλικές Αρχειοθήκες B2B Ελλάδα</h1>
              <p className="text-xl text-metal-600 max-w-3xl mx-auto">
                Ασφαλείς λύσεις αποθήκευσης εγγράφων για επιχειρήσεις. GDPR συμβατές αρχειοθήκες με προηγμένα συστήματα ασφαλείας και πυροπροστασίας.
              </p>
            </motion.div>

            {/* Key Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 border rounded-lg">
                <FileText className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">GDPR Συμβατές</h3>
                <p className="text-sm text-gray-600">Πλήρης συμμόρφωση με τον Κανονισμό Προστασίας Δεδομένων</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <Lock className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Προηγμένη Ασφάλεια</h3>
                <p className="text-sm text-gray-600">Κλειδαριές υψηλής ασφαλείας και συστήματα ελέγχου πρόσβασης</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <Shield className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Πυροπροστασία</h3>
                <p className="text-sm text-gray-600">Πυράντοχα υλικά και προστασία από υγρασία</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <Archive className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Οργάνωση Αρχείων</h3>
                <p className="text-sm text-gray-600">Συστήματα κατηγοριοποίησης και εύκολης αναζήτησης</p>
              </div>
            </div>

            {/* Types of Filing Cabinets */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Τύποι Μεταλλικών Αρχειοθηκών</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Αρχειοθήκες Συρταριών</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 2, 3, 4 συρτάρια A4/Α3</li>
                    <li>• Πλήρης επέκταση συρταριών</li>
                    <li>• Κλειδαριές κεντρικού κλειδώματος</li>
                    <li>• Μηχανισμός αντιανατροπής</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Πυράντοχες Αρχειοθήκες</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Αντοχή σε 1000°C για 1 ώρα</li>
                    <li>• Προστασία από νερό και υγρασία</li>
                    <li>• Διπλά τοιχώματα με μόνωση</li>
                    <li>• Πιστοποιήσεις UL/ETL</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Αρχειοθήκες Υψηλής Ασφαλείας</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ψηφιακές κλειδαριές</li>
                    <li>• Biometric συστήματα</li>
                    <li>• Αυτόματη καταγραφή προσβάσεων</li>
                    <li>• Αντι-διάρρηξη προστασία</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* GDPR Compliance Section */}
            <section className="mb-12 bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">GDPR Συμμόρφωση & Προστασία Δεδομένων</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Απαιτήσεις GDPR</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Ασφαλής αποθήκευση προσωπικών δεδομένων</li>
                    <li>• Έλεγχος πρόσβασης και καταγραφή</li>
                    <li>• Προστασία από μη εξουσιοδοτημένη πρόσβαση</li>
                    <li>• Δυνατότητα ασφαλούς καταστροφής</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Λύσεις Συμμόρφωσης</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Κλειδαριές με audit trail</li>
                    <li>• Χρονοπρογραμματισμένη καταστροφή</li>
                    <li>• Backup συστήματα ασφαλείας</li>
                    <li>• Πιστοποιημένη ασφάλεια δεδομένων</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Technical Specifications */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Τεχνικές Προδιαγραφές Αρχειοθηκών</h2>
              <div className="bg-white border rounded-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Κατασκευαστικά Χαρακτηριστικά</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Χάλυβας 1.2-2.0mm πάχος</li>
                      <li>• Επίστρωση πούδρας</li>
                      <li>• Αντιστατική προστασία</li>
                      <li>• Ανακυκλώσιμα υλικά</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Διαστάσεις & Χωρητικότητες</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Ύψος: 52-132cm</li>
                      <li>• Πλάτος: 40-80cm</li>
                      <li>• Βάθος: 62-71cm</li>
                      <li>• Χωρητικότητα: 100-400 φακέλους</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Συστήματα Ασφαλείας</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Κλειδαριές 5 σημείων</li>
                      <li>• Ψηφιακό keypad</li>
                      <li>• RFID συμβατότητα</li>
                      <li>• Αλάρμ παραβίασης</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Πρόσθετα Χαρακτηριστικά</h3>
                    <ul className="space-y-2 text-gray-600">
                      <li>• Ρυθμιζόμενες θήκες</li>
                      <li>• Ετικέτες ταξινόμησης</li>
                      <li>• LED φωτισμός</li>
                      <li>• Αντισεισμική στήριξη</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Use Cases */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Σκοποί Χρήσης Μεταλλικών Αρχειοθηκών</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Νομικά Γραφεία</h3>
                  <p className="text-sm text-gray-600">Ασφαλής φύλαξη εμπιστευτικών εγγράφων και συμβολαίων</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Λογιστικά Γραφεία</h3>
                  <p className="text-sm text-gray-600">Οργάνωση φορολογικών στοιχείων και οικονομικών αρχείων</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Ιατρικά Κέντρα</h3>
                  <p className="text-sm text-gray-600">Προστασία ιατρικών αρχείων και προσωπικών δεδομένων</p>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h3 className="font-semibold mb-2">Δημόσιες Υπηρεσίες</h3>
                  <p className="text-sm text-gray-600">Μακροπρόθεσμη αρχειοθέτηση επίσημων εγγράφων</p>
                </div>
              </div>
            </section>

            {/* Product Gallery */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Δείγματα Μεταλλικών Αρχειοθηκών</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {filingProducts.slice(0, 6).map((product) => (
                  <div key={product.id} className="border rounded-lg overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={`Μεταλλική αρχειοθήκη ${product.title}`}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{product.title}</h3>
                      <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                      <Button 
                        size="sm" 
                        className="w-full"
                        onClick={() => navigate(`/product/${product.id}`)}
                      >
                        Δείτε Λεπτομέρειες
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4">Ζητήστε Προσφορά για Μεταλλικές Αρχειοθήκες</h2>
              <p className="text-lg text-gray-600 mb-6">
                Προστατέψτε τα σημαντικά έγγραφά σας με τις επαγγελματικές αρχειοθήκες μας
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={handleRequestQuote}
                >
                  Ζήτηση Προσφοράς
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => navigate('/products?category=αρχειοθήκη')}
                >
                  Δείτε Όλα τα Προϊόντα
                </Button>
              </div>
            </section>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

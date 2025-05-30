
import { useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import ContactCTA from "@/components/ContactCTA";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

export default function FilingCabinets() {
  const navigate = useNavigate();
  const location = useLocation();
  const topRef = useRef<HTMLDivElement>(null);
  
  // Filter products for filing cabinets category
  const filingCabinetProducts = products.filter(product => 
    product.category === "αρχειοθήκη" || 
    product.type === "αρχειοθήκη" ||
    product.title.toLowerCase().includes("αρχειοθήκη") ||
    product.title.toLowerCase().includes("συρταριέρα")
  );
  
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleRequestQuote = () => {
    navigate("/#contact");
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <>
      <SEOHead 
        title="Αρχειοθήκες & Συρταριέρες Αρχειοθέτησης Μεταλλικές | Stereom.gr"
        description="Ανθεκτικές μεταλλικές αρχειοθήκες και συρταριέρες αρχειοθέτησης για επαγγελματικούς χώρους. Custom διαστάσεις, χρώματα, υψηλή ασφάλεια για τα αρχεία σας. Επικοινωνήστε για προσφορά."
        canonical="/filing-cabinets"
        image="/lovable-uploads/IMG_23802.webp"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div ref={topRef} className="container-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl font-bold mb-6 text-metal-900">
                Μεταλλικές Αρχειοθήκες και Συρταριέρες
              </h1>
              
              <div className="prose prose-lg max-w-none mb-12 space-y-6 text-metal-700">
                <p className="text-xl text-metal-600 leading-relaxed">
                  Η Stereom.gr προσφέρει μια ολοκληρωμένη γκάμα <strong>μεταλλικών αρχειοθηκών</strong> και <strong>συρταριερών αρχειοθέτησης</strong> 
                  υψηλής ποιότητας, σχεδιασμένων ειδικά για επαγγελματικούς χώρους που απαιτούν ασφαλή και οργανωμένη διαχείριση εγγράφων.
                </p>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-metal-900">Τύποι Αρχειοθηκών που Κατασκευάζουμε</h2>
                
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-medium mb-3 text-metal-900">Οριζόντιες Αρχειοθήκες</h3>
                    <p>Ιδανικές για χώρους με περιορισμένο ύψος. Προσφέρουν εύκολη πρόσβαση σε όλα τα συρτάρια και μέγιστη αξιοποίηση του οριζόντιου χώρου.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-medium mb-3 text-metal-900">Κάθετες Συρταριέρες</h3>
                    <p>Βελτιστοποιημένες για μικρούς χώρους. Παρέχουν μέγιστη χωρητικότητα αρχειοθέτησης σε ελάχιστο αποτύπωμα δαπέδου.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-medium mb-3 text-metal-900">Πολλαπλών Συρταριών</h3>
                    <p>Συστήματα με 2-6 συρτάρια που προσφέρουν διαβαθμισμένη οργάνωση και κατηγοριοποίηση εγγράφων ανά τμήμα ή έργο.</p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm border">
                    <h3 className="text-xl font-medium mb-3 text-metal-900">Κινητές Αρχειοθήκες</h3>
                    <p>Εξοπλισμένες με ρόδες υψηλής ποιότητας για εύκολη μετακίνηση και ευελιξία στη διάταξη του γραφείου.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-metal-900">Χαρακτηριστικά και Οφέλη</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Συστήματα Κλειδώματος:</strong> Προηγμένα συστήματα ασφαλείας με κεντρικό κλείδωμα, ατομικά κλειδώματα ανά συρτάρι, ή ψηφιακά συστήματα πρόσβασης.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Χωρητικότητα Συρταριών:</strong> Σχεδιασμένα για φακέλους A4, Legal και Foolscap με μέγιστη αξιοποίηση του διαθέσιμου χώρου.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Μηχανισμός Anti-Tilt:</strong> Προστασία από ανατροπή με δυνατότητα ανοίγματος μόνο ενός συρταριού τη φορά.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Πάχος Υλικού:</strong> Κατασκευή από χάλυβα πάχους 0.7-1.2mm για μέγιστη αντοχή και μακροχρόνια χρήση.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Χρωματικές Επιλογές:</strong> Διαθέσιμες σε μεγάλη γκάμα χρωμάτων για αρμονική ενσωμάτωση στο εταιρικό περιβάλλον.</p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p><strong>Προσαρμοσμένες Διαστάσεις:</strong> Custom κατασκευές για ειδικές απαιτήσεις χώρου και χωρητικότητας.</p>
                  </div>
                </div>

                <h2 className="text-2xl font-semibold mt-8 mb-4 text-metal-900">Ιδανικές για Επαγγελματικούς Χώρους</h2>
                
                <div className="grid md:grid-cols-3 gap-4 my-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-metal-900">Δικηγορικά Γραφεία</h4>
                    <p className="text-sm text-metal-600 mt-2">Ασφαλής αρχειοθέτηση νομικών εγγράφων</p>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-metal-900">Δημόσιες Υπηρεσίες</h4>
                    <p className="text-sm text-metal-600 mt-2">Οργάνωση διοικητικών αρχείων</p>
                  </div>
                  
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-metal-900">Βιομηχανικά Αρχεία</h4>
                    <p className="text-sm text-metal-600 mt-2">Διαχείριση τεχνικών εγγράφων</p>
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg mt-8">
                  <h3 className="text-xl font-semibold mb-3 text-metal-900">Γιατί να Επιλέξετε τις Αρχειοθήκες της Stereom.gr</h3>
                  <ul className="space-y-2 text-metal-700">
                    <li>✓ <strong>Οργάνωση Εγγράφων:</strong> Συστηματική κατηγοριοποίηση και εύκολη ανεύρεση αρχείων</li>
                    <li>✓ <strong>Εξοικονόμηση Χώρου:</strong> Βελτιστοποιημένος σχεδιασμός για μέγιστη αξιοποίηση του γραφείου</li>
                    <li>✓ <strong>Ασφάλεια:</strong> Προστασία εμπιστευτικών εγγράφων με προηγμένα συστήματα κλειδώματος</li>
                    <li>✓ <strong>Αντοχή:</strong> Κατασκευή για εντατική καθημερινή χρήση σε επαγγελματικό περιβάλλον</li>
                    <li>✓ <strong>Συμμόρφωση:</strong> Πληρούν τις προδιαγραφές για επαγγελματική αρχειοθέτηση</li>
                  </ul>
                </div>
              </div>

              {/* Product showcase if filing cabinet products exist */}
              {filingCabinetProducts.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold mb-6 text-metal-900">Τα Προϊόντα Μας</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filingCabinetProducts.slice(0, 6).map((product) => (
                      <div key={product.id} className="bg-white rounded-lg shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
                        <img 
                          src={product.image} 
                          alt={product.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                          <h3 className="font-medium text-metal-900 mb-2">{product.title}</h3>
                          <p className="text-sm text-metal-600 mb-4">{product.description}</p>
                          <Button 
                            onClick={() => handleProductClick(product.id)}
                            className="w-full bg-blue-600 hover:bg-blue-700"
                          >
                            Δείτε Περισσότερα
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
            
            <ContactCTA onRequestQuote={handleRequestQuote} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import { Button } from "@/components/ui/button";
import { Users, Dumbbell, GraduationCap, Building } from "lucide-react";
import { products } from "@/data/products";
export default function MetallicLockers() {
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
  const lockerProducts = products.filter(product => product.category === "locker" || product.type === "locker");
  const handleRequestQuote = () => {
    navigate("/?scrollTo=contact");
  };
  return <>
      <SEOHead title="Μεταλλικά Lockers Χονδρική Ελλάδα | Ντουλάπια Αποδυτηρίων | Stereom.gr" description="Μεταλλικά lockers χονδρική για γυμναστήρια, σχολεία, εργασιακούς χώρους. Πολλαπλές θέσεις, γυάλινες πόρτες, προηγμένα κλειδώματα. Παραγωγή στην Ελλάδα." canonical="/metallic-lockers" image="/lovable-uploads/IMG_13742.webp" />
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
              <h1 className="text-4xl font-bold mb-4">Μεταλλικά Lockers Χονδρική Ελλάδα</h1>
              <p className="text-xl text-metal-600 max-w-3xl mx-auto">
                Ανακαλύψτε την προηγμένη γκάμα μεταλλικών lockers για γυμναστήρια, σχολεία και εργασιακούς χώρους. Ασφαλείς ατομικές θυρίδες με σύγχρονα συστήματα κλειδώματος.
              </p>
            </motion.div>

            {/* Industry Applications */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 border rounded-lg">
                <Dumbbell className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Γυμναστήρια & Spa</h3>
                <p className="text-sm text-gray-600">Αποδυτήρια με υψηλή κίνηση και ανάγκη ασφαλείας</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <GraduationCap className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Σχολεία & Πανεπιστήμια</h3>
                <p className="text-sm text-gray-600">Ντουλάπια για μαθητές και προσωπικό</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <Building className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Εργασιακοί Χώροι</h3>
                <p className="text-sm text-gray-600">Προσωπικά ντουλάπια για υπαλλήλους</p>
              </div>
              <div className="text-center p-6 border rounded-lg">
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">Δημόσιοι Χώροι</h3>
                <p className="text-sm text-gray-600">Κολυμβητήρια, αθλητικά κέντρα, εμπορικά</p>
              </div>
            </div>

            {/* Locker Types */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Τύποι Μεταλλικών Lockers</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-700">Μονή Θέση Lockers</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 1 θέση ανά κολώνα</li>
                    <li>• Μέγιστος χώρος αποθήκευσης</li>
                    <li>• Ιδανικά για αθλητικό εξοπλισμό</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-700">Διπλή Θέση Lockers</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 2 θέσεις ανά κολώνα</li>
                    <li>• Βέλτιστη χρήση χώρου</li>
                    <li>• Χρήση σε σχολεία και γραφεία</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-zinc-700">Πολλαπλών Θέσεων Lockers</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 3-6 θέσεις ανά κολώνα</li>
                    <li>• Μέγιστη εκμετάλλευση χώρου</li>
                    <li>• Ιδανικά για προσωπικά είδη</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Dimensions and Configurations */}
            

            {/* Industries Served */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Συνήθεις Κλάδοι Χρήσης Lockers</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Αθλητικές Εγκαταστάσεις</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Γυμναστήρια και fitness centers</li>
                    <li>• Κολυμβητήρια και αθλητικά κέντρα</li>
                    <li>• Γήπεδα τένις και squash</li>
                    <li>• Spa και wellness centers</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Εκπαιδευτικά Ιδρύματα</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Δημοτικά και γυμνάσια</li>
                    <li>• Λύκεια και κολλέγια</li>
                    <li>• Πανεπιστήμια και ΤΕΙ</li>
                    <li>• Φροντιστήρια και ιδιωτικά σχολεία</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Εργασιακοί Χώροι</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Εργοστάσια και βιομηχανίες</li>
                    <li>• Γραφεία και επιχειρήσεις</li>
                    <li>• Νοσοκομεία και κλινικές</li>
                    <li>• Ξενοδοχεία και εστιατόρια</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Δημόσιοι Χώροι</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Αεροδρόμια και σταθμοί</li>
                    <li>• Εμπορικά κέντρα</li>
                    <li>• Βιβλιοθήκες και μουσεία</li>
                    <li>• Δημαρχεία και δημόσιες υπηρεσίες</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Special Features */}
            <section className="mb-12 bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-center text-zinc-950">Ειδικά Χαρακτηριστικά Lockers</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-zinc-700">Αεραγωγοί & Εξαερισμός</h3>
                  <p className="text-gray-600">Διάτρητες πόρτες και αεραγωγοί για καλύτερη κυκλοφορία αέρα και πρόληψη οσμών</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-zinc-700">Αντιβακτηριακή Επίστρωση</h3>
                  <p className="text-gray-600">Ειδική βαφή με αντιβακτηριακές ιδιότητες για υγιεινό περιβάλλον</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-zinc-800">Κρεμάστρες & Ράφια</h3>
                  <p className="text-gray-600">Εσωτερικά αξεσουάρ για βέλτιστη οργάνωση προσωπικών αντικειμένων</p>
                </div>
              </div>
            </section>

            {/* Product Gallery */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold mb-8 text-center">Δείγματα Μεταλλικών Lockers</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {lockerProducts.slice(0, 6).map(product => <div key={product.id} className="border rounded-lg overflow-hidden">
                    <img src={product.image} alt={`Μεταλλικό locker ${product.title}`} className="w-full h-48 object-contain bg-gray-50" loading="lazy" />
                    <div className="p-4">
                      <h3 className="font-semibold mb-2">{product.title}</h3>
                      <p className="text-sm mb-3 text-gray-200">{product.description}</p>
                      <Button size="sm" className="w-full" onClick={() => navigate(`/product/${product.id}`)}>
                        Δείτε Λεπτομέρειες
                      </Button>
                    </div>
                  </div>)}
              </div>
            </section>

            {/* CTA Section */}
            <section className="text-center bg-blue-50 p-8 rounded-lg">
              <h2 className="text-3xl font-bold mb-4 text-zinc-950">Ζητήστε Προσφορά για Μεταλλικά Lockers</h2>
              <p className="text-lg text-gray-600 mb-6">
                Εξασφαλίστε ασφαλείς και λειτουργικές λύσεις αποθήκευσης για τους χώρους σας
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={handleRequestQuote}>
                  Ζήτηση Προσφοράς
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/products?category=locker')}>
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
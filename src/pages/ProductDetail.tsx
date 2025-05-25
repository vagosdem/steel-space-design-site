import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Ruler, Package, Square } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

// Product data with new WebP images
const products = [{
  id: "red-black-storage-cabinet",
  title: "Κόκκινη-Μαύρη Μεταλλική Ντουλάπα Διπλής Πόρτας",
  description: "Στιβαρή μεταλλική ντουλάπα με δύο πόρτες σε κόκκινο και μαύρο χρώμα, ιδανική για βιομηχανικούς χώρους και εργαστήρια που χρειάζονται ανθεκτικές λύσεις αποθήκευσης.",
  features: ["Διπλές πόρτες για εύκολη πρόσβαση", "Κόκκινο και μαύρο χρώμα για βιομηχανική εμφάνιση", "Ανθεκτική μεταλλική κατασκευή βαρέως τύπου", "Ιδανική για εργαστήρια και βιομηχανικούς χώρους", "Ασφαλές σύστημα κλειδώματος", "Αντιχαρακτική και αντισκωριακή επιφάνεια"],
  dimensions: {
    width: "100 εκ.",
    height: "200 εκ.",
    depth: "50 εκ."
  },
  image: "/lovable-uploads/IMG_054822.webp",
  details: "Η κόκκινη-μαύρη μεταλλική ντουλάπα διπλής πόρτας είναι σχεδιασμένη ειδικά για βιομηχανικούς χώρους και εργαστήρια. Το χαρακτηριστικό κόκκινο και μαύρο χρώμα προσδίδει έντονη βιομηχανική αισθητική, ενώ η στιβαρή κατασκευή εγγυάται μακροχρόνια αντοχή σε απαιτητικά περιβάλλοντα εργασίας. Οι διπλές πόρτες παρέχουν άνετη πρόσβαση στο εσωτερικό και μέγιστη χωρητικότητα αποθήκευσης."
}, {
  id: "white-glass-cabinet",
  title: "Μοντέρνα lockers",
  description: "Σύγχρονα μεταλλικά ντουλάπια με μοντέρνο σχεδιασμό, ιδανικά για επαγγελματικούς χώρους, γραφεία και σύγχρονες εγκαταστάσεις.",
  features: ["Μοντέρνος και καθαρός σχεδιασμός", "Ανθεκτική μεταλλική κατασκευή", "Εργονομικό σύστημα κλειδώματος", "Αντισκωριακή επιφάνεια", "Ιδανικά για σύγχρονους χώρους"],
  dimensions: {
    width: "95 εκ.",
    height: "195 εκ.",
    depth: "45 εκ."
  },
  image: "/lovable-uploads/IMG_10252.webp",
  details: "Τα μοντέρνα lockers συνδυάζουν την αισθητική με τη λειτουργικότητα. Με καθαρές γραμμές και σύγχρονο σχεδιασμό, είναι ιδανικά για επαγγελματικούς χώρους, γραφεία και σύγχρονες εγκαταστάσεις που θέλουν να προβάλουν μια μοντέρνα εικόνα. Η υψηλής ποιότητας μεταλλική κατασκευή εγγυάται αντοχή και μακροχρόνια χρήση."
}, {
  id: "professional-storage-cabinet",
  title: "Επαγγελματικό Ντουλάπι Αποθήκευσης",
  description: "Μεταλλικό ντουλάπι με πολλαπλές θέσεις και εργονομικό σχεδιασμό, ιδανικό για οργανωμένους επαγγελματικούς χώρους.",
  features: ["Πολλαπλές θέσεις αποθήκευσης", "Εργονομικός σχεδιασμός", "Ανθεκτική μεταλλική κατασκευή", "Προσαρμοσμένες λύσεις οργάνωσης", "Εύκολη συντήρηση και καθαρισμός"],
  dimensions: {
    width: "85 εκ.",
    height: "180 εκ.",
    depth: "42 εκ."
  },
  image: "/lovable-uploads/IMG_23802.webp",
  details: "Το επαγγελματικό ντουλάπι αποθήκευσης προσφέρει εξαιρετική οργάνωση και λειτουργικότητα για σύγχρονους επαγγελματικούς χώρους. Με τον εργονομικό του σχεδιασμό και τις πολλαπλές θέσεις αποθήκευσης, είναι η ιδανική λύση για γραφεία που χρειάζονται αποτελεσματική διαχείριση χώρου."
}, {
  id: "modern-locker-system",
  title: "Μοντέρνο Σύστημα Ντουλαπιών",
  description: "Σύγχρονο σύστημα ντουλαπιών με καθαρές γραμμές και ανθεκτική κατασκευή για επαγγελματικούς χώρους.",
  features: ["Μοντέρνος σχεδιασμός με καθαρές γραμμές", "Ανθεκτική μεταλλική κατασκευή", "Κλειδαριά ασφαλείας", "Σύστημα εξαερισμού", "Εύκολη εγκατάσταση"],
  dimensions: {
    width: "80 εκ.",
    height: "185 εκ.",
    depth: "40 εκ."
  },
  image: "/lovable-uploads/IMG_13722.webp",
  details: "Το μοντέρνο σύστημα ντουλαπιών συνδυάζει την αισθητική με τη λειτουργικότητα. Οι καθαρές γραμμές και η σύγχρονη εμφάνιση το καθιστούν ιδανικό για χώρους που θέλουν να προβάλουν μια επαγγελματική και μοντέρνα εικόνα."
}, {
  id: "multi-door-locker-system",
  title: "Σύστημα Πολλαπλών Ντουλαπιών",
  description: "Ανθεκτικά μεταλλικά ντουλάπια με πολλαπλές πόρτες και θέσεις, σχεδιασμένα για αποδυτήρια και γυμναστήρια.",
  features: ["Πολλαπλές θέσεις αποθήκευσης", "Ατομικές κλειδαριές ασφαλείας", "Μεταλλική κατασκευή υψηλής αντοχής", "Αντισκωριακή επεξεργασία", "Εύκολη εγκατάσταση και προσαρμογή"],
  dimensions: {
    width: "120 εκ.",
    height: "180 εκ.",
    depth: "40 εκ."
  },
  image: "/lovable-uploads/IMG_13742.webp",
  details: "Το σύστημα πολλαπλών ντουλαπιών είναι ιδανικό για χώρους με υψηλή κινητικότητα, όπως γυμναστήρια, σχολεία και επαγγελματικοί χώροι. Προσφέρει οργανωμένη αποθήκευση για πολλούς χρήστες ταυτόχρονα, με έμφαση στην ασφάλεια και τη λειτουργικότητα."
}, {
  id: "colorful-school-lockers",
  title: "Πολύχρωμα Σχολικά Ντουλάπια",
  description: "Φωτεινά και χαρούμενα ντουλάπια με διάφορα χρώματα, ιδανικά για σχολικές εγκαταστάσεις και παιδικούς σταθμούς.",
  features: ["Πολύχρωμος σχεδιασμός", "Φιλικά στα παιδιά υλικά", "Στρογγυλεμένες γωνίες για ασφάλεια", "Αριθμημένες θέσεις", "Εύκολο στο καθάρισμα"],
  dimensions: {
    width: "100 εκ.",
    height: "160 εκ.",
    depth: "35 εκ."
  },
  image: "/lovable-uploads/IMG_21202.webp",
  details: "Τα πολύχρωμα σχολικά ντουλάπια είναι ειδικά σχεδιασμένα για εκπαιδευτικούς χώρους και παιδικές εγκαταστάσεις. Τα φωτεινά χρώματα προάγουν τη θετική διάθεση και διευκολύνουν τα παιδιά να αναγνωρίζουν τον προσωπικό τους χώρο αποθήκευσης."
}, {
  id: "industrial-storage-solution",
  title: "Βιομηχανική Λύση Αποθήκευσης",
  description: "Ανθεκτικά μεταλλικά ντουλάπια για βιομηχανικούς χώρους, με έμφαση στην αντοχή και τη λειτουργικότητα.",
  features: ["Κατασκευή βαρέως τύπου", "Βιομηχανικής ποιότητας υλικά", "Ασφαλή συστήματα κλειδώματος", "Αντοχή σε δύσκολες συνθήκες", "Μεγάλη διάρκεια ζωής"],
  dimensions: {
    width: "90 εκ.",
    height: "200 εκ.",
    depth: "50 εκ."
  },
  image: "/lovable-uploads/IMG_99002.webp",
  details: "Η βιομηχανική λύση αποθήκευσης είναι σχεδιασμένη για τις απαιτητικές συνθήκες των βιομηχανικών χώρων. Με την κατασκευή βαρέως τύπου και τα υλικά βιομηχανικής ποιότητας, προσφέρει μέγιστη αντοχή και αξιοπιστία σε δύσκολα περιβάλλοντα εργασίας."
}, {
  id: "professional-office-lockers",
  title: "Επαγγελματικά Ντουλάπια Γραφείου",
  description: "Κομψά μεταλλικά ντουλάπια σχεδιασμένα ειδικά για σύγχρονους επαγγελματικούς χώρους και γραφεία.",
  features: ["Επαγγελματικός σχεδιασμός", "Καθαρές γραμμές", "Ασφαλή συστήματα", "Εργονομική λειτουργία", "Σύγχρονη αισθητική"],
  dimensions: {
    width: "75 εκ.",
    height: "175 εκ.",
    depth: "38 εκ."
  },
  image: "/lovable-uploads/IMG_97682.webp",
  details: "Τα επαγγελματικά ντουλάπια γραφείου είναι σχεδιασμένα για να ταιριάζουν τέλεια σε σύγχρονους επαγγελματικούς χώρους. Ο κομψός σχεδιασμός και οι καθαρές γραμμές τους τα καθιστούν ιδανικά για γραφεία που θέλουν να διατηρήσουν μια επαγγελματική και οργανωμένη εμφάνιση."
}, {
  id: "compact-storage-units",
  title: "Συμπαγή Αποθηκευτικά Συστήματα",
  description: "Μεταλλικά ντουλάπια με συμπαγή σχεδιασμό, ιδανικά για χώρους με περιορισμένο χώρο αλλά υψηλές απαιτήσεις αποθήκευσης.",
  features: ["Εξοικονόμηση χώρου", "Αποδοτικός σχεδιασμός", "Modular σύστημα", "Μέγιστη αξιοποίηση χώρου", "Ευέλικτη διαμόρφωση"],
  dimensions: {
    width: "70 εκ.",
    height: "170 εκ.",
    depth: "35 εκ."
  },
  image: "/lovable-uploads/IMG_97682.webp",
  details: "Τα συμπαγή αποθηκευτικά συστήματα είναι η ιδανική λύση για χώρους που χρειάζονται μέγιστη αξιοποίηση του διαθέσιμου χώρου. Ο συμπαγής σχεδιασμός και το modular σύστημα επιτρέπουν ευέλικτες διαμορφώσεις που ταιριάζουν σε κάθε χώρο."
}];
export default function ProductDetail() {
  const {
    productId
  } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Το προϊόν δεν βρέθηκε</h1>
          <Button onClick={() => navigate(-1)}>Επιστροφή</Button>
        </div>
      </div>;
  }

  // Get similar products, excluding the current product and limiting to 3
  // Also make sure we don't show the same product twice
  const similarProducts = products.filter(p => p.id !== productId) // Exclude current product
  .slice(0, 3); // Limit to 3 products

  return <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container-section">
        <div className="mb-6">
          <Button variant="outline" onClick={() => navigate(-1)} className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Πίσω
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="flex items-center justify-center">
            <div className="transition-all duration-300">
              <img src={product.image} alt={product.title} className="w-full h-auto object-contain max-h-[500px]" />
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="space-y-6">
            <div>
              <h1 className="text-3xl font-semibold text-black">{product.title}</h1>
              <p className="text-lg text-metal-600 mt-2">{product.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-6 my-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Square size={18} className="text-blue-600" />
                </div>
                <span className="text-sm text-neutral-950">Πλάτος: {product.dimensions?.width || "N/A"}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Ruler size={18} className="text-blue-600" />
                </div>
                <span className="text-sm text-zinc-950">Ύψος: {product.dimensions?.height || "N/A"}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Package size={18} className="text-blue-600" />
                </div>
                <span className="text-sm text-zinc-950">Βάθος: {product.dimensions?.depth || "N/A"}</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-medium text-black mb-2">Χαρακτηριστικά</h2>
              <ul className="list-disc list-inside space-y-1 text-metal-600">
                {product.features.map((feature, index) => <li key={index}>{feature}</li>)}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-medium text-black mb-2">Περισσότερες Πληροφορίες</h2>
              <p className="text-metal-600">{product.details}</p>
            </div>
            
            <div className="pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-xl w-full mb-3" onClick={() => navigate("/#contact")}>
                Ζητήστε Προσφορά
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.6
      }} className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-6">Παρόμοια Προϊόντα</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProducts.map(relatedProduct => <div key={relatedProduct.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center h-64 p-2">
                  <img src={relatedProduct.image} alt={relatedProduct.title} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black mb-2">{relatedProduct.title}</h3>
                  <p className="text-metal-600 line-clamp-2">{relatedProduct.description}</p>
                  <Button variant="outline" className="mt-4 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-xl w-full" onClick={() => {
                navigate(`/product/${relatedProduct.id}`);
                window.scrollTo(0, 0);
              }}>
                    Περισσότερες Πληροφορίες
                  </Button>
                </div>
              </div>)}
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>;
}
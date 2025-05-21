
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Ruler, Package, Square } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

// Product data
const products = [
  {
    id: "white-brown-locker",
    title: "Ντουλάπια Πορτοκαλί με Λευκό Πλαίσιο",
    description: "Κλασικά μεταλλικά ντουλάπια πολλαπλών θέσεων με πορτοκαλί πόρτες και λευκό πλαίσιο για επαγγελματικούς χώρους και αποδυτήρια.",
    features: [
      "Ανθεκτική μεταλλική κατασκευή",
      "Διαθέσιμο σε πολλαπλά μεγέθη",
      "Κλειδαριά ασφαλείας",
      "Εξαερισμός στις πόρτες",
      "Αντισκωριακή βαφή"
    ],
    dimensions: {
      width: "80 εκ.",
      height: "180 εκ.",
      depth: "40 εκ."
    },
    image: "/lovable-uploads/64d9716d-261a-44b6-b469-c4dff49cea91.png",
    details: "Τα μεταλλικά ντουλάπια πορτοκαλί με λευκό πλαίσιο είναι ιδανικά για εργασιακούς χώρους, αποδυτήρια γυμναστηρίων και αθλητικές εγκαταστάσεις. Προσφέρουν ασφαλή αποθήκευση προσωπικών αντικειμένων, με μοντέρνα αισθητική που ταιριάζει σε σύγχρονους επαγγελματικούς χώρους."
  },
  {
    id: "yellow-lockers",
    title: "Κίτρινα Μεταλλικά Ντουλάπια",
    description: "Φωτεινά κίτρινα ντουλάπια με μαύρο πλαίσιο και μεταλλική κατασκευή, ιδανικά για παιδικούς σταθμούς, σχολικές εγκαταστάσεις και χαρούμενους χώρους.",
    features: [
      "Ανθεκτική κατασκευή για παιδική χρήση",
      "Στρογγυλεμένες γωνίες για ασφάλεια",
      "Εύκολο στο καθάρισμα",
      "Πολλαπλές θέσεις αποθήκευσης",
      "Φωτεινό χρώμα που διευκολύνει την αναγνώριση"
    ],
    dimensions: {
      width: "75 εκ.",
      height: "160 εκ.",
      depth: "35 εκ."
    },
    image: "/lovable-uploads/f308ce90-e4fe-4c0d-b442-8d3bed0566f3.png",
    details: "Τα κίτρινα μεταλλικά ντουλάπια είναι ειδικά σχεδιασμένα για εκπαιδευτικούς χώρους και παιδικές εγκαταστάσεις. Το φωτεινό χρώμα προάγει τη θετική διάθεση και διευκολύνει τα παιδιά να αναγνωρίζουν τον προσωπικό τους χώρο αποθήκευσης."
  },
  {
    id: "orange-white-locker",
    title: "Ντουλάπια Locker Πολλαπλών Θέσεων",
    description: "Κλασικά μεταλλικά ντουλάπια πολλαπλών θέσεων με πορτοκαλί πόρτες και λευκό πλαίσιο για επαγγελματικούς χώρους και αποδυτήρια.",
    features: [
      "Πολλαπλές θέσεις αποθήκευσης",
      "Ατομικές κλειδαριές ασφαλείας",
      "Μεταλλική κατασκευή υψηλής αντοχής",
      "Αντισκωριακή επεξεργασία",
      "Εύκολη εγκατάσταση και προσαρμογή"
    ],
    dimensions: {
      width: "80 εκ.",
      height: "180 εκ.",
      depth: "40 εκ."
    },
    image: "/lovable-uploads/64d9716d-261a-44b6-b469-c4dff49cea91.png",
    details: "Τα ντουλάπια locker πολλαπλών θέσεων είναι ιδανικά για χώρους με υψηλή κινητικότητα, όπως γυμναστήρια, σχολεία και επαγγελματικοί χώροι. Προσφέρουν οργανωμένη αποθήκευση για πολλούς χρήστες ταυτόχρονα, με έμφαση στην ασφάλεια και τη λειτουργικότητα."
  },
  {
    id: "red-school-lockers",
    title: "Κόκκινα Σχολικά Ντουλάπια",
    description: "Ανθεκτικά μεταλλικά ντουλάπια σε κόκκινο χρώμα με μαύρο πλαίσιο, σχεδιασμένα για σχολεία και εκπαιδευτικά ιδρύματα με αριθμημένες θήκες.",
    features: [
      "Αριθμημένες θέσεις",
      "Ενισχυμένες μεντεσέδες για συχνή χρήση",
      "Προσαρμόσιμα ράφια",
      "Αντιβανδαλιστική κατασκευή",
      "Μεγάλη διάρκεια ζωής"
    ],
    dimensions: {
      width: "85 εκ.",
      height: "175 εκ.",
      depth: "42 εκ."
    },
    image: "/lovable-uploads/3bb3c4b3-5ff5-4519-9c92-967be1786ba4.png",
    details: "Τα κόκκινα σχολικά ντουλάπια είναι ειδικά σχεδιασμένα για το απαιτητικό περιβάλλον των εκπαιδευτικών ιδρυμάτων. Διαθέτουν ενισχυμένη κατασκευή που αντέχει στην καθημερινή χρήση από μαθητές, με έμφαση στην ασφάλεια και την πρακτικότητα."
  },
  {
    id: "blue-metallic-locker",
    title: "Μπλε Μεταλλικά Ντουλάπια",
    description: "Μοντέρνα μεταλλικά ντουλάπια σε μπλε χρώμα με λευκό πλαίσιο για χρήση σε γυμναστήρια και σχολεία.",
    features: [
      "Σύγχρονη αισθητική",
      "Ηχομονωτικός σχεδιασμός",
      "Ρυθμιζόμενα πόδια για ανώμαλες επιφάνειες",
      "Εσωτερικά ράφια και γάντζοι",
      "Διαθέσιμα σε διάφορες διαστάσεις"
    ],
    dimensions: {
      width: "78 εκ.",
      height: "185 εκ.",
      depth: "38 εκ."
    },
    image: "/lovable-uploads/82e9823c-05e0-4a3d-bb0e-1a8079b79bf8.png",
    details: "Τα μπλε μεταλλικά ντουλάπια συνδυάζουν τη μοντέρνα αισθητική με τη λειτουργικότητα. Το ηρεμιστικό μπλε χρώμα δημιουργεί θετική ατμόσφαιρα σε επαγγελματικούς χώρους, ενώ η ανθεκτική κατασκευή τους εξασφαλίζει μεγάλη διάρκεια ζωής."
  },
  {
    id: "orange-display-cabinet",
    title: "Πορτοκαλί Βιτρίνα",
    description: "Μεταλλική βιτρίνα με γυάλινη πόρτα σε έντονο πορτοκαλί χρώμα, ιδανική για εκθετήρια και αποθήκευση προϊόντων.",
    features: [
      "Γυάλινη πόρτα για άμεση προβολή περιεχομένου",
      "Ρυθμιζόμενα ράφια",
      "Κλειδαριά ασφαλείας",
      "Ανθεκτική βαφή υψηλής αντοχής",
      "Εύκολη συναρμολόγηση"
    ],
    dimensions: {
      width: "90 εκ.",
      height: "200 εκ.",
      depth: "45 εκ."
    },
    image: "/lovable-uploads/c142e30d-546a-43fe-bbe9-9367ce9e5bb1.png",
    details: "Η πορτοκαλί βιτρίνα είναι ιδανική για χώρους όπου απαιτείται η προβολή προϊόντων ή αντικειμένων με ασφάλεια. Συνδυάζει τη λειτουργικότητα με την εντυπωσιακή εμφάνιση, προσθέτοντας χρώμα και χαρακτήρα στον επαγγελματικό σας χώρο."
  },
  {
    id: "turquoise-orange-locker",
    title: "Ντουλάπι Τυρκουάζ με Πορτοκαλί",
    description: "Μοντέρνος συνδυασμός χρωμάτων με τυρκουάζ πόρτα και πορτοκαλί πλαίσιο, ιδανικά για δημιουργικούς χώρους υποσχετικής εργασίας.",
    features: [
      "Μοντέρνος σχεδιασμός δύο χρωμάτων",
      "Εργονομικές λαβές",
      "Ενισχυμένοι μεντεσέδες",
      "Προσαρμοσμένες λύσεις αποθήκευσης",
      "Εύκολη συντήρηση και καθαρισμός"
    ],
    dimensions: {
      width: "82 εκ.",
      height: "190 εκ.",
      depth: "40 εκ."
    },
    image: "/lovable-uploads/de48c2ac-8f96-4f1d-987f-3fa9c559618f.png",
    details: "Το ντουλάπι με τυρκουάζ πόρτα και πορτοκαλί πλαίσιο είναι ιδανικό για σύγχρονους, δημιουργικούς χώρους όπως start-ups, γραφεία design και συνεργατικούς χώρους. Ο τολμηρός συνδυασμός χρωμάτων προσθέτει ενέργεια και προσωπικότητα στο χώρο."
  },
  {
    id: "grey-storage-cabinet",
    title: "Γκρι Ντουλάπι Αποθήκευσης",
    description: "Κλασικό γκρι ντουλάπι αποθήκευσης για επαγγελματικούς χώρους με ράφια προσαρμόσιμα και υψηλή χωρητικότητα.",
    features: [
      "Υψηλή χωρητικότητα αποθήκευσης",
      "Προσαρμόσιμα εσωτερικά ράφια",
      "Εύκολη συναρμολόγηση",
      "Κλασικό σχέδιο που ταιριάζει παντού",
      "Αντικραδασμική προστασία"
    ],
    dimensions: {
      width: "95 εκ.",
      height: "210 εκ.",
      depth: "50 εκ."
    },
    image: "/lovable-uploads/d6bb8bc5-c886-4cd5-8dda-0b5c84a7e94e.png",
    details: "Το γκρι ντουλάπι αποθήκευσης είναι μια διαχρονική επιλογή για επαγγελματικούς χώρους που θέλουν να συνδυάσουν την πρακτικότητα με τη διακριτικότητα. Προσφέρει μεγάλο αποθηκευτικό χώρο με προσαρμόσιμα ράφια για βέλτιστη οργάνωση του χώρου και των αντικειμένων."
  },
  {
    id: "metal-cabinet-glass",
    title: "Μεταλλική Ντουλάπα με Τζάμια",
    description: "Επαγγελματική μεταλλική ντουλάπα με γυάλινες πόρτες, ιδανική για αρχειοθέτηση σε γραφεία και χώρους υγείας.",
    features: [
      "Γυάλινες πόρτες για εύκολη προβολή περιεχομένου",
      "Ανθεκτική μεταλλική κατασκευή",
      "Ρυθμιζόμενα εσωτερικά ράφια",
      "Κλειδαριά ασφαλείας",
      "Αντιχαρακτική επιφάνεια"
    ],
    dimensions: {
      width: "95 εκ.",
      height: "195 εκ.",
      depth: "45 εκ."
    },
    image: "/lovable-uploads/c1ccbc5f-2ae1-4c2b-98b3-88300b22ae67.png",
    details: "Η μεταλλική ντουλάπα με γυάλινες πόρτες συνδυάζει την ασφάλεια και την αντοχή της μεταλλικής κατασκευής με τη λειτουργικότητα της άμεσης προβολής του περιεχομένου. Είναι ιδανική για χώρους γραφείων, ιατρεία, φαρμακεία και άλλους επαγγελματικούς χώρους όπου απαιτείται εύκολη πρόσβαση και οργάνωση των αντικειμένων."
  },
  {
    id: "metal-drawers-multi",
    title: "Συρταριέρες Μεταλλικές Πολλαπλών Χρωμάτων",
    description: "Μεταλλικές συρταριέρες σε διάφορα χρώματα για αρχειοθέτηση και αποθήκευση αντικειμένων σε επαγγελματικούς χώρους.",
    features: [
      "Πολύχρωμος σχεδιασμός",
      "Συρτάρια με τηλεσκοπικούς οδηγούς",
      "Ανθεκτική μεταλλική κατασκευή",
      "Κεντρική κλειδαριά ασφαλείας",
      "Εργονομικές λαβές"
    ],
    dimensions: {
      width: "70 εκ.",
      height: "110 εκ.",
      depth: "50 εκ."
    },
    image: "/lovable-uploads/28a84624-2235-4f42-a8df-59c526397527.png",
    details: "Οι μεταλλικές συρταριέρες πολλαπλών χρωμάτων προσφέρουν μια ζωηρή και δημιουργική λύση αποθήκευσης για επαγγελματικούς χώρους. Ο μοντέρνος πολύχρωμος σχεδιασμός τους, σε συνδυασμό με τη λειτουργικότητα της μεταλλικής κατασκευής, τις καθιστά ιδανικές για διαφορετικά περιβάλλοντα εργασίας, από δημιουργικά γραφεία μέχρι εκπαιδευτικούς χώρους."
  }
];

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === productId);
  
  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Το προϊόν δεν βρέθηκε</h1>
          <Button onClick={() => navigate(-1)}>Επιστροφή</Button>
        </div>
      </div>
    );
  }
  
  // Get similar products, excluding the current product and limiting to 3
  // Also make sure we don't show the same product twice
  const similarProducts = products
    .filter(p => p.id !== productId)  // Exclude current product
    .slice(0, 3);  // Limit to 3 products

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container-section">
        <div className="mb-6">
          <Button 
            variant="outline" 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Πίσω
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="transition-all duration-300">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto object-contain max-h-[500px]"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-semibold text-black">{product.title}</h1>
              <p className="text-lg text-metal-600 mt-2">{product.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-6 my-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Square size={18} className="text-blue-600" />
                </div>
                <span className="text-sm">Πλάτος: {product.dimensions?.width || "N/A"}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Ruler size={18} className="text-blue-600" />
                </div>
                <span className="text-sm">Ύψος: {product.dimensions?.height || "N/A"}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Package size={18} className="text-blue-600" />
                </div>
                <span className="text-sm">Βάθος: {product.dimensions?.depth || "N/A"}</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-medium text-black mb-2">Χαρακτηριστικά</h2>
              <ul className="list-disc list-inside space-y-1 text-metal-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-medium text-black mb-2">Περισσότερες Πληροφορίες</h2>
              <p className="text-metal-600">{product.details}</p>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 rounded-xl w-full mb-3"
                onClick={() => navigate("/#contact")}
              >
                Ζητήστε Προσφορά
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-black mb-6">Παρόμοια Προϊόντα</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProducts.map(relatedProduct => (
              <div key={relatedProduct.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center h-64 p-2">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.title} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black mb-2">{relatedProduct.title}</h3>
                  <p className="text-metal-600 line-clamp-2">{relatedProduct.description}</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-xl w-full"
                    onClick={() => {
                      navigate(`/product/${relatedProduct.id}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Περισσότερες Πληροφορίες
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}

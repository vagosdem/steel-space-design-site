
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    image: "/lovable-uploads/00772ab6-6083-4b70-8f34-b4542e7c725b.png",
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
    image: "/lovable-uploads/3bb3c4b3-5ff5-4519-9c92-967be1786ba4.png",
    details: "Τα κόκκινα σχολικά ντουλάπια είναι ειδικά σχεδιασμένα για το απαιτητικό περιβάλλον των εκπαιδευτικών ιδρυμάτων. Διαθέτουν ενισχυμένη κατασκευή που αντέχει στην καθημερινή χρήση από μαθητές, με έμφαση στην ασφάλεια και την πρακτικότητα."
  },
  {
    id: "blue-locker",
    title: "Μπλε Μεταλλικά Ντουλάπια",
    description: "Μοντέρνα μεταλλικά ντουλάπια σε μπλε χρώμα με λευκό πλαίσιο για χρήση σε γυμναστήρια και σχολεία.",
    features: [
      "Σύγχρονη αισθητική",
      "Ηχομονωτικός σχεδιασμός",
      "Ρυθμιζόμενα πόδια για ανώμαλες επιφάνειες",
      "Εσωτερικά ράφια και γάντζοι",
      "Διαθέσιμα σε διάφορες διαστάσεις"
    ],
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
    image: "/lovable-uploads/c142e30d-546a-43fe-bbe9-9367ce9e5bb1.png",
    details: "Η πορτοκαλί βιτρίνα είναι ιδανική για χώρους όπου απαιτείται η προβολή προϊόντων ή αντικειμένων με ασφάλεια. Συνδυάζει τη λειτουργικότητα με την εντυπωσιακή εμφάνιση, προσθέτοντας χρώμα και χαρακτήρα στον επαγγελματικό σας χώρο."
  },
  {
    id: "turquoise-orange-locker",
    title: "Ντουλάπι Τυρκουάζ με Πορτοκαλί",
    description: "Μοντέρνος συνδυασμός χρωμάτων με τυρκουάζ πόρτα και πορτοκαλί πλαίσιο, ιδανικά για δημιουργικούς χώρους εργασίας.",
    features: [
      "Μοντέρνος σχεδιασμός δύο χρωμάτων",
      "Εργονομικές λαβές",
      "Ενισχυμένοι μεντεσέδες",
      "Προσαρμοσμένες λύσεις αποθήκευσης",
      "Εύκολη συντήρηση και καθαρισμός"
    ],
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
    image: "/lovable-uploads/d6bb8bc5-c886-4cd5-8dda-0b5c84a7e94e.png",
    details: "Το γκρι ντουλάπι αποθήκευσης είναι μια διαχρονική επιλογή για επαγγελματικούς χώρους που θέλουν να συνδυάσουν την πρακτικότητα με τη διακριτικότητα. Προσφέρει μεγάλο αποθηκευτικό χώρο με προσαρμόσιμα ράφια για βέλτιστη οργάνωση του χώρου και των αντικειμένων."
  }
];

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  
  const product = products.find(p => p.id === productId);
  
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
            <div className="bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto object-contain max-h-[500px] rounded-xl p-0"
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
              <h1 className="text-3xl font-semibold text-metal-900">{product.title}</h1>
              <p className="text-lg text-metal-600 mt-2">{product.description}</p>
            </div>
            
            <div>
              <h2 className="text-xl font-medium text-metal-900 mb-2">Χαρακτηριστικά</h2>
              <ul className="list-disc list-inside space-y-1 text-metal-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 rounded-xl"
                onClick={() => navigate("/#contact")}
              >
                Ζητήστε Προσφορά
              </Button>
            </div>
          </motion.div>
        </div>
        
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-metal-900 mb-4">Περισσότερες Πληροφορίες</h2>
            <p className="text-metal-600">{product.details}</p>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-metal-900 mb-6">Παρόμοια Προϊόντα</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products
              .filter(p => p.id !== productId)
              .slice(0, 3)
              .map(relatedProduct => (
                <div key={relatedProduct.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                  <div className="p-0">
                    <img 
                      src={relatedProduct.image} 
                      alt={relatedProduct.title} 
                      className="w-full h-48 object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-metal-900 mb-2">{relatedProduct.title}</h3>
                    <p className="text-metal-600 line-clamp-2">{relatedProduct.description}</p>
                    <Button 
                      variant="outline" 
                      className="mt-4 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-xl w-full"
                      onClick={() => navigate(`/product/${relatedProduct.id}`)}
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

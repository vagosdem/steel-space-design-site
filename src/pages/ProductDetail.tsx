import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Complete product data with measurements
const products = [{
  id: "metal-cabinet-glass",
  title: "Μεταλλική Ντουλάπα με Τζάμια",
  description: "Επαγγελματική μεταλλική ντουλάπα με γυάλινες πόρτες, ιδανική για αρχειοθέτηση σε γραφεία και χώρους υγείας.",
  longDescription: "Η μεταλλική ντουλάπα με τζάμια είναι σχεδιασμένη να προσφέρει υψηλή λειτουργικότητα σε επαγγελματικούς χώρους με ανάγκη προβολής του περιεχομένου. Κατασκευασμένη από υψηλής ποιότητας μέταλλο με ηλεκτροστατική βαφή και εξοπλισμένη με ανθεκτικές γυάλινες πόρτες ασφαλείας. Ιδανική για χρήση σε ιατρεία, φαρμακεία, εργαστήρια και επαγγελματικά γραφεία όπου απαιτείται τόσο η αποθήκευση όσο και η άμεση οπτική πρόσβαση στο περιεχόμενο.",
  features: [
    "Μεταλλικός σκελετός με ηλεκτροστατική βαφή",
    "Γυάλινες πόρτες ασφαλείας",
    "Κλειδαριά υψηλής ασφάλειας",
    "Ρυθμιζόμενα εσωτερικά ράφια",
    "Αντοχή σε μηχανική καταπόνηση",
    "Εγγύηση 5 ετών"
  ],
  applications: [
    "Ιατρεία & φαρμακεία",
    "Εργαστήρια & χώροι υγείας",
    "Επαγγελματικά γραφεία",
    "Εκθεσιακοί χώροι"
  ],
  measurements: {
    height: "190 εκ.",
    width: "95 εκ.",
    depth: "45 εκ.",
    weight: "65 κιλά",
    shelves: "4 ρυθμιζόμενα ράφια"
  },
  image: "/lovable-uploads/c1ccbc5f-2ae1-4c2b-98b3-88300b22ae67.png",
  gallery: [
    "/lovable-uploads/c1ccbc5f-2ae1-4c2b-98b3-88300b22ae67.png",
    "/lovable-uploads/c4658bc3-024c-4602-beec-fb6449e32749.png"
  ],
  category: "cabinets",
  type: "office",
  color: "white",
  material: "metal",
  features: ["glass-doors", "adjustable-shelves"]
}, {
  id: "orange-white-locker",
  title: "Ντουλάπια Πορτοκαλί με Λευκό Πλαίσιο",
  description: "Κλασικά μεταλλικά ντουλάπια πολλαπλών θέσεων με πορτοκαλί πόρτες και λευκό πλαίσιο για αποδυτήρια και γυμναστήρια.",
  longDescription: "Τα πορτοκαλί ντουλάπια με λευκό πλαίσιο είναι σχεδιασμένα για χώρους που απαιτούν αποθηκευτικές λύσεις με ζωντανά χρώματα και υψηλή αντοχή. Ιδανικά για αποδυτήρια, γυμναστήρια και αθλητικές εγκαταστάσεις, προσφέρουν ασφαλή αποθήκευση προσωπικών αντικειμένων σε έναν εντυπωσιακό συνδυασμό χρωμάτων. Κατασκευασμένα από ανθεκτικό μέταλλο με ειδική επεξεργασία για αντοχή στην υγρασία και τις καθημερινές φθορές.",
  features: [
    "Ανθεκτική μεταλλική κατασκευή",
    "Συνδυασμός πορτοκαλί και λευκού χρώματος",
    "Ανεξάρτητες κλειδαριές ασφαλείας",
    "Θυρίδες εξαερισμού",
    "Εσωτερικά ράφια και κρεμάστρες",
    "Εγγύηση 5 ετών"
  ],
  applications: [
    "Αποδυτήρια & γυμναστήρια",
    "Αθλητικές εγκαταστάσεις",
    "Σχολεία & εκπαιδευτικά ιδρύματα",
    "Χώροι εργασίας με έντονη χρωματική ταυτότητα"
  ],
  measurements: {
    height: "185 εκ.",
    width: "90 εκ.",
    depth: "50 εκ.",
    weight: "60 κιλά",
    shelves: "2 ρυθμιζόμενα ράφια & κρεμάστρα"
  },
  image: "/lovable-uploads/64d9716d-261a-44b6-b469-c4dff49cea91.png",
  gallery: [
    "/lovable-uploads/64d9716d-261a-44b6-b469-c4dff49cea91.png",
    "/lovable-uploads/c4658bc3-024c-4602-beec-fb6449e32749.png"
  ],
  category: "lockers",
  type: "gym",
  color: "orange",
  material: "metal",
  features: ["multiple-units", "ventilation", "key-lock"]
}, {
  id: "metal-drawers-multi",
  title: "Συρταριέρες Μεταλλικές Πολλαπλών Χρωμάτων",
  description: "Μεταλλικές συρταριέρες σε διάφορα χρώματα για αρχειοθέτηση και αποθήκευση αντικειμένων σε επαγγελματικούς χώρους.",
  longDescription: "Οι πολύχρωμες μεταλλικές συρταριέρες μας αποτελούν την ιδανική λύση για την οργάνωση και αρχειοθέτηση εγγράφων και μικροαντικειμένων σε δημιουργικούς επαγγελματικούς χώρους. Συνδυάζοντας διαφορετικά χρώματα σε κάθε συρτάρι, προσφέρουν τόσο λειτουργικότητα όσο και αισθητική αναβάθμιση του χώρου. Κατασκευασμένες από υψηλής ποιότητας μέταλλο με ειδικά σχεδιασμένους οδηγούς για αθόρυβο άνοιγμα και κλείσιμο.",
  features: [
    "Πολύχρωμος σχεδιασμός",
    "Οδηγοί συρταριών υψηλής ποιότητας",
    "Κλειδαριά ασφαλείας",
    "Διαχωριστικά συρταριών",
    "Ροδάκια με φρένο για εύκολη μετακίνηση",
    "Εγγύηση 5 ετών"
  ],
  applications: [
    "Γραφεία & δημιουργικά στούντιο",
    "Ιατρεία & οδοντιατρεία",
    "Εκπαιδευτικούς χώρους",
    "Καταστήματα λιανικής"
  ],
  measurements: {
    height: "75 εκ.",
    width: "45 εκ.",
    depth: "60 εκ.",
    weight: "35 κιλά",
    drawers: "5 συρτάρια διαφορετικού χρώματος"
  },
  image: "/lovable-uploads/28a84624-2235-4f42-a8df-59c526397527.png",
  gallery: [
    "/lovable-uploads/28a84624-2235-4f42-a8df-59c526397527.png",
    "/lovable-uploads/c4658bc3-024c-4602-beec-fb6449e32749.png"
  ],
  category: "drawers",
  type: "creative",
  color: "multi",
  material: "metal",
  features: ["portable", "colorful", "drawer-dividers"]
}, {
  id: "turquoise-orange-locker",
  title: "Ντουλάπι Τυρκουάζ με Πορτοκαλί",
  description: "Μοντέρνος συνδυασμός χρωμάτων με τυρκουάζ πόρτα και πορτοκαλί πλαίσιο, ιδανικά για δημιουργικούς χώρους εργασίας.",
  longDescription: "Η καινοτόμος σειρά μεταλλικών ντουλαπιών μας σε τολμηρούς χρωματικούς συνδυασμούς είναι σχεδιασμένη για να προσφέρει μοναδικό χαρακτήρα σε κάθε χώρο. Με τυρκουάζ πόρτες και πορτοκαλί πλαίσιο, αυτά τα ντουλάπια αποτελούν τόσο λειτουργικά στοιχεία αποθήκευσης όσο και μοναδικά διακοσμητικά στοιχεία. Ιδανικά για creative agencies, αρχιτεκτονικά γραφεία και μοντέρνους επαγγελματικούς χώρους.",
  features: [
    "Μοντέρνος και μοναδικός σχεδιασμός",
    "Υψηλής ποιότητας ηλεκτροστατική βαφή",
    "Δυνατότητα προσαρμογής χρωματικών συνδυασμών",
    "Κλειδαριές ασφαλείας με μοντέρνο σχεδιασμό",
    "Ρυθμιζόμενα εσωτερικά ράφια",
    "Εγγύηση 5 ετών"
  ],
  applications: [
    "Creative agencies & στούντιο σχεδιασμού",
    "Μοντέρνοι επαγγελματικοί χώροι", 
    "Εταιρείες τεχνολογίας",
    "Χώροι coworking"
  ],
  measurements: {
    height: "175 εκ.",
    width: "85 εκ.",
    depth: "40 εκ.",
    weight: "49 κιλά",
    shelves: "2 ρυθμιζόμενα ράφια"
  },
  image: "/lovable-uploads/de48c2ac-8f96-4f1d-987f-3fa9c559618f.png",
  gallery: [
    "/lovable-uploads/de48c2ac-8f96-4f1d-987f-3fa9c559618f.png",
    "/lovable-uploads/0f7b939c-3012-47f1-8cc8-13033e7dd152.png"
  ],
  category: "lockers",
  type: "creative",
  color: "turquoise",
  material: "metal",
  features: ["colorful", "modern-design", "key-lock"]
}, {
  id: "blue-metallic-locker",
  title: "Μπλε Μεταλλικά Ντουλάπια",
  description: "Κομψά μεταλλικά ντουλάπια σε μπλε απόχρωση με ειδικό σχεδιασμό για επαγγελματικούς χώρους και εκπαιδευτικά ιδρύματα.",
  longDescription: "Τα μπλε μεταλλικά ντουλάπια συνδυάζουν την κομψή αισθητική με την πρακτικότητα και την αντοχή. Σχεδιασμένα ειδικά για χώρους που απαιτούν ανθεκτικές λύσεις αποθήκευσης με διακριτική αλλά ελκυστική εμφάνιση. Κατασκευασμένα από υψηλής ποιότητας μέταλλο με ειδική αντισκωριακή προστασία και ηλεκτροστατική βαφή που διασφαλίζει τη μακροχρόνια διατήρηση του χρώματος και της αντοχής τους.",
  features: [
    "Ανθεκτική μεταλλική κατασκευή",
    "Ηλεκτροστατική βαφή μπλε χρώματος",
    "Αντισκωριακή προστασία",
    "Εργονομικές λαβές αλουμινίου",
    "Κλειδαριές υψηλής ασφάλειας",
    "Εγγύηση 5 ετών"
  ],
  applications: [
    "Εκπαιδευτικά ιδρύματα",
    "Επαγγελματικά γραφεία",
    "Βιομηχανικούς χώρους",
    "Αποδυτήρια αθλητικών εγκαταστάσεων"
  ],
  measurements: {
    height: "180 εκ.",
    width: "80 εκ.",
    depth: "45 εκ.",
    weight: "55 κιλά",
    shelves: "3 ρυθμιζόμενα ράφια"
  },
  image: "/lovable-uploads/82e9823c-05e0-4a3d-bb0e-1a8079b79bf8.png",
  gallery: [
    "/lovable-uploads/82e9823c-05e0-4a3d-bb0e-1a8079b79bf8.png",
    "/lovable-uploads/c4658bc3-024c-4602-beec-fb6449e32749.png"
  ],
  category: "lockers",
  type: "school",
  color: "blue",
  material: "metal",
  features: ["ventilation", "number-plates", "key-lock"]
}, {
  id: "orange-display-cabinet", 
  title: "Πορτοκαλί Βιτρίνα Αποθήκευσης",
  description: "Μεταλλική βιτρίνα με γυάλινη πόρτα σε έντονο πορτοκαλί χρώμα, ιδανική για εκθετήρια και αποθήκευση προϊόντων.",
  longDescription: "Η πορτοκαλί βιτρίνα αποθήκευσης αποτελεί μια εντυπωσιακή λύση για την προβολή και προστασία προϊόντων σε εμπορικούς χώρους. Με τον συνδυασμό έντονου πορτοκαλί μεταλλικού πλαισίου και μεγάλων γυάλινων επιφανειών, δημιουργεί ένα εντυπωσιακό σημείο εστίασης που αναδεικνύει το περιεχόμενό της. Κατασκευασμένη από υψηλής ποιότητας μέταλλο και κρύσταλλο ασφαλείας, παρέχει αξιόπιστη προστασία και προβολή των εκθεμάτων.",
  features: [
    "Έντονο πορτοκαλί χρώμα",
    "Μεγάλες γυάλινες επιφάνειες",
    "Κρύσταλλο ασφαλείας",
    "Ρυθμιζόμενα γυάλινα ράφια",
    "Κλειδαριά ασφαλείας",
    "Εγγύηση 5 ετών"
  ],
  applications: [
    "Καταστήματα λιανικής",
    "Εκθεσιακούς χώρους",
    "Μουσεία & γκαλερί",
    "Επαγγελματικά γραφεία"
  ],
  measurements: {
    height: "195 εκ.",
    width: "100 εκ.",
    depth: "40 εκ.",
    weight: "70 κιλά",
    shelves: "5 ρυθμιζόμενα γυάλινα ράφια"
  },
  image: "/lovable-uploads/c142e30d-546a-43fe-bbe9-9367ce9e5bb1.png",
  gallery: [
    "/lovable-uploads/c142e30d-546a-43fe-bbe9-9367ce9e5bb1.png",
    "/lovable-uploads/c4658bc3-024c-4602-beec-fb6449e32749.png"
  ],
  category: "cabinets",
  type: "retail",
  color: "orange",
  material: "metal",
  features: ["glass-doors", "display", "adjustable-shelves"]
}, {
  id: "red-school-lockers",
  title: "Κόκκινα Σχολικά Ντουλάπια",
  description: "Ανθεκτικά μεταλλικά ντουλάπια σε κόκκινο χρώμα με μαύρο πλαίσιο, σχεδιασμένα για σχολεία και εκπαιδευτικά ιδρύματα.",
  longDescription: "Τα κόκκινα σχολικά ντουλάπια είναι ειδικά σχεδιασμένα για να ανταποκρίνονται στις απαιτητικές συνθήκες των σχολικών περιβαλλόντων. Με έντονο κόκκινο χρώμα και μαύρο πλαίσιο, προσφέρουν μια ελκυστική αλλά ανθεκτική λύση αποθήκευσης για τους μαθητές. Η κατασκευή τους από βαρέως τύπου μέταλλο και οι ενισχυμένες αρθρώσεις εξασφαλίζουν την αντοχή τους στην καθημερινή χρήση από παιδιά και εφήβους.",
  features: [
    "Ανθεκτική κατασκευή βαρέως τύπου",
    "Έντονο κόκκινο χρώμα με μαύρο πλαίσιο",
    "Αριθμημένες θέσεις",
    "Θυρίδες εξαερισμού",
    "Ενισχυμένες αρθρώσεις",
    "Εγγύηση 7 ετών"
  ],
  applications: [
    "Σχολεία & εκπαιδευτικά ιδρύματα",
    "Παιδικές κατασκηνώσεις",
    "Αθλητικές εγκαταστάσεις για νέους",
    "Παιδικές βιβλιοθήκες"
  ],
  measurements: {
    height: "170 εκ.",
    width: "85 εκ.",
    depth: "40 εκ.",
    weight: "58 κιλά",
    shelves: "1 σταθερό ράφι & κρεμάστρα"
  },
  image: "/lovable-uploads/3bb3c4b3-5ff5-4519-9c92-967be1786ba4.png",
  gallery: [
    "/lovable-uploads/3bb3c4b3-5ff5-4519-9c92-967be1786ba4.png",
    "/lovable-uploads/c4658bc3-024c-4602-beec-fb6449e32749.png"
  ],
  category: "lockers",
  type: "school",
  color: "red",
  material: "metal",
  features: ["numbered", "ventilation", "key-lock"]
}, {
  id: "yellow-lockers",
  title: "Κίτρινα Μεταλλικά Ντουλάπια",
  description: "Φωτεινά κίτρινα ντουλάπια με μεταλλική κατασκευή, ιδανικά για παιδικούς σταθμούς, σχολικές εγκαταστάσεις και χαρούμενους χώρους.",
  longDescription: "Τα κίτρινα μεταλλικά ντουλάπια μας προσφέρουν μια φωτεινή και ζωηρή λύση αποθήκευσης για χώρους που απαιτούν χρώμα και λειτουργικότητα. Το λευκό πλαίσιο σε συνδυασμό με τις έντονες κίτρινες πόρτες δημιουργούν ένα ευχάριστο οπτικό αποτέλεσμα, ιδανικό για εκπαιδευτικούς χώρους και παιδικές εγκαταστάσεις. Κατασκευασμένα με την ίδια προσοχή στην ποιότητα και την ασφάλεια που χαρακτηρίζει όλα μας τα προϊόντα.",
  features: [
    "Ελαφριά και ανθεκτική κατασκευή",
    "Στρογγυλεμένες άκρες για παιδική ασφάλεια",
    "Πολλαπλές θέσεις αποθήκευσης",
    "Κλειδαριά με δυνατότητα master key",
    "Ηχομονωτική κατασκευή",
    "Εγγύηση 5 ετών"
  ],
  applications: [
    "Παιδικοί σταθμοί",
    "Δημοτικά σχολεία",
    "Παιδικές βιβλιοθήκες", 
    "Αθλητικές εγκαταστάσεις για παιδιά"
  ],
  measurements: {
    height: "160 εκ.",
    width: "75 εκ.",
    depth: "40 εκ.",
    weight: "45 κιλά",
    shelves: "3 ρυθμιζόμενα ράφια"
  },
  image: "/lovable-uploads/f308ce90-e4fe-4c0d-b442-8d3bed0566f3.png",
  gallery: [
    "/lovable-uploads/f308ce90-e4fe-4c0d-b442-8d3bed0566f3.png",
    "/lovable-uploads/7cc3aac9-9af0-4f81-b131-0622591eebc1.png"
  ],
  category: "lockers",
  type: "school",
  color: "yellow",
  material: "metal",
  features: ["colorful", "ventilation", "child-friendly"]
}];

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const topRef = useRef<HTMLDivElement>(null);
  const product = products.find(p => p.id === productId);
  
  // Scroll to top when component mounts
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo(0, 0);
    }
  }, []);
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container-section flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Το προϊόν δεν βρέθηκε</h1>
            <Button onClick={() => navigate("/products")}>Επιστροφή στα προϊόντα</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Handler for the "Ζητήστε Προσφορά" button - fixed to navigate properly
  const handleRequestQuote = () => {
    navigate("/?scrollTo=contact");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main ref={topRef} className="flex-grow container-section">
        <div className="flex justify-between items-center mb-6">
          <Button variant="ghost" className="flex items-center gap-2" onClick={() => navigate("/products")}>
            <ArrowLeft size={18} />
            Επιστροφή στα προϊόντα
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product images */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg p-1">
              <img src={product.image} alt={product.title} className="w-full h-auto object-contain aspect-video" />
            </div>
            
            {/* Additional product images */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {product.gallery.slice(1).map((img, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md p-1">
                    <img src={img} alt={`${product.title} ${index + 2}`} className="w-full h-auto object-cover aspect-square" />
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {/* Product details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-metal-900">{product.title}</h1>
              <p className="text-metal-600 mt-4">{product.description}</p>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold mb-4">Περιγραφή Προϊόντος</h3>
              <p className="text-metal-600">{product.longDescription}</p>
            </div>
            
            {/* Measurements section */}
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold mb-4">Διαστάσεις</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-metal-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-metal-500">Ύψος</p>
                  <p className="font-medium text-metal-800">{product.measurements.height}</p>
                </div>
                <div className="bg-metal-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-metal-500">Πλάτος</p>
                  <p className="font-medium text-metal-800">{product.measurements.width}</p>
                </div>
                <div className="bg-metal-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-metal-500">Βάθος</p>
                  <p className="font-medium text-metal-800">{product.measurements.depth}</p>
                </div>
                <div className="bg-metal-50 p-4 rounded-lg text-center">
                  <p className="text-sm text-metal-500">Βάρος</p>
                  <p className="font-medium text-metal-800">{product.measurements.weight}</p>
                </div>
                <div className="bg-metal-50 p-4 rounded-lg text-center md:col-span-2">
                  <p className="text-sm text-metal-500">Ράφια</p>
                  <p className="font-medium text-metal-800">{product.measurements.shelves}</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold mb-4">Χαρακτηριστικά</h3>
              <ul className="space-y-2">
                {product.features && Array.isArray(product.features) && product.features.some(f => typeof f === 'string') && 
                  product.features.filter(f => typeof f === 'string').map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2 text-blue-600">•</span>
                      <span>{feature}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold mb-4">Εφαρμογές</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications && product.applications.map((app, index) => (
                  <span 
                    key={index} 
                    className="bg-metal-100 text-metal-800 px-3 py-1 rounded-full text-sm"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold mb-6">Ενδιαφέρεστε για αυτό το προϊόν;</h3>
              <div className="space-y-4">
                <Button className="w-full py-6" onClick={handleRequestQuote}>
                  <Mail className="mr-2" />
                  Ζητήστε Προσφορά
                </Button>
                
                <Button variant="outline" className="w-full py-6" onClick={() => window.location.href = "tel:+302109999999"}>
                  <Phone className="mr-2" />
                  Καλέστε μας στο 210-9999999
                </Button>
              </div>
              <p className="text-center mt-4 text-sm text-metal-500">
                * Σας προσφέρουμε προσαρμοσμένες λύσεις βάσει των αναγκών σας με δωρεάν μελέτη και προσφορά
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

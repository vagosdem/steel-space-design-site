
import { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Updated product data with measurements
const products = [{
  id: "white-brown-locker",
  title: "Ντουλάπια Λευκά με Καφέ Πλαίσιο",
  description: "Κλασικά μεταλλικά ντουλάπια τριών θέσεων με λευκές πόρτες και καφέ πλαίσιο. Ιδανικά για επαγγελματικούς χώρους, γραφεία και αποθήκες. Κατασκευασμένα από υψηλής ποιότητας μέταλλο για μεγάλη αντοχή και διάρκεια στον χρόνο.",
  longDescription: "Τα μεταλλικά μας ντουλάπια είναι σχεδιασμένα για να προσφέρουν μακροχρόνια λειτουργικότητα σε επαγγελματικούς χώρους υψηλών απαιτήσεων. Κατασκευασμένα στην Ελλάδα από πιστοποιημένα υλικά, με στιβαρό μεταλλικό σκελετό και βαμμένα με ηλεκτροστατική βαφή για αντοχή σε γδαρσίματα και χημικά καθαριστικά. Περιλαμβάνουν εσωτερικά ράφια με δυνατότητα ρύθμισης ύψους και κλειδαριά ασφαλείας.",
  features: [
    "Στιβαρή μεταλλική κατασκευή",
    "Ηλεκτροστατική βαφή υψηλής αντοχής",
    "Κλειδαριές ασφαλείας",
    "Ρυθμιζόμενα εσωτερικά ράφια",
    "Ελληνική κατασκευή",
    "Εγγύηση 5 ετών"
  ],
  applications: [
    "Γραφεία & επιχειρήσεις",
    "Βιομηχανικοί χώροι",
    "Αποθήκες", 
    "Εκπαιδευτικά ιδρύματα"
  ],
  measurements: {
    height: "180 εκ.",
    width: "90 εκ.",
    depth: "45 εκ.",
    weight: "57 κιλά",
    shelves: "3 ρυθμιζόμενα ράφια"
  },
  image: "/lovable-uploads/d6bb8bc5-c886-4cd5-8dda-0b5c84a7e94e.png",
  gallery: [
    "/lovable-uploads/d6bb8bc5-c886-4cd5-8dda-0b5c84a7e94e.png",
    "/lovable-uploads/c4658bc3-024c-4602-beec-fb6449e32749.png"
  ]
}, {
  id: "red-locker",
  title: "Κόκκινα Μεταλλικά Ντουλάπια",
  description: "Μοντέρνα μεταλλικά ντουλάπια σε ζωηρό κόκκινο χρώμα με μαύρο πλαίσιο. Ιδανικά για χρήση σε γυμναστήρια, σχολεία και αποδυτήρια. Συνδυάζουν αισθητική και λειτουργικότητα.",
  longDescription: "Η σειρά κόκκινων μεταλλικών ντουλαπιών μας είναι σχεδιασμένη για να προσφέρει έντονο χρώμα και χαρακτήρα στον χώρο σας, διατηρώντας παράλληλα την απαράμιλλη ποιότητα κατασκευής μας. Με μαύρο μεταλλικό πλαίσιο και κόκκινες πόρτες από ενισχυμένο μέταλλο, προσφέρουν ασφάλεια για τα προσωπικά αντικείμενα και αντοχή στη συχνή χρήση. Κατάλληλα για χώρους με υψηλή κυκλοφορία όπως γυμναστήρια και σχολεία.",
  features: [
    "Ανθεκτική μεταλλική κατασκευή",
    "Ηλεκτροστατική βαφή σε έντονο κόκκινο χρώμα",
    "Κλειδαριές υψηλής ασφάλειας",
    "Αεριζόμενες θυρίδες",
    "Ανθεκτικές στη σκληρή χρήση",
    "Εγγύηση 5 ετών"
  ],
  applications: [
    "Γυμναστήρια & αθλητικές εγκαταστάσεις",
    "Σχολεία & εκπαιδευτικά ιδρύματα",
    "Εργοστάσια & βιομηχανικούς χώρους",
    "Δημόσιες υπηρεσίες"
  ],
  measurements: {
    height: "185 εκ.",
    width: "80 εκ.", 
    depth: "50 εκ.",
    weight: "52 κιλά",
    shelves: "2 ρυθμιζόμενα ράφια"
  },
  image: "/lovable-uploads/3d7fe985-2f29-443b-8ab2-3d6f769ff6df.png",
  gallery: [
    "/lovable-uploads/3d7fe985-2f29-443b-8ab2-3d6f769ff6df.png", 
    "/lovable-uploads/c4658bc3-024c-4602-beec-fb6449e32749.png"
  ]
}, {
  id: "yellow-locker",
  title: "Κίτρινα Μεταλλικά Ντουλάπια",
  description: "Φωτεινά κίτρινα ντουλάπια με λευκό πλαίσιο, ιδανικά για παιδικούς σταθμούς, σχολικές εγκαταστάσεις και χώρους με έντονα χρώματα.",
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
  ]
}, {
  id: "turquoise-orange-locker",
  title: "Ντουλάπια Τυρκουάζ με Πορτοκαλί",
  description: "Μοντέρνος συνδυασμός χρωμάτων με τυρκουάζ πόρτα και πορτοκαλί πλαίσιο. Ιδανικά για δημιουργικούς χώρους εργασίας, στούντιο και σύγχρονα γραφεία.",
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
  image: "/lovable-uploads/3e491c70-934b-4056-b1e1-58c080f32010.png",
  gallery: [
    "/lovable-uploads/3e491c70-934b-4056-b1e1-58c080f32010.png",
    "/lovable-uploads/0f7b939c-3012-47f1-8cc8-13033e7dd152.png"
  ]
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

  // Handler for the "Ζητήστε Προσφορά" button
  const handleRequestQuote = () => {
    // Navigate to the home page and scroll to the contact section
    navigate("/#contact");
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
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img src={product.image} alt={product.title} className="w-full h-auto object-contain aspect-video" />
            </div>
            
            {/* Additional product images */}
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {product.gallery.slice(1).map((img, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
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
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 text-blue-600">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold mb-4">Εφαρμογές</h3>
              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, index) => (
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

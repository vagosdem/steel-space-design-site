
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { SlidersHorizontal, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

// Updated product data with new red locker image
const products = [
  {
    id: "metal-cabinet-glass",
    title: "Μεταλλική Ντουλάπα με Τζάμια",
    description: "Επαγγελματική μεταλλική ντουλάπα με γυάλινες πόρτες, ιδανική για αρχειοθέτηση σε γραφεία και χώρους υγείας.",
    image: "/lovable-uploads/c1ccbc5f-2ae1-4c2b-98b3-88300b22ae67.png",
    category: "cabinets",
    type: "office",
    color: "white",
    material: "metal",
    features: ["glass-doors", "adjustable-shelves"]
  },
  {
    id: "orange-white-locker",
    title: "Ντουλάπια Πορτοκαλί με Λευκό Πλαίσιο",
    description: "Κλασικά μεταλλικά ντουλάπια πολλαπλών θέσεων με πορτοκαλί πόρτες και λευκό πλαίσιο για αποδυτήρια και γυμναστήρια.",
    image: "/lovable-uploads/64d9716d-261a-44b6-b469-c4dff49cea91.png",
    category: "lockers",
    type: "gym",
    color: "orange",
    material: "metal",
    features: ["multiple-units", "ventilation", "key-lock"]
  },
  {
    id: "metal-drawers-multi",
    title: "Συρταριέρες Μεταλλικές Πολλαπλών Χρωμάτων",
    description: "Μεταλλικές συρταριέρες σε διάφορα χρώματα για αρχειοθέτηση και αποθήκευση αντικειμένων σε επαγγελματικούς χώρους.",
    image: "/lovable-uploads/28a84624-2235-4f42-a8df-59c526397527.png",
    category: "drawers",
    type: "creative",
    color: "multi",
    material: "metal",
    features: ["portable", "colorful", "drawer-dividers"]
  },
  {
    id: "turquoise-orange-locker",
    title: "Ντουλάπι Τυρκουάζ με Πορτοκαλί",
    description: "Μοντέρνος συνδυασμός χρωμάτων με τυρκουάζ πόρτα και πορτοκαλί πλαίσιο, ιδανικά για δημιουργικούς χώρους εργασίας.",
    image: "/lovable-uploads/de48c2ac-8f96-4f1d-987f-3fa9c559618f.png",
    category: "lockers",
    type: "creative",
    color: "turquoise",
    material: "metal",
    features: ["colorful", "modern-design", "key-lock"]
  },
  {
    id: "blue-metallic-locker",
    title: "Μπλε Μεταλλικά Ντουλάπια",
    description: "Κομψά μεταλλικά ντουλάπια σε μπλε απόχρωση με ειδικό σχεδιασμό για επαγγελματικούς χώρους και εκπαιδευτικά ιδρύματα.",
    image: "/lovable-uploads/82e9823c-05e0-4a3d-bb0e-1a8079b79bf8.png",
    category: "lockers",
    type: "school",
    color: "blue",
    material: "metal",
    features: ["ventilation", "number-plates", "key-lock"]
  },
  {
    id: "orange-display-cabinet", 
    title: "Πορτοκαλί Βιτρίνα Αποθήκευσης",
    description: "Μεταλλική βιτρίνα με γυάλινη πόρτα σε έντονο πορτοκαλί χρώμα, ιδανική για εκθετήρια και αποθήκευση προϊόντων.",
    image: "/lovable-uploads/c142e30d-546a-43fe-bbe9-9367ce9e5bb1.png",
    category: "cabinets",
    type: "retail",
    color: "orange",
    material: "metal",
    features: ["glass-doors", "display", "adjustable-shelves"]
  },
  {
    id: "red-school-lockers",
    title: "Κόκκινα Σχολικά Ντουλάπια",
    description: "Ανθεκτικά μεταλλικά ντουλάπια σε κόκκινο χρώμα με μαύρο πλαίσιο, σχεδιασμένα για σχολεία και εκπαιδευτικά ιδρύματα.",
    image: "/lovable-uploads/3bb3c4b3-5ff5-4519-9c92-967be1786ba4.png",
    category: "lockers",
    type: "school",
    color: "red",
    material: "metal",
    features: ["numbered", "ventilation", "key-lock"]
  },
  {
    id: "yellow-lockers",
    title: "Κίτρινα Μεταλλικά Ντουλάπια",
    description: "Φωτεινά κίτρινα ντουλάπια με μεταλλική κατασκευή, ιδανικά για παιδικούς σταθμούς, σχολικές εγκαταστάσεις και χαρούμενους χώρους.",
    image: "/lovable-uploads/f308ce90-e4fe-4c0d-b442-8d3bed0566f3.png",
    category: "lockers",
    type: "school",
    color: "yellow",
    material: "metal",
    features: ["colorful", "ventilation", "child-friendly"]
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Products() {
  const navigate = useNavigate();
  const location = useLocation();
  const topRef = useRef<HTMLDivElement>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [colorFilter, setColorFilter] = useState("all");
  const [featureFilter, setFeatureFilter] = useState("all");
  
  // Scroll to top when component mounts
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo(0, 0);
    }
  }, [location]);
  
  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Apply category filter
    if (categoryFilter !== "all") {
      result = result.filter(product => product.category === categoryFilter);
    }
    
    // Apply type filter
    if (typeFilter !== "all") {
      result = result.filter(product => product.type === typeFilter);
    }
    
    // Apply color filter
    if (colorFilter !== "all") {
      result = result.filter(product => product.color === colorFilter);
    }
    
    // Apply feature filter
    if (featureFilter !== "all") {
      result = result.filter(product => 
        product.features && product.features.includes(featureFilter)
      );
    }
    
    // Apply sorting
    switch(sortOption) {
      case "title-asc":
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "title-desc":
        result.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [sortOption, categoryFilter, typeFilter, colorFilter, featureFilter]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  // Handler for the "Ζητήστε Προσφορά" button - redirects to contact section on home page
  const handleRequestQuote = () => {
    navigate("/?scrollTo=contact");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div ref={topRef} className="container-section">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-8"
          >
            Όλα τα Προϊόντα
          </motion.h1>
          
          {/* Enhanced Filters */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-4 items-center mb-8"
          >
            <div className="flex flex-wrap gap-4 items-center">
              <SlidersHorizontal className="h-4 w-4 text-gray-500" />
              <span className="text-sm font-medium">Φίλτρα:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px] rounded-xl">
                  <SelectValue placeholder="Όλες οι Κατηγορίες" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Όλες οι Κατηγορίες</SelectItem>
                  <SelectItem value="lockers">Ντουλάπες Locker</SelectItem>
                  <SelectItem value="cabinets">Ντουλάπες Αρχειοθέτησης</SelectItem>
                  <SelectItem value="drawers">Συρταριέρες</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px] rounded-xl">
                  <SelectValue placeholder="Όλοι οι Τύποι" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Όλοι οι Τύποι</SelectItem>
                  <SelectItem value="office">Γραφείου</SelectItem>
                  <SelectItem value="gym">Αθλητικών Χώρων</SelectItem>
                  <SelectItem value="school">Σχολείων</SelectItem>
                  <SelectItem value="creative">Δημιουργικών Χώρων</SelectItem>
                  <SelectItem value="retail">Καταστημάτων</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={colorFilter} onValueChange={setColorFilter}>
                <SelectTrigger className="w-[180px] rounded-xl">
                  <SelectValue placeholder="Όλα τα Χρώματα" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Όλα τα Χρώματα</SelectItem>
                  <SelectItem value="white">Λευκό</SelectItem>
                  <SelectItem value="orange">Πορτοκαλί</SelectItem>
                  <SelectItem value="blue">Μπλε</SelectItem>
                  <SelectItem value="red">Κόκκινο</SelectItem>
                  <SelectItem value="yellow">Κίτρινο</SelectItem>
                  <SelectItem value="turquoise">Τυρκουάζ</SelectItem>
                  <SelectItem value="multi">Πολύχρωμο</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={featureFilter} onValueChange={setFeatureFilter}>
                <SelectTrigger className="w-[220px] rounded-xl">
                  <SelectValue placeholder="Όλα τα Χαρακτηριστικά" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Όλα τα Χαρακτηριστικά</SelectItem>
                  <SelectItem value="glass-doors">Γυάλινες Πόρτες</SelectItem>
                  <SelectItem value="adjustable-shelves">Ρυθμιζόμενα Ράφια</SelectItem>
                  <SelectItem value="key-lock">Κλειδαριά</SelectItem>
                  <SelectItem value="ventilation">Εξαερισμός</SelectItem>
                  <SelectItem value="multiple-units">Πολλαπλές Θέσεις</SelectItem>
                  <SelectItem value="colorful">Έντονα Χρώματα</SelectItem>
                  <SelectItem value="modern-design">Μοντέρνος Σχεδιασμός</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="ml-auto">
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px] rounded-xl">
                  <SelectValue placeholder="Ταξινόμηση κατά" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Προεπιλογή</SelectItem>
                  <SelectItem value="title-asc">Τίτλος (Α → Ω)</SelectItem>
                  <SelectItem value="title-desc">Τίτλος (Ω → Α)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </motion.div>
          
          {/* Products grid with aligned buttons */}
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div 
                key={product.id} 
                variants={item}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full"
              >
                <div 
                  className="aspect-square p-1 flex items-center justify-center bg-white overflow-hidden cursor-pointer"
                  onClick={() => handleProductClick(product.id)}
                >
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-auto h-auto max-w-full max-h-full object-contain transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-4 flex flex-col">
                  <h3 className="text-xl font-semibold mb-2 text-black">{product.title}</h3>
                  <p className="text-metal-600 mb-4">{product.description}</p>
                  <div className="mt-auto">
                    <Button 
                      onClick={() => handleProductClick(product.id)}
                      className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl"
                    >
                      Περισσότερες Πληροφορίες
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <h3 className="text-lg font-medium mb-2">Δεν βρέθηκαν προϊόντα</h3>
              <p className="text-gray-500 mb-4">Δοκιμάστε να αλλάξετε τα φίλτρα σας</p>
              <Button
                variant="outline"
                onClick={() => {
                  setCategoryFilter("all");
                  setTypeFilter("all");
                  setColorFilter("all");
                  setFeatureFilter("all");
                  setSortOption("default");
                }}
                className="rounded-xl"
              >
                Επαναφορά φίλτρων
              </Button>
            </motion.div>
          )}
          
          {/* Contact CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-20 bg-gradient-to-r from-blue-900 to-metal-900 rounded-lg p-8 text-center text-white"
          >
            <h2 className="text-2xl font-bold mb-4">Χρειάζεστε μια εξατομικευμένη λύση;</h2>
            <p className="text-metal-200 mb-6 max-w-2xl mx-auto">
              Σχεδιάζουμε και κατασκευάζουμε προσαρμοσμένα μεταλλικά ντουλάπια βάσει των συγκεκριμένων αναγκών και προδιαγραφών σας.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 rounded-xl" 
                onClick={handleRequestQuote}
              >
                <Mail className="h-4 w-4" />
                Ζητήστε Προσφορά
              </Button>
              <Button variant="outline" onClick={() => window.location.href = "tel:+302109999999"} className="border-blue-400 text-white hover:bg-blue-800 flex items-center gap-2 rounded-xl">
                <Phone className="h-4 w-4" />
                Καλέστε μας
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}


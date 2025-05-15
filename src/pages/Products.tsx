
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
import { SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Product data
const products = [
  {
    id: "white-brown-locker",
    title: "Ντουλάπια Λευκά με Καφέ Πλαίσιο",
    description: "Κλασικά μεταλλικά ντουλάπια τριών θέσεων με λευκές πόρτες και καφέ πλαίσιο για επαγγελματικούς χώρους.",
    image: "/lovable-uploads/d6bb8bc5-c886-4cd5-8dda-0b5c84a7e94e.png",
    category: "lockers",
    type: "office"
  },
  {
    id: "red-locker",
    title: "Κόκκινα Μεταλλικά Ντουλάπια",
    description: "Μοντέρνα μεταλλικά ντουλάπια σε ζωηρό κόκκινο χρώμα με μαύρο πλαίσιο για χρήση σε γυμναστήρια και σχολεία.",
    image: "/lovable-uploads/3d7fe985-2f29-443b-8ab2-3d6f769ff6df.png",
    category: "lockers",
    type: "sport"
  },
  {
    id: "yellow-locker",
    title: "Κίτρινα Μεταλλικά Ντουλάπια",
    description: "Φωτεινά κίτρινα ντουλάπια με καφέ πλαίσιο, ιδανικά για παιδικούς σταθμούς και σχολικές εγκαταστάσεις.",
    image: "/lovable-uploads/f308ce90-e4fe-4c0d-b442-8d3bed0566f3.png",
    category: "lockers",
    type: "school"
  },
  {
    id: "turquoise-orange-locker",
    title: "Ντουλάπια Τυρκουάζ με Πορτοκαλί",
    description: "Μοντέρνος συνδυασμός χρωμάτων με τυρκουάζ πόρτα και πορτοκαλί πλαίσιο, ιδανικά για δημιουργικούς χώρους εργασίας.",
    image: "/lovable-uploads/3e491c70-934b-4056-b1e1-58c080f32010.png",
    category: "lockers",
    type: "creative"
  },
  {
    id: "metal-cabinet",
    title: "Μεταλλική Ντουλάπα με Τζάμια",
    description: "Επαγγελματική μεταλλική ντουλάπα με τζάμια, ιδανική για αρχειοθέτηση και αποθήκευση σε γραφεία και επαγγελματικούς χώρους.",
    image: "/lovable-uploads/0f7b939c-3012-47f1-8cc8-13033e7dd152.png",
    category: "cabinets",
    type: "office"
  }
];

// Add thumbnails of the new images
const additionalImages = {
  "red-locker": "/lovable-uploads/c4658bc3-024c-4602-beec-fb6449e32749.png",
  "yellow-locker": "/lovable-uploads/7cc3aac9-9af0-4f81-b131-0622591eebc1.png"
};

export default function Products() {
  const navigate = useNavigate();
  const location = useLocation();
  const topRef = useRef<HTMLDivElement>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  
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
  }, [sortOption, categoryFilter, typeFilter]);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <div ref={topRef} className="container-section">
          <h1 className="text-3xl font-bold mb-8">Όλα τα Προϊόντα</h1>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
            <div className="flex flex-wrap gap-4">
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Όλες οι Κατηγορίες" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Όλες οι Κατηγορίες</SelectItem>
                  <SelectItem value="lockers">Ντουλάπες Locker</SelectItem>
                  <SelectItem value="cabinets">Ντουλάπες Αρχειοθέτησης</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Όλοι οι Τύποι" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Όλοι οι Τύποι</SelectItem>
                  <SelectItem value="office">Γραφείου</SelectItem>
                  <SelectItem value="sport">Αθλητικών Χώρων</SelectItem>
                  <SelectItem value="school">Σχολείων</SelectItem>
                  <SelectItem value="creative">Δημιουργικών Χώρων</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="h-4 w-4 text-gray-500" />
              <Select value={sortOption} onValueChange={setSortOption}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ταξινόμηση κατά" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Προεπιλογή</SelectItem>
                  <SelectItem value="title-asc">Τίτλος (Α → Ω)</SelectItem>
                  <SelectItem value="title-desc">Τίτλος (Ω → Α)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {/* Products grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-gray-100 cursor-pointer"
                onClick={() => handleProductClick(product.id)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{product.title}</h3>
                  <p className="text-metal-600 mb-4">{product.description}</p>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleProductClick(product.id);
                    }}
                    className="w-full"
                  >
                    Περισσότερες Πληροφορίες
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          {/* Empty state */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium mb-2">Δεν βρέθηκαν προϊόντα</h3>
              <p className="text-gray-500 mb-4">Δοκιμάστε να αλλάξετε τα φίλτρα σας</p>
              <Button
                variant="outline"
                onClick={() => {
                  setCategoryFilter("all");
                  setTypeFilter("all");
                  setSortOption("default");
                }}
              >
                Επαναφορά φίλτρων
              </Button>
            </div>
          )}
          
          {/* Contact CTA */}
          <div className="mt-20 bg-metal-100 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Χρειάζεστε μια εξατομικευμένη λύση;</h2>
            <p className="text-metal-600 mb-6 max-w-2xl mx-auto">
              Σχεδιάζουμε και κατασκευάζουμε προσαρμοσμένα μεταλλικά ντουλάπια βάσει των συγκεκριμένων αναγκών και προδιαγραφών σας.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => navigate("/contact")}>
                Ζητήστε Προσφορά
              </Button>
              <Button variant="outline" onClick={() => window.location.href = "tel:+302109999999"}>
                Καλέστε μας
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

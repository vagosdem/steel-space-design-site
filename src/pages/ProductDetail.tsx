
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Product data with price options
const products = [
  {
    id: "white-brown-locker",
    title: "Ντουλάπια Λευκά με Καφέ Πλαίσιο",
    description: "Κλασικά μεταλλικά ντουλάπια τριών θέσεων με λευκές πόρτες και καφέ πλαίσιο για επαγγελματικούς χώρους.",
    image: "/lovable-uploads/d6bb8bc5-c886-4cd5-8dda-0b5c84a7e94e.png",
    basePrice: 249.99,
    heights: [
      { value: "180", label: "180 εκ.", priceModifier: 0 },
      { value: "200", label: "200 εκ.", priceModifier: 25 },
      { value: "220", label: "220 εκ.", priceModifier: 50 },
    ],
    widths: [
      { value: "90", label: "90 εκ.", priceModifier: 0 },
      { value: "120", label: "120 εκ.", priceModifier: 40 },
      { value: "150", label: "150 εκ.", priceModifier: 80 },
    ],
    materials: [
      { value: "standard", label: "Τυπικό Μέταλλο", priceModifier: 0 },
      { value: "reinforced", label: "Ενισχυμένο Μέταλλο", priceModifier: 70 },
      { value: "premium", label: "Premium Μέταλλο", priceModifier: 150 },
    ]
  },
  {
    id: "red-locker",
    title: "Κόκκινα Μεταλλικά Ντουλάπια",
    description: "Μοντέρνα μεταλλικά ντουλάπια σε ζωηρό κόκκινο χρώμα με μαύρο πλαίσιο για χρήση σε γυμναστήρια και σχολεία.",
    image: "/lovable-uploads/3d7fe985-2f29-443b-8ab2-3d6f769ff6df.png",
    basePrice: 299.99,
    heights: [
      { value: "180", label: "180 εκ.", priceModifier: 0 },
      { value: "200", label: "200 εκ.", priceModifier: 30 },
    ],
    widths: [
      { value: "80", label: "80 εκ.", priceModifier: 0 },
      { value: "100", label: "100 εκ.", priceModifier: 50 },
      { value: "120", label: "120 εκ.", priceModifier: 90 },
    ],
    materials: [
      { value: "standard", label: "Τυπικό Μέταλλο", priceModifier: 0 },
      { value: "reinforced", label: "Ενισχυμένο Μέταλλο", priceModifier: 85 },
    ]
  },
  {
    id: "yellow-locker",
    title: "Κίτρινα Μεταλλικά Ντουλάπια",
    description: "Φωτεινά κίτρινα ντουλάπια με καφέ πλαίσιο, ιδανικά για παιδικούς σταθμούς και σχολικές εγκαταστάσεις.",
    image: "/lovable-uploads/f308ce90-e4fe-4c0d-b442-8d3bed0566f3.png",
    basePrice: 219.99,
    heights: [
      { value: "160", label: "160 εκ.", priceModifier: 0 },
      { value: "180", label: "180 εκ.", priceModifier: 20 },
      { value: "200", label: "200 εκ.", priceModifier: 40 },
    ],
    widths: [
      { value: "60", label: "60 εκ.", priceModifier: 0 },
      { value: "90", label: "90 εκ.", priceModifier: 30 },
      { value: "120", label: "120 εκ.", priceModifier: 60 },
    ],
    materials: [
      { value: "standard", label: "Τυπικό Μέταλλο", priceModifier: 0 },
      { value: "reinforced", label: "Ενισχυμένο Μέταλλο", priceModifier: 60 },
      { value: "kids", label: "Παιδικό (Χωρίς Αιχμές)", priceModifier: 80 },
    ]
  },
  {
    id: "turquoise-orange-locker",
    title: "Ντουλάπια Τυρκουάζ με Πορτοκαλί",
    description: "Μοντέρνος συνδυασμός χρωμάτων με τυρκουάζ πόρτα και πορτοκαλί πλαίσιο, ιδανικά για δημιουργικούς χώρους εργασίας.",
    image: "/lovable-uploads/3e491c70-934b-4056-b1e1-58c080f32010.png",
    basePrice: 329.99,
    heights: [
      { value: "180", label: "180 εκ.", priceModifier: 0 },
      { value: "200", label: "200 εκ.", priceModifier: 35 },
      { value: "220", label: "220 εκ.", priceModifier: 70 },
    ],
    widths: [
      { value: "80", label: "80 εκ.", priceModifier: 0 },
      { value: "100", label: "100 εκ.", priceModifier: 40 },
      { value: "120", label: "120 εκ.", priceModifier: 80 },
    ],
    materials: [
      { value: "standard", label: "Τυπικό Μέταλλο", priceModifier: 0 },
      { value: "reinforced", label: "Ενισχυμένο Μέταλλο", priceModifier: 90 },
      { value: "premium", label: "Premium Μέταλλο", priceModifier: 180 },
    ]
  }
];

export default function ProductDetail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);
  
  const [selectedHeight, setSelectedHeight] = useState(product?.heights[0].value || "");
  const [selectedWidth, setSelectedWidth] = useState(product?.widths[0].value || "");
  const [selectedMaterial, setSelectedMaterial] = useState(product?.materials[0].value || "");
  const [quantity, setQuantity] = useState(1);
  
  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container-section flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Το προϊόν δεν βρέθηκε</h1>
            <Button onClick={() => navigate("/")}>Επιστροφή στην αρχική</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  // Calculate the final price based on selections
  const calculatePrice = () => {
    const heightModifier = product.heights.find(h => h.value === selectedHeight)?.priceModifier || 0;
    const widthModifier = product.widths.find(w => w.value === selectedWidth)?.priceModifier || 0;
    const materialModifier = product.materials.find(m => m.value === selectedMaterial)?.priceModifier || 0;
    
    return (product.basePrice + heightModifier + widthModifier + materialModifier) * quantity;
  };
  
  const handleAddToCart = () => {
    toast({
      title: "Προστέθηκε στο καλάθι",
      description: `${product.title} x${quantity} - ${calculatePrice().toFixed(2)}€`,
    });
  };

  // Function to handle navigation to a specific section on the home page
  const navigateToSection = (sectionId: string) => {
    navigate(`/#${sectionId}`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container-section">
        <div className="flex justify-between items-center mb-6">
          <Button 
            variant="ghost" 
            className="flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={18} />
            Επιστροφή στα προϊόντα
          </Button>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" onClick={() => navigateToSection("products")}>Όλα τα Προϊόντα</Button>
            <Button variant="ghost" onClick={() => navigateToSection("features")}>Χαρακτηριστικά</Button>
            <Button variant="ghost" onClick={() => navigateToSection("about")}>Σχετικά με εμάς</Button>
            <Button variant="ghost" onClick={() => navigateToSection("contact")}>Επικοινωνία</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product image */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg p-4">
            <img 
              src={product.image} 
              alt={product.title} 
              className="w-full h-auto object-contain aspect-square" 
            />
          </div>
          
          {/* Product details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-metal-900">{product.title}</h1>
              <p className="text-2xl font-bold text-blue-600 mt-2">{calculatePrice().toFixed(2)}€</p>
              <p className="text-metal-600 mt-4">{product.description}</p>
            </div>
            
            <div className="space-y-6 pt-6 border-t border-gray-200">
              <div>
                <h3 className="text-lg font-medium mb-3">Επιλέξτε Ύψος</h3>
                <RadioGroup 
                  value={selectedHeight} 
                  onValueChange={setSelectedHeight}
                  className="flex flex-col space-y-2"
                >
                  {product.heights.map((height) => (
                    <div key={height.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={height.value} id={`height-${height.value}`} />
                      <Label htmlFor={`height-${height.value}`} className="flex justify-between w-full">
                        <span>{height.label}</span>
                        {height.priceModifier > 0 && (
                          <span className="text-blue-600">+{height.priceModifier}€</span>
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Επιλέξτε Πλάτος</h3>
                <RadioGroup 
                  value={selectedWidth} 
                  onValueChange={setSelectedWidth}
                  className="flex flex-col space-y-2"
                >
                  {product.widths.map((width) => (
                    <div key={width.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={width.value} id={`width-${width.value}`} />
                      <Label htmlFor={`width-${width.value}`} className="flex justify-between w-full">
                        <span>{width.label}</span>
                        {width.priceModifier > 0 && (
                          <span className="text-blue-600">+{width.priceModifier}€</span>
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Επιλέξτε Υλικό</h3>
                <RadioGroup 
                  value={selectedMaterial} 
                  onValueChange={setSelectedMaterial}
                  className="flex flex-col space-y-2"
                >
                  {product.materials.map((material) => (
                    <div key={material.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={material.value} id={`material-${material.value}`} />
                      <Label htmlFor={`material-${material.value}`} className="flex justify-between w-full">
                        <span>{material.label}</span>
                        {material.priceModifier > 0 && (
                          <span className="text-blue-600">+{material.priceModifier}€</span>
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-3">Ποσότητα</h3>
                <div className="flex items-center space-x-2">
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </Button>
                  <Input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    min="1"
                    className="w-20 text-center"
                  />
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </Button>
                </div>
              </div>
              
              <div className="pt-6">
                <Button className="w-full py-6 text-lg" onClick={handleAddToCart}>
                  <ShoppingCart className="mr-2" />
                  Προσθήκη στο Καλάθι
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

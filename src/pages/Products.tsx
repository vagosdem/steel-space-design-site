
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
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Filter, SlidersHorizontal } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

// Import product data (same as in ProductDetail.tsx)
const products = [
  {
    id: "white-brown-locker",
    title: "Ντουλάπια Λευκά με Καφέ Πλαίσιο",
    description: "Κλασικά μεταλλικά ντουλάπια τριών θέσεων με λευκές πόρτες και καφέ πλαίσιο για επαγγελματικούς χώρους.",
    image: "/lovable-uploads/d6bb8bc5-c886-4cd5-8dda-0b5c84a7e94e.png",
    basePrice: 249.99,
    doors: 3,
    size: "medium",
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
    doors: 2,
    size: "large",
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
    doors: 4,
    size: "small",
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
    doors: 1,
    size: "extra-large",
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

export default function Products() {
  const navigate = useNavigate();
  const location = useLocation();
  const topRef = useRef<HTMLDivElement>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortOption, setSortOption] = useState("default");
  const [priceRange, setPriceRange] = useState([200, 350]);
  const [minPrice, setMinPrice] = useState("200");
  const [maxPrice, setMaxPrice] = useState("350");
  const [selectedDoors, setSelectedDoors] = useState<number[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  
  // Scroll to top when component mounts
  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  
  // Update price range from input fields
  const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '' ? '0' : e.target.value;
    setMinPrice(newValue);
    const numValue = parseInt(newValue);
    if (!isNaN(numValue) && numValue >= 0 && numValue <= priceRange[1]) {
      setPriceRange([numValue, priceRange[1]]);
    }
  };
  
  const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === '' ? '0' : e.target.value;
    setMaxPrice(newValue);
    const numValue = parseInt(newValue);
    if (!isNaN(numValue) && numValue >= priceRange[0]) {
      setPriceRange([priceRange[0], numValue]);
    }
  };
  
  // Update input fields when slider changes
  useEffect(() => {
    setMinPrice(priceRange[0].toString());
    setMaxPrice(priceRange[1].toString());
  }, [priceRange]);
  
  // Filter and sort products
  useEffect(() => {
    let result = [...products];
    
    // Apply price filter
    result = result.filter(product => 
      product.basePrice >= priceRange[0] && 
      product.basePrice <= priceRange[1]
    );
    
    // Apply doors filter
    if (selectedDoors.length > 0) {
      result = result.filter(product => selectedDoors.includes(product.doors));
    }
    
    // Apply size filter
    if (selectedSizes.length > 0) {
      result = result.filter(product => selectedSizes.includes(product.size));
    }
    
    // Apply sorting
    switch(sortOption) {
      case "price-asc":
        result.sort((a, b) => a.basePrice - b.basePrice);
        break;
      case "price-desc":
        result.sort((a, b) => b.basePrice - a.basePrice);
        break;
      case "doors-asc":
        result.sort((a, b) => a.doors - b.doors);
        break;
      case "doors-desc":
        result.sort((a, b) => b.doors - a.doors);
        break;
      case "size-asc":
        const sizeOrder = { "small": 1, "medium": 2, "large": 3, "extra-large": 4 };
        result.sort((a, b) => sizeOrder[a.size as keyof typeof sizeOrder] - sizeOrder[b.size as keyof typeof sizeOrder]);
        break;
      case "size-desc":
        const sizeOrderDesc = { "small": 4, "medium": 3, "large": 2, "extra-large": 1 };
        result.sort((a, b) => sizeOrderDesc[a.size as keyof typeof sizeOrderDesc] - sizeOrderDesc[b.size as keyof typeof sizeOrderDesc]);
        break;
      default:
        break;
    }
    
    setFilteredProducts(result);
  }, [sortOption, priceRange, selectedDoors, selectedSizes]);
  
  // Toggle door filter
  const toggleDoorFilter = (doorCount: number) => {
    setSelectedDoors(prev => 
      prev.includes(doorCount)
        ? prev.filter(d => d !== doorCount)
        : [...prev, doorCount]
    );
  };
  
  // Toggle size filter
  const toggleSizeFilter = (size: string) => {
    setSelectedSizes(prev => 
      prev.includes(size)
        ? prev.filter(s => s !== size)
        : [...prev, size]
    );
  };

  // Filter options for mobile view
  const FilterOptions = () => (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium mb-3">Εύρος Τιμής</h3>
        <div className="px-2">
          <Slider
            defaultValue={[200, 350]}
            min={200}
            max={350}
            step={1}
            value={priceRange}
            onValueChange={setPriceRange}
            className="my-6"
          />
          <div className="flex justify-between text-sm gap-4">
            <div className="flex-1">
              <Input
                type="number"
                value={minPrice}
                onChange={handleMinPriceChange}
                min={200}
                max={parseInt(maxPrice)}
                className="w-full text-center"
              />
            </div>
            <div className="flex-1">
              <Input
                type="number"
                value={maxPrice}
                onChange={handleMaxPriceChange}
                min={parseInt(minPrice)}
                max={350}
                className="w-full text-center"
              />
            </div>
          </div>
        </div>
      </div>

      <Separator />
      
      <div>
        <h3 className="font-medium mb-3">Αριθμός Πορτών</h3>
        <div className="space-y-2">
          {[1, 2, 3, 4].map(door => (
            <div key={door} className="flex items-center space-x-2">
              <Checkbox 
                id={`door-${door}`} 
                checked={selectedDoors.includes(door)}
                onCheckedChange={() => toggleDoorFilter(door)}
              />
              <label htmlFor={`door-${door}`} className="text-sm">{door} πόρτες</label>
            </div>
          ))}
        </div>
      </div>

      <Separator />
      
      <div>
        <h3 className="font-medium mb-3">Μέγεθος</h3>
        <div className="space-y-2">
          {[
            { id: "small", label: "Μικρό" },
            { id: "medium", label: "Μεσαίο" },
            { id: "large", label: "Μεγάλο" },
            { id: "extra-large", label: "Πολύ Μεγάλο" }
          ].map(size => (
            <div key={size.id} className="flex items-center space-x-2">
              <Checkbox 
                id={`size-${size.id}`} 
                checked={selectedSizes.includes(size.id)}
                onCheckedChange={() => toggleSizeFilter(size.id)}
              />
              <label htmlFor={`size-${size.id}`} className="text-sm">{size.label}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

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
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop view */}
            <div className="hidden md:block w-64 flex-shrink-0">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-24">
                <h2 className="text-xl font-semibold mb-6 flex items-center">
                  <Filter className="mr-2 h-5 w-5" /> Φίλτρα
                </h2>
                <FilterOptions />
              </div>
            </div>
            
            {/* Mobile filters */}
            <div className="md:hidden mb-4">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" className="w-full">
                    <Filter className="mr-2 h-4 w-4" /> Φίλτρα
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <h2 className="text-xl font-semibold mb-6">Φίλτρα</h2>
                  <FilterOptions />
                </SheetContent>
              </Sheet>
            </div>
            
            {/* Products section */}
            <div className="flex-grow">
              {/* Sort controls */}
              <div className="flex justify-between items-center mb-6">
                <p className="text-sm text-gray-500">
                  {filteredProducts.length} προϊόντα
                </p>
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4 text-gray-500" />
                  <Select value={sortOption} onValueChange={setSortOption}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Ταξινόμηση κατά" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="default">Προεπιλογή</SelectItem>
                      <SelectItem value="price-asc">Τιμή (Χαμηλή → Υψηλή)</SelectItem>
                      <SelectItem value="price-desc">Τιμή (Υψηλή → Χαμηλή)</SelectItem>
                      <SelectItem value="doors-asc">Πόρτες (Λίγες → Πολλές)</SelectItem>
                      <SelectItem value="doors-desc">Πόρτες (Πολλές → Λίγες)</SelectItem>
                      <SelectItem value="size-asc">Μέγεθος (Μικρό → Μεγάλο)</SelectItem>
                      <SelectItem value="size-desc">Μέγεθος (Μεγάλο → Μικρό)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Products grid - 2 columns on mobile */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    onClick={() => handleProductClick(product.id)}
                  >
                    <div className="aspect-[3/2] overflow-hidden cursor-pointer">
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="text-lg font-semibold mb-1">{product.title}</h3>
                      <p className="text-blue-600 font-bold mb-2">{product.basePrice.toFixed(2)}€</p>
                      <p className="text-sm text-gray-500 mb-4 line-clamp-2">{product.description}</p>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Πόρτες: {product.doors}</span>
                          <span>Μέγεθος: {product.size === "small" ? "Μικρό" : 
                            product.size === "medium" ? "Μεσαίο" : 
                            product.size === "large" ? "Μεγάλο" : "Πολύ Μεγάλο"}</span>
                        </div>
                        <Button 
                          variant="outline" 
                          className="w-full mt-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleProductClick(product.id);
                          }}
                        >
                          Λεπτομέρειες
                        </Button>
                      </div>
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
                      setPriceRange([200, 350]);
                      setMinPrice("200");
                      setMaxPrice("350");
                      setSelectedDoors([]);
                      setSelectedSizes([]);
                      setSortOption("default");
                    }}
                  >
                    Επαναφορά φίλτρων
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

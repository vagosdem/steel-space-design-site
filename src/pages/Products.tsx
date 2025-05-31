
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import SEOHead from "@/components/SEOHead";
import ProductFilters from "@/components/ProductFilters";
import ProductGrid from "@/components/ProductGrid";
import ContactCTA from "@/components/ContactCTA";
import { products, type Product } from "@/data/products";

export default function Products() {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const topRef = useRef<HTMLDivElement>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortOption, setSortOption] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [colorFilter, setColorFilter] = useState("all");
  const [featureFilter, setFeatureFilter] = useState("all");
  
  // Handle URL parameters on component mount
  useEffect(() => {
    const urlCategory = searchParams.get('category');
    if (urlCategory && ['ντουλάπα', 'locker', 'αρχειοθήκη'].includes(urlCategory)) {
      setCategoryFilter(urlCategory);
    } else {
      setCategoryFilter("all");
    }
  }, [searchParams]);
  
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

  const handleRequestQuote = () => {
    navigate("/?scrollTo=contact");
  };

  const handleResetFilters = () => {
    setCategoryFilter("all");
    setTypeFilter("all");
    setColorFilter("all");
    setFeatureFilter("all");
    setSortOption("default");
    // Update URL to remove category parameter
    navigate('/products', { replace: true });
  };

  // Get page title based on category filter
  const getPageTitle = () => {
    switch(categoryFilter) {
      case "ντουλάπα":
        return "Μεταλλικές Ντουλάπες - Στιβαρές Λύσεις Αποθήκευσης | Stereon";
      case "locker":
        return "Μεταλλικά Lockers - Ατομικές Θυρίδες Ασφαλείας | Stereon";
      case "αρχειοθήκη":
        return "Μεταλλικές Αρχειοθήκες - Επαγγελματικές Λύσεις Αρχειοθέτησης | Stereon";
      default:
        return "Όλα τα Μεταλλικά Προϊόντα: Ντουλάπες, Lockers, Αρχειοθήκες | Stereom.gr";
    }
  };

  const getPageDescription = () => {
    switch(categoryFilter) {
      case "ντουλάπα":
        return "Ανακαλύψτε την εκλεκτή γκάμα μεταλλικών ντουλαπών μας: επαγγελματικές λύσεις αποθήκευσης, σχολικά ντουλάπια, συμπαγή συστήματα. Προσαρμόσιμα χρώματα και διαστάσεις.";
      case "locker":
        return "Εξερευνήστε τα μεταλλικά lockers μας: ατομικές θυρίδες ασφαλείας για γραφεία, γυμναστήρια, σχολεία. Πολλαπλές θέσεις, γυάλινες πόρτες, προηγμένα συστήματα κλειδώματος.";
      case "αρχειοθήκη":
        return "Επαγγελματικές μεταλλικές αρχειοθήκες και συρταριέρες αρχειοθέτησης για γραφεία, νοσοκομεία, δικηγορικά γραφεία. Ασφαλή συστήματα κλειδώματος, αντισκωριακή προστασία.";
      default:
        return "Ανακαλύψτε την πλήρη γκάμα μεταλλικών ντουλαπιών μας: επαγγελματικά ντουλάπια γραφείου, σχολικά lockers, μεταλλικές αρχειοθήκες, ντουλάπια με γυάλινες πόρτες. Custom κατασκευές για μεγάλες παραγγελίες.";
    }
  };

  return (
    <>
      <SEOHead 
        title={getPageTitle()}
        description={getPageDescription()}
        canonical="/products"
        image="/lovable-uploads/IMG_054822.webp"
      />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <div ref={topRef} className="container-section">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold mb-4">
                {categoryFilter === "ντουλάπα" && "Μεταλλικές Ντουλάπες"}
                {categoryFilter === "locker" && "Μεταλλικά Lockers & Ντουλάπια"}
                {categoryFilter === "αρχειοθήκη" && "Μεταλλικές Αρχειοθήκες & Συρταριέρες"}
                {categoryFilter === "all" && "Μεταλλικές Ντουλάπες & Συστήματα Αποθήκευσης"}
              </h1>
              <p className="text-lg text-metal-600 mb-8">
                {categoryFilter === "ντουλάπα" && "Εξερευνήστε την επιλεγμένη γκάμα μεταλλικών ντουλαπών μας. Από επαγγελματικές λύσεις γραφείου έως σχολικά ντουλάπια - βρείτε την ιδανική λύση αποθήκευσης για τις ανάγκες σας."}
                {categoryFilter === "locker" && "Ανακαλύψτε τα προηγμένα συστήματα lockers μας. Ατομικές θυρίδες ασφαλείας για γραφεία, γυμναστήρια, σχολεία και επαγγελματικούς χώρους με μέγιστη ασφάλεια και λειτουργικότητα."}
                {categoryFilter === "αρχειοθήκη" && "Επαγγελματικές λύσεις αρχειοθέτησης με μεταλλικές αρχειοθήκες και συρταριέρες υψηλής ποιότητας. Ιδανικές για γραφεία, νοσοκομεία, δικηγορικά γραφεία και επιχειρήσεις που χρειάζονται ασφαλή οργάνωση εγγράφων."}
                {categoryFilter === "all" && "Εξερευνήστε την ολοκληρωμένη γκάμα μεταλλικών ντουλαπιών και συστημάτων αποθήκευσης. Από επαγγελματικά ντουλάπια γραφείου έως μεταλλικές αρχειοθήκες - βρείτε την ιδανική λύση για τις ανάγκες σας."}
              </p>
            </motion.div>
            
            <ProductFilters
              categoryFilter={categoryFilter}
              setCategoryFilter={setCategoryFilter}
              typeFilter={typeFilter}
              setTypeFilter={setTypeFilter}
              colorFilter={colorFilter}
              setColorFilter={setColorFilter}
              featureFilter={featureFilter}
              setFeatureFilter={setFeatureFilter}
              sortOption={sortOption}
              setSortOption={setSortOption}
            />
            
            <ProductGrid
              products={filteredProducts}
              onProductClick={handleProductClick}
              onResetFilters={handleResetFilters}
            />
            
            <ContactCTA onRequestQuote={handleRequestQuote} />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}

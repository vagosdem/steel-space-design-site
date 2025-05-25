
import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
  const topRef = useRef<HTMLDivElement>(null);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [sortOption, setSortOption] = useState("default");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [colorFilter, setColorFilter] = useState("all");
  const [featureFilter, setFeatureFilter] = useState("all");
  
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
  };

  return (
    <>
      <SEOHead 
        title="Όλα τα Προϊόντα - Μεταλλικά Ντουλάπια & Ντουλάπες | Stereon"
        description="Ανακαλύψτε την πλήρη γκάμα μεταλλικών ντουλαπιών μας: επαγγελματικά, σχολικά, βιομηχανικά ντουλάπια locker, συστήματα αποθήκευσης με γυάλινες πόρτες. Φίλτρα ανά κατηγορία, χρώμα, τύπο."
        canonical="/products"
        image="/lovable-uploads/IMG_054822.webp"
      />
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

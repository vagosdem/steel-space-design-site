
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductImage from "@/components/ProductImage";
import ProductInfo from "@/components/ProductInfo";
import SimilarProducts from "@/components/SimilarProducts";
import SEOHead from "@/components/SEOHead";
import ProductBreadcrumbs from "@/components/ProductBreadcrumbs";
import ProductSchema from "@/components/ProductSchema";
import { useEffect } from "react";
import { products } from "@/data/products";

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

  // Generate SEO-optimized title and description
  let seoTitle = `${product.title} | Μεταλλικές Ντουλάπες Stereon - Ποιότητα & Αξιοπιστία`;
  let seoDescription = `${product.description} Ανακαλύψτε τις μεταλλικές ντουλάπες υψηλής ποιότητας της Stereon. Ιδανικές για ${product.type === 'office' ? 'γραφεία' : product.type === 'school' ? 'σχολεία' : product.type === 'industrial' ? 'βιομηχανικούς χώρους' : 'επαγγελματικούς χώρους'}. Ζητήστε προσφορά σήμερα!`;
  
  // Special SEO optimization for the industrial storage solution product
  if (productId === 'industrial-storage') {
    seoTitle = "Μεταλλικές Συρταριέρες Αρχειοθέτησης & Αρχειοθήκες | Stereom.gr";
    seoDescription = "Βρείτε ανθεκτικές μεταλλικές συρταριέρες αρχειοθέτησης και αρχειοθήκες για γραφεία & επαγγελματικούς χώρους. Custom διαστάσεις, χρώματα, υψηλή ασφάλεια για τα αρχεία σας.";
  }

  // Get similar products, excluding the current product and randomizing the selection
  const availableProducts = products.filter(p => p.id !== productId);
  const shuffledProducts = [...availableProducts].sort(() => Math.random() - 0.5);
  const similarProducts = shuffledProducts.slice(0, 3);

  return (
    <>
      <SEOHead 
        title={seoTitle}
        description={seoDescription}
        canonical={`/product/${productId}`}
        image={product.image}
        type="product"
      />
      <ProductSchema product={product} />
      
      <div className="min-h-screen bg-white">
        <Navbar />
        
        <div className="container-section">
          <ProductBreadcrumbs productTitle={product.title} />
          
          <div className="mb-6">
            <Button variant="outline" onClick={() => navigate(-1)} className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Πίσω
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <ProductImage image={product.image} title={product.title} />
            
            <div className="space-y-6">
              <ProductInfo product={product} />
            </div>
          </div>
          
          <SimilarProducts products={similarProducts} />
        </div>
        
        <Footer />
      </div>
    </>
  );
}

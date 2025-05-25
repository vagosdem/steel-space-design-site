
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductImage from "@/components/ProductImage";
import ProductInfo from "@/components/ProductInfo";
import ProductFeatures from "@/components/ProductFeatures";
import SimilarProducts from "@/components/SimilarProducts";
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

  // Get similar products, excluding the current product and randomizing the selection
  const availableProducts = products.filter(p => p.id !== productId);
  const shuffledProducts = [...availableProducts].sort(() => Math.random() - 0.5);
  const similarProducts = shuffledProducts.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container-section">
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
            <ProductFeatures features={product.features} />
          </div>
        </div>
        
        <SimilarProducts products={similarProducts} />
      </div>
      
      <Footer />
    </div>
  );
}

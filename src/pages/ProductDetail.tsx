
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Ruler, Package, Square } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            <div className="transition-all duration-300">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-auto object-contain max-h-[500px]"
                loading="lazy"
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h1 className="text-3xl font-semibold text-black">{product.title}</h1>
              <p className="text-lg text-metal-600 mt-2">{product.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-6 my-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Square size={18} className="text-blue-600" />
                </div>
                <span className="text-sm text-neutral-950">Πλάτος: {product.dimensions?.width || "N/A"}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Ruler size={18} className="text-blue-600" />
                </div>
                <span className="text-sm text-zinc-950">Ύψος: {product.dimensions?.height || "N/A"}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Package size={18} className="text-blue-600" />
                </div>
                <span className="text-sm text-zinc-950">Βάθος: {product.dimensions?.depth || "N/A"}</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-medium text-black mb-2">Χαρακτηριστικά</h2>
              <ul className="list-disc list-inside space-y-1 text-metal-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-medium text-black mb-2">Περισσότερες Πληροφορίες</h2>
              <p className="text-metal-600">{product.details}</p>
            </div>
            
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 rounded-xl w-full mb-3" 
                onClick={() => navigate("/#contact")}
              >
                Ζητήστε Προσφορά
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold text-black mb-6">Παρόμοια Προϊόντα</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center h-64 p-2">
                  <img 
                    src={relatedProduct.image} 
                    alt={relatedProduct.title} 
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black mb-2">{relatedProduct.title}</h3>
                  <p className="text-metal-600 line-clamp-2">{relatedProduct.description}</p>
                  <Button 
                    variant="outline" 
                    className="mt-4 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-xl w-full"
                    onClick={() => {
                      navigate(`/product/${relatedProduct.id}`);
                      window.scrollTo(0, 0);
                    }}
                  >
                    Περισσότερες Πληροφορίες
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
}

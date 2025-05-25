
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Product } from "@/data/products";

interface SimilarProductsProps {
  products: Product[];
}

export default function SimilarProducts({ products }: SimilarProductsProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-semibold text-black mb-6">Παρόμοια Προϊόντα</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((relatedProduct) => (
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
  );
}

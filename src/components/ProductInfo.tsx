
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Ruler, Package, Square } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Product } from "@/data/products";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const navigate = useNavigate();

  return (
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
  );
}


import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  type: string;
  color: string;
  material: string;
  features: string[];
}

interface ProductCardProps {
  product: Product;
  onProductClick: (productId: string) => void;
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function ProductCard({ product, onProductClick }: ProductCardProps) {
  return (
    <motion.div 
      variants={item}
      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 flex flex-col h-full"
    >
      <div 
        className="aspect-square p-1 flex items-center justify-center bg-white overflow-hidden cursor-pointer"
        onClick={() => onProductClick(product.id)}
      >
        <img 
          src={product.image} 
          alt={product.title} 
          width="400"
          height="400"
          loading="lazy"
          className="w-auto h-auto max-w-full max-h-full object-contain transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-4 flex flex-col">
        <h3 className="text-xl font-semibold mb-2 text-black">{product.title}</h3>
        <p className="text-metal-600 mb-4">{product.description}</p>
        <div className="mt-auto">
          <Button 
            onClick={() => onProductClick(product.id)}
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-xl"
          >
            Περισσότερες Πληροφορίες
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

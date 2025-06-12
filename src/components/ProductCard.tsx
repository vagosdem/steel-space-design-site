
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

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
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 }
};

export default function ProductCard({ product, onProductClick }: ProductCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div 
      variants={item} 
      className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col h-full"
    >
      <div 
        className="flex items-center justify-center h-64 p-2 bg-gray-50 cursor-pointer relative"
        onClick={() => onProductClick(product.id)}
      >
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.title}
          loading="lazy"
          className={`max-w-full max-h-full object-contain hover:scale-105 transition-transform duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-black mb-3">{product.title}</h3>
        <p className="text-gray-600 text-sm mb-6 flex-grow">{product.description}</p>
        <div className="mt-auto">
          <Link to={`/product/${product.id}`} className="block">
            <Button 
              variant="outline" 
              className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 rounded-xl"
            >
              Περισσότερες Πληροφορίες
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

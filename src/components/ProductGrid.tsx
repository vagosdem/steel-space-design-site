
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import ProductCard from "./ProductCard";

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

interface ProductGridProps {
  products: Product[];
  onProductClick: (productId: string) => void;
  onResetFilters: () => void;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ProductGrid({ products, onProductClick, onResetFilters }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center py-12"
      >
        <h3 className="text-lg font-medium mb-2">Δεν βρέθηκαν προϊόντα</h3>
        <p className="text-gray-500 mb-4">Δοκιμάστε να αλλάξετε τα φίλτρα σας</p>
        <Button
          variant="outline"
          onClick={onResetFilters}
          className="rounded-xl"
        >
          Επαναφορά φίλτρων
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {products.map((product) => (
        <ProductCard 
          key={product.id} 
          product={product} 
          onProductClick={onProductClick}
        />
      ))}
    </motion.div>
  );
}

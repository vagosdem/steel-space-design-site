
import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

interface ProductCardProps {
  product: {
    id: string;
    title: string;
    description: string;
    image: string;
  };
  onRequestQuote: () => void;
}

const ProductCard = React.memo(function ProductCard({ product, onRequestQuote }: ProductCardProps) {
  const location = useLocation();
  
  // Store current scroll position in state when navigating to product details
  const handleProductLinkClick = () => {
    sessionStorage.setItem('scrollPosition', window.pageYOffset.toString());
    sessionStorage.setItem('returnPath', location.pathname + location.hash);
  };

  return (
    <div className="p-1">
      <Card className="overflow-hidden border-none shadow-none">
        <div className="flex flex-col md:flex-row items-center gap-8 py-6">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="p-0 bg-white rounded-3xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <img 
                src={product.image} 
                alt={product.title}
                width={400}
                height={300}
                loading="lazy"
                className="w-full h-auto object-contain mx-auto rounded-2xl"
              />
            </motion.div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-medium text-metal-900">{product.title}</h3>
              <p className="text-metal-600 mt-2">{product.description}</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button 
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 rounded-lg px-8 py-6"
                onClick={onRequestQuote}
              >
                Ζητήστε Προσφορά
              </Button>
              <Link 
                to={`/product/${product.id}`} 
                className="w-full sm:w-auto"
                onClick={handleProductLinkClick}
              >
                <Button variant="outline" className="w-full border-blue-300 text-blue-600 hover:bg-blue-50 rounded-lg px-8 py-6">
                  Περισσότερες Πληροφορίες
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </Card>
    </div>
  );
});

export default ProductCard;

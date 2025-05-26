import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

interface ProductShowcaseProps {
  product: {
    id: string;
    title: string;
    description: string;
    image: string;
    type: string;
  };
  alignment: "left" | "right";
}

export default function ProductShowcase({
  product,
  alignment
}: ProductShowcaseProps) {
  const imageOrder = alignment === "left" ? "order-first" : "order-last";
  const contentOrder = alignment === "left" ? "order-last" : "order-first";
  const navigate = useNavigate();

  const handleRequestQuote = () => {
    navigate("/?scrollTo=contact");
  };
  
  return (
    <section className="bg-white py-20 relative z-10 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            className={`w-full md:w-1/2 ${imageOrder} flex justify-center`} 
            initial={{
              opacity: 0,
              x: alignment === "left" ? -50 : 50
            }} 
            whileInView={{
              opacity: 1,
              x: 0
            }} 
            viewport={{
              once: true
            }} 
            transition={{
              duration: 0.7,
              delay: 0.2
            }}
          >
            <div className="transition-all duration-300 flex justify-center items-center">
              <img 
                src={product.image} 
                alt={product.title} 
                width={400}
                height={400}
                loading="lazy"
                className="product-showcase-image"
              />
            </div>
          </motion.div>
          
          <motion.div 
            className={`w-full md:w-1/2 ${contentOrder} space-y-6`} 
            initial={{
              opacity: 0,
              y: 30
            }} 
            whileInView={{
              opacity: 1,
              y: 0
            }} 
            viewport={{
              once: true
            }} 
            transition={{
              duration: 0.5
            }}
          >
            <div>
              <h2 className="text-3xl font-medium text-black mb-4">{product.title}</h2>
              <p className="text-gray-600 text-lg mb-6">{product.description}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={`/product/${product.id}`}>
                  <Button className="bg-blue-600 hover:bg-blue-700 rounded-xl touch-target">
                    Περισσότερες Πληροφορίες
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-blue-300 text-blue-600 hover:bg-blue-50 rounded-xl touch-target" 
                  onClick={handleRequestQuote}
                >
                  Ζητήστε Προσφορά
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

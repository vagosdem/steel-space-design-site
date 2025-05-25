
import { motion } from "framer-motion";

interface ProductImageProps {
  image: string;
  title: string;
}

export default function ProductImage({ image, title }: ProductImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex items-center justify-center"
    >
      <div className="transition-all duration-300">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-auto object-contain max-h-[500px]"
          loading="lazy"
        />
      </div>
    </motion.div>
  );
}

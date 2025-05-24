
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

interface HeroContentProps {
  onContactClick: () => void;
}

export default function HeroContent({ onContactClick }: HeroContentProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.7 }} 
      className="space-y-6 max-w-4xl mx-auto"
    >
      <h1 className="font-medium text-4xl md:text-5xl lg:text-6xl text-metal-900 tracking-tight">
        Μεταλλικές Ντουλάπες & Συρταριέρες Αρχειοθέτησης
        <br className="hidden sm:inline" />
        <span className="text-blue-600"> για Επαγγελματικούς Χώρους</span>
      </h1>
      <p className="text-lg md:text-xl text-metal-600 max-w-3xl mx-auto">
        Custom lockers, συρταριέρες πολλαπλών θέσεων & industrial αποθηκευτικές λύσεις, 
        σχεδιασμένες και κατασκευασμένες στην Ελλάδα.
      </p>
      <div className="flex justify-center pt-4">
        <Button 
          size="lg" 
          className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-8 text-lg rounded-md"
          onClick={onContactClick}
        >
          Ζητήστε Προσφορά
        </Button>
      </div>
    </motion.div>
  );
}

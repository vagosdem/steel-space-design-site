
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-white text-metal-900 pt-24 pb-16">
      <div className="container-section text-center">
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
          <div className="flex flex-col sm:flex-row justify-center gap-5 pt-4">
            <Link to="#contact">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg">
                Ζητήστε Προσφορά
              </Button>
            </Link>
            <Link to="#projects">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-metal-300 text-metal-900 hover:bg-metal-100 px-8 py-6 text-lg">
                Δείτε τα Έργα Μας
              </Button>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <img 
            src="/lovable-uploads/d6bb8bc5-c886-4cd5-8dda-0b5c84a7e94e.png" 
            alt="Industrial lockers and storage solutions" 
            className="w-full h-auto object-contain mx-auto" 
          />
        </motion.div>
      </div>
    </section>
  );
}

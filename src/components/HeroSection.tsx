
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl">
                Ζητήστε Προσφορά
              </Button>
            </Link>
            <Link to="#projects">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-metal-300 px-8 py-6 text-lg text-slate-50 bg-zinc-950 hover:bg-zinc-800 rounded-xl">
                Δείτε τα Έργα Μας
              </Button>
            </Link>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.3 }} 
          className="mt-16 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8"
        >
          <div className="md:w-1/2">
            <img 
              src="/lovable-uploads/64d9716d-261a-44b6-b469-c4dff49cea91.png" 
              alt="Orange metal lockers" 
              className="w-full h-auto object-contain mx-auto border border-gray-200 rounded-2xl shadow-sm p-4 hover:shadow-md transition-all duration-300"
            />
          </div>
          <div className="md:w-1/2 text-left space-y-4">
            <h2 className="text-2xl font-semibold text-metal-900">Ποιοτικές Λύσεις Αποθήκευσης</h2>
            <p className="text-metal-600">
              Τα μεταλλικά ντουλάπια και οι συρταριέρες μας προσφέρουν ανθεκτικές και αισθητικά 
              καλαίσθητες λύσεις για την οργάνωση και αποθήκευση εγγράφων, υλικών και προσωπικών 
              αντικειμένων στους επαγγελματικούς σας χώρους.
            </p>
            <p className="text-metal-600">
              Με εξατομικευμένες επιλογές διαστάσεων, χρωμάτων και διαμορφώσεων, σχεδιάζουμε 
              λύσεις που ανταποκρίνονται ακριβώς στις ανάγκες σας.
            </p>
            <Link to="#contact">
              <Button className="flex items-center gap-2 rounded-xl mt-2 bg-blue-600 hover:bg-blue-700">
                Θέλω και εγώ παρόμοια λύση 
                <ArrowRight size={16} />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

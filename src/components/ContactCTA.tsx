
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface ContactCTAProps {
  onRequestQuote: () => void;
}

export default function ContactCTA({ onRequestQuote }: ContactCTAProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-20 bg-gradient-to-r from-blue-900 to-metal-900 rounded-lg p-8 text-center text-white"
    >
      <h2 className="text-2xl font-bold mb-4">Χρειάζεστε μια εξατομικευμένη λύση;</h2>
      <p className="text-metal-200 mb-6 max-w-2xl mx-auto">
        Σχεδιάζουμε και κατασκευάζουμε προσαρμοσμένα μεταλλικά ντουλάπια βάσει των συγκεκριμένων αναγκών και προδιαγραφών σας.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button 
          className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 rounded-xl" 
          onClick={onRequestQuote}
        >
          <Mail className="h-4 w-4" />
          Ζητήστε Προσφορά
        </Button>
        <Button variant="outline" onClick={() => window.location.href = "tel:+302109999999"} className="border-blue-400 text-white hover:bg-blue-800 flex items-center gap-2 rounded-xl">
          <Phone className="h-4 w-4" />
          Καλέστε μας
        </Button>
      </div>
    </motion.div>
  );
}

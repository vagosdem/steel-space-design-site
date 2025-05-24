
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroDescriptionProps {
  onContactClick: () => void;
}

export default function HeroDescription({ onContactClick }: HeroDescriptionProps) {
  return (
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
      <Button 
        className="flex items-center gap-2 rounded-md mt-2 bg-blue-600 hover:bg-blue-700 px-10 py-8"
        onClick={onContactClick}
      >
        Θέλω και εγώ παρόμοια λύση 
        <ArrowRight size={16} />
      </Button>
    </div>
  );
}

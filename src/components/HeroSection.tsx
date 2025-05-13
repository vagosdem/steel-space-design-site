
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-metal-900 text-white">
      <div className="container-section flex flex-col lg:flex-row lg:items-center lg:gap-12">
        <div className="lg:w-1/2 space-y-6 animate-fade-in">
          <h1 className="font-bold text-white leading-tight">
            Μεταλλικές Ντουλάπες & Συρταριέρες Αρχειοθέτησης <br className="hidden sm:inline" />
            <span className="text-blue-400">για Επαγγελματικούς Χώρους</span>
          </h1>
          <p className="text-lg md:text-xl text-metal-200 max-w-2xl text-pretty">
            Custom lockers, συρταριέρες πολλαπλών θέσεων & industrial αποθηκευτικές λύσεις, 
            σχεδιασμένες και κατασκευασμένες στην Ελλάδα.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link to="#contact">
              <Button size="lg" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Ζήτα προσφορά
              </Button>
            </Link>
            <Link to="#projects">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-metal-600 text-white hover:bg-metal-800">
                Δες τα έργα μας
              </Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="bg-metal-800 rounded-lg overflow-hidden shadow-lg border border-metal-700">
            <img 
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&h=600" 
              alt="Industrial lockers and storage solutions" 
              className="w-full h-auto object-cover aspect-[4/3]" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

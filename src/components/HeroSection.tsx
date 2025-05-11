
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="bg-white">
      <div className="container-section flex flex-col lg:flex-row lg:items-center lg:gap-12">
        <div className="lg:w-1/2 space-y-6 animate-fade-in">
          <h1 className="font-bold text-metal-900 leading-tight">
            Μεταλλικοί Χώροι Αποθήκευσης <br className="hidden sm:inline" />
            <span className="text-blue-600">Σχεδιασμένοι να Διαρκέσουν</span>
          </h1>
          <p className="text-lg md:text-xl text-metal-600 max-w-2xl text-pretty">
            Στιβαρά μεταλλικά ντουλάπια και ντουλάπες σχεδιασμένα τόσο για οικιακούς όσο και για επαγγελματικούς χώρους. 
            Κατασκευασμένα με υλικά ποιότητας και σχολαστική τεχνογνωσία.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link to="#products">
              <Button size="lg" className="text-base w-full sm:w-auto">Εξερευνήστε τα Προϊόντα</Button>
            </Link>
            <Link to="#contact">
              <Button size="lg" variant="outline" className="text-base w-full sm:w-auto">Ζητήστε Προσφορά</Button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="bg-metal-100 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="/lovable-uploads/d6bb8bc5-c886-4cd5-8dda-0b5c84a7e94e.png" 
              alt="Μεταλλικά ντουλάπια Stereon" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

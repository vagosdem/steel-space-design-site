
import { Button } from "@/components/ui/button";

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
            <Button size="lg" className="text-base">Εξερευνήστε τα Προϊόντα</Button>
            <Button size="lg" variant="outline" className="text-base">Ζητήστε Προσφορά</Button>
          </div>
        </div>
        <div className="lg:w-1/2 mt-10 lg:mt-0">
          <div className="bg-metal-100 rounded-lg overflow-hidden shadow-lg">
            <img 
              src="https://images.unsplash.com/photo-1541623089466-8e46c03d4d27?auto=format&fit=crop&w=800&h=600" 
              alt="Μεταλλικά ντουλάπια ποιότητας" 
              className="w-full h-auto object-cover aspect-[4/3]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

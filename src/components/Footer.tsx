import { Archive, Facebook, Instagram, Linkedin } from "lucide-react";
export default function Footer() {
  const year = new Date().getFullYear();
  return <footer className="bg-metal-900 text-white">
      <div className="container-section !py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Archive className="h-6 w-6 text-blue-400" />
              <span className="text-xl font-bold">Stereon</span>
            </div>
            <p className="text-metal-400 pr-4">
              Σχεδιάζουμε και κατασκευάζουμε ποιοτικές μεταλλικές λύσεις αποθήκευσης για επαγγελματικούς χώρους από το 2005.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-metal-200">Προϊόντα</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-metal-400 hover:text-white transition-colors">Μεταλλικές Ντουλάπες</a></li>
              <li><a href="#" className="text-metal-400 hover:text-white transition-colors">Συρταριέρες Αρχειοθέτησης</a></li>
              <li><a href="#" className="text-metal-400 hover:text-white transition-colors">Custom Κατασκευές</a></li>
              <li><a href="#" className="text-metal-400 hover:text-white transition-colors">Βιομηχανικές Λύσεις</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-metal-200">Εταιρεία</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-metal-400 hover:text-white transition-colors">Σχετικά με εμάς</a></li>
              <li><a href="#projects" className="text-metal-400 hover:text-white transition-colors">Έργα</a></li>
              <li><a href="#features" className="text-metal-400 hover:text-white transition-colors">Υπηρεσίες</a></li>
              <li><a href="#contact" className="text-metal-400 hover:text-white transition-colors">Επικοινωνία</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-metal-200">Νομικά</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-metal-400 hover:text-white transition-colors">Όροι Χρήσης</a></li>
              <li><a href="#" className="text-metal-400 hover:text-white transition-colors">Πολιτική Απορρήτου</a></li>
              <li><a href="#" className="text-metal-400 hover:text-white transition-colors">Cookies</a></li>
              <li><a href="#" className="text-metal-400 hover:text-white transition-colors">Εγγύηση Προϊόντων</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-metal-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-metal-500 text-sm">
            © {year} Stereon. Με επιφύλαξη παντός δικαιώματος.
          </div>
          
        </div>
      </div>
    </footer>;
}

import { Package, Shield, Clock, Award, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0
  }
};

export default function AboutSection() {
 return (
   <section id="about" className="bg-metal-800 text-white relative">
      {/* Transition gradient at the top */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-metal-800 w-full"></div>

      {/* Content */}
      <div className="container mx-auto px-4 py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-12 lg:space-y-0 lg:space-x-12">
          <div className="lg:w-2/3">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
 Καλώς ορίσατε στην Steel Space Design
            </h2>
            <p className="text-lg mb-6">
 όπου η καινοτομία συναντά τη δεξιοτεχνία στον κόσμο των μεταλλικών κατασκευών. Είμαστε κορυφαίος πάροχος υπηρεσιών σχεδιασμού και κατασκευής χάλυβα υψηλής ποιότητας, αφοσιωμένοι στη μετατροπή οραμάτων σε πραγματικότητα.
            </p>
            <p className="text-lg mb-6">
 Με πάθος για την ακρίβεια και δέσμευση στην αριστεία, η ομάδα έμπειρων επαγγελματιών μας ειδικεύεται στη δημιουργία στιβαρών και αισθητικά ευχάριστων λύσεων από χάλυβα για ένα ευρύ φάσμα εφαρμογών. Από βιομηχανικές εγκαταστάσεις και εμπορικά κτίρια έως κατοικίες και καλλιτεχνικές εγκαταστάσεις, διαθέτουμε την τεχνογνωσία να χειριστούμε έργα οποιασδήποτε κλίμακας και πολυπλοκότητας.
            </p>
            <p className="text-lg">
 Στην Steel Space Design, πιστεύουμε στο να ξεπερνάμε τα όρια του εφικτού με τον χάλυβα. Αγκαλιάζουμε τις τελευταίες τεχνολογίες και αρχές σχεδιασμού για να προσφέρουμε καινοτόμες λύσεις που δεν είναι μόνο δομικά άρτιες αλλά και οπτικά εντυπωσιακές. Η συνεργατική μας προσέγγιση διασφαλίζει ότι συνεργαζόμαστε στενά με τους πελάτες μας, κατανοώντας τις μοναδικές τους απαιτήσεις και μεταφράζοντάς τες σε λειτουργικούς και εμπνευσμένους χώρους από χάλυβα.
            </p>
          </div>
          <div className="lg:w-1/3">
            {/* Smaller image container */}
            <div className="bg-metal-700 rounded-lg overflow-hidden max-w-sm mx-auto">
              <img
                src="/lovable-uploads/IMG_13722.webp"
                alt="About Steel Space Design"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Transition gradient at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-metal-800 w-full"></div>
    </section>
  );
}


import { Building2, Dumbbell, Building, School, BadgeHelp } from "lucide-react";

const industries = [
  {
    title: "Γυμναστήρια / Αποδυτήρια",
    description: "Ασφαλής αποθήκευση προσωπικών αντικειμένων για πελάτες και προσωπικό.",
    icon: Dumbbell
  },
  {
    title: "Βιομηχανίες / Εργοστάσια",
    description: "Ανθεκτικές λύσεις για βιομηχανικούς χώρους με αυξημένες απαιτήσεις.",
    icon: Building
  },
  {
    title: "Δημόσιες Υπηρεσίες / Γραφεία",
    description: "Συστήματα αρχειοθέτησης και αποθήκευσης για επαγγελματικούς χώρους.",
    icon: Building2
  },
  {
    title: "Νοσοκομεία / Εκπαιδευτικά Ιδρύματα",
    description: "Εξειδικευμένες κατασκευές για ιδιαίτερες ανάγκες υγείας και εκπαίδευσης.",
    icon: School
  }
];

export default function IndustrySection() {
  return (
    <section id="industries" className="bg-metal-800 text-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-white mb-4">Για Ποιους Είναι</h2>
          <p className="text-metal-300 text-lg">
            Οι λύσεις μας απευθύνονται σε επαγγελματίες και επιχειρήσεις που χρειάζονται αξιόπιστες και ανθεκτικές κατασκευές.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-metal-700 border border-metal-600 rounded-lg p-6 hover:bg-metal-600 transition-colors">
              <div className="inline-flex items-center justify-center p-2 bg-metal-900 rounded-full mb-4">
                <industry.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-metal-300">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


import { Box, PackageOpen, Building } from "lucide-react";

const features = [
  {
    title: "Υλικά Υψηλής Ποιότητας",
    description: "Τα προϊόντα μας κατασκευάζονται από χάλυβα και αλουμίνιο υψηλής ποιότητας, εξασφαλίζοντας μακροζωία και ανθεκτικότητα.",
    icon: Box
  },
  {
    title: "Προσαρμοσμένα Σχέδια",
    description: "Κάθε χώρος είναι μοναδικός. Δημιουργούμε εξατομικευμένες λύσεις που ταιριάζουν απόλυτα στις συγκεκριμένες απαιτήσεις σας.",
    icon: PackageOpen
  },
  {
    title: "Επαγγελματική Εγκατάσταση",
    description: "Η έμπειρη ομάδα μας αναλαμβάνει τα πάντα, από τις μετρήσεις έως την τελική εγκατάσταση με ακρίβεια.",
    icon: Building
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-white">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-metal-900 mb-4">Γιατί να μας Επιλέξετε</h2>
          <p className="text-metal-600 text-lg">
            Η δέσμευσή μας στην ποιότητα και την ικανοποίηση των πελατών μας ξεχωρίζει στον κλάδο.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-metal-50 p-6 rounded-lg border border-metal-100">
              <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-metal-900">{feature.title}</h3>
              <p className="text-metal-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-metal-900 rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Εξειδικευμένη Τεχνογνωσία
              </h3>
              <p className="text-metal-200 mb-6">
                Με περισσότερα από 15 χρόνια εμπειρίας στον κλάδο, οι έμπειροι τεχνίτες μας φέρνουν την εξειδίκευση και την ακρίβεια σε κάθε έργο. Είμαστε υπερήφανοι για την προσοχή στη λεπτομέρεια και την ανώτερη τεχνογνωσία μας.
              </p>
              <ul className="space-y-3 text-metal-200">
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Κατασκευή με ακρίβεια
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Έλεγχος ποιότητας σε κάθε στάδιο
                </li>
                <li className="flex items-center">
                  <svg className="h-5 w-5 text-blue-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Ανθεκτικά φινιρίσματα
                </li>
              </ul>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&h=600" 
                alt="Εργαστήριο μεταλλικών κατασκευών" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

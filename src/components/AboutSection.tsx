
import { Package, Shield, Clock, Award, Users, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function AboutSection() {
  return <section id="about" className="bg-metal-50">
      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-blue-600 font-medium">
                Σχετικά με την εταιρία μας
              </div>
            </div>
            <h2 className="text-metal-900 mb-6">Δημιουργούμε Ποιοτικές Μεταλλικές Λύσεις Αποθήκευσης από το 1967</h2>
            <p className="text-metal-600 mb-6">
              Η εταιρεία μας ειδικεύεται στο σχεδιασμό και την κατασκευή μεταλλικών ντουλαπιών και ντουλαπών υψηλής ποιότητας για οικιακούς, εμπορικούς και βιομηχανικούς χώρους. Συνδυάζουμε την παραδοσιακή τεχνογνωσία με τη σύγχρονη τεχνολογία για να δημιουργήσουμε λύσεις αποθήκευσης που είναι τόσο λειτουργικές όσο και αισθητικά ευχάριστες.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Package className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-metal-900">Υλικά Ποιότητας</h4>
                  <p className="text-metal-600">Χρησιμοποιούμε μόνο μέταλλα και εξαρτήματα υψηλότερης ποιότητας στα προϊόντα μας.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-metal-900">Εγγύηση 10 Ετών</h4>
                  <p className="text-metal-600">Όλα τα προϊόντα μας συνοδεύονται από πλήρη εγγύηση για την ηρεμία σας.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Clock className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-metal-900">Παράδοση στην Ώρα της</h4>
                  <p className="text-metal-600">Είμαστε υπερήφανοι που τηρούμε τις προθεσμίες και παραδίδουμε τα έργα εγκαίρως.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-metal-900">Πιστοποιημένη Ποιότητα</h4>
                  <p className="text-metal-600">Όλα τα προϊόντα μας πληρούν τα ευρωπαϊκά πρότυπα ποιότητας και ασφάλειας.</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-metal-900 font-medium">1000+ Ικανοποιημένοι Πελάτες</span>
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-blue-600" />
                <span className="text-metal-900 font-medium">50+ Χρόνια Εμπειρίας</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-600 rounded-lg opacity-20"></div>
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&h=600" alt="Το εργαστήριό μας" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-6 right-10 bg-white p-4 rounded-lg shadow-lg max-w-xs">
              <p className="text-sm italic text-metal-600">
                "Η ποιότητα των προϊόντων και η εξυπηρέτησή τους ξεπέρασαν τις προσδοκίες μας."
              </p>
              <p className="text-right text-metal-900 font-medium mt-2">- Γιώργος Δημητρίου, CEO</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
}

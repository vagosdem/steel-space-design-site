
import SEOHead from '@/components/SEOHead';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Legal() {
  return (
    <>
      <SEOHead 
        title="Πολιτική Απορρήτου & Όροι Χρήσης - Αντώνης Δεμερύτης & ΣΙΑ Ε.Ε."
        description="Πολιτική Απορρήτου και Όροι Χρήσης για την εταιρία Αντώνης Δεμερύτης & ΣΙΑ Ε.Ε. - Stereon. Προστασία προσωπικών δεδομένων και συμμόρφωση με GDPR."
        canonical="/legal"
        noindex={true}
      />
      
      <Navbar />
      
      <main className="min-h-screen bg-gray-50 pt-20">
        <div className="container-section">
          {/* Back to home button */}
          <div className="mb-8">
            <Link to="/">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Επιστροφή στην Αρχική
              </Button>
            </Link>
          </div>

          {/* Main content */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-metal-900 mb-4">
                Πολιτική Απορρήτου & Όροι Χρήσης
              </h1>
              <p className="text-metal-600 text-lg">
                <strong>Ισχύει από:</strong> Μάιος 2025
              </p>
            </header>

            <div className="prose prose-lg max-w-none space-y-6">
              {/* Section 1 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-metal-800 mb-3">1. Εισαγωγή</h2>
                <p className="text-metal-700 leading-relaxed">
                  Καλώς ήρθατε στην ιστοσελίδα της εταιρίας <strong>Αντώνης Δεμερύτης & ΣΙΑ Ε.Ε.</strong>. 
                  Η προστασία των προσωπικών σας δεδομένων και η συμμόρφωση με τους ισχύοντες νόμους είναι 
                  προτεραιότητά μας. Η παρούσα σελίδα περιγράφει την Πολιτική Απορρήτου και τους Όρους 
                  Χρήσης της ιστοσελίδας μας.
                </p>
              </section>

              {/* Section 2 */}
              <section id="privacy-policy" className="mb-8">
                <h2 className="text-2xl font-bold text-metal-800 mb-3">2. Πολιτική Απορρήτου - Συλλογή και Χρήση Προσωπικών Δεδομένων</h2>
                <p className="text-metal-700 leading-relaxed mb-3">
                  Συλλέγουμε τα ακόλουθα προσωπικά δεδομένα μέσω της φόρμας επικοινωνίας:
                </p>
                <ul className="list-disc list-inside text-metal-700 space-y-1 mb-3">
                  <li>Όνομα</li>
                  <li>Ηλεκτρονική διεύθυνση (email)</li>
                  <li>Τηλέφωνο επικοινωνίας</li>
                </ul>
                <p className="text-metal-700 leading-relaxed">
                  Τα δεδομένα αυτά χρησιμοποιούνται αποκλειστικά για την επικοινωνία μαζί σας σχετικά με 
                  τα προϊόντα και τις υπηρεσίες μας. Δεν κοινοποιούνται σε τρίτους και δεν χρησιμοποιούνται 
                  για σκοπούς μάρκετινγκ.
                </p>
              </section>

              {/* Section 3 */}
              <section id="cookies" className="mb-8">
                <h2 className="text-2xl font-bold text-metal-800 mb-3">3. Cookies</h2>
                <p className="text-metal-700 leading-relaxed">
                  Η ιστοσελίδα μας δεν χρησιμοποιεί cookies τρίτων μερών προς το παρόν. Ενδέχεται στο μέλλον 
                  να χρησιμοποιηθούν για τη βελτίωση της εμπειρίας χρήστη, οπότε και θα ενημερωθείτε αναλόγως.
                </p>
              </section>

              {/* Section 4 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-metal-800 mb-3">4. Δικαιώματα Χρηστών</h2>
                <p className="text-metal-700 leading-relaxed">
                  Σύμφωνα με τον Γενικό Κανονισμό Προστασίας Δεδομένων (GDPR), έχετε το δικαίωμα πρόσβασης, 
                  διόρθωσης ή διαγραφής των προσωπικών σας δεδομένων. Για οποιοδήποτε σχετικό αίτημα, 
                  παρακαλούμε επικοινωνήστε μαζί μας μέσω email.
                </p>
              </section>

              {/* Section 5 */}
              <section id="terms-of-use" className="mb-8">
                <h2 className="text-2xl font-bold text-metal-800 mb-3">5. Όροι Χρήσης</h2>
                <p className="text-metal-700 leading-relaxed mb-3">
                  Η χρήση της ιστοσελίδας μας προϋποθέτει την αποδοχή των παρακάτω όρων:
                </p>
                <ul className="list-disc list-inside text-metal-700 space-y-2">
                  <li>
                    Το περιεχόμενο της ιστοσελίδας (κείμενα, εικόνες, λογότυπα) αποτελεί πνευματική ιδιοκτησία 
                    της εταιρίας μας και προστατεύεται από την ισχύουσα νομοθεσία.
                  </li>
                  <li>
                    Απαγορεύεται η αναπαραγωγή, διανομή ή τροποποίηση του περιεχομένου χωρίς προηγούμενη 
                    έγγραφη άδεια.
                  </li>
                  <li>
                    Η εταιρία δεν φέρει ευθύνη για τυχόν ανακρίβειες ή παραλείψεις στο περιεχόμενο της ιστοσελίδας.
                  </li>
                  <li>
                    Η ιστοσελίδα μπορεί να περιέχει συνδέσμους προς άλλες ιστοσελίδες, για τις οποίες δεν φέρουμε 
                    ευθύνη ως προς το περιεχόμενο ή την πολιτική απορρήτου τους.
                  </li>
                </ul>
              </section>

              {/* Section 6 */}
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-metal-800 mb-3">6. Επικοινωνία</h2>
                <p className="text-metal-700 leading-relaxed mb-3">
                  Για οποιαδήποτε απορία ή αίτημα σχετικά με την Πολιτική Απορρήτου ή τους Όρους Χρήσης, 
                  μπορείτε να επικοινωνήσετε μαζί μας:
                </p>
                <div className="bg-metal-50 p-6 rounded-lg">
                  <p className="text-metal-700 mb-2">
                    <strong>Email:</strong> stereom@otenet.gr
                  </p>
                  <p className="text-metal-700">
                    <strong>Διεύθυνση:</strong> Καπσοράχη 15, Αιγάλεω, 12241
                  </p>
                </div>
              </section>

              {/* Footer note */}
              <div className="border-t border-metal-200 pt-6">
                <p className="text-metal-600 text-center font-medium">
                  Η χρήση της ιστοσελίδας συνεπάγεται την αποδοχή της παρούσας Πολιτικής Απορρήτου και των Όρων Χρήσης.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

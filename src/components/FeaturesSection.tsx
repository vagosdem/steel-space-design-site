
import { Archive, FileText, PaintBucket, Shield, Truck } from "lucide-react";

const features = [
  {
    title: "Μεταλλικές ντουλάπες locker",
    description: "Ιδανικές για αποδυτήρια, εργοστάσια και αποθήκες. Στιβαρή κατασκευή με αντοχή στο χρόνο.",
    icon: Archive
  },
  {
    title: "Συρταριέρες αρχειοθέτησης",
    description: "Βαριάς χρήσης, σχεδιασμένες για φακέλους και έγγραφα με μέγιστη προστασία.",
    icon: FileText
  },
  {
    title: "Custom διαστάσεις & χρώματα",
    description: "Προσαρμοσμένες λύσεις για τις ακριβείς ανάγκες του χώρου σας με επιλογή χρωμάτων.",
    icon: PaintBucket
  },
  {
    title: "Ανθεκτικά υλικά",
    description: "Ελληνική κατασκευή με υλικά υψηλής ποιότητας που εγγυώνται διάρκεια ζωής.",
    icon: Shield
  },
  {
    title: "Παράδοση & τοποθέτηση",
    description: "Ολοκληρωμένη υπηρεσία με επαγγελματική εγκατάσταση σε όλη την Ελλάδα.",
    icon: Truck
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="bg-metal-50">
      <div className="container-section">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-metal-900 mb-4">Τι Προσφέρουμε</h2>
          <p className="text-metal-600 text-lg">
            Παρέχουμε ολοκληρωμένες λύσεις αποθήκευσης υψηλής ποιότητας για επαγγελματικούς χώρους.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg border border-metal-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-metal-100 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-metal-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-metal-900">{feature.title}</h3>
              <p className="text-metal-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

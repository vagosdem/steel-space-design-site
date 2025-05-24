
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
    <section id="features" className="bg-metal-800 text-white relative py-32">
      {/* Transition gradient at the top */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-white to-metal-800 w-full"></div>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-8">Τι Προσφέρουμε</h2>
          <p className="text-metal-300 text-xl lg:text-2xl leading-relaxed">
            Παρέχουμε ολοκληρωμένες λύσεις αποθήκευσης υψηλής ποιότητας για επαγγελματικούς χώρους.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-metal-700 p-8 rounded-lg border border-metal-600 shadow-sm hover:shadow-md transition-shadow min-h-[200px] flex flex-col">
              <div className="bg-metal-800 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white leading-tight">{feature.title}</h3>
              <p className="text-metal-300 leading-relaxed flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Transition gradient at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-metal-800 w-full"></div>
    </section>
  );
}

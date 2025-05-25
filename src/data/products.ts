
export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  type: string;
  color: string;
  material: string;
  features: string[];
}

export const products: Product[] = [
  {
    id: "red-black-storage-cabinet",
    title: "Κόκκινη-Μαύρη Μεταλλική Ντουλάπα Διπλής Πόρτας",
    description: "Στιβαρή μεταλλική ντουλάπα με δύο πόρτες σε κόκκινο και μαύρο χρώμα, ιδανική για βιομηχανικούς χώρους και εργαστήρια που χρειάζονται ανθεκτικές λύσεις αποθήκευσης.",
    image: "/lovable-uploads/IMG_054822.webp",
    category: "cabinets",
    type: "industrial",
    color: "red",
    material: "metal",
    features: ["double-doors", "heavy-duty", "industrial-grade"]
  },
  {
    id: "white-glass-cabinet",
    title: "Λευκή Μεταλλική Ντουλάπα με Τζάμια",
    description: "Επαγγελματική λευκή μεταλλική ντουλάπα με γυάλινες πόρτες, ιδανική για αρχειοθέτηση σε γραφεία και χώρους υγείας.",
    image: "/lovable-uploads/IMG_10252.webp",
    category: "cabinets",
    type: "office",
    color: "white",
    material: "metal",
    features: ["glass-doors", "adjustable-shelves"]
  },
  {
    id: "modern-locker-system",
    title: "Μοντέρνο Σύστημα Ντουλαπιών",
    description: "Σύγχρονο σύστημα ντουλαπιών με καθαρές γραμμές και ανθεκτική κατασκευή για επαγγελματικούς χώρους.",
    image: "/lovable-uploads/IMG_13722.webp",
    category: "lockers",
    type: "office",
    color: "blue",
    material: "metal",
    features: ["modern-design", "key-lock", "ventilation"]
  },
  {
    id: "multi-door-locker-system",
    title: "Σύστημα Πολλαπλών Ντουλαπιών",
    description: "Ανθεκτικά μεταλλικά ντουλάπια με πολλαπλές πόρτες και θέσεις, σχεδιασμένα για αποδυτήρια και γυμναστήρια.",
    image: "/lovable-uploads/IMG_13742.webp",
    category: "lockers",
    type: "gym",
    color: "multi",
    material: "metal",
    features: ["multiple-units", "ventilation", "key-lock"]
  },
  {
    id: "colorful-school-lockers",
    title: "Πολύχρωμα Σχολικά Ντουλάπια",
    description: "Φωτεινά και χαρούμενα ντουλάπια με διάφορα χρώματα, ιδανικά για σχολικές εγκαταστάσεις και παιδικούς σταθμούς.",
    image: "/lovable-uploads/IMG_21202.webp",
    category: "lockers",
    type: "school",
    color: "multi",
    material: "metal",
    features: ["colorful", "child-friendly", "numbered"]
  },
  {
    id: "industrial-storage-solution",
    title: "Βιομηχανική Λύση Αποθήκευσης",
    description: "Ανθεκτικά μεταλλικά ντουλάπια για βιομηχανικούς χώρους, με έμφαση στην αντοχή και τη λειτουργικότητα.",
    image: "/lovable-uploads/IMG_23802.webp",
    category: "storage",
    type: "industrial",
    color: "gray",
    material: "metal",
    features: ["heavy-duty", "industrial-grade", "secure"]
  },
  {
    id: "professional-office-lockers",
    title: "Επαγγελματικά Ντουλάπια Γραφείου",
    description: "Κομψά μεταλλικά ντουλάπια σχεδιασμένα ειδικά για σύγχρονους επαγγελματικούς χώρους και γραφεία.",
    image: "/lovable-uploads/IMG_97682.webp",
    category: "lockers",
    type: "office",
    color: "white",
    material: "metal",
    features: ["professional-design", "clean-lines", "secure"]
  },
  {
    id: "compact-storage-units",
    title: "Συμπαγή Αποθηκευτικά Συστήματα",
    description: "Μεταλλικά ντουλάπια με συμπαγή σχεδιασμό, ιδανικά για χώρους με περιορισμένο χώρο αλλά υψηλές απαιτήσεις αποθήκευσης.",
    image: "/lovable-uploads/IMG_99002.webp",
    category: "storage",
    type: "compact",
    color: "blue",
    material: "metal",
    features: ["space-saving", "efficient", "modular"]
  }
];

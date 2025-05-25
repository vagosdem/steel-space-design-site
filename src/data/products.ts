
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
    title: "Μοντέρνα lockers",
    description: "Σύγχρονα μεταλλικά ντουλάπια με μοντέρνο σχεδιασμό, ιδανικά για επαγγελματικούς χώρους, γραφεία και σύγχρονες εγκαταστάσεις.",
    image: "/lovable-uploads/IMG_10252.webp",
    category: "lockers",
    type: "modern",
    color: "white",
    material: "metal",
    features: ["modern-design", "professional", "sleek"]
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
  },
  {
    id: "six-door-locker-white",
    title: "Λευκά Ντουλάπια 6 Θέσεων",
    description: "Κλασικά λευκά μεταλλικά ντουλάπια με 6 θέσεις, ιδανικά για αποδυτήρια, γυμναστήρια και σχολικούς χώρους.",
    image: "/lovable-uploads/ea0663a1-83d9-4b6e-bd66-c2a1b01af9da.png",
    category: "lockers",
    type: "gym",
    color: "white",
    material: "metal",
    features: ["six-compartments", "ventilation", "key-lock", "durable"]
  },
  {
    id: "glass-door-lockers-12",
    title: "Ντουλάπια με Γυάλινες Πόρτες 12 Θέσεων",
    description: "Μοντέρνα μεταλλικά ντουλάπια με γυάλινες πόρτες και 12 θέσεις, ιδανικά για επαγγελματικούς χώρους που χρειάζονται οπτική επαφή με το περιεχόμενο.",
    image: "/lovable-uploads/d45ac80e-568d-4711-afdf-441b647c88bd.png",
    category: "lockers",
    type: "office",
    color: "white",
    material: "metal",
    features: ["glass-doors", "twelve-compartments", "professional", "visibility"]
  },
  {
    id: "dark-gray-storage-cabinet",
    title: "Σκούρα Γκρι Ντουλάπα Αποθήκευσης",
    description: "Στιβαρή σκούρα γκρι μεταλλική ντουλάπα με διπλές πόρτες, ιδανική για βιομηχανικούς χώρους και αποθήκες που χρειάζονται ανθεκτικές λύσεις.",
    image: "/lovable-uploads/82f9ab23-6721-4a6e-90e5-13cf0745af0c.png",
    category: "cabinets",
    type: "industrial",
    color: "gray",
    material: "metal",
    features: ["double-doors", "heavy-duty", "industrial-grade", "ventilation"]
  },
  {
    id: "blue-multi-locker-20",
    title: "Μπλε Ντουλάπια Πολλαπλών Θέσεων",
    description: "Εντυπωσιακό σύστημα μπλε ντουλαπιών με 20 θέσεις, ιδανικό για μεγάλους χώρους όπως σχολεία, γυμναστήρια και επιχειρήσεις.",
    image: "/lovable-uploads/9da58295-0ef7-49ee-8767-9276354ce1f9.png",
    category: "lockers",
    type: "school",
    color: "blue",
    material: "metal",
    features: ["twenty-compartments", "key-lock", "ventilation", "organized-layout"]
  },
  {
    id: "red-three-door-lockers",
    title: "Κόκκινα Ντουλάπια 3 Θέσεων",
    description: "Έντονα κόκκινα μεταλλικά ντουλάπια με 3 θέσεις, ιδανικά για σχολικούς χώρους και περιβάλλοντα που χρειάζονται χρωματική διάκριση.",
    image: "/lovable-uploads/350c0a83-cfbb-4e35-9eb5-c4f382b5079f.png",
    category: "lockers",
    type: "school",
    color: "red",
    material: "metal",
    features: ["three-compartments", "colorful", "ventilation", "key-lock"]
  },
  {
    id: "blue-six-door-lockers",
    title: "Μπλε Ντουλάπια 6 Θέσεων",
    description: "Κλασικά μπλε μεταλλικά ντουλάπια με 6 θέσεις, συνδυάζουν λειτουργικότητα με αισθητική για σχολικούς και επαγγελματικούς χώρους.",
    image: "/lovable-uploads/cc2e1a33-a881-42a9-beea-2fed8205e9d7.png",
    category: "lockers",
    type: "school",
    color: "blue",
    material: "metal",
    features: ["six-compartments", "ventilation", "key-lock", "durable"]
  },
  {
    id: "red-frame-gray-doors-12",
    title: "Ντουλάπια με Κόκκινο Πλαίσιο και Γκρι Πόρτες",
    description: "Μοντέρνα ντουλάπια με κόκκινο πλαίσιο και γκρι πόρτες, 12 θέσεις, ιδανικά για χώρους που θέλουν να συνδυάσουν χρώμα με λειτουργικότητα.",
    image: "/lovable-uploads/bf82f22b-aaf6-46df-8452-b4fdbe6eeb1b.png",
    category: "lockers",
    type: "modern",
    color: "red",
    material: "metal",
    features: ["twelve-compartments", "color-contrast", "modern-design", "key-lock"]
  },
  {
    id: "brown-frame-three-door",
    title: "Ντουλάπια με Καφέ Πλαίσιο 3 Θέσεων",
    description: "Κλασικά ντουλάπια με καφέ πλαίσιο και 3 μεγάλες θέσεις, ιδανικά για επαγγελματικούς χώρους που χρειάζονται μεγαλύτερο χώρο αποθήκευσης.",
    image: "/lovable-uploads/c78108ea-2c51-44a9-8492-463ccd9b671b.png",
    category: "lockers",
    type: "office",
    color: "brown",
    material: "metal",
    features: ["three-large-compartments", "professional", "key-lock", "spacious"]
  },
  {
    id: "white-double-door-cabinet",
    title: "Λευκή Ντουλάπα Διπλής Πόρτας",
    description: "Κομψή λευκή μεταλλική ντουλάπα με διπλές πόρτες, ιδανική για επαγγελματικούς χώρους που χρειάζονται καθαρή και μοντέρνα εμφάνιση.",
    image: "/lovable-uploads/8bc289f6-a72b-4eea-922f-901a43cf5974.png",
    category: "cabinets",
    type: "office",
    color: "white",
    material: "metal",
    features: ["double-doors", "professional", "clean-design", "spacious"]
  }
];

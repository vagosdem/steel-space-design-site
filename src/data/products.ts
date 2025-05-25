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
  dimensions?: {
    width: string;
    height: string;
    depth: string;
  };
  details?: string;
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
    features: ["double-doors", "heavy-duty", "industrial-grade"],
    dimensions: {
      width: "100 εκ.",
      height: "200 εκ.",
      depth: "50 εκ."
    },
    details: "Η κόκκινη-μαύρη μεταλλική ντουλάπα διπλής πόρτας είναι σχεδιασμένη ειδικά για βιομηχανικούς χώρους και εργαστήρια. Το χαρακτηριστικό κόκκινο και μαύρο χρώμα προσδίδει έντονη βιομηχανική αισθητική, ενώ η στιβαρή κατασκευή εγγυάται μακροχρόνια αντοχή σε απαιτητικά περιβάλλοντα εργασίας."
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
    features: ["heavy-duty", "industrial-grade", "secure"],
    dimensions: {
      width: "90 εκ.",
      height: "200 εκ.",
      depth: "50 εκ."
    },
    details: "Η βιομηχανική λύση αποθήκευσης είναι σχεδιασμένη για τις απαιτητικές συνθήκες των βιομηχανικών χώρων. Με την κατασκευή βαρέως τύπου και τα υλικά βιομηχανικής ποιότητας, προσφέρει μέγιστη αντοχή και αξιοπιστία σε δύσκολα περιβάλλοντα εργασίας."
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
  },
  {
    id: "yellow-green-lockers-multicolor",
    title: "Κίτρινα-Πράσινα Πολύχρωμα Ντουλάπια",
    description: "Φρέσκα πολύχρωμα ντουλάπια με κίτρινες και πράσινες αποχρώσεις, ιδανικά για σχολικούς χώρους και παιδικές εγκαταστάσεις.",
    image: "/lovable-uploads/3bb3c4b3-5ff5-4519-9c92-967be1786ba4.png",
    category: "lockers",
    type: "school",
    color: "multi",
    material: "metal",
    features: ["colorful", "child-friendly", "bright-colors", "numbered"]
  },
  {
    id: "red-blue-mixed-lockers",
    title: "Κόκκινα-Μπλε Μικτά Ντουλάπια",
    description: "Δυναμικός συνδυασμός κόκκινων και μπλε ντουλαπιών που προσφέρει έντονη χρωματική παρουσία για σύγχρονους χώρους.",
    image: "/lovable-uploads/3d7fe985-2f29-443b-8ab2-3d6f769ff6df.png",
    category: "lockers",
    type: "modern",
    color: "multi",
    material: "metal",
    features: ["color-contrast", "modern-design", "ventilation", "key-lock"]
  },
  {
    id: "orange-white-contrast-lockers",
    title: "Πορτοκαλί-Λευκά Ντουλάπια Αντίθεσης",
    description: "Εντυπωσιακά ντουλάπια με πορτοκαλί και λευκές αποχρώσεις που δημιουργούν δυναμική αντίθεση για μοντέρνους χώρους.",
    image: "/lovable-uploads/64d9716d-261a-44b6-b469-c4dff49cea91.png",
    category: "lockers",
    type: "modern",
    color: "orange",
    material: "metal",
    features: ["color-contrast", "modern-design", "professional", "bright"]
  },
  {
    id: "blue-orange-vibrant-lockers",
    title: "Μπλε-Πορτοκαλί Ζωντανά Ντουλάπια",
    description: "Ζωντανός συνδυασμός μπλε και πορτοκαλί χρωμάτων που προσδίδει ενέργεια και μοντέρνα αισθητική στον χώρο.",
    image: "/lovable-uploads/7cc3aac9-9af0-4f81-b131-0622591eebc1.png",
    category: "lockers",
    type: "modern",
    color: "blue",
    material: "metal",
    features: ["vibrant-colors", "modern-design", "energy-boosting", "professional"]
  },
  {
    id: "green-yellow-nature-lockers",
    title: "Πράσινα-Κίτρινα Φυσικά Ντουλάπια",
    description: "Φυσικός συνδυασμός πράσινων και κίτρινων τόνων που δημιουργεί φρέσκια και ήρεμη ατμόσφαιρα στον χώρο.",
    image: "/lovable-uploads/82e9823c-05e0-4a3d-bb0e-1a8079b79bf8.png",
    category: "lockers",
    type: "school",
    color: "green",
    material: "metal",
    features: ["natural-colors", "calming", "eco-friendly-look", "child-friendly"]
  },
  {
    id: "rainbow-multicolor-lockers",
    title: "Ουράνιο Τόξο Πολύχρωμα Ντουλάπια",
    description: "Φαντασμαγορικά ντουλάπια με όλα τα χρώματα του ουράνιου τόξου, ιδανικά για παιδικούς χώρους και δημιουργικά περιβάλλοντα.",
    image: "/lovable-uploads/c142e30d-546a-43fe-bbe9-9367ce9e5bb1.png",
    category: "lockers",
    type: "school",
    color: "multi",
    material: "metal",
    features: ["rainbow-colors", "creative", "child-friendly", "inspiring"]
  },
  {
    id: "purple-pink-elegant-lockers",
    title: "Μωβ-Ροζ Κοмψά Ντουλάπια",
    description: "Κοмψός συνδυασμός μωβ και ροζ αποχρώσεων που προσφέρει μοντέρνη και θηλυκή αισθητική για ειδικούς χώρους.",
    image: "/lovable-uploads/c1ccbc5f-2ae1-4c2b-98b3-88300b22ae67.png",
    category: "lockers",
    type: "modern",
    color: "purple",
    material: "metal",
    features: ["elegant", "feminine-aesthetic", "modern-design", "sophisticated"]
  },
  {
    id: "warm-tone-mixed-lockers",
    title: "Ζεστόχρωμα Μικτά Ντουλάπια",
    description: "Ζεστός συνδυασμός χρωμάτων που δημιουργεί φιλική και προσκλητική ατμόσφαιρα για επαγγελματικούς και σχολικούς χώρους.",
    image: "/lovable-uploads/cb3b7ccd-56d5-4cb0-99ce-dfb7b75f6400.png",
    category: "lockers",
    type: "office",
    color: "multi",
    material: "metal",
    features: ["warm-colors", "welcoming", "professional", "comfortable"]
  },
  {
    id: "pastel-soft-tone-lockers",
    title: "Παστέλ Απαλόχρωμα Ντουλάπια",
    description: "Απαλά παστέλ χρώματα που δημιουργούν ηρεμη και χαλαρωτική ατμόσφαιρα, ιδανικά για χώρους ευεξίας και παιδικές εγκαταστάσεις.",
    image: "/lovable-uploads/de48c2ac-8f96-4f1d-987f-3fa9c559618f.png",
    category: "lockers",
    type: "school",
    color: "pastel",
    material: "metal",
    features: ["soft-colors", "calming", "wellness", "child-friendly"]
  }
];

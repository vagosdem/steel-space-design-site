
export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  category: string;
  type: string;
  material: string;
  color: string;
  features: string[];
  dimensions: {
    width: string;
    height: string;
    depth: string;
  };
  applications: string[];
  specifications: {
    steelGauge: string;
    lockingMechanism: string;
    shelfCapacity?: string;
    drawerCapacity?: string;
  };
}

export const products: Product[] = [
  {
    id: "metal-locker",
    title: "Μεταλλικά Ντουλάπια Γραφείου",
    description: "Ανθεκτικά μεταλλικά ντουλάπια γραφείου για την ασφαλή αποθήκευση προσωπικών αντικειμένων και εγγράφων. Ιδανικά για κάθε σύγχρονο επαγγελματικό χώρο.",
    image: "/lovable-uploads/metal-locker.webp",
    price: 129.99,
    category: "office",
    type: "office",
    material: "steel",
    color: "gray",
    features: ["Lockable", "Adjustable shelves", "Ventilation holes"],
    dimensions: {
      width: "38 cm",
      height: "180 cm",
      depth: "45 cm",
    },
    applications: ["Office", "School", "Gym"],
    specifications: {
      steelGauge: "0.7mm",
      lockingMechanism: "Cylinder lock",
      shelfCapacity: "25 kg per shelf",
    },
  },
  {
    id: "clothing-locker",
    title: "Μεταλλικά Ντουλάπια Αποδυτηρίων",
    description: "Εξοπλίστε τα αποδυτήριά σας με ανθεκτικά μεταλλικά ντουλάπια για την ασφαλή φύλαξη ρούχων και προσωπικών αντικειμένων.",
    image: "/lovable-uploads/clothing-locker.webp",
    price: 149.99,
    category: "school",
    type: "school",
    material: "steel",
    color: "blue",
    features: ["Lockable", "Name tag holder", "Ventilation holes"],
    dimensions: {
      width: "38 cm",
      height: "180 cm",
      depth: "45 cm",
    },
    applications: ["School", "Gym", "Factory"],
    specifications: {
      steelGauge: "0.8mm",
      lockingMechanism: "Padlock fitting",
      shelfCapacity: "20 kg per shelf",
    },
  },
  {
    id: "tool-cabinet",
    title: "Μεταλλικά Ντουλάπια Εργαλείων",
    description: "Οργανώστε τα εργαλεία σας με ανθεκτικά μεταλλικά ντουλάπια, ιδανικά για εργαστήρια και βιομηχανικούς χώρους.",
    image: "/lovable-uploads/tool-cabinet.webp",
    price: 199.99,
    category: "industrial",
    type: "industrial",
    material: "steel",
    color: "red",
    features: ["Lockable", "Adjustable shelves", "Pegboard back panel"],
    dimensions: {
      width: "90 cm",
      height: "180 cm",
      depth: "45 cm",
    },
    applications: ["Workshop", "Factory", "Garage"],
    specifications: {
      steelGauge: "1.0mm",
      lockingMechanism: "Cylinder lock",
      shelfCapacity: "30 kg per shelf",
    },
  },
  {
    id: "industrial-storage",
    title: "Μεταλλικές Συρταριέρες Αρχειοθέτησης & Αρχειοθήκες",
    description: "Βρείτε ανθεκτικές μεταλλικές συρταριέρες αρχειοθέτησης και αρχειοθήκες για γραφεία & επαγγελματικούς χώρους. Custom διαστάσεις, χρώματα, υψηλή ασφάλεια για τα αρχεία σας.",
    image: "/lovable-uploads/industrial-storage.webp",
    price: 249.99,
    category: "office",
    type: "office",
    material: "steel",
    color: "gray",
    features: ["Lockable", "Full extension drawers", "Label holders"],
    dimensions: {
      width: "46 cm",
      height: "132 cm",
      depth: "62 cm",
    },
    applications: ["Office", "Archive", "Library"],
    specifications: {
      steelGauge: "0.9mm",
      lockingMechanism: "Central locking system",
      drawerCapacity: "25 kg per drawer",
    },
  },
  {
    id: "mobile-pedestal",
    title: "Μεταλλική Συρταριέρα Γραφείου με Ρόδες",
    description: "Ευέλικτη μεταλλική συρταριέρα γραφείου με ρόδες για εύκολη μετακίνηση και οργάνωση του χώρου σας.",
    image: "/lovable-uploads/mobile-pedestal.webp",
    price: 99.99,
    category: "office",
    type: "office",
    material: "steel",
    color: "white",
    features: ["Lockable", "Pencil tray", "File drawer"],
    dimensions: {
      width: "30 cm",
      height: "60 cm",
      depth: "50 cm",
    },
    applications: ["Office", "Home office", "Study"],
    specifications: {
      steelGauge: "0.7mm",
      lockingMechanism: "Cylinder lock",
      drawerCapacity: "15 kg per drawer",
    },
  },
  {
    id: "wall-mounted-cabinet",
    title: "Επιτοίχια Μεταλλικά Ντουλάπια",
    description: "Εξοικονομήστε χώρο με επιτοίχια μεταλλικά ντουλάπια, ιδανικά για μικρούς χώρους και εργαστήρια.",
    image: "/lovable-uploads/wall-mounted-cabinet.webp",
    price: 179.99,
    category: "industrial",
    type: "industrial",
    material: "steel",
    color: "gray",
    features: ["Lockable", "Adjustable shelves", "Gas spring door"],
    dimensions: {
      width: "60 cm",
      height: "60 cm",
      depth: "30 cm",
    },
    applications: ["Workshop", "Garage", "Laboratory"],
    specifications: {
      steelGauge: "0.8mm",
      lockingMechanism: "Cylinder lock",
      shelfCapacity: "20 kg per shelf",
    },
  },
];

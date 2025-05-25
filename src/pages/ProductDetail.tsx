import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Ruler, Package, Square } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect } from "react";

// Product data with all products including new ones
const products = [{
  id: "red-black-storage-cabinet",
  title: "Κόκκινη-Μαύρη Μεταλλική Ντουλάπα Διπλής Πόρτας",
  description: "Στιβαρή μεταλλική ντουλάπα με δύο πόρτες σε κόκκινο και μαύρο χρώμα, ιδανική για βιομηχανικούς χώρους και εργαστήρια που χρειάζονται ανθεκτικές λύσεις αποθήκευσης.",
  features: ["Διπλές πόρτες για εύκολη πρόσβαση", "Κόκκινο και μαύρο χρώμα για βιομηχανική εμφάνιση", "Ανθεκτική μεταλλική κατασκευή βαρέως τύπου", "Ιδανική για εργαστήρια και βιομηχανικούς χώρους", "Ασφαλές σύστημα κλειδώματος", "Αντιχαρακτική και αντισκωριακή επιφάνεια"],
  dimensions: {
    width: "100 εκ.",
    height: "200 εκ.",
    depth: "50 εκ."
  },
  image: "/lovable-uploads/IMG_054822.webp",
  details: "Η κόκκινη-μαύρη μεταλλική ντουλάπα διπλής πόρτας είναι σχεδιασμένη ειδικά για βιομηχανικούς χώρους και εργαστήρια. Το χαρακτηριστικό κόκκινο και μαύρο χρώμα προσδίδει έντονη βιομηχανική αισθητική, ενώ η στιβαρή κατασκευή εγγυάται μακροχρόνια αντοχή σε απαιτητικά περιβάλλοντα εργασίας."
}, {
  id: "white-glass-cabinet",
  title: "Μοντέρνα lockers",
  description: "Σύγχρονα μεταλλικά ντουλάπια με μοντέρνο σχεδιασμό, ιδανικά για επαγγελματικούς χώρους, γραφεία και σύγχρονες εγκαταστάσεις.",
  features: ["Μοντέρνος και καθαρός σχεδιασμός", "Ανθεκτική μεταλλική κατασκευή", "Εργονομικό σύστημα κλειδώματος", "Αντισκωριακή επιφάνεια", "Ιδανικά για σύγχρονους χώρους"],
  dimensions: {
    width: "95 εκ.",
    height: "195 εκ.",
    depth: "45 εκ."
  },
  image: "/lovable-uploads/IMG_10252.webp",
  details: "Τα μοντέρνα lockers συνδυάζουν την αισθητική με τη λειτουργικότητα. Με καθαρές γραμμές και σύγχρονο σχεδιασμό, είναι ιδανικά για επαγγελματικούς χώρους, γραφεία και σύγχρονες εγκαταστάσεις που θέλουν να προβάλουν μια μοντέρνα εικόνα. Η υψηλής ποιότητας μεταλλική κατασκευή εγγυάται αντοχή και μακροχρόνια χρήση."
}, {
  id: "professional-storage-cabinet",
  title: "Επαγγελματικό Ντουλάπι Αποθήκευσης",
  description: "Μεταλλικό ντουλάπι με πολλαπλές θέσεις και εργονομικό σχεδιασμό, ιδανικό για οργανωμένους επαγγελματικούς χώρους.",
  features: ["Πολλαπλές θέσεις αποθήκευσης", "Εργονομικός σχεδιασμός", "Ανθεκτική μεταλλική κατασκευή", "Προσαρμοσμένες λύσεις οργάνωσης", "Εύκολη συντήρηση και καθαρισμός"],
  dimensions: {
    width: "85 εκ.",
    height: "180 εκ.",
    depth: "42 εκ."
  },
  image: "/lovable-uploads/IMG_23802.webp",
  details: "Το επαγγελματικό ντουλάπι αποθήκευσης προσφέρει εξαιρετική οργάνωση και λειτουργικότητα για σύγχρονους επαγγελματικούς χώρους. Με τον εργονομικό του σχεδιασμό και τις πολλαπλές θέσεις αποθήκευσης, είναι η ιδανική λύση για γραφεία που χρειάζονται αποτελεσματική διαχείριση χώρου."
}, {
  id: "modern-locker-system",
  title: "Μοντέρνο Σύστημα Ντουλαπιών",
  description: "Σύγχρονο σύστημα ντουλαπιών με καθαρές γραμμές και ανθεκτική κατασκευή για επαγγελματικούς χώρους.",
  features: ["Μοντέρνος σχεδιασμός με καθαρές γραμμές", "Ανθεκτική μεταλλική κατασκευή", "Κλειδαριά ασφαλείας", "Σύστημα εξαερισμού", "Εύκολη εγκατάσταση"],
  dimensions: {
    width: "80 εκ.",
    height: "185 εκ.",
    depth: "40 εκ."
  },
  image: "/lovable-uploads/IMG_13722.webp",
  details: "Το μοντέρνο σύστημα ντουλαπιών συνδυάζει την αισθητική με τη λειτουργικότητα. Οι καθαρές γραμμές και η σύγχρονη εμφάνιση το καθιστούν ιδανικό για χώρους που θέλουν να προβάλουν μια επαγγελματική και μοντέρνα εικόνα."
}, {
  id: "multi-door-locker-system",
  title: "Σύστημα Πολλαπλών Ντουλαπιών",
  description: "Ανθεκτικά μεταλλικά ντουλάπια με πολλαπλές πόρτες και θέσεις, σχεδιασμένα για αποδυτήρια και γυμναστήρια.",
  features: ["Πολλαπλές θέσεις αποθήκευσης", "Ατομικές κλειδαριές ασφαλείας", "Μεταλλική κατασκευή υψηλής αντοχής", "Αντισκωριακή επεξεργασία", "Εύκολη εγκατάσταση και προσαρμογή"],
  dimensions: {
    width: "120 εκ.",
    height: "180 εκ.",
    depth: "40 εκ."
  },
  image: "/lovable-uploads/IMG_13742.webp",
  details: "Το σύστημα πολλαπλών ντουλαπιών είναι ιδανικό για χώρους με υψηλή κινητικότητα, όπως γυμναστήρια, σχολεία και επαγγελματικοί χώροι. Προσφέρει οργανωμένη αποθήκευση για πολλούς χρήστες ταυτόχρονα, με έμφαση στην ασφάλεια και τη λειτουργικότητα."
}, {
  id: "colorful-school-lockers",
  title: "Πολύχρωμα Σχολικά Ντουλάπια",
  description: "Φωτεινά και χαρούμενα ντουλάπια με διάφορα χρώματα, ιδανικά για σχολικές εγκαταστάσεις και παιδικούς σταθμούς.",
  features: ["Πολύχρωμος σχεδιασμός", "Φιλικά στα παιδιά υλικά", "Στρογγυλεμένες γωνίες για ασφάλεια", "Αριθμημένες θέσεις", "Εύκολο στο καθάρισμα"],
  dimensions: {
    width: "100 εκ.",
    height: "160 εκ.",
    depth: "35 εκ."
  },
  image: "/lovable-uploads/IMG_21202.webp",
  details: "Τα πολύχρωμα σχολικά ντουλάπια είναι ειδικά σχεδιασμένα για εκπαιδευτικούς χώρους και παιδικές εγκαταστάσεις. Τα φωτεινά χρώματα προάγουν τη θετική διάθεση και διευκολύνουν τα παιδιά να αναγνωρίζουν τον προσωπικό τους χώρο αποθήκευσης."
}, {
  id: "industrial-storage-solution",
  title: "Βιομηχανική Λύση Αποθήκευσης",
  description: "Ανθεκτικά μεταλλικά ντουλάπια για βιομηχανικούς χώρους, με έμφαση στην αντοχή και τη λειτουργικότητα.",
  features: ["Κατασκευή βαρέως τύπου", "Βιομηχανικής ποιότητας υλικά", "Ασφαλή συστήματα κλειδώματος", "Αντοχή σε δύσκολες συνθήκες", "Μεγάλη διάρκεια ζωής"],
  dimensions: {
    width: "90 εκ.",
    height: "200 εκ.",
    depth: "50 εκ."
  },
  image: "/lovable-uploads/IMG_99002.webp",
  details: "Η βιομηχανική λύση αποθήκευσης είναι σχεδιασμένη για τις απαιτητικές συνθήκες των βιομηχανικών χώρων. Με την κατασκευή βαρέως τύπου και τα υλικά βιομηχανικής ποιότητας, προσφέρει μέγιστη αντοχή και αξιοπιστία σε δύσκολα περιβάλλοντα εργασίας."
}, {
  id: "professional-office-lockers",
  title: "Επαγγελματικά Ντουλάπια Γραφείου",
  description: "Κομψά μεταλλικά ντουλάπια σχεδιασμένα ειδικά για σύγχρονους επαγγελματικούς χώρους και γραφεία.",
  features: ["Επαγγελματικός σχεδιασμός", "Καθαρές γραμμές", "Ασφαλή συστήματα", "Εργονομική λειτουργία", "Σύγχρονη αισθητική"],
  dimensions: {
    width: "75 εκ.",
    height: "175 εκ.",
    depth: "38 εκ."
  },
  image: "/lovable-uploads/IMG_97682.webp",
  details: "Τα επαγγελματικά ντουλάπια γραφείου είναι σχεδιασμένα για να ταιριάζουν τέλεια σε σύγχρονους επαγγελματικούς χώρους. Ο κομψός σχεδιασμός και οι καθαρές γραμμές τους τα καθιστούν ιδανικά για γραφεία που θέλουν να διατηρήσουν μια επαγγελματική και οργανωμένη εμφάνιση."
}, {
  id: "compact-storage-units",
  title: "Συμπαγή Αποθηκευτικά Συστήματα",
  description: "Μεταλλικά ντουλάπια με συμπαγή σχεδιασμό, ιδανικά για χώρους με περιορισμένο χώρο αλλά υψηλές απαιτήσεις αποθήκευσης.",
  features: ["Εξοικονόμηση χώρου", "Αποδοτικός σχεδιασμός", "Modular σύστημα", "Μέγιστη αξιοποίηση χώρου", "Ευέλικτη διαμόρφωση"],
  dimensions: {
    width: "70 εκ.",
    height: "170 εκ.",
    depth: "35 εκ."
  },
  image: "/lovable-uploads/IMG_97682.webp",
  details: "Τα συμπαγή Αποθηκευτικά συστήματα είναι η ιδανική λύση για χώρους που χρειάζονται μέγιστη αξιοποίηση του διαθέσιμου χώρου. Ο συμπαγής σχεδιασμός και το modular σύστημα επιτρέπουν ευέλικτες διαμορφώσεις που ταιριάζουν σε κάθε χώρο."
}, {
  id: "six-door-locker-white",
  title: "Λευκά Ντουλάπια 6 Θέσεων",
  description: "Κλασικά λευκά μεταλλικά ντουλάπια με 6 θέσεις, ιδανικά για αποδυτήρια, γυμναστήρια και σχολικούς χώρους.",
  features: ["Έξι ξεχωριστές θέσεις αποθήκευσης", "Λευκή μεταλλική κατασκευή", "Ατομικές κλειδαριές ασφαλείας", "Σύστημα εξαερισμού σε κάθε θέση", "Ανθεκτική και αντισκωριακή επεξεργασία", "Ιδανικά για αποδυτήρια και γυμναστήρια"],
  dimensions: {
    width: "90 εκ.",
    height: "180 εκ.",
    depth: "40 εκ."
  },
  image: "/lovable-uploads/ea0663a1-83d9-4b6e-bd66-c2a1b01af9da.png",
  details: "Τα λευκά ντουλάπια 6 θέσεων προσφέρουν κλασική και καθαρή λύση αποθήκευσης για χώρους με υψηλή κινητικότητα. Η λευκή επιφάνεια είναι εύκολη στον καθαρισμό και διατηρεί την αισθητική του χώρου, ενώ οι έξι ξεχωριστές θέσεις εξασφαλίζουν προσωπικό χώρο για κάθε χρήστη."
}, {
  id: "glass-door-lockers-12",
  title: "Ντουλάπια με Γυάλινες Πόρτες 12 Θέσεων",
  description: "Μοντέρνα μεταλλικά ντουλάπια με γυάλινες πόρτες και 12 θέσεις, ιδανικά για επαγγελματικούς χώρους που χρειάζονται οπτική επαφή με το περιεχόμενο.",
  features: ["Γυάλινες πόρτες για οπτική επαφή", "Δώδεκα ξεχωριστές θέσεις", "Μοντέρνος επαγγελματικός σχεδιασμός", "Ασφαλή συστήματα κλειδώματος", "Ιδανικά για γραφεία και εργαστήρια", "Εύκολη παρακολούθηση περιεχομένου"],
  dimensions: {
    width: "120 εκ.",
    height: "200 εκ.",
    depth: "35 εκ."
  },
  image: "/lovable-uploads/d45ac80e-568d-4711-afdf-441b647c88bd.png",
  details: "Τα ντουλάπια με γυάλινες πόρτες συνδυάζουν τη λειτουργικότητα με τη διαφάνεια, επιτρέποντας στους χρήστες να βλέπουν το περιεχόμενο χωρίς να χρειάζεται να ανοίξουν την πόρτα. Ιδανικά για εργαστήρια, γραφεία και χώρους όπου η παρακολούθηση του περιεχομένου είναι σημαντική."
}, {
  id: "dark-gray-storage-cabinet",
  title: "Σκούρα Γκρι Ντουλάπα Αποθήκευσης",
  description: "Στιβαρή σκούρα γκρι μεταλλική ντουλάπα με διπλές πόρτες, ιδανική για βιομηχανικούς χώρους και αποθήκες που χρειάζονται ανθεκτικές λύσεις.",
  features: ["Σκούρα γκρι βιομηχανική εμφάνιση", "Διπλές πόρτες για μέγιστη πρόσβαση", "Κατασκευή βαρέως τύπου", "Σύστημα εξαερισμού", "Ανθεκτική σε δύσκολες συνθήκες", "Ιδανική για βιομηχανικούς χώρους"],
  dimensions: {
    width: "100 εκ.",
    height: "180 εκ.",
    depth: "45 εκ."
  },
  image: "/lovable-uploads/82f9ab23-6721-4a6e-90e5-13cf0745af0c.png",
  details: "Η σκούρα γκρι ντουλάπα αποθήκευσης είναι σχεδιασμένη για απαιτητικά βιομηχανικά περιβάλλοντα. Το σκούρο γκρι χρώμα κρύβει εύκολα τη βρωμιά και τις φθορές, ενώ η στιβαρή κατασκευή εγγυάται μακροχρόνια αντοχή σε δύσκολες συνθήκες εργασίας."
}, {
  id: "blue-multi-locker-20",
  title: "Μπλε Ντουλάπια Πολλαπλών Θέσεων",
  description: "Εντυπωσιακό σύστημα μπλε ντουλαπιών με 20 θέσεις, ιδανικό για μεγάλους χώρους όπως σχολεία, γυμναστήρια και επιχειρήσεις.",
  features: ["Είκοσι ξεχωριστές θέσεις αποθήκευσης", "Έντονο μπλε χρώμα", "Οργανωμένη διάταξη σε τέσσερις σειρές", "Ατομικές κλειδαριές για κάθε θέση", "Σύστημα εξαερισμού", "Ιδανικό για μεγάλους χώρους"],
  dimensions: {
    width: "150 εκ.",
    height: "160 εκ.",
    depth: "35 εκ."
  },
  image: "/lovable-uploads/9da58295-0ef7-49ee-8767-9276354ce1f9.png",
  details: "Το σύστημα 20 θέσεων είναι ιδανικό για χώρους με πολλούς χρήστες. Η οργανωμένη διάταξη σε τέσσερις σειρές εξασφαλίζει εύκολη πρόσβαση, ενώ το έντονο μπλε χρώμα προσδίδει ζωντάνια στον χώρο."
}, {
  id: "red-three-door-lockers",
  title: "Κόκκινα Ντουλάπια 3 Θέσεων",
  description: "Έντονα κόκκινα μεταλλικά ντουλάπια με 3 θέσεις, ιδανικά για σχολικούς χώρους και περιβάλλοντα που χρειάζονται χρωματική διάκριση.",
  features: ["Τρεις ξεχωριστές θέσεις", "Έντονο κόκκινο χρώμα", "Σύστημα εξαερισμού", "Ατομικές κλειδαριές ασφαλείας", "Ιδανικά για σχολικούς χώρους", "Χρωματική διάκριση για εύκολη αναγνώριση"],
  dimensions: {
    width: "90 εκ.",
    height: "180 εκ.",
    depth: "40 εκ."
  },
  image: "/lovable-uploads/350c0a83-cfbb-4e35-9eb5-c4f382b5079f.png",
  details: "Τα κόκκινα ντουλάπια 3 θέσεων είναι ιδανικά για περιβάλλοντα που χρειάζονται χρωματική διάκριση. Το έντονο κόκκινο χρώμα βοηθά στην εύκολη αναγνώριση και προσδίδει ενέργεια στον χώρο."
}, {
  id: "blue-six-door-lockers",
  title: "Μπλε Ντουλάπια 6 Θέσεων",
  description: "Κλασικά μπλε μεταλλικά ντουλάπια με 6 θέσεις, συνδυάζουν λειτουργικότητα με αισθητική για σχολικούς και επαγγελματικούς χώρους.",
  features: ["Έξι ξεχωριστές θέσεις", "Κλασικό μπλε χρώμα", "Σύστημα εξαερισμού", "Ανθεκτική μεταλλική κατασκευή", "Ατομικές κλειδαριές", "Κατάλληλα για σχολεία και γραφεία"],
  dimensions: {
    width: "90 εκ.",
    height: "180 εκ.",
    depth: "40 εκ."
  },
  image: "/lovable-uploads/cc2e1a33-a881-42a9-beea-2fed8205e9d7.png",
  details: "Τα μπλε ντουλάπια 6 θέσεων προσφέρουν τέλεια ισορροπία μεταξύ λειτουργικότητας και αισθητικής. Το κλασικό μπλε χρώμα είναι ουδέτερο και ταιριάζει σε κάθε περιβάλλον."
}, {
  id: "red-frame-gray-doors-12",
  title: "Ντουλάπια με Κόκκινο Πλαίσιο και Γκρι Πόρτες",
  description: "Μοντέρνα ντουλάπια με κόκκινο πλαίσιο και γκρι πόρτες, 12 θέσεις, ιδανικά για χώρους που θέλουν να συνδυάσουν χρώμα με λειτουργικότητα.",
  features: ["Δώδεκα ξεχωριστές θέσεις", "Κόκκινο πλαίσιο με γκρι πόρτες", "Μοντέρνος σχεδιασμός", "Χρωματικός συνδυασμός", "Ατομικές κλειδαριές", "Εύκολη συντήρηση"],
  dimensions: {
    width: "90 εκ.",
    height: "200 εκ.",
    depth: "35 εκ."
  },
  image: "/lovable-uploads/bf82f22b-aaf6-46df-8452-b4fdbe6eeb1b.png",
  details: "Ο συνδυασμός κόκκινου πλαισίου με γκρι πόρτες δημιουργεί μοντέρνη και ελκυστική εμφάνιση. Οι 12 θέσεις προσφέρουν άριστη αξιοποίηση του χώρου σε συμπαγή διάταξη."
}, {
  id: "brown-frame-three-door",
  title: "Ντουλάπια με Καφέ Πλαίσιο 3 Θέσεων",
  description: "Κλασικά ντουλάπια με καφέ πλαίσιο και 3 μεγάλες θέσεις, ιδανικά για επαγγελματικούς χώρους που χρειάζονται μεγαλύτερο χώρο αποθήκευσης.",
  features: ["Τρεις μεγάλες θέσεις", "Καφέ πλαίσιο για κλασική εμφάνιση", "Επαγγελματικός σχεδιασμός", "Ασφαλές σύστημα κλειδώματος", "Ευρύχωρες θέσεις αποθήκευσης", "Ιδανικό για γραφεία"],
  dimensions: {
    width: "90 εκ.",
    height: "200 εκ.",
    depth: "45 εκ."
  },
  image: "/lovable-uploads/c78108ea-2c51-44a9-8492-463ccd9b671b.png",
  details: "Τα ντουλάπια με καφέ πλαίσιο προσφέρουν κλασική και επαγγελματική εμφάνιση. Οι τρεις μεγάλες θέσεις είναι ιδανικές για αποθήκευση μεγαλύτερων αντικειμένων όπως παλτά, τσάντες και προσωπικά είδη."
}, {
  id: "white-double-door-cabinet",
  title: "Λευκή Ντουλάπα Διπλής Πόρτας",
  description: "Κομψή λευκή μεταλλική ντουλάπα με διπλές πόρτες, ιδανική για επαγγελματικούς χώρους που χρειάζονται καθαρή και μοντέρνα εμφάνιση.",
  features: ["Διπλές πόρτες για εύκολη πρόσβαση", "Λευκή καθαρή εμφάνιση", "Επαγγελματικός σχεδιασμός", "Ευρύχωρο εσωτερικό", "Ασφαλές σύστημα κλειδώματος", "Ιδανική για σύγχρονα γραφεία"],
  dimensions: {
    width: "80 εκ.",
    height: "160 εκ.",
    depth: "40 εκ."
  },
  image: "/lovable-uploads/8bc289f6-a72b-4eea-922f-901a43cf5974.png",
  details: "Η λευκή ντουλάπα διπλής πόρτας προσφέρει κομψή και καθαρή λύση αποθήκευσης για σύγχρονους επαγγελματικούς χώρους. Οι διπλές πόρτες παρέχουν άνετη πρόσβαση στο ευρύχωρο εσωτερικό."
}];

export default function ProductDetail() {
  const {
    productId
  } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);

  // Scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [productId]);
  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold mb-4">Το προϊόν δεν βρέθηκε</h1>
          <Button onClick={() => navigate(-1)}>Επιστροφή</Button>
        </div>
      </div>;
  }

  // Get similar products, excluding the current product and limiting to 3
  // Also make sure we don't show the same product twice
  const similarProducts = products.filter(p => p.id !== productId) // Exclude current product
  .slice(0, 3); // Limit to 3 products

  return <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="container-section">
        <div className="mb-6">
          <Button variant="outline" onClick={() => navigate(-1)} className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Πίσω
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5
        }} className="flex items-center justify-center">
            <div className="transition-all duration-300">
              <img src={product.image} alt={product.title} className="w-full h-auto object-contain max-h-[500px]" />
            </div>
          </motion.div>
          
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }} className="space-y-6">
            <div>
              <h1 className="text-3xl font-semibold text-black">{product.title}</h1>
              <p className="text-lg text-metal-600 mt-2">{product.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-6 my-4">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Square size={18} className="text-blue-600" />
                </div>
                <span className="text-sm text-neutral-950">Πλάτος: {product.dimensions?.width || "N/A"}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Ruler size={18} className="text-blue-600" />
                </div>
                <span className="text-sm text-zinc-950">Ύψος: {product.dimensions?.height || "N/A"}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Package size={18} className="text-blue-600" />
                </div>
                <span className="text-sm text-zinc-950">Βάθος: {product.dimensions?.depth || "N/A"}</span>
              </div>
            </div>
            
            <div>
              <h2 className="text-xl font-medium text-black mb-2">Χαρακτηριστικά</h2>
              <ul className="list-disc list-inside space-y-1 text-metal-600">
                {product.features.map((feature, index) => <li key={index}>{feature}</li>)}
              </ul>
            </div>
            
            <div>
              <h2 className="text-xl font-medium text-black mb-2">Περισσότερες Πληροφορίες</h2>
              <p className="text-metal-600">{product.details}</p>
            </div>
            
            <div className="pt-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-xl w-full mb-3" onClick={() => navigate("/#contact")}>
                Ζητήστε Προσφορά
              </Button>
            </div>
          </motion.div>
        </div>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.5,
        delay: 0.6
      }} className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-6">Παρόμοια Προϊόντα</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similarProducts.map(relatedProduct => <div key={relatedProduct.id} className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300">
                <div className="flex items-center justify-center h-64 p-2">
                  <img src={relatedProduct.image} alt={relatedProduct.title} className="max-w-full max-h-full object-contain" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-black mb-2">{relatedProduct.title}</h3>
                  <p className="text-metal-600 line-clamp-2">{relatedProduct.description}</p>
                  <Button variant="outline" className="mt-4 border-blue-300 text-blue-600 hover:bg-blue-50 rounded-xl w-full" onClick={() => {
                navigate(`/product/${relatedProduct.id}`);
                window.scrollTo(0, 0);
              }}>
                    Περισσότερες Πληροφορίες
                  </Button>
                </div>
              </div>)}
          </div>
        </motion.div>
      </div>
      
      <Footer />
    </div>;
}

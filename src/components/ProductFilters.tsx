
import { SlidersHorizontal } from "lucide-react";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { motion } from "framer-motion";

interface ProductFiltersProps {
  categoryFilter: string;
  setCategoryFilter: (value: string) => void;
  typeFilter: string;
  setTypeFilter: (value: string) => void;
  colorFilter: string;
  setColorFilter: (value: string) => void;
  featureFilter: string;
  setFeatureFilter: (value: string) => void;
  sortOption: string;
  setSortOption: (value: string) => void;
}

export default function ProductFilters({
  categoryFilter,
  setCategoryFilter,
  typeFilter,
  setTypeFilter,
  colorFilter,
  setColorFilter,
  featureFilter,
  setFeatureFilter,
  sortOption,
  setSortOption
}: ProductFiltersProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="flex flex-wrap gap-4 items-center mb-8"
    >
      <div className="flex flex-wrap gap-4 items-center">
        <SlidersHorizontal className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium">Φίλτρα:</span>
      </div>
      
      <div className="flex flex-wrap gap-4">
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-[180px] rounded-xl">
            <SelectValue placeholder="Όλες οι Κατηγορίες" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Όλες οι Κατηγορίες</SelectItem>
            <SelectItem value="ντουλάπα">Ντουλάπα</SelectItem>
            <SelectItem value="locker">Locker/Ντουλάπια</SelectItem>
            <SelectItem value="αρχειοθήκη">Αρχειοθήκη</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-[180px] rounded-xl">
            <SelectValue placeholder="Όλοι οι Τύποι" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Όλοι οι Τύποι</SelectItem>
            <SelectItem value="office">Γραφείου</SelectItem>
            <SelectItem value="gym">Αθλητικών Χώρων</SelectItem>
            <SelectItem value="school">Σχολείων</SelectItem>
            <SelectItem value="industrial">Βιομηχανικών Χώρων</SelectItem>
            <SelectItem value="compact">Συμπαγή Συστήματα</SelectItem>
            <SelectItem value="universal">Πολυχρηστικά</SelectItem>
            <SelectItem value="modern">Μοντέρνα</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={colorFilter} onValueChange={setColorFilter}>
          <SelectTrigger className="w-[180px] rounded-xl">
            <SelectValue placeholder="Όλα τα Χρώματα" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Όλα τα Χρώματα</SelectItem>
            <SelectItem value="white">Λευκό</SelectItem>
            <SelectItem value="gray">Γκρι</SelectItem>
            <SelectItem value="blue">Μπλε</SelectItem>
            <SelectItem value="red">Κόκκινο</SelectItem>
            <SelectItem value="brown">Καφέ</SelectItem>
            <SelectItem value="orange">Πορτοκαλί</SelectItem>
            <SelectItem value="multi">Πολύχρωμο</SelectItem>
            <SelectItem value="pastel">Παστέλ</SelectItem>
            <SelectItem value="customizable">Προσαρμόσιμο</SelectItem>
          </SelectContent>
        </Select>
        
        <Select value={featureFilter} onValueChange={setFeatureFilter}>
          <SelectTrigger className="w-[220px] rounded-xl">
            <SelectValue placeholder="Όλα τα Χαρακτηριστικά" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Όλα τα Χαρακτηριστικά</SelectItem>
            <SelectItem value="glass-doors">Γυάλινες Πόρτες</SelectItem>
            <SelectItem value="adjustable-shelves">Ρυθμιζόμενα Ράφια</SelectItem>
            <SelectItem value="key-lock">Κλειδαριά</SelectItem>
            <SelectItem value="ventilation">Εξαερισμός</SelectItem>
            <SelectItem value="multiple-units">Πολλαπλές Θέσεις</SelectItem>
            <SelectItem value="colorful">Έντονα Χρώματα</SelectItem>
            <SelectItem value="modern-design">Μοντέρνος Σχεδιασμός</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="ml-auto">
        <Select value={sortOption} onValueChange={setSortOption}>
          <SelectTrigger className="w-[180px] rounded-xl">
            <SelectValue placeholder="Ταξινόμηση κατά" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Προεπιλογή</SelectItem>
            <SelectItem value="title-asc">Τίτλος (Α → Ω)</SelectItem>
            <SelectItem value="title-desc">Τίτλος (Ω → Α)</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </motion.div>
  );
}

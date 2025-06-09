
import { SlidersHorizontal } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
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
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-sm p-6 mb-8"
    >
      <div className="flex items-center gap-2 mb-6">
        <SlidersHorizontal className="h-5 w-5 text-metal-600" />
        <h3 className="text-lg font-semibold">Φίλτρα Προϊόντων</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div>
          <label className="block text-sm font-medium text-metal-700 mb-2">
            Κατηγορία
          </label>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Όλες οι κατηγορίες" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Όλες οι κατηγορίες</SelectItem>
              <SelectItem value="ντουλάπα">Ντουλάπες</SelectItem>
              <SelectItem value="locker">Lockers</SelectItem>
              <SelectItem value="αρχειοθήκη">Αρχειοθήκες</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-metal-700 mb-2">
            Τύπος
          </label>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Όλοι οι τύποι" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Όλοι οι τύποι</SelectItem>
              <SelectItem value="μονή">Μονή πόρτα</SelectItem>
              <SelectItem value="διπλή">Διπλή πόρτα</SelectItem>
              <SelectItem value="πολλαπλή">Πολλαπλές πόρτες</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-metal-700 mb-2">
            Χρώμα
          </label>
          <Select value={colorFilter} onValueChange={setColorFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Όλα τα χρώματα" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Όλα τα χρώματα</SelectItem>
              <SelectItem value="γκρι">Γκρι</SelectItem>
              <SelectItem value="μπλε">Μπλε</SelectItem>
              <SelectItem value="κόκκινο">Κόκκινο</SelectItem>
              <SelectItem value="λευκό">Λευκό</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-metal-700 mb-2">
            Χαρακτηριστικά
          </label>
          <Select value={featureFilter} onValueChange={setFeatureFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Όλα τα χαρακτηριστικά" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Όλα τα χαρακτηριστικά</SelectItem>
              <SelectItem value="κλειδαριά">Με κλειδαριά</SelectItem>
              <SelectItem value="αερισμός">Με αερισμό</SelectItem>
              <SelectItem value="ράφια">Με ράφια</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <label className="block text-sm font-medium text-metal-700 mb-2">
            Ταξινόμηση
          </label>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger>
              <SelectValue placeholder="Ταξινόμηση κατά" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="name">Όνομα</SelectItem>
              <SelectItem value="price">Τιμή</SelectItem>
              <SelectItem value="category">Κατηγορία</SelectItem>
              <SelectItem value="newest">Νεότερα πρώτα</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </motion.div>
  );
}

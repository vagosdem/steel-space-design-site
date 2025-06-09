
import { SlidersHorizontal, X } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
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
  const handleResetFilters = () => {
    setCategoryFilter("all");
    setTypeFilter("all");
    setColorFilter("all");
    setFeatureFilter("all");
    setSortOption("default");
  };

  const hasActiveFilters = categoryFilter !== "all" || typeFilter !== "all" || 
                          colorFilter !== "all" || featureFilter !== "all" || 
                          sortOption !== "default";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="bg-white rounded-lg shadow-sm border p-6 mb-8"
    >
      <div className="flex items-center gap-2 mb-4">
        <SlidersHorizontal className="h-5 w-5 text-metal-600" />
        <h2 className="text-lg font-semibold text-metal-800">Φίλτρα Προϊόντων</h2>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={handleResetFilters}
            className="ml-auto"
          >
            <X className="h-4 w-4 mr-1" />
            Καθαρισμός
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Category Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-metal-700">Κατηγορία</label>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Επιλέξτε κατηγορία" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Όλες οι κατηγορίες</SelectItem>
              <SelectItem value="ντουλάπα">Μεταλλικές Ντουλάπες</SelectItem>
              <SelectItem value="locker">Lockers</SelectItem>
              <SelectItem value="αρχειοθήκη">Αρχειοθήκες</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Type Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-metal-700">Τύπος</label>
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Επιλέξτε τύπο" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Όλοι οι τύποι</SelectItem>
              <SelectItem value="2-door">2 Πόρτες</SelectItem>
              <SelectItem value="3-door">3 Πόρτες</SelectItem>
              <SelectItem value="4-door">4 Πόρτες</SelectItem>
              <SelectItem value="6-door">6 Πόρτες</SelectItem>
              <SelectItem value="12-door">12 Πόρτες</SelectItem>
              <SelectItem value="20-door">20 Πόρτες</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Color Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-metal-700">Χρώμα</label>
          <Select value={colorFilter} onValueChange={setColorFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Επιλέξτε χρώμα" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Όλα τα χρώματα</SelectItem>
              <SelectItem value="γκρι">Γκρι</SelectItem>
              <SelectItem value="λευκό">Λευκό</SelectItem>
              <SelectItem value="μπλε">Μπλε</SelectItem>
              <SelectItem value="κόκκινο">Κόκκινο</SelectItem>
              <SelectItem value="πράσινο">Πράσινο</SelectItem>
              <SelectItem value="καφέ">Καφέ</SelectItem>
              <SelectItem value="πορτοκαλί">Πορτοκαλί</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Feature Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-metal-700">Χαρακτηριστικά</label>
          <Select value={featureFilter} onValueChange={setFeatureFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Επιλέξτε χαρακτηριστικό" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Όλα τα χαρακτηριστικά</SelectItem>
              <SelectItem value="γυάλινες πόρτες">Γυάλινες Πόρτες</SelectItem>
              <SelectItem value="κλειδαριά ασφαλείας">Κλειδαριά Ασφαλείας</SelectItem>
              <SelectItem value="ανθεκτική κατασκευή">Ανθεκτική Κατασκευή</SelectItem>
              <SelectItem value="προσαρμόσιμα ράφια">Προσαρμόσιμα Ράφια</SelectItem>
              <SelectItem value="αεροπορικό κλείδωμα">Αεροπορικό Κλείδωμα</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Sort Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-metal-700">Ταξινόμηση</label>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger>
              <SelectValue placeholder="Ταξινόμηση κατά" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Προεπιλογή</SelectItem>
              <SelectItem value="title-asc">Τίτλος (Α-Ω)</SelectItem>
              <SelectItem value="title-desc">Τίτλος (Ω-Α)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </motion.div>
  );
}

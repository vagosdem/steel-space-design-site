import { SlidersHorizontal } from "lucide-react";
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
  return <motion.div initial={{
    opacity: 0,
    y: 10
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.3
  }} className="mb-8 p-6 bg-white rounded-lg shadow-sm border">
      <div className="flex items-center gap-2 mb-4 px-0">
        <SlidersHorizontal className="h-5 w-5 text-metal-600" />
        <h3 className="text-lg font-semibold text-metal-900">Φίλτρα Προϊόντων</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* Category Filter */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-metal-700">Κατηγορία</label>
          <Select value={categoryFilter} onValueChange={setCategoryFilter}>
            <SelectTrigger>
              <SelectValue placeholder="Επιλέξτε κατηγορία" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Όλες οι κατηγορίες</SelectItem>
              <SelectItem value="ντουλάπα">Ντουλάπες</SelectItem>
              <SelectItem value="locker">Lockers</SelectItem>
              <SelectItem value="αρχειοθήκη">Αρχειοθήκες</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Type Filter */}
        

        {/* Color Filter */}
        

        {/* Feature Filter */}
        

        {/* Sort Option */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-metal-700">Ταξινόμηση</label>
          <Select value={sortOption} onValueChange={setSortOption}>
            <SelectTrigger>
              <SelectValue placeholder="Ταξινόμηση κατά" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Προεπιλογή</SelectItem>
              <SelectItem value="title-asc">Όνομα (Α-Ω)</SelectItem>
              <SelectItem value="title-desc">Όνομα (Ω-Α)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Reset Button */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-transparent">Reset</label>
          <Button variant="outline" onClick={handleResetFilters} className="w-full">
            Επαναφορά φίλτρων
          </Button>
        </div>
      </div>
    </motion.div>;
}
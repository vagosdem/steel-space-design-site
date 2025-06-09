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
  return;
}
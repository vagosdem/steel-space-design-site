
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface CategoriesDropdownProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function CategoriesDropdown({ 
  scrolled, 
  mobileMenuOpen, 
  setMobileMenuOpen 
}: CategoriesDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navigateToCategory = (path: string) => {
    navigate(path);
    setIsOpen(false);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 font-medium transition-colors ${
          scrolled 
            ? 'text-white hover:text-gray-200' 
            : 'text-black hover:text-gray-700'
        }`}
      >
        Κατηγορίες
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className={`absolute top-full left-0 mt-2 w-64 rounded-lg shadow-lg border z-50 ${
          scrolled ? 'bg-white' : 'bg-white'
        }`}>
          <div className="p-4 space-y-2">
            <button
              onClick={() => navigateToCategory('/metallic-cabinets')}
              className="block w-full text-left p-2 text-gray-800 hover:bg-gray-100 rounded transition-colors"
            >
              Μεταλλικές Ντουλάπες
            </button>
            <button
              onClick={() => navigateToCategory('/metallic-lockers')}
              className="block w-full text-left p-2 text-gray-800 hover:bg-gray-100 rounded transition-colors"
            >
              Μεταλλικά Lockers
            </button>
            <button
              onClick={() => navigateToCategory('/metallic-filing-cabinets')}
              className="block w-full text-left p-2 text-gray-800 hover:bg-gray-100 rounded transition-colors"
            >
              Συρταριέρες Αρχειοθέτησης
            </button>
            <button
              onClick={() => navigateToCategory('/metallic-drawers')}
              className="block w-full text-left p-2 text-gray-800 hover:bg-gray-100 rounded transition-colors"
            >
              Μεταλλικά Συρτάρια
            </button>
          </div>
        </div>
      )}

      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

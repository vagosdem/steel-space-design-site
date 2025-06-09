
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ProductsDropdown from "./ProductsDropdown";

interface DesktopNavigationProps {
  scrolled: boolean;
  navigateToSection: (sectionId: string) => void;
  handleQuoteRequest: (e: React.MouseEvent) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function DesktopNavigation({ 
  scrolled, 
  navigateToSection, 
  handleQuoteRequest,
  mobileMenuOpen,
  setMobileMenuOpen
}: DesktopNavigationProps) {
  const navigate = useNavigate();

  return (
    <div className="hidden md:flex items-center gap-8">
      <ProductsDropdown 
        scrolled={scrolled} 
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <button 
        onClick={() => navigateToSection("features")} 
        className={`font-medium transition-colors ${
          scrolled 
            ? 'text-white hover:text-gray-200' 
            : 'text-black hover:text-gray-700'
        }`}
      >
        Υπηρεσίες
      </button>
      
      <button 
        onClick={() => navigate("/blog")} 
        className={`font-medium transition-colors ${
          scrolled 
            ? 'text-white hover:text-gray-200' 
            : 'text-black hover:text-gray-700'
        }`}
      >
        Blog
      </button>
      
      <button 
        onClick={() => navigateToSection("contact")} 
        className={`font-medium transition-colors ${
          scrolled 
            ? 'text-white hover:text-gray-200' 
            : 'text-black hover:text-gray-700'
        }`}
      >
        Επικοινωνία
      </button>
      <Button 
        onClick={handleQuoteRequest} 
        className={`rounded-xl ${
          scrolled 
            ? 'bg-blue-600 hover:bg-blue-700 text-white' 
            : 'bg-metal-800 hover:bg-metal-900 text-white'
        }`}
      >
        Ζήτα Προσφορά
      </Button>
    </div>
  );
}

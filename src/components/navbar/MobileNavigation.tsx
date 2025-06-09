
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface MobileNavigationProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  scrolled: boolean;
  navigateToSection: (sectionId: string) => void;
  handleQuoteRequest: (e: React.MouseEvent) => void;
}

export default function MobileNavigation({ 
  mobileMenuOpen, 
  setMobileMenuOpen, 
  scrolled, 
  navigateToSection, 
  handleQuoteRequest 
}: MobileNavigationProps) {
  const navigate = useNavigate();

  const navigateToProducts = (category?: string) => {
    const path = category ? `/products?category=${category}` : '/products';
    navigate(path);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const navigateToBlog = () => {
    navigate('/blog');
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  if (!mobileMenuOpen) return null;

  return (
    <div className={`md:hidden mt-4 pb-4 space-y-4 ${
      scrolled ? 'bg-metal-900/95' : 'bg-white/95'
    } backdrop-blur-sm rounded-lg`}>
      <div className="space-y-2">
        <button 
          onClick={() => navigateToProducts()} 
          className={`block w-full text-left p-2 ${
            scrolled 
              ? 'text-gray-100 hover:text-white' 
              : 'text-gray-800 hover:text-gray-900'
          } font-medium`}
        >
          Όλα τα Προϊόντα
        </button>
        <button 
          onClick={() => navigateToProducts('ντουλάπα')} 
          className={`block w-full text-left p-2 pl-6 ${
            scrolled 
              ? 'text-gray-100 hover:text-white' 
              : 'text-gray-800 hover:text-gray-900'
          } text-sm`}
        >
          Ντουλάπες
        </button>
        <button 
          onClick={() => navigateToProducts('locker')} 
          className={`block w-full text-left p-2 pl-6 ${
            scrolled 
              ? 'text-gray-100 hover:text-white' 
              : 'text-gray-800 hover:text-gray-900'
          } text-sm`}
        >
          Lockers
        </button>
        <button 
          onClick={() => navigateToProducts('αρχειοθήκη')} 
          className={`block w-full text-left p-2 pl-6 ${
            scrolled 
              ? 'text-gray-100 hover:text-white' 
              : 'text-gray-800 hover:text-gray-900'
          } text-sm`}
        >
          Συρταριέρες Αρχειοθέτησης
        </button>
      </div>
      <button 
        onClick={() => navigateToSection("features")} 
        className={`block w-full text-left p-2 ${
          scrolled 
            ? 'text-gray-100 hover:text-white' 
            : 'text-gray-800 hover:text-gray-900'
        } font-medium`}
      >
        Υπηρεσίες
      </button>
      <button 
        onClick={navigateToBlog} 
        className={`block w-full text-left p-2 ${
          scrolled 
            ? 'text-gray-100 hover:text-white' 
            : 'text-gray-800 hover:text-gray-900'
        } font-medium`}
      >
        Blog
      </button>
      <button 
        onClick={() => navigateToSection("contact")} 
        className={`block w-full text-left p-2 ${
          scrolled 
            ? 'text-gray-100 hover:text-white' 
            : 'text-gray-800 hover:text-gray-900'
        } font-medium`}
      >
        Επικοινωνία
      </button>
      <Button 
        onClick={handleQuoteRequest} 
        className={`w-full rounded-xl ${
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

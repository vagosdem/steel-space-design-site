
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Archive } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { CartButton } from "./Cart";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Function to handle section navigation
  const navigateToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // If we're not on the home page, navigate there first
      navigate("/#" + sectionId);
    } else {
      // If we're already on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };
  
  // Function to navigate to products page
  const navigateToProducts = () => {
    navigate('/products');
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="bg-white border-b border-metal-100 sticky top-0 z-40 w-full">
      <nav className="container-section !py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Archive className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Stereon</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={navigateToProducts}
              className="text-metal-700 hover:text-metal-900 font-medium"
            >
              Προϊόντα
            </button>
            <button 
              onClick={() => navigateToSection("features")}
              className="text-metal-700 hover:text-metal-900 font-medium"
            >
              Χαρακτηριστικά
            </button>
            <button 
              onClick={() => navigateToSection("about")}
              className="text-metal-700 hover:text-metal-900 font-medium"
            >
              Σχετικά με εμάς
            </button>
            <button 
              onClick={() => navigateToSection("contact")}
              className="text-metal-700 hover:text-metal-900 font-medium"
            >
              Επικοινωνία
            </button>
            <CartButton />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <CartButton />
            <button
              className="text-metal-500 hover:text-metal-900 ml-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            <button 
              onClick={navigateToProducts}
              className="block w-full text-left text-metal-700 hover:text-metal-900 font-medium"
            >
              Προϊόντα
            </button>
            <button 
              onClick={() => navigateToSection("features")}
              className="block w-full text-left text-metal-700 hover:text-metal-900 font-medium"
            >
              Χαρακτηριστικά
            </button>
            <button 
              onClick={() => navigateToSection("about")}
              className="block w-full text-left text-metal-700 hover:text-metal-900 font-medium"
            >
              Σχετικά με εμάς
            </button>
            <button 
              onClick={() => navigateToSection("contact")}
              className="block w-full text-left text-metal-700 hover:text-metal-900 font-medium"
            >
              Επικοινωνία
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}

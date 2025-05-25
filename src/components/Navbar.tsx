
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Archive } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Handle scroll effect with show/hide functionality
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Show navbar when scrolling up, hide when scrolling down
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Function to handle section navigation
  const navigateToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth'
        });
      }
    } else {
      navigate(`/?scrollTo=${sectionId}`);
    }

    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }, 100);
      }
    }
  }, [location.hash]);

  const navigateToProducts = () => {
    navigate('/products');
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  const handleQuoteRequest = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToSection("contact");
  };

  return (
    <header 
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } ${
        scrolled 
          ? 'bg-metal-900/95 backdrop-blur-sm shadow-lg border-b border-metal-700' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container-section !py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Archive className={`h-6 w-6 ${scrolled ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`text-xl font-bold ${scrolled ? 'text-white' : 'text-metal-900'}`}>Stereom</span>
            </Link>
          </div>

          {/* Desktop navigation - improved contrast */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={navigateToProducts} 
              className={`font-medium transition-colors ${
                scrolled 
                  ? 'text-gray-100 hover:text-white' 
                  : 'text-gray-800 hover:text-gray-900'
              }`}
            >
              Προϊόντα
            </button>
            <button 
              onClick={() => navigateToSection("features")} 
              className={`font-medium transition-colors ${
                scrolled 
                  ? 'text-gray-100 hover:text-white' 
                  : 'text-gray-800 hover:text-gray-900'
              }`}
            >
              Υπηρεσίες
            </button>
            <button 
              onClick={() => navigateToSection("contact")} 
              className={`font-medium transition-colors ${
                scrolled 
                  ? 'text-gray-100 hover:text-white' 
                  : 'text-gray-800 hover:text-gray-900'
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

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              className={`ml-2 ${
                scrolled 
                  ? 'text-gray-100 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
              }`} 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile navigation - improved contrast */}
        {mobileMenuOpen && (
          <div className={`md:hidden mt-4 pb-4 space-y-4 ${
            scrolled ? 'bg-metal-900/95' : 'bg-white/95'
          } backdrop-blur-sm rounded-lg`}>
            <button 
              onClick={navigateToProducts} 
              className={`block w-full text-left p-2 ${
                scrolled 
                  ? 'text-gray-100 hover:text-white' 
                  : 'text-gray-800 hover:text-gray-900'
              } font-medium`}
            >
              Προϊόντα
            </button>
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
        )}
      </nav>
    </header>
  );
}

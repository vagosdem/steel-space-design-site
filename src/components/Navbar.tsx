
import { useState, useEffect } from "react";
import { Archive } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  // Function to handle section navigation
  const navigateToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      // If we're already on the home page, just scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If we're not on the home page, navigate to the home page with the section in the URL
      navigate(`/?scrollTo=${sectionId}`);
    }
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };
  
  // Effect to handle navigation when the component mounts or the URL hash changes
  useEffect(() => {
    if (location.hash) {
      // Get the element with the ID that matches the hash
      const id = location.hash.substring(1);
      const element = document.getElementById(id);
      
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);
  
  // Function to navigate to products page
  const navigateToProducts = () => {
    navigate('/products');
    
    // Close mobile menu if open
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  // Handle the quote request button click
  const handleQuoteRequest = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToSection("contact");
  };

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-200 ${scrolled ? 'bg-metal-900 shadow-md' : 'bg-transparent'}`}>
      <nav className="container-section !py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <Archive className={`h-6 w-6 ${scrolled ? 'text-blue-400' : 'text-blue-600'}`} />
              <span className={`text-xl font-bold ${scrolled ? 'text-white' : 'text-metal-900'}`}>Stereom</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={navigateToProducts}
              className={`font-medium transition-colors ${scrolled ? 'text-metal-300 hover:text-white' : 'text-metal-700 hover:text-metal-900'}`}
            >
              Προϊόντα
            </button>
            <button 
              onClick={() => navigateToSection("features")}
              className={`font-medium transition-colors ${scrolled ? 'text-metal-300 hover:text-white' : 'text-metal-700 hover:text-metal-900'}`}
            >
              Υπηρεσίες
            </button>
            <button 
              onClick={() => navigateToSection("projects")}
              className={`font-medium transition-colors ${scrolled ? 'text-metal-300 hover:text-white' : 'text-metal-700 hover:text-metal-900'}`}
            >
              Έργα
            </button>
            <button 
              onClick={() => navigateToSection("contact")}
              className={`font-medium transition-colors ${scrolled ? 'text-metal-300 hover:text-white' : 'text-metal-700 hover:text-metal-900'}`}
            >
              Επικοινωνία
            </button>
            <button 
              onClick={handleQuoteRequest}
              className={`rounded-xl ${scrolled ? 'bg-blue-600 hover:bg-blue-700' : 'bg-metal-800 hover:bg-metal-900 text-white'}`}
              >
              Ζήτα Προσφορά
            </button>
          </div>
        </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
 <button
              className={`ml-2 ${scrolled ? 'text-metal-300 hover:text-white' : 'text-metal-500 hover:text-metal-900'}`}
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
      </nav>

        {/* Mobile navigation */}
        {mobileMenuOpen && (
          <div className={`md:hidden absolute top-16 left-0 w-full mt-0 pb-4 space-y-4 ${scrolled ? 'bg-metal-900' : 'bg-white'} shadow-md`}>
            <button 
              onClick={navigateToProducts}
              className={`block w-full text-left p-2 ${scrolled ? 'text-metal-300 hover:text-white' : 'text-metal-700 hover:text-metal-900'} font-medium`}
            >
              Προϊόντα
            </button>
            <button 
              onClick={() => navigateToSection("features")}
              className={`block w-full text-left p-2 ${scrolled ? 'text-metal-300 hover:text-white' : 'text-metal-700 hover:text-metal-900'} font-medium`}
            >
              Υπηρεσίες
            </button>
            <button 
              onClick={() => navigateToSection("projects")}
              className={`block w-full text-left p-2 ${scrolled ? 'text-metal-300 hover:text-white' : 'text-metal-700 hover:text-metal-900'} font-medium`}
            >
              Έργα
            </button>
            <button 
              onClick={() => navigateToSection("contact")}
              className={`block w-full text-left p-2 ${scrolled ? 'text-metal-300 hover:text-white' : 'text-metal-700 hover:text-metal-900'} font-medium`}
            >
              Επικοινωνία
            </button>
            <button 
              onClick={handleQuoteRequest}
              className={`w-full rounded-xl ${scrolled ? 'bg-blue-600 hover:bg-blue-700' : 'bg-metal-800 hover:bg-metal-900 text-white'}`}
            >
              Ζήτα Προσφορά
            </button>
          </div>
        )}
    </header>
  );
}

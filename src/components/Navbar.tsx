
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavbarLogo from "./navbar/NavbarLogo";
import DesktopNavigation from "./navbar/DesktopNavigation";
import MobileNavigation from "./navbar/MobileNavigation";

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
          <NavbarLogo scrolled={scrolled} />

          <DesktopNavigation 
            scrolled={scrolled}
            navigateToSection={navigateToSection}
            handleQuoteRequest={handleQuoteRequest}
            mobileMenuOpen={mobileMenuOpen}
            setMobileMenuOpen={setMobileMenuOpen}
          />

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

        <MobileNavigation 
          mobileMenuOpen={mobileMenuOpen}
          setMobileMenuOpen={setMobileMenuOpen}
          scrolled={scrolled}
          navigateToSection={navigateToSection}
          handleQuoteRequest={handleQuoteRequest}
        />
      </nav>
    </header>
  );
}

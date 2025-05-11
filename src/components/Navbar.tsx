
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Archive } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-metal-100 sticky top-0 z-40 w-full">
      <nav className="container-section !py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2">
              <Archive className="h-6 w-6 text-blue-600" />
              <span className="text-xl font-bold">Stereon</span>
            </a>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-metal-700 hover:text-metal-900 font-medium">
              Προϊόντα
            </a>
            <a href="#features" className="text-metal-700 hover:text-metal-900 font-medium">
              Χαρακτηριστικά
            </a>
            <a href="#about" className="text-metal-700 hover:text-metal-900 font-medium">
              Σχετικά με εμάς
            </a>
            <a href="#contact" className="text-metal-700 hover:text-metal-900 font-medium">
              Επικοινωνία
            </a>
            <Button>Ζητήστε Προσφορά</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              className="text-metal-500 hover:text-metal-900"
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
            <a href="#products" className="block text-metal-700 hover:text-metal-900 font-medium">
              Προϊόντα
            </a>
            <a href="#features" className="block text-metal-700 hover:text-metal-900 font-medium">
              Χαρακτηριστικά
            </a>
            <a href="#about" className="block text-metal-700 hover:text-metal-900 font-medium">
              Σχετικά με εμάς
            </a>
            <a href="#contact" className="block text-metal-700 hover:text-metal-900 font-medium">
              Επικοινωνία
            </a>
            <Button className="w-full">Ζητήστε Προσφορά</Button>
          </div>
        )}
      </nav>
    </header>
  );
}


import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ProductsDropdownProps {
  scrolled: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function ProductsDropdown({ scrolled, mobileMenuOpen, setMobileMenuOpen }: ProductsDropdownProps) {
  const navigate = useNavigate();

  const navigateToProducts = (category?: string) => {
    const path = category ? `/products?category=${category}` : '/products';
    navigate(path);
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className={`flex items-center gap-1 font-medium transition-colors ${
          scrolled 
            ? 'text-white hover:text-gray-200' 
            : 'text-black hover:text-gray-700'
        } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md px-2 py-1`}>
          Προϊόντα
          <ChevronDown className="h-4 w-4" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        className="z-50 bg-white border border-gray-200 shadow-lg min-w-[200px]"
        align="center"
      >
        <DropdownMenuItem 
          onClick={() => navigateToProducts()}
          className="cursor-pointer text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
        >
          Όλα τα Προϊόντα
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => navigateToProducts('ντουλάπα')}
          className="cursor-pointer text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
        >
          Ντουλάπα
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => navigateToProducts('locker')}
          className="cursor-pointer text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
        >
          Locker/Ντουλάπια
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => navigateToProducts('αρχειοθήκη')}
          className="cursor-pointer text-gray-900 hover:bg-gray-100 focus:bg-gray-100"
        >
          Αρχειοθήκη
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

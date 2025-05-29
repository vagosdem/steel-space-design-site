
import { Archive } from "lucide-react";
import { Link } from "react-router-dom";

interface NavbarLogoProps {
  scrolled: boolean;
}

export default function NavbarLogo({ scrolled }: NavbarLogoProps) {
  return (
    <div className="flex items-center">
      <Link to="/" className="flex items-center gap-2">
        <Archive className={`h-6 w-6 ${scrolled ? 'text-blue-400' : 'text-blue-600'}`} />
        <span className={`text-xl font-bold ${scrolled ? 'text-white' : 'text-metal-900'}`}>
          Stereom
        </span>
      </Link>
    </div>
  );
}

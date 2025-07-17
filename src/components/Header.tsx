import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-cream-200/80 backdrop-blur-md border-b border-cream-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-roboto-condensed text-gray-800">
              PitchPerfect
            </h1>
          </div>

          {/* Navigation Links - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 hover:text-gray-900 font-roboto-condensed font-medium transition-colors"
            >
              Home
            </a>
            <a
              href="#features"
              className="text-gray-700 hover:text-gray-900 font-roboto-condensed font-medium transition-colors"
            >
              Features
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-gray-900 font-roboto-condensed font-medium transition-colors"
            >
              About
            </a>

            {/* ✅ Login Button */}
            <Link to="/login">
              <Button
                variant="outline"
                className="font-roboto-condensed border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                Login
              </Button>
            </Link>

            <Link to="/interview">
              <Button className="font-roboto-condensed bg-gray-800 hover:bg-gray-900">
                Start Interview
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="outline"
              size="sm"
              className="font-roboto-condensed"
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

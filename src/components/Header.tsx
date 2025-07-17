// src/components/Header.tsx
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Header = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/");
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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

          {/* Navigation */}
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

            <Link to="/interview">
              <Button className="font-roboto-condensed bg-gray-800 hover:bg-gray-900">
                Start Interview
              </Button>
            </Link>

            {!user ? (
              <Link to="/login">
                <Button
                  variant="outline"
                  className="font-roboto-condensed border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Login
                </Button>
              </Link>
            ) : (
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setOpen(!open)}
                  className="rounded-full focus:outline-none"
                >
                  <img
                    src={user.photoURL || "/default-avatar.png"}
                    alt="User Avatar"
                    className="w-9 h-9 rounded-full border-2 border-gray-300"
                  />
                </button>

                {open && (
                  <div className="absolute right-0 mt-2 w-44 bg-white rounded-lg shadow-lg py-1 z-50">
                    <Link
                      to="/profile"
                      onClick={() => setOpen(false)}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
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

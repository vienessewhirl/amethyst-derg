// React
import { useState } from "react";

// Icons
import { Menu } from "lucide-react";
import { X } from "lucide-react";

// Navbar Component
export default function Navbar() {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  return (
    <nav className="fixed top-10 w-full z-50 transition-all duration-300 bg-amethyst/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img
                src="logo.png"
                alt="Amethyst Derg"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
            {/* <span className="text-lg sm:text-xl md:text-2xl font-medium">
              <span className="text-violet-500">Amethyst</span>
              <span className="text-white"> Derg</span>
            </span> */}
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="#about"
              className="text-gray-300 hover:text-white lg:text-base"
            >
              About
            </a>
            <a
              href="#priceguide"
              className="text-gray-300 hover:text-white lg:text-base"
            >
              Price Guide
            </a>
            <a
              href="#terms"
              className="text-gray-300 hover:text-white lg:text-base"
            >
              Terms of Service
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white lg:text-base"
            >
              Contact
            </a>
          </div>
          <button
            className="md:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            {mobileMenuIsOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-amethyst/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a
              href="#about"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white lg:text-base"
            >
              About
            </a>
            <a
              href="#priceguide"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white lg:text-base"
            >
              Price Guide
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuIsOpen(false)}
              className="block text-gray-300 hover:text-white lg:text-base"
            >
              Terms of Service
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white lg:text-base"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

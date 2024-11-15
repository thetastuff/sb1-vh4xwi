import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-dark-950/80 backdrop-blur-md border-b border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl font-bold bg-gradient-to-r from-accent-purple via-accent-glow to-accent-blue bg-clip-text text-transparent">
                DealMaster
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/categories" className="text-dark-100 hover:text-dark-50 transition-colors">
              Categories
            </Link>
            <Button size="sm" className="shadow-glow-sm hover:shadow-glow-md transition-shadow">
              Sign Up
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-100 hover:text-dark-50 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/categories"
              className="block px-3 py-2 rounded-md text-base font-medium text-dark-100 hover:text-dark-50"
            >
              Categories
            </Link>
            <div className="px-3 py-2">
              <Button className="w-full shadow-glow-sm hover:shadow-glow-md transition-shadow">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
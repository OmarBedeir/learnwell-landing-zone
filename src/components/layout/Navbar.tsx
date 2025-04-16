
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, LogOut } from "lucide-react";
import { useAuth } from '@/contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleAuth = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-brand-600 font-heading">LearnWell</span>
            </Link>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-6">
            <div className="flex space-x-6">
              <a href="#courses" className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium">
                Courses
              </a>
              <a href="#instructors" className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium">
                Instructors
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium">
                Testimonials
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium">
                Pricing
              </a>
              <a href="#contact" className="text-gray-700 hover:text-brand-600 px-3 py-2 text-sm font-medium">
                Contact
              </a>
            </div>
            <div className="flex items-center space-x-2">
              {user ? (
                <Button variant="outline" size="sm" onClick={signOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Log Out
                </Button>
              ) : (
                <>
                  <Button variant="outline" size="sm" onClick={() => navigate('/auth')}>Log In</Button>
                  <Button size="sm" onClick={() => navigate('/auth?tab=signup')}>Sign Up</Button>
                </>
              )}
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <a href="#courses" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md">
            Courses
          </a>
          <a href="#instructors" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md">
            Instructors
          </a>
          <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md">
            Testimonials
          </a>
          <a href="#pricing" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md">
            Pricing
          </a>
          <a href="#contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md">
            Contact
          </a>
          <div className="pt-4 pb-3 flex flex-col space-y-2">
            {user ? (
              <Button variant="outline" className="w-full justify-center" onClick={signOut}>
                <LogOut className="mr-2 h-4 w-4" />
                Log Out
              </Button>
            ) : (
              <>
                <Button variant="outline" className="w-full justify-center" onClick={() => navigate('/auth')}>Log In</Button>
                <Button className="w-full justify-center" onClick={() => navigate('/auth?tab=signup')}>Sign Up</Button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


import React, { useState } from 'react';
import { Search, User, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <span>Free delivery on orders over ৳5,000</span>
          <div className="flex space-x-4">
            <span>📞 +880 1234-567890</span>
            <span>✉️ info@startech.com.bd</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              ST
            </div>
            <span className="text-2xl font-bold text-gray-800">StarTech</span>
          </Link>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-600">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Header Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/login" className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
              <User className="w-5 h-5" />
              <span>Account</span>
            </Link>
            
            <button className="relative text-gray-600 hover:text-blue-600 transition-colors">
              <Heart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                3
              </span>
            </button>

            <Link to="/cart" className="relative text-gray-600 hover:text-blue-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-600"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="hidden md:flex items-center space-x-8 py-3">
            <Link to="/categories" className="hover:text-blue-400 transition-colors font-medium">All Categories</Link>
            <Link to="/laptops" className="hover:text-blue-400 transition-colors">Laptops</Link>
            <Link to="/desktops" className="hover:text-blue-400 transition-colors">Desktops</Link>
            <Link to="/components" className="hover:text-blue-400 transition-colors">Components</Link>
            <Link to="/accessories" className="hover:text-blue-400 transition-colors">Accessories</Link>
            <Link to="/gaming" className="hover:text-blue-400 transition-colors">Gaming</Link>
            <Link to="/deals" className="hover:text-blue-400 transition-colors text-yellow-400">Hot Deals</Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <Link to="/categories" className="block py-2 text-gray-700 hover:text-blue-600">All Categories</Link>
            <Link to="/laptops" className="block py-2 text-gray-700 hover:text-blue-600">Laptops</Link>
            <Link to="/desktops" className="block py-2 text-gray-700 hover:text-blue-600">Desktops</Link>
            <Link to="/components" className="block py-2 text-gray-700 hover:text-blue-600">Components</Link>
            <Link to="/accessories" className="block py-2 text-gray-700 hover:text-blue-600">Accessories</Link>
            <Link to="/gaming" className="block py-2 text-gray-700 hover:text-blue-600">Gaming</Link>
            <Link to="/deals" className="block py-2 text-yellow-600 hover:text-yellow-700">Hot Deals</Link>
            <hr className="my-2" />
            <Link to="/login" className="block py-2 text-gray-700 hover:text-blue-600">Login</Link>
            <Link to="/register" className="block py-2 text-gray-700 hover:text-blue-600">Register</Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

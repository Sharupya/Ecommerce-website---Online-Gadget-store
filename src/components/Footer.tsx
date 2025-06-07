
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                ST
              </div>
              <span className="text-xl font-bold">StarTech</span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted technology partner in Bangladesh. Quality products, competitive prices, and excellent service.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">📘</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">📷</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">📺</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">🐦</a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="block text-gray-400 hover:text-white transition-colors">About Us</Link>
              <Link to="/contact" className="block text-gray-400 hover:text-white transition-colors">Contact</Link>
              <Link to="/careers" className="block text-gray-400 hover:text-white transition-colors">Careers</Link>
              <Link to="/blog" className="block text-gray-400 hover:text-white transition-colors">Blog</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <div className="space-y-2">
              <Link to="/support" className="block text-gray-400 hover:text-white transition-colors">Help Center</Link>
              <Link to="/returns" className="block text-gray-400 hover:text-white transition-colors">Returns</Link>
              <Link to="/warranty" className="block text-gray-400 hover:text-white transition-colors">Warranty</Link>
              <Link to="/shipping" className="block text-gray-400 hover:text-white transition-colors">Shipping Info</Link>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>📍 123 Tech Street, Dhaka 1000</p>
              <p>📞 +880 1234-567890</p>
              <p>✉️ info@startech.com.bd</p>
              <p>🕒 10:00 AM - 10:00 PM</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 StarTech Bangladesh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

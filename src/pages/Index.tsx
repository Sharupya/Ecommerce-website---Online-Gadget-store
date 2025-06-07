
import React, { useState } from 'react';
import { ArrowRight, Heart, ShoppingCart, Star, User, Menu, X, Search, Truck, Shield, Headphones, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Latest Gaming Laptops",
      subtitle: "Up to 30% Off",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1200&h=600&fit=crop",
      cta: "Shop Now"
    },
    {
      id: 2,
      title: "Professional Workstations",
      subtitle: "For Creative Professionals",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=600&fit=crop",
      cta: "Explore"
    },
    {
      id: 3,
      title: "Smart Accessories",
      subtitle: "Complete Your Setup",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=600&fit=crop",
      cta: "Discover"
    }
  ];

  const categories = [
    { name: "Laptops", icon: "💻", count: "245+ Products" },
    { name: "Desktops", icon: "🖥️", count: "180+ Products" },
    { name: "Components", icon: "🔧", count: "520+ Products" },
    { name: "Accessories", icon: "🎧", count: "340+ Products" },
    { name: "Gaming", icon: "🎮", count: "190+ Products" },
    { name: "Software", icon: "📀", count: "85+ Products" }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "MacBook Pro 16-inch",
      price: 249999,
      originalPrice: 279999,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
      rating: 4.8,
      reviews: 124,
      badge: "Best Seller"
    },
    {
      id: 2,
      name: "Dell XPS 13 Developer",
      price: 159999,
      originalPrice: 179999,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop",
      rating: 4.6,
      reviews: 89,
      badge: "New"
    },
    {
      id: 3,
      name: "Gaming Desktop RGB",
      price: 119999,
      originalPrice: 139999,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      rating: 4.9,
      reviews: 67,
      badge: "Hot Deal"
    },
    {
      id: 4,
      name: "Professional Workstation",
      price: 199999,
      originalPrice: 229999,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      rating: 4.7,
      reviews: 45,
      badge: "Featured"
    }
  ];

  const brands = [
    { name: "Apple", logo: "🍎" },
    { name: "Dell", logo: "🏢" },
    { name: "HP", logo: "🖨️" },
    { name: "Lenovo", logo: "💼" },
    { name: "ASUS", logo: "⚡" },
    { name: "MSI", logo: "🎯" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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
              <button className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                <User className="w-5 h-5" />
                <span>Account</span>
              </button>
              
              <button className="relative text-gray-600 hover:text-blue-600 transition-colors">
                <Heart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  3
                </span>
              </button>

              <button className="relative text-gray-600 hover:text-blue-600 transition-colors">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>

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

      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          {heroSlides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="max-w-2xl px-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8">
                    {slide.subtitle}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3">
              <Truck className="w-8 h-8 text-blue-600" />
              <div>
                <h3 className="font-semibold text-gray-800">Free Delivery</h3>
                <p className="text-sm text-gray-600">Orders over ৳5,000</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-green-600" />
              <div>
                <h3 className="font-semibold text-gray-800">Secure Payment</h3>
                <p className="text-sm text-gray-600">100% Protected</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Headphones className="w-8 h-8 text-purple-600" />
              <div>
                <h3 className="font-semibold text-gray-800">24/7 Support</h3>
                <p className="text-sm text-gray-600">Dedicated Help</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <RotateCcw className="w-8 h-8 text-orange-600" />
              <div>
                <h3 className="font-semibold text-gray-800">Easy Returns</h3>
                <p className="text-sm text-gray-600">30 Day Policy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/category/${category.name.toLowerCase()}`}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-gray-800 mb-1">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">Featured Products</h2>
            <Link to="/products" className="text-blue-600 hover:text-blue-700 flex items-center space-x-1">
              <span>View All</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg border hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <span className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-semibold text-white ${
                    product.badge === 'Hot Deal' ? 'bg-red-500' :
                    product.badge === 'New' ? 'bg-green-500' :
                    product.badge === 'Best Seller' ? 'bg-blue-500' : 'bg-purple-500'
                  }`}>
                    {product.badge}
                  </span>
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                    <Heart className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-1">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <span className="text-lg font-bold text-gray-800">৳{product.price.toLocaleString()}</span>
                      <span className="text-sm text-gray-500 line-through ml-2">৳{product.originalPrice.toLocaleString()}</span>
                    </div>
                    <span className="text-sm font-semibold text-green-600">
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Trusted Brands</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-3xl mb-2">{brand.logo}</div>
                <h3 className="font-semibold text-gray-800">{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl mb-8">Get the latest deals and tech news delivered to your inbox</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-r-lg transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default Index;

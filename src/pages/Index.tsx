
import React, { useState } from 'react';
import { ArrowRight, Heart, ShoppingCart, Star, Truck, Shield, Headphones, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedBrands from '../components/AnimatedBrands';

const Index = () => {
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
    { name: "Laptops", icon: "💻", count: "245+ Products", link: "/laptops" },
    { name: "Desktops", icon: "🖥️", count: "180+ Products", link: "/desktops" },
    { name: "Components", icon: "🔧", count: "520+ Products", link: "/components" },
    { name: "Accessories", icon: "🎧", count: "340+ Products", link: "/accessories" },
    { name: "Gaming", icon: "🎮", count: "190+ Products", link: "/gaming" },
    { name: "Software", icon: "📀", count: "85+ Products", link: "/products" }
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

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
                <div className="max-w-2xl px-4 animate-fade-in">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-white mb-8">
                    {slide.subtitle}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
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
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-125' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Features Bar */}
      <section className="bg-white py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-3 group">
              <Truck className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold text-gray-800">Free Delivery</h3>
                <p className="text-sm text-gray-600">Orders over ৳5,000</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group">
              <Shield className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold text-gray-800">Secure Payment</h3>
                <p className="text-sm text-gray-600">100% Protected</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group">
              <Headphones className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
              <div>
                <h3 className="font-semibold text-gray-800">24/7 Support</h3>
                <p className="text-sm text-gray-600">Dedicated Help</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 group">
              <RotateCcw className="w-8 h-8 text-orange-600 group-hover:scale-110 transition-transform" />
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
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8 animate-fade-in">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-125 transition-transform duration-300">
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
            <Link to="/products" className="text-blue-600 hover:text-blue-700 flex items-center space-x-1 group">
              <span>View All</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product, index) => (
              <div 
                key={product.id} 
                className="bg-white rounded-lg border hover:shadow-lg transition-all duration-300 group transform hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <span className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-semibold text-white ${
                    product.badge === 'Hot Deal' ? 'bg-red-500' :
                    product.badge === 'New' ? 'bg-green-500' :
                    product.badge === 'Best Seller' ? 'bg-blue-500' : 'bg-purple-500'
                  }`}>
                    {product.badge}
                  </span>
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-110">
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
                  
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Brands Section */}
      <AnimatedBrands />

      {/* Newsletter */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in">Stay Updated</h2>
          <p className="text-xl mb-8 animate-fade-in">Get the latest deals and tech news delivered to your inbox</p>
          <div className="max-w-md mx-auto flex animate-scale-in">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-blue-800 hover:bg-blue-900 px-6 py-3 rounded-r-lg transition-all duration-300 transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

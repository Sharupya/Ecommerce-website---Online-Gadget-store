
import React from 'react';
import { ArrowLeft, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Accessories = () => {
  const products = [
    {
      id: 1,
      name: "Wireless Gaming Mouse",
      price: 5500,
      originalPrice: 6500,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=300&h=200&fit=crop",
      rating: 4.5,
      reviews: 234,
      badge: "Popular"
    },
    {
      id: 2,
      name: "Mechanical Keyboard RGB",
      price: 8500,
      originalPrice: 10000,
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300&h=200&fit=crop",
      rating: 4.8,
      reviews: 189,
      badge: "Gaming"
    },
    {
      id: 3,
      name: "USB-C Hub 7-in-1",
      price: 3500,
      originalPrice: 4000,
      image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=300&h=200&fit=crop",
      rating: 4.3,
      reviews: 67,
      badge: "Essential"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Computer Accessories</h1>
          <p className="text-gray-600">Essential accessories to enhance your computing experience</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg border hover:shadow-lg transition-all duration-300 group">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-110"
                />
                <span className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-semibold text-white ${
                  product.badge === 'Gaming' ? 'bg-red-500' :
                  product.badge === 'Popular' ? 'bg-blue-500' : 'bg-green-500'
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
      
      <Footer />
    </div>
  );
};

export default Accessories;


import React from 'react';
import { ArrowLeft, Star, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HotDeals = () => {
  const deals = [
    {
      id: 1,
      name: "MacBook Air M2 Flash Sale",
      price: 145000,
      originalPrice: 180000,
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=300&h=200&fit=crop",
      rating: 4.9,
      reviews: 267,
      timeLeft: "2d 5h 23m",
      discount: 19
    },
    {
      id: 2,
      name: "Gaming Setup Bundle Deal",
      price: 85000,
      originalPrice: 110000,
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=200&fit=crop",
      rating: 4.7,
      reviews: 156,
      timeLeft: "1d 12h 45m",
      discount: 23
    },
    {
      id: 3,
      name: "4K Monitor Clearance",
      price: 32000,
      originalPrice: 45000,
      image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=200&fit=crop",
      rating: 4.5,
      reviews: 89,
      timeLeft: "5h 30m",
      discount: 29
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

        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🔥 Hot Deals</h1>
          <p className="text-gray-600 text-lg">Limited time offers - Grab them before they're gone!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deals.map((deal) => (
            <div key={deal.id} className="bg-white rounded-lg border hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              {/* Flash Sale Badge */}
              <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg z-10">
                <span className="text-sm font-bold">{deal.discount}% OFF</span>
              </div>
              
              <div className="relative">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <button className="absolute top-3 left-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                  <Heart className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              
              <div className="p-4">
                {/* Countdown Timer */}
                <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
                  <div className="flex items-center justify-center space-x-2 text-red-600">
                    <Clock className="w-4 h-4" />
                    <span className="font-semibold text-sm">Ends in: {deal.timeLeft}</span>
                  </div>
                </div>
                
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {deal.name}
                </h3>
                
                <div className="flex items-center mb-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(deal.rating) ? 'fill-current' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-1">({deal.reviews})</span>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-red-600">৳{deal.price.toLocaleString()}</span>
                    <span className="text-lg text-gray-500 line-through">৳{deal.originalPrice.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-green-600 font-semibold">
                    You save ৳{(deal.originalPrice - deal.price).toLocaleString()}
                  </p>
                </div>
                
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-colors animate-pulse">
                  🔥 Grab This Deal
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Flash Sale Banner */}
        <div className="mt-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg p-8 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">⚡ Flash Sale Alert!</h2>
          <p className="text-lg mb-6">Subscribe to our newsletter and be the first to know about flash sales and exclusive deals!</p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-r-lg font-semibold text-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default HotDeals;

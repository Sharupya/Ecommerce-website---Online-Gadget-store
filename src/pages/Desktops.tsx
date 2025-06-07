
import React, { useState } from 'react';
import { ArrowLeft, Filter, Grid, List, Star, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Desktops = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');

  const products = [
    {
      id: 1,
      name: "Gaming Desktop RTX 4070",
      price: 120000,
      originalPrice: 135000,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      rating: 4.8,
      reviews: 45,
      badge: "Gaming",
      specs: "Intel i7, 32GB RAM, RTX 4070"
    },
    {
      id: 2,
      name: "Professional Workstation",
      price: 180000,
      originalPrice: 200000,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      rating: 4.6,
      reviews: 28,
      badge: "Pro",
      specs: "Intel i9, 64GB RAM, RTX 4080"
    },
    {
      id: 3,
      name: "Budget Desktop PC",
      price: 45000,
      originalPrice: 50000,
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=200&fit=crop",
      rating: 4.2,
      reviews: 67,
      badge: "Budget",
      specs: "Intel i5, 16GB RAM, GTX 1660"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <span>Desktops</span>
        </div>

        {/* Back Button */}
        <Link to="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Desktop Computers</h1>
            <p className="text-gray-600">High-performance desktops for every need</p>
          </div>
          <div className="flex items-center space-x-4">
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
            >
              <option value="newest">Newest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
            
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button 
                onClick={() => setViewMode('grid')}
                className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setViewMode('list')}
                className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-3">Price Range</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Under ৳50,000</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">৳50,000 - ৳100,000</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">৳100,000 - ৳200,000</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Above ৳200,000</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Processor</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Intel Core i5</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Intel Core i7</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">Intel Core i9</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">AMD Ryzen</span>
                    </label>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-3">Graphics Card</h4>
                  <div className="space-y-2">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">RTX 4060</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">RTX 4070</span>
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm">RTX 4080</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6' : 'space-y-4'}>
              {products.map((product) => (
                <div key={product.id} className={`bg-white rounded-lg border hover:shadow-lg transition-all duration-300 group ${viewMode === 'list' ? 'flex' : ''}`}>
                  <div className={`relative ${viewMode === 'list' ? 'w-48 flex-shrink-0' : ''}`}>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`object-cover transition-transform duration-300 group-hover:scale-110 ${viewMode === 'list' ? 'w-full h-full rounded-l-lg' : 'w-full h-48 rounded-t-lg'}`}
                    />
                    <span className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-semibold text-white ${
                      product.badge === 'Gaming' ? 'bg-red-500' :
                      product.badge === 'Pro' ? 'bg-purple-500' : 'bg-green-500'
                    }`}>
                      {product.badge}
                    </span>
                    <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
                      <Heart className="w-4 h-4 text-gray-600" />
                    </button>
                  </div>
                  
                  <div className="p-4 flex-1">
                    <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{product.specs}</p>
                    
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
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Desktops;

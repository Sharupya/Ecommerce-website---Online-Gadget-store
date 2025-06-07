
import React, { useState } from 'react';
import { ChevronDown, Grid, List, Star, Heart, ShoppingCart, Filter, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductListing = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    priceRange: [0, 500000],
    brands: [],
    inStock: true,
    rating: 0
  });

  const products = [
    {
      id: 1,
      name: "MacBook Pro 16-inch M3 Max",
      brand: "Apple",
      price: 349999,
      originalPrice: 399999,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
      rating: 4.9,
      reviews: 156,
      inStock: true,
      badge: "Best Seller",
      specs: ["M3 Max Chip", "32GB RAM", "1TB SSD", "16-inch Retina Display"]
    },
    {
      id: 2,
      name: "Dell XPS 13 Plus Developer Edition",
      brand: "Dell",
      price: 179999,
      originalPrice: 199999,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop",
      rating: 4.7,
      reviews: 89,
      inStock: true,
      badge: "New",
      specs: ["Intel i7-1360P", "16GB RAM", "512GB SSD", "13.4-inch 4K Touch"]
    },
    {
      id: 3,
      name: "ASUS ROG Strix G15 Gaming Laptop",
      brand: "ASUS",
      price: 159999,
      originalPrice: 189999,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop",
      rating: 4.8,
      reviews: 234,
      inStock: true,
      badge: "Hot Deal",
      specs: ["AMD Ryzen 7", "16GB RAM", "1TB SSD", "RTX 4060 8GB"]
    },
    {
      id: 4,
      name: "HP EliteBook 840 G9",
      brand: "HP",
      price: 139999,
      originalPrice: 159999,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      rating: 4.6,
      reviews: 67,
      inStock: false,
      badge: "Business",
      specs: ["Intel i5-1240P", "8GB RAM", "256GB SSD", "14-inch FHD"]
    },
    {
      id: 5,
      name: "Lenovo ThinkPad X1 Carbon Gen 11",
      brand: "Lenovo",
      price: 199999,
      originalPrice: 229999,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      rating: 4.8,
      reviews: 123,
      inStock: true,
      badge: "Premium",
      specs: ["Intel i7-1355U", "16GB RAM", "512GB SSD", "14-inch 2.8K"]
    },
    {
      id: 6,
      name: "MSI Gaming Laptop GF63 Thin",
      brand: "MSI",
      price: 89999,
      originalPrice: 109999,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
      rating: 4.4,
      reviews: 98,
      inStock: true,
      badge: "Budget",
      specs: ["Intel i5-11400H", "8GB RAM", "512GB SSD", "GTX 1650 4GB"]
    }
  ];

  const brands = ['Apple', 'Dell', 'HP', 'Lenovo', 'ASUS', 'MSI', 'Acer', 'Samsung'];
  const priceRanges = [
    { label: 'Under ৳50,000', min: 0, max: 50000 },
    { label: '৳50,000 - ৳100,000', min: 50000, max: 100000 },
    { label: '৳100,000 - ৳200,000', min: 100000, max: 200000 },
    { label: '৳200,000 - ৳300,000', min: 200000, max: 300000 },
    { label: 'Above ৳300,000', min: 300000, max: 1000000 }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'price_low', label: 'Price: Low to High' },
    { value: 'price_high', label: 'Price: High to Low' },
    { value: 'popularity', label: 'Most Popular' },
    { value: 'rating', label: 'Highest Rated' }
  ];

  const ProductCard = ({ product, isListView }) => (
    <div className={`bg-white rounded-lg border hover:shadow-lg transition-all duration-300 group ${
      isListView ? 'flex' : ''
    }`}>
      <div className={`relative ${isListView ? 'w-48 flex-shrink-0' : ''}`}>
        <img
          src={product.image}
          alt={product.name}
          className={`object-cover rounded-t-lg ${
            isListView ? 'w-full h-32 rounded-l-lg rounded-t-none' : 'w-full h-48'
          }`}
        />
        <span className={`absolute top-3 left-3 px-2 py-1 rounded text-xs font-semibold text-white ${
          product.badge === 'Hot Deal' ? 'bg-red-500' :
          product.badge === 'New' ? 'bg-green-500' :
          product.badge === 'Best Seller' ? 'bg-blue-500' :
          product.badge === 'Premium' ? 'bg-purple-500' :
          product.badge === 'Business' ? 'bg-gray-600' : 'bg-orange-500'
        }`}>
          {product.badge}
        </span>
        <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors opacity-0 group-hover:opacity-100">
          <Heart className="w-4 h-4 text-gray-600" />
        </button>
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg">
            <span className="text-white font-semibold bg-red-600 px-3 py-1 rounded">Out of Stock</span>
          </div>
        )}
      </div>
      
      <div className={`p-4 ${isListView ? 'flex-1' : ''}`}>
        <div className={isListView ? 'flex justify-between h-full' : ''}>
          <div className={isListView ? 'flex-1 mr-4' : ''}>
            <Link to={`/product/${product.id}`}>
              <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                {product.name}
              </h3>
            </Link>
            
            <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
            
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

            {isListView && (
              <div className="mb-3">
                <ul className="text-sm text-gray-600 space-y-1">
                  {product.specs.slice(0, 3).map((spec, index) => (
                    <li key={index}>• {spec}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          
          <div className={`${isListView ? 'text-right' : ''}`}>
            <div className={`flex items-center ${isListView ? 'justify-end' : 'justify-between'} mb-3`}>
              <div>
                <span className="text-lg font-bold text-gray-800">৳{product.price.toLocaleString()}</span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-gray-500 line-through ml-2">৳{product.originalPrice.toLocaleString()}</span>
                )}
              </div>
              {product.originalPrice > product.price && (
                <span className="text-sm font-semibold text-green-600">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              )}
            </div>
            
            <button 
              disabled={!product.inStock}
              className={`w-full py-2 rounded-lg transition-colors ${
                product.inStock 
                  ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-700">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/categories" className="text-blue-600 hover:text-blue-700">Categories</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">Laptops</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <div className={`lg:w-64 space-y-6 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-4">Filters</h3>
              
              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  {priceRanges.map((range, index) => (
                    <label key={index} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Brands */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Brands</h4>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {brands.map((brand, index) => (
                    <label key={index} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="ml-2 text-sm text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Rating */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Customer Rating</h4>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <div className="ml-2 flex items-center">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < rating ? 'fill-current' : 'text-gray-300'}`} />
                          ))}
                        </div>
                        <span className="ml-1 text-sm text-gray-600">& up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Stock Status */}
              <div>
                <h4 className="font-medium mb-3">Availability</h4>
                <label className="flex items-center">
                  <input type="checkbox" defaultChecked className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                  <span className="ml-2 text-sm text-gray-700">In Stock Only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Header */}
            <div className="bg-white rounded-lg p-4 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-800 mb-1">Laptops</h1>
                  <p className="text-gray-600">{products.length} products found</p>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Mobile Filter Toggle */}
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                    <span>Filters</span>
                  </button>

                  {/* Sort Dropdown */}
                  <div className="relative">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>

                  {/* View Mode Toggle */}
                  <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  isListView={viewMode === 'list'} 
                />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50">
                  Previous
                </button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button
                    key={page}
                    className={`px-3 py-2 border rounded-lg ${
                      page === 1 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;

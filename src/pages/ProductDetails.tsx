
import React, { useState } from 'react';
import { Star, Heart, ShoppingCart, Truck, Shield, ArrowLeft, Plus, Minus, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('specifications');

  const product = {
    id: 1,
    name: "MacBook Pro 16-inch M3 Max",
    brand: "Apple",
    sku: "MBP-16-M3-MAX-2024",
    price: 349999,
    originalPrice: 399999,
    rating: 4.9,
    reviews: 156,
    inStock: true,
    stockCount: 12,
    images: [
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop"
    ],
    badges: ["Best Seller", "Premium"],
    shortDescription: "The most powerful MacBook Pro ever built with M3 Max chip, featuring unprecedented performance for professionals.",
    keyFeatures: [
      "M3 Max chip with 16-core CPU and 40-core GPU",
      "32GB Unified Memory",
      "1TB SSD Storage",
      "16.2-inch Liquid Retina XDR display",
      "1080p FaceTime HD camera",
      "Six-speaker sound system with force-cancelling woofers",
      "Up to 22 hours battery life"
    ],
    specifications: {
      "Display": {
        "Screen Size": "16.2-inch",
        "Resolution": "3456 x 2234 pixels",
        "Technology": "Liquid Retina XDR",
        "Brightness": "1000 nits sustained, 1600 nits peak"
      },
      "Processor": {
        "Chip": "Apple M3 Max",
        "CPU": "16-core (12 performance, 4 efficiency)",
        "GPU": "40-core",
        "Neural Engine": "16-core"
      },
      "Memory & Storage": {
        "RAM": "32GB Unified Memory",
        "Storage": "1TB SSD",
        "Expandable": "No"
      },
      "Connectivity": {
        "Thunderbolt": "3x Thunderbolt 4 (USB-C)",
        "HDMI": "1x HDMI 2.1",
        "Audio": "3.5mm headphone jack",
        "Wi-Fi": "Wi-Fi 6E (802.11ax)",
        "Bluetooth": "Bluetooth 5.3"
      },
      "Physical": {
        "Dimensions": "35.57 x 24.81 x 1.68 cm",
        "Weight": "2.16 kg",
        "Color": "Space Black"
      }
    }
  };

  const relatedProducts = [
    {
      id: 2,
      name: "MacBook Air 15-inch M3",
      price: 149999,
      originalPrice: 169999,
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=300&h=200&fit=crop",
      rating: 4.7
    },
    {
      id: 3,
      name: "iPad Pro 12.9-inch M2",
      price: 129999,
      originalPrice: 149999,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=200&fit=crop",
      rating: 4.8
    },
    {
      id: 4,
      name: "Magic Keyboard for MacBook",
      price: 15999,
      originalPrice: 17999,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      rating: 4.6
    }
  ];

  const reviews = [
    {
      id: 1,
      user: "Ahmed Rahman",
      rating: 5,
      date: "2024-01-15",
      comment: "Excellent performance for video editing and development work. The M3 Max chip is incredibly fast.",
      helpful: 23
    },
    {
      id: 2,
      user: "Sarah Khan",
      rating: 5,
      date: "2024-01-10",
      comment: "Best laptop I've ever owned. The display quality is stunning and battery life is amazing.",
      helpful: 18
    },
    {
      id: 3,
      user: "Michael Chen",
      rating: 4,
      date: "2024-01-05",
      comment: "Great laptop but quite expensive. Performance justifies the price though.",
      helpful: 12
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <nav className="text-sm flex items-center">
            <Link to="/" className="text-blue-600 hover:text-blue-700">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/categories" className="text-blue-600 hover:text-blue-700">Categories</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/laptops" className="text-blue-600 hover:text-blue-700">Laptops</Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-600">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Back Button */}
        <Link to="/laptops" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Laptops
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`border-2 rounded-lg overflow-hidden ${
                    selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-20 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="bg-white rounded-lg p-6">
            <div className="mb-4">
              {product.badges.map((badge, index) => (
                <span
                  key={index}
                  className={`inline-block px-2 py-1 rounded text-xs font-semibold text-white mr-2 ${
                    badge === 'Best Seller' ? 'bg-blue-500' : 'bg-purple-500'
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>

            <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
            <p className="text-gray-600 mb-4">by {product.brand} | SKU: {product.sku}</p>

            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="mb-6">
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-3xl font-bold text-gray-800">৳{product.price.toLocaleString()}</span>
                <span className="text-xl text-gray-500 line-through">৳{product.originalPrice.toLocaleString()}</span>
                <span className="text-lg font-semibold text-green-600">
                  {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                </span>
              </div>
              <p className="text-sm text-gray-600">Price includes VAT</p>
            </div>

            <div className="mb-6">
              <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {product.inStock ? `✓ In Stock (${product.stockCount} available)` : '✗ Out of Stock'}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3">Key Features:</h3>
              <ul className="space-y-2">
                {product.keyFeatures.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-gray-600">Quantity</span>
            </div>

            <div className="space-y-3 mb-6">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button className="w-full bg-gray-800 hover:bg-gray-900 text-white py-3 rounded-lg font-semibold transition-colors">
                Buy Now
              </button>
            </div>

            <div className="flex items-center justify-between">
              <button className="flex items-center text-gray-600 hover:text-red-600 transition-colors">
                <Heart className="w-5 h-5 mr-1" />
                Add to Wishlist
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                <Share2 className="w-5 h-5 mr-1" />
                Share
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-2">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800">Free Delivery</p>
                    <p className="text-sm text-gray-600">2-3 business days</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-800">Warranty</p>
                    <p className="text-sm text-gray-600">1 Year Official</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Information Tabs */}
        <div className="bg-white rounded-lg mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {['specifications', 'description', 'reviews', 'qa'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm ${
                    activeTab === tab
                      ? 'border-blue-600 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab === 'specifications' && 'Specifications'}
                  {tab === 'description' && 'Description'}
                  {tab === 'reviews' && 'Reviews'}
                  {tab === 'qa' && 'Q&A'}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            {activeTab === 'specifications' && (
              <div className="space-y-6">
                {Object.entries(product.specifications).map(([category, specs]) => (
                  <div key={category}>
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{category}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(specs).map(([key, value]) => (
                        <div key={key} className="flex">
                          <span className="font-medium text-gray-600 w-32 flex-shrink-0">{key}:</span>
                          <span className="text-gray-800">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700 mb-4">{product.shortDescription}</p>
                <h3 className="text-lg font-semibold mb-3">Complete Features:</h3>
                <ul className="space-y-2">
                  {product.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Customer Reviews</h3>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                    Write Review
                  </button>
                </div>
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <h4 className="font-medium text-gray-800">{review.user}</h4>
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                      <p className="text-gray-700 mb-2">{review.comment}</p>
                      <button className="text-sm text-gray-500 hover:text-gray-700">
                        Helpful ({review.helpful})
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'qa' && (
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Questions & Answers</h3>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
                    Ask Question
                  </button>
                </div>
                <div className="text-center py-8 text-gray-500">
                  No questions yet. Be the first to ask!
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className="bg-white rounded-lg p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((product) => (
              <div key={product.id} className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-lg mb-3"
                />
                <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-gray-800">৳{product.price.toLocaleString()}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">৳{product.originalPrice.toLocaleString()}</span>
                  </div>
                </div>
                <button className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

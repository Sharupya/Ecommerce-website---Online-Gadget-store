import React from 'react';
import { ArrowLeft, Users, Award, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-8">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About Tech Urahs</h1>
            <p className="text-xl text-gray-600">Your trusted technology partner in Bangladesh</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">500K+</h3>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">10+</h3>
              <p className="text-gray-600">Years Experience</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Globe className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600">Outlet Locations</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">99%</h3>
              <p className="text-gray-600">Customer Satisfaction</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <div className="prose max-w-none">
              <p className="text-gray-600 mb-4">
                Founded in 2014, Tech Urahs has emerged as Bangladesh's leading technology retailer, 
                committed to providing the latest and greatest in computer hardware, laptops, 
                gaming equipment, and tech accessories.
              </p>
              <p className="text-gray-600 mb-4">
                What started as a small computer shop in Dhaka has grown into a nationwide network 
                of retail outlets, serving customers across Bangladesh with quality products, 
                competitive prices, and exceptional customer service.
              </p>
              <p className="text-gray-600">
                Today, we continue to innovate and expand our offerings, ensuring that every 
                customer finds exactly what they need to power their digital lifestyle.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
                <p className="text-gray-600">
                  Bringing the latest technology innovations to Bangladesh's tech enthusiasts.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Quality</h3>
                <p className="text-gray-600">
                  Ensuring every product meets our high standards for performance and reliability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Service</h3>
                <p className="text-gray-600">
                  Providing exceptional customer service before, during, and after every purchase.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Value</h3>
                <p className="text-gray-600">
                  Offering competitive prices and great value for every customer's investment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default About;

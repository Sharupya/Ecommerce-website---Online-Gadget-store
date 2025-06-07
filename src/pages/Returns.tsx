
import React from 'react';
import { ArrowLeft, Package, Clock, CheckCircle, XCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Returns = () => {
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Returns & Refunds</h1>
            <p className="text-xl text-gray-600">Easy returns within 30 days</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Package className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Easy Returns</h3>
              <p className="text-gray-600">Simple return process</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Clock className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">30 Days</h3>
              <p className="text-gray-600">Return window</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <CheckCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Free Pickup</h3>
              <p className="text-gray-600">We collect from you</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Package className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quick Refund</h3>
              <p className="text-gray-600">Fast processing</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Return Policy</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <p className="text-gray-600">Products can be returned within 30 days of delivery</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <p className="text-gray-600">Items must be in original condition with all accessories</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <p className="text-gray-600">Original packaging and invoice required</p>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-1" />
                <p className="text-gray-600">Free pickup service available in major cities</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Non-Returnable Items</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-600 mt-1" />
                <p className="text-gray-600">Digital downloads and software licenses</p>
              </div>
              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-600 mt-1" />
                <p className="text-gray-600">Personalized or customized items</p>
              </div>
              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-600 mt-1" />
                <p className="text-gray-600">Items damaged by misuse or normal wear</p>
              </div>
              <div className="flex items-start space-x-3">
                <XCircle className="w-5 h-5 text-red-600 mt-1" />
                <p className="text-gray-600">Products beyond the 30-day return window</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Start Return Process
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Returns;

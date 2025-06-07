
import React from 'react';
import { ArrowLeft, Shield, Calendar, FileText, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Warranty = () => {
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Warranty Information</h1>
            <p className="text-xl text-gray-600">Comprehensive warranty coverage for all products</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Protected</h3>
              <p className="text-gray-600">Full warranty coverage</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Extended</h3>
              <p className="text-gray-600">Up to 3 years</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <FileText className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Documentation</h3>
              <p className="text-gray-600">Detailed warranty terms</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Phone className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Support</h3>
              <p className="text-gray-600">24/7 warranty service</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Warranty Coverage</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Laptops & Desktops</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 1-3 years manufacturer warranty</li>
                  <li>• Hardware defect coverage</li>
                  <li>• Free repair or replacement</li>
                  <li>• On-site service available</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Components</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 2-5 years warranty period</li>
                  <li>• Manufacturing defect coverage</li>
                  <li>• DOA (Dead on Arrival) protection</li>
                  <li>• Express replacement service</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Accessories</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 6 months to 2 years coverage</li>
                  <li>• Normal wear exclusions</li>
                  <li>• Quality assurance guarantee</li>
                  <li>• Easy claim process</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Gaming Gear</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 1-2 years warranty coverage</li>
                  <li>• Performance guarantee</li>
                  <li>• RGB/lighting components</li>
                  <li>• Gaming-specific support</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">How to Claim Warranty</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Contact Support</h3>
                  <p className="text-gray-600">Call our warranty hotline or visit any StarTech outlet</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Provide Information</h3>
                  <p className="text-gray-600">Share your invoice, warranty card, and product details</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Diagnosis</h3>
                  <p className="text-gray-600">Our technicians will diagnose the issue</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Resolution</h3>
                  <p className="text-gray-600">Repair, replace, or refund based on warranty terms</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors mr-4">
                Check Warranty Status
              </button>
              <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                File Warranty Claim
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Warranty;


import React from 'react';
import { ArrowLeft, Truck, MapPin, Clock, Package } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Shipping = () => {
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Shipping Information</h1>
            <p className="text-xl text-gray-600">Fast and reliable delivery across Bangladesh</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Truck className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">1-3 business days</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Nationwide</h3>
              <p className="text-gray-600">All 64 districts</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Clock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Express</h3>
              <p className="text-gray-600">Same day delivery</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Package className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Safe Packaging</h3>
              <p className="text-gray-600">Secure & protected</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Delivery Options</h2>
            <div className="space-y-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Standard Delivery (Free)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 mb-2"><strong>Dhaka:</strong> 1-2 business days</p>
                    <p className="text-gray-600 mb-2"><strong>Major Cities:</strong> 2-3 business days</p>
                    <p className="text-gray-600"><strong>Other Areas:</strong> 3-5 business days</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2"><strong>Free shipping</strong> on orders over ৳5,000</p>
                    <p className="text-gray-600">Delivery fee: ৳100 for orders under ৳5,000</p>
                  </div>
                </div>
              </div>
              
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Express Delivery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-gray-600 mb-2"><strong>Dhaka:</strong> Same day delivery</p>
                    <p className="text-gray-600 mb-2"><strong>Major Cities:</strong> Next day delivery</p>
                    <p className="text-gray-600"><strong>Cut-off time:</strong> 2:00 PM for same day</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2"><strong>Express fee:</strong> ৳200 (Dhaka)</p>
                    <p className="text-gray-600">৳300 (Other cities)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Order Tracking</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Order Confirmed</h3>
                  <p className="text-gray-600">Your order has been received and is being processed</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Order Packed</h3>
                  <p className="text-gray-600">Your items are being carefully packed for shipment</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-800">In Transit</h3>
                  <p className="text-gray-600">Your order is on its way to your delivery address</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-gray-800">Delivered</h3>
                  <p className="text-gray-600">Your order has been successfully delivered</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Track Your Order
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Shipping;

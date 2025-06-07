
import React, { useState } from 'react';
import { ArrowLeft, CreditCard, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [showBkashModal, setShowBkashModal] = useState(false);
  const [bkashTxnId, setBkashTxnId] = useState('');

  const cartItems = [
    {
      id: 1,
      name: "MacBook Pro 16-inch M2",
      price: 249999,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=80&fit=crop"
    }
  ];

  const subtotal = 249999;
  const shipping = 100;
  const total = subtotal + shipping;

  const handleBkashPayment = () => {
    setShowBkashModal(true);
  };

  const submitBkashPayment = () => {
    if (bkashTxnId) {
      alert('Payment submitted successfully! Order ID: #ST2024001');
      setShowBkashModal(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/cart" className="inline-flex items-center space-x-2 text-gray-600 hover:text-blue-600 mb-6">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Cart</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="space-y-6">
            {/* Shipping Information */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Shipping Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent md:col-span-2"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent md:col-span-2"
                />
                <textarea 
                  placeholder="Full Address" 
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent md:col-span-2"
                ></textarea>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select City</option>
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                  <option>Sylhet</option>
                  <option>Rajshahi</option>
                </select>
                <input 
                  type="text" 
                  placeholder="Postal Code" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Payment Method</h2>
              <div className="space-y-4">
                <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="cash" 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <CreditCard className="w-5 h-5 text-gray-600" />
                  <span className="font-medium">Cash on Delivery</span>
                </label>
                
                <label className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input 
                    type="radio" 
                    name="payment" 
                    value="bkash" 
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="text-pink-600 focus:ring-pink-500"
                  />
                  <Smartphone className="w-5 h-5 text-pink-600" />
                  <span className="font-medium">bKash</span>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/BKash_logo.svg/200px-BKash_logo.svg.png" alt="bKash" className="w-16 h-auto" />
                </label>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6 h-fit sticky top-4">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Order Summary</h2>
            
            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-3">
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-800">{item.name}</h4>
                    <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                  </div>
                  <span className="font-bold">৳{item.price.toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 border-t pt-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>৳{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>৳{shipping}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-2">
                <span>Total</span>
                <span className="text-blue-600">৳{total.toLocaleString()}</span>
              </div>
            </div>

            <button 
              onClick={paymentMethod === 'bkash' ? handleBkashPayment : () => alert('Order placed successfully!')}
              disabled={!paymentMethod}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 rounded-lg font-semibold transition-colors mt-6"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

      {/* bKash Payment Modal */}
      {showBkashModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
            <h2 className="text-xl font-bold mb-4 text-center">Pay with bKash</h2>
            <div className="text-center mb-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/BKash_logo.svg/200px-BKash_logo.svg.png" alt="bKash" className="w-24 h-auto mx-auto mb-2" />
              <p className="text-sm text-gray-600">Send payment to: <span className="font-medium text-pink-600">01712345678</span></p>
              <p className="text-lg font-bold text-pink-600">Amount: ৳{total.toLocaleString()}</p>
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                bKash Transaction ID
              </label>
              <input 
                type="text" 
                value={bkashTxnId}
                onChange={(e) => setBkashTxnId(e.target.value)}
                placeholder="Enter your Transaction ID" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-pink-500 focus:border-pink-500"
              />
            </div>
            
            <div className="flex space-x-3">
              <button 
                onClick={() => setShowBkashModal(false)}
                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 rounded transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={submitBkashPayment}
                disabled={!bkashTxnId}
                className="flex-1 bg-pink-600 hover:bg-pink-700 disabled:bg-gray-400 text-white py-2 rounded transition-colors"
              >
                Submit Payment
              </button>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </div>
  );
};

export default Checkout;

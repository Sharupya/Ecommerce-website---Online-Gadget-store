
import React from 'react';
import { ArrowLeft, Search, HelpCircle, MessageCircle, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Support = () => {
  const faqs = [
    {
      question: "How do I track my order?",
      answer: "You can track your order by logging into your account and visiting the 'My Orders' section. You'll receive a tracking number via SMS and email once your order is shipped."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for most items. Products must be in original condition with all accessories and packaging. Digital downloads and personalized items cannot be returned."
    },
    {
      question: "Do you offer warranty on products?",
      answer: "Yes, all our products come with manufacturer warranty. Additionally, we provide our own StarTech warranty for select items. Warranty terms vary by product category."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash on delivery, bKash, Nagad, Rocket, credit/debit cards, and bank transfers. All payments are processed securely."
    }
  ];

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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Help Center</h1>
            <p className="text-xl text-gray-600">How can we help you today?</p>
          </div>

          {/* Search */}
          <div className="relative mb-12">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full px-6 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-lg"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <Phone className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our support team</p>
              <a href="tel:+8801234567890" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                Call Now
              </a>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Live Chat</h3>
              <p className="text-gray-600 mb-4">Chat with our support agents</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors">
                Start Chat
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow">
              <HelpCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">FAQ</h3>
              <p className="text-gray-600 mb-4">Find answers to common questions</p>
              <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                View FAQs
              </button>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
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

export default Support;

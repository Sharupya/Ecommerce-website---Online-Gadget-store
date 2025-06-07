
import React from 'react';
import { ArrowLeft, Users, Briefcase, Award, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Careers = () => {
  const jobOpenings = [
    {
      title: "Frontend Developer",
      department: "Technology",
      location: "Dhaka",
      type: "Full-time",
      experience: "2-4 years"
    },
    {
      title: "Sales Executive",
      department: "Sales",
      location: "Dhaka, Chittagong",
      type: "Full-time",
      experience: "1-3 years"
    },
    {
      title: "Digital Marketing Specialist",
      department: "Marketing",
      location: "Dhaka",
      type: "Full-time",
      experience: "2-5 years"
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600">Build your career with Bangladesh's leading tech retailer</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Briefcase className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">50+</h3>
              <p className="text-gray-600">Open Positions</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">10+</h3>
              <p className="text-gray-600">Office Locations</p>
            </div>
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <TrendingUp className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-800 mb-2">95%</h3>
              <p className="text-gray-600">Employee Satisfaction</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Growth Opportunities</h3>
                <p className="text-gray-600">Advance your career with continuous learning and development programs.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Competitive Benefits</h3>
                <p className="text-gray-600">Enjoy competitive salary, health insurance, and performance bonuses.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Innovative Environment</h3>
                <p className="text-gray-600">Work with cutting-edge technology in a dynamic, fast-paced environment.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Work-Life Balance</h3>
                <p className="text-gray-600">Flexible working arrangements and comprehensive leave policies.</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Current Openings</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">{job.title}</h3>
                      <div className="space-y-1 text-gray-600">
                        <p><strong>Department:</strong> {job.department}</p>
                        <p><strong>Location:</strong> {job.location}</p>
                        <p><strong>Type:</strong> {job.type}</p>
                        <p><strong>Experience:</strong> {job.experience}</p>
                      </div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View All Openings
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Careers;

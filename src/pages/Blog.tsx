
import React from 'react';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "Top 10 Gaming Laptops of 2024",
      excerpt: "Discover the best gaming laptops that offer incredible performance for both casual and professional gamers.",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=400&h=250&fit=crop",
      author: "Rakib Ahmed",
      date: "March 15, 2024",
      category: "Gaming",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Your First PC: A Complete Guide",
      excerpt: "Step-by-step guide to building your own PC from scratch, including component selection and assembly tips.",
      image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=250&fit=crop",
      author: "Fatima Khan",
      date: "March 12, 2024",
      category: "Hardware",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "MacBook vs Windows Laptop: Which to Choose?",
      excerpt: "Comprehensive comparison between MacBook and Windows laptops to help you make the right choice.",
      image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=400&h=250&fit=crop",
      author: "Sajib Rahman",
      date: "March 10, 2024",
      category: "Reviews",
      readTime: "6 min read"
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

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Tech Blog</h1>
            <p className="text-xl text-gray-600">Latest news, reviews, and guides from the tech world</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <Tag className="w-4 h-4 mr-1" />
                      {article.category}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${article.id}`}>{article.title}</Link>
                  </h2>
                  
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      <span>{article.author}</span>
                    </div>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  
                  <Link
                    to={`/blog/${article.id}`}
                    className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Load More Articles
            </button>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;

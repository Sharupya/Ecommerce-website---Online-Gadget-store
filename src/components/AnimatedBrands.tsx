
import React from 'react';

const AnimatedBrands = () => {
  const brands = [
    { name: "Apple", logo: "🍎" },
    { name: "Dell", logo: "🏢" },
    { name: "HP", logo: "🖨️" },
    { name: "Lenovo", logo: "💼" },
    { name: "ASUS", logo: "⚡" },
    { name: "MSI", logo: "🎯" },
    { name: "Acer", logo: "🔧" },
    { name: "Samsung", logo: "📱" },
    { name: "Intel", logo: "🔵" },
    { name: "AMD", logo: "🔴" }
  ];

  // Duplicate brands for infinite scroll effect
  const duplicatedBrands = [...brands, ...brands];

  return (
    <section className="py-12 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Trusted Brands</h2>
        
        <div className="relative">
          <div className="flex animate-scroll space-x-8">
            {duplicatedBrands.map((brand, index) => (
              <div 
                key={index}
                className="flex-shrink-0 bg-white rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-110 min-w-[150px]"
                style={{
                  animation: `brandFloat 10s linear infinite ${index * 0.5}s`
                }}
              >
                <div className="text-3xl mb-2 transition-transform duration-300 hover:scale-125">
                  {brand.logo}
                </div>
                <h3 className="font-semibold text-gray-800">{brand.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes brandFloat {
          0% {
            transform: translateX(100vw) scale(0.8);
          }
          50% {
            transform: translateX(0) scale(1.1);
          }
          100% {
            transform: translateX(-100vw) scale(0.8);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default AnimatedBrands;

// components/Services.jsx
import React from 'react';

const services = [
  {
    title: "Real Estate Solutions",
    description: "Innovative property investment strategies leveraging market analytics",
    icon: "🏢",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "Marketing Transformation",
    description: "Data-driven campaigns powered by consumer behavior insights",
    icon: "📈",
    image: "https://images.unsplash.com/photo-1556155092-8707de31f9c4?auto=format&fit=crop&w=1350&q=80"
  },
  {
    title: "AI/ML Consultancy",
    description: "Custom machine learning solutions for business optimization",
    icon: "🤖",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1350&q=80"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-16">
          Comprehensive Business Services
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Business Development Partnership</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            From initial concept to market leadership, we provide end-to-end support with our 
            proven framework for scaling businesses in high-growth sectors.
          </p>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import PropTypes from 'prop-types';

function ServiceCard({ title, description, icon, features }) {
  return (
    <article 
      className="relative group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] overflow-hidden"
      role="region"
      aria-labelledby={`service-${title.toLowerCase().replace(' ', '-')}-title`}
    >
      {/* Gradient Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Animated Border */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-100 rounded-2xl transition-all duration-500" />
      
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

      <div className="relative p-8 h-full flex flex-col">
        {/* Icon Section with Animation */}
        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
          <div 
            className="text-5xl bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"
            role="img"
            aria-hidden="true"
          >
            {icon}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1">
          <h3 
            id={`service-${title.toLowerCase().replace(' ', '-')}-title`}
            className="text-2xl font-bold text-gray-900 mb-4 leading-tight"
          >
            {title}
          </h3>
          
          <p className="text-gray-600 mb-6 text-lg leading-relaxed">
            {description}
          </p>

          {/* Features List */}
          {features && (
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li 
                  key={index}
                  className="flex items-center text-gray-500 hover:text-gray-700 transition-colors"
                >
                  <svg 
                    className="w-5 h-5 mr-3 text-cyan-500 flex-shrink-0" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* CTA Button */}
        <div className="mt-auto pt-6 border-t border-gray-100 group-hover:border-transparent transition-colors">
          <button 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            aria-label={`Learn more about ${title}`}
          >
            Explore Service
            <svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </button>
        </div>
      </div>
    </article>
  );
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  features: PropTypes.arrayOf(PropTypes.string)
};

ServiceCard.defaultProps = {
  features: []
};

export default ServiceCard;
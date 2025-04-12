// components/Innovation.jsx
import React from 'react';

export default function Innovation() {
  return (
    <section id="innovation" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* टेक इंटीग्रेशन सेक्शन */}
        <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* पैटर्न बैकग्राउंड */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://img.freepik.com/free-vector/digital-circuit-board-background_53876-90954.jpg')] bg-cover" />
          
          <div className="relative z-10 p-12">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  Advanced Technology
                </span><br />
                Integration Ecosystem
              </h2>
              <p className="text-xl text-blue-200">
                Harnessing cutting-edge technologies to power intelligent investment decisions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* AI Algorithms कार्ड */}
              <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                <div className="mb-6">
                <img
  src="https://cdn-icons-png.flaticon.com/512/2704/2704022.png"
  className="w-24 h-24 mx-auto opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all"
  alt="AI Technology Icon"
  loading="lazy"
/>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">AI Algorithms</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Predictive Analytics Engine
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Neural Network Models
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Real-time Risk Assessment
                  </li>
                </ul>
              </div>

              {/* Machine Learning कार्ड */}
              <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                <div className="mb-6">
                  <img 
                    src="https://img.icons8.com/clouds/200/learning.png" 
                    className="w-24 h-24 mx-auto opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all"
                    alt="Machine Learning Icon"
                  />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Machine Learning</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Automated Pattern Recognition
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Deep Learning Frameworks
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Continuous Learning Systems
                  </li>
                </ul>
              </div>

              {/* Data Visualization कार्ड */}
              <div className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 shadow-lg hover:shadow-2xl">
                <div className="mb-6">
                  <img 
                    src="https://img.icons8.com/clouds/200/data-configuration.png" 
                    className="w-24 h-24 mx-auto opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all"
                    alt="Data Visualization Icon"
                  />
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Data Visualization</h3>
                <ul className="space-y-3 text-blue-100">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Interactive 3D Dashboards
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Real-time Analytics
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                    </svg>
                    Custom Reporting Tools
                  </li>
                </ul>
              </div>
            </div>

            {/* इंटरैक्टिव बटन */}
            <div className="mt-16 text-center">
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-yellow-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Tech Capabilities →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
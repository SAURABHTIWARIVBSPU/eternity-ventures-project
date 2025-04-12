// components/Contact.jsx
import React from 'react';

export default function Contact() {
  return (
    <section 
      id="contact" 
      className="relative py-24 bg-gradient-to-br from-blue-900 to-blue-800 text-white overflow-hidden"
      aria-label="Contact Section"
    >
      {/* डेकोरेटिव बैकग्राउंड एलिमेंट्स */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* संपर्क जानकारी सेक्शन */}
          <div className="space-y-10 lg:pr-20">
            <div className="space-y-8">
              <h2 className="text-5xl font-bold leading-tight bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                Start Your Innovation Journey
              </h2>
              <p className="text-xl text-blue-100/90 leading-relaxed">
                Partner with our global network of experts to transform your vision into reality.
              </p>
            </div>

            <div className="space-y-8">
              {/* संपर्क आइटम्स */}
              <div className="flex items-start group">
                <div className="flex-shrink-0 p-3 bg-yellow-400/10 rounded-lg mr-6 transition-all group-hover:bg-yellow-400/20">
                  <svg 
                    className="w-8 h-8 text-yellow-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-yellow-400">General Inquiries</p>
                  <a 
                    href="mailto:partnerships@eternityventures.com" 
                    className="text-xl font-medium hover:text-yellow-400 transition-colors"
                    aria-label="Send email to partnerships@eternityventures.com"
                  >
                    partnerships@eternityventures.com
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 p-3 bg-yellow-400/10 rounded-lg mr-6 transition-all group-hover:bg-yellow-400/20">
                  <svg 
                    className="w-8 h-8 text-yellow-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-yellow-400">Global Headquarters</p>
                  <a 
                    href="tel:+15551234567" 
                    className="text-xl font-medium hover:text-yellow-400 transition-colors"
                    aria-label="Call +1 (555) 123-4567"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start group">
                <div className="flex-shrink-0 p-3 bg-yellow-400/10 rounded-lg mr-6 transition-all group-hover:bg-yellow-400/20">
                  <svg 
                    className="w-8 h-8 text-yellow-400" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-yellow-400">Innovation Hub</p>
                  <p className="text-xl font-medium">123 Innovation Drive<br />Silicon Valley, CA 94025</p>
                </div>
              </div>
            </div>
          </div>

          {/* इंटरैक्टिव फॉर्म सेक्शन */}
          <div className="bg-white rounded-2xl p-10 shadow-2xl hover:shadow-3xl transition-shadow duration-300">
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">Schedule Consultation</h3>
                <p className="text-gray-600">Let's discuss your next big idea</p>
              </div>

              <form className="space-y-6">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                      placeholder="John Carter"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Work Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                      placeholder="john@company.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details</label>
                    <textarea
                      id="message"
                      rows="4"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
                      placeholder="Describe your innovation vision..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-yellow-400/30"
                  aria-label="Submit consultation request"
                >
                  Schedule Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
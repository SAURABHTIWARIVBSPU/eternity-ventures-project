import React from "react";

const teamMembers = [
  {
    name: "Aarav Mehta",
    role: "Investment Strategist",
    description:
      "Master in capital allocation and equity ventures with a sharp eye for high-growth startups.",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    name: "Priya Sharma",
    role: "Business Expansion Lead",
    description:
      "Scaling operations globally with strategic market entry expertise and partnership development.",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    name: "Rohan Kapoor",
    role: "Real Estate Innovator",
    description:
      "Fusing technology with property investment to redefine modern real estate landscapes.",
    image: "https://i.pravatar.cc/150?img=7",
  },
].sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical sorting

function Team() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our team brings together deep domain expertise across investment,
            innovation, and scalable business solutions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-4 border-blue-100"
              />
              <h3 className="text-xl font-bold text-center text-blue-800">
                {member.name}
              </h3>
              <p className="text-center text-sm text-gray-500 mb-2">
                {member.role}
              </p>
              <p className="text-center text-gray-600 text-sm">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision & Roadmap Section */}
        <div className="mt-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-geometric.png')] opacity-10" />
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px]" />
          
          <div className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 rounded-3xl p-10 lg:p-14 border border-blue-700/30 shadow-2xl">
            
            {/* Section Title */}
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-300 bg-clip-text text-transparent mb-4">
                Vision 2030 Roadmap
              </h3>
              <p className="text-blue-200 max-w-2xl mx-auto">
                Charting the course for intelligent growth and sustainable innovation
              </p>
            </div>

            {/* Roadmap Steps */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {[
                {
                  number: 1,
                  icon: '🌍',
                  title: "Global Expansion",
                  desc: "Establishing innovation hubs across 20+ emerging markets",
                  color: "bg-gradient-to-r from-cyan-400 to-blue-500"
                },
                {
                  number: 2,
                  icon: '🧠', 
                  title: "AI Innovation",
                  desc: "Deploying 100+ enterprise-grade AI solutions by 2025",
                  color: "bg-gradient-to-r from-purple-400 to-blue-600"
                },
                {
                  number: 3,
                  icon: '♻️',
                  title: "Sustainability",
                  desc: "Carbon-neutral operations & ethical tech initiatives",
                  color: "bg-gradient-to-r from-green-400 to-cyan-600"
                }
              ].map((step, index) => (
                <div 
                  key={index}
                  className="relative bg-white/5 p-8 rounded-2xl border border-blue-700/30 transition-all hover:shadow-lg"
                >
                  <div className="space-y-6 text-center">
                    <div className={`${step.color} inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 text-2xl`}>
                      <span className="text-white">{step.icon}</span>
                    </div>
                    <div className="text-cyan-400 font-bold text-xl mb-2">{step.title}</div>
                    <p className="text-blue-200 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Text */}
            <div className="mt-14 text-center border-t border-blue-700/30 pt-10">
              <p className="text-lg font-semibold text-cyan-300">
                Innovating Responsibly • Growing Sustainably • Scaling Intelligently
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
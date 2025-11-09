import React, { useState } from 'react';
import { Send } from 'lucide-react';

const AboutMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    phone: '',
    email: ''
  });

  const skills = [
    { icon: '🧩', label: 'System Architecture' },
    { icon: '⚙️', label: 'Microservices & APIs' },
    { icon: '📱', label: 'Mobile Development' },
    { icon: '💎', label: 'Clean Code' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
  };

  return (
    <section className="w-full min-h-screen bg-[#0a0e1a] relative overflow-hidden py-20 px-5 md:px-20">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Geometric lines with our palette */}
        <div className="absolute top-20 right-20 w-96 h-96 border border-blue-100/20 rounded-full"></div>
        <div className="absolute top-40 right-40 w-64 h-64 border border-purple-100/20 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 border border-orange-100/20 rounded-full"></div>
        
        {/* Animated stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-50 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Decorative stars */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          >
            {i % 3 === 0 ? (
              <div className="text-orange-100 text-xl opacity-30">✦</div>
            ) : i % 3 === 1 ? (
              <div className="text-blue-100 text-sm opacity-20">●</div>
            ) : (
              <div className="text-purple-100 text-lg opacity-30">✦</div>
            )}
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Content Container */}
        <div className="bg-gradient-to-br from-[#131822] to-[#1c2333] rounded-[2rem] shadow-2xl shadow-blue-100/10 overflow-hidden border border-[#2d3548] hover:border-blue-100/30 transition-all duration-500">
          <div className="grid grid-cols-1 xl:grid-cols-12 min-h-[600px]">
            
            {/* Left Side - Photo & Contact Card */}
            <div className="xl:col-span-5 relative p-10 md:p-16 flex flex-col justify-center items-center">
              {/* Decorative circles around photo */}
              <div className="absolute top-10 left-10 w-32 h-32 border-2 border-blue-100/30 rounded-full"></div>
              <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-orange-100/30 rounded-full"></div>
              <div className="absolute top-1/3 right-20 text-4xl text-orange-100 opacity-30">✦</div>
              <div className="absolute bottom-1/4 left-20 text-2xl text-blue-100 opacity-30">●</div>
              
              {/* Photo & Card Container */}
              <div className="relative w-full max-w-sm">
                {/* Background Circle Frame */}
                <div className="relative w-full aspect-square mb-[-80px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-20 blur-2xl"></div>
                  
                  {/* Circle Border Frame */}
                  <div className="absolute inset-0 border-4 border-[#2d3548] rounded-full"></div>
                  
                  {/* Profile Photo - Popping Out */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="https://i.imgur.com/iR8oJZz.jpeg"
                      alt="Profile"
                      className="w-[110%] h-[110%] object-cover rounded-full shadow-2xl shadow-blue-100/30 relative z-10"
                      style={{
                        clipPath: 'circle(50% at 50% 45%)'
                      }}
                    />
                  </div>
                  
                  {/* Decorative glows */}
                  <div className="absolute -top-6 -right-6 w-16 h-16 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
                  <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-100 rounded-full opacity-20 blur-xl"></div>
                </div>

                {/* Contact Card - Overlapping */}
                <div className="relative z-20 w-full bg-[#2d3548] rounded-2xl border-2 border-blue-100/30 p-6 shadow-xl hover:shadow-2xl hover:shadow-blue-100/20 hover:border-blue-100/50 transition-all duration-300 pt-24">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white-50">Contact Me</h3>
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-100 to-orange-200 rounded-lg flex items-center justify-center transform rotate-12 shadow-lg">
                      <Send className="w-4 h-4 text-white transform -rotate-12" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-50 mb-1 font-medium">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Alno"
                          className="w-full px-3 py-2 bg-[#1c2333] border border-[#2d3548] rounded-lg text-sm text-white-50 placeholder:text-gray-100 focus:border-blue-100 focus:outline-none transition-all duration-300"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-50 mb-1 font-medium">Surname</label>
                        <input
                          type="text"
                          name="surname"
                          value={formData.surname}
                          onChange={handleChange}
                          placeholder="Sabetha"
                          className="w-full px-3 py-2 bg-[#1c2333] border border-[#2d3548] rounded-lg text-sm text-white-50 placeholder:text-gray-100 focus:border-blue-100 focus:outline-none transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-gray-50 mb-1 font-medium">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 234 567 890"
                        className="w-full px-3 py-2 bg-[#1c2333] border border-[#2d3548] rounded-lg text-sm text-white-50 placeholder:text-gray-100 focus:border-blue-100 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-gray-50 mb-1 font-medium">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-3 py-2 bg-[#1c2333] border border-[#2d3548] rounded-lg text-sm text-white-50 placeholder:text-gray-100 focus:border-blue-100 focus:outline-none transition-all duration-300"
                      />
                    </div>

                    <button
                      onClick={handleSubmit}
                      className="w-full py-3 bg-gradient-to-r from-orange-100 to-orange-200 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-100/30 transition-all duration-300 hover:scale-105 text-sm flex items-center justify-center gap-2 mt-4"
                    >
                      GET IN TOUCH
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Description */}
            <div className="xl:col-span-7 relative p-10 md:p-16 flex flex-col justify-center">
              {/* Decorative elements */}
              <div className="absolute top-20 right-20 text-5xl text-orange-100 opacity-20 animate-pulse">✦</div>
              <div className="absolute bottom-32 left-10 text-3xl text-blue-100 opacity-20">●</div>
              
              {/* Skills Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-[#2d3548] border border-blue-100/30 rounded-full text-sm font-medium text-blue-50 hover:border-blue-100 hover:bg-[#1c2333] transition-all duration-300"
                  >
                    <span className="text-orange-100">{skill.icon}</span>
                    <span>{skill.label}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="space-y-4 text-gray-50">
                <p className="text-base md:text-lg leading-relaxed">
                    I love building apps that connect digital experiences with hardware and AI.
                </p>
                <p className="text-base md:text-lg leading-relaxed opacity-90">
                    My focus is on creating seamless systems that integrate software, mobile, and AI solutions.
                </p>
                <p className="text-base md:text-lg leading-relaxed opacity-90">
                    Always exploring, prototyping, and learning to turn ideas into working products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
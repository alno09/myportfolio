import React, { useState } from 'react';
import { Code, Smartphone, Cpu, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const skillsData = [
    {
      name: 'React',
      category: 'Frontend',
      icon: '⚛️',
      color: 'from-blue-100 to-purple-100'
    },
    {
      name: 'Node.js',
      category: 'Backend',
      icon: '🟢',
      color: 'from-blue-100 to-orange-100'
    },
    {
      name: '.NET',
      category: 'Backend',
      icon: '🔷',
      color: 'from-blue-100 to-blue-200'
    },
    {
      name: 'Laravel',
      category: 'Backend',
      icon: '🔺',
      color: 'from-orange-100 to-orange-200'
    },
    {
      name: 'Python',
      category: 'Backend',
      icon: '🐍',
      color: 'from-blue-100 to-orange-100'
    },
    {
      name: 'PostgreSQL',
      category: 'Database',
      icon: '🐘',
      color: 'from-blue-100 to-blue-200'
    },
    {
      name: 'MySQL',
      category: 'Database',
      icon: '🗄️',
      color: 'from-orange-100 to-blue-100'
    },
    {
      name: 'Git',
      category: 'Tools',
      icon: '🔺',
      color: 'from-orange-200 via-red-200 to-red-300'
    },
    {
      name: 'TailwindCSS',
      category: 'Frontend',
      icon: '🎨',
      color: 'from-blue-100 to-blue-200'
    },
    {
      name: 'Three.js',
      category: 'Frontend',
      icon: '🎮',
      color: 'from-orange-100 to-orange-200'
    },
    {
      name: 'Kafka',
      category: 'Backend',
      icon: '📨',
      color: 'from-blue-100 to-purple-100'
    },
    {
      name: 'RabbitMQ',
      category: 'Backend',
      icon: '🐰',
      color: 'from-orange-100 to-orange-200'
    },
    {
      name: 'ClickHouse',
      category: 'Database',
      icon: '📊',
      color: 'from-yellow-100 to-yellow-300'
    },
    {
      name: 'Airflow',
      category: 'Tools',
      icon: '🌀',
      color: 'from-sky-200 via-teal-200 to-blue-300'
    },
    {
      name: 'Kotlin',
      category: 'Mobile',
      icon: '📱',
      color: 'from-purple-100 to-purple-200'
    },
    {
      name: 'Jetpack Compose',
      category: 'Mobile',
      icon: '🎨',
      color: 'from-purple-100 to-blue-100'
    },
    {
      name: 'ESP32',
      category: 'IoT',
      icon: '📡',
      color: 'from-orange-100 to-purple-100'
    },
    {
      name: 'Arduino IDE',
      category: 'IoT',
      icon: '🔌',
      color: 'from-blue-100 to-orange-100'
    }
  ];


  const categories = [
    { name: 'All', icon: Code, count: skillsData.length },
    { name: 'Frontend', icon: Code, count: skillsData.filter(s => s.category === 'Frontend').length },
    { name: 'Backend', icon: Database, count: skillsData.filter(s => s.category === 'Backend').length },
    { name: 'Database', icon: Database, count: skillsData.filter(s => s.category === 'Database').length },
    { name: 'Tools', icon: Wrench, count: skillsData.filter(s => s.category === 'Tools').length },
    { name: 'Mobile', icon: Smartphone, count: skillsData.filter(s => s.category === 'Mobile').length },
    { name: 'IoT', icon: Cpu, count: skillsData.filter(s => s.category === 'IoT').length }
  ];

  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id='skills' className="w-full min-h-screen bg-[#0a0e1a] py-20 px-5 md:px-20 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 border border-blue-100/10 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 border border-purple-100/10 rounded-full"></div>
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
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Tech{' '}
            <span className="bg-gradient-to-r from-purple-100 via-blue-50 to-orange-100 bg-clip-text text-transparent">
              Stack
            </span>
          </h2>
          <p className="text-gray-50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
             collection of technologies I use to build and connect systems across software, data, AI, and hardware.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`group flex items-center gap-2 px-5 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.name
                  ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-white shadow-lg shadow-blue-100/30 scale-105'
                  : 'bg-[#2d3548] text-gray-50 border border-[#2d3548] hover:border-blue-100/50 hover:text-blue-50'
              }`}
            >
              <category.icon className="w-4 h-4" />
              <span>{category.name}</span>
              <span className={`px-2 py-0.5 rounded-full text-xs ${
                activeCategory === category.name 
                  ? 'bg-white/20' 
                  : 'bg-[#1c2333]'
              }`}>
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative bg-gradient-to-br from-[#131822] to-[#1c2333] border-2 border-[#2d3548] rounded-2xl p-6 hover:border-blue-100/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100/20"
              style={{
                animationDelay: `${index * 0.05}s`
              }}
            >
              {/* Background Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon & Category Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <span className="px-3 py-1 bg-[#2d3548] text-xs font-medium text-blue-50 rounded-full border border-blue-100/30">
                    {skill.category}
                  </span>
                </div>

                {/* Skill Name */}
                <h3 className="text-xl font-bold text-white-50 mb-3 group-hover:text-blue-50 transition-colors duration-300">
                  {skill.name}
                </h3>

              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-5 blur-xl rounded-2xl`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-[#131822] to-[#1c2333] border border-[#2d3548] rounded-2xl p-6 text-center hover:border-blue-100/30 transition-all duration-300">
            <div className="text-3xl mb-2">💻</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-50 to-purple-100 bg-clip-text text-transparent mb-1">
              {skillsData.filter(s => s.category === 'Frontend' || s.category === 'Backend').length}
            </div>
            <div className="text-sm text-gray-50">Web Technologies</div>
          </div>

          <div className="bg-gradient-to-br from-[#131822] to-[#1c2333] border border-[#2d3548] rounded-2xl p-6 text-center hover:border-purple-100/30 transition-all duration-300">
            <div className="text-3xl mb-2">📱</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-purple-100 to-blue-50 bg-clip-text text-transparent mb-1">
              {skillsData.filter(s => s.category === 'Mobile').length}
            </div>
            <div className="text-sm text-gray-50">Mobile Frameworks</div>
          </div>

          <div className="bg-gradient-to-br from-[#131822] to-[#1c2333] border border-[#2d3548] rounded-2xl p-6 text-center hover:border-orange-100/30 transition-all duration-300">
            <div className="text-3xl mb-2">🔌</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-orange-100 to-orange-200 bg-clip-text text-transparent mb-1">
              {skillsData.filter(s => s.category === 'IoT').length}
            </div>
            <div className="text-sm text-gray-50">IoT Platforms</div>
          </div>

          <div className="bg-gradient-to-br from-[#131822] to-[#1c2333] border border-[#2d3548] rounded-2xl p-6 text-center hover:border-blue-100/30 transition-all duration-300">
            <div className="text-3xl mb-2">🗄️</div>
            <div className="text-3xl font-bold bg-gradient-to-r from-blue-100 to-purple-100 bg-clip-text text-transparent mb-1">
              {skillsData.filter(s => s.category === 'Database').length}
            </div>
            <div className="text-sm text-gray-50">Database Systems</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

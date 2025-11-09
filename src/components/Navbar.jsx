import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'showcase', label: 'PROJECTS' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Navbar height offset
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`fixed w-full left-0 right-0 top-0 z-[100] transition-all duration-300 ${
        scrolled 
          ? 'bg-[#131822] shadow-lg border-b border-[#2d3548]' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 py-5 flex items-center justify-between">
        
        {/* Logo / Name */}
        <button
          onClick={() => scrollToSection('hero')}
          className="text-xl md:text-2xl font-bold transition-all duration-300 hover:scale-105 cursor-pointer group"
        >
          <span className="text-white-50 group-hover:text-blue-50 transition-colors duration-300">Alno</span>{' '}
          <span className="text-orange-100 group-hover:text-orange-200 transition-colors duration-300">Sabetha</span>
        </button>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.id 
                    ? 'text-blue-50' 
                    : 'text-gray-50 hover:text-white-50'
                }`}
              >
                {item.label}
                
                {/* Animated Underline */}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-blue-100 to-purple-100 transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'w-full' 
                      : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          onClick={() => scrollToSection('aboutme')}
          className="hidden md:block px-6 py-2.5 bg-gradient-to-r from-orange-100 to-orange-200 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-100/30 transition-all duration-300 hover:scale-105 text-sm"
        >
          REACH OUT
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white-50 hover:text-blue-50 transition-colors duration-300"
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        id="mobile-menu"
        className="hidden md:hidden bg-[#131822] border-t border-[#2d3548]"
      >
        <ul className="px-5 py-4 space-y-3">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  scrollToSection(item.id);
                  document.getElementById('mobile-menu').classList.add('hidden');
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-100/10 text-blue-50 border-l-4 border-blue-100'
                    : 'text-gray-50 hover:bg-[#2d3548] hover:text-white-50'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                scrollToSection('aboutme');
                document.getElementById('mobile-menu').classList.add('hidden');
              }}
              className="block w-full px-4 py-3 bg-gradient-to-r from-orange-100 to-orange-200 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-orange-100/30 transition-all duration-300 text-sm text-center"
            >
              REACH OUT
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
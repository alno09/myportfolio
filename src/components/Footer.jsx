import React from 'react';
import { Github, Linkedin, Mail, Twitter, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: Github, 
      label: 'GitHub',
      url: 'https://github.com/yourusername',
      color: 'hover:bg-blue-100/10 hover:border-blue-100'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      color: 'hover:bg-blue-100/10 hover:border-blue-100'
    },
    { 
      icon: Twitter, 
      label: 'Twitter',
      url: 'https://twitter.com/yourusername',
      color: 'hover:bg-purple-100/10 hover:border-purple-100'
    },
    { 
      icon: Instagram, 
      label: 'Instagram',
      url: 'https://instagram.com/yourusername',
      color: 'hover:bg-orange-100/10 hover:border-orange-100'
    },
    { 
      icon: Mail, 
      label: 'Email',
      url: 'mailto:your@email.com',
      color: 'hover:bg-orange-100/10 hover:border-orange-100'
    }
  ];

  const footerLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#showcase' },
    { label: 'Contact', href: '#aboutme' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="w-full bg-gradient-to-b from-[#131822] to-[#0a0e1a] border-t border-[#2d3548] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 w-64 h-64 border border-blue-100/10 rounded-full"></div>
        <div className="absolute bottom-10 left-20 w-48 h-48 border border-purple-100/10 rounded-full"></div>
        {[...Array(20)].map((_, i) => (
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

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-10 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Column 1 - Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">
              <span className="text-white-50">Alno</span>{' '}
              <span className="text-orange-100">Sabetha</span>
            </h3>
            <p className="text-gray-50 text-sm leading-relaxed max-w-xs">
              Building innovative digital experiences with passion for design, 
              code, and user-centered solutions.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-50">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>Available for freelance projects</span>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white-50">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-50 hover:text-blue-50 transition-colors duration-300 text-sm group flex items-center gap-2"
                  >
                    <span className="w-0 h-0.5 bg-blue-100 group-hover:w-4 transition-all duration-300"></span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Social Media */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white-50">Connect With Me</h4>
            <p className="text-gray-50 text-sm">
              Let's build something amazing together!
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 bg-[#2d3548] border border-[#2d3548] rounded-xl transition-all duration-300 ${social.color} hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-50 group-hover:text-white-50 transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#2d3548] to-transparent mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-50">
          <p className="text-center md:text-left">
            © {currentYear} <span className="text-blue-50 font-medium">Alno Sabetha</span>. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => scrollToSection('#hero')}
              className="hover:text-blue-50 transition-colors duration-300"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => scrollToSection('#hero')}
              className="hover:text-blue-50 transition-colors duration-300"
            >
              Terms of Service
            </button>
          </div>

          <p className="text-center md:text-right flex items-center gap-2">
            Made with <span className="text-orange-100 animate-pulse">❤</span> using React
          </p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="absolute bottom-8 right-8 p-3 bg-gradient-to-r from-blue-100 to-purple-100 text-white rounded-full shadow-lg hover:shadow-blue-100/50 transition-all duration-300 hover:scale-110 group"
        aria-label="Scroll to top"
      >
        <svg 
          className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
};

export default Footer;
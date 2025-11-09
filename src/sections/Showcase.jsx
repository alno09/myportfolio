import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Showcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Website', 'Apps', 'IoT', 'AI'];

  const projects = [
    {
      id: 1,
      title: "POS App",
      description: "Smart Point-of-Sale app for real-time transaction management.",
      image: "https://st3.depositphotos.com/10325516/15834/i/450/depositphotos_158349312-stock-photo-point-of-sale-system-for.jpg",
      tags: ["Jetpack Compose", "REST API", "Kotlin"],
      category: "Apps",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Self-order Kiosk",
      description: "Interactive kiosk interface with Bluetooth printer support.",
      image: "https://images.unsplash.com/photo-1559137781-875af01c14bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8a2lvc2t8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000",
      tags: ["Kotlin", "Bluetooth", "Thermal Printer"],
      category: "Apps",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Smart Dispenser",
      description: "Smart IoT dispenser with QR-based order validation.",
      image: "https://media.licdn.com/dms/image/v2/D4D12AQGqgiYkac4sWA/article-cover_image-shrink_720_1280/B4DZde6NqrHkAI-/0/1749644017853?e=2147483647&v=beta&t=0FGpx_4WBRox3ucnGLpPD6C-DIZiTFbKHVJUx1sEZaU",
      tags: ["ESP32", "C++", "QR Validation"],
      category: "IoT",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];



  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id='showcase' className="w-full min-h-screen bg-[#0a0e1a] py-20 px-5 md:px-20 relative overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-100 via-blue-50 to-orange-100 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-50 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects. Each project was carefully crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-white shadow-lg shadow-blue-100/30 scale-105'
                  : 'bg-[#2d3548] text-gray-50 border border-[#2d3548] hover:border-blue-100/50 hover:text-blue-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Swiper Carousel */}
        <div className="relative px-12">
          <Swiper
            key={activeCategory}
            modules={[Navigation, Pagination, Keyboard]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: `.swiper-button-prev-${activeCategory}`,
              nextEl: `.swiper-button-next-${activeCategory}`,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="pb-12"
          >
            {filteredProjects.map((project) => (
              <SwiperSlide key={project.id} className="h-auto">
                <div className="group relative bg-[#131822] border border-[#2d3548] rounded-xl overflow-hidden hover:border-blue-100/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-100/20 h-full flex flex-col">
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#131822] via-transparent to-transparent opacity-60" />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/90 to-purple-100/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                      <a
                        href={project.liveUrl}
                        className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                        onClick={(e) => e.preventDefault()}
                      >
                        <ExternalLink className="w-6 h-6 text-white" />
                      </a>
                      <a
                        href={project.githubUrl}
                        className="p-4 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-all duration-300 transform hover:scale-110"
                        onClick={(e) => e.preventDefault()}
                      >
                        <Github className="w-6 h-6 text-white" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* Category Badge */}
                    <div className="mb-3">
                      <span className="px-3 py-1 text-xs font-bold bg-gradient-to-r from-orange-100 to-orange-200 text-white rounded-full">
                        {project.category}
                      </span>
                    </div>

                    {/* Tech Stack Tags - Fixed Height */}
                    <div className="flex flex-wrap gap-2 mb-4 min-h-[32px]">
                      {project.tags.slice(0, 3).map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-[#2d3548] text-blue-50 rounded-full border border-blue-100/30 hover:border-blue-100 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="px-3 py-1 text-xs font-medium bg-[#2d3548] text-blue-50 rounded-full border border-blue-100/30">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Title - Fixed 2 lines */}
                    <h3 className="text-xl md:text-2xl font-bold text-white-50 mb-3 group-hover:text-blue-50 transition-colors duration-300 line-clamp-2 min-h-[3.5rem]">
                      {project.title}
                    </h3>

                    {/* Description - Fixed 3 lines */}
                    <p className="text-gray-50 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                      {project.description}
                    </p>

                    {/* Action Buttons - Always at bottom */}
                    <div className="flex gap-3 pt-4 border-t border-[#2d3548] mt-auto">
                      <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 text-white rounded-lg hover:shadow-lg hover:shadow-blue-100/30 transition-all duration-300 text-sm font-medium">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </button>
                      <button className="p-2 border border-[#2d3548] rounded-lg hover:border-purple-100 hover:bg-[#2d3548] transition-all duration-300">
                        <Github className="w-5 h-5 text-gray-50" />
                      </button>
                    </div>
                  </div>

                  {/* Card Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100/10 via-transparent to-purple-100/10 blur-xl" />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Simple Arrow Navigation */}
          <button
            className={`swiper-button-prev-${activeCategory} absolute left-0 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:scale-125 group`}
          >
            <ChevronLeft className="w-10 h-10 text-blue-50 drop-shadow-lg group-hover:text-purple-100 transition-colors duration-300" strokeWidth={3} />
          </button>
          <button
            className={`swiper-button-next-${activeCategory} absolute right-0 top-1/2 -translate-y-1/2 z-20 transition-all duration-300 hover:scale-125 group`}
          >
            <ChevronRight className="w-10 h-10 text-blue-50 drop-shadow-lg group-hover:text-purple-100 transition-colors duration-300" strokeWidth={3} />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-16">
          <a
            href="#"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-100 to-blue-100 text-white font-semibold rounded-full overflow-hidden hover:shadow-2xl hover:shadow-purple-100/50 transition-all duration-500 hover:scale-105"
            onClick={(e) => e.preventDefault()}
          >
            <span className="relative z-10 flex items-center gap-3">
              Check My Github
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-orange-200 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .swiper-pagination {
            bottom: 0px !important;
            position: relative !important;
        }
        .swiper-pagination-bullet {
          background: #2d3548;
          opacity: 1;
          width: 8px;
          height: 8px;
          transition: all 0.3s;
        }
        .swiper-pagination-bullet-active {
          background: linear-gradient(to right, #90caf9, #ce93d8);
          width: 24px;
          border-radius: 4px;
        }
      `}</style>
    </section>
  );
};

export default Showcase;
import React, { useState, useEffect, useRef } from 'react';

const projectsData = [
  {
    id: 1,
    title: "Pothole Detection Model",
    description:
      "YOLOv5-based model trained on 665 labeled images to detect potholes in road images. Trained for 100 epochs with a batch size of 8 using a single class annotation.",
    tech: ["YOLOv5", "Python", "RStudio"],
    category: "AI/ML",
    link: "https://github.com/TashiKP/YoloV5-PotHole-Detection.git"
  },
  {
    id: 2,
    title: "Communify",
    description:
      "A smart communication app for speech-impaired individuals in Bhutan. Features text-to-speech, symbol-based communication, and supports Dzongkha and English.",
    tech: ["React Native", "MongoDB", "Flask", "NLP"],
    category: "Full Stack",
    link: "https://github.com/TashiKP/Communify.git"
  },
  {
    id: 3,
    title: "ACM Student Chapter MIS",
    description:
      "Web-based system for managing ACM chapter activities including member registration, event tracking, and reporting. Built as a collaborative team project.",
    tech: ["Next.js", "MongoDB", "GitHub", "Figma"],
    category: "Full Stack",
    link: "https://github.com/suzWaks/RUB-ACM-MIS.git"
  }
];

export default function Projects() {
  const [animated, setAnimated] = useState(false);
  const [isStacked, setIsStacked] = useState(true);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
            setTimeout(() => {
              setIsStacked(false);
            }, 800);
          }
        });
      },
      { threshold: 0.2 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) observer.observe(currentSection);
    return () => {
      if (currentSection) observer.unobserve(currentSection);
    };
  }, [animated]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-screen px-8 py-24 bg-gradient-to-br from-slate-900/90 to-slate-800/90 text-white overflow-hidden"
    >
      {/* Floating Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-20 w-96 h-96 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-25 blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-32 w-80 h-80 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-30 blur-xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-25 blur-xl animate-pulse" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 mb-8">
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl px-8 py-4 rounded-xl border border-white/10">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Featured Projects
              </h2>
            </div>
          </div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my creative work spanning web development, AI, design, and more
          </p>
        </div>

        {/* Projects */}
        <div className="relative">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className={`transition-all duration-1000 ease-out ${
                animated ? 'opacity-100' : 'opacity-0'
              } ${
                isStacked 
                  ? `absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-2xl`
                  : `relative`
              }`}
              style={{
                transitionDelay: `${index * 150}ms`,
                zIndex: isStacked ? 10 - index : 1,
                transform: isStacked 
                  ? `translateX(-50%) translateY(${index * 8}px) rotate(${(index - 2) * 1}deg)`
                  : 'none'
              }}
            >
              <div className={`group relative transition-all duration-1000 ${!isStacked ? 'mb-8' : 'mb-0'}`}>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl opacity-60 blur-xl group-hover:opacity-80 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500">
                  <div className="flex items-center justify-between mb-6">
                    <div className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-white/10">
                      <span className="text-sm font-medium text-white/80">{project.category}</span>
                    </div>
                    <div className="flex gap-2">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <div key={i} className="px-3 py-1 bg-white/10 rounded-lg text-xs text-white/70">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-4">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed text-lg group-hover:text-white transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub + Arrow */}
        <div className="mt-20 flex flex-col items-center justify-center space-y-8">
          <div className="px-8 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-white/10 backdrop-blur-md">
            <span className="text-slate-300 font-medium">View all projects on GitHub →</span>
          </div>

          <button
            onClick={() => {
              const el = document.getElementById("photoshop");
              if (el) {
                el.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="text-white hover:text-cyan-400 transition-colors duration-300"
            aria-label="Scroll to Photoshop"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 animate-bounce"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

type GalleryItem = {
  id: number;
  src: string;
  caption: string;
};

const galleryData: GalleryItem[] = [
  { id: 1, src: "/1.jpg", caption: "MARVELous" },
  { id: 2, src: "/2.jpg", caption: "Not AI Generated!" },
  { id: 3, src: "/3.jpg", caption: "Rick in Bhutan?" },
  { id: 4, src: "/4.jpg", caption: "What if?" },
  { id: 5, src: "/5.jpg", caption: "Something Normal" },
  { id: 6, src: "/6.jpg", caption: "Not My Best Work" },
  { id: 7, src: "/7.jpg", caption: "Portal to Nowhere" },
  { id: 8, src: "/8.jpg", caption: "Peaceful" },
  { id: 9, src: "/9.jpg", caption: "Imagination Running Wild" },
  { id: 10, src: "/10.jpg", caption: "Photo Blending " },
  { id: 11, src: "/11.jpg", caption: "Takin" },
  { id: 12, src: "/12.jpg", caption: "Aesthetic" },
  { id: 13, src: "/13.jpg", caption: "August" },
  { id: 14, src: "/14.jpg", caption: "Wallpaper" },

];

export default function Photoshop() {
  const [animated, setAnimated] = useState(false);
  const [headerAnimated, setHeaderAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Trigger header animation immediately when component mounts
    const headerTimer = setTimeout(() => {
      setHeaderAnimated(true);
    }, 300);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            // Add slight delay for gallery items after header
            setTimeout(() => {
              setAnimated(true);
            }, 800);
          }
        });
      },
      { threshold: 0.1 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);
    
    return () => {
      clearTimeout(headerTimer);
      if (current) observer.unobserve(current);
    };
  }, [animated]);

  return (
    <section
      ref={sectionRef}
      id="photoshop"
      className="relative min-h-screen px-8 py-24 bg-gradient-to-br from-slate-900/90 to-slate-800/90 text-white overflow-hidden"
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 right-32 w-96 h-96 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full blur-3xl transition-all duration-1000 ${headerAnimated ? 'opacity-20 scale-100' : 'opacity-0 scale-75'}`} style={{ animationDelay: '0.5s' }} />
        <div className={`absolute bottom-32 left-20 w-80 h-80 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-full blur-3xl transition-all duration-1000 ${headerAnimated ? 'opacity-25 scale-100' : 'opacity-0 scale-75'}`} style={{ animationDelay: '0.8s' }} />
        <div className={`absolute top-1/2 left-1/3 w-64 h-64 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-full blur-3xl transition-all duration-1000 ${headerAnimated ? 'opacity-20 scale-100' : 'opacity-0 scale-75'}`} style={{ animationDelay: '1.1s' }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Animated Header */}
        <div className="text-center mb-20">
          <div className={`inline-block p-1 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 mb-8 transition-all duration-1000 ease-out ${headerAnimated ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}>
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl px-8 py-4 rounded-xl border border-white/10">
              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                Creative Gallery
              </h2>
            </div>
          </div>
          <p className={`text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-out ${headerAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.3s' }}>
            A collection of my digital art, photo manipulation, and design work
          </p>
        </div>

        {/* Enhanced Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {galleryData.map((image, index) => (
            <div
              key={image.id}
              className={`group relative transition-all duration-1000 ease-out transform hover:scale-105 ${
                animated ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-16 rotate-3'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transformOrigin: 'center bottom'
              }}
            >
              {/* Enhanced Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl opacity-0 group-hover:opacity-70 blur-xl transition-all duration-700 -z-10 group-hover:scale-110" />

              {/* Image Container with Enhanced Hover Effects */}
              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden group-hover:border-white/30 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.caption}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-700 group-hover:scale-115 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Floating Animation Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" />
                    <div className="absolute top-6 right-8 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
                    <div className="absolute top-2 right-12 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                  </div>
                </div>
                
                <div className="p-4 group-hover:bg-gradient-to-r group-hover:from-purple-900/20 group-hover:to-cyan-900/20 transition-all duration-500">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:via-pink-300 group-hover:to-cyan-300 transition-all duration-500">
                      {image.caption}
                    </h3>
                    <div className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-white/10 group-hover:border-white/30 group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-500">
                      <span className="text-xs font-medium text-white/70 group-hover:text-white/90 transition-all duration-500">#{image.id}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
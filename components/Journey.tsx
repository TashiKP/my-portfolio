"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const paragraphs = [
  {
    text: "From the moment I wrote my first line of code, I was hooked. The creativity of turning an idea into a working product fascinated me. Whether it's building intuitive user interfaces or crafting efficient backend systems, I find joy in every step of the development process.",
    label: "Code",
    step: "1",
  },
  {
    text: "My passion for UX/UI design led me to explore tools like Figma and dive into the psychology behind user interaction. Creating interfaces that not only look good but feel good to use is something I genuinely enjoy.",
    label: "Design",
    step: "2",
  },
  {
    text: "Recently, I've been deeply inspired by the possibilities of AI and machine learning. The idea that machines can learn and evolve fascinates me, and I'm continuously learning how to integrate these technologies into real-world applications.",
    label: "AI/ML",
    step: "3",
  },
  {
    text: "Outside of code, I've been exploring Photoshop for over two years—learning how to craft digital art, enhance photos, and design visuals that tell a story. It's a hobby that blends perfectly with my technical and design interests.",
    label: "Visual Arts",
    step: "4",
  },
];

const highlightTerms = {
  "UX/UI design": "text-purple-300 font-semibold",
  "AI and machine learning": "text-cyan-300 font-semibold",
  Photoshop: "text-pink-300 font-semibold",
  "user interfaces": "text-purple-300 font-semibold",
  "backend systems": "text-cyan-300 font-semibold",
};

const highlightText = (text: string) => {
  let highlightedText = text;
  Object.entries(highlightTerms).forEach(([term, className]) => {
    highlightedText = highlightedText.replace(
      new RegExp(term, "g"),
      `<span class="${className} hover:text-white transition-colors duration-300 cursor-pointer">${term}</span>`
    );
  });
  return highlightedText;
};

// Framer Motion animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Journey() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const node = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !animated) {
            setAnimated(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (node) observer.observe(node);
    return () => {
      if (node) observer.unobserve(node);
    };
  }, [animated]);

  return (
    <section
      ref={sectionRef}
      id="journey"
      className="relative min-h-screen bg-gradient-to-br from-slate-900/90 to-slate-800/90 text-white px-4 sm:px-8 py-16 sm:py-24"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-96 h-48 sm:h-96 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-25 blur-xl animate-pulse" />
        <div className="absolute bottom-16 sm:bottom-32 right-8 sm:right-16 w-40 sm:w-80 h-40 sm:h-80 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-30 blur-xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-32 sm:w-64 h-32 sm:h-64 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-full opacity-25 blur-xl animate-pulse" />
      </div>

      {/* Main container */}
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 mb-6 sm:mb-8">
            <div className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl px-4 sm:px-8 py-3 sm:py-4 rounded-xl border border-white/10">
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                My Journey
              </h2>
            </div>
          </div>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A timeline of my passions, skills, and the technologies that excite
            me
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="relative hidden md:block">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500/30 via-pink-500/30 to-cyan-500/30 rounded-full" />

          <motion.div
            className="space-y-16"
            variants={containerVariants}
            initial="hidden"
            animate={animated ? "show" : "hidden"}
          >
            {paragraphs.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  className="relative flex items-center"
                  variants={cardVariants}
                >
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse" />
                    <div className="absolute inset-0 w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur opacity-60" />
                  </div>

                  <div className={`w-5/12 ${isLeft ? "" : "ml-auto"}`}>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl opacity-60 blur-xl" />

                    <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 group">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-white/10">
                          <span className="text-sm font-medium text-white/70">
                            {item.step}
                          </span>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                        <span className="text-lg font-semibold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
                          {item.label}
                        </span>
                      </div>
                      <p
                        className="text-lg text-slate-200 leading-relaxed group-hover:text-white transition-colors duration-300"
                        dangerouslySetInnerHTML={{
                          __html: highlightText(item.text),
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Simple Cards Layout - Mobile/Tablet */}
        <motion.div
          className="md:hidden space-y-6 sm:space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate={animated ? "show" : "hidden"}
        >
          {paragraphs.map((item, index) => (
            <motion.div
              key={index}
              className="relative"
              variants={cardVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl opacity-40 blur-xl" />

              <div className="relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-6 sm:p-8 hover:border-white/20 transition-all duration-500 group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-white/10 flex-shrink-0">
                    <span className="text-sm font-medium text-white/70">
                      {item.step}
                    </span>
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-purple-500/30 to-transparent" />
                  <span className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent flex-shrink-0">
                    {item.label}
                  </span>
                </div>
                <p
                  className="text-base sm:text-lg text-slate-200 leading-relaxed group-hover:text-white transition-colors duration-300"
                  dangerouslySetInnerHTML={{
                    __html: highlightText(item.text),
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom accent */}
        <div className="mt-12 sm:mt-20 text-center">
          <button
            onClick={() => {
              const el = document.getElementById("projects");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-6 sm:px-8 py-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full border border-white/10 backdrop-blur-md hover:bg-purple-500/30 transition-all duration-300"
          >
            <span className="text-slate-300 font-medium hover:text-white transition-colors text-sm sm:text-base">
              And the journey continues...
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
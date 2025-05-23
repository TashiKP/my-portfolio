"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Journey from "@/components/Journey";
import Projects from "@/components/projects";
import Photoshop from "@/components/photoshop";

type FloatingIconProps = {
  src: string;
  cardBounds: DOMRect;
  index: number;
  total: number;
};

export default function Home() {
  const icons = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rstudio/rstudio-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  ];

  const cardRef = useRef<HTMLDivElement | null>(null);
  const [cardBounds, setCardBounds] = useState<DOMRect | null>(null);
  const [widgetOpen, setWidgetOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    
    if (cardRef.current) {
      setCardBounds(cardRef.current.getBoundingClientRect());
    }
    
    const handleResize = () => {
      checkMobile();
      if (cardRef.current) {
        setCardBounds(cardRef.current.getBoundingClientRect());
      }
    };
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('tkphuntsho0980@gmail.com');
      setEmailCopied(true);
      setTimeout(() => setEmailCopied(false), 2000);
    } catch {
      console.log('Failed to copy email');
    }
  };

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center justify-center p-3 sm:p-6">
        {/* Background Mesh */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20 sm:opacity-30">
            <div className="absolute top-0 -left-4 w-48 h-48 sm:w-72 sm:h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 -right-4 w-48 h-48 sm:w-72 sm:h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-48 h-48 sm:w-72 sm:h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        {/* Floating Icons - Hidden on mobile for performance */}
        {!isMobile && (
          <div className="absolute inset-0 z-0">
            {cardBounds &&
              icons.map((src, i) => (
                <FloatingIcon
                  key={i}
                  src={src}
                  index={i}
                  total={icons.length}
                  cardBounds={cardBounds}
                />
              ))}
          </div>
        )}

        {/* Main Card */}
        <div className="relative z-10 w-full max-w-sm sm:max-w-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl sm:rounded-3xl blur-xl opacity-75 animate-pulse"></div>
          <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-2xl sm:rounded-3xl p-0.5 sm:p-1 shadow-2xl border border-white/20">
            <div
              ref={cardRef}
              className="bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-12 w-full text-center relative overflow-hidden"
            >
              {/* Profile */}
              <div className="relative z-10 mb-6 sm:mb-8">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
                  <div className="relative w-24 h-24 sm:w-36 sm:h-36 mx-auto rounded-full overflow-hidden border-2 sm:border-4 border-white/30 shadow-2xl">
                    <Image
                      src="/profile.jpeg"
                      alt="Profile picture"
                      className="object-cover w-full h-full object-[center_90%]"
                      width={144}
                      height={144}
                    />
                  </div>
                </div>
              </div>

              {/* Name */}
              <div className="relative z-10 mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-3 bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent leading-tight">
                  Tashi Kuenga Phuntsho
                </h1>
                <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto mb-3 sm:mb-4 rounded-full"></div>
                <p className="text-slate-300 text-base sm:text-lg font-light">
                  Full Stack Developer
                </p>
              </div>

              {/* Quote */}
              <div className="relative z-10 mb-6 sm:mb-8">
                <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/10 backdrop-blur-sm">
                  <p className="text-slate-200 text-sm sm:text-base italic leading-relaxed">
                    &quot;Code is like humor. When you have to explain it, it is bad ;)&quot;
                  </p>
                </div>
              </div>

              {/* Button */}
              <div className="relative z-10">
                <button
                  onClick={() =>
                    document.getElementById("journey")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-white text-sm sm:text-base shadow-lg hover:shadow-2xl transform transition-all duration-300 hover:scale-105 hover:from-purple-500 hover:to-cyan-500 active:scale-95"
                >
                  <span className="relative z-10">Discover My Journey</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              </div>

              {/* Decorative dots */}
              <div className="absolute top-4 sm:top-6 right-4 sm:right-6 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-purple-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full animate-ping animation-delay-1000"></div>
              <div className="absolute top-1/2 left-2 sm:left-4 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full animate-pulse"></div>
              <div className="absolute top-1/3 right-2 sm:right-4 w-0.5 sm:w-1 h-0.5 sm:h-1 bg-white rounded-full animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>

        {/* Floating Contact Widget */}
        <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50">
          {/* Expanded Widget */}
          <div className={`mb-3 transition-all duration-500 ease-out ${
            widgetOpen ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
          }`}>
            <div className="bg-gradient-to-br from-slate-900/95 to-slate-800/95 backdrop-blur-2xl border border-white/20 rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-2xl shadow-purple-500/10 min-w-[240px] sm:min-w-[260px] max-w-[calc(100vw-2rem)]">
              {/* Profile Section */}
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 p-0.5">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <Image
                        src="/profile.jpeg"
                        alt="Profile"
                        width={48}
                        height={48}
                        className="object-cover w-full h-full object-[center_90%]"
                      />
                    </div>
                  </div>
                  <div className="absolute -bottom-0.5 sm:-bottom-1 -right-0.5 sm:-right-1 w-3 sm:w-4 h-3 sm:h-4 bg-green-500 rounded-full border-2 border-slate-800 animate-pulse"></div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-semibold text-white truncate">Tashi Kuenga</h3>
                  <p className="text-xs text-slate-400">Available for contact</p>
                </div>
              </div>

              {/* Contact Options */}
              <div className="space-y-2">
                <button
                  onClick={handleEmailClick}
                  className="w-full flex items-center gap-3 px-3 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 hover:from-purple-600/30 hover:to-pink-600/30 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group active:scale-95"
                >
                  <svg className="w-4 h-4 text-purple-300 group-hover:text-white transition-colors flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors truncate">
                    {emailCopied ? 'Email Copied!' : 'Copy Email'}
                  </span>
                </button>

                <a
                  href="https://www.instagram.com/tashi_kp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center gap-3 px-3 py-2 bg-gradient-to-r from-pink-600/20 to-purple-600/20 hover:from-pink-600/30 hover:to-purple-600/30 rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 group active:scale-95"
                >
                  <svg className="w-4 h-4 text-pink-300 group-hover:text-white transition-colors flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.328-1.297C4.243 14.814 3.77 13.663 3.77 12.366c0-1.297.473-2.448 1.351-3.328.88-.807 2.031-1.297 3.328-1.297 1.297 0 2.448.49 3.328 1.297.88.88 1.351 2.031 1.351 3.328 0 1.297-.471 2.448-1.351 3.325-.88.807-2.031 1.297-3.328 1.297zm7.718-7.718c-.327 0-.654-.163-.88-.49-.227-.326-.227-.653 0-.979.226-.327.553-.49.88-.49.326 0 .653.163.88.49.226.326.226.653 0 .979-.227.327-.554.49-.88.49z"/>
                  </svg>
                  <span className="text-sm text-white/80 group-hover:text-white transition-colors">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setWidgetOpen(!widgetOpen)}
            className="group relative w-12 sm:w-14 h-12 sm:h-14 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 rounded-full shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className={`relative transition-transform duration-300 ${widgetOpen ? 'rotate-45' : 'rotate-0'}`}>
              {widgetOpen ? (
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 sm:w-6 h-5 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Journey section */}
      <Journey />
      <Projects />
      <Photoshop />
      {/* Footer */}
    </>
  );
}

function FloatingIcon({ src, cardBounds, index, total }: FloatingIconProps) {
  const iconRef = useRef<HTMLImageElement | null>(null);
  const size = 40 + Math.random() * 20; // Reduced size for better performance
  const position = useRef({ top: 0, left: 0 });
  const direction = useRef({
    dx: Math.random() * 0.003 - 0.015, // Slower movement
    dy: Math.random() * 0.003 - 0.015,
  });

  useEffect(() => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const columns = Math.ceil(Math.sqrt(total));
    const rows = Math.ceil(total / columns);
    const col = index % columns;
    const row = Math.floor(index / columns);
    const spacingX = 100 / columns;
    const spacingY = 100 / rows;
    const initialLeft = col * spacingX + spacingX / 4;
    const initialTop = row * spacingY + spacingY / 4;

    position.current.top = initialTop;
    position.current.left = initialLeft;

    const move = () => {
      position.current.top += direction.current.dy;
      position.current.left += direction.current.dx;

      const el = iconRef.current;
      if (el) {
        const iconWidthPercent = (size / vw) * 100;
        const iconHeightPercent = (size / vh) * 100;

        // Bounce off edges
        if (
          position.current.top < 0 ||
          position.current.top + iconHeightPercent > 100
        ) {
          direction.current.dy *= -1;
          position.current.top += direction.current.dy * 2;
        }
        if (
          position.current.left < 0 ||
          position.current.left + iconWidthPercent > 100
        ) {
          direction.current.dx *= -1;
          position.current.left += direction.current.dx * 2;
        }

        el.style.top = `${position.current.top}%`;
        el.style.left = `${position.current.left}%`;
      }
      requestAnimationFrame(move);
    };

    requestAnimationFrame(move);
  }, [cardBounds, size, index, total]);

  return (
    <Image
      ref={iconRef}
      src={src}
      alt="icon"
      width={size}
      height={size}
      className="absolute opacity-15 sm:opacity-25 drop-shadow-2xl brightness-110 pointer-events-none hover:opacity-40 transition-opacity duration-300"
      style={{
        top: `${position.current.top}%`,
        left: `${position.current.left}%`,
        filter: "drop-shadow(0 0 10px rgba(147, 51, 234, 0.3))",
      }}
      unoptimized
    />
  );
}
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
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [cardBounds, setCardBounds] = useState<DOMRect | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  useEffect(() => {
    // Initialize audio element
    audioRef.current = new Audio('/pinch.mp3'); // Replace with your music file path
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3; 

    const audio = audioRef.current;

    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('loadstart', handleLoadStart);
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadstart', handleLoadStart);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      audio.pause();
    };
  }, []);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        await audioRef.current.play();
      }
    } catch (error) {
      console.log('Audio playback failed:', error);
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

        {/* Music Player */}
        <div className="fixed top-1/2 left-2 sm:left-6 transform -translate-y-1/2 z-50">
          {/* Mobile Version - Collapsed Arrow */}
          <div className="sm:hidden">
            <div className="relative group">
              <button
                onClick={toggleMusic}
                disabled={isLoading}
                className="relative w-8 h-8 bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-500/90 hover:to-pink-500/90 backdrop-blur-sm rounded-full shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center border border-white/20"
              >
                {/* Small animated ring when playing */}
                {isPlaying && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse opacity-30"></div>
                )}

                {/* Small Icon */}
                <div className="relative z-10">
                  {isLoading ? (
                    <div className="w-3 h-3 border border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : isPlaying ? (
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-3 h-3 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>
              </button>

              {/* Mobile Music Info - Shows on hover */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                <div className="bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/20 rounded-md px-2 py-1 shadow-lg">
                  <p className="text-xs text-white/80 whitespace-nowrap">🎵</p>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Version - Full Design */}
          <div className="hidden sm:flex flex-col items-center gap-3">
            {/* Vertical Sound Waves - Above Button */}
            {isPlaying && (
              <div className="flex flex-col items-center space-y-1">
                <div className="w-1 bg-purple-400 rounded-full animate-pulse" style={{ height: '8px', animationDelay: '0ms', animationDuration: '600ms' }}></div>
                <div className="w-1 bg-pink-400 rounded-full animate-pulse" style={{ height: '12px', animationDelay: '150ms', animationDuration: '600ms' }}></div>
                <div className="w-1 bg-purple-400 rounded-full animate-pulse" style={{ height: '6px', animationDelay: '300ms', animationDuration: '600ms' }}></div>
                <div className="w-1 bg-cyan-400 rounded-full animate-pulse" style={{ height: '10px', animationDelay: '450ms', animationDuration: '600ms' }}></div>
              </div>
            )}

            {/* Music Button */}
            <div className="relative group">
              <button
                onClick={toggleMusic}
                disabled={isLoading}
                className="relative w-14 h-14 bg-gradient-to-r from-purple-600/80 to-pink-600/80 hover:from-purple-500/90 hover:to-pink-500/90 backdrop-blur-sm rounded-full shadow-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center border border-white/20"
              >
                {/* Animated Background Ring - Only when playing */}
                {isPlaying && (
                  <div className="absolute inset-0 rounded-full">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 animate-spin opacity-20"></div>
                    <div className="absolute inset-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-ping opacity-30"></div>
                  </div>
                )}

                {/* Icon */}
                <div className="relative z-10">
                  {isLoading ? (
                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : isPlaying ? (
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </div>

                {/* Glow effect when playing */}
                {isPlaying && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-40 transition-opacity duration-300 animate-pulse"></div>
                )}
              </button>

              {/* Music Info - Shows on hover */}
              <div className="absolute left-full top-1/2 transform -translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 pointer-events-none">
                <div className="bg-gradient-to-r from-slate-900/95 to-slate-800/95 backdrop-blur-xl border border-white/20 rounded-lg px-3 py-1.5 shadow-lg">
                  <p className="text-xs text-white/80 whitespace-nowrap">🎵 Ai Generated but lyrics are mine lol! </p>
                </div>
              </div>
            </div>

            {/* Vertical Sound Waves - Below Button */}
            {isPlaying && (
              <div className="flex flex-col items-center space-y-1">
                <div className="w-1 bg-cyan-400 rounded-full animate-pulse" style={{ height: '10px', animationDelay: '100ms', animationDuration: '600ms' }}></div>
                <div className="w-1 bg-purple-400 rounded-full animate-pulse" style={{ height: '6px', animationDelay: '250ms', animationDuration: '600ms' }}></div>
                <div className="w-1 bg-pink-400 rounded-full animate-pulse" style={{ height: '12px', animationDelay: '400ms', animationDuration: '600ms' }}></div>
                <div className="w-1 bg-purple-400 rounded-full animate-pulse" style={{ height: '8px', animationDelay: '550ms', animationDuration: '600ms' }}></div>
              </div>
            )}
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
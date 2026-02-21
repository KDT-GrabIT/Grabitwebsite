"use client";

import { useEffect, useState } from "react";
import backgroundImage from "figma:asset/cbd948ba2a23691d0fce1532d83f4f934177d861.png";
import qrButtonImage from "figma:asset/77ed712f3402c8f472cf4cd9c7d4d87bd905251b.png";
const qrCodeImage = "/GrabIT-qrcode.svg";

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "GrabIT";

  useEffect(() => {
    setIsLoaded(true);
    
    // Typewriter effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 200); // 200ms per character for a nice typing speed

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden w-full"
      aria-label="GrabIT 히어로 섹션"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 w-full h-full"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-10 bg-black/50" />

      {/* Content Container */}
      <div className="relative z-20 mx-auto w-full px-8 py-16 md:px-12 lg:px-16">
        <div className="flex items-center justify-center md:justify-start max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="flex flex-col gap-8 max-w-3xl">
            {/* Main Headline */}
            <div
              className={`transition-all duration-1000 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-8 text-white"
                style={{
                  fontFamily: "'Impact', 'Arial Black', sans-serif",
                  textShadow: `
                    0 1px 2px rgba(0, 0, 0, 0.3),
                    0 2px 4px rgba(0, 0, 0, 0.2),
                    1px 1px 0 rgba(255, 255, 255, 0.1),
                    -1px -1px 0 rgba(0, 0, 0, 0.2)
                  `,
                  letterSpacing: "0.02em",
                }}
              >
                {displayedText}
              </h1>

              <p
                className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-lg leading-relaxed"
                style={{
                  fontFamily: "KccHanbit",
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)",
                }}
              >
                시각장애인을 위한 AI 쇼핑 보조 앱.<br />
                카메라 하나로, 쇼핑의 질이 달라집니다.
              </p>
            </div>

            {/* App Store Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-400 ease-out ${
                isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <button
                onClick={() => setShowQRModal(true)}
                className="transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{
                  filter: 'drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(-1px -1px 2px rgba(255, 255, 255, 0.3))',
                }}
              >
                <img 
                  src={qrButtonImage} 
                  alt="앱 다운로드 QR 코드 스캔"
                  className="h-20 w-auto rounded-2xl"
                  style={{
                    boxShadow: `
                      inset -2px -2px 4px rgba(255, 255, 255, 0.5),
                      inset 2px 2px 4px rgba(0, 0, 0, 0.2),
                      3px 3px 8px rgba(0, 0, 0, 0.3)
                    `
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* QR Modal */}
      {showQRModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          onClick={() => setShowQRModal(false)}
        >
          <div 
            className="bg-white rounded-3xl p-8 md:p-12 max-w-md w-full mx-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col items-center">
              {/* QR Code */}
              <div className="bg-white rounded-2xl p-6 mb-6 border-4 border-gray-100">
                <img 
                  src={qrCodeImage} 
                  alt="GrabIT 앱 다운로드 QR 코드"
                  className="w-64 h-64 object-contain"
                />
              </div>

              {/* Title */}
              <h3 
                className="text-2xl md:text-3xl font-bold text-[#3D230A] mb-3 text-center"
                style={{ fontFamily: "KccHanbit" }}
              >
                GrabIT 앱 설치하기
              </h3>

              {/* Description */}
              <p 
                className="text-base md:text-lg text-[#AA6B1C] text-center mb-8"
                style={{ fontFamily: "KccHanbit" }}
              >
                스마트폰 카메라로 QR을 찍어주세요
              </p>

              {/* Close Button */}
              <button
                onClick={() => setShowQRModal(false)}
                className="w-full bg-[#AA6B1C] hover:bg-[#8B5516] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                style={{ fontFamily: "KccHanbit" }}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 z-10 -translate-x-1/2 transition-all duration-1000 delay-800 ease-out ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/70 text-sm uppercase tracking-wider" style={{ fontFamily: "KccHanbit" }}>
            Scroll Down
          </span>
          <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/50 p-1.5">
            <div className="h-3 w-1.5 animate-bounce rounded-full bg-white/70" />
          </div>
        </div>
      </div>
    </section>
  );
}

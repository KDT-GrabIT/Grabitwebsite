"use client";

import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import brailleImage from "figma:asset/94a53724030c8a07947ea0ceec7d6af8b668f6ba.png";
import productsImage from "figma:asset/8c89caacf7de501a650bc547006bcb506d6b16fd.png";
import qrCodeImage from "figma:asset/63e1613108daec43f83ebb7f6defdf3c18c5563b.png";
import canImage from "figma:asset/0ac56a610dd5ef724d4b4e85f711fc114b1300db.png";
import snackImage from "figma:asset/0b43389d60b92c6b17e330a1c314988f71319382.png";
import convenienceStoreBackground from "figma:asset/e383677a6d238ab769018f1de182ae80f1ebf612.png";

export function HeroSection() {
  const [textVisible, setTextVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] =
    useState(false);

  const fullText = "GrabIT";

  useEffect(() => {
    let currentIndex = 0;

    const typeNextCharacter = () => {
      if (currentIndex < fullText.length) {
        setTypedText(fullText.substring(0, currentIndex + 1));
        currentIndex++;

        // Random delay between 200ms and 300ms for slower, more deliberate typing feel
        const randomDelay = Math.random() * 100 + 200;
        setTimeout(typeNextCharacter, randomDelay);
      } else {
        setIsTypingComplete(true);
        // Trigger other content to appear
        setTimeout(() => setTextVisible(true), 300);
      }
    };

    // Start typing after a brief initial delay
    const startDelay = setTimeout(typeNextCharacter, 600);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <section
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="GrabIT 히어로 섹션"
    >
      {/* Natural Paper Texture Background */}
      <div className="absolute inset-0 z-0 bg-[#f5f1ed]">
        {/* Blurred convenience store background */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${convenienceStoreBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* HUD Interface Overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* All HUD elements removed */}
      </div>

      {/* Content Container - Simulating a photographed scene */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 py-16 md:px-12 lg:px-8">
        {/* Connection lines SVG overlay */}
        {isTypingComplete && (
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 15 }}
          >
            {/* Line from GrabIT logo to Can - angular style */}
            <polyline
              points="30%,45% 32%,45% 32%,38% 70%,38% 70%,40%"
              fill="none"
              stroke="rgba(132, 204, 22, 0.8)"
              strokeWidth="2"
              style={{
                filter: "drop-shadow(0 0 4px rgba(132, 204, 22, 0.9))",
              }}
            />
            {/* Connection point at GrabIT */}
            <circle
              cx="30%"
              cy="45%"
              r="3"
              fill="rgba(132, 204, 22, 1)"
              style={{
                filter: "drop-shadow(0 0 6px rgba(132, 204, 22, 1))",
              }}
            />
            {/* Connection point at Can */}
            <circle
              cx="70%"
              cy="40%"
              r="3"
              fill="rgba(132, 204, 22, 1)"
              style={{
                filter: "drop-shadow(0 0 6px rgba(132, 204, 22, 1))",
              }}
            />

            {/* Line from GrabIT logo to Snack - angular style */}
            <polyline
              points="30%,45% 28%,45% 28%,60% 60%,60% 60%,65%"
              fill="none"
              stroke="rgba(132, 204, 22, 0.8)"
              strokeWidth="2"
              style={{
                filter: "drop-shadow(0 0 4px rgba(132, 204, 22, 0.9))",
              }}
            />
            {/* Connection point at Snack */}
            <circle
              cx="60%"
              cy="65%"
              r="3"
              fill="rgba(132, 204, 22, 1)"
              style={{
                filter: "drop-shadow(0 0 6px rgba(132, 204, 22, 1))",
              }}
            />
          </svg>
        )}

        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-20">
          {/* Left Side: Braille + Typography */}
          <div className="relative flex flex-col gap-8 mt-48 -ml-4 md:-ml-8 lg:-ml-12">
            {/* Typography - typewriter style on paper */}
            <div>
              <h1
                className="text-6xl font-bold tracking-wide text-[#2E2E2E] md:text-7xl lg:text-8xl min-h-[4.5rem] md:min-h-[5.25rem] lg:min-h-[6rem] relative inline-block"
                style={{
                  fontFamily:
                    "'Impact', 'Arial Black', sans-serif",
                  textShadow: "0 1px 2px rgba(0,0,0,0.06)",
                  letterSpacing: "0.02em",
                }}
              >
                {typedText}
                {isTypingComplete && (
                  <span
                    className="inline-block ml-1 w-[3px] h-[0.9em] bg-[#2E2E2E] align-middle"
                    style={{
                      animation:
                        "blink 0.8s ease-in-out infinite",
                    }}
                  />
                )}

                {/* Bounding box for GrabIT logo */}
                {isTypingComplete && (
                  <>
                    <div
                      className="absolute -inset-3 border-2 border-lime-400 pointer-events-none"
                      style={{
                        boxShadow:
                          "0 0 10px rgba(132, 204, 22, 0.6)",
                      }}
                    >
                      {/* Corner markers */}
                      <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-lime-400"></div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-lime-400"></div>
                      <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-lime-400"></div>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-lime-400"></div>
                    </div>
                    {/* Label for GrabIT */}
                    <div
                      className="absolute -top-5 left-0 bg-black border border-lime-400 px-2 py-0"
                      style={{
                        boxShadow:
                          "0 0 6px rgba(132, 204, 22, 0.5)",
                        lineHeight: "1",
                      }}
                    >
                      <span
                        className="text-lime-400 font-mono text-xs leading-none block"
                        style={{
                          textShadow:
                            "0 0 6px rgba(132, 204, 22, 0.8)",
                          WebkitTextStroke: "0.3px black",
                        }}
                      >
                        LOGO
                      </span>
                    </div>
                  </>
                )}
              </h1>
              <div
                className={`transition-all duration-700 ease-out ${
                  textVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
              >
                <p
                  className="mt-6 max-w-lg text-lg leading-relaxed text-[#54504c] md:text-xl lg:text-2xl"
                  style={{
                    fontFamily:
                      "'Impact', 'Arial Black', sans-serif",
                  }}
                >
                  시각장애인을 위한 AI 쇼핑 보조 앱.
                  <br />
                  카메라 하나로, 쇼핑의 질이 달라집니다.
                </p>
              </div>
            </div>

            {/* QR Code */}
            <div
              className={`transition-all duration-700 delay-200 ease-out ${
                textVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              <div className="inline-flex flex-col items-start gap-3">
                <div className="relative">
                  <img
                    src={qrCodeImage}
                    alt="QR Code"
                    className="w-36 h-36 md:w-40 md:h-40 lg:w-44 lg:h-44"
                    style={{
                      filter:
                        "drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15))",
                      mixBlendMode: "multiply",
                    }}
                  />
                </div>
                <p
                  className="text-base md:text-lg text-[#54504c]"
                  style={{
                    fontFamily:
                      "'Impact', 'Arial Black', sans-serif",
                  }}
                >
                  QR 코드를 스캔하세요
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Products with AI Segmentation - Natural scene composition */}
          <div className="relative hidden md:block">
            {/* Main products image - blended naturally with background - LARGER & SHIFTED LEFT */}
            <div className="relative scale-150 origin-center lg:scale-[1.6] -translate-x-6 lg:-translate-x-8">
              <img
                src={productsImage}
                alt="AI가 상품을 인식하는 모습"
                className="h-auto w-full"
                style={{
                  mixBlendMode: "darken",
                  filter:
                    "drop-shadow(0 20px 50px rgba(60, 50, 40, 0.4)) drop-shadow(0 10px 25px rgba(60, 50, 40, 0.35)) drop-shadow(0 4px 12px rgba(60, 50, 40, 0.3)) contrast(1.05) saturate(1.1)",
                }}
              />

              {/* Scanning lines overlay */}
              <div className="absolute inset-0">
                {/* Red scanning line for can (right side) */}
                <div className="absolute top-0 right-0 w-1/2 h-full overflow-hidden">
                  <div
                    className="absolute w-full h-1 bg-gradient-to-r from-transparent via-red-400 to-transparent"
                    style={{
                      animation:
                        "scanDown 2s ease-in-out infinite",
                      boxShadow:
                        "0 0 10px rgba(239, 68, 68, 0.8), 0 0 20px rgba(239, 68, 68, 0.5)",
                    }}
                  />
                </div>

                {/* Yellow scanning line for snack (left side) */}
                <div className="absolute top-0 left-0 w-1/2 h-full overflow-hidden">
                  <div
                    className="absolute w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
                    style={{
                      animation:
                        "scanDown 2.3s ease-in-out infinite 0.5s",
                      boxShadow:
                        "0 0 10px rgba(234, 179, 8, 0.8), 0 0 20px rgba(234, 179, 8, 0.5)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Stronger ambient glow for warmth and depth */}
            <div
              className="absolute inset-0 -z-10 scale-125 blur-3xl opacity-25"
              style={{
                background:
                  "radial-gradient(circle at 50% 50%, rgba(220, 80, 60, 0.45), rgba(200, 100, 70, 0.25) 50%, transparent 70%)",
              }}
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-[#8a8177]/30 p-1">
          <div className="h-2 w-1 animate-bounce rounded-full bg-[#8a8177]/50" />
        </div>
      </div>
    </section>
  );
}
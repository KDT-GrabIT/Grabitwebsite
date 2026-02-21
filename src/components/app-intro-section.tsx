"use client"

import { useRef } from "react"
import { useInView } from "../hooks/use-in-view"
import { Eye, MapPin, Volume2, ShoppingBag } from "lucide-react"
import phoneScreen1 from "figma:asset/9afa7ad1d19a34e6e7a379d4d6f6331c06b34b85.png";
import phoneScreen2 from "figma:asset/7eddc5a5f20d01e88084f4352eb178c7f3d43f87.png";

const features = [
  {
    icon: Eye,
    title: "AI 객체 인식",
    description: "카메라로 비추면 AI가 상품을 즉시 인식하여 정확한 정보를 제공합니다.",
  },
  {
    icon: MapPin,
    title: "실시간 위치 안내",
    description: "원하는 상품의 위치를 실시간으로 안내하여 쉽게 찾을 수 있습니다.",
  },
  {
    icon: Volume2,
    title: "음성 안내",
    description: "모든 정보를 자연스러운 음성으로 안내하여 편리하게 사용할 수 있습니다.",
  },
  {
    icon: ShoppingBag,
    title: "독립적인 쇼핑",
    description: "누구의 도움 없이도 스스로 원하는 상품을 골라 쇼핑할 수 있습니다.",
  },
]

export function AppIntroSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section
      id="intro"
      ref={ref}
      className="scroll-mt-16 bg-[#FAF5EF] px-6 py-32 md:py-40"
      aria-labelledby="intro-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="intro-title"
          className={`mb-4 text-center text-3xl font-bold text-[#3D230A] md:text-5xl ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ fontFamily: "KccHanbit" }}
        >
          GrabIT은 어떤 앱인가요?
        </h2>
        <p
          className={`mx-auto mb-16 max-w-2xl text-center text-lg text-[#AA6B1C] ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ 
            animationDelay: "0.15s",
            fontFamily: "KccHanbit"
          }}
        >
          AI 기술로 시각장애인의 일상 속 쇼핑을 혁신합니다.
        </p>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Phone mockups - Premium overlapping phones */}
          <div
            className={`flex justify-center ${
              isInView ? "animate-slide-in-right" : "opacity-0"
            }`}
            style={{ animationDelay: "1s" }}
          >
            <div className="relative h-[600px] w-full flex items-center justify-center">
              {/* First Image - Back/Left */}
              <div 
                className="absolute z-20"
                style={{
                  transform: "translateX(-60px)"
                }}
              >
                <img 
                  src={phoneScreen1} 
                  alt="GrabIT 앱 화면 - 객체 인식"
                  className="w-[280px] h-[570px] object-cover"
                />
                {/* Reflection */}
                <div style={{ 
                  overflow: "hidden", 
                  height: "120px", 
                  marginTop: "-2px",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.25), transparent)",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.25), transparent)"
                }}>
                  <img 
                    src={phoneScreen1} 
                    alt=""
                    aria-hidden="true"
                    className="w-[280px] h-[570px] object-cover"
                    style={{ transform: "scaleY(-1)", transformOrigin: "top center" }}
                  />
                </div>
              </div>

              {/* Second Image - Front/Right */}
              <div 
                className="absolute z-10"
                style={{
                  transform: "translateX(100px) translateY(-40px)"
                }}
              >
                <img 
                  src={phoneScreen2} 
                  alt="GrabIT 앱 화면 - 시작하기"
                  className="w-[280px] h-[570px] object-cover"
                />
                {/* Reflection */}
                <div style={{ 
                  overflow: "hidden", 
                  height: "120px", 
                  marginTop: "-2px",
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.25), transparent)",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.25), transparent)"
                }}>
                  <img 
                    src={phoneScreen2} 
                    alt=""
                    aria-hidden="true"
                    className="w-[280px] h-[570px] object-cover"
                    style={{ transform: "scaleY(-1)", transformOrigin: "top center" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border-2 border-[#F7C02F]/30 bg-white p-6 transition-all hover:border-[#F7C02F] hover:shadow-[0_8px_24px_rgba(247,192,47,0.25)] ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ 
                  animationDelay: `${0.3 + i * 0.1}s`,
                  fontFamily: "KccHanbit"
                }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#C1DBE8] border-2 border-[#43302E]">
                  <feature.icon
                    className="h-5 w-5 text-[#43302E]"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold text-[#3D230A]">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#AA6B1C]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

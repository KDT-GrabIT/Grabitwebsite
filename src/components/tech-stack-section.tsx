"use client";

import { useRef } from "react";
import { useInView } from "../hooks/use-in-view";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import androidLogo from "figma:asset/5a89652d25b6b26c4678f3db7dab941e52f39972.png";
import yoloDetection from "figma:asset/1ecc3776a995c9cebed1f67c4abf2d5a18149714.png";
import {
  Cpu,
  Smartphone,
  Brain,
  Server,
  Zap,
} from "lucide-react";

const techSections = [
  {
    icon: Smartphone,
    name: "Android Native",
    tag: "Kotlin",
    title: "안정적인 네이티브 앱",
    description: "Kotlin 언어로 개발된 순수 Android 네이티브 앱으로, 최적화된 성능과 안정성을 제공합니다. 사용자 기기의 모든 기능을 완벽하게 활용하여 빠르고 부드러운 경험을 선사합니다.",
    features: [
      "최신 Android 아키텍처 컴포넌트 활용",
      "Material Design 3 기반 UI/UX",
      "배터리 효율성 최적화",
      "오프라인 모드 완벽 지원"
    ],
    imageUrl: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwYW5kcm9pZCUyMGtvdGxpbiUyMG1vYmlsZSUyMGRldmVsb3BtZW50fGVufDF8fHx8MTc3MDk0Njc4OXww&ixlib=rb-4.1.0&q=80&w=1080",
    bgColor: "from-[#FAF5EF] to-[#F5EDE3]",
    accentColor: "#AA6B1C"
  },
  {
    icon: Cpu,
    name: "On-device AI",
    tag: "Edge",
    title: "디바이스 내 AI 처리",
    description: "모든 AI 연산이 사용자의 스마트폰에서 직접 처리됩니다. 인터넷 연결 없이도 작동하며, 개인정보가 외부로 전송되지 않아 완벽한 프라이버시를 보장합니다.",
    features: [
      "인터넷 없이도 완벽한 작동",
      "개인정보 100% 기기 내 보호",
      "즉각적인 AI 응답 속도",
      "데이터 통신료 제로"
    ],
    imageUrl: "https://images.unsplash.com/photo-1749006590639-e749e6b7d84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwY2hpcCUyMHByb2Nlc3NvciUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwOTQ2NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    bgColor: "from-[#FFF4E6] to-[#FFEFD5]",
    accentColor: "#F7C02F"
  },
  {
    icon: Brain,
    name: "YOLO 객체 탐지",
    tag: "Detection",
    title: "실시간 상품 인식",
    description: "최신 YOLO(You Only Look Once) 딥러닝 모델을 통해 카메라에 비친 상품을 실시간으로 인식합니다. 복잡한 편의점 진열대에서도 정확하게 원하는 상품을 찾아냅니다.",
    features: [
      "초당 30프레임 실시간 탐지",
      "수백 가지 상품 동시 인식",
      "다양한 조명 환경에서도 정확",
      "지속적인 모델 업데이트"
    ],
    imageUrl: "https://images.unsplash.com/photo-1554936970-ce06538caf54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHZpc2lvbiUyMG9iamVjdCUyMGRldGVjdGlvbiUyMEFJfGVufDF8fHx8MTc3MDk0Njc5MHww&ixlib=rb-4.1.0&q=80&w=1080",
    bgColor: "from-[#F5E6D3] to-[#EBD9C3]",
    accentColor: "#EA580C"
  },
  {
    icon: Server,
    name: "RAG 기반 AI 서버",
    tag: "Server",
    title: "정확한 상품 정보",
    description: "검색 증강 생성(RAG) 기술로 최신 상품 데이터베이스를 실시간 참조합니다. AI가 정확하고 신뢰할 수 있는 상품 정보를 제공하여 더 나은 쇼핑 결정을 도와드립니다.",
    features: [
      "최신 상품 정보 실시간 업데이트",
      "영양 성분 및 알레르기 정보",
      "가격 비교 및 할인 정보",
      "유사 상품 추천"
    ],
    imageUrl: "https://images.unsplash.com/photo-1506399558188-acca6f8cbf41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXJ2ZXIlMjBjbG91ZCUyMGNvbXB1dGluZyUyMGRhdGElMjBjZW50ZXJ8ZW58MXx8fHwxNzcwOTQ2NzkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    bgColor: "from-[#FFF8E7] to-[#FFF0D1]",
    accentColor: "#FCC36E"
  },
  {
    icon: Zap,
    name: "Edge AI 최적화",
    tag: "Performance",
    title: "초고속 응답 속도",
    description: "엣지 컴퓨팅 기술로 AI 모델을 최적화하여 찰나의 순간에도 정확한 답변을 제공합니다. 시각장애인 사용자가 빠르고 편리하게 쇼핑할 수 있도록 모든 과정이 최적화되어 있습니다.",
    features: [
      "0.3초 이내 상품 인식",
      "배터리 소모 최소화",
      "경량화된 AI 모델",
      "저사양 기기에서도 완벽 작동"
    ],
    imageUrl: "https://images.unsplash.com/photo-1708576180355-4915da6e9ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXN0JTIwc3BlZWQlMjBwZXJmb3JtYW5jZSUyMG9wdGltaXphdGlvbiUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcwOTQ2NzkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    bgColor: "from-[#F9F1E7] to-[#F0E5D8]",
    accentColor: "#D4A574"
  }
];

function TechFeatureSection({ 
  section, 
  index 
}: { 
  section: typeof techSections[0]; 
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.2 });
  const isEven = index % 2 === 0;
  
  // Check if this is the Android Native section (first one)
  const isAndroidSection = index === 0;
  // Check if this is the YOLO section (third one)
  const isYoloSection = index === 2;

  return (
    <div 
      ref={ref}
      className={`relative overflow-hidden bg-gradient-to-br ${section.bgColor} py-24 md:py-32`}
    >
      {/* Android Logo - Only for Android Native section */}
      {isAndroidSection && (
        <div 
          className="absolute bottom-0 right-0 w-[450px] h-[450px] md:w-[600px] md:h-[600px] pointer-events-none z-0"
          style={{
            backgroundImage: `url(${androidLogo})`,
            backgroundSize: "contain",
            backgroundPosition: "bottom right",
            backgroundRepeat: "no-repeat",
            opacity: 0.13,
            filter: "blur(1.5px)",
          }}
        />
      )}

      {/* YOLO Detection Image - Only for YOLO section */}
      {isYoloSection && (
        <div 
          className="absolute bottom-0 right-0 w-[450px] h-[450px] md:w-[600px] md:h-[600px] pointer-events-none z-0"
          style={{
            backgroundImage: `url(${yoloDetection})`,
            backgroundSize: "contain",
            backgroundPosition: "bottom 10px right",
            backgroundRepeat: "no-repeat",
            opacity: 0.22,
            filter: "blur(1px)",
          }}
        />
      )}

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className={`grid gap-12 lg:grid-cols-2 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}>
          {/* Image */}
          <div 
            className={`relative ${isEven ? '' : 'lg:col-start-2'} ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            } transition-all duration-1000`}
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <ImageWithFallback
                src={section.imageUrl}
                alt={section.name}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Floating Badge */}
              <div className="absolute top-6 right-6 flex items-center gap-3 bg-white/95 backdrop-blur-sm rounded-full px-5 py-3 shadow-lg">
                <div 
                  className="flex h-10 w-10 items-center justify-center rounded-full"
                  style={{ backgroundColor: section.accentColor }}
                >
                  <section.icon className="h-5 w-5 text-white" />
                </div>
                <span 
                  className="text-sm font-black"
                  style={{ fontFamily: "KccHanbit", color: section.accentColor }}
                >
                  {section.tag}
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div 
            className={`${isEven ? '' : 'lg:col-start-1 lg:row-start-1'} ${
              isInView ? "opacity-100 translate-x-0" : `opacity-0 ${isEven ? '-translate-x-12' : 'translate-x-12'}`
            } transition-all duration-1000 delay-200`}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <div 
                className="h-1 w-12 rounded-full"
                style={{ backgroundColor: section.accentColor }}
              />
              <span 
                className="text-sm font-black uppercase tracking-wider"
                style={{ fontFamily: "KccHanbit", color: section.accentColor }}
              >
                {section.name}
              </span>
            </div>

            <h3 
              className="text-4xl md:text-5xl font-black mb-6 text-gray-900"
              style={{ fontFamily: "KccHanbit" }}
            >
              {section.title}
            </h3>

            <p 
              className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8"
              style={{ fontFamily: "KccHanbit" }}
            >
              {section.description}
            </p>

            <ul className="space-y-4">
              {section.features.map((feature, i) => (
                <li 
                  key={i}
                  className={`flex items-start gap-3 ${
                    isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-6"
                  } transition-all duration-700`}
                  style={{ 
                    transitionDelay: `${400 + i * 100}ms`,
                    fontFamily: "KccHanbit"
                  }}
                >
                  <div 
                    className="flex-shrink-0 flex h-6 w-6 items-center justify-center rounded-full mt-0.5"
                    style={{ backgroundColor: section.accentColor }}
                  >
                    <svg 
                      className="h-4 w-4 text-white" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M5 13l4 4L19 7" 
                      />
                    </svg>
                  </div>
                  <span className="text-gray-800 font-medium">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TechStackSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { threshold: 0.3 });

  return (
    <section
      id="tech"
      className="scroll-mt-16"
      aria-labelledby="tech-title"
    >
      {/* Header Section */}
      <div 
        ref={headerRef}
        className="relative overflow-hidden bg-gradient-to-br from-[#E8D5C0] via-[#EDD9C4] to-[#F0DEC8] px-6 py-32"
      >
        <div className="mx-auto max-w-4xl text-center">
          <h2
            id="tech-title"
            className={`mb-6 text-4xl md:text-6xl font-black text-[#3D230A] ${
              isHeaderInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } transition-all duration-1000`}
            style={{ fontFamily: "KccHanbit" }}
          >
            GrabIT 기술 스택
          </h2>
          <p
            className={`text-xl md:text-2xl text-[#AA6B1C] leading-relaxed ${
              isHeaderInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } transition-all duration-1000 delay-200`}
            style={{ fontFamily: "KccHanbit" }}
          >
            최신 AI 기술을 결합하여<br className="md:hidden" /> 최적의 사용자 경험을 제공합니다
          </p>
        </div>
      </div>

      {/* Tech Feature Sections */}
      {techSections.map((section, index) => (
        <TechFeatureSection 
          key={section.name}
          section={section}
          index={index}
        />
      ))}
    </section>
  );
}
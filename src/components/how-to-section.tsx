"use client"

import { useRef, useState, useEffect } from "react"
import { useInView } from "../hooks/use-in-view"
import { Smartphone, Camera, Volume2, CheckCircle } from "lucide-react"
import brailleBackground from "figma:asset/16aec2d7415282db89a1a6f2f3c473e24cd50acf.png"

const steps = [
  {
    icon: Smartphone,
    number: "01",
    title: "앱 실행",
    description: "GrabIT 앱을 실행하면 음성 가이드와 함께 자동으로 카메라가 활성화됩니다.",
  },
  {
    icon: Camera,
    number: "02",
    title: "카메라로 상품 인식",
    description: "스마트폰 카메라를 상품 진열대에 비추면 AI가 실시간으로 상품을 인식합니다.",
  },
  {
    icon: Volume2,
    number: "03",
    title: "음성 안내 및 위치 안내",
    description: "인식된 상품의 이름, 가격, 위치 정보를 자연스러운 음성으로 안내합니다.",
  },
  {
    icon: CheckCircle,
    number: "04",
    title: "원하는 상품 선택",
    description: "음성 안내를 따라 원하는 상품을 직접 선택하고 쇼핑을 완료합니다.",
  },
]

// Individual step component with its own IntersectionObserver
function TimelineStep({ 
  step, 
  index, 
  isEven 
}: { 
  step: typeof steps[0]
  index: number
  isEven: boolean 
}) {
  const stepRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [isHighlighted, setIsHighlighted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          setIsHighlighted(true)
          
          // 1.5초 후 파란색으로 변경
          setTimeout(() => {
            setIsHighlighted(false)
          }, 1500)
        }
      },
      { 
        threshold: 0.5,
        rootMargin: "-100px 0px -100px 0px"
      }
    )

    if (stepRef.current) {
      observer.observe(stepRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={stepRef}
      className={`relative flex flex-col items-center gap-6 md:gap-8 md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      {/* Card */}
      <div
        className={`w-full rounded-[16px] border-2 border-[#AA6B1C]/30 bg-white p-8 md:p-10 md:w-[520px] transition-all duration-700 ease-out shadow-[0_2px_8px_rgba(170,107,28,0.1)] hover:shadow-[0_8px_24px_rgba(170,107,28,0.3)] ${
          isEven ? "md:text-right" : "md:text-left"
        } ${
          isVisible 
            ? "opacity-100 translate-y-0 translate-x-0 scale-100" 
            : `opacity-0 translate-y-8 scale-95 ${isEven ? "-translate-x-16 md:-translate-x-32" : "translate-x-16 md:translate-x-32"}`
        }`}
        style={{ fontFamily: "KccHanbit" }}
      >
        <div className={`inline-block px-4 py-1.5 mb-4 text-[13px] font-bold rounded-full tracking-wide ${
          isEven ? "md:float-right md:ml-2" : "md:float-left md:mr-2"
        } ${
          isVisible ? "bg-[#AA6B1C]/10 text-[#43302E]" : "bg-[#F1F5F9] text-[#94A3B8]"
        } transition-all duration-700`}>
          STEP {step.number}
        </div>
        <h3 className="text-[24px] md:text-[26px] font-bold text-[#3D230A] mb-3 clear-both">
          {step.title}
        </h3>
        <p className="text-[16px] md:text-[17px] leading-relaxed text-[#AA6B1C]">
          {step.description}
        </p>
      </div>

      {/* Center Marker with Icon */}
      <div 
        className={`z-10 flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-4 border-[#43302E] transition-all duration-700 ease-out ${
          isHighlighted 
            ? "bg-[#EA580C] scale-100 shadow-[0_6px_20px_rgba(234,88,12,0.5)]" 
            : isVisible
            ? "bg-[#C1DBE8] scale-100 shadow-[0_6px_20px_rgba(193,219,232,0.4)]"
            : "bg-[#CBD5E1] scale-75 shadow-md"
        }`}
      >
        <step.icon
          className={`h-9 w-9 transition-all duration-700 ${
            isVisible ? "text-[#43302E] scale-100" : "text-[#64748B] scale-75"
          }`}
          aria-hidden="true"
        />
      </div>

      {/* Spacer */}
      <div className="hidden md:block md:w-[520px]" />
    </div>
  )
}

export function HowToSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.05 })

  return (
    <section
      id="howto"
      ref={ref}
      className="scroll-mt-16 relative px-6 py-32 md:py-40 min-h-screen overflow-hidden"
      aria-labelledby="howto-title"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${brailleBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      {/* Light overlay to make background softer */}
      <div className="absolute inset-0 z-0 bg-[#FFF4E6]/85" />

      <div className="mx-auto max-w-[1200px] relative z-10">
        {/* Page Title Section */}
        <div className="mb-20 text-center">
          <h2
            id="howto-title"
            className={`mb-3 text-[32px] md:text-[40px] font-bold text-[#3D230A] transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "KccHanbit" }}
          >
            GrabIT 사용 방법
          </h2>
          <p
            className={`text-[16px] text-[#AA6B1C] max-w-2xl mx-auto transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ fontFamily: "KccHanbit" }}
          >
            단 4단계로 독립적인 쇼핑을 시작하세요. 간단하고 직관적인 사용 방법을 확인하세요.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical center line (desktop) */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#E5E7EB] via-[#CBD5E1] to-[#E5E7EB] md:block"
            aria-hidden="true"
          />

          {/* Mobile vertical line (left-aligned) */}
          <div
            className="absolute left-8 top-0 h-full w-[3px] bg-gradient-to-b from-[#E5E7EB] via-[#CBD5E1] to-[#E5E7EB] md:hidden"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-16 md:gap-20">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <TimelineStep
                  key={step.number}
                  step={step}
                  index={i}
                  isEven={isEven}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
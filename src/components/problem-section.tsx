"use client"

import { useRef } from "react"
import { useInView } from "../hooks/use-in-view"
import { AlertTriangle, ShoppingCart, HelpCircle } from "lucide-react"
import backgroundImage from "figma:asset/803bf9e237941d242e962e047f1d5df7a943b1ea.png"

const problems = [
  {
    icon: AlertTriangle,
    headline: "동일한 점자, 다른 상품",
    description:
      "편의점에서 판매되는 대부분의 음료수 캔에는 동일한 점자가 표기되어 있습니다. 콜라와 사이다, 에너지 음료 모두 같은 점자로 '음료'라고만 적혀 있어 구별이 불가능합니다.",
  },
  {
    icon: ShoppingCart,
    headline: "독립적 쇼핑의 어려움",
    description:
      "시각장애인 10명 중 7명이 마트나 편의점에서 혼자 쇼핑하는 것이 어렵다고 응답했습니다. 항상 누군가의 도움이 필요한 현실입니다.",
  },
  {
    icon: HelpCircle,
    headline: "변하지 않는 현실",
    description:
      "수년간 지적되어 왔지만, 점자 표기 기준은 크게 개선되지 않았습니다. 기술을 통해 이 문제를 해결할 수 있습니다.",
  },
]

export function ProblemSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.15 })

  return (
    <section
      id="problem"
      ref={ref}
      className="scroll-mt-16 relative px-6 py-40 md:py-56 overflow-hidden min-h-screen"
      aria-labelledby="problem-title"
    >
      {/* Background Image */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-1000 ${
          isInView ? "opacity-35" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Overlay for better text readability */}
      <div className={`absolute inset-0 z-0 bg-[#FCC36E]/20 transition-opacity duration-1000 ${
        isInView ? "opacity-100" : "opacity-0"
      }`} />

      <div className="relative z-10 mx-auto max-w-6xl pt-8">
        <h2
          id="problem-title"
          className={`mb-6 text-center text-4xl font-bold text-[#3D230A] md:text-6xl transition-all duration-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ 
            transitionDelay: isInView ? "1.5s" : "0s",
            fontFamily: "KccHanbit"
          }}
        >
          <span className="text-balance">시각장애인의 쇼핑은 아직도 어렵습니다</span>
        </h2>
        <p
          className={`mx-auto mb-16 max-w-3xl text-center text-xl text-[#AA6B1C] md:text-2xl transition-all duration-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ 
            transitionDelay: isInView ? "1.5s" : "0s",
            fontFamily: "KccHanbit"
          }}
        >
          우리가 당연하게 여기는 쇼핑이, 누군가에겐 매일의 도전입니다.
        </p>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((problem, i) => (
            <article
              key={problem.headline}
              className={`group rounded-2xl border-3 backdrop-blur-sm p-10 transition-all duration-300 bg-white/95 hover:shadow-[0_8px_24px_rgba(57,24,2,0.4)] ${
                i === 1 
                  ? "border-[#D4A574] hover:border-[#AA6B1C]" 
                  : "border-[#391802] hover:border-[#AA6B1C]"
              } ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ 
                transitionDelay: isInView ? "1.5s" : "0s",
                fontFamily: "KccHanbit"
              }}
            >
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-[#C1DBE8] border-2 border-[#43302E]">
                <problem.icon
                  className="h-8 w-8 text-[#43302E]"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#3D230A]">
                {problem.headline}
              </h3>
              <p className="text-lg leading-relaxed text-[#AA6B1C]">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
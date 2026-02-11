"use client"

import { useRef } from "react"
import { useInView } from "../hooks/use-in-view"
import { Smartphone, Camera, Volume2, CheckCircle } from "lucide-react"

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

export function HowToSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section
      id="howto"
      ref={ref}
      className="scroll-mt-16 bg-secondary px-6 py-24 md:py-32"
      aria-labelledby="howto-title"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="howto-title"
          className={`mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-5xl ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          GrabIT 사용 방법
        </h2>
        <p
          className={`mx-auto mb-16 max-w-xl text-center text-lg text-muted-foreground ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.15s" }}
        >
          단 4단계로 독립적인 쇼핑을 시작하세요.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div
            className="absolute left-1/2 top-0 hidden h-full w-0.5 -translate-x-1/2 bg-border md:block"
            aria-hidden="true"
          />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => {
              const isEven = i % 2 === 0
              return (
                <div
                  key={step.number}
                  className={`relative flex flex-col items-center gap-6 md:flex-row ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
                  style={{ animationDelay: `${0.2 + i * 0.15}s` }}
                >
                  {/* Card */}
                  <div
                    className={`w-full rounded-2xl border border-border bg-card p-6 md:w-5/12 ${
                      isEven ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <span className="font-mono text-sm font-bold text-primary">
                      STEP {step.number}
                    </span>
                    <h3 className="mb-2 mt-1 text-xl font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>

                  {/* Circle icon */}
                  <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-background bg-primary shadow-lg">
                    <step.icon
                      className="h-6 w-6 text-primary-foreground"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Spacer */}
                  <div className="hidden w-5/12 md:block" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useRef } from "react"
import { useInView } from "../hooks/use-in-view"
import { Eye, MapPin, Volume2, ShoppingBag } from "lucide-react"

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
      className="scroll-mt-16 bg-background px-6 py-24 md:py-32"
      aria-labelledby="intro-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2
          id="intro-title"
          className={`mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-5xl ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          GrabIT은 어떤 앱인가요?
        </h2>
        <p
          className={`mx-auto mb-16 max-w-2xl text-center text-lg text-muted-foreground ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.15s" }}
        >
          AI 기술로 시각장애인의 일상 속 쇼핑을 혁신합니다.
        </p>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Phone mockup */}
          <div
            className={`flex justify-center ${
              isInView ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              {/* Phone frame */}
              <div className="relative h-[520px] w-[260px] rounded-[2.5rem] border-[6px] border-foreground/90 bg-foreground/5 shadow-2xl md:h-[600px] md:w-[300px]">
                {/* Notch */}
                <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-foreground/90" />
                {/* Screen content */}
                <div className="flex h-full flex-col items-center justify-center gap-4 p-6 pt-10">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                    <Eye className="h-8 w-8 text-primary-foreground" aria-hidden="true" />
                  </div>
                  <p className="text-center text-lg font-bold text-foreground">
                    GrabIT
                  </p>
                  <div className="w-full space-y-3">
                    <div className="h-3 w-full rounded-full bg-primary/20" />
                    <div className="h-3 w-3/4 rounded-full bg-primary/15" />
                    <div className="h-3 w-5/6 rounded-full bg-primary/10" />
                  </div>
                  <div className="mt-4 flex w-full flex-col gap-2">
                    <div className="flex items-center gap-3 rounded-xl bg-accent p-3">
                      <Volume2 className="h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                      <div className="space-y-1.5">
                        <div className="h-2 w-24 rounded bg-accent-foreground/30" />
                        <div className="h-2 w-16 rounded bg-accent-foreground/20" />
                      </div>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl bg-accent p-3">
                      <MapPin className="h-5 w-5 shrink-0 text-accent-foreground" aria-hidden="true" />
                      <div className="space-y-1.5">
                        <div className="h-2 w-20 rounded bg-accent-foreground/30" />
                        <div className="h-2 w-28 rounded bg-accent-foreground/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature, i) => (
              <div
                key={feature.title}
                className={`group rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg ${
                  isInView ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${0.3 + i * 0.1}s` }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                  <feature.icon
                    className="h-5 w-5 text-accent-foreground"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
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

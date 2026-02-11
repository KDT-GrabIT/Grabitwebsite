"use client"

import { useRef } from "react"
import { useInView } from "../hooks/use-in-view"
import { Cpu, Smartphone, Brain, Server, Zap } from "lucide-react"

const techItems = [
  {
    icon: Smartphone,
    name: "Android Native",
    tag: "Kotlin",
    description: "안정적이고 최적화된 네이티브 Android 앱",
  },
  {
    icon: Cpu,
    name: "On-device AI",
    tag: "Edge",
    description: "인터넷 없이도 작동하는 디바이스 내 AI 처리",
  },
  {
    icon: Brain,
    name: "YOLO 객체 탐지",
    tag: "Detection",
    description: "실시간 상품 인식을 위한 최신 객체 탐지 모델",
  },
  {
    icon: Server,
    name: "RAG 기반 AI 서버",
    tag: "Server",
    description: "정확한 상품 정보 제공을 위한 검색 증강 생성",
  },
  {
    icon: Zap,
    name: "Edge AI 최적화",
    tag: "Performance",
    description: "빠른 응답 속도를 위한 엣지 컴퓨팅 최적화 기술",
  },
]

export function TechStackSection() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { threshold: 0.1 })

  return (
    <section
      id="tech"
      ref={ref}
      className="scroll-mt-16 bg-background px-6 py-24 md:py-32"
      aria-labelledby="tech-title"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="tech-title"
          className={`mb-4 text-center font-serif text-3xl font-bold text-foreground md:text-5xl ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          GrabIT 기술 스택
        </h2>
        <p
          className={`mx-auto mb-16 max-w-xl text-center text-lg text-muted-foreground ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.15s" }}
        >
          최신 AI 기술을 결합하여 최적의 사용자 경험을 제공합니다.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techItems.map((item, i) => (
            <div
              key={item.name}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all hover:border-primary/30 hover:shadow-lg ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.1}s` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent">
                  <item.icon
                    className="h-5 w-5 text-accent-foreground"
                    aria-hidden="true"
                  />
                </div>
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                  {item.tag}
                </span>
              </div>
              <h3 className="mb-2 text-lg font-bold text-foreground">
                {item.name}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

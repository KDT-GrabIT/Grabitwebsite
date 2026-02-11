"use client"

import { useRef } from "react"
import { useInView } from "../hooks/use-in-view"
import { AlertTriangle, ShoppingCart, HelpCircle } from "lucide-react"

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
      className="scroll-mt-16 bg-secondary px-6 py-24 md:py-32"
      aria-labelledby="problem-title"
    >
      <div className="mx-auto max-w-5xl">
        <h2
          id="problem-title"
          className={`mb-6 text-center font-serif text-3xl font-bold text-foreground md:text-5xl ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <span className="text-balance">시각장애인의 쇼핑은 아직도 어렵습니다</span>
        </h2>
        <p
          className={`mx-auto mb-16 max-w-2xl text-center text-lg text-muted-foreground ${
            isInView ? "animate-fade-in-up" : "opacity-0"
          }`}
          style={{ animationDelay: "0.15s" }}
        >
          우리가 당연하게 여기는 쇼핑이, 누군가에겐 매일의 도전입니다.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {problems.map((problem, i) => (
            <article
              key={problem.headline}
              className={`group rounded-2xl border border-border bg-card p-8 transition-all hover:border-primary/30 hover:shadow-lg ${
                isInView ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${0.2 + i * 0.15}s` }}
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-accent">
                <problem.icon
                  className="h-6 w-6 text-accent-foreground"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-3 text-xl font-bold text-foreground">
                {problem.headline}
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                {problem.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

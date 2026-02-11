"use client"

import { useEffect, useState } from "react"

const navLinks = [
  { href: "#problem", label: "문제 인식" },
  { href: "#intro", label: "앱 소개" },
  { href: "#howto", label: "사용 방법" },
  { href: "#tech", label: "기술 스택" },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${"bg-black/40 backdrop-blur-md"}`}
      aria-label="메인 내비게이션"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-end px-6 py-4">
        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium transition-colors hover:text-lime-400 text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
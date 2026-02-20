"use client"

import { useEffect, useState } from "react"
import logoImage from "figma:asset/6b38aca0924708c6d9f51d34308f995979973074.png";

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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 bg-[#B86B15]/20 backdrop-blur-sm`}
      aria-label="메인 내비게이션"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between py-5 pr-8 md:pr-12 lg:pr-16">
        {/* Logo and Brand Name */}
        <div className="flex items-center gap-4 pl-4 md:pl-6 lg:pl-8">
          <img
            src={logoImage}
            alt="GrabIT Logo"
            className="h-12 md:h-16 w-auto drop-shadow-lg"
          />
          <span 
            className="text-2xl md:text-3xl font-black text-white"
            style={{
              fontFamily: "KccHanbit",
              textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)"
            }}
          >
            그래빗
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base md:text-lg font-black transition-colors hover:text-[#B1C9EF] text-white"
                style={{
                  fontFamily: "KccHanbit",
                  textShadow: "0 1px 3px rgba(0, 0, 0, 0.3)"
                }}
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

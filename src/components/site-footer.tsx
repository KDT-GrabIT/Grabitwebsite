import { Github, Mail } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-foreground px-6 py-16 text-primary-foreground">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="font-mono text-2xl font-bold tracking-wider">
              GrabIT
            </p>
            <p className="mt-1 text-sm text-primary-foreground/60">
              시각장애인을 위한 AI 쇼핑 보조 앱
            </p>
          </div>

          {/* Team */}
          <div className="text-center md:text-left">
            <h3 className="mb-2 text-sm font-bold uppercase tracking-widest text-primary-foreground/50">
              Team
            </h3>
            <p className="text-sm text-primary-foreground/70">
              GrabIT Development Team
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center gap-3 md:items-end">
            <a
              href="https://github.com/KDT-GrabIT/GrabIT-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary"
              aria-label="GitHub 저장소 바로가기"
            >
              <Github className="h-5 w-5" aria-hidden="true" />
              GitHub
            </a>
            <a
              href="mailto:contact@grabit.app"
              className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 transition-colors hover:text-primary"
              aria-label="이메일 문의하기"
            >
              <Mail className="h-5 w-5" aria-hidden="true" />
              contact@grabit.app
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-6 text-center">
          <p className="text-xs text-primary-foreground/40">
            {'© 2026 GrabIT. All rights reserved.'}
          </p>
        </div>
      </div>
    </footer>
  )
}

import { getCachedGlobal } from '@/utilities/getGlobals'
import Link from 'next/link'
import React from 'react'
import { ThemeSelector } from '@/providers/Theme/ThemeSelector'
import { CMSLink } from '@/components/Link'

export async function Footer() {
  const footerData = (await getCachedGlobal('footer', 1)()) as any

  const navItems = footerData?.navItems || []
  const copyrightText =
    footerData?.copyrightText || 'MIT licensed · github.com/EricksonAtHome/ElloFive'

  const defaultNavs = [
    { label: 'Behest', url: '/behest' },
    { label: 'Models', url: '/models' },
    { label: 'Docu', url: '/docu' },
    { label: 'Privacy', url: '/privacy' },
    { label: 'GitHub', url: 'https://github.com/EricksonAtHome/ElloFive', newTab: true },
  ]

  return (
    <footer className="mt-auto border-t border-border bg-background text-foreground py-10">
      <div className="max-w-[960px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6">
          <div className="flex flex-col gap-1">
            <Link href="/" className="flex items-center gap-2 mb-1">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/prysel_logo.png" alt="Prysel" className="h-6 w-auto object-contain" />
            </Link>
            <p className="text-xs text-muted-foreground font-medium">
              Ello5 coding system running privately on your local machine.
            </p>
            <p className="text-[11px] text-muted-foreground/80 font-normal">
              Prysel INC
            </p>
          </div>

          <nav className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium">
            {navItems.length > 0
              ? navItems.map(({ link }: any, i: number) => <CMSLink key={i} {...link} />)
              : defaultNavs.map((item, i) => (
                  <Link
                    key={i}
                    href={item.url}
                    target={item.newTab ? '_blank' : '_self'}
                    rel={item.newTab ? 'noopener noreferrer' : undefined}
                    className="hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
          </nav>
        </div>

        <div className="border-t border-border/50 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <span>{copyrightText}</span>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground/80">
              <span className="size-2 rounded-full bg-emerald-500 inline-block animate-pulse" />
              Local-first
            </span>
            <ThemeSelector />
          </div>
        </div>
      </div>
    </footer>
  )
}

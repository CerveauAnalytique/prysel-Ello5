'use client'
import React, { useState } from 'react'
import type { Page } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import RichText from '@/components/RichText'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export const HighImpactHero: React.FC<Page['hero']> = ({ links, richText }) => {
  const [copied, setCopied] = useState(false)
  const installCmd = 'bash scripts/install.sh'

  const handleCopy = () => {
    navigator.clipboard.writeText(installCmd)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="header-hero-wrapper pt-8 pb-14 px-4 bg-background">
      <div className="grid-3d-bg" />
      <div className="relative z-10 max-w-[720px] mx-auto text-center">
        <div className="mb-6 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/ello_logo.svg" alt="ElloFive Logo" className="max-w-[280px] w-full h-auto mx-auto drop-shadow-sm" />
        </div>

        {richText ? (
          <RichText className="mb-6 text-lg text-muted-foreground" data={richText} enableGutter={false} />
        ) : (
          <p className="text-lg text-muted-foreground mb-8 max-w-[560px] mx-auto leading-relaxed">
            The ello5 coding system, running privately on your own machine. Local software-engineering AI on Ollama, with FRC7 FRCL and an on-disk knowledge base.
          </p>
        )}

        <div className="inline-flex items-center gap-3 bg-muted/80 border border-border p-2.5 px-4 rounded-xl text-sm mb-6 max-w-full overflow-x-auto shadow-xs">
          <span className="text-emerald-500 font-mono font-bold">$</span>
          <span className="font-mono text-foreground font-medium">{installCmd}</span>
          <Button type="button" onClick={handleCopy} variant="secondary" size="sm" className="h-7 text-xs px-2.5">
            {copied ? 'Copied!' : 'Copy'}
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          <Badge variant="outline" className="px-3 py-1 text-xs">Elloten — chat UX</Badge>
          <Badge variant="outline" className="px-3 py-1 text-xs">Ello5 — the model</Badge>
          <Badge variant="outline" className="px-3 py-1 text-xs">Local CLI: ellofive</Badge>
        </div>

        {Array.isArray(links) && links.length > 0 && (
          <ul className="flex flex-wrap justify-center gap-4">
            {links.map(({ link }, i) => (
              <li key={i}>
                <CMSLink {...link} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

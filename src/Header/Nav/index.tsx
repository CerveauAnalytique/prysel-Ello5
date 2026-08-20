'use client'

import React from 'react'
import type { Header as HeaderType } from '@/payload-types'
import { CMSLink } from '@/components/Link'
import Link from 'next/link'
import { SearchModal } from '@/components/SearchModal'

export const HeaderNav: React.FC<{ data: HeaderType }> = ({ data }) => {
  const navItems = data?.navItems || []

  const defaultNavs = [
    { label: 'Behest', url: '/behest', mobile: true },
    { label: 'Models', url: '/models', mobile: true },
    { label: 'Docu', url: '/docu', mobile: false },
    { label: 'Privacy', url: '/privacy', mobile: false },
    { label: 'GitHub', url: 'https://github.com/EricksonAtHome/ElloFive', newTab: true, mobile: false },
  ]

  return (
    <nav className="flex items-center gap-4 sm:gap-6 md:gap-8 font-medium text-sm">
      {navItems.length > 0
        ? navItems.map(({ link }, i) => {
            return (
              <CMSLink
                key={i}
                {...link}
                appearance="link"
                className="text-muted-foreground hover:text-foreground transition-colors font-medium text-sm"
              />
            )
          })
        : defaultNavs.map((item, i) => (
            <Link
              key={i}
              href={item.url}
              target={item.newTab ? '_blank' : '_self'}
              rel={item.newTab ? 'noopener noreferrer' : undefined}
              className={`text-muted-foreground hover:text-foreground transition-colors font-medium text-sm ${
                item.mobile ? 'inline-block' : 'hidden md:inline-block'
              }`}
            >
              {item.label}
            </Link>
          ))}
      <SearchModal />
    </nav>
  )
}

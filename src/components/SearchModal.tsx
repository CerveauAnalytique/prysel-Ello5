'use client'

import React, { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'
import { Search, X, Loader2, ArrowRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

interface SearchResult {
  title: string
  url: string
  category: string
  description?: string
}

export const SearchModal: React.FC = () => {
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Lock body scroll when popup is open
  useEffect(() => {
    if (!mounted) return
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen, mounted])

  // Open modal with Cmd+K or Ctrl+K shortcut
  useEffect(() => {
    if (!mounted) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen((prev) => !prev)
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, mounted])

  // Focus input on modal open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50)
      fetchResults('')
    } else {
      setQuery('')
      setResults([])
    }
  }, [isOpen])

  // Debounced Live Search API Call
  useEffect(() => {
    if (!isOpen) return
    const timer = setTimeout(() => {
      fetchResults(query)
    }, 150)

    return () => clearTimeout(timer)
  }, [query, isOpen])

  const fetchResults = async (q: string) => {
    setLoading(true)
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`)
      const data = await res.json()
      setResults(data.results || [])
    } catch (_err) {
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  const handleSelect = (url: string) => {
    setIsOpen(false)
    router.push(url)
  }

  const modalContent = mounted && isOpen ? (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 overflow-y-auto">
      {/* Full Backdrop Overlay */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Spotlight Dialog Window */}
      <div className="relative w-full max-w-xl bg-card border border-border rounded-xl shadow-2xl overflow-hidden z-10 my-auto sm:my-0">
        {/* Input Bar Header */}
        <div className="flex items-center px-4 border-b border-border bg-background">
          <Search className="w-4 h-4 text-muted-foreground shrink-0 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search pages, commands, models & docs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full h-12 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
          />
          {loading && <Loader2 className="w-4 h-4 text-orange-500 animate-spin shrink-0 ml-2" />}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted ml-2 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {results.length > 0 ? (
            results.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelect(item.url)}
                className="w-full text-left p-3 rounded-lg flex items-center justify-between hover:bg-muted/70 transition-colors group cursor-pointer"
              >
                <div className="space-y-1 max-w-[85%]">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-foreground group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </span>
                    <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                      {item.category}
                    </Badge>
                  </div>
                  {item.description && (
                    <p className="text-xs text-muted-foreground truncate">{item.description}</p>
                  )}
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            ))
          ) : !loading ? (
            <div className="p-8 text-center text-xs text-muted-foreground">
              No search results found for &quot;{query}&quot;.
            </div>
          ) : null}
        </div>

        {/* Modal Footer */}
        <div className="border-t border-border px-4 py-2 bg-muted/40 text-[11px] text-muted-foreground flex items-center justify-between">
          <span>Search pages, commands & docs</span>
          <span>Press <kbd className="font-mono text-[10px] border border-border px-1 rounded bg-background">ESC</kbd> to close</span>
        </div>
      </div>
    </div>
  ) : null

  return (
    <>
      {/* Header Search Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors p-1.5 sm:px-2.5 rounded-lg border border-border/50 bg-muted/30 hover:bg-muted/60 text-xs font-medium cursor-pointer"
        aria-label="Open Search"
      >
        <Search className="w-4 h-4" />
        <span className="hidden sm:inline">Search...</span>
        {mounted && (
          <kbd className="hidden sm:inline-flex items-center gap-0.5 pointer-events-none h-5 select-none rounded border border-border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        )}
      </button>

      {/* Render Modal via React Portal directly into body */}
      {mounted && typeof document !== 'undefined' ? createPortal(modalContent, document.body) : null}
    </>
  )
}

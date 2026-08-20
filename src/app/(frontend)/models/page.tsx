'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Download, Copy, Check, Cpu, Search, Lock, Loader2 } from 'lucide-react'

interface AIModelDoc {
  id: string
  name: string
  slug?: string
  baseModel: string
  role: string
  size?: string
  vram?: string
  params?: string
  command?: string
  badge?: string
  visibility: 'public' | 'hidden' | 'private'
  downloadsCount?: number
  updatedAt?: string
}

export default function ModelsPage() {
  const [models, setModels] = useState<AIModelDoc[]>([])
  const [loading, setLoading] = useState(true)
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    async function loadModels() {
      try {
        const res = await fetch('/api/models')
        const data = await res.json()
        if (Array.isArray(data.models)) {
          setModels(data.models)
        } else {
          setModels([])
        }
      } catch (_err) {
        setModels([])
      } finally {
        setLoading(false)
      }
    }
    loadModels()
  }, [])

  const handleCopy = (id: string, command: string) => {
    navigator.clipboard.writeText(command)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const filteredModels = models.filter(
    (m) =>
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.baseModel.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="w-full max-w-[960px] mx-auto px-6 py-12 text-foreground space-y-10">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-border pb-8">
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">AI Models</h1>
        <p className="text-muted-foreground text-base max-w-[640px]">
          Browse and download available local AI model architectures, fine-tunes, and quantized weights for Ollama and the local <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-xs text-foreground border border-border">ellofive</code> CLI.
        </p>
      </div>

      {/* Search & Filter Bar */}
      {!loading && models.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 text-sm"
            />
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span>{filteredModels.length} models available</span>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="py-20 text-center space-y-3">
          <Loader2 className="w-6 h-6 text-orange-600 dark:text-orange-400 animate-spin mx-auto" />
          <p className="text-xs text-muted-foreground">Loading models...</p>
        </div>
      ) : models.length === 0 ? (
        /* Empty State when no models exist in Payload CMS */
        <Card className="border border-border bg-card p-12 text-center space-y-4">
          <div className="size-12 rounded-full bg-muted flex items-center justify-center mx-auto text-muted-foreground">
            <Cpu className="w-6 h-6 text-muted-foreground" />
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-foreground">No Models Available</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              There are currently no public AI models released. Check back soon for new model weights and updates.
            </p>
          </div>
        </Card>
      ) : (
        /* Real Models List */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredModels.map((model) => (
            <Card
              key={model.id}
              className="border border-border bg-card shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <CardHeader className="p-6 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-orange-600 dark:text-orange-400" />
                    <CardTitle className="text-lg font-bold font-mono">{model.name}</CardTitle>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {model.visibility === 'hidden' && (
                      <Badge variant="outline" className="text-[10px] gap-1 text-amber-500 border-amber-500/30">
                        <Lock className="w-3 h-3" />
                        Hidden link
                      </Badge>
                    )}
                    <Badge variant={model.badge === 'Official Pro' ? 'default' : 'secondary'} className="text-xs">
                      {model.badge || 'Model'}
                    </Badge>
                  </div>
                </div>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {model.role}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-muted-foreground border-y border-border/50 py-3">
                  <div>
                    <span className="font-semibold text-foreground">Base:</span>{' '}
                    <code className="bg-muted px-1.5 py-0.5 rounded font-mono">{model.baseModel}</code>
                  </div>
                  {model.size && (
                    <div>
                      <span className="font-semibold text-foreground">Size:</span> {model.size}
                    </div>
                  )}
                  {model.params && (
                    <div>
                      <span className="font-semibold text-foreground">Params:</span> {model.params}
                    </div>
                  )}
                  {model.vram && (
                    <div>
                      <span className="font-semibold text-foreground">VRAM:</span> {model.vram}
                    </div>
                  )}
                </div>

                {/* Pull Command Box */}
                {model.command && (
                  <div className="bg-zinc-950 rounded-lg p-3 font-mono text-xs text-zinc-100 flex items-center justify-between gap-2 overflow-x-auto">
                    <span className="truncate text-emerald-400">$ {model.command}</span>
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopy(model.id, model.command!)}
                      className="h-7 text-xs px-2 text-zinc-300 hover:text-white hover:bg-zinc-800 shrink-0"
                    >
                      {copiedId === model.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </Button>
                  </div>
                )}
              </CardContent>

              <CardFooter className="p-6 pt-0 flex items-center justify-between text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Download className="w-3.5 h-3.5" />
                  {model.downloadsCount || 0} downloads
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}

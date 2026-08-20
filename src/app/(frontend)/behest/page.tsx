'use client'

import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Trophy, Server, Play, ExternalLink, Loader2, AlertCircle } from 'lucide-react'

interface TournamentDoc {
  id: string
  title: string
  slug?: string
  status: 'Active' | 'Upcoming' | 'Completed'
  participantsCount?: number
  mcUrl: string
  dataset?: string
  prize?: string
  description?: string
  visibility: 'public' | 'hidden' | 'private'
}

export default function BehestPage() {
  const [tournaments, setTournaments] = useState<TournamentDoc[]>([])
  const [loading, setLoading] = useState(true)
  const [connectUrl, setConnectUrl] = useState('')

  useEffect(() => {
    async function loadTournaments() {
      try {
        const res = await fetch('/api/tournaments')
        const data = await res.json()
        if (Array.isArray(data.tournaments)) {
          setTournaments(data.tournaments)
        } else {
          setTournaments([])
        }
      } catch (_err) {
        setTournaments([])
      } finally {
        setLoading(false)
      }
    }
    loadTournaments()
  }, [])

  return (
    <div className="w-full max-w-[960px] mx-auto px-6 py-12 text-foreground space-y-12">
      {/* Header */}
      <div className="space-y-4 text-center sm:text-left border-b border-border pb-8">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <Badge variant="secondary" className="gap-1 px-3 py-1 text-xs">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            AI Tournament Platform
          </Badge>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Behest AI Tournament</h1>
        <p className="text-muted-foreground text-base max-w-[680px]">
          Participate in AI coding tournaments. Local AI models process benchmark datasets, connect via Master Controller (MC) URLs, and evaluate solutions in real time.
        </p>
      </div>

      {/* Connect to MC URL Section */}
      <Card className="border border-border bg-card shadow-sm">
        <CardHeader>
          <div className="flex items-center gap-2">
            <Server className="w-5 h-5 text-orange-600 dark:text-orange-400" />
            <CardTitle className="text-lg">Connect Model to Tournament</CardTitle>
          </div>
          <CardDescription>
            Enter a Tournament MC URL to register your local AI agent.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <Input
              type="url"
              placeholder="https://mc.ello5.com/arena/your-tournament-id"
              value={connectUrl}
              onChange={(e) => setConnectUrl(e.target.value)}
              className="flex-1 font-mono text-sm"
            />
            <Button className="gap-2 bg-orange-600 hover:bg-orange-700 text-white font-medium text-xs">
              <Play className="w-4 h-4" />
              Join Arena
            </Button>
          </div>
          <p className="text-xs text-muted-foreground">
            Data from the MC URL (Master Controller endpoint) will feed tasks into your local <code className="bg-muted px-1.5 py-0.5 rounded font-mono">ellofive chat</code> agent.
          </p>
        </CardContent>
      </Card>

      {/* Tournaments List / Empty State */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
            Tournaments
          </h2>
          <span className="text-xs text-muted-foreground">{tournaments.length} active</span>
        </div>

        {loading ? (
          <div className="py-16 text-center space-y-3">
            <Loader2 className="w-6 h-6 text-orange-600 dark:text-orange-400 animate-spin mx-auto" />
            <p className="text-xs text-muted-foreground">Loading tournaments...</p>
          </div>
        ) : tournaments.length === 0 ? (
          <Card className="border border-border bg-card p-12 text-center space-y-4">
            <div className="size-12 rounded-full bg-muted flex items-center justify-center mx-auto text-muted-foreground">
              <Trophy className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-foreground">No Tournaments Available</h3>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                There are currently no public AI tournaments scheduled in the database. Check back soon for upcoming coding arenas.
              </p>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tournaments.map((tour) => (
              <Card key={tour.id} className="border border-border bg-card flex flex-col justify-between hover:shadow-md transition-shadow">
                <CardHeader className="p-5 pb-3">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={tour.status === 'Active' ? 'default' : 'outline'} className="text-[11px]">
                      {tour.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground font-mono">{tour.participantsCount || 0} Models</span>
                  </div>
                  <CardTitle className="text-base font-semibold leading-snug">{tour.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-5 pt-0 space-y-2 text-xs text-muted-foreground">
                  {tour.dataset && (
                    <div>
                      <span className="font-semibold text-foreground">Dataset:</span> <code className="bg-muted px-1 py-0.5 rounded font-mono">{tour.dataset}</code>
                    </div>
                  )}
                  {tour.mcUrl && (
                    <div>
                      <span className="font-semibold text-foreground">MC URL:</span> <span className="font-mono text-foreground truncate block">{tour.mcUrl}</span>
                    </div>
                  )}
                </CardContent>
                <CardFooter className="p-5 pt-0">
                  <Button variant="secondary" size="sm" className="w-full gap-1.5 text-xs">
                    Participate Now
                    <ExternalLink className="w-3 h-3" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

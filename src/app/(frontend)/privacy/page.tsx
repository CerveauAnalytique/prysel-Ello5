import React from 'react'
import { Metadata } from 'next'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ShieldCheck, Lock, HardDrive, EyeOff, ServerOff } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn about Prysel local-first architecture, private on-disk memory, zero telemetry, and offline AI execution.',
}

export default function PrivacyPage() {
  return (
    <div className="w-full max-w-[960px] mx-auto px-6 py-12 text-foreground space-y-12">
      {/* Header */}
      <div className="space-y-4 text-center sm:text-left border-b border-border pb-8">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <Badge variant="secondary" className="gap-1 px-3 py-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            Privacy & Data Security
          </Badge>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Privacy & Local-First Policy</h1>
        <p className="text-muted-foreground text-base max-w-[680px]">
          ElloFive is engineered ground-up for complete data privacy. Your code, prompts, and memory never leave your workstation.
        </p>
      </div>

      {/* Core Privacy Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border border-border bg-card shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <ServerOff className="w-5 h-5 text-emerald-500" />
              <CardTitle className="text-base font-semibold">100% Offline & Local</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground leading-relaxed">
            All AI inference runs locally using Ollama and local model weights. No prompts, code files, or completion streams are sent to remote cloud servers.
          </CardContent>
        </Card>

        <Card className="border border-border bg-card shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <HardDrive className="w-5 h-5 text-emerald-500" />
              <CardTitle className="text-base font-semibold">On-Disk Memory Control</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground leading-relaxed">
            Knowledge base entries, preferences, and project context are stored strictly in your local project directory at <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-xs text-foreground border border-border">memory/knowledge-base.md</code>.
          </CardContent>
        </Card>

        <Card className="border border-border bg-card shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <EyeOff className="w-5 h-5 text-emerald-500" />
              <CardTitle className="text-base font-semibold">Zero Telemetry & Analytics</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground leading-relaxed">
            We do not track user behavior, store IP logs, collect usage metrics, or sell user data. What happens on your CLI stays on your hardware.
          </CardContent>
        </Card>

        <Card className="border border-border bg-card shadow-sm">
          <CardHeader>
            <div className="flex items-center gap-3">
              <Lock className="w-5 h-5 text-emerald-500" />
              <CardTitle className="text-base font-semibold">Open Source & Auditable</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground leading-relaxed">
            The full source code of ElloFive is open source under the MIT License and hosted transparently on GitHub for community audit and security review.
          </CardContent>
        </Card>
      </div>

      {/* Corporate Disclosure */}
      <div className="rounded-xl border border-border bg-muted/40 p-6 space-y-2">
        <h3 className="text-sm font-semibold text-foreground">Organization & Ownership</h3>
        <p className="text-xs text-muted-foreground leading-relaxed">
          ElloFive is maintained and supported by <strong className="text-foreground">Prysel INC</strong>. For privacy inquiries or compliance questions, visit <a href="https://github.com/EricksonAtHome/ElloFive" target="_blank" rel="noopener noreferrer" className="text-orange-600 dark:text-orange-400 hover:underline">github.com/EricksonAtHome/ElloFive</a>.
        </p>
      </div>
    </div>
  )
}

import React from 'react'
import { Metadata } from 'next'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { BookOpen, Terminal, Globe, Code, FileText, Cpu, ShieldAlert } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Code Documentation',
  description: 'Complete code documentation for Prysel CLI, REST API endpoints, network domains, and local memory.',
}

export default function DocuPage() {
  const domains = [
    { host: 'ai.ello5.com', role: 'Elloten chat UI/UX frontend', protocol: 'HTTPS', status: 'Active' },
    { host: 'api.ello5.com', role: 'REST API gateway (/v1/chat, /run/:model)', protocol: 'HTTPS / WSS', status: 'Active' },
    { host: 'ft.svr.ello5.com', role: 'Runtime front-tier model serving node', protocol: 'HTTPS', status: 'Active' },
    { host: 'ello5.com', role: 'Main domain redirect → ai.ello5.com', protocol: 'HTTPS', status: 'Redirect' },
  ]

  const cliCommands = [
    { cmd: 'ellofive chat', desc: 'Launch interactive terminal chat session with local memory injection.' },
    { cmd: 'ellofive chat "prompt"', desc: 'Single prompt execution with strict code output format.' },
    { cmd: 'ellofive memory add "rule"', desc: 'Add persistent developer preference or project constraint.' },
    { cmd: 'ellofive memory show', desc: 'Display on-disk knowledge base content.' },
    { cmd: 'ellofive frc examples/hello.frcl', desc: 'Execute FRC7 / FRCL local AI script.' },
    { cmd: 'ellofive api', desc: 'Start local REST API gateway & Elloten web server (http://127.0.0.1:3000).' },
  ]

  return (
    <div className="w-full max-w-[960px] mx-auto px-6 py-12 text-foreground space-y-12">
      {/* Header */}
      <div className="space-y-4 text-center sm:text-left border-b border-border pb-8">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <Badge variant="secondary" className="gap-1 px-3 py-1 text-xs">
            <BookOpen className="w-3.5 h-3.5 text-orange-500" />
            Developer Code Documentation
          </Badge>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Code Documentation</h1>
        <p className="text-muted-foreground text-base max-w-[680px]">
          Comprehensive guide for ElloFive CLI commands, REST API endpoints, network domains, and local on-disk memory.
        </p>
      </div>

      {/* Section 1: CLI Commands */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          <h2 className="text-lg font-bold">CLI Command Reference</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%] font-semibold">Command</TableHead>
              <TableHead className="font-semibold">Description & Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {cliCommands.map((c, i) => (
              <TableRow key={i}>
                <TableCell className="font-mono text-xs font-semibold">
                  <code className="bg-muted px-2 py-1 rounded-md text-foreground border border-border">
                    {c.cmd}
                  </code>
                </TableCell>
                <TableCell className="text-muted-foreground text-xs">{c.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Section 2: Network Domains */}
      <div className="space-y-6 pt-4 border-t border-border">
        <div className="flex items-center gap-2">
          <Globe className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          <h2 className="text-lg font-bold">Network Domains & Gateways</h2>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[35%] font-semibold">Host</TableHead>
              <TableHead className="w-[45%] font-semibold">Role & Purpose</TableHead>
              <TableHead className="font-semibold">Protocol</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {domains.map((d, i) => (
              <TableRow key={i}>
                <TableCell className="font-mono text-xs font-semibold">
                  <code className="text-orange-600 dark:text-orange-400 bg-muted px-2 py-1 rounded-md border border-border">
                    {d.host}
                  </code>
                </TableCell>
                <TableCell className="text-muted-foreground text-xs">{d.role}</TableCell>
                <TableCell className="font-mono text-xs text-muted-foreground">{d.protocol}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Section 3: REST API Specification */}
      <div className="space-y-4 pt-4 border-t border-border">
        <div className="flex items-center gap-2 mb-2">
          <Code className="w-5 h-5 text-orange-600 dark:text-orange-400" />
          <h2 className="text-lg font-bold">REST API Specification</h2>
        </div>
        <Card className="border border-border bg-card">
          <CardHeader className="p-5 pb-3">
            <CardTitle className="text-base font-semibold">POST /v1/chat</CardTitle>
            <CardDescription className="text-xs text-muted-foreground">
              Send prompt payloads to local or remote ElloFive gateway (<code className="bg-muted px-1.5 py-0.5 rounded font-mono">api.ello5.com</code>)
            </CardDescription>
          </CardHeader>
          <CardContent className="p-5 pt-0 space-y-3">
            <div className="rounded-xl border border-border bg-zinc-950 p-4 font-mono text-xs text-zinc-100 overflow-x-auto leading-relaxed">
              <p className="text-zinc-500"># Request Payload</p>
              <p><span className="text-emerald-400">$</span> curl -X POST http://127.0.0.1:3000/v1/chat \</p>
              <p className="pl-4">-H &apos;Content-Type: application/json&apos; \</p>
              <p className="pl-4">-d &apos;&#123;&quot;message&quot;: &quot;Write a secure health endpoint&quot;, &quot;model&quot;: &quot;ellofive&quot;&#125;&apos;</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

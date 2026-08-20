import React from 'react'
import { Metadata } from 'next'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Globe, Server, Link2, Code } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Network Domains & API | ElloFive',
  description: 'Documentation of ElloFive domain routing, REST endpoints, and Elloten API gateway.',
}

export default function DomainsPage() {
  const domains = [
    { host: 'ai.ello5.com', role: 'Elloten chat UI/UX frontend', protocol: 'HTTPS', status: 'Active' },
    { host: 'api.ello5.com', role: 'REST API gateway (/v1/chat, /run/:model)', protocol: 'HTTPS / WSS', status: 'Active' },
    { host: 'ft.svr.ello5.com', role: 'Runtime front-tier model serving node', protocol: 'HTTPS', status: 'Active' },
    { host: 'ello5.com', role: 'Main domain redirect → ai.ello5.com', protocol: 'HTTPS', status: 'Redirect' },
  ]

  return (
    <div className="w-full max-w-[960px] mx-auto px-6 py-12 text-foreground space-y-12">
      {/* Header */}
      <div className="space-y-4 text-center sm:text-left border-b border-border pb-8">
        <div className="flex items-center justify-center sm:justify-start gap-2">
          <Badge variant="secondary" className="gap-1 px-3 py-1">
            <Globe className="w-3.5 h-3.5 text-orange-500" />
            Infrastructure Documentation
          </Badge>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Network Domains & API Gateway</h1>
        <p className="text-muted-foreground text-base max-w-[680px]">
          Overview of official ElloFive domains, endpoint specifications, and local REST proxy configuration.
        </p>
      </div>

      {/* Domains Table */}
      <div className="space-y-6">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
          ElloFive Domain Registry
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[35%] font-semibold">Host</TableHead>
              <TableHead className="w-[45%] font-semibold">Role & Purpose</TableHead>
              <TableHead className="font-semibold">Protocol</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
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
                <TableCell>
                  <Badge variant={d.status === 'Active' ? 'default' : 'outline'} className="text-[11px]">
                    {d.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* API Usage Examples */}
      <div className="space-y-4">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
          REST API Examples
        </h2>
        <Card className="border border-border bg-card">
          <CardHeader className="p-5 pb-3">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-orange-600 dark:text-orange-400" />
              <CardTitle className="text-base font-semibold">Local API Gateway Endpoint</CardTitle>
            </div>
            <CardDescription className="text-xs text-muted-foreground">
              Send requests locally or via <code className="bg-muted px-1.5 py-0.5 rounded font-mono">api.ello5.com</code>
            </CardDescription>
          </CardHeader>
          <CardContent className="p-5 pt-0">
            <div className="rounded-xl border border-border bg-zinc-950 p-4 font-mono text-xs text-zinc-100 overflow-x-auto leading-relaxed">
              <p className="text-zinc-500"># Send chat completion request</p>
              <p><span className="text-emerald-400">$</span> curl -s http://127.0.0.1:3000/v1/chat \</p>
              <p className="pl-4">-H &apos;Content-Type: application/json&apos; \</p>
              <p className="pl-4">-d &apos;&#123;&quot;message&quot;:&quot;Write a secure health endpoint&quot;&#125;&apos;</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

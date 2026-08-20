import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { ShieldCheck } from 'lucide-react'

export const Ello5Sections: React.FC = () => {
  return (
    <div className="w-full max-w-[960px] mx-auto px-6 py-12 text-foreground space-y-16">
      {/* Quick Start */}
      <section id="quickstart" className="pt-8 border-t border-border">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold">
            Quick start
          </h2>
          <Badge variant="secondary">CLI & API</Badge>
        </div>
        <div className="rounded-xl border border-border bg-zinc-950 p-5 font-mono text-xs text-zinc-100 shadow-md overflow-x-auto leading-relaxed">
          <p><span className="text-emerald-400">$</span> bash scripts/install.sh</p>
          <p className="text-zinc-500"># or rebuild models only:</p>
          <p><span className="text-emerald-400">$</span> ellofive setup</p>
          <br />
          <p><span className="text-emerald-400">$</span> ellofive chat</p>
          <p><span className="text-emerald-400">$</span> ellofive chat <span className="text-amber-300">&quot;Write a secure FastAPI health endpoint with tests&quot;</span></p>
          <br />
          <p><span className="text-emerald-400">$</span> ellofive memory add <span className="text-amber-300">&quot;Prefer TypeScript strict mode&quot;</span></p>
          <p><span className="text-emerald-400">$</span> ellofive memory show</p>
          <br />
          <p><span className="text-emerald-400">$</span> ellofive frc examples/hello.frcl</p>
          <p><span className="text-emerald-400">$</span> ellofive dl smoke</p>
          <br />
          <p className="text-zinc-500"># Elloten UI + Ello5 API</p>
          <p><span className="text-emerald-400">$</span> ellofive api</p>
          <p className="text-zinc-400"># → http://127.0.0.1:3000  (Elloten chat + /v1/chat + /run/:model)</p>
        </div>
      </section>

      {/* What You Get */}
      <section className="pt-8 border-t border-border">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6">
          What you get
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%] font-semibold">Piece</TableHead>
              <TableHead className="font-semibold">Purpose</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-mono text-xs font-medium">
                <code className="bg-muted px-2 py-1 rounded-md text-foreground border border-border">models/ello5-coding-system.md</code>
              </TableCell>
              <TableCell className="text-muted-foreground">Ello5 coding personality source</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs font-medium">
                <code className="bg-muted px-2 py-1 rounded-md text-foreground border border-border">ellofive</code> / <code className="bg-muted px-2 py-1 rounded-md text-foreground border border-border">ellofive chat</code>
              </TableCell>
              <TableCell className="text-muted-foreground">Pro chat with local memory injection</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs font-medium">
                <code className="bg-muted px-2 py-1 rounded-md text-foreground border border-border">ellofive memory</code>
              </TableCell>
              <TableCell className="text-muted-foreground">Private on-disk knowledge base</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs font-medium">
                <code className="bg-muted px-2 py-1 rounded-md text-foreground border border-border">frc/</code>
              </TableCell>
              <TableCell className="text-muted-foreground">FRCL → real local inference</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs font-medium">
                <code className="bg-muted px-2 py-1 rounded-md text-foreground border border-border">web/</code>
              </TableCell>
              <TableCell className="text-muted-foreground">Elloten chat UX (Ello5 model)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs font-medium">
                <code className="bg-muted px-2 py-1 rounded-md text-foreground border border-border">ellofive api</code>
              </TableCell>
              <TableCell className="text-muted-foreground">Elloten + API gateway for ai / api.ello5.com</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs font-medium">
                <code className="bg-muted px-2 py-1 rounded-md text-foreground border border-border">deeplearning/DeepFakes</code>
              </TableCell>
              <TableCell className="text-muted-foreground">Deep learning toolkit</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs font-medium">
                <code className="bg-muted px-2 py-1 rounded-md text-foreground border border-border">memory/knowledge-base.md</code>
              </TableCell>
              <TableCell className="text-muted-foreground">Durable preferences & decisions</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>

      {/* Models */}
      <section id="models" className="pt-8 border-t border-border">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6">
          Models
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[30%] font-semibold">Name</TableHead>
              <TableHead className="w-[30%] font-semibold">Default base</TableHead>
              <TableHead className="font-semibold">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-mono text-xs font-medium">
                <code className="bg-muted px-2 py-1 rounded-md text-foreground border border-border">ellofive</code>
              </TableCell>
              <TableCell className="font-mono text-xs text-foreground">qwen2.5:7b</TableCell>
              <TableCell className="text-muted-foreground">Ello5 Coding System (Pro)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs font-medium">
                <code className="bg-muted px-2 py-1 rounded-md text-foreground border border-border">ellofive-fast</code>
              </TableCell>
              <TableCell className="font-mono text-xs text-foreground">llama3.2:3b</TableCell>
              <TableCell className="text-muted-foreground">Low latency</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs font-medium">
                <code className="bg-muted px-2 py-1 rounded-md text-foreground border border-border">ellofive</code>
              </TableCell>
              <TableCell className="font-mono text-xs text-foreground">qwen2.5:7b</TableCell>
              <TableCell className="text-muted-foreground">Ello5 Coding System (Pro)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs font-medium">
                <code className="bg-muted px-2 py-1 rounded-md text-foreground border border-border">models5</code>
              </TableCell>
              <TableCell className="font-mono text-xs text-foreground">alias → Pro</TableCell>
              <TableCell className="text-muted-foreground">FRC7 default</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <p className="mt-4 text-xs text-muted-foreground leading-relaxed">
          Override the Pro base with <code className="bg-muted px-1.5 py-0.5 rounded font-mono text-foreground border border-border">ELLOFIVE_BASE_MODEL=qwen2.5:14b ellofive setup</code> (needs lots of RAM).
        </p>
      </section>

      {/* Ello5 Coding System */}
      <section className="pt-8 border-t border-border">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6">
          Ello5 coding system
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="p-6">
              <CardTitle className="text-base font-semibold">Production-ready by default</CardTitle>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
                Self-review, SOLID / DRY / KISS, and security checks (OWASP) built into every response.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="p-6">
              <CardTitle className="text-base font-semibold">Tests & performance</CardTitle>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
                Generated code ships with tests in mind, and stays aware of GPU and streaming constraints.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="border border-border bg-card shadow-sm hover:shadow-md transition-shadow">
            <CardHeader className="p-6">
              <CardTitle className="text-base font-semibold">Privacy-first, local memory</CardTitle>
              <CardDescription className="text-sm text-muted-foreground leading-relaxed mt-2">
                Preferences and decisions persist on disk, not in the cloud — nothing leaves your machine.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Ello5 Domains */}
      <section id="domains" className="pt-8 border-t border-border">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6">
          Ello5 domains (ello5.com)
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[40%] font-semibold">Host</TableHead>
              <TableHead className="font-semibold">Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-mono text-xs">
                <code className="text-orange-600 dark:text-orange-400 bg-muted px-2 py-1 rounded-md font-medium border border-border">ai.ello5.com</code>
              </TableCell>
              <TableCell className="text-muted-foreground">Elloten chat UI/UX</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs">
                <code className="text-orange-600 dark:text-orange-400 bg-muted px-2 py-1 rounded-md font-medium border border-border">api.ello5.com</code>
              </TableCell>
              <TableCell className="text-muted-foreground">REST API (/v1/chat, /run/:model)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs">
                <code className="text-orange-600 dark:text-orange-400 bg-muted px-2 py-1 rounded-md font-medium border border-border">ft.svr.ello5.com</code>
              </TableCell>
              <TableCell className="text-muted-foreground">Runtime front-tier (model serve)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-mono text-xs">
                <code className="text-orange-600 dark:text-orange-400 bg-muted px-2 py-1 rounded-md font-medium border border-border">ello5.com</code>
              </TableCell>
              <TableCell className="text-muted-foreground">Redirect → ai.ello5.com</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="rounded-xl border border-border bg-zinc-950 p-5 font-mono text-xs text-zinc-100 shadow-md mt-6 overflow-x-auto leading-relaxed">
          <p className="text-zinc-500"># Chat via API</p>
          <p><span className="text-emerald-400">$</span> curl -s http://127.0.0.1:3000/v1/chat \</p>
          <p className="pl-4">-H &apos;Content-Type: application/json&apos; \</p>
          <p className="pl-4">-d &apos;&#123;&quot;message&quot;:&quot;Write a secure health endpoint&quot;&#125;&apos;</p>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className="pt-8 border-t border-border">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6">
          Privacy
        </h2>
        <Card className="border border-border bg-card shadow-sm">
          <CardContent className="p-6 flex items-start gap-4">
            <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Default mode is offline/local. Memory stays in <code className="bg-muted px-1.5 py-0.5 rounded-md font-mono text-xs text-foreground border border-border">memory/</code> on your machine. No hidden telemetry.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Credits */}
      <section className="pt-8 border-t border-border">
        <h2 className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-6">
          Credits
        </h2>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground font-medium w-1/3">Runtime</TableCell>
              <TableCell className="font-medium">
                <a href="https://ollama.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-orange-600 underline underline-offset-4 transition-colors">Ollama</a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground font-medium">FRCL</TableCell>
              <TableCell className="font-medium">
                <a href="https://github.com/EricksonAtHome/FRC7" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-orange-600 underline underline-offset-4 transition-colors">EricksonAtHome/FRC7</a>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-muted-foreground font-medium">Deep learning</TableCell>
              <TableCell className="font-medium">
                <a href="https://github.com/yeahreum/DeepFakes" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-orange-600 underline underline-offset-4 transition-colors">yeahreum/DeepFakes</a>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </section>
    </div>
  )
}

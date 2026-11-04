import React, { useState } from 'react';
import { 
  Network, 
  ArrowRight, 
  Mail, 
  Cpu, 
  ShieldCheck, 
  Workflow, 
  Send, 
  CheckCircle2, 
  Zap,
  Terminal,
  Database
} from 'lucide-react';

const PIPELINE_STEPS = [
  {
    id: "step-1",
    title: "1. Inbound Ingestion",
    icon: Mail,
    color: "from-blue-500 to-cyan-500",
    badge: "IMAP / Gmail / SES",
    specs: "Edge Webhook listener (<3ms). Streaming multipart MIME decoding in Rust without disk IO.",
    latency: "3ms"
  },
  {
    id: "step-2",
    title: "2. Zero-PII Sanitizer",
    icon: ShieldCheck,
    color: "from-emerald-500 to-teal-500",
    badge: "Local Regex + SpaCy",
    specs: "Masks Credit Cards, SSN, Passwords, and internal employee secrets prior to LLM forwarding.",
    latency: "4ms"
  },
  {
    id: "step-3",
    title: "3. MCP Protocol Engine",
    icon: Terminal,
    color: "from-indigo-500 to-purple-500",
    badge: "JSON-RPC 2.0 SSE",
    specs: "Bidirectional multiplexing. Registers live schema tools directly into Claude Desktop or Cursor.",
    latency: "2ms"
  },
  {
    id: "step-4",
    title: "4. Neural Reasoning",
    icon: Cpu,
    color: "from-purple-500 to-pink-500",
    badge: "Claude / Gemini / vLLM",
    specs: "Zero-shot classification, entity extraction, sentiment polarity calculation & contextual drafting.",
    latency: "25ms"
  },
  {
    id: "step-5",
    title: "5. Downstream Dispatch",
    icon: Zap,
    color: "from-amber-500 to-orange-500",
    badge: "Linear / Slack / Draft",
    specs: "Executes deterministic tool calls. Human-in-the-loop approval or autonomous background execution.",
    latency: "4ms"
  }
];

export default function ArchitectureSection() {
  const [activeStep, setActiveStep] = useState(PIPELINE_STEPS[2]);

  return (
    <section id="architecture" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
      
      {/* Background radial gradient */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-4">
          <Network className="w-3.5 h-3.5" />
          <span>Real-time Execution Pipeline</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          How Dispatch routes in under 50ms.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          From the millisecond a raw email hits our edge socket to the moment your AI agent executes a tool call in Cursor.
        </p>
      </div>

      {/* Interactive Pipeline Steps Horizontal / Vertical */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-10">
        {PIPELINE_STEPS.map((step) => {
          const isSelected = activeStep.id === step.id;
          const Icon = step.icon;

          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(step)}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                isSelected
                  ? 'bg-zinc-900 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.2)]'
                  : 'bg-zinc-950/60 border-zinc-800/80 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${step.color} text-white shadow-sm`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/40 px-1.5 py-0.5 rounded">
                  {step.latency}
                </span>
              </div>

              <div className="text-xs font-semibold text-white mb-1">
                {step.title}
              </div>
              <div className="text-[11px] font-mono text-zinc-400 mb-2">
                {step.badge}
              </div>
              <p className="text-[11px] text-zinc-500 line-clamp-2">
                {step.specs}
              </p>
            </div>
          );
        })}
      </div>

      {/* Deep Dive Card for Active Step */}
      <div className="rounded-2xl border border-zinc-800 bg-[#09090b] p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
            <span>Deep Dive: {activeStep.title}</span>
          </div>
          <h3 className="text-xl font-bold text-white">
            {activeStep.badge} Architecture
          </h3>
          <p className="text-zinc-300 text-sm leading-relaxed">
            {activeStep.specs} Guaranteed P99 execution time within {activeStep.latency} SLA across all 48 edge locations.
          </p>
        </div>

        <div className="flex items-center gap-3 font-mono text-xs">
          <div className="p-4 rounded-xl bg-black border border-zinc-800 text-right">
            <div className="text-zinc-500 text-[10px]">STAGE LATENCY</div>
            <div className="text-2xl font-bold text-white">{activeStep.latency}</div>
          </div>
          <div className="p-4 rounded-xl bg-black border border-zinc-800 text-right">
            <div className="text-zinc-500 text-[10px]">RELIABILITY</div>
            <div className="text-2xl font-bold text-emerald-400">99.99%</div>
          </div>
        </div>
      </div>

    </section>
  );
}

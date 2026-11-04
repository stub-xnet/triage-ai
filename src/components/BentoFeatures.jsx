import React, { useState } from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Bot, 
  Cpu, 
  Layers, 
  Workflow, 
  Lock, 
  Terminal, 
  Sparkles, 
  GitBranch, 
  ArrowUpRight,
  Database,
  Radio,
  Sliders
} from 'lucide-react';

export default function BentoFeatures() {
  const [activeModel, setActiveModel] = useState('claude');

  return (
    <section id="features" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Architecture & Features</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Built for speed, privacy, and scale.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          A high-performance Rust core paired with state-of-the-art foundation models. Engineered for developer agents who can’t wait on human inbox loops.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Sub-40ms Edge Inference (Spans 2 columns) */}
        <div className="md:col-span-2 rounded-2xl border border-zinc-800 bg-[#09090b]/80 p-6 sm:p-8 flex flex-col justify-between glass-card-hover relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-indigo-500/10 via-transparent to-transparent pointer-events-none" />
          
          <div>
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Sub-40ms Neural Edge Engine
            </h3>
            <p className="text-zinc-400 text-sm max-w-lg mb-6 leading-relaxed">
              Every incoming MIME payload is decoded and tokenized in native Rust on edge nodes worldwide. Zero cold starts, zero queue latency.
            </p>
          </div>

          {/* Interactive Benchmark Visualizer */}
          <div className="p-4 rounded-xl bg-black/60 border border-zinc-800/80 space-y-3 font-mono text-xs">
            <div className="flex items-center justify-between text-zinc-400 text-[11px] pb-1 border-b border-zinc-800">
              <span>LATENCY BENCHMARK (END-TO-END)</span>
              <span className="text-emerald-400">Dispatch: 38ms</span>
            </div>

            {/* Bar 1: Dispatch */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px]">
                <span className="text-white font-medium flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  Dispatch MCP Edge
                </span>
                <span className="text-indigo-400 font-bold">38 ms</span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full w-[8%]" />
              </div>
            </div>

            {/* Bar 2: Legacy Rule Filters */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-zinc-400">
                <span>Regex / Keyword Filters (Gmail rules)</span>
                <span>320 ms</span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full bg-zinc-600 rounded-full w-[35%]" />
              </div>
            </div>

            {/* Bar 3: Human Inbox Triage */}
            <div className="space-y-1">
              <div className="flex justify-between text-[11px] text-zinc-500">
                <span>Manual Human Inbox Review</span>
                <span>4.2 hours</span>
              </div>
              <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                <div className="h-full bg-rose-500/40 rounded-full w-[95%]" />
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Zero-Knowledge Privacy & Local LLMs */}
        <div className="rounded-2xl border border-zinc-800 bg-[#09090b]/80 p-6 sm:p-8 flex flex-col justify-between glass-card-hover relative group">
          <div>
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Zero-Knowledge Vault
            </h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              PII is automatically scrubbed before reaching any LLM. Zero plain-text emails are stored to disk. Bring your own local Ollama or private VPC weights.
            </p>
          </div>

          {/* Model Switcher Box */}
          <div className="p-3.5 rounded-xl bg-black/60 border border-zinc-800/80 space-y-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-zinc-500 flex items-center justify-between">
              <span>ACTIVE LLM BACKEND</span>
              <span className="text-emerald-400">Connected</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 font-mono text-xs">
              <button
                onClick={() => setActiveModel('claude')}
                className={`py-1.5 px-2 rounded text-center transition-all ${
                  activeModel === 'claude' 
                    ? 'bg-zinc-800 text-white font-bold border border-zinc-700' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Claude 3.5
              </button>
              <button
                onClick={() => setActiveModel('gemini')}
                className={`py-1.5 px-2 rounded text-center transition-all ${
                  activeModel === 'gemini' 
                    ? 'bg-zinc-800 text-white font-bold border border-zinc-700' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Gemini 1.5
              </button>
              <button
                onClick={() => setActiveModel('ollama')}
                className={`py-1.5 px-2 rounded text-center transition-all ${
                  activeModel === 'ollama' 
                    ? 'bg-zinc-800 text-white font-bold border border-zinc-700' 
                    : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Ollama Local
              </button>
            </div>
            <div className="text-[11px] font-mono text-zinc-400 pt-1 flex items-center gap-1.5">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span>TLS 1.3 • AES-256-GCM Ephemeral Memory</span>
            </div>
          </div>
        </div>

        {/* Card 3: Natural Language Semantic Rules */}
        <div className="rounded-2xl border border-zinc-800 bg-[#09090b]/80 p-6 sm:p-8 flex flex-col justify-between glass-card-hover group">
          <div>
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
              <Workflow className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Semantic Neural Rules
            </h3>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              Ditch brittle regex. Write rules in plain English: "If an enterprise client expresses churn risk or contract questions, escalate to #vip-retention Slack."
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-black border border-zinc-800/80 font-mono text-xs space-y-1.5 text-zinc-300">
            <span className="text-zinc-500 text-[10px]">RULE: CUSTOMER_ESCALATION</span>
            <div className="text-indigo-400">when sentiment &lt; -0.6 && arr &gt; 50k:</div>
            <div className="pl-4 text-zinc-300">mcp.slack_alert(channel: "exec-war")</div>
            <div className="pl-4 text-zinc-300">mcp.prepare_retention_brief()</div>
          </div>
        </div>

        {/* Card 4: Ecosystem & Downstream Action Bridge (Spans 2 columns) */}
        <div className="md:col-span-2 rounded-2xl border border-zinc-800 bg-[#09090b]/80 p-6 sm:p-8 flex flex-col justify-between glass-card-hover relative group">
          <div>
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-5">
              <GitBranch className="w-5 h-5" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Autonomous Action Bridge
            </h3>
            <p className="text-zinc-400 text-sm max-w-lg mb-6 leading-relaxed">
              Email is never an isolated island. Dispatch directly orchestrates your existing developer tools via verified MCP tools and webhooks.
            </p>
          </div>

          {/* Integration nodes pills */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-black/60 border border-zinc-800 flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-indigo-400" />
              <div>
                <div className="text-white font-medium">Linear</div>
                <div className="text-[10px] text-zinc-500">Auto-create issues</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/60 border border-zinc-800 flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-emerald-400" />
              <div>
                <div className="text-white font-medium">Slack</div>
                <div className="text-[10px] text-zinc-500">Smart executive pings</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/60 border border-zinc-800 flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-amber-400" />
              <div>
                <div className="text-white font-medium">HubSpot</div>
                <div className="text-[10px] text-zinc-500">Lead enrichment</div>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-black/60 border border-zinc-800 flex items-center gap-2.5">
              <div className="w-2 h-2 rounded-full bg-rose-400" />
              <div>
                <div className="text-white font-medium">PagerDuty</div>
                <div className="text-[10px] text-zinc-500">Incident escalation</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

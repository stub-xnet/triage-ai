import React, { useState } from 'react';
import { Terminal, Copy, Check, Sparkles, Zap, Shield, ArrowRight, Play, Cpu, Layers } from 'lucide-react';

export default function Hero({ onScrollToDemo }) {
  const [copied, setCopied] = useState(false);
  const command = "npx dispatch-mcp@latest init";

  const handleCopy = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial gradients & grid */}
      <div className="absolute inset-0 bg-grid-small opacity-40 pointer-events-none" />
      
      {/* Central glowing aura (Vercel style) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-purple-600/15 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-1/3 w-64 h-64 bg-indigo-500/10 blur-[90px] rounded-full pointer-events-none" />
      <div className="absolute top-40 right-1/4 w-80 h-80 bg-cyan-500/10 blur-[110px] rounded-full pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/90 border border-white/10 mb-8 glow-pill shadow-[0_0_20px_rgba(99,102,241,0.15)] hover:border-white/25 transition-all cursor-default">
          <span className="flex h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
          <span className="text-xs font-mono font-medium text-zinc-300">
            Model Context Protocol Gateway 2.0
          </span>
          <span className="text-zinc-600">|</span>
          <span className="text-xs text-indigo-400 font-medium flex items-center gap-1">
            Now with Zero-Shot Drafts <ArrowRight className="w-3 h-3" />
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
          The neural mail router <br className="hidden sm:inline" />
          <span className="text-gradient-cyan">for autonomous agents.</span>
        </h1>

        {/* Subhead */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed font-normal">
          Stop suffocating in human email latency. <span className="text-zinc-200">Dispatch</span> converts unread threads into real-time vector streams, deterministic tool calls, and high-precision drafts. Directly pluggable via <span className="text-indigo-300 font-mono">MCP</span> to Claude, Cursor, and your custom agent swarm.
        </p>

        {/* CTA Button Group & Quick Terminal Copy */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          {/* Primary Action Button */}
          <button
            onClick={onScrollToDemo}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-medium text-sm text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_35px_rgba(255,255,255,0.3)] hover:shadow-[0_0_45px_rgba(255,255,255,0.45)] group font-mono"
          >
            <Play className="w-4 h-4 fill-black text-black group-hover:scale-110 transition-transform" />
            <span>Try Live Interactive Sandbox</span>
          </button>

          {/* Terminal Copy Snippet */}
          <div className="w-full sm:w-auto flex items-center bg-zinc-950/80 border border-zinc-800 rounded-xl px-4 py-2.5 font-mono text-xs text-zinc-300 hover:border-zinc-700 transition-colors shadow-inner group">
            <span className="text-zinc-500 mr-2 select-none">$</span>
            <span className="text-zinc-200 selection:bg-indigo-500">{command}</span>
            <button
              onClick={handleCopy}
              className="ml-3 p-1.5 rounded-md hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              title="Copy to clipboard"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Supported AI Clients & Protocols Badges */}
        <div className="pt-4 pb-2 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-y-3 gap-x-8 text-xs font-mono text-zinc-500">
          <span className="text-zinc-600 uppercase tracking-widest text-[10px]">Native Support:</span>
          <div className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
            <span className="w-2 h-2 rounded-full bg-amber-400/80" />
            Claude Desktop 3.5
          </div>
          <div className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
            <span className="w-2 h-2 rounded-full bg-cyan-400/80" />
            Cursor & Windsurf IDE
          </div>
          <div className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
            <span className="w-2 h-2 rounded-full bg-blue-400/80" />
            Gemini & Antigravity
          </div>
          <div className="flex items-center gap-2 hover:text-zinc-300 transition-colors">
            <span className="w-2 h-2 rounded-full bg-purple-400/80" />
            Local Ollama & vLLM
          </div>
        </div>

        {/* High Impact Micro Stats Grid */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-800/80 backdrop-blur-sm text-left">
            <div className="text-2xl font-mono font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>38ms</span>
              <span className="text-emerald-400 text-xs font-normal">p95</span>
            </div>
            <div className="text-xs text-zinc-400 mt-1">Triage Edge Latency</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-800/80 backdrop-blur-sm text-left">
            <div className="text-2xl font-mono font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>99.8%</span>
              <span className="text-indigo-400 text-xs font-normal">f1</span>
            </div>
            <div className="text-xs text-zinc-400 mt-1">Intent Classification</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-800/80 backdrop-blur-sm text-left">
            <div className="text-2xl font-mono font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>0 bytes</span>
              <span className="text-zinc-400 text-xs font-normal">SOC2</span>
            </div>
            <div className="text-xs text-zinc-400 mt-1">Zero-Knowledge Storage</div>
          </div>

          <div className="p-4 rounded-xl bg-zinc-950/40 border border-zinc-800/80 backdrop-blur-sm text-left">
            <div className="text-2xl font-mono font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>JSON-RPC</span>
              <span className="text-cyan-400 text-xs font-normal">2.0</span>
            </div>
            <div className="text-xs text-zinc-400 mt-1">MCP Open Standard</div>
          </div>
        </div>

      </div>
    </section>
  );
}

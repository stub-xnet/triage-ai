import React, { useState } from 'react';
import { MCP_CONFIGS, MCP_TOOLS_CONFIG } from '../data/mockData';
import { Terminal, Copy, Check, Sparkles, Code2, Cpu, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

export default function McpConfigSection() {
  const [selectedClient, setSelectedClient] = useState('claude');
  const [selectedTool, setSelectedTool] = useState(MCP_TOOLS_CONFIG[0]);
  const [copied, setCopied] = useState(false);

  const activeConfig = MCP_CONFIGS[selectedClient];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeConfig.snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="mcp-spec" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
      
      {/* Background radial gradient accent */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-mono text-cyan-400 mb-4">
          <Code2 className="w-3.5 h-3.5" />
          <span>Model Context Protocol v1.0 Spec</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Plug into any agent in 60 seconds.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          No custom SDKs. No vendor lock-in. Dispatch exposes standard JSON-RPC 2.0 endpoints adhering strictly to Anthropic’s Model Context Protocol.
        </p>
      </div>

      {/* Grid: Left Config Generator | Right Tool Schema Explorer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Client Config Generator (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl border border-zinc-800 bg-[#09090b] overflow-hidden shadow-2xl">
          {/* Client Selector Tabs */}
          <div className="p-3 border-b border-zinc-800 bg-zinc-950/80 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setSelectedClient('claude')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedClient === 'claude'
                    ? 'bg-zinc-800 text-white font-medium border border-zinc-700 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Claude Desktop
              </button>
              <button
                onClick={() => setSelectedClient('cursor')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedClient === 'cursor'
                    ? 'bg-zinc-800 text-white font-medium border border-zinc-700 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Cursor / Windsurf
              </button>
              <button
                onClick={() => setSelectedClient('antigravity')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedClient === 'antigravity'
                    ? 'bg-zinc-800 text-white font-medium border border-zinc-700 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Gemini / Antigravity
              </button>
              <button
                onClick={() => setSelectedClient('docker')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                  selectedClient === 'docker'
                    ? 'bg-zinc-800 text-white font-medium border border-zinc-700 shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                Self-Hosted
              </button>
            </div>

            {/* Copy snippet button */}
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 rounded-md transition-all"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-zinc-400" />
                  <span>Copy Config</span>
                </>
              )}
            </button>
          </div>

          {/* Config file path breadcrumb */}
          <div className="px-4 py-2 bg-black/60 border-b border-zinc-800/80 flex items-center justify-between text-[11px] font-mono text-zinc-500">
            <span className="truncate">File: <span className="text-zinc-300">{activeConfig.filename}</span></span>
            <span className="text-indigo-400">SSE / stdio</span>
          </div>

          {/* Code snippet */}
          <div className="p-4 bg-black overflow-x-auto">
            <pre className="text-xs font-mono text-zinc-300 leading-relaxed selection:bg-indigo-500 selection:text-white">
              {activeConfig.snippet}
            </pre>
          </div>

          {/* Verification check list */}
          <div className="p-4 bg-zinc-950/90 border-t border-zinc-800 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <span>Zero-knowledge PII token scrubbing</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400 flex-shrink-0" />
              <span>Direct SSE bidirectional pipe</span>
            </div>
          </div>
        </div>

        {/* Right Side: Exposed MCP Tools Specification (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl border border-zinc-800 bg-[#09090b] p-5 shadow-2xl space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div>
              <h3 className="text-sm font-mono font-bold text-white flex items-center gap-2">
                <Terminal className="w-4 h-4 text-indigo-400" />
                EXPOSED MCP TOOLS
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Functions automatically registered into your LLM context.
              </p>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300">
              4 tools active
            </span>
          </div>

          {/* Tool Selector List */}
          <div className="space-y-2">
            {MCP_TOOLS_CONFIG.map((tool) => {
              const isSelected = selectedTool.name === tool.name;
              return (
                <button
                  key={tool.name}
                  onClick={() => setSelectedTool(tool)}
                  className={`w-full text-left p-3 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-zinc-900 border-indigo-500/80 shadow-[0_0_15px_rgba(99,102,241,0.15)]'
                      : 'bg-black/40 border-zinc-800/80 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-semibold text-white">
                      {tool.name}()
                    </span>
                    <span className="text-[10px] font-mono text-indigo-400">
                      tool_call
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 leading-snug">
                    {tool.description}
                  </p>
                </button>
              );
            })}
          </div>

          {/* Schema Viewer for Selected Tool */}
          <div className="mt-4 pt-3 border-t border-zinc-800">
            <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-500 mb-2 flex items-center justify-between">
              <span>Input JSON Schema ({selectedTool.name}):</span>
              <span className="text-zinc-600">Schema Draft 2020-12</span>
            </div>
            <pre className="p-3 rounded-lg bg-black border border-zinc-800/80 text-[11px] font-mono text-zinc-400 overflow-x-auto max-h-48 leading-relaxed">
              {JSON.stringify(selectedTool.inputSchema, null, 2)}
            </pre>
          </div>
        </div>

      </div>
    </section>
  );
}

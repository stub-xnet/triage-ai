import React, { useState } from 'react';
import { Terminal, Shield, Check, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 3000);
      setEmail('');
    }
  };

  return (
    <footer className="border-t border-zinc-800 bg-black pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-zinc-400 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Status & Newsletter Bar */}
        <div className="pb-12 border-b border-zinc-800/80 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Brand + Status indicator */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-6 h-6 rounded bg-white text-black">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M12 2L2 20h20L12 2z" />
                </svg>
              </div>
              <span className="font-mono font-bold text-white tracking-tight">
                DISPATCH<span className="text-indigo-400">.AI</span>
              </span>
            </div>
            
            {/* Live edge status pill */}
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 text-[11px] font-mono text-zinc-300">
              <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 font-medium">All Systems Operational</span>
              <span className="text-zinc-600">•</span>
              <span>48 Edge Nodes Active</span>
              <span className="text-zinc-600">•</span>
              <span>P99: 38ms</span>
            </div>
          </div>

          {/* Micro Newsletter / MCP Spec updates */}
          <div>
            <div className="text-xs font-mono uppercase text-zinc-300 mb-2">
              Subscribe to Model Context Protocol Releases
            </div>
            <form onSubmit={handleSubscribe} className="flex items-center gap-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="developer@company.com"
                className="px-3 py-2 rounded-lg bg-zinc-900 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500 font-mono w-64"
              />
              <button
                type="submit"
                className="px-3 py-2 rounded-lg bg-white text-black hover:bg-zinc-200 text-xs font-mono font-medium transition-colors flex items-center gap-1"
              >
                {subscribed ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-600" />
                    <span>Subscribed</span>
                  </>
                ) : (
                  <>
                    <span>Join</span>
                    <ArrowRight className="w-3 h-3" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

        {/* Links Grid */}
        <div className="py-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-xs font-sans">
          <div>
            <div className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Product
            </div>
            <ul className="space-y-2.5">
              <li><a href="#demo" className="hover:text-white transition-colors">Interactive Triage</a></li>
              <li><a href="#mcp-spec" className="hover:text-white transition-colors">MCP Server 1.0</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Neural Edge Rules</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Latency Benchmarks</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Tiers</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Integrations
            </div>
            <ul className="space-y-2.5">
              <li><a href="#mcp-spec" className="hover:text-white transition-colors">Claude Desktop Setup</a></li>
              <li><a href="#mcp-spec" className="hover:text-white transition-colors">Cursor & Windsurf IDE</a></li>
              <li><a href="#mcp-spec" className="hover:text-white transition-colors">Gemini CLI / Antigravity</a></li>
              <li><a href="#mcp-spec" className="hover:text-white transition-colors">Docker Self-Hosted</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Slack & Linear Webhooks</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Developers & Spec
            </div>
            <ul className="space-y-2.5">
              <li><a href="https://modelcontextprotocol.io" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Model Context Protocol Spec</a></li>
              <li><a href="#mcp-spec" className="hover:text-white transition-colors">JSON-RPC 2.0 Docs</a></li>
              <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub Repository (v2.4)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Rust Edge Tokenizer SDK</a></li>
              <li><a href="#" className="hover:text-white transition-colors">CLI Changelog</a></li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Trust & Compliance
            </div>
            <ul className="space-y-2.5">
              <li><a href="#" className="hover:text-white transition-colors flex items-center gap-1.5"><Shield className="w-3 h-3 text-emerald-400" /> SOC 2 Type II Certified</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Zero Data Retention Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">HIPAA BAA Available</a></li>
              <li><a href="#" className="hover:text-white transition-colors">GDPR & DPA Addendum</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bug Bounty Program</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution Bar */}
        <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {new Date().getFullYear()} Dispatch Technologies, Inc. Inspired by Vercel & Model Context Protocol.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-zinc-200 transition-colors">
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.893.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

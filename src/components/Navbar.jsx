import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Sparkles, Command, ExternalLink, Menu, X, ArrowRight, Zap } from 'lucide-react';

export default function Navbar({ onOpenCommandPalette }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-[#030303]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]' 
        : 'bg-transparent border-b border-transparent'
    }`}>
      {/* Top micro-banner */}
      <div className="w-full bg-gradient-to-r from-indigo-950/60 via-purple-950/40 to-indigo-950/60 border-b border-indigo-500/20 py-1.5 px-4 text-center text-xs text-zinc-300 flex items-center justify-center gap-2">
        <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="font-medium text-white">Model Context Protocol 1.0 Gateway is live.</span>
        <span className="hidden sm:inline text-zinc-400">Plug autonomous email triage directly into Claude & Cursor.</span>
        <a href="#mcp-spec" className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1 font-mono text-[11px] underline underline-offset-2">
          Read MCP Spec <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-black border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.15)] group-hover:border-indigo-500/60 transition-colors">
              {/* Minimalist Vercel-like prism / triangle */}
              <svg viewBox="0 0 24 24" className="w-4 h-4 text-white fill-current transition-transform duration-300 group-hover:scale-110">
                <path d="M12 2L2 20h20L12 2z" />
              </svg>
              <div className="absolute inset-0 rounded-lg bg-indigo-500/10 blur group-hover:bg-indigo-500/20 transition-all pointer-events-none" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold tracking-tight text-white text-lg">
                DISPATCH<span className="text-indigo-400">.AI</span>
              </span>
              <span className="px-1.5 py-0.5 text-[10px] font-mono tracking-wider bg-zinc-900 border border-zinc-700/60 text-zinc-400 rounded-md">
                MCP 1.0
              </span>
            </div>
          </a>
        </div>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-400">
          <a href="#demo" className="hover:text-white transition-colors flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            Live Triage
          </a>
          <a href="#mcp-spec" className="hover:text-white transition-colors">
            MCP Protocol
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            Features
          </a>
          <a href="#architecture" className="hover:text-white transition-colors">
            Architecture
          </a>
          <a href="#pricing" className="hover:text-white transition-colors">
            Pricing
          </a>
        </div>

        {/* Right CTA & Actions */}
        <div className="flex items-center gap-3">
          {/* Quick command search trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="hidden lg:flex items-center gap-2 px-2.5 py-1.5 text-xs text-zinc-400 bg-zinc-900/90 hover:bg-zinc-800/90 border border-zinc-800 rounded-lg transition-all group shadow-inner"
          >
            <Command className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
            <span>Search actions...</span>
            <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-zinc-800 border border-zinc-700 text-zinc-400 rounded">
              ⌘K
            </kbd>
          </button>

          {/* GitHub Star Pill */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono text-zinc-300 bg-zinc-900/60 hover:bg-zinc-800/80 border border-zinc-800 rounded-lg transition-all hover:border-zinc-700"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current text-zinc-400">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
            <span>Star</span>
            <span className="text-zinc-500">|</span>
            <span className="text-zinc-200 font-semibold">4.8k</span>
          </a>

          {/* Connect / Deploy Button */}
          <a
            href="#mcp-spec"
            className="relative inline-flex items-center justify-center gap-2 px-3.5 py-1.5 text-xs font-medium text-black bg-white rounded-lg hover:bg-zinc-200 transition-all font-mono shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_25px_rgba(255,255,255,0.4)]"
          >
            <Zap className="w-3.5 h-3.5 fill-black" />
            <span>Deploy Server</span>
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-zinc-400 hover:text-white rounded-lg border border-zinc-800 bg-zinc-900"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drop-down menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-4 py-4 space-y-3 backdrop-blur-2xl">
          <a 
            href="#demo" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-1"
          >
            Live Triage Sandbox
          </a>
          <a 
            href="#mcp-spec" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-1"
          >
            MCP Protocol
          </a>
          <a 
            href="#features" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-1"
          >
            Features
          </a>
          <a 
            href="#architecture" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-1"
          >
            Architecture
          </a>
          <a 
            href="#pricing" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-zinc-300 hover:text-white py-1"
          >
            Pricing
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenCommandPalette();
            }}
            className="w-full flex items-center justify-between px-3 py-2 text-xs font-mono text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-lg"
          >
            <span className="flex items-center gap-2">
              <Command className="w-3.5 h-3.5" />
              Open Command Menu
            </span>
            <kbd className="px-1.5 py-0.5 text-[10px] bg-zinc-800 border border-zinc-700 rounded">
              ⌘K
            </kbd>
          </button>
        </div>
      )}
    </header>
  );
}

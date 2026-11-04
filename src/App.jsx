import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LiveTriageDemo from './components/LiveTriageDemo';
import McpConfigSection from './components/McpConfigSection';
import BentoFeatures from './components/BentoFeatures';
import ArchitectureSection from './components/ArchitectureSection';
import PricingSection from './components/PricingSection';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';

export default function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const scrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCommandAction = (actionId) => {
    if (actionId === 'OPEN') {
      setCommandPaletteOpen(true);
      return;
    }

    if (actionId === 'copy-mcp') {
      navigator.clipboard.writeText('npx -y @dispatch/mcp-server --edge-region iad1');
      return;
    }

    if (actionId === 'trigger-sim') {
      scrollToDemo();
      return;
    }

    const targetEl = document.getElementById(actionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#030303] text-zinc-100 flex flex-col selection:bg-indigo-500/30 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onScrollToDemo={scrollToDemo} />

        {/* Live Interactive Triage Simulator (Showstopper) */}
        <LiveTriageDemo />

        {/* MCP Config & Protocol Specification */}
        <McpConfigSection />

        {/* Bento Grid Architecture & Features */}
        <BentoFeatures />

        {/* Pipeline Execution Flow */}
        <ArchitectureSection />

        {/* Pricing & FAQ */}
        <PricingSection />
      </main>

      {/* Global Command Palette (⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
        onAction={handleCommandAction}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}

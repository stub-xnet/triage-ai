import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Terminal, 
  Sparkles, 
  Code2, 
  Cpu, 
  ShieldAlert, 
  ArrowRight, 
  Layers, 
  X,
  Zap,
  Check
} from 'lucide-react';

export default function CommandPalette({ isOpen, onClose, onAction }) {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener for ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onAction('OPEN');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onAction]);

  if (!isOpen) return null;

  const ACTIONS = [
    { id: 'demo', label: 'Jump to Live Triage Sandbox', category: 'Navigation', icon: Sparkles, shortcut: 'G D' },
    { id: 'mcp-spec', label: 'View Model Context Protocol JSON Specs', category: 'Navigation', icon: Code2, shortcut: 'G M' },
    { id: 'features', label: 'Explore Neural Features & Bento Grid', category: 'Navigation', icon: Layers, shortcut: 'G F' },
    { id: 'architecture', label: 'View 5-Stage Edge Pipeline Architecture', category: 'Navigation', icon: Zap, shortcut: 'G A' },
    { id: 'pricing', label: 'Compare Pricing Tiers & Enterprise SLAs', category: 'Navigation', icon: Terminal, shortcut: 'G P' },
    { id: 'copy-mcp', label: 'Copy MCP Server Config to Clipboard', category: 'Action', icon: Terminal, shortcut: '⌘ C' },
    { id: 'trigger-sim', label: 'Simulate High-Priority Inbound Email', category: 'Simulation', icon: Sparkles, shortcut: '↵' },
  ];

  const filteredActions = ACTIONS.filter(a => 
    a.label.toLowerCase().includes(query.toLowerCase()) || 
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (actionId) => {
    onAction(actionId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Palette Box */}
      <div className="relative w-full max-w-xl rounded-2xl border border-zinc-700 bg-[#0c0c10] shadow-[0_25px_80px_rgba(0,0,0,0.9)] overflow-hidden z-10 font-sans">
        
        {/* Search Input Bar */}
        <div className="p-3 border-b border-zinc-800 flex items-center gap-3 bg-zinc-950">
          <Search className="w-4 h-4 text-zinc-400 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search documentation..."
            className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
          />
          <button 
            onClick={onClose}
            className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action Items List */}
        <div className="p-2 max-h-80 overflow-y-auto divide-y divide-zinc-900">
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-xs text-zinc-500">
              No matching commands found.
            </div>
          ) : (
            filteredActions.map((action) => {
              const Icon = action.icon;
              return (
                <button
                  key={action.id}
                  onClick={() => handleSelect(action.id)}
                  className="w-full p-2.5 rounded-xl flex items-center justify-between text-left hover:bg-zinc-800/80 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-colors">
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-zinc-200 group-hover:text-white">
                        {action.label}
                      </div>
                      <div className="text-[10px] font-mono text-zinc-500">
                        {action.category}
                      </div>
                    </div>
                  </div>

                  <kbd className="px-1.5 py-0.5 text-[10px] font-mono bg-zinc-900 border border-zinc-700/80 text-zinc-400 rounded">
                    {action.shortcut}
                  </kbd>
                </button>
              );
            })
          )}
        </div>

        {/* Palette Footer */}
        <div className="px-4 py-2 bg-zinc-950 border-t border-zinc-800 flex items-center justify-between text-[11px] font-mono text-zinc-500">
          <span>Navigation: <kbd className="text-zinc-400">↑ ↓</kbd> to cycle</span>
          <span>Select: <kbd className="text-zinc-400">↵ Enter</kbd></span>
          <span>Close: <kbd className="text-zinc-400">Esc</kbd></span>
        </div>

      </div>
    </div>
  );
}

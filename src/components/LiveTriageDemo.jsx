import React, { useState } from 'react';
import { 
  INITIAL_EMAILS 
} from '../data/mockData';
import { 
  Inbox, 
  Send, 
  ShieldAlert, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles, 
  Cpu, 
  Code2, 
  Clock, 
  Terminal, 
  Check, 
  RefreshCw, 
  Layers, 
  ChevronRight, 
  ArrowUpRight,
  Filter,
  PlusCircle,
  FileCheck,
  Zap,
  CornerDownRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function LiveTriageDemo() {
  const [emails, setEmails] = useState(INITIAL_EMAILS);
  const [selectedEmailId, setSelectedEmailId] = useState(INITIAL_EMAILS[0].id);
  const [filter, setFilter] = useState('ALL'); // ALL, URGENT, SALES, SECURITY
  const [activeTab, setActiveTab] = useState('triage'); // 'triage' | 'draft' | 'mcp_wire'
  const [actionFeed, setActionFeed] = useState([
    { id: 1, text: "MCP Daemon synced with Claude Desktop", time: "19:58:02" },
    { id: 2, text: "Model Claude-3-5-Sonnet connected to triage channel", time: "19:59:14" },
    { id: 3, text: "Vector stream active on /v1/mcp/sse", time: "20:01:05" },
  ]);
  const [draftContent, setDraftContent] = useState('');
  const [draftStatus, setDraftStatus] = useState('idle'); // idle, sent

  const currentEmail = emails.find(e => e.id === selectedEmailId) || emails[0];

  // Update draft when email changes
  React.useEffect(() => {
    if (currentEmail) {
      setDraftContent(currentEmail.suggestedReply);
      setDraftStatus('idle');
    }
  }, [selectedEmailId]);

  const filteredEmails = emails.filter(email => {
    if (filter === 'URGENT') return email.urgency === 'HIGH' || email.urgency === 'CRITICAL';
    if (filter === 'SALES') return email.category === 'SALES_ENTERPRISE' || email.category === 'FINANCE_INVESTOR';
    if (filter === 'SECURITY') return email.category === 'PHISHING_THREAT';
    return true;
  });

  const handleApproveDraft = () => {
    setDraftStatus('sent');
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // fallback if confetti fails
    }
    
    // Add to activity feed
    setActionFeed(prev => [
      { id: Date.now(), text: `Draft approved & sent via MCP to ${currentEmail.sender.email}`, time: new Date().toLocaleTimeString() },
      ...prev.slice(0, 5)
    ]);
  };

  const handleSimulateNewEmail = () => {
    const newId = `mail-${Date.now()}`;
    const newMock = {
      id: newId,
      sender: {
        name: "Guillermo Rauch",
        email: "rauchg@vercel.com",
        avatar: "GR",
        verified: true,
        domain: "vercel.com",
        reputation: 99
      },
      subject: "Integrating Dispatch MCP into Next.js & AI SDK v4",
      date: "Just now",
      preview: "We're launching the new AI SDK edge gateway. Would love to feature Dispatch as the standard MCP email integration...",
      body: `Hey Alexandre,

Following up on our chat. We are finalizing the AI SDK v4 release and the Next.js edge runtime updates. 

Your MCP server architecture is exactly the kind of sub-50ms reactive tooling our enterprise developers need. We would love to feature Dispatch in the Next.js marketplace and build a template together next Tuesday.

Let's sync up for 15 mins?

Best,
Guillermo`,
      urgency: "HIGH",
      category: "PARTNERSHIP",
      sentiment: "POSITIVE",
      score: 97,
      actionRequired: true,
      aiReasoning: "High-profile partnership request from Vercel CEO. Proposal to feature Dispatch in AI SDK v4 and Next.js marketplace.",
      mcpActions: [
        { tool: "mcp.notify_slack", channel: "#partnerships-exec", status: "executed", text: "Vercel partnership inquiry received." },
        { tool: "mcp.calendar_check", time: "Next Tuesday 3:00 PM EST", status: "executed", text: "Slot held on founder calendar." }
      ],
      suggestedReply: `Hi Guillermo,\n\nWe'd be thrilled to collaborate on the Next.js AI SDK v4 template. Tuesday 3:00 PM EST works great on our end.\n\nTalk soon,\nAlexandre`,
      mcpPayload: {
        jsonrpc: "2.0",
        method: "dispatch/triage_email",
        params: {
          message_id: newId,
          source: "vercel.com",
          priority_level: "P0",
          entities: ["Next.js", "AI SDK v4", "Partnership"]
        }
      }
    };

    setEmails([newMock, ...emails]);
    setSelectedEmailId(newId);
    setActionFeed(prev => [
      { id: Date.now(), text: `⚡ Ingested new thread from ${newMock.sender.email} (P0 Triage in 34ms)`, time: new Date().toLocaleTimeString() },
      ...prev.slice(0, 5)
    ]);
  };

  return (
    <section id="demo" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>Interactive Live Demo</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Autonomous Triage in Action.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          Click through live incoming emails. Watch how our edge models extract intent, invoke MCP tools, route alerts to Slack & Linear, and draft executive responses in real time.
        </p>
      </div>

      {/* Main Interactive Container (Vercel Glass Console) */}
      <div className="rounded-2xl border border-zinc-800 bg-[#09090b]/90 backdrop-blur-2xl shadow-[0_20px_70px_rgba(0,0,0,0.8)] overflow-hidden">
        
        {/* Console Top Toolbar */}
        <div className="px-4 py-3 border-b border-zinc-800 bg-zinc-950/80 flex flex-wrap items-center justify-between gap-3">
          {/* Left: Window controls & title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full bg-rose-500/80" />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-zinc-500 font-mono text-xs">|</span>
            <div className="flex items-center gap-2">
              <span className="font-mono text-xs text-zinc-300 font-semibold tracking-wider">
                DISPATCH_EDGE_GATEWAY
              </span>
              <span className="px-2 py-0.5 text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                ONLINE • 41ms
              </span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleSimulateNewEmail}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-medium text-zinc-200 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 rounded-md transition-all shadow-sm group"
            >
              <PlusCircle className="w-3.5 h-3.5 text-indigo-400 group-hover:rotate-90 transition-transform" />
              <span>Simulate Inbound Email</span>
            </button>
            <div className="hidden sm:flex items-center gap-1 text-[11px] font-mono text-zinc-400 bg-black/60 px-2 py-1 rounded border border-zinc-800">
              <Cpu className="w-3 h-3 text-cyan-400" />
              <span>Engine: Claude 3.5 + Edge Rust</span>
            </div>
          </div>
        </div>

        {/* Console Body: Split View (List on Left, Inspector on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
          
          {/* Left Column: Email Inbound Stream (5 cols) */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-zinc-800 bg-black/40 flex flex-col">
            {/* Filter pills */}
            <div className="p-3 border-b border-zinc-800/80 flex items-center justify-between gap-1 overflow-x-auto text-xs font-mono">
              <span className="text-zinc-500 text-[11px] uppercase tracking-wider flex items-center gap-1 pl-1">
                <Filter className="w-3 h-3" /> Filters:
              </span>
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setFilter('ALL')}
                  className={`px-2 py-1 rounded text-xs transition-colors ${
                    filter === 'ALL' 
                      ? 'bg-zinc-800 text-white font-medium' 
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  All ({emails.length})
                </button>
                <button
                  onClick={() => setFilter('URGENT')}
                  className={`px-2 py-1 rounded text-xs transition-colors ${
                    filter === 'URGENT' 
                      ? 'bg-rose-950/60 text-rose-300 border border-rose-800/50' 
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Urgent
                </button>
                <button
                  onClick={() => setFilter('SALES')}
                  className={`px-2 py-1 rounded text-xs transition-colors ${
                    filter === 'SALES' 
                      ? 'bg-indigo-950/60 text-indigo-300 border border-indigo-800/50' 
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Deals
                </button>
                <button
                  onClick={() => setFilter('SECURITY')}
                  className={`px-2 py-1 rounded text-xs transition-colors ${
                    filter === 'SECURITY' 
                      ? 'bg-amber-950/60 text-amber-300 border border-amber-800/50' 
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Security
                </button>
              </div>
            </div>

            {/* Email Items List */}
            <div className="divide-y divide-zinc-800/60 overflow-y-auto max-h-[560px]">
              {filteredEmails.map((email) => {
                const isSelected = email.id === selectedEmailId;
                const isPhish = email.category === 'PHISHING_THREAT';
                const isIncident = email.category === 'DEVOPS_INCIDENT';
                
                return (
                  <div
                    key={email.id}
                    onClick={() => setSelectedEmailId(email.id)}
                    className={`p-3.5 cursor-pointer transition-all ${
                      isSelected 
                        ? 'bg-zinc-900/90 border-l-2 border-indigo-500 shadow-inner' 
                        : 'hover:bg-zinc-900/40 bg-transparent'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div className="flex items-center gap-2">
                        <div className={`w-7 h-7 rounded-md flex items-center justify-center text-xs font-mono font-bold ${
                          isPhish 
                            ? 'bg-rose-950/80 text-rose-400 border border-rose-800/60' 
                            : isIncident 
                              ? 'bg-amber-950/80 text-amber-400 border border-amber-800/60' 
                              : 'bg-zinc-800 text-zinc-200 border border-zinc-700/60'
                        }`}>
                          {email.sender.avatar}
                        </div>
                        <div>
                          <div className="text-xs font-medium text-white flex items-center gap-1.5">
                            <span>{email.sender.name}</span>
                            {email.sender.verified && (
                              <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                            )}
                          </div>
                          <div className="text-[10px] font-mono text-zinc-500">
                            {email.sender.domain}
                          </div>
                        </div>
                      </div>

                      {/* Urgency Pill */}
                      <span className={`px-1.5 py-0.5 text-[10px] font-mono rounded ${
                        email.urgency === 'CRITICAL' 
                          ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 font-semibold' 
                          : email.urgency === 'HIGH' 
                            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30' 
                            : email.urgency === 'SECURITY_BLOCK' 
                              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                              : 'bg-zinc-800 text-zinc-400'
                      }`}>
                        {email.urgency}
                      </span>
                    </div>

                    {/* Subject line */}
                    <div className="text-xs font-medium text-zinc-200 line-clamp-1 mb-1">
                      {email.subject}
                    </div>

                    {/* Preview snippet */}
                    <p className="text-[11px] text-zinc-400 line-clamp-1 leading-snug">
                      {email.preview}
                    </p>

                    {/* Action pill preview */}
                    <div className="mt-2 flex items-center gap-2 text-[10px] font-mono text-zinc-500">
                      <span className="flex items-center gap-1 text-zinc-400">
                        <Clock className="w-3 h-3 text-zinc-500" />
                        {email.date}
                      </span>
                      <span>•</span>
                      <span className="text-indigo-400 flex items-center gap-1">
                        <Sparkles className="w-2.5 h-2.5" />
                        {email.mcpActions.length} auto-actions
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom mini status feed */}
            <div className="mt-auto p-2.5 bg-zinc-950 border-t border-zinc-800 text-[11px] font-mono text-zinc-500">
              <div className="flex items-center justify-between text-[10px] text-zinc-400 mb-1">
                <span className="uppercase tracking-wider flex items-center gap-1">
                  <Terminal className="w-3 h-3 text-emerald-400" /> MCP Event Stream
                </span>
                <span className="text-emerald-400">Live</span>
              </div>
              <div className="space-y-0.5 max-h-14 overflow-hidden">
                {actionFeed.slice(0, 2).map((item) => (
                  <div key={item.id} className="truncate text-zinc-400 flex items-center gap-1.5">
                    <span className="text-zinc-600">[{item.time}]</span>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: AI Triage Copilot & Protocol Inspector (7 cols) */}
          <div className="lg:col-span-7 bg-[#050508] flex flex-col">
            
            {/* View Tabs: Triage Analysis | Smart Draft | MCP JSON-RPC Wire */}
            <div className="px-4 py-2 border-b border-zinc-800 bg-zinc-950/60 flex items-center justify-between">
              <div className="flex items-center gap-1 font-mono text-xs">
                <button
                  onClick={() => setActiveTab('triage')}
                  className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all ${
                    activeTab === 'triage'
                      ? 'bg-zinc-800 text-white font-medium border border-zinc-700'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span>AI Triage Reasoning</span>
                </button>

                <button
                  onClick={() => setActiveTab('draft')}
                  className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all ${
                    activeTab === 'draft'
                      ? 'bg-zinc-800 text-white font-medium border border-zinc-700'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Send className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Autonomous Draft</span>
                </button>

                <button
                  onClick={() => setActiveTab('mcp_wire')}
                  className={`px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-all ${
                    activeTab === 'mcp_wire'
                      ? 'bg-zinc-800 text-white font-medium border border-zinc-700'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5 text-amber-400" />
                  <span>MCP JSON-RPC</span>
                </button>
              </div>

              {/* Confidence Badge */}
              <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-zinc-400">
                <span>Confidence:</span>
                <span className="font-bold text-white bg-zinc-800 px-2 py-0.5 rounded border border-zinc-700">
                  {currentEmail.score}%
                </span>
              </div>
            </div>

            {/* Email Header Overview */}
            <div className="p-4 border-b border-zinc-800 bg-zinc-900/30">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">
                    {currentEmail.subject}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="text-zinc-300">{currentEmail.sender.name}</span>
                    <span className="text-zinc-600">&lt;{currentEmail.sender.email}&gt;</span>
                    <span className="text-zinc-600">•</span>
                    <span>Domain Rep: <span className="text-emerald-400">{currentEmail.sender.reputation}/100</span></span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 text-xs font-mono rounded-md border ${
                    currentEmail.urgency === 'CRITICAL'
                      ? 'bg-rose-950/60 text-rose-300 border-rose-800'
                      : 'bg-indigo-950/60 text-indigo-300 border-indigo-800'
                  }`}>
                    Category: {currentEmail.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Tab Contents */}
            <div className="p-4 flex-1 overflow-y-auto max-h-[480px]">
              
              {/* TAB 1: AI Triage & Reasoning */}
              {activeTab === 'triage' && (
                <div className="space-y-5">
                  {/* Neural Extraction Box */}
                  <div className="p-4 rounded-xl bg-zinc-900/50 border border-zinc-800">
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-1.5 text-indigo-400">
                        <Sparkles className="w-3.5 h-3.5" /> LLM Analysis & Intent Summary
                      </span>
                      <span className="text-[10px] text-zinc-500 font-normal">Edge Triage: 32ms</span>
                    </div>
                    <p className="text-sm text-zinc-200 leading-relaxed">
                      {currentEmail.aiReasoning}
                    </p>
                  </div>

                  {/* Executed MCP Tools Pipeline */}
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2.5 flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-cyan-400" /> Autonomous MCP Tool Calls Executed:
                    </div>

                    <div className="space-y-2">
                      {currentEmail.mcpActions.map((action, idx) => (
                        <div 
                          key={idx}
                          className="p-3 rounded-lg bg-zinc-950 border border-zinc-800/90 flex items-start gap-3 text-xs"
                        >
                          <div className="mt-0.5 p-1 rounded bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                            <Terminal className="w-3.5 h-3.5" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between font-mono">
                              <span className="text-zinc-200 font-semibold">{action.tool}()</span>
                              <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40 uppercase">
                                {action.status}
                              </span>
                            </div>
                            <div className="text-zinc-400 mt-1">
                              {action.text}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Email Original Body Snapshot */}
                  <div>
                    <div className="text-xs font-mono uppercase tracking-wider text-zinc-500 mb-2 flex items-center gap-1.5">
                      <FileCheck className="w-3.5 h-3.5" /> Original Thread Body:
                    </div>
                    <div className="p-3.5 rounded-lg bg-black/60 border border-zinc-800/80 font-sans text-xs text-zinc-300 whitespace-pre-wrap leading-relaxed">
                      {currentEmail.body}
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Autonomous Smart Draft */}
              {activeTab === 'draft' && (
                <div className="space-y-4">
                  <div className="p-3 rounded-lg bg-indigo-950/30 border border-indigo-500/20 text-xs text-indigo-300 flex items-center justify-between">
                    <span className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                      Zero-Shot Context Draft generated from company vector memory & calendar.
                    </span>
                    <span className="font-mono text-[10px] text-indigo-400">Tone: Executive Concise</span>
                  </div>

                  {/* Draft textarea */}
                  <div className="relative">
                    <textarea
                      value={draftContent}
                      onChange={(e) => setDraftContent(e.target.value)}
                      rows={9}
                      className="w-full p-4 rounded-xl bg-black/70 border border-zinc-800 text-zinc-200 text-xs sm:text-sm font-sans focus:outline-none focus:border-indigo-500 transition-colors resize-none leading-relaxed"
                      placeholder="AI drafted response..."
                    />
                  </div>

                  {/* Draft Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                      <span>Ready for MCP Dispatch</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setDraftContent(currentEmail.suggestedReply)}
                        className="px-3 py-1.5 text-xs font-mono text-zinc-400 hover:text-zinc-200 transition-colors"
                      >
                        Reset Draft
                      </button>

                      <button
                        onClick={handleApproveDraft}
                        disabled={draftStatus === 'sent'}
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium transition-all ${
                          draftStatus === 'sent'
                            ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700 cursor-default'
                            : 'bg-white text-black hover:bg-zinc-200 shadow-[0_0_20px_rgba(255,255,255,0.25)]'
                        }`}
                      >
                        {draftStatus === 'sent' ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Dispatched via MCP</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>Approve & Send via MCP</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: MCP JSON-RPC Wire */}
              {activeTab === 'mcp_wire' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-zinc-400 text-[11px] pb-1 border-b border-zinc-800">
                    <span className="flex items-center gap-1.5">
                      <Code2 className="w-3.5 h-3.5 text-amber-400" />
                      JSON-RPC 2.0 Client &lt;-&gt; MCP Server Handshake
                    </span>
                    <span className="text-zinc-500">Transport: SSE (Server-Sent Events)</span>
                  </div>

                  <pre className="p-4 rounded-xl bg-black border border-zinc-800 text-zinc-300 overflow-x-auto text-xs leading-relaxed selection:bg-indigo-500 selection:text-white">
                    {JSON.stringify(currentEmail.mcpPayload, null, 2)}
                  </pre>

                  <div className="p-3 rounded-lg bg-zinc-900/40 border border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
                    <span>Protocol Spec: <strong className="text-zinc-200">modelcontextprotocol.io/v1</strong></span>
                    <span className="text-emerald-400">Stream Status: 200 OK</span>
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

import React, { useState } from 'react';
import { Check, Zap, Sparkles, HelpCircle, ChevronDown, ChevronUp, ShieldCheck } from 'lucide-react';

const FAQS = [
  {
    q: "Do you store or train on our company emails?",
    a: "Never. Dispatch operates under a strict Zero Data Retention policy. Incoming payloads are tokenized in ephemeral RAM, evaluated via Model Context Protocol, and wiped immediately. We have zero database tables containing unencrypted email bodies."
  },
  {
    q: "How does Model Context Protocol (MCP) integration work?",
    a: "Dispatch provides an open-source MCP server binary (`@dispatch/mcp-server`). Simply paste two lines of JSON into Claude Desktop (`claude_desktop_config.json`) or Cursor (`.cursor/mcp.json`). Your AI client immediately gains native tools like `triage_email()`, `draft_smart_reply()`, and `route_escalation()`."
  },
  {
    q: "Can I connect my own local model (e.g. Ollama or vLLM)?",
    a: "Yes. Our Self-Hosted and Enterprise tiers allow you to point the Dispatch MCP gateway to any OpenAI-compatible or Ollama local inference endpoint for complete air-gapped sovereign execution."
  },
  {
    q: "What happens if an email contains malicious phishing or zero-day malware?",
    a: "Dispatch's zero-trust quarantine engine intercepts the payload before it reaches any user client. IOCs (suspicious domains, spoofed SPF/DKIM headers, malicious links) are automatically vaulted, neutralizing social engineering attacks."
  }
];

export default function PricingSection() {
  const [annual, setAnnual] = useState(true);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section id="pricing" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-800/80">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400 mb-4">
          <Zap className="w-3.5 h-3.5" />
          <span>Simple, Transparent Pricing</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Deploy at hobby scale or enterprise grade.
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base">
          Start for free on our public MCP edge. Upgrade when your agents demand dedicated throughput and custom SLAs.
        </p>

        {/* Annual / Monthly Toggle */}
        <div className="mt-8 inline-flex items-center gap-3 p-1 rounded-xl bg-zinc-900 border border-zinc-800 text-xs font-mono">
          <button
            onClick={() => setAnnual(false)}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              !annual ? 'bg-zinc-800 text-white font-medium' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
              annual ? 'bg-indigo-600 text-white font-medium shadow-md' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            <span>Yearly</span>
            <span className="px-1.5 py-0.5 text-[10px] bg-white/20 rounded font-bold">Save 20%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
        
        {/* Tier 1: Hobby Developer */}
        <div className="rounded-2xl border border-zinc-800 bg-[#09090b] p-6 sm:p-8 flex flex-col justify-between glass-card-hover">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono text-lg font-bold text-white">Developer</h3>
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-800 text-zinc-400">
                Hobby
              </span>
            </div>
            <p className="text-zinc-400 text-xs mb-6">
              Perfect for solo developers connecting Claude Desktop or Cursor to their personal inbox.
            </p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold font-mono text-white">$0</span>
              <span className="text-zinc-500 text-xs">/ forever</span>
            </div>

            <ul className="space-y-3 text-xs text-zinc-300 font-sans border-t border-zinc-800 pt-6">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Up to 1,000 emails / month</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>1 Active MCP Client (Claude or Cursor)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Zero-knowledge PII token redaction</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Community Discord & GitHub support</span>
              </li>
            </ul>
          </div>

          <a
            href="#mcp-spec"
            className="mt-8 block text-center py-2.5 px-4 rounded-xl text-xs font-mono font-medium text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all"
          >
            Start Free
          </a>
        </div>

        {/* Tier 2: Pro Agent (Featured Vercel Style) */}
        <div className="rounded-2xl border-2 border-indigo-500/80 bg-[#0c0c12] p-6 sm:p-8 flex flex-col justify-between relative shadow-[0_0_50px_rgba(99,102,241,0.2)] glass-card-hover">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-[10px] font-mono font-bold text-white uppercase tracking-wider shadow-md">
            Most Popular
          </div>

          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono text-lg font-bold text-white flex items-center gap-2">
                <span>Pro Agent</span>
                <Sparkles className="w-4 h-4 text-indigo-400" />
              </h3>
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                Production
              </span>
            </div>
            <p className="text-zinc-400 text-xs mb-6">
              For founders, engineers, and power users running autonomous triage swarms 24/7.
            </p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold font-mono text-white">
                ${annual ? '24' : '29'}
              </span>
              <span className="text-zinc-500 text-xs">/ month</span>
            </div>

            <ul className="space-y-3 text-xs text-zinc-300 font-sans border-t border-zinc-800 pt-6">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span><strong>50,000 emails</strong> / month</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Unlimited concurrent MCP endpoints</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Multi-model routing (Claude 3.5, Gemini 1.5, GPT-4o)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Linear, Slack, PagerDuty & Notion Webhooks</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Custom natural language routing rules</span>
              </li>
            </ul>
          </div>

          <a
            href="#mcp-spec"
            className="mt-8 block text-center py-2.5 px-4 rounded-xl text-xs font-mono font-medium text-black bg-white hover:bg-zinc-200 transition-all shadow-[0_0_25px_rgba(255,255,255,0.3)]"
          >
            Deploy Pro Agent
          </a>
        </div>

        {/* Tier 3: Enterprise VPC */}
        <div className="rounded-2xl border border-zinc-800 bg-[#09090b] p-6 sm:p-8 flex flex-col justify-between glass-card-hover">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-mono text-lg font-bold text-white">Enterprise VPC</h3>
              <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-zinc-800 text-zinc-400">
                Self-Hosted
              </span>
            </div>
            <p className="text-zinc-400 text-xs mb-6">
              Complete sovereign infrastructure deployed into your AWS/GCP VPC with air-gapped models.
            </p>
            <div className="flex items-baseline gap-1 mb-6">
              <span className="text-4xl font-extrabold font-mono text-white">Custom</span>
              <span className="text-zinc-500 text-xs">/ annual SLA</span>
            </div>

            <ul className="space-y-3 text-xs text-zinc-300 font-sans border-t border-zinc-800 pt-6">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Unlimited mailboxes & infinite throughput</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Self-hosted Docker / Kubernetes sidecars</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Local offline LLMs (Ollama, vLLM, DeepSeek)</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>SOC 2 Type II, HIPAA & ISO-27001 packages</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>99.99% Edge SLA & 24/7 dedicated engineer</span>
              </li>
            </ul>
          </div>

          <a
            href="mailto:enterprise@dispatch.ai"
            className="mt-8 block text-center py-2.5 px-4 rounded-xl text-xs font-mono font-medium text-white bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-all"
          >
            Contact Architecture Team
          </a>
        </div>

      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto">
        <h3 className="text-2xl font-bold text-white text-center mb-8">
          Frequently Answered Questions
        </h3>
        
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div 
                key={idx}
                className="rounded-xl border border-zinc-800 bg-[#09090b] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full p-4 text-left flex items-center justify-between text-sm font-medium text-zinc-200 hover:text-white"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-zinc-400" /> : <ChevronDown className="w-4 h-4 text-zinc-400" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 text-xs text-zinc-400 leading-relaxed border-t border-zinc-800/60 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}

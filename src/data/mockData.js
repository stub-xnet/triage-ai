export const INITIAL_EMAILS = [
  {
    id: "mail-01",
    sender: {
      name: "Marc Andreessen",
      email: "marc@a16z.com",
      avatar: "MA",
      verified: true,
      domain: "a16z.com",
      reputation: 99
    },
    subject: "Follow-up: Series A Term Sheet & Syndicate structure",
    date: "Il y a 3 min",
    preview: "Loved the MCP orchestration demo yesterday. We reviewed the deck with the partnership and are ready to wire the term sheet...",
    body: `Hey Alexandre,

Loved the MCP orchestration demo yesterday. We reviewed the deck with the investment partnership this morning and the consensus is clear: Dispatch is the missing neural interface for enterprise communication.

We are ready to issue the lead term sheet at a $45M post-money valuation. We're offering to take $9M with $3M reserved for strategic angels (including Guillermo Rauch and Harrison Chase).

Could you confirm your legal counsel and if we can lock a 30-min signing sync tomorrow Thursday at 4 PM PST?

Best,
Marc`,
    urgency: "HIGH",
    category: "FINANCE_INVESTOR",
    sentiment: "POSITIVE",
    score: 98,
    actionRequired: true,
    aiReasoning: "Key investor offering lead term sheet ($9M round @ $45M post). Time-sensitive meeting request for tomorrow 4 PM PST. High priority for founders.",
    mcpActions: [
      { tool: "mcp.notify_slack", channel: "#board-founders", status: "executed", text: "🚨 A16Z Term Sheet received: $9M @ $45M post. Sync requested." },
      { tool: "mcp.calendar_check", time: "Tomorrow 4:00 PM PST", status: "executed", text: "Slot available (Founder Calendar free)." },
      { tool: "mcp.prepare_draft", status: "ready", text: "Draft reply confirming 4 PM PST call + adding legal counsel." }
    ],
    suggestedReply: `Hi Marc,

Thank you for the quick turnaround and the high conviction. We are thrilled to partner with a16z and deeply value the syndicate additions.

Tomorrow at 4 PM PST works perfectly for our team. I'm looping in our counsel (Sarah @ Cooley) who will review the term sheet draft in parallel.

Looking forward to speaking tomorrow.

Best regards,
Alexandre`,
    mcpPayload: {
      jsonrpc: "2.0",
      method: "dispatch/triage_email",
      params: {
        message_id: "msg_a16z_98124",
        extract_entities: ["valuation: $45M", "round: $9M", "meeting: Tomorrow 4PM PST"],
        priority_level: "P0",
        sentiment_polarity: 0.94,
        auto_quarantine: false
      }
    }
  },
  {
    id: "mail-02",
    sender: {
      name: "Datadog Alert Manager",
      email: "no-reply@alerts.datadoghq.com",
      avatar: "DD",
      verified: true,
      domain: "datadoghq.com",
      reputation: 100
    },
    subject: "P1 ALERT: PostgreSQL connection pool saturation > 94% [cluster-us-east-1]",
    date: "Il y a 8 min",
    preview: "Triggered: PostgreSQL active clients 482/500 on db-primary-prod. Latency spike 840ms on /api/v1/mcp/stream...",
    body: `[CRITICAL MONITOR TRIGGERED]
Monitor: DB Connection Pool Saturation
Environment: Production (us-east-1)
Timestamp: 19:54:12 UTC
Metric: postgres.pool.utilization = 96.4%
Threshold: > 90% for 3 consecutive checks

Impact: 
- 1,420 incoming webhook requests delayed.
- Edge workers queue length increasing (+420 req/s).
- Runbook URL: https://wiki.internal/ops/db-failover-runbook`,
    urgency: "CRITICAL",
    category: "DEVOPS_INCIDENT",
    sentiment: "URGENT",
    score: 99,
    actionRequired: true,
    aiReasoning: "Production database near connection exhaustion. Potential system outage impacting MCP edge stream. Immediate escalation needed to On-Call SRE.",
    mcpActions: [
      { tool: "mcp.trigger_pagerduty", service: "SRE-OnCall-Tier1", status: "executed", text: "Paged Martin D. (Primary On-Call)" },
      { tool: "mcp.linear_create_issue", team: "INFRA", priority: "Urgent", status: "executed", text: "Created Issue INFRA-883: Increase PgBouncer max_client_conn" },
      { tool: "mcp.post_incident_war_room", channel: "#incident-2026-10-31", status: "executed", text: "War room provisioned & metrics pinned." }
    ],
    suggestedReply: `[Automated Incident Bot]
Alert acknowledged. PagerDuty incident #PD-4912 has been escalated to SRE on-call (Martin D.). PgBouncer warm pool scaling initiated via infra operator. War room opened on Slack #incident-2026-10-31.`,
    mcpPayload: {
      jsonrpc: "2.0",
      method: "dispatch/route_alert",
      params: {
        source: "datadog",
        alert_id: "P1-DB-SATURATION",
        escalation: "tier_1_sre",
        automated_remediation: "scale_pgbouncer_replicas"
      }
    }
  },
  {
    id: "mail-03",
    sender: {
      name: "Elena Rostova",
      email: "elena@acmecorp.com",
      avatar: "ER",
      verified: true,
      domain: "acmecorp.com",
      reputation: 92
    },
    subject: "Enterprise RFP inquiry: 12,000 inboxes + custom MCP endpoint",
    date: "Il y a 22 min",
    preview: "We are currently running an evaluation between Dispatch and legacy email gateways for our 12,000 employee rollout...",
    body: `Hi Dispatch Team,

I lead Enterprise AI Architecture at Acme Corp. We are currently testing Dispatch's MCP server for Claude Enterprise across our engineering and executive teams.

The initial POC results are impressive: 3.2 hours saved per manager each week on email triage.

We want to move forward with an enterprise contract covering 12,000 seats with self-hosted MCP sidecars on our AWS VPC. Can you share:
1. Custom enterprise pricing tier
2. SOC 2 Type II and HIPAA compliance packages
3. Dedicated SLA options for <50ms edge processing

Best,
Elena Rostova
VP Enterprise Infrastructure, Acme Corp`,
    urgency: "MEDIUM",
    category: "SALES_ENTERPRISE",
    sentiment: "POSITIVE",
    score: 87,
    actionRequired: true,
    aiReasoning: "High-value enterprise lead (12,000 seats, estimated ACV $240,000+). Requests pricing, compliance docs, and enterprise MCP deployment guide.",
    mcpActions: [
      { tool: "mcp.crm_sync_hubspot", dealValue: "$240,000 ARR", status: "executed", text: "Deal created: Acme Corp 12k Seats (Stage: Proposal)" },
      { tool: "mcp.attach_compliance_docs", docs: ["SOC2-Type-II.pdf", "HIPAA-BAA.pdf"], status: "executed", text: "Files attached to pending draft" },
      { tool: "mcp.assign_rep", owner: "Hugo (Head of Enterprise)", status: "executed", text: "Assigned & calendar invite prepared" }
    ],
    suggestedReply: `Hi Elena,

Delighted to hear the POC is already freeing up 3.2h weekly per manager at Acme Corp!

I have attached our SOC 2 Type II compliance report, HIPAA documentation, and our Enterprise VPC architecture guide. For 12,000 seats with self-hosted MCP sidecars, we include our 99.99% edge SLA and dedicated technical account manager.

Are you available for a 20-minute executive briefing this Friday at 10 AM EST with Hugo, our Head of Enterprise?

Warm regards,
Alexandre`,
    mcpPayload: {
      jsonrpc: "2.0",
      method: "dispatch/crm_enrichment",
      params: {
        lead_domain: "acmecorp.com",
        estimated_seats: 12000,
        deal_tier: "Enterprise Tier 1",
        tags: ["claude-enterprise", "vpc-self-hosted", "soc2"]
      }
    }
  },
  {
    id: "mail-04",
    sender: {
      name: "Security Service Notification",
      email: "security-verify@account-update-support-portal.net",
      avatar: "⚠️",
      verified: false,
      domain: "account-update-support-portal.net",
      reputation: 12
    },
    subject: "URGENT: Your Google Workspace account will be terminated in 24 hours",
    date: "Il y a 35 min",
    preview: "Your administrator subscription payment has failed. Please verify your credentials immediately at the link below...",
    body: `ATTENTION ADMINISTRATOR:

Your corporate Google Workspace account has encountered a critical billing authentication mismatch. If unverified within 24 hours, all mailbox data and attached drives will be permanently erased.

Click below to verify identity & renew billing:
https://portal-account-auth-verify.xyz/login?session=93820184

Failure to do so will freeze all enterprise communications.
Google Workspace Billing Team`,
    urgency: "SECURITY_BLOCK",
    category: "PHISHING_THREAT",
    sentiment: "MALICIOUS",
    score: 99,
    actionRequired: false,
    aiReasoning: "CRITICAL PHISHING DETECTION: Sender domain age is 2 days old, SPF/DKIM validation failed, URL redirects to suspicious Russian IP. Zero resemblance to authentic Google billing.",
    mcpActions: [
      { tool: "mcp.quarantine_email", action: "INSTANT_VAULT_LOCK", status: "executed", text: "Email isolated in cryptographic quarantine sandbox" },
      { tool: "mcp.threat_intel_report", threatLevel: "CRITICAL_PHISH", status: "executed", text: "Reported domain to Cloudflare & Google Safe Browsing" },
      { tool: "mcp.blocklist_sender_subnet", subnet: "185.220.101.0/24", status: "executed", text: "Sender IP subnet blocked across all company mailboxes" }
    ],
    suggestedReply: `[ACTION BLOCKED]
Dispatcher AI quarantined this message before hitting user inbox. Automated reply suppressed to prevent sender active reconnaissance. Threat registered in SIEM log.`,
    mcpPayload: {
      jsonrpc: "2.0",
      method: "dispatch/security_quarantine",
      params: {
        threat_type: "credential_harvesting",
        domain_entropy: 0.88,
        spf_pass: false,
        dkim_pass: false,
        ip_origin: "185.220.101.44",
        action: "PERMANENT_REJECT"
      }
    }
  },
  {
    id: "mail-05",
    sender: {
      name: "Substack Top Stories",
      email: "digest@substack.com",
      avatar: "SS",
      verified: true,
      domain: "substack.com",
      reputation: 98
    },
    subject: "The Batch #284: Autonomous Agents, Reasoning Distillation, & Local MCP",
    date: "Il y a 1h",
    preview: "This week in AI: Andrew Ng on agentic workflows, Anthropic's new MCP protocol updates, and deep dive into Llama 3.3...",
    body: `Hello builder!

Here is this week's recap of key developments in machine learning and distributed agentic architecture:
1. Model Context Protocol: How unified agent tooling is dismantling proprietary silo APIs.
2. Speculative decoding speedups on Apple Silicon M4.
3. Vector database pruning strategies for infinite conversation memory.

Read full issue on web...`,
    urgency: "LOW",
    category: "NEWSLETTER",
    sentiment: "NEUTRAL",
    score: 15,
    actionRequired: false,
    aiReasoning: "Low priority informational newsletter. Contains educational AI insights. Routed to asynchronous reading digest; filtered out of primary inbox.",
    mcpActions: [
      { tool: "mcp.route_folder", target: "Read Later / Newsletters", status: "executed", text: "Moved out of primary focus inbox" },
      { tool: "mcp.generate_tldr", status: "executed", text: "Generated 3-bullet executive summary into Notion Daily Digest" }
    ],
    suggestedReply: `No response required. Added to Daily Digest.`,
    mcpPayload: {
      jsonrpc: "2.0",
      method: "dispatch/archive_and_digest",
      params: {
        newsletter_id: "the_batch_284",
        extract_tldr: true,
        notify_user: false
      }
    }
  }
];

export const MCP_TOOLS_CONFIG = [
  {
    name: "triage_email",
    description: "Analyzes raw email payload, extracts priority, sentiment, entities, and flags security risks.",
    inputSchema: {
      type: "object",
      properties: {
        message_id: { type: "string" },
        include_pii_redaction: { type: "boolean", default: true },
        urgency_threshold: { type: "number", default: 0.8 }
      },
      required: ["message_id"]
    }
  },
  {
    name: "draft_smart_reply",
    description: "Generates context-aware, voice-matched drafts grounded in company knowledge and past thread context.",
    inputSchema: {
      type: "object",
      properties: {
        message_id: { type: "string" },
        tone: { type: "string", enum: ["executive", "concise", "diplomatic", "technical"] },
        calendar_invite_slot: { type: "string" }
      },
      required: ["message_id"]
    }
  },
  {
    name: "route_escalation",
    description: "Executes deterministic webhooks to Slack, Linear, PagerDuty, or CRM based on AI neural rules.",
    inputSchema: {
      type: "object",
      properties: {
        target_service: { type: "string", enum: ["slack", "linear", "pagerduty", "hubspot"] },
        priority: { type: "string", enum: ["P0", "P1", "P2", "P3"] },
        payload: { type: "object" }
      },
      required: ["target_service", "priority", "payload"]
    }
  },
  {
    name: "quarantine_security_threat",
    description: "Cryptographically locks suspicious or malicious emails, extracts threat IOCs, and alerts SecOps.",
    inputSchema: {
      type: "object",
      properties: {
        message_id: { type: "string" },
        block_domain: { type: "boolean" },
        report_upstream: { type: "boolean" }
      },
      required: ["message_id"]
    }
  }
];

export const MCP_CONFIGS = {
  claude: {
    title: "Claude Desktop",
    filename: "~/Library/Application Support/Claude/claude_desktop_config.json",
    snippet: `{
  "mcpServers": {
    "dispatch-triage": {
      "command": "npx",
      "args": ["-y", "@dispatch/mcp-server", "--edge-region", "iad1"],
      "env": {
        "DISPATCH_API_KEY": "dsp_live_89f72c91b8a9012e",
        "AUTO_REPLY_MODE": "require_human_confirm",
        "EDGE_LATENCY_MAX_MS": "50"
      }
    }
  }
}`
  },
  cursor: {
    title: "Cursor IDE / Windsurf",
    filename: ".cursor/mcp.json",
    snippet: `{
  "mcpServers": {
    "mail-dispatch": {
      "url": "https://mcp.dispatch.ai/v1/sse",
      "headers": {
        "Authorization": "Bearer dsp_live_89f72c91b8a9012e",
        "X-Agent-Profile": "developer-inbox"
      }
    }
  }
}`
  },
  antigravity: {
    title: "Gemini CLI / Antigravity",
    filename: "~/.gemini/settings.json",
    snippet: `{
  "mcp": {
    "servers": {
      "dispatch": {
        "command": "dispatch-mcp",
        "args": ["daemon", "--realtime-stream"],
        "tools": ["triage_email", "draft_smart_reply", "route_escalation"]
      }
    }
  }
}`
  },
  docker: {
    title: "Self-Hosted / Docker",
    filename: "docker-compose.yml",
    snippet: `version: "3.8"
services:
  dispatch-edge:
    image: ghcr.io/dispatch-ai/edge-mcp:latest
    restart: always
    ports:
      - "8443:8443"
    environment:
      - LOCAL_LLM_URL=http://ollama:11434
      - ZERO_RETENTION=true
      - ENCRYPTION_KEY_FILE=/run/secrets/mcp_key
    volumes:
      - ./data:/var/lib/dispatch`
  }
};

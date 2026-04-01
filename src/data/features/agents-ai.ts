import { FeaturePageData } from './types';

export const agentsAiFeature: FeaturePageData = {
  slug: 'agents-ai-autonomous-customer-relationship-engine',

  seo: {
    title: 'Agents.ai Autonomous Customer Relationship Engine | CredStack.ai',
    description:
      'Agents.ai is a no-code, multi-channel AI agent orchestration platform for autonomous customer engagement across chat, voice, email, WhatsApp, and in-app channels.',
    canonical: '/features/agents-ai-autonomous-customer-relationship-engine',
  },

  hero: {
    h1: 'Agents.ai - Autonomous Customer Relationship Engine',
    intro:
      'Agents.ai is a no-code, multi-channel AI agent orchestration platform that helps enterprises design, deploy, and scale intelligent customer interactions across chat, voice, email, WhatsApp, and in-app channels. It transforms fragmented communication into structured, automated, and outcome-driven workflows.',
    ctaLabel: 'Request a Demo',
    ctaHref: '/demo',
    image: '/assets/page_images/automation.png',
  },

  problem: {
    title: 'Customer communication is fragmented, manual, and difficult to scale',
    points: [
      {
        title: 'Siloed channels and disconnected context',
        description:
          'Customer interactions happen across email, chat, calls, and WhatsApp with no persistent memory, causing repeated conversations and poor experience.',
        visualHint: 'Channel fragmentation',
      },
      {
        title: 'Manual handling limits response quality',
        description:
          'Support and operations teams spend time on repetitive queries and coordination, reducing throughput and increasing operating costs.',
        visualHint: 'Manual bottlenecks',
      },
      {
        title: 'Reactive support slows outcomes',
        description:
          'Teams respond after customer follow-ups instead of proactively driving next actions, resulting in drop-offs and delays.',
        visualHint: 'Slow resolutions',
      },
    ],
  },

  definition: {
    title: 'What is Agents.ai?',
    whatIs:
      'Agents.ai is an autonomous customer relationship platform where AI agents can understand context, make decisions, and execute workflow actions across customer touchpoints.',
    whyUse:
      'It enables enterprises to move from reactive support to proactive, always-on engagement systems without linear headcount expansion.',
  },

  howItWorks: {
    title: 'How Agents.ai works',
    steps: [
      {
        title: 'Connect channels and systems',
        description:
          'Integrate WhatsApp, voice, web chat, email, and CRM/LOS systems into a unified agent layer.',
      },
      {
        title: 'Design agents without code',
        description:
          'Use drag-and-drop orchestration to define intents, entities, fallbacks, escalation rules, and decision trees.',
      },
      {
        title: 'Activate autonomous workflows',
        description:
          'Agents trigger lead updates, ticketing, notifications, and follow-ups while preserving customer context.',
      },
      {
        title: 'Continuously optimize outcomes',
        description:
          'Track resolution quality, escalation patterns, and conversion signals to improve agent behavior over time.',
      },
    ],
  },

  useCases: {
    title: 'Use cases in lending and partner ecosystems',
    items: [
      {
        title: 'Partner email to lead ingestion',
        description:
          'Automatically ingest partner communication, create leads, and run AI follow-ups with CRM sync.',
      },
      {
        title: 'Loan applicant engagement',
        description:
          'Handle KYC prompts, reminders, document collection, and status updates through conversational channels.',
      },
      {
        title: 'Collections and repayment nudging',
        description:
          'Drive timely nudges and resolution workflows through WhatsApp and voice with dynamic escalation.',
      },
      {
        title: 'Co-lending coordination workflows',
        description:
          'Coordinate tasks and hand-offs between lenders, partners, and operations teams using autonomous agents.',
      },
      {
        title: 'Customer onboarding and query resolution',
        description:
          'Provide 24x7 support for onboarding queries with seamless human handoff on complex cases.',
      },
    ],
  },

  audience: {
    title: 'Who this feature is for',
    items: ['Banks', 'NBFCs', 'Fintech lenders', 'Customer operations teams', 'Collections teams'],
  },

  differentiators: {
    title: 'Why Agents.ai stands out',
    items: [
      {
        title: 'Multi-channel orchestration with memory',
        description:
          'Maintains contextual continuity across voice, chat, email, and WhatsApp interactions.',
        image: '/assets/page_images/multi_bankst.png',
      },
      {
        title: 'No-code agent builder',
        description:
          'Lets business teams design, test, and deploy conversation workflows without engineering bottlenecks.',
        image: '/assets/page_images/validation.png',
      },
      {
        title: 'Autonomous action execution',
        description:
          'Agents do not just respond - they trigger workflows, sync systems, and complete next actions.',
        image: '/assets/page_images/decisioning.png',
      },
      {
        title: 'Enterprise-grade scalability',
        description:
          'Supports high-volume operations with low-latency pipelines and distributed processing.',
        image: '/assets/page_images/api_bankst.png',
      },
      {
        title: 'Intelligent escalation engine',
        description:
          'Routes by urgency, sentiment, and intent, ensuring human intervention only where needed.',
        image: '/assets/page_images/risk_bankstatement.png',
      },
      {
        title: 'India-ready voice stack',
        description:
          'Built for real-time AI calling and integrations with telecom partners such as Exotel, Knowlarity, and Twilio.',
        image: '/assets/page_images/cashflow_transaction.png',
      },
    ],
  },

  comparison: {
    title: 'Agents.ai vs Traditional Support and Chatbots',
    columns: ['Capability', 'Manual Ops', 'Basic Chatbot', 'Agents.ai'],
    rows: [
      {
        feature: 'Channel coverage',
        values: ['Email or voice silos', 'Primarily chat', 'Unified voice, chat, email, WhatsApp, in-app'],
      },
      {
        feature: 'Context continuity',
        values: ['Agent-dependent', 'Session-limited', 'Persistent memory across touchpoints'],
      },
      {
        feature: 'Workflow execution',
        values: ['Manual tasking', 'Limited intents', 'Autonomous actions and system updates'],
      },
      {
        feature: 'Escalation model',
        values: ['Static queues', 'Rule-only handoff', 'Dynamic routing by urgency, sentiment, and intent'],
      },
      {
        feature: 'Scalability',
        values: ['Linear with headcount', 'Constrained by bot design', 'Built for million-plus interactions per day'],
      },
    ],
  },

  architecture: {
    title: 'Technical architecture and integration model',
    points: [
      'No-code orchestration layer for intents, entities, and decision trees',
      'Conversation memory service for cross-channel context carry-forward',
      'AI reasoning engine for intent detection and next-best-action',
      'Workflow automation connectors for CRM, ticketing, and notifications',
      'Distributed queue-based processing for high-throughput interactions',
    ],
    apiNotes: [
      'Integrates with CRM and ticketing platforms via APIs and webhooks',
      'Supports telephony and voice stack integrations (Exotel, Knowlarity, Twilio)',
      'Configurable fallback and human-in-loop orchestration endpoints',
    ],
  },

  faqs: [
    {
      q: 'Is Agents.ai only a chatbot platform?',
      a: 'No. It is an autonomous orchestration platform that can reason, act, and execute business workflows across channels.',
    },
    {
      q: 'Can non-technical teams configure workflows?',
      a: 'Yes. The no-code builder supports drag-and-drop flow design, escalation logic, and knowledge source configuration.',
    },
    {
      q: 'Does it support voice and WhatsApp journeys?',
      a: 'Yes. It supports voice, WhatsApp, email, chat, and in-app channels with context continuity.',
    },
    {
      q: 'How does escalation work?',
      a: 'The system can escalate based on urgency, sentiment, and unresolved intents, with optional human-in-loop handoff.',
    },
    {
      q: 'Can it scale for enterprise operations?',
      a: 'Yes. It is designed for high-volume pipelines with multi-tenant, low-latency architecture.',
    },
  ],

  demo: {
    title: 'See Agents.ai in action',
    text:
      'Explore how autonomous AI agents can orchestrate customer journeys, execute workflows, and improve resolution outcomes across channels.',
    primaryLabel: 'Request a Demo',
    primaryHref: '/demo',
    secondaryLabel: 'Contact Us',
    secondaryHref: '/contact',
  },

  relatedBlogs: {
    title: 'Related Blogs',
    items: [],
  },
};

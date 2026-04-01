import { FeaturePageData } from './types';

export const insightsAiFeature: FeaturePageData = {
  slug: 'insights-ai-customer-operational-intelligence',

  seo: {
    title: 'Insights.ai Customer and Operational Intelligence Layer | CredStack.ai',
    description:
      'Insights.ai is an AI-powered analytics and decision intelligence layer that turns conversations, workflows, and documents into actionable insights and predictive recommendations.',
    canonical: '/features/insights-ai-customer-operational-intelligence',
  },

  hero: {
    h1: 'Insights.ai - Intelligence Layer for Customer and Operational Analytics',
    intro:
      'Insights.ai continuously analyzes conversations, documents, workflows, and customer interactions to generate real-time, actionable insights across the customer lifecycle. It turns raw interaction data into structured intelligence, predictive signals, and strategic recommendations.',
    ctaLabel: 'Request a Demo',
    ctaHref: '/demo',
    image: '/assets/page_images/perfomance.png',
  },

  problem: {
    title: 'Teams have data, but not decision-ready intelligence',
    points: [
      {
        title: 'Interaction data is scattered',
        description:
          'Calls, chats, emails, and CRM activity remain fragmented, making holistic analysis difficult across the customer journey.',
        visualHint: 'Data silos',
      },
      {
        title: 'Signals are missed in unstructured content',
        description:
          'Buying intent, objections, friction points, and risk indicators are hidden inside conversations and documents.',
        visualHint: 'Hidden signals',
      },
      {
        title: 'Optimization is reactive',
        description:
          'Performance and process improvements are often delayed because teams lack real-time guidance and closed-loop learning.',
        visualHint: 'Delayed action',
      },
    ],
  },

  definition: {
    title: 'What is Insights.ai?',
    whatIs:
      'Insights.ai is an analytics and decision intelligence layer that transforms multi-channel interactions and operational workflows into predictive and prescriptive insights.',
    whyUse:
      'It helps teams improve conversion, efficiency, and customer experience by identifying risks and opportunities automatically.',
  },

  howItWorks: {
    title: 'How Insights.ai works',
    steps: [
      {
        title: 'Aggregate interaction and workflow data',
        description:
          'Unifies calls, chats, emails, WhatsApp, CRM, and transaction signals into a single intelligence layer.',
      },
      {
        title: 'Extract and structure behavioral signals',
        description:
          'AI detects intent, objections, drop-off points, sentiment shifts, and operational bottlenecks in real time.',
      },
      {
        title: 'Score and prioritize opportunities',
        description:
          'Lead qualification and ranking are generated from behavioral patterns and engagement quality.',
      },
      {
        title: 'Recommend next actions and optimize',
        description:
          'Predictive models forecast outcomes and suggest next-best actions for teams and workflow orchestration.',
      },
    ],
  },

  useCases: {
    title: 'Use cases in CredStack context',
    items: [
      {
        title: 'Loan applicant intent scoring',
        description:
          'Prioritize high-quality applicants using conversation and behavior-derived signals.',
      },
      {
        title: 'Fraud and anomaly signal detection',
        description:
          'Surface unusual patterns from conversations and process trails for early intervention.',
      },
      {
        title: 'Partner performance benchmarking',
        description:
          'Compare conversion and operational quality across sourcing and co-lending partners.',
      },
      {
        title: 'Underwriting signal enrichment',
        description:
          'Feed engagement and behavior intelligence into underwriting decision layers.',
      },
      {
        title: 'Customer journey drop-off analysis',
        description:
          'Identify lifecycle friction and prescribe optimization opportunities to improve completion rates.',
      },
    ],
  },

  audience: {
    title: 'Who this feature is for',
    items: ['Sales teams', 'Operations leaders', 'CX teams', 'Risk and underwriting teams', 'Partner management teams'],
  },

  differentiators: {
    title: 'Why Insights.ai stands out',
    items: [
      {
        title: 'Unified interaction intelligence',
        description:
          'Combines customer conversations and operational events into one analysis layer.',
        image: '/assets/page_images/multi_bankst.png',
      },
      {
        title: 'Real-time insight extraction',
        description:
          'Detects buying signals, objections, friction points, and inefficiencies as they emerge.',
        image: '/assets/page_images/risk_bankstatement.png',
      },
      {
        title: 'Lead scoring aligned to conversion quality',
        description:
          'Uses behavioral and engagement signals to prioritize high-value opportunities.',
        image: '/assets/page_images/perfomance.png',
      },
      {
        title: 'Sentiment and escalation intelligence',
        description:
          'Flags dissatisfaction and churn risk early so teams can intervene proactively.',
        image: '/assets/page_images/validation.png',
      },
      {
        title: 'Predictive and prescriptive recommendations',
        description:
          'Forecasts outcomes and suggests next-best-action strategies for teams and workflows.',
        image: '/assets/page_images/decisioning.png',
      },
      {
        title: 'Continuous learning loop',
        description:
          'Insights feed back into agent and process optimization for self-improving systems.',
        image: '/assets/page_images/api_bankst.png',
      },
    ],
  },

  comparison: {
    title: 'Insights.ai vs Traditional BI and Reporting',
    columns: ['Capability', 'Spreadsheet Reporting', 'Static BI Dashboards', 'Insights.ai'],
    rows: [
      {
        feature: 'Data freshness',
        values: ['Periodic updates', 'Scheduled refreshes', 'Real-time intelligence streams'],
      },
      {
        feature: 'Signal extraction',
        values: ['Manual interpretation', 'Limited structured metrics', 'AI extraction from conversations and workflows'],
      },
      {
        feature: 'Lead qualification',
        values: ['Rule-based scoring', 'Basic scorecards', 'Behavior-driven dynamic lead scoring'],
      },
      {
        feature: 'Decision guidance',
        values: ['Descriptive only', 'Trend visualization', 'Predictive and prescriptive recommendations'],
      },
      {
        feature: 'Closed-loop optimization',
        values: ['Manual feedback loops', 'Team-dependent improvements', 'Automated learning and continuous optimization'],
      },
    ],
  },

  architecture: {
    title: 'Technical architecture and integration model',
    points: [
      'Event ingestion layer for calls, chats, emails, WhatsApp, and CRM systems',
      'NLP and analytics engine for intent, sentiment, and pattern extraction',
      'Lead scoring and predictive modeling services for conversion and risk',
      'Insights API layer to push recommendations into workflows and dashboards',
      'Feedback loop pipeline to improve models and orchestration outcomes continuously',
    ],
    apiNotes: [
      'Integrates with CRM, LOS, and communication platforms through APIs and webhooks',
      'Supports custom score export and trigger endpoints for workflow systems',
      'Can feed signal outputs to Agents.ai for closed-loop experience optimization',
    ],
  },

  faqs: [
    {
      q: 'What kind of data does Insights.ai analyze?',
      a: 'It analyzes conversations, workflow events, CRM updates, and transaction metadata across customer touchpoints.',
    },
    {
      q: 'Can it improve lead quality for sales teams?',
      a: 'Yes. It generates behavioral lead scores and prioritization signals to focus teams on high-quality opportunities.',
    },
    {
      q: 'Does it support real-time alerts?',
      a: 'Yes. It can trigger alerts for sentiment risk, escalation probability, and drop-off trends in near real time.',
    },
    {
      q: 'How does it support operations teams?',
      a: 'It detects bottlenecks, turnaround delays, and process inefficiencies and suggests optimization opportunities.',
    },
    {
      q: 'Can Insights.ai work with existing analytics stacks?',
      a: 'Yes. It is API-first and can complement existing BI tools while adding AI-driven decision intelligence.',
    },
  ],

  demo: {
    title: 'See Insights.ai in action',
    text:
      'Explore how Insights.ai turns every interaction into intelligence, predicts outcomes, and guides teams with actionable next steps.',
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

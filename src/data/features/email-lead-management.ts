import { FeaturePageData } from './types';

export const emailLeadManagementFeature: FeaturePageData = {
  slug: 'email-lead-management-partner-crm',

  seo: {
    title: 'AI Email Lead Management & Partner CRM for Co-Lending | CredStack.ai',
    description:
      'CredStack Email Lead Management automates partner communication, email ingestion, lead updates, follow-ups, escalation, and onboarding workflows using agentic AI for lenders and NBFCs.',
    canonical: '/features/email-lead-management-partner-crm',
  },

  hero: {
    h1: 'AI-Powered Email Lead Management for Partnerships & Co-Lending',
    intro:
      'CredStack’s Email CRM transforms unstructured partner communication into structured, actionable workflows. It auto-ingests emails, updates leads, tracks conversations, assigns ownership, escalates delays, and autonomously follows up—ensuring zero lead leakage from sourcing to onboarding.',
    ctaLabel: 'Request a Demo',
    ctaHref: '/demo',
    image: '/assets/page_images/email_crm.png',
  },

  problem: {
    title:
      'Partner-driven lead management over email is fragmented, manual, and error-prone',
    points: [
      {
        title: 'Emails are unstructured and hard to track',
        description:
          'Leads shared over email lack structure—forcing teams to manually read, interpret, and enter data into LOS or CRMs.',
        visualHint: 'Unstructured data chaos',
      },
      {
        title: 'Follow-ups and ownership are inconsistent',
        description:
          'No clear tracking of who is responsible for responding, leading to missed SLAs, delayed responses, and poor partner experience.',
        visualHint: 'Missed SLAs',
      },
      {
        title: 'No unified conversation history',
        description:
          'Critical updates, attachments, and comments are buried in long email threads with no centralized visibility.',
        visualHint: 'Lost context',
      },
      {
        title: 'Lead leakage during onboarding',
        description:
          'Manual tracking leads to dropped leads, incomplete documentation, and missed conversions.',
        visualHint: 'Conversion loss',
      },
    ],
  },

  definition: {
    title: 'What is Email Lead Management in Lending?',
    whatIs:
      'Email Lead Management is the process of capturing, structuring, tracking, and acting on loan leads received via email from partners such as DSAs, marketplaces, and co-lending institutions. It converts unstructured communication into structured workflows.',
    whyUse:
      'Lenders rely heavily on email-based sourcing channels. Automating this layer ensures faster response times, zero data loss, better partner collaboration, and higher conversion rates across the lending lifecycle.',
  },

  howItWorks: {
    title: 'How CredStack Email Lead Management works',
    steps: [
      {
        title: 'Email Ingestion Layer',
        description:
          'AI continuously monitors configured inboxes and ingests incoming partner emails, attachments, and threads in real time.',
        image: '/assets/page_images/classification.png',
      },
      {
        title: 'Lead Creation & Auto-Update',
        description:
          'Extracts borrower details, loan requirements, and partner inputs to create or update leads automatically in the system.',
        image: '/assets/page_images/extraction.png',
      },
      {
        title: 'Conversation Intelligence',
        description:
          'Understands email context, captures latest remarks, status updates, and intent across threads.',
        image: '/assets/page_images/validation.png',
      },
      {
        title: 'Assignment & Ownership Tracking',
        description:
          'Automatically assigns leads to relevant teams or users based on rules, workload, or partner mapping.',
        image: '/assets/page_images/decisioning.png',
      },
      {
        title: 'AI Follow-Ups & Escalations',
        description:
          'Agentic AI follows up with partners for pending documents, escalates delays, and ensures SLA adherence without manual intervention.',
        image: '/assets/page_images/human_loop.png',
      },
      {
        title: 'Onboarding Tracking',
        description:
          'Tracks the lead across document collection, verification, underwriting, and onboarding stages until completion.',
        image: '/assets/page_images/human_loop.png',
      },
    ],
  },

  useCases: {
    title: 'Where can you use AI Email Lead Management?',
    items: [
      {
        title: 'DSA & Channel Partner Lead Intake',
        description:
          'Automatically capture and process leads shared by DSAs and external sourcing partners via email.',
      },
      {
        title: 'Co-Lending Collaboration',
        description:
          'Streamline communication between co-lending institutions with full visibility into updates, documents, and responsibilities.',
      },
      {
        title: 'Marketplace Lead Integration',
        description:
          'Handle high-volume inbound leads from aggregators like Paisabazaar without manual parsing.',
      },
      {
        title: 'Document Collection & Follow-Up',
        description:
          'Continuously chase pending documents using AI-driven reminders and nudges.',
      },
      {
        title: 'Lead Lifecycle Tracking',
        description:
          'Track each lead from sourcing to onboarding with full audit trails and interaction history.',
      },
    ],
  },

  audience: {
    title: 'Who this feature is for',
    items: ['NBFCs', 'Banks', 'Fintech Lenders', 'Co-Lending Teams', 'Partnership Teams'],
  },

  differentiators: {
    title: 'Why choose CredStack Email Lead Management',
    items: [
      {
        title: 'True Email-to-Workflow Automation',
        description:
          'Converts raw email threads into structured leads, updates, and workflows automatically.',
        image: '/assets/page_images/intelligent_transaction.png',
      },
      {
        title: 'Agentic Follow-Up Engine',
        description:
          'AI agents autonomously follow up, remind, and escalate until tasks are completed.',
        image: '/assets/page_images/cashflow_transaction.png',
      },
      {
        title: 'Conversation Intelligence Layer',
        description:
          'Understands context, intent, and updates across long email threads without manual reading.',
        image: '/assets/page_images/risk_bankstatement.png',
      },
      {
        title: 'Zero Lead Leakage',
        description:
          'Ensures every lead is tracked, followed up, and progressed until onboarding or closure.',
        image: '/assets/page_images/multi_bankst.png',
      },
      {
        title: 'Unified Partner View',
        description:
          'Single dashboard for all partner interactions, leads, documents, and statuses.',
        image: '/assets/page_images/api_bankst.png',
      },
      {
        title: 'Seamless LOS Integration',
        description:
          'Direct integration with LOS and underwriting workflows for real-time data sync.',
        image: '/assets/page_images/cashflow_bankst.png',
      },
    ],
  },

  comparison: {
    title: 'CredStack vs Traditional Email + CRM Workflows',
    columns: ['Feature', 'Traditional CRM', 'Email-Based Ops', 'CredStack'],
    rows: [
      {
        feature: 'Lead Capture',
        values: [
          'Manual entry from emails',
          'Unstructured inbox tracking',
          'AI auto-ingestion and lead creation',
        ],
      },
      {
        feature: 'Follow-Ups',
        values: [
          'Manual reminders',
          'Ad-hoc responses',
          'Autonomous AI follow-ups',
        ],
      },
      {
        feature: 'Conversation Tracking',
        values: [
          'Limited notes',
          'Scattered threads',
          'Full thread intelligence',
        ],
      },
      {
        feature: 'Ownership Tracking',
        values: [
          'Manual assignment',
          'No clarity',
          'Auto-assignment with SLA tracking',
        ],
      },
      {
        feature: 'Lead Lifecycle Visibility',
        values: [
          'Partial visibility',
          'No tracking',
          'End-to-end tracking till onboarding',
        ],
      },
    ],
  },

  architecture: {
    title: 'Technical architecture and API integration',
    points: [
      'Secure email connectors (IMAP/SMTP/API-based ingestion)',
      'AI parsing layer for email body, attachments, and threads',
      'Entity extraction for borrower, loan, and partner data',
      'Workflow engine for assignment, escalation, and follow-ups',
      'Integration with LOS, CRM, and underwriting systems',
    ],
    apiNotes: [
      'Supports real-time ingestion via email APIs',
      'Webhook-based updates to LOS systems',
      'Custom partner mapping and routing APIs',
    ],
  },

  faqs: [
    {
      q: 'Can the system handle multiple email formats and partners?',
      a: 'Yes. The AI is trained to handle diverse email formats, attachments, and partner-specific structures.',
    },
    {
      q: 'Does it automatically create leads from emails?',
      a: 'Yes. It extracts relevant details and creates or updates leads in real time.',
    },
    {
      q: 'How does follow-up automation work?',
      a: 'AI agents monitor pending actions and automatically send reminders or escalations until completion.',
    },
    {
      q: 'Is there full audit visibility?',
      a: 'Yes. Every email, update, and action is logged with timestamps for complete traceability.',
    },
    {
      q: 'Can it integrate with our LOS?',
      a: 'Yes. The platform is API-first and integrates seamlessly with existing LOS and CRM systems.',
    },
  ],

  demo: {
    title: 'See Email Lead Management in action',
    text:
      'Experience how CredStack converts email conversations into structured workflows, automates follow-ups, and ensures zero lead leakage.',
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
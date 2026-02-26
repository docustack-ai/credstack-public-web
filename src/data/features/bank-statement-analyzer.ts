import { FeaturePageData } from './types';

export const bankStatementAnalyzerFeature: FeaturePageData = {
  slug: 'bank-statement-analyzer',
  seo: {
    title: 'AI Bank Statement Analyzer for Automated Credit Risk Assessment | CredStack.ai',
    description:
      'Credstack Bank Statement Analyzer uses AI-driven data extraction, transaction classification, and risk signal detection to automate underwriting for lenders.',
    canonical: '/features/bank-statement-analyzer',
  },
  hero: {
    h1: 'AI Bank Statement Analyzer for Automated Credit Risk Assessment',
    intro:
      'The Credstack Bank Statement Analyzer is software that automates statement extraction, transaction intelligence, and credit risk analysis for faster and more consistent underwriting decisions.',
    ctaLabel: 'Request a Demo',
    ctaHref: '/demo',
    image: '/assets/page_images/extraction.png',
  },
  problem: {
    title: 'What is the current underwriting problem?',
    points: [
      {
        title: 'Manual statement review is slow',
        description:
          'Analysts spend time normalizing PDF statements and identifying patterns manually, increasing turnaround time and operational cost.',
        visualHint: 'TAT delays',
      },
      {
        title: 'Risk signals are inconsistent',
        description:
          'Without structured classification, important indicators like irregular cashflow and abnormal spending may be missed or interpreted differently by teams.',
        visualHint: 'Missed signals',
      },
      {
        title: 'Fraud checks are fragmented',
        description:
          'Single-statement analysis and weak cross-account visibility make it difficult to catch circular transfers and manipulated activity early.',
        visualHint: 'Fraud exposure',
      },
    ],
  },
  definition: {
    title: 'What is Bank Statement Analysis?',
    whatIs:
      'Bank statement analysis is the process of extracting transaction-level data from statements and converting it into structured insights about income, expenses, liabilities, liquidity, and borrower behavior.',
    whyUse:
      'Lenders use bank statement analysis to make faster and more defensible credit decisions by measuring repayment capacity, financial stability, and risk patterns from real cashflow behavior.',
  },
  howItWorks: {
    title: 'How Credstack Bank Statement Analyzer works',
    steps: [
      {
        title: 'Statement Ingestion',
        description:
          'Upload PDF bank statements or connect directly through secure banking APIs.',
        image: '/assets/page_images/classification.png',
      },
      {
        title: 'Data Extraction',
        description:
          'AI-powered parsing extracts dates, amounts, balances, and transaction narratives into structured datasets.',
        image: '/assets/page_images/extraction.png',
      },
      {
        title: 'Transaction Classification',
        description:
          'Machine learning models classify entries into income, expenses, liabilities, and recurring payment categories.',
        image: '/assets/page_images/validation.png',
      },
      {
        title: 'Cashflow Analysis',
        description:
          'The engine evaluates income stability, spending patterns, and liquidity behavior over time.',
        image: '/assets/page_images/decisioning.png',
      },
      {
        title: 'Risk Scoring',
        description:
          'Structured risk indicators are generated to support automated underwriting and decision review workflows.',
        image: '/assets/page_images/human_loop.png',
      },
    ],
  },
  useCases: {
    title: 'Use cases',
    items: [
      {
        title: 'SME Lending Underwriting',
        description:
          'Evaluate business cashflow consistency and transaction behavior for better SME credit decisions.',
      },
      {
        title: 'Personal Loan Approval',
        description:
          'Assess salary reliability, spending discipline, and liabilities to speed up loan approval decisions.',
      },
      {
        title: 'BNPL Risk Analysis',
        description:
          'Analyze short-term financial behavior for real-time consumer risk assessment in BNPL flows.',
      },
      {
        title: 'Fraud Detection',
        description:
          'Detect anomalies, suspicious transfers, and potentially manipulated statement activity early.',
      },
    ],
  },
  audience: {
    title: 'Who this feature is for',
    items: ['NBFCs', 'Banks', 'Fintech Lenders'],
  },
  differentiators: {
    title: 'Why choose Credstack Bank Statement Analyzer',
    items: [
      {
        title: 'Intelligent Transaction Categorization',
        description:
          'Automatically classifies transactions into standardized buckets for consistent analysis across varying bank formats.',
      },
      {
        title: 'Cashflow and Income Intelligence',
        description:
          'Highlights income stability, spending trends, and liquidity movement with lender-friendly risk context.',
      },
      {
        title: 'Automated Risk Signals',
        description:
          'Surfaces irregular behavior, abnormal spending, and financial stress indicators in a structured format.',
      },
      {
        title: 'Multi-Statement and Cross-Transfer Detection',
        description:
          'Processes multiple statements per application and detects cross-account patterns linked to fraud risk.',
      },
      {
        title: 'API-First Integration',
        description:
          'Embeds into LOS, underwriting pipelines, and lending platforms through secure APIs.',
      },
      {
        title: 'Custom Intelligence Models',
        description:
          'Supports lender-specific underwriting logic, risk policies, and decision frameworks at scale.',
      },
    ],
  },
  comparison: {
    columns: [
      'Feature',
      'Traditional Bank Statement Tools',
      'Credstack Bank Statement Analyzer',
    ],
    rows: [
      {
        feature: 'Data Extraction',
        traditional: 'Basic transaction extraction',
        credstack: 'Advanced extraction with intelligence layered on top',
      },
      {
        feature: 'Intelligence & Risk Insights',
        traditional: 'Limited analytics',
        credstack: 'AI-driven insights and risk signals',
      },
      {
        feature: 'Custom Extraction',
        traditional: 'Standard templates',
        credstack: 'Custom extraction tailored to business requirements',
      },
      {
        feature: 'Configurable Logic',
        traditional: 'Fixed workflows',
        credstack: 'Configurable custom logic based on underwriting rules',
      },
      {
        feature: 'Multi-Bank Statement Analysis',
        traditional: 'Often single-statement focused',
        credstack: 'Processes multiple statements with cross-account analysis',
      },
      {
        feature: 'Fraud Detection',
        traditional: 'Basic anomaly checks',
        credstack: 'Cross-transfer detection and deeper fraud indicators',
      },
    ],
  },
  architecture: {
    title: 'Technical architecture and API integration',
    points: [
      'Statement ingestion via upload APIs and secure banking connectors',
      'Extraction and ML classification services expose normalized JSON outputs',
      'Risk orchestration layer produces explainable risk indicators for decision engines',
      'Integration-ready APIs feed LOS/LMS, underwriting dashboards, and decision workflows',
    ],
    apiNotes: [
      'REST-based integration model with secure authentication controls',
      'Supports synchronous or asynchronous processing patterns based on loan volume',
      'Structured response payloads can map into existing credit policy engines',
    ],
  },
  faqs: [
    {
      q: 'Can this integrate with our existing LOS or underwriting system?',
      a: 'Yes. The analyzer is API-first and designed to plug into existing LOS/LMS and underwriting workflows with structured outputs.',
    },
    {
      q: 'Does it support multiple statements for one borrower?',
      a: 'Yes. It can process multiple statements per application and build consolidated insights for decisioning.',
    },
    {
      q: 'How does fraud detection work in this feature?',
      a: 'It flags suspicious behavior patterns, including abnormal transactions and cross-transfer patterns that may indicate manipulation.',
    },
    {
      q: 'Can risk logic be tailored to our underwriting policy?',
      a: 'Yes. The platform supports configurable intelligence and policy-aligned models based on lender-specific risk rules.',
    },
    {
      q: 'What input formats are supported?',
      a: 'The workflow supports PDF ingestion and direct data connectivity through secure banking APIs.',
    },
  ],
  demo: {
    title: 'See the analyzer in action',
    text: 'Book a guided walkthrough to evaluate extraction accuracy, risk signals, and API integration for your lending workflow.',
    primaryLabel: 'Request a Demo',
    primaryHref: '/demo',
    secondaryLabel: 'Contact Us',
    secondaryHref: '/contact',
  },
  relatedBlogs: {
    title: 'Related Blogs',
    items: [],
  },
  complianceNote:
    'External benchmark stats and comparative numeric claims are intentionally kept neutral until source references are finalized (TBD source).',
};

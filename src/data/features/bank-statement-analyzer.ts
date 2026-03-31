import { FeaturePageData } from './types';

export const bankStatementAnalyzerFeature: FeaturePageData = {
  slug: 'bank-statement-analyzer',
  seo: {
    title: 'AI Bank Statement Analyzer for Automated Credit Risk Assessment | CredStack.ai',
    description:
      'Credstack Bank Statement Analyzer uses AI-driven bank statement validation, data extraction, transaction classification, and risk signal detection to automate underwriting for lenders.',
    canonical: '/features/bank-statement-analyzer',
  },
  hero: {
    h1: 'AI Powered Bank Statement Analyzer',
    intro:
      'The Credstack Bank Statement Analyzer is software that automates statement validation, data extraction, transaction intelligence, and credit risk analysis for faster and more consistent underwriting decisions.',
    ctaLabel: 'Request a Demo',
    ctaHref: '/demo',
    image: '/assets/page_images/bank_statement.png',
  },
  problem: {
    title: 'Current processes for bank statement analysis are slow, inconsistent, and risky',
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
    whatIs: '',
    whyUse: '',
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
    title: 'Where can you use the AI Agentic Bank Statement Analysis?',
    items: [
      {
        title: 'SME Lending Underwriting',
        description:
          'Evaluate business cashflow consistency and transaction behavior for better SME credit decisions.',
        image: '/assets/page_images/human_loop.png',
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
        image: '/assets/page_images/intelligent_transaction.png',
      },
      {
        title: 'Cashflow and Income Intelligence',
        description:
          'Highlights income stability, spending trends, and liquidity movement with lender-friendly risk context.',
        image: '/assets/page_images/cashflow_transaction.png',
      },
      {
        title: 'Automated Risk Signals',
        description:
          'Surfaces irregular behavior, abnormal spending, and financial stress indicators in a structured format.',
        image: '/assets/page_images/risk_bankstatement.png',
      },
      {
        title: 'Multi-Statement and Cross-Transfer Detection',
        description:
          'Processes multiple statements per application and detects cross-account patterns linked to fraud risk.',
        image: '/assets/page_images/multi_bankst.png',
      },
      {
        title: 'API-First Integration',
        description:
          'Embeds into LOS, underwriting pipelines, and lending platforms through secure APIs.',
        image: '/assets/page_images/api_bankst.png',
      },
      {
        title: 'Custom Intelligence Models',
        description:
          'Supports lender-specific underwriting logic, risk policies, and decision frameworks at scale.',
        image: '/assets/page_images/cashflow_bankst.png',
      },
    ],
  },
  comparison: {
    title: 'CredStack offers a true AI Powered and Economic Solution',
    columns: ['Feature', 'Perfios', 'Accumn', 'Credstack'],
    rows: [
      {
        feature: 'Data Extraction',
        values: [
          'Standardized extraction with broad bank-format support',
          'Template-driven extraction with configurable mappings',
          'AI extraction plus context-aware intelligence on top',
        ],
      },
      {
        feature: 'Intelligence & Risk Insights',
        values: [
          'Summary metrics with limited underwriting-specific signals',
          'Rule-based indicators with moderate customization options',
          'Explainable AI-driven risk signals tailored for decisioning',
        ],
      },
      {
        feature: 'Custom Extraction',
        values: [
          'Supported through scoped implementation changes',
          'Supported through template and rule customization',
          'Rapid custom extraction aligned to lender data needs',
        ],
      },
      {
        feature: 'Configurable Logic',
        values: [
          'Mostly predefined workflows with selective tuning',
          'Configurable rules with policy-level flexibility',
          'Fully configurable logic mapped to underwriting policies',
        ],
      },
      {
        feature: 'Multi-Bank Statement Analysis',
        values: [
          'Supports multi-statement ingestion and aggregation',
          'Supports multi-statement analysis with rule-based checks',
          'Multi-statement analysis with cross-account pattern detection',
        ],
      },
      {
        feature: 'Fraud Detection',
        values: [
          'Anomaly checks and consistency flags',
          'Risk rules and suspicious transaction pattern flags',
          'Cross-transfer detection and deeper fraud behavior signals',
        ],
      },
    ],
  },
  architecture: {
    title: 'Technical architecture and API integration',
    points: [],
    apiNotes: [],
  },
  faqs: [
    {
      q: 'What is bank statement analysis and why is it important for lenders?',
      a: 'Bank statement analysis is the process of extracting transaction-level data from statements and converting it into structured insights about income, expenses, liabilities, liquidity, and borrower behavior.Lenders use bank statement analysis to make faster and more defensible credit decisions by measuring repayment capacity, financial stability, and risk patterns from real cashflow behavior.',
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
};

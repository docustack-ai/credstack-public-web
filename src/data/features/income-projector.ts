import { FeaturePageData } from './types';

export const incomeAssessmentFeature: FeaturePageData = {
  slug: 'income-assessment-ai',

  seo: {
    title: 'AI Income Assessment & Field Income Projector for Lending | CredStack.ai',
    description:
      'CredStack Income Assessment enables credit and sales teams to accurately estimate borrower income on-ground using AI-driven questioning, benchmarking, and real-time market intelligence.',
    canonical: '/features/income-assessment-ai',
  },

  hero: {
    h1: 'AI-Powered Income Assessment for On-Ground Underwriting',
    intro:
      'CredStack Income Assessment helps field teams and underwriters accurately evaluate borrower income using guided workflows, real-time projections, benchmark comparisons, and AI-driven risk intelligence—ensuring consistent and defensible income estimation across lending operations.',
    ctaLabel: 'Request a Demo',
    ctaHref: '/demo',
    image: '/assets/page_images/income_assess.png',
  },

  problem: {
    title:
      'Income assessment in informal and semi-formal segments is inconsistent and subjective',
    points: [
      {
        title: 'Highly dependent on individual judgement',
        description:
          'Field officers rely on experience-based assumptions, leading to inconsistent income estimation across teams and regions.',
        visualHint: 'Subjective decisions',
      },
      {
        title: 'No structured questioning framework',
        description:
          'Critical inputs like unit economics, costs, and seasonality are often missed during field visits.',
        visualHint: 'Missed inputs',
      },
      {
        title: 'Lack of benchmarking data',
        description:
          'Teams have no access to historical performance, peer benchmarks, or category-level insights during assessment.',
        visualHint: 'No benchmarks',
      },
      {
        title: 'Limited visibility into market dynamics',
        description:
          'Income estimates ignore real-time factors like market prices, input costs, and regional variations.',
        visualHint: 'Market blind spots',
      },
      {
        title: 'Weak risk context during underwriting',
        description:
          'No integration of NPA trends or category-level risk indicators at the point of assessment.',
        visualHint: 'Hidden risk',
      },
    ],
  },

  definition: {
    title: 'What is AI Income Assessment?',
    whatIs:
      'Income Assessment is the process of estimating a borrower’s earning capacity based on business activity, unit economics, and supporting data. CredStack transforms this into a guided, data-backed workflow using AI.',
    whyUse:
      'For segments like MSMEs, self-employed borrowers, dairy farmers, and retail shops, income cannot be verified through formal documents. AI-driven income assessment ensures consistency, reduces bias, and improves underwriting accuracy.',
  },

  howItWorks: {
    title: 'How CredStack Income Assessment works',
    steps: [
      {
        title: 'Industry Selection & Context Setup',
        description:
          'Select borrower category (e.g., dairy, grocery, salon) to activate industry-specific models and benchmarks.',
        image: '/assets/page_images/classification.png',
      },
      {
        title: 'Guided AI Questioning',
        description:
          'AI dynamically asks relevant questions based on business type, ensuring all critical income drivers are captured.',
        image: '/assets/page_images/extraction.png',
      },
      {
        title: 'Real-Time Income Projection',
        description:
          'Instantly calculates income using captured inputs such as production, pricing, and cost structures.',
        image: '/assets/page_images/decisioning.png',
      },
      {
        title: 'Benchmarking & Validation',
        description:
          'Compares user inputs against historical internal data, industry benchmarks, and regional trends.',
        image: '/assets/page_images/validation.png',
      },
      {
        title: 'Market & Secondary Data Enrichment',
        description:
          'Pulls external signals like product pricing, input costs, and market conditions to validate estimates.',
        image: '/assets/page_images/risk_bankstatement.png',
      },
      {
        title: 'Risk Nudges & Insights',
        description:
          'Surfaces alerts such as abnormal assumptions, deviation from benchmarks, and NPA trends for the segment.',
        image: '/assets/page_images/human_loop.png',
      },
    ],
  },

  useCases: {
    title: 'Where can you use AI Income Assessment?',
    items: [
      {
        title: 'MSME Lending',
        description:
          'Assess income of small businesses like grocery stores, salons, and traders with structured evaluation.',
      },
      {
        title: 'Agri & Dairy Lending',
        description:
          'Estimate farmer and dairy income using yield, pricing, and seasonal benchmarks.',
      },
      {
        title: 'Self-Employed Borrowers',
        description:
          'Evaluate informal income sources where documents are unavailable or unreliable.',
      },
      {
        title: 'Field Credit Appraisals',
        description:
          'Enable relationship managers and field officers to perform consistent on-ground assessments.',
      },
      {
        title: 'Pre-Credit Quality Checks',
        description:
          'Ensure income estimates are validated before moving applications to underwriting.',
      },
    ],
  },

  audience: {
    title: 'Who this feature is for',
    items: [
      'NBFCs',
      'Banks',
      'Microfinance Institutions',
      'Field Sales Teams',
      'Credit Underwriting Teams',
    ],
  },

  differentiators: {
    title: 'Why choose CredStack Income Assessment',
    items: [
      {
        title: 'Guided Intelligence Layer',
        description:
          'AI ensures the right questions are asked dynamically based on borrower profile and industry.',
        image: '/assets/page_images/intelligent_transaction.png',
      },
      {
        title: 'Real-Time Income Projection Engine',
        description:
          'Instant income calculation with transparent breakdowns for auditability.',
        image: '/assets/page_images/cashflow_transaction.png',
      },
      {
        title: 'Internal Benchmarking Engine',
        description:
          'Leverages your historical portfolio data to validate income estimates against real outcomes.',
        image: '/assets/page_images/multi_bankst.png',
      },
      {
        title: 'Market Data Integration',
        description:
          'Uses external data such as pricing, cost benchmarks, and regional trends for validation.',
        image: '/assets/page_images/api_bankst.png',
      },
      {
        title: 'Risk & NPA Intelligence',
        description:
          'Provides contextual risk insights including NPA trends for specific segments and geographies.',
        image: '/assets/page_images/risk_bankstatement.png',
      },
      {
        title: 'Explainable & Auditable Outputs',
        description:
          'Every income estimate is backed by data points, assumptions, and benchmark comparisons.',
        image: '/assets/page_images/cashflow_bankst.png',
      },
    ],
  },

  comparison: {
    title: 'CredStack vs Traditional Income Assessment',
    columns: ['Feature', 'Manual Assessment', 'Rule-Based Tools', 'CredStack'],
    rows: [
      {
        feature: 'Questioning Framework',
        values: ['Ad-hoc and inconsistent', 'Static questionnaires', 'Dynamic AI-driven questioning'],
      },
      {
        feature: 'Income Calculation',
        values: ['Manual estimation', 'Fixed formulas', 'Real-time adaptive projections'],
      },
      {
        feature: 'Benchmarking',
        values: ['None', 'Limited static benchmarks', 'Internal + external benchmarking'],
      },
      {
        feature: 'Market Data Usage',
        values: ['Ignored or manual lookup', 'Limited integration', 'Live market data integration'],
      },
      {
        feature: 'Risk Awareness',
        values: ['Experience-based', 'Basic flags', 'NPA and segment-level insights'],
      },
    ],
  },

  architecture: {
    title: 'Technical architecture and intelligence layers',
    points: [
      'Industry-specific income models (dairy, retail, services, etc.)',
      'Dynamic AI questioning engine',
      'Real-time calculation and projection engine',
      'Internal benchmarking engine (portfolio data)',
      'External data connectors for market signals',
      'Risk intelligence layer with NPA insights',
    ],
    apiNotes: [
      'Integrates with LOS and underwriting systems',
      'Supports offline-first field data capture',
      'Real-time sync for centralized decisioning',
    ],
  },

  faqs: [
    {
      q: 'Can this be used offline by field teams?',
      a: 'Yes. The module supports offline data capture with sync capabilities when connectivity is available.',
    },
    {
      q: 'How are benchmarks generated?',
      a: 'Benchmarks are derived from your historical portfolio data combined with industry and market datasets.',
    },
    {
      q: 'Does it work across different industries?',
      a: 'Yes. The system supports multiple industries with customizable models for each segment.',
    },
    {
      q: 'How does it improve underwriting accuracy?',
      a: 'By standardizing inputs, validating assumptions, and incorporating risk signals, it reduces subjectivity and improves consistency.',
    },
    {
      q: 'Is the output explainable?',
      a: 'Yes. Every projection includes a detailed breakdown of assumptions, inputs, and benchmark comparisons.',
    },
  ],

  demo: {
    title: 'See Income Assessment in action',
    text:
      'Experience how CredStack enables field teams to capture accurate inputs, generate real-time income projections, and benchmark them against data-driven insights.',
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
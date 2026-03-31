import { FeaturePageData } from './types';

export const camAutomationFeature: FeaturePageData = {
 slug: 'cam-automation',
 seo: {
 title: 'AI CAM Automation for Faster Credit Underwriting | CredStack.ai',
 description:
 'CredStack CAM Automation leverages AI to auto-generate comprehensive Credit Appraisal Memorandums (CAMs) from borrower documents. It cross-validates bank statements, financials, GST/ITR and bureau data to speed up underwriting, catch anomalies and ensure policy-aligned decisions.',
 canonical: '/features/cam-automation',
 },
 hero: {
 h1: 'AI-Powered Credit Appraisal Memorandum Automation',
 intro:
 'Automate CAM report generation with CredStack. Our AI agents analyse all borrower documents and instantly produce a structured credit appraisal memo, so you can accelerate underwriting with consistent, auditable insights.',
 ctaLabel: 'Request a Demo',
 ctaHref: '/demo',
 image: '/assets/page_images/cam_hero.png',
 },
 problem: {
 title: 'Current CAM processes are slow, inconsistent, and risky',
 points: [
 {
 title: 'Manual CAM drafting slows decisions',
 description:
 'Underwriters spend hours gathering data and drafting credit memos, delaying approvals and inflating costs.',
 visualHint: 'Slow turnaround',
 },
 {
 title: 'Inconsistent risk analysis',
 description:
 'Disconnected tools and human judgement lead to variability in risk assessment. Key red flags may be missed without a unified framework.',
 visualHint: 'Missed flags',
 },
 {
 title: 'Data silos cause errors',
 description:
 'Using separate systems (Excel, portals) for each data source creates a disjointed workflow, increasing data entry mistakes.',
 visualHint: 'Data fragmentation',
 },
 {
 title: 'Compliance headaches',
 description:
 'Handwritten memos are hard to audit. Lack of traceability makes regulatory reviews and due diligence more difficult.',
 visualHint: 'Audit risk',
 },
 ],
 },
 definition: {
 title: 'What is CAM Automation?',
 whatIs:
 'A Credit Appraisal Memorandum (CAM) is a structured report summarizing a borrower’s financial health and creditworthiness. It is the definitive credit document lenders use for approvals and audits.',
 whyUse:
 'Automating CAM creation lets AI synthesise all loan application data into this memo instantly. You get consistent, rules-driven analysis and a full audit trail, enabling faster, more defendable lending decisions.',
 },
 howItWorks: {
 title: 'How CredStack CAM works',
 steps: [
 {
 title: 'Document Ingestion',
 description:
 'Collect all borrower documents (bank statements, financials, GST/ITR filings, KYC, bureau reports, etc.) via secure uploads or API connections.',
 image: '/assets/page_images/classification.png',
 },
 {
 title: 'Data Extraction',
 description:
 'AI/LLM models parse and normalise each document, extracting dates, amounts, balances and other fields into structured datasets.',
 image: '/assets/page_images/extraction.png',
 },
 {
 title: 'Cross-Document Analysis',
 description:
 'Automatically reconcile financial metrics across sources (e.g. match bank deposits to reported revenue). Discrepancies and hidden patterns are detected.',
 image: '/assets/page_images/validation.png',
 },
 {
 title: 'Risk & Policy Check',
 description:
 'Evaluate credit risk by identifying triggers (cashflow volatility, hidden debt, etc.) and comparing results against your lending policy to compute eligibility.',
 image: '/assets/page_images/decisioning.png',
 },
 {
 title: 'Generate CAM Report',
 description:
 'Produce a complete Credit Appraisal Memo draft with an executive summary, financial analysis, risk indicators and an approve/decline recommendation. Each finding links back to source data, and AI-suggested mitigants are provided for any issues.',
 image: '/assets/page_images/human_loop.png',
 },
 ],
 },
 useCases: {
 title: 'Where can CredStack CAM be used?',
 items: [
 {
 title: 'SME & Corporate Lending',
 description:
 'Quickly assess business loans by analysing full financial statements and cashflows. Credit teams can instantly generate CAMs from multi-source data.',
 },
 {
 title: 'Personal & Retail Loans',
 description:
 'Expedite consumer lending by auto-verifying income, bank inflows and liabilities for fast personal loan decisions.',
 },
 {
 title: 'Housing & Mortgage Loans',
 description:
 'Automate mortgage appraisals with integrated income verification and risk scoring, streamlining home loan approvals.',
 },
 {
 title: 'Credit Cards & BNPL',
 description:
 'Enable real-time underwriting of cards and BNPL by analysing spending patterns and payment histories to manage short-term credit risk.',
 },
 {
 title: 'Portfolio Risk Monitoring',
 description:
 'Continuously monitor existing loan portfolios. Re-run CAMs periodically to detect early warning signs (e.g. sudden cash-flow drops or credit hits).',
 },
 ],
 },
 audience: {
 title: 'Who is this feature for',
 items: ['Banks', 'NBFCs', 'Fintech Lenders', 'Credit Managers & Underwriters'],
 },
 differentiators: {
 title: 'Why choose CredStack CAM Automation',
 items: [
 {
 title: 'Multi-Source Financial Reconciliation',
 description:
 'Integrates all borrower data – bank, GST/ITR, financial statements, credit bureau – for a unified credit analysis.',
 image: '/assets/page_images/multi_bankst.png',
 },
 {
 title: 'Policy-Aligned Intelligence',
 description:
 'Customisable to your credit policies, so the CAM output and eligibility results align precisely with your rules.',
 image: '/assets/page_images/database.png',
 },
 {
 title: 'Auditable Decisioning',
 description:
 'Every CAM entry is traceable to source documents. The system provides explainable rationale for each flag or approval, satisfying audit requirements.',
 image: '/assets/page_images/intelligent_transaction.png',
 },
 {
 title: 'Rapid CAM Drafting',
 description:
 'Automates report generation to cut CAM preparation time by up to ~80%, dramatically speeding up underwriting throughput.',
 image: '/assets/page_images/decisioning.png',
 },
 {
 title: 'Fraud & Anomaly Detection',
 description:
 'Built-in checks detect document tampering and suspicious transaction patterns across accounts.',
 image: '/assets/page_images/fraud_bankst.png',
 },
 {
 title: 'API-First Integration',
 description:
 'Plug-and-play APIs let you embed CAM workflows into your LOS/CORE. CredStack’s platform integrates in days, not months.',
 image: '/assets/page_images/api_bankst.png',
 },
 {
 title: 'Customisable AI Models',
 description:
 'LLM-powered pipelines allow rapid creation of custom analysis models, aligning CAM logic to your unique underwriting frameworks.',
 image: '/assets/page_images/cashflow_transaction.png',
 },
 ],
 },
 comparison: {
 title: 'CredStack CAM vs Competitors',
 columns: ['Feature', 'Perfios', 'ScoreMe', 'CredStack'],
 rows: [
 {
 feature: 'Data Extraction',
 values: [
 'AI-driven parsing of bank statements, GST, ITR and financial documents',
 'Automated extraction from bank statements and bureau data',
 'Advanced AI/LLM-powered extraction from any document format (handwritten or digital)',
 ],
 },
 {
 feature: 'Intelligence & Risk Insights',
 values: [
 'Built-in fraud alerts and risk indicators (strengths/weaknesses)',
 'Instant credit memos with explainable risk signals',
 '130+ comprehensive, explainable credit and compliance risk checks',
 ],
 },
 {
 feature: 'Custom Extraction',
 values: [
 'Template-driven configurability for new document formats',
 'Configurable parsing rules per lender requirement',
 'Rapid creation of custom extraction models via LLM (white-box AI)',
 ],
 },
 {
 feature: 'Configurable Logic',
 values: [
 'Predefined workflows with limited tuning',
 'Flexible rule engine aligned to credit policy',
 'Fully customisable AI decision logic mapped to underwriting policies',
 ],
 },
 {
 feature: 'Multi-Doc Analysis',
 values: [
 'Reconciles multiple documents (bank/GST/bureau) for unified CAM',
 'Supports multi-statement CAM generation and analysis',
 'Ingests and consolidates all borrower documents into one view',
 ],
 },
 {
 feature: 'Fraud Detection',
 values: [
 'Anomaly and document tamper detection',
 'Cross-account pattern detection and red-flag identification',
 'AI-driven anomaly detection with full audit trail',
 ],
 },
 ],
 },
 architecture: {
 title: 'Evaluate your prospects without compromising on compliance or control',
 points: [
 'Cloud or on-premise deployment options ensure compliance and scalability.',
 'Microservices architecture with REST APIs for seamless integration into your LOS or banking core.',
 'Robust security (SOC2, ISO27001) and audit logs provide end-to-end data governance.',
 ],
 apiNotes: [
 'CredStack provides SDKs and API documentation to quickly embed CAM automation into your applications.',
 ],
 },
 faqs: [
 {
 q: 'What is a CAM report and why is it important for lenders?',
 a: 'A CAM report, or Credit Appraisal Memorandum, is the structured document that records a borrower’s creditworthiness and the rationale for a lending decision. Lenders use CAMs to make faster and more defensible credit decisions by capturing key financial analysis and risk insights in one place.',
 },
 {
 q: 'Can the CAM feature handle multiple documents per application?',
 a: 'Yes. It can ingest multiple statements, financial reports, GST/ITR filings and credit bureau records per borrower. The system reconciles data across all these sources before generating the CAM.',
 },
 {
 q: 'How does fraud detection work in this feature?',
 a: 'The engine flags suspicious patterns by cross-validating transactions and documents (e.g. circular transfers, tampered documents). Built-in checks detect anomalies and inconsistencies that may indicate fraud.',
 },
 {
 q: 'Can risk logic be tailored to our underwriting policy?',
 a: 'Yes. CredStack’s CAM logic is fully configurable. You can set custom eligibility criteria and risk weights. The CAM output will then align precisely with your internal credit policy.',
 },
 {
 q: 'What input formats are supported?',
 a: 'The system supports PDF uploads and scanned image inputs for all financial and identity documents. It also integrates with secure APIs to fetch data (e.g. bank statements, bureau reports) directly into the workflow.',
 },
 {
 q: 'How does automating the CAM report reduce credit risk?',
 a: 'Automation minimises manual data entry errors and enforces standardised risk checks. By generating consistent, data-driven CAMs, it ensures no red flags are overlooked and that every decision is backed by comprehensive analysis.',
 },
 ],
 demo: {
 title: 'See the CAM Automation in action',
 text: 'Book a guided walkthrough to evaluate the CAM draft, risk signals and API integration in your own credit workflow.',
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

"use client";
import { Box } from '@mantine/core';
import HeroBullets from '../../../components/usecases/HeroBullets.jsx';
import { FeaturesTitle } from '../../../components/FeaturesTitle';
import { DownloadCTA } from '../../../components/DownloadCTA';
import SpaceComponent from '../../../components/SpaceComponent.jsx';

import { Feature02 } from '../../../components/usecases/Feature02';
import CardWithStats from '../../../components/usecases/CardWithStats.jsx';
import { IconGauge, IconUser, IconShield, IconEye, IconRobot, IconChartBar } from '@tabler/icons-react';
import { FeaturesCards } from '../../../components/FeaturesCards';
import { Feature01 } from '../../../components/Feature01';

export default function InsuranceUnderwritingUseCase() {

    // End-to-end underwriting workflow
    const implementationSteps = [
        {
            value: 'evidence',
            title: 'Evidence Collection & Validation',
            description:
                'Ingest proposal documents, photo ID, live/selfie images, signatures, medical reports, lab results, and inspection reports through uploads or integrations.',
            image: {
                src: '/assets/page_images/classification.png',
                alt: 'Underwriting evidence collection',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'verification',
            title: 'Automated Verification & Consistency Checks',
            description:
                'Validate photo match, signature consistency, document authenticity, medical disclosures, and cross-checks against proposal data.',
            image: {
                src: '/assets/page_images/validation.png',
                alt: 'Automated verification',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'medical',
            title: 'Medical Records Analysis',
            description:
                'Parse medical reports, prescriptions, diagnostics, and lab values using AI to identify risk signals, exclusions, and underwriting flags.',
            image: {
                src: '/assets/page_images/extraction.png',
                alt: 'Medical analysis',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'risk',
            title: 'Risk Scoring & Decisioning',
            description:
                'Apply configurable underwriting rules and AI risk models to generate explainable accept, load, defer, or decline decisions.',
            image: {
                src: '/assets/page_images/decisioning.png',
                alt: 'Risk scoring',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'audit',
            title: 'Decision Traceability & Audit Readiness',
            description:
                'Maintain a complete underwriting trail with evidence, rules triggered, medical reasoning, and final decisions for audits and disputes.',
            image: {
                src: '/assets/page_images/human_loop.png',
                alt: 'Audit trail',
                w: 400,
                h: 300,
            },
        },
    ];

    // Core platform features
    const credstackFeatures = [
        {
            title: 'Photo & Signature Verification',
            description:
                'Validate proposer photos, live images, and signatures against IDs and proposal documents to prevent impersonation and fraud.',
            icon: IconEye,
            impact: {
                value: 'High',
                label: 'Identity Confidence',
            },
        },
        {
            title: 'Medical Records Intelligence',
            description:
                'Extract structured insights from unstructured medical reports, labs, and prescriptions using AI.',
            icon: IconRobot,
            impact: {
                value: 'Automated',
                label: 'Medical Review',
            },
        },
        {
            title: 'Explainable Risk Scoring',
            description:
                'Combine rule-based underwriting with AI risk signals while maintaining full explainability.',
            icon: IconChartBar,
            impact: {
                value: 'Transparent',
                label: 'Decisions',
            },
        },
        {
            title: 'Audit-Ready Underwriting',
            description:
                'Every decision is backed by evidence, checks performed, and rules triggered — ready for regulators and internal audits.',
            icon: IconShield,
            impact: {
                value: '100%',
                label: 'Traceability',
            },
        },
    ];

    // FeaturesTitle section
    const solvedTitle = "Insurance Underwriting — AI-driven, Evidence-first, Explainable";
    const solvedDescription =
        "Transform underwriting with automated evidence validation, medical intelligence, and transparent risk decisioning.";
    const solvedFeatures = [
        {
            icon: IconRobot,
            title: 'AI-led Evidence Processing',
            description: 'Photos, signatures, medical records, and inspections processed automatically',
        },
        {
            icon: IconShield,
            title: 'Configurable Underwriting Rules',
            description: 'Support insurer-specific guidelines, thresholds, and exclusions',
        },
        {
            icon: IconUser,
            title: 'Human-in-the-loop Control',
            description: 'Underwriters can review, override, and justify decisions when required',
        },
    ];

    const heroProps = {
        title: 'AI-powered Insurance Underwriting',
        description:
            'Automate insurance underwriting with AI that validates photos, signatures, and medical records, applies explainable risk scoring, and delivers audit-ready decisions.',
        bullets: [
            'Photo and signature verification for identity assurance',
            'AI-powered medical record and lab report analysis',
            'Configurable underwriting rules and risk models',
            'Explainable decisions with full audit trails',
            'API-first integration with policy admin systems',
        ],
        image: '/assets/page_images/insurance_underwriting_hero.png',
        buttonLabel: 'Request a Demo',
        onButtonClick: () => {
            window.location.href = '/demo';
        }
    };

    const cardWithStatsProps = {
        buttonLabel: "Why credstack for Insurance Underwriting?",
        title: "Faster decisions without compromising risk",
        subtitle:
            "credstack enables insurers to underwrite at scale by automating evidence checks, medical analysis, and risk decisioning.",
        stats: [
            { title: 'Underwriting TAT', value: 'Up to 70% Faster' },
            { title: 'Medical Review Effort', value: 'Reduced by 60%' },
            { title: 'Audit Readiness', value: 'Always On' },
        ],
    };

    return (
        <Box p={0} m={0}>
            <HeroBullets {...heroProps} />
            <SpaceComponent />

            <Feature02
                buttonLabel="Why Modernize Insurance Underwriting?"
                iconSize={40}
                features={[
                    {
                        icon: <span style={{ fontSize: 32 }}>📸</span>,
                        title: 'Validate Identity & Consent',
                        description:
                            'Ensure proposer identity using photo matching and signature verification.',
                        impact: 'Lower fraud and misrepresentation',
                    },
                    {
                        icon: <span style={{ fontSize: 32 }}>🧪</span>,
                        title: 'Automate Medical Review',
                        description:
                            'AI reads medical records and lab reports to surface underwriting-relevant insights.',
                        impact: 'Reduced manual medical scrutiny',
                    },
                    {
                        icon: <span style={{ fontSize: 32 }}>🧾</span>,
                        title: 'Explainable Decisions',
                        description:
                            'Every underwriting outcome is supported by rules, evidence, and reasoning.',
                        impact: 'Higher regulator and reinsurer confidence',
                    },
                ]}
            />
            <SpaceComponent />

            <FeaturesTitle
                title={solvedTitle}
                description={solvedDescription}
                features={solvedFeatures}
                buttonLabel="See Platform Demo"
            />
            <SpaceComponent />

            <CardWithStats {...cardWithStatsProps} />
            <SpaceComponent />

            <FeaturesCards
                title="How credstack Powers Insurance Underwriting"
                description="credstack combines AI evidence processing, medical intelligence, and configurable underwriting rules to help insurers underwrite faster and safer."
                features={credstackFeatures}
            />
            <SpaceComponent />

            <Feature01
                items={implementationSteps}
                containerProps={{ mt: 'xl', mb: 'xl' }}
            />
            <SpaceComponent />

            <DownloadCTA
                title="Download credstack Insurance Underwriting Brief"
                description="Learn how credstack automates photo, signature, and medical validation to deliver faster, explainable underwriting decisions."
                fileUrl="/assets/docs/CredStack Securitization Brochure.pdf"
                buttonLabel="Download Brief"
            />
        </Box>
    );
}

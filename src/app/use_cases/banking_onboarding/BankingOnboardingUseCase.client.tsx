"use client";
import { Container, Title, Text, Button, SimpleGrid, ThemeIcon, Group, Paper, Box } from '@mantine/core';
import HeroBullets from '../../../components/usecases/HeroBullets.jsx';
import { FeaturesTitle } from '../../../components/FeaturesTitle';
import { DownloadCTA } from '../../../components/DownloadCTA';
import SpaceComponent from '../../../components/SpaceComponent.jsx';

import { Feature02 } from '../../../components/usecases/Feature02';
import CardWithStats from '../../../components/usecases/CardWithStats.jsx';
import { IconGauge, IconUser, IconShield, IconEye, IconBan, IconRobot, IconChartBar, IconMasksTheater } from '@tabler/icons-react';
import { FeaturesCards } from '../../../components/FeaturesCards';
import ApplicationFeatureCard from "../../../components/ApplicationFeatureCard.jsx";
import { Feature01 } from '../../../components/Feature01';

export default function BankingOnboardingUseCase() {
    // Implementation steps for AI-powered, no-form banking onboarding
    const implementationSteps = [
        {
            value: 'capture',
            title: 'Sales-side Data Capture (No Forms)',
            description:
                'Capture borrower and partner information at the point-of-sale through conversational UI, document upload, or channel ingestion — no manual form filling required.',
            image: {
                src: '/assets/page_images/classification.png',
                alt: 'Capture without forms',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'auto_dd',
            title: 'Automated Due Diligence at Sales',
            description:
                'Instant background checks, KYC/KYB verification, and document extraction run as soon as sales data is captured so deals are validated before underwriting.',
            image: {
                src: '/assets/page_images/extraction.png',
                alt: 'Automated Due Diligence',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'underwriting',
            title: 'Underwriting Automation & Risk Scoring',
            description:
                'Pre-populate credit files with extracted data, run rule-based and ML scoring, and surface explainable risk signals for rapid underwriting decisions.',
            image: {
                src: '/assets/page_images/decisioning.png',
                alt: 'Underwriting Automation',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'collections',
            title: 'Sales-to-Collections Handoff',
            description:
                'Seamless handoff from sales to collections with the full document trail, scoring history, and automated triggers for repayment reminders or collection workflows.',
            image: {
                src: '/assets/page_images/validation.png',
                alt: 'Collections Handoff',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'communication',
            title: 'Automated Communication & Audit Trails',
            description:
                'Automated customer communications (SMS, email, WhatsApp, voice) for onboarding confirmations, KYC requests, and status updates — all logged and auditable.',
            image: {
                src: '/assets/page_images/human_loop.png',
                alt: 'Automated Communication',
                w: 400,
                h: 300,
            },
        },
    ];

    // FeaturesCards data for 'How credstack Solves This'
    const credstackFeatures = [
        {
            title: 'Zero-Form Onboarding',
            description: 'Eliminate manual form entry by capturing data from conversations, documents, and channel inputs with intelligent extraction.',
            icon: IconGauge,
            impact: {
                value: '90%+',
                label: 'Reduction in Data Entry',
            },
        },
        {
            title: 'Auto Due Diligence at Point-of-Sale',
            description: 'Run KYC/KYB checks, sanctions screening, and document verifications instantly at sales to prevent downstream delays.',
            icon: IconShield,
            impact: {
                value: 'Real-time',
                label: 'Sales Validation',
            },
        },
        {
            title: 'Underwriting Acceleration',
            description: 'Pre-populate underwriting packs, apply configurable rule engines and ML scores, and produce explainable decisions for faster approvals.',
            icon: IconChartBar,
            impact: {
                value: 'Up to 80% Faster',
                label: 'Decisioning Time',
            },
        },
        {
            title: 'Auto Communication & Workflows',
            description: 'Automated, configurable customer messaging across channels with templates, triggers, and full audit trails for compliance.',
            icon: IconEye,
            impact: {
                value: '100%',
                label: 'Auditability',
            },
        },
    ];

    // FeaturesTitle section data
    const solvedTitle = "Banking Onboarding — AI-powered, No-Form, Audit-ready";
    const solvedDescription = "Deliver zero-touch onboarding that moves deals from sales to underwriting and collections with automated due diligence, explainable scoring, and compliant communications.";
    const solvedFeatures = [
        {
            icon: IconRobot,
            title: 'No-Form Data Capture',
            description: 'Collect borrower data through conversation, uploads, or channel ingestion — remove manual entry from the workflow',
        },
        {
            icon: IconShield,
            title: 'Instant Point-of-Sale DD',
            description: 'Run KYC/KYB and verification checks immediately to filter out ineligible cases early',
        },
        {
            icon: IconUser,
            title: 'Connected Sales → Underwriting → Collections',
            description: 'A single audit trail that follows the borrower across sales, decisioning, and servicing',
        },
    ];

    const heroProps = {
        title: 'AI-powered Onboarding for Banks',
        description: 'Move from lead to loan with zero-form onboarding: capture sales data automatically, run instant due diligence, accelerate underwriting, and automate customer communications and collections.',
        bullets: [
            'Zero-form data capture from conversations and document uploads',
            'Automated KYC/KYB and due diligence at the sales stage',
            'Pre-populated underwriting packs and explainable risk scoring',
            'Automated omnichannel communications and audit trails',
            'API-first integration with LOS, CRM, and collections systems',
        ],
        image: '/assets/page_images/banking_onboarding_hero.png',
        buttonLabel: 'Request a Demo',
        onButtonClick: () => {
            window.location.href = '/demo';
        }
    };

    const cardWithStatsProps = {
        buttonLabel: "Why credstack for Banking Onboarding?",
        title: "Zero-touch onboarding, faster decisions, compliant comms",
        subtitle: "credstack transforms sales data into underwritable files with automated DD, explainable scoring, and audit-ready communications.",
        stats: [
            { title: 'Onboarding Speed', value: 'Up to 90% Faster' },
            { title: 'KYC Accuracy', value: 'High Confidence' },
            { title: 'Operational Cost', value: 'Reduced by 60%' },
        ],
    };

    return (
        <Box p={0} m={0}>
            <HeroBullets {...heroProps} />
            <SpaceComponent />

            <Feature02
                buttonLabel="Why Automate Banking Onboarding?"
                iconSize={40}
                features={[
                    {
                        icon: <span style={{ fontSize: 32 }}>🧾</span>,
                        title: 'Remove Manual Forms',
                        description: 'Forms create friction at the point of sale — capture the same data through conversation, document upload, or channel ingestion.',
                        impact: 'Faster conversions and fewer drop-offs',
                    },
                    {
                        icon: <span style={{ fontSize: 32 }}>🔍</span>,
                        title: 'Instant Due Diligence',
                        description: 'Perform KYC/KYB, sanctions checks, and data extraction as soon as sales data is captured to avoid rework.',
                        impact: 'Higher-quality leads forwarded to underwriting',
                    },
                    {
                        icon: <span style={{ fontSize: 32 }}>✉️</span>,
                        title: 'Automated Communications',
                        description: 'Automate confirmations, KYC requests, and status updates across SMS, email, WhatsApp and voice with full logging.',
                        impact: 'Better customer experience and compliance',
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
                title="How credstack Solves Banking Onboarding"
                description='credstack eliminates form friction and automates due diligence, underwriting prep, and customer communications so banks can scale acquisition while remaining compliant.'
                features={credstackFeatures}
            />
            <SpaceComponent />

            <Feature01
                items={implementationSteps}
                containerProps={{ mt: 'xl', mb: 'xl' }}
            />
            <SpaceComponent />

            <DownloadCTA
                title="Download credstack Banking Onboarding Brief"
                description="See how credstack enables zero-form onboarding, instant due diligence at sales, underwriting acceleration, and automated communications across the customer lifecycle."
                fileUrl="/assets/docs/CredStack Securitization Brochure.pdf"
                buttonLabel="Download Brief"
            />
        </Box>
    );
}

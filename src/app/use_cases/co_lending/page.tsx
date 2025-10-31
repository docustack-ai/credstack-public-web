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

export default function CoLendingUseCase() {
    // Implementation steps for co-lending
    const implementationSteps = [
        {
            value: 'onboarding',
            title: 'Partner & Borrower Onboarding',
            description:
                'Streamlined onboarding for originators and lenders — capture KYC/KYB, contracts, and role-based access in a single flow.',
            image: {
                src: '/assets/page_images/colending_onboarding.png',
                alt: 'Onboarding',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'allocation',
            title: 'Allocation & Split Rules',
            description:
                'Configure RBI-compliant split structures (80:20, 70:30, 90:10, etc.) per transaction. Splits are auditable and applied automatically during deal ingestion.',
            image: {
                src: '/assets/page_images/colending_allocation.png',
                alt: 'Allocation & Split Rules',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'doc_capture',
            title: 'Document Capture & Extraction',
            description:
                'High-accuracy document classification and data extraction from loan agreements, sanction letters, and KYC documents to populate deal records automatically.',
            image: {
                src: '/assets/page_images/colending_extraction.png',
                alt: 'Document Capture',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'validation',
            title: 'Automated Validation & Recancellation',
            description:
                'Automated business-rule validation (eligibility, co-lending compliance) and support for recancellation workflows with full audit trails.',
            image: {
                src: '/assets/page_images/colending_validation.png',
                alt: 'Validation & Recancellation',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'portfolio',
            title: 'Portfolio Management & Monitoring',
            description:
                'Unified portfolio view for originators and lenders with explainable risk scoring, continuous monitoring, duplicate detection, and early-warning signals.',
            image: {
                src: '/assets/page_images/colending_portfolio.png',
                alt: 'Portfolio Management',
                w: 400,
                h: 300,
            },
        },
    ];

    // FeaturesCards data for 'How credstack Solves This'
    const credstackFeatures = [
        {
            title: 'RBI-Ready Split Management',
            description: 'Pre-configured split templates (80:20, 90:10 etc.) and customizable allocation rules to match the latest RBI co-lending guidelines.',
            icon: IconGauge,
            impact: {
                value: '100%',
                label: 'Regulatory Alignment',
            },
        },
        {
            title: 'Automated Due Diligence',
            description: 'End-to-end automated checks (KYC/KYB, document extraction, rule validation) that reduce manual effort and speed up deal onboarding.',
            icon: IconShield,
            impact: {
                value: '70%',
                label: 'Faster Onboarding',
            },
        },
        {
            title: 'Recancellation & Reconciliation',
            description: 'Built-in recancellation workflows and periodic reconciliation between originator and lender books with clear audit trails.',
            icon: IconChartBar,
            impact: {
                value: 'Reduced',
                label: 'Dispute Resolution Time',
            },
        },
        {
            title: 'Continuous Portfolio Monitoring',
            description: '24/7 monitoring for fraud, duplicates, and borrower stress — with explainable scoring to support investor reviews.',
            icon: IconEye,
            impact: {
                value: '5X',
                label: 'Earlier Risk Detection',
            },
        },
    ];

    // FeaturesTitle section data
    const solvedTitle = "Co-Lending — Compliant, Auditable, and Automated";
    const solvedDescription = "credstack implements RBI co-lending rules and operationalizes the entire co-lending lifecycle — from onboarding to portfolio reconciliation.";
    const solvedFeatures = [
        {
            icon: IconBan,
            title: 'RBI Compliance',
            description: 'Adopts the most recent RBI guidelines for origination and lender splits',
        },
        {
            icon: IconRobot,
            title: 'Configurable Split Templates',
            description: 'Support for common divisions like 80:20 and 90:10, plus custom allocations',
        },
        {
            icon: IconUser,
            title: 'Unified Partner Portal',
            description: 'Role-based access for originators and lenders with clear responsibilities and views',
        },
    ];

    const heroProps = {
        title: 'AI powered Co-Lending Platform',
        description: 'Operate co-lending programs with confidence: configure RBI-compliant splits (80:20, 90:10), automate onboarding and due diligence, manage reconciliations, and monitor the entire co-lending portfolio from a single pane.',
        bullets: [
            'Pre-built split structures (80:20, 70:30, 90:10) and custom allocation rules',
            'Automated KYC/KYB, document extraction, and rule-based validation',
            'Audit-ready reconciliation workflows',
            'Continuous monitoring and explainable risk scoring across co-lending pools',
            'API-first integration with LOS/LMS and partner systems',
        ],
        image: '/assets/page_images/colending_2.png',
        buttonLabel: 'Request a Demo',
        onButtonClick: () => {
            window.location.href = '/demo';
        }
    };

    const cardWithStatsProps = {
        buttonLabel: "Why credstack for Co-Lending?",
        title: "Compliant co-lending, faster onboarding, clearer oversight",
        subtitle: "credstack automates splits, validations, and portfolio management so originators and lenders can scale co-lending with confidence.",
        stats: [
            { title: 'Compliance', value: 'RBI-Aligned' },
            { title: 'Onboarding Speed', value: 'Up to 70% Faster' },
            { title: 'Disputes', value: 'Reduced by 60%' },
        ],
    };

    return (
        <Box p={0} m={0}>
            <HeroBullets {...heroProps} />
            <SpaceComponent />

            <Feature02
                buttonLabel="Why Automate Co-Lending?"
                iconSize={40}
                features={[
                    {
                        icon: <span style={{ fontSize: 32 }}>⚖️</span>,
                        title: 'Regulatory Complexity',
                        description: 'RBI co-lending rules require auditable processes for splits, disclosures, and reconciliation — manual processes struggle to keep up.',
                        impact: 'Higher compliance risk if unmanaged',
                    },
                    {
                        icon: <span style={{ fontSize: 32 }}>⏱️</span>,
                        title: 'Slow Partner Onboarding',
                        description: 'Manual KYC and document checks slow down deals. Automating these steps captures more business without increasing headcount.',
                        impact: 'Loss of time-to-market',
                    },
                    {
                        icon: <span style={{ fontSize: 32 }}>🔁</span>,
                        title: 'Reconciliation Pain',
                        description: 'Handling cancellations, corrections, and periodic reconciliations across two books (originator & lender) is error-prone without automation.',
                        impact: 'Operational overhead & disputes',
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
                title="How credstack Solves Co-Lending Challenges"
                description='credstack brings RBI-aligned automation to the entire co-lending lifecycle — allocation, onboarding, validation, recancellation, and ongoing monitoring.'
                features={credstackFeatures}
            />
            <SpaceComponent />

            <Feature01
                items={implementationSteps}
                containerProps={{ mt: 'xl', mb: 'xl' }}
            />
            <SpaceComponent />

            <DownloadCTA
                title="Download credstack Co-Lending Brief"
                description="Learn how credstack helps originators and lenders operationalize compliant co-lending programs with automation and audit-ready workflows."
                fileUrl="/assets/docs/credstack_CoLending_Brochure.pdf"
                buttonLabel="Download Brief"
            />
        </Box>
    );
}

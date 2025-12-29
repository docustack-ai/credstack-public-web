"use client";
import { Container, Title, Text, Button, SimpleGrid, ThemeIcon, Group, Paper, Box } from '@mantine/core';
import HeroBullets from '../../../components/usecases/HeroBullets.jsx';
import { FeaturesTitle } from '../../../components/FeaturesTitle';
import { DownloadCTA } from '../../../components/DownloadCTA';
import SpaceComponent from '../../../components/SpaceComponent.jsx';

import { Feature02 } from '../../../components/usecases/Feature02';
import CardWithStats from '../../../components/usecases/CardWithStats.jsx';
import { IconGauge, IconUser, IconShield, IconEye, IconRobot, IconChartBar } from '@tabler/icons-react';
import { FeaturesCards } from '../../../components/FeaturesCards';
import ApplicationFeatureCard from "../../../components/ApplicationFeatureCard.jsx";
import { Feature01 } from '../../../components/Feature01';

export default function InsuranceOnboardingUseCase() {

    // Implementation steps for AI-powered insurance onboarding
    const implementationSteps = [
        {
            value: 'capture',
            title: 'Sales-side Risk & Proposal Capture (No Forms)',
            description:
                'Capture proposer, insured, nominee, and risk information at the point-of-sale through conversational UI, document upload, or channel ingestion — without manual proposal forms.',
            image: {
                src: '/assets/page_images/insurance_capture.png',
                alt: 'Insurance data capture',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'auto_dd',
            title: 'Automated KYC, Risk & Policy Checks',
            description:
                'Run instant KYC/KYB, medical disclosures parsing, prior policy checks, and document extraction as soon as sales data is captured.',
            image: {
                src: '/assets/page_images/insurance_auto_dd.png',
                alt: 'Insurance due diligence',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'underwriting',
            title: 'Underwriting Automation & Risk Scoring',
            description:
                'Pre-fill underwriting cases with extracted data, apply rule engines and AI risk models, and surface explainable underwriting decisions.',
            image: {
                src: '/assets/page_images/insurance_underwriting.png',
                alt: 'Insurance underwriting',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'issuance',
            title: 'Policy Issuance & Servicing Handoff',
            description:
                'Seamless transition from underwriting to policy issuance with a complete audit trail, endorsements readiness, and servicing triggers.',
            image: {
                src: '/assets/page_images/insurance_issuance.png',
                alt: 'Policy issuance',
                w: 400,
                h: 300,
            },
        },
        {
            value: 'communication',
            title: 'Automated Customer Communication & Compliance Logs',
            description:
                'Automated communications across SMS, email, WhatsApp, and voice for proposals, medical requests, policy issuance, and renewals — fully logged and auditable.',
            image: {
                src: '/assets/page_images/insurance_communication.png',
                alt: 'Insurance communication',
                w: 400,
                h: 300,
            },
        },
    ];

    // FeaturesCards data
    const credstackFeatures = [
        {
            title: 'Zero-Form Proposal Capture',
            description: 'Eliminate proposal form friction by extracting data from conversations, documents, and digital channels.',
            icon: IconGauge,
            impact: {
                value: '85%+',
                label: 'Reduction in Manual Entry',
            },
        },
        {
            title: 'Point-of-Sale Risk Validation',
            description: 'Run KYC, medical disclosures parsing, and eligibility checks before underwriting begins.',
            icon: IconShield,
            impact: {
                value: 'Real-time',
                label: 'Risk Screening',
            },
        },
        {
            title: 'Underwriting Acceleration',
            description: 'Auto-filled underwriting packs, configurable rules, and explainable AI decisions for faster issuance.',
            icon: IconChartBar,
            impact: {
                value: 'Up to 75% Faster',
                label: 'Policy Decisions',
            },
        },
        {
            title: 'Automated Compliance & Communication',
            description: 'Trigger compliant customer communications with complete logs for audits and regulatory review.',
            icon: IconEye,
            impact: {
                value: '100%',
                label: 'Audit Readiness',
            },
        },
    ];

    // FeaturesTitle data
    const solvedTitle = "Insurance Onboarding — AI-driven, No-Form, Compliant";
    const solvedDescription =
        "Enable faster policy issuance with zero-form onboarding, automated risk checks, explainable underwriting, and compliant customer communications.";
    const solvedFeatures = [
        {
            icon: IconRobot,
            title: 'No-Form Proposal Intake',
            description: 'Capture proposer and risk data through conversation, uploads, or integrations — no proposal forms',
        },
        {
            icon: IconShield,
            title: 'Instant Risk & KYC Checks',
            description: 'Run eligibility, disclosures, and verification checks at the sales stage',
        },
        {
            icon: IconUser,
            title: 'Connected Sales → Underwriting → Policy Servicing',
            description: 'A single audit trail across acquisition, underwriting, issuance, and renewals',
        },
    ];

    const heroProps = {
        title: 'AI-powered Onboarding for Insurance',
        description:
            'Move from proposal to policy faster with zero-form onboarding: capture risk data automatically, run instant checks, accelerate underwriting, and automate compliant communications.',
        bullets: [
            'Zero-form proposal and risk data capture',
            'Automated KYC, medical, and eligibility checks',
            'Explainable underwriting and faster policy issuance',
            'Automated omnichannel customer communications',
            'API-first integration with policy admin and CRM systems',
        ],
        image: '/assets/page_images/insurance_onboarding_hero.png',
        buttonLabel: 'Request a Demo',
        onButtonClick: () => {
            window.location.href = '/demo';
        }
    };

    const cardWithStatsProps = {
        buttonLabel: "Why credstack for Insurance Onboarding?",
        title: "Faster issuance, better risk control, compliant workflows",
        subtitle:
            "credstack converts sales interactions into underwritable insurance cases with automated checks, AI risk scoring, and audit-ready communication.",
        stats: [
            { title: 'Issuance Speed', value: 'Up to 75% Faster' },
            { title: 'Risk Accuracy', value: 'High Confidence' },
            { title: 'Operational Cost', value: 'Reduced by 55%' },
        ],
    };

    return (
        <Box p={0} m={0}>
            <HeroBullets {...heroProps} />
            <SpaceComponent />

            <Feature02
                buttonLabel="Why Automate Insurance Onboarding?"
                iconSize={40}
                features={[
                    {
                        icon: <span style={{ fontSize: 32 }}>📄</span>,
                        title: 'Eliminate Proposal Forms',
                        description:
                            'Proposal forms slow down conversions — capture the same data through conversations and documents.',
                        impact: 'Higher conversion and cleaner submissions',
                    },
                    {
                        icon: <span style={{ fontSize: 32 }}>🧠</span>,
                        title: 'Early Risk Screening',
                        description:
                            'Validate disclosures, KYC, and eligibility at sales to avoid underwriting rework.',
                        impact: 'Better underwriting efficiency',
                    },
                    {
                        icon: <span style={{ fontSize: 32 }}>📢</span>,
                        title: 'Automated Policy Communications',
                        description:
                            'Automate proposal updates, medical requests, issuance notifications, and renewals.',
                        impact: 'Improved customer trust and compliance',
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
                title="How credstack Solves Insurance Onboarding"
                description="credstack automates proposal intake, risk checks, underwriting preparation, and customer communications so insurers can scale without increasing risk."
                features={credstackFeatures}
            />
            <SpaceComponent />

            <Feature01
                items={implementationSteps}
                containerProps={{ mt: 'xl', mb: 'xl' }}
            />
            <SpaceComponent />

            <DownloadCTA
                title="Download credstack Insurance Onboarding Brief"
                description="See how credstack enables zero-form insurance onboarding, automated risk checks, underwriting acceleration, and compliant customer communications."
                fileUrl="/assets/docs/credstack_InsuranceOnboarding_Brief.pdf"
                buttonLabel="Download Brief"
            />
        </Box>
    );
}

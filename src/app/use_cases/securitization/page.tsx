
"use client";
import { Container, Title, Text, Button, SimpleGrid, ThemeIcon, Group, Paper } from '@mantine/core';
import HeroBullets from '../../../components/usecases/HeroBullets.jsx';
import { FeaturesTitle } from '../../../components/FeaturesTitle';
import { DownloadCTA } from '../../../components/DownloadCTA';

import { Feature02 } from '../../../components/usecases/Feature02';
import CardWithStats from '../../../components/usecases/CardWithStats.jsx';
import { IconGauge, IconUser, IconShield, IconEye, IconBan, IconRobot, IconChartBar, IconMasksTheater } from '@tabler/icons-react';
import { FeaturesCards } from '../../../components/FeaturesCards';
import ApplicationFeatureCard from "../../../components/ApplicationFeatureCard.jsx";
import { Feature01 } from '../../../components/Feature01';
export default function SecuritizationUseCase() {
    // Implementation steps for Feature01
    const implementationSteps = [
        {
            value: 'classification',
            title: 'Classification',
            description:
                'AI automatically classifies loan documents and data, ensuring every file is correctly identified and routed.',
            image: {
                src: '/assets/page_images/classification.png',
                alt: 'Classification',
                w: 400,
                h: 300,

            },
        },
        {
            value: 'extraction',
            title: 'Extraction',
            description:
                'Key data points are extracted from documents with high accuracy, eliminating manual entry and errors.',
            image: {
                src: '/assets/page_images/extraction.png',
                alt: 'Extraction',
                w: 400,
                h: 300,

            },
        },
        {
            value: 'validation',
            title: 'Validation',
            description:
                'Extracted data is validated against business rules, external systems, and consistency checks to ensure accuracy and compliance.',
            image: {
                src: '/assets/page_images/validation.png',
                alt: 'Validation',
                w: 400,
                h: 300,

            },
        },
        {
            value: 'human_loop',
            title: 'Human in the Loop',
            description:
                'When AI encounters ambiguity or edge cases, tasks are routed to human reviewers, ensuring transparency and trust in the process.',
            image: {
                src: '/assets/page_images/human_loop.png',
                alt: 'Human in the Loop',
                w: 400,
                h: 300,

            },
        },
        {
            value: 'decisioning',
            title: 'AI Agents for Decisioning',
            description:
                'AI agents apply configurable business rules and risk models, providing instant, explainable, and auditable decisions.',
            image: {
                src: '/assets/page_images/decisioning.png',
                alt: 'AI Agents for Decisioning',
                w: 400,
                h: 300,

            },
        },
    ];

    // FeaturesCards data for 'How CredStack Solves This'
    const credstackFeatures = [
        {
            title: 'Extreme Performance',
            description: 'AI reviews 100% of your loan pool with 130+ parameter risk checks. No more sampling gaps.',
            icon: IconGauge,
            impact: {
                value: '90%',
                label: 'Improved Loan Pool Coverage',
            },
        },
        {
            title: 'Explainable Risk Scoring',
            description: 'Get audit-ready reasoning for every decision. Transparent documentation for regulators and investors.',
            icon: IconShield,
            impact: {
                value: '80%',
                label: 'Faster Deal Evaluation',
            },
        },
        {
            title: 'Continuous Monitoring',
            description: '24/7 AI-driven monitoring. Detect fraud, duplicates, and borrower stress before they impact returns.',
            icon: IconEye,
            impact: {
                value: '5X',
                label: 'More Accurate Risk Detection',
            },
        },
        {
            title: 'Seamless Integration',
            description: 'Plug directly into your existing LOS/LMS systems with our API-first design.',
            icon: IconUser,
            impact: {
                value: '70%',
                label: 'Reduction in Fraud Exposure',
            },
        },
    ];
    // FeaturesTitle section data
    const solvedTitle = "We've Solved This Problem for Leading Financial Institutions";
    const solvedDescription = "CredStack was built by financial technology experts who understand the pain of manual due diligence because we've lived it.";
    const solvedFeatures = [
        {
            icon: IconBan,
            title: 'Trusted by Banks',
            description: 'Leading institutions rely on our AI-powered platform',
        },
        {
            icon: IconRobot,
            title: '130+ Risk Parameters',
            description: 'Comprehensive credit, legal, and operational checks',
        },
        {
            icon: IconChartBar,
            title: '100% Portfolio Coverage',
            description: 'No sampling gaps, complete transparency',
        },
    ];
    const heroProps = {
        title: 'AI Agentic Due Diligence for Securitization, PTC & DA Deals',
        description: 'Automate due diligence for ARC transactions, PTC structures, and Direct Assignment deals. Review 100% of your loan pool with explainable AI risk scoring and deliver audit-ready results in hours, not weeks.',
        bullets: [
            'Complete Loan Pool Coverage across securitization, PTC, and DA portfolios',
            'AI reviews 100% of your loan pool with 130+ parameter risk checks',
            'Audit-ready, explainable risk scoring for every decision',
            'Continuous monitoring for fraud, duplicates, and borrower stress across loan pools',
            'Seamless API integration with your LOS/LMS systems',
        ],
        image: '/assets/approval.png',
        buttonLabel: 'Get 100% Coverage Today',
        onButtonClick: () => {
            window.location.href = '/demo';
        }
    };
    const cardWithStatsProps = {
        buttonLabel: "Why credstack.ai for securitization?",
        title: "AI reviews every loan, not just a sample",
        subtitle: "CredStack's AI delivers audit-ready, explainable results for every loan in your pool—no more blind spots.",
        stats: [
            { title: 'Coverage', value: '100% of Loans' },
            { title: 'Risk Checks', value: '130+ Parameters' },
            { title: 'Speed', value: '80% Faster' },
        ],
    };





    return (
        <>
            <HeroBullets {...heroProps} />
            <Feature02
                buttonLabel="Why These Problems Matter"
                iconSize={40}
                features={[
                    {
                        icon: <span style={{ fontSize: 32 }}>⏰</span>,
                        title: 'Deals Are Slipping Away',
                        description: 'While your team spends 3-4 weeks manually reviewing loan pools, competitors with faster processes are winning the deals you should be closing.',
                        impact: '3-4 deals lost',
                    },
                    {
                        icon: <span style={{ fontSize: 32 }}>🎯</span>,
                        title: `You're Flying Blind on 50% of Risk`,
                        description: 'Sampling-based evaluations leave massive blind spots in your portfolio. Hidden risks in the unchecked loans could devastate your returns.',
                        impact: '50%',
                    },
                    {
                        icon: <span style={{ fontSize: 32 }}>⚖️</span>,
                        title: 'Regulators Are Asking Hard Questions',
                        description: 'Manual processes create inconsistent documentation and weak audit trails, making regulatory reviews a nightmare to defend.',
                        impact: '30%',
                    },
                ]}
            />

            <FeaturesTitle
                title={solvedTitle}
                description={solvedDescription}
                features={solvedFeatures}
                buttonLabel="See Platform Demo"
            />

            <CardWithStats {...cardWithStatsProps} />

            <FeaturesCards
                title="How CredStack Solves This"
                description='CredStack leverages AI to provide comprehensive loan coverage and insights, ensuring no risks are overlooked.'
                features={credstackFeatures}
            />

            <Feature01
                items={implementationSteps}
                containerProps={{ mt: 'xl', mb: 'xl' }}
            />
            <DownloadCTA
                title="Download Whitepaper"
                description="Understand how AI can transform underwriting and securitization due diligence for DA and PTC deals."
                fileUrl="/assets/docs/CredStack Securitization Brochure.pdf"
                buttonLabel="Start Download"
            />


        </>
    );
}

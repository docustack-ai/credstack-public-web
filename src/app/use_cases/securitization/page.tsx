
"use client";
import { Container, Title, Text, Button, SimpleGrid, ThemeIcon, Group, Paper } from '@mantine/core';
import HeroBullets from '../../../components/usecases/HeroBullets.jsx';
import { FeaturesTitle } from '../../../components/FeaturesTitle';
import { Feature02 } from '../../../components/usecases/Feature02';
import CardWithStats from '../../../components/usecases/CardWithStats.jsx';
import { IconGauge, IconUser, IconShield, IconEye, IconBan, IconRobot, IconChartBar, IconMasksTheater } from '@tabler/icons-react';
export default function SecuritizationUseCase() {
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
        title: 'AI for Securitization:',
        highlight: '100% Loan Pool Coverage, 80% Faster Deals',
        description: 'Automate due diligence and risk checks for every loan in your pool. Get audit-ready, explainable results in hours, not weeks.',
        bullets: [
            'AI reviews 100% of your loan pool with 130+ parameter risk checks',
            'Audit-ready, explainable risk scoring for every decision',
            '24/7 AI-driven monitoring for fraud, duplicates, and borrower stress',
            'Seamless API integration with your LOS/LMS systems',
        ],
        image: '/assets/approval.png',
        buttonLabel: 'Get 100% Coverage Today',
        // onButtonClick: () => { ... } // Optional: custom handler
    };

    const features = [
        {
            icon: IconGauge,
            title: 'Extreme Performance',
            description: 'AI reviews 100% of your loan pool with 130+ parameter risk checks. No more sampling gaps.'
        },
        {
            icon: IconShield,
            title: 'Explainable Risk Scoring',
            description: 'Get audit-ready reasoning for every decision. Transparent documentation for regulators and investors.'
        },
        {
            icon: IconEye,
            title: 'Continuous Monitoring',
            description: '24/7 AI-driven monitoring. Detect fraud, duplicates, and borrower stress before they impact returns.'
        },
        {
            icon: IconUser,
            title: 'Seamless Integration',
            description: 'Plug directly into your existing LOS/LMS systems with our API-first design.'
        }
    ];

    const stats = [
        { label: '90%', value: 'Improved Loan Pool Coverage' },
        { label: '80%', value: 'Faster Deal Evaluation' },
        { label: '5X', value: 'More Accurate Risk Detection' },
        { label: '70%', value: 'Reduction in Fraud Exposure' },
    ];

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
            {/* --- CardWithStats Section --- */}
            <div style={{ margin: '2rem 0' }}>
                <CardWithStats {...cardWithStatsProps} />
            </div>
            {/* --- FeaturesTitle Section --- */}

            <Container size="md" py="xl">


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
                <Title order={2} mt="xl" mb="md">How CredStack Solves This</Title>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" mb="xl">
                    {features.map((feature) => (
                        <Paper key={feature.title} radius="md" p="md" withBorder>
                            <ThemeIcon size={48} radius="xl" variant="light" color="blue">
                                <feature.icon size={32} />
                            </ThemeIcon>
                            <Text fw={700} mt="md">{feature.title}</Text>
                            <Text c="dimmed" fz="sm">{feature.description}</Text>
                        </Paper>
                    ))}
                </SimpleGrid>

                <Group mb="xl" gap="md" grow>
                    {stats.map((stat) => (
                        <Paper key={stat.label} radius="md" p="md" withBorder ta="center" bg="blue.0">
                            <Text fz={32} fw={700}>{stat.label}</Text>
                            <Text>{stat.value}</Text>
                        </Paper>
                    ))}
                </Group>

                <Title order={2} mt="xl" mb="md">Stop Losing Deals to Slow Due Diligence</Title>
                <Text mb="md">Get the AI-powered solution that delivers 100% loan coverage, explainable decisions, and 80% faster deal closures.</Text>
                <Button size="lg" mb="sm">Schedule Your Demo Today</Button>
                <Text c="dimmed">See how CredStack can transform your securitization process in just 30 minutes</Text>
            </Container>
        </>
    );
}

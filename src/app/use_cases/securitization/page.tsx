

"use client";
import { Container, Title, Text, Button, SimpleGrid, ThemeIcon, rem, Group, Paper } from '@mantine/core';
import HeroBullets from '../../../components/HeroBullets';
import { IconGauge, IconUser, IconCookie, IconCheck, IconShield, IconEye, IconTrendingUp, IconClock, IconAlertTriangle } from '@tabler/icons-react';

export default function SecuritizationUseCase() {
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

    return (
        <>
            <HeroBullets />
            <Container size="md" py="xl">
                <Title order={1} mb="xs">Close Securitization Deals 80% Faster</Title>
                <Text size="lg" c="dimmed" mb="md">
                    Financial institutions deserve loan pool due diligence that doesn't take weeks
                </Text>
                <Button size="lg" mb="xl">Get 100% Coverage Today</Button>

                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl" mb="xl">
                    <Paper radius="md" p="md" withBorder ta="center" bg="blue.0">
                        <ThemeIcon size={48} radius="xl" variant="light" color="blue">
                            <IconClock size={32} />
                        </ThemeIcon>
                        <Text fw={700} mt="md">Deals Are Slipping Away</Text>
                        <Text c="dimmed" fz="sm">While your team spends 3-4 weeks manually reviewing loan pools, competitors with faster processes are winning the deals you should be closing.</Text>
                    </Paper>
                    <Paper radius="md" p="md" withBorder ta="center" bg="blue.0">
                        <ThemeIcon size={48} radius="xl" variant="light" color="blue">
                            <IconAlertTriangle size={32} />
                        </ThemeIcon>
                        <Text fw={700} mt="md">You're Flying Blind on 50% of Risk</Text>
                        <Text c="dimmed" fz="sm">Sampling-based evaluations leave massive blind spots in your portfolio. Hidden risks in the unchecked loans could devastate your returns.</Text>
                    </Paper>
                    <Paper radius="md" p="md" withBorder ta="center" bg="blue.0">
                        <ThemeIcon size={48} radius="xl" variant="light" color="blue">
                            <IconShield size={32} />
                        </ThemeIcon>
                        <Text fw={700} mt="md">Regulators Are Asking Hard Questions</Text>
                        <Text c="dimmed" fz="sm">Manual processes create inconsistent documentation and weak audit trails, making regulatory reviews a nightmare to defend.</Text>
                    </Paper>
                </SimpleGrid>

                <Group mb="xl" gap="md" grow>
                    <Paper radius="md" p="md" withBorder ta="center" bg="blue.0">
                        <Text fz={32} fw={700}>3-4</Text>
                        <Text>Weeks Lost Per Deal</Text>
                    </Paper>
                    <Paper radius="md" p="md" withBorder ta="center" bg="blue.0">
                        <Text fz={32} fw={700}>50%</Text>
                        <Text>Risk Coverage Gap</Text>
                    </Paper>
                    <Paper radius="md" p="md" withBorder ta="center" bg="blue.0">
                        <Text fz={32} fw={700}>30%</Text>
                        <Text>Higher Operational Costs</Text>
                    </Paper>
                </Group>

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

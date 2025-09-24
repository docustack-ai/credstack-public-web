"use client";
import { Card, Container, Group, Image, SimpleGrid, Text, Title, Avatar, Badge } from '@mantine/core';

const teamMembers = [
    {
        name: 'Suman Saurabh',
        role: 'Founder & CEO',
        image: '/assets/team/suman.jpg',
        bio: 'Entrepreneur with 12+ years in CX, SaaS, and AI solutions. Driving innovation at the intersection of automation and enterprise transformation.'
    },
    {
        name: 'Chaitanya',
        role: 'Co-Founder & CTO',
        image: '/assets/team/chaitanya.png',
        bio: 'Technology leader with deep expertise in AI/ML, product engineering, and building scalable enterprise-grade platforms.'
    },
    {
        name: 'Sandeep Sahu',
        role: 'Strategic Advisors',
        image: '/assets/team/sandeep.jpg',
        bio: 'Backed by industry veterans with 40+ years of combined experience in customer experience, SaaS, and AI-led digital transformation.'
    },
    {
        name: 'Sandipan Sapui',
        role: 'Strategic Advisors',
        image: '/assets/team/sandipan.jpg',
        bio: 'Backed by industry veterans with 40+ years of combined experience in customer experience, SaaS, and AI-led digital transformation.'
    }
];

const mentors = [
    {
        name: 'Dr. Kavita Rao',
        role: 'AI Research Mentor',
        image: '/assets/team/kavita.jpg',
        bio: 'Professor at IIT, 20+ years in AI research and mentoring startups.'
    },
    {
        name: 'Sanjay Gupta',
        role: 'Fintech Advisor',
        image: '/assets/team/sanjay.jpg',
        bio: 'Ex-Head of Digital at a major bank, advisor to multiple fintechs.'
    },
];

export default function TeamsPage() {
    return (
        <Container size="lg" py="xl">
            <Title order={1} mb="md" ta="center">Meet Our Team</Title>
            <Text ta="center" c="dimmed" mb="xl">
                We are a passionate group of builders, engineers, and mentors driving the future of AI-powered document automation.
            </Text>
            <Title order={2} size="h3" mb="md">Core Team</Title>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl" mb="xl">
                {teamMembers.map((member) => (
                    <Card
                        key={member.name}
                        shadow="md"
                        radius="md"
                        p="lg"

                        style={{ background: 'linear-gradient(120deg, #e0e7ff 60%, #f8fafc 100%)' }}
                    >
                        <Group justify="center" mb="md">
                            <Avatar
                                src={member.image}
                                size={150}
                                radius="md"
                                style={{ width: 150, height: 150, objectFit: 'cover' }}
                            />
                        </Group>
                        <Text ta="center" fw={700} size="lg">{member.name}</Text>
                        <Text ta="center" c="dimmed" size="sm" mb={8}>{member.role}</Text>
                        <Text ta="center" size="sm">{member.bio}</Text>
                    </Card>
                ))}
            </SimpleGrid>
            <Title order={2} size="h3" mb="md">Mentors & Advisors</Title>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xl">
                {mentors.map((mentor) => (
                    <Card key={mentor.name} shadow="sm" radius="md" p="lg" withBorder>
                        <Group justify="center" mb="md">
                            <Avatar src={mentor.image} size={70} radius="xl" />
                        </Group>
                        <Text ta="center" fw={700}>{mentor.name}</Text>
                        <Badge color="indigo" variant="light" size="sm" mb={6} style={{ display: 'block', margin: '0 auto' }}>{mentor.role}</Badge>
                        <Text ta="center" size="sm">{mentor.bio}</Text>
                    </Card>
                ))}
            </SimpleGrid>
        </Container>
    );
}

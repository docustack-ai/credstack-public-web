"use client";
import { Card, Container, Group, Image, SimpleGrid, Text, Title, Avatar, Badge } from '@mantine/core';
import { IconBrandLinkedin } from '@tabler/icons-react';

const teamMembers = [
    {
        name: 'Suman Saurabh',
        role: 'Founder & CEO',
        image: '/assets/team/suman.png',
        bio: 'Entrepreneur with 12+ years in CX, SaaS, and AI solutions. Driving innovation at the intersection of automation and enterprise transformation.',
        innuendo: "Turns midnight ideas into enterprise solutions.",
        linkedin: 'https://www.linkedin.com/in/titansaurabh/'
    },
    {
        name: 'Chaitanya',
        role: 'Co-Founder & CTO',
        image: '/assets/team/chaitanya.jpeg',
        bio: 'Technology leader with deep expertise in AI/ML, product engineering, and building scalable enterprise-grade platforms.',
        innuendo: 'Rumor has it, he codes faster than AI itself.',
        linkedin: 'https://www.linkedin.com/in/chaitanyabhagavan/'
    },
    {
        name: 'Sandeep Sahu',
        role: 'Growth and Partnerships',
        image: '/assets/team/sandeep.png',
        bio: 'Seasoned sales leader who scaled Salesken from 0-to-1 and built high-performing enterprise sales engines.',
        innuendo: 'Can close a deal before finishing his coffee.',
        linkedin: 'https://www.linkedin.com/in/sandeep-sahu-38b966bb/'
    },
    {
        name: 'Sandipan Sapui',
        role: 'Growth Manager',
        image: '/assets/team/sandipan.png',
        bio: 'Growth strategist with extensive experience in BFSI sales and enterprise partnerships. Focused on driving adoption and scaling revenue across key markets.',
        innuendo: 'Sees growth opportunities where others see roadblocks.',
        linkedin: 'https://www.linkedin.com/in/sandipan-sapui-206618237/'
    }

];

const mentors = [
    {
        name: 'Mr. Shyam Krishnamurthy',
        role: 'Engineering & Innovation Leader',
        image: '/assets/team/shyam.avif',
        bio: 'From crafting e-commerce solutions in Jakarta to leading AirAsia’s engineering teams, Shyam’s journey spans continents and countless lines of code. He knows his way around both the cloud and the cockpit—your go-to for scaling big and dreaming even bigger.',
        innuendo: '',
        linkedin: 'https://www.linkedin.com/in/shyamkrishnamurthy/'
    }
];

export default function TeamsPage() {
    return (
        <Container fluid style={{ border: '1px solid rgb(228, 224, 217)', backgroundColor: 'rgb(249, 246, 241)' }}>
            <Container fluid p={20} style={{ border: '1px solid rgb(228, 224, 217)', maxWidth: '1200px', backgroundColor: 'white' }}>

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
                            p={0}
                            style={{
                                minHeight: 600,
                                maxHeight: 500,
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                backgroundColor: '#b7b1a9'
                            }}
                        >
                            <div style={{ flex: 3, position: 'relative', width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', height: '100%' }}>
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    height="20%"
                                    width="100%"
                                    fit="cover"
                                    style={{ objectFit: 'cover', height: '70%', width: '100%' }}
                                />
                            </div>
                            <div
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(0, 0, 0, 1)',
                                    color: '#fff',
                                    padding: '1.2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    width: '100%',
                                    zIndex: 2
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginBottom: 4 }}>
                                    <Text fw={700} size="lg" style={{ textAlign: 'left' }}>{member.name}</Text>
                                    <a
                                        href={member.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ marginLeft: 'auto', color: '#0A66C2', background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center' }}
                                        aria-label={`LinkedIn profile of ${member.name}`}
                                    >
                                        <IconBrandLinkedin size={24} color="#ffffffff" />
                                    </a>
                                </div>
                                <Text ta="left" c="gray.2" size="sm" mb={8} style={{ textAlign: 'left', width: '100%' }}>
                                    {member.role}
                                </Text>
                                <Text ta="left" size="xm" c="gray.3" mb={4} style={{ textAlign: 'left', width: '100%', fontStyle: 'italic' }}>
                                    {member.innuendo}
                                </Text>
                                <Text ta="left" size="sm">{member.bio}</Text>
                            </div>
                        </Card>
                    ))}
                </SimpleGrid>
                <Title order={2} size="h3" mb="md">Our Advisors</Title>
                <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
                    {mentors.map((mentor) => (
                        <Card
                            key={mentor.name}
                            shadow="md"
                            radius="md"
                            p={0}
                            style={{
                                minHeight: 600,
                                maxHeight: 500,
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden',
                                backgroundColor: '#b7b1a9'
                            }}
                        >
                            <div style={{ flex: 3, position: 'relative', width: '100%', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', height: '100%' }}>
                                <Image
                                    src={mentor.image}
                                    alt={mentor.name}
                                    height="20%"
                                    width="100%"
                                    fit="cover"
                                    style={{ objectFit: 'cover', height: '70%', width: '100%' }}
                                />
                            </div>
                            <div
                                style={{
                                    position: 'absolute',
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(0, 0, 0, 1)',
                                    color: '#fff',
                                    padding: '1.2rem',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    width: '100%',
                                    zIndex: 2
                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', width: '100%', justifyContent: 'space-between', marginBottom: 4 }}>
                                    <Text fw={700} size="lg" style={{ textAlign: 'left' }}>{mentor.name}</Text>
                                    <a
                                        href={mentor.linkedin}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ marginLeft: 'auto', color: '#0A66C2', background: 'none', border: 'none', padding: 0, display: 'flex', alignItems: 'center' }}
                                        aria-label={`LinkedIn profile of ${mentor.name}`}
                                    >
                                        <IconBrandLinkedin size={24} color="#ffffffff" />
                                    </a>
                                </div>
                                <Text ta="left" c="gray.2" size="sm" mb={8} style={{ textAlign: 'left', width: '100%' }}>
                                    {mentor.role}
                                </Text>
                                <Text ta="left" size="xm" c="gray.3" mb={4} style={{ textAlign: 'left', width: '100%', fontStyle: 'italic' }}>
                                    {mentor.innuendo}
                                </Text>
                                <Text ta="left" size="sm">{mentor.bio}</Text>
                            </div>
                        </Card>
                    ))}
                </SimpleGrid>
            </Container>
        </Container>
    );
}

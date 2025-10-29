
import { Card, Group, Text, Badge, Flex, Title, Image, Button, Container } from '@mantine/core';
import { IconCloud, IconScanEye, IconServer, IconEyeCode } from '@tabler/icons-react';
import classes from './PrivacyCapabilitiesCard.module.css';

/**
 * PrivacyCapabilitiesCard - Highlights privacy deployment options: Cloud and On-Premise
 */
export function PrivacyCapabilitiesCard() {
    return (
        <Container fluid style={{ border: '1px solid rgb(228, 224, 217)', backgroundColor: 'rgb(249, 246, 241)' }}>
            <Container fluid p={20} style={{ border: '1px solid rgb(228, 224, 217)', maxWidth: '1200px', backgroundColor: 'white' }}>
                <div className={classes.buttonRow}>
                    <Button leftSection={<IconEyeCode size={16} />} variant="light" radius="xl" size="md">
                        Privacy & Deployment Options
                    </Button>
                </div>
                <div className={classes.optionsRow}>
                    {/* Cloud Capability */}
                    <Card withBorder radius="md" p="md" className={classes.card}>
                        <Group mb="sm">
                            <IconCloud size={32} color="#228be6" />
                            <Text fw={600}>Cloud</Text>
                        </Group>
                        <Card.Section>
                            <Image
                                src="/assets/page_images/iso_soc.jpeg"
                                height={160}
                                alt="ISO 27001 and SOC 2"
                                className={classes.certImage}
                            />
                        </Card.Section>
                        <Text c="dimmed" size="sm" mb="xs" mt="md">
                            Experience hassle-free deployment with our secure, scalable SaaS platform.<br />
                            Fully managed and continuously updated — compliant with ISO 27001 and SOC 2 standards.
                        </Text>
                        <Group gap="xs" mt="md">
                            <Badge color="blue" variant="light">SOC 2</Badge>
                            <Badge color="blue" variant="light">ISO 27001</Badge>
                        </Group>
                    </Card>
                    {/* On-Premise Capability */}
                    <Card withBorder radius="md" p="md" className={classes.card}>
                        <Group mb="sm">
                            <IconServer size={32} color="#40c057" />
                            <Text fw={600}>On-Premise</Text>
                        </Group>
                        <Card.Section>
                            <Image
                                src="/assets/page_images/server.webp"
                                height={160}
                                alt="On-Premise Server"
                                className={classes.certImage}
                            />
                        </Card.Section>
                        <Text c="dimmed" size="sm" mb="xs" mt="md">
                            Run the platform securely in your own environment. <br />
                            Ideal for enterprises with strict data-residency or compliance requirements.
                        </Text>
                        <Group gap="xs" mt="md">
                            <Badge color="green" variant="light">Self-Hosted</Badge>
                        </Group>
                    </Card>
                </div>
            </Container>
        </Container>
    );
}

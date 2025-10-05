import { Card, Group, Text, Badge, Flex, Title, Image, Button } from '@mantine/core';
import { IconCloud, IconScanEye, IconServer, IconEyeCode } from '@tabler/icons-react';

/**
 * PrivacyCapabilitiesCard - Highlights privacy deployment options: Cloud and On-Premise
 */
export function PrivacyCapabilitiesCard() {
    return (
        <Flex direction="column" align="center" gap="xl" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 150px' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0, marginTop: 20 }}>
                <Button leftSection={<IconEyeCode size={16} />} variant="light" radius="xl" size="md">
                    Privacy & Deployment Options
                </Button>
            </div>

            <Flex direction={{ base: 'column', sm: 'row' }} gap="lg" justify="space-between" style={{ width: '100%' }}>
                {/* Cloud Capability */}
                <Card withBorder radius="md" p="md" style={{ flex: 1, minWidth: 220 }}>
                    <Group mb="sm">
                        <IconCloud size={32} color="#228be6" />
                        <Text fw={600}>Cloud</Text>
                    </Group>
                    <Card.Section>
                        <Image
                            src="/assets/page_images/iso_soc.jpeg"
                            height={160}
                            alt="Norway"
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
                <Card withBorder radius="md" p="md" style={{ flex: 1, minWidth: 220 }}>
                    <Group mb="sm">
                        <IconServer size={32} color="#40c057" />
                        <Text fw={600}>On-Premise</Text>
                    </Group>

                    <Card.Section>
                        <Image
                            src="/assets/page_images/server.webp"
                            height={160}
                            alt="Norway"
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
            </Flex>

        </Flex>
    );
}

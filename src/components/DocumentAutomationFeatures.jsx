'use client';

import { useState } from 'react';
import { Box, Group, Text, Title, Button, Divider, Image, Card } from '@mantine/core';
import { IconFlag, IconRefresh, IconFileText, IconSparkles, IconUser, IconClock, IconEye } from '@tabler/icons-react';
import classes from './DocumentAutomationFeatures.module.css';

const features = [
  {
    icon: IconRefresh,
    label: 'Classify',
    description: 'Automatically classify documents using AI.'
  },
  {
    icon: IconFileText,
    label: 'Extract',
    description: 'Extract key data points from documents.'
  },
  {
    icon: IconSparkles,
    label: 'Validate',
    description: 'Validate extracted data for accuracy.'
  },
  {
    icon: IconUser,
    label: 'Enrich',
    description: 'Enrich data with additional context.'
  },
  {
    icon: IconClock,
    label: 'Decision',
    description: 'Automate decision-making with custom rules.'
  },
  {
    icon: IconSparkles,
    label: 'Validate',
    description: 'Re-validate for compliance.'
  },
  {
    icon: IconEye,
    label: 'Visualize',
    description: 'Visualize results for deeper insights.'
  },
];

const featureDetails = [
  'Automatically categorize scanned documents using image, text, and rule-based methods to any number of documents with 95% accuracy.',
  'Extract key data points from documents for fast and reliable automation.',
  'Validate extracted data for accuracy and compliance.',
  'Enrich data with additional context for deeper insights.',
  'Mimics human decision-making with custom rules for complex scenarios. Reads and interprets complex, unstructured data types for deeper insights.',
  'Re-validate for compliance and audit readiness.',
  'Visualize results for deeper insights and reporting.',
];

function DocumentAutomationFeatures() {
  const [selected, setSelected] = useState(0); // Default to "Classify"

// Unsplash image URLs for demo purposes (replace with your own assets as needed)
const unsplashImages = [
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1748255882537-cbe88b145305?auto=format&fit=crop&w=600&q=80",
    "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=600&q=80",
];

return (
    <Box className={classes.section}>
        <Box className={classes.header}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0, marginTop: 20 }}>
                <Button leftSection={<IconFlag size={18} />} variant="light" radius="xl" size="md">
                    Key Features
                </Button>
            </div>
            <Title order={1} className={classes.title} mt={20} mb={10}>
                Real AI powered Document Automation
            </Title>
            <Text size="lg" color="dimmed" className={classes.subtitle} mb={30}>
                CredStack combines AI + LLMs to intelligently automate every step that goes in the due-dilligence process giving you a accuracy of 95% plus
            </Text>
        </Box>
        <Group justify="center" gap={24} className={classes.featureTabs}>
            {features.map((feature, idx) => (
                <Box
                    key={feature.label + idx}
                    className={classes.tab + (selected === idx ? ' ' + classes.selected : '')}
                    onClick={() => setSelected(idx)}
                    role="button"
                    tabIndex={0}
                >
                    <Box className={classes.iconWrap}>
                        <feature.icon size={25} />
                    </Box>
                    <Text fw={500} mt={8} mb={2}>{feature.label}</Text>
                </Box>
            ))}
        </Group>
        <Divider className={classes.divider} mt={16} mb={24} />
        <Text size="lg" color="dimmed" align="center" mb={32}>
            {featureDetails[selected]}
        </Text>
        <Group justify="center">
            <Card radius="lg" shadow="md" className={classes.demoCard}>
                <Group align="flex-start" gap={0}>
                    <Image
                        src={unsplashImages[selected]}
                        alt={features[selected].label + " Demo"}
                        radius="md"
                        className={classes.demoImage}
                    />
                    <Box className={classes.demoTextBox}>
                        <Text fw={600} mb={8}>{features[selected].label} Details</Text>
                        <Text size="sm" color="dimmed">
                            {selected === 0 && (
                                <>Automatically categorize scanned documents using image, text, and rule-based methods to any number of documents with 95% accuracy.</>
                            )}
                            {selected === 1 && (
                                <>Extract key data points from documents for fast and reliable automation.</>
                            )}
                            {selected === 2 && (
                                <>Validate extracted data for accuracy and compliance.</>
                            )}
                            {selected === 3 && (
                                <>Enrich data with additional context for deeper insights.</>
                            )}
                            {selected === 4 && (
                                <>Mimics human decision-making with custom rules for complex scenarios. Reads and interprets complex, unstructured data types for deeper insights.</>
                            )}
                            {selected === 5 && (
                                <>Re-validate for compliance and audit readiness.</>
                            )}
                            {selected === 6 && (
                                <>Visualize results for deeper insights and reporting.</>
                            )}
                        </Text>
                    </Box>
                </Group>
            </Card>
        </Group>
    </Box>
  );
}

export default DocumentAutomationFeatures;

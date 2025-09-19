'use client';

import { useState } from 'react';
import { Card, Group, Text, Box, Image, Button, Flex } from '@mantine/core';
import { IconClock, IconFileText, IconChartBar, IconUserCheck, IconFlag } from '@tabler/icons-react';
import classes from './ApplicationFeatureCard.module.css';

const features = [
  {
    icon: IconClock,
    title: 'Securitization',
    description: 'Efficiently do due dilligence for your book buying process',
    contentTitle: 'Master due dilligence in securitization',
    contentDesc:
      'Automate and streamline the securitization process with AI-driven risk analysis and due diligence. Finstack ensures seamless evaluation of loan portfolios, optimizing asset-backed security issuance and enhancing investor confidence.',
    image:
      'https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: IconFileText,
    title: 'Bank Statement Analysis',
    description: 'AI-powered insights to extract, validate, and analyze bank statements at scale',
    contentTitle: 'Bank Statement Analysis',
    contentDesc:
      'Extract, validate, and analyze bank statements at scale with AI-powered insights. Streamline financial operations and ensure accuracy in reporting.',
    image:
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: IconChartBar,
    title: 'Credit Evaluation',
    description: 'Optimize resource utilization for enhanced project efficiency and productivity.',
    contentTitle: 'Credit Evaluation',
    contentDesc:
      'Optimize resource utilization for enhanced project efficiency and productivity. Get actionable insights for better decision making.',
    image:
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    icon: IconUserCheck,
    title: 'KYC Verification',
    description: 'Seamlessly integrate SAP with other tools for enhanced workflow efficiency.',
    contentTitle: 'KYC Verification',
    contentDesc:
      'Seamlessly integrate SAP with other tools for enhanced workflow efficiency. Ensure compliance and reduce manual effort.',
    image:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
  },
];

function ApplicationFeatureCard() {
  const [selected, setSelected] = useState(0);

  return (
    <Flex direction="column" align="center" gap="md" className={classes.section}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0, marginTop: 20 }}>
                <Button leftSection={<IconFlag size={18} />} variant="light" radius="xl" size="md">
                   Use Cases
                </Button>
            </div>
    <Card withBorder radius="md" padding={0} className={classes.card}>
      <Group align="stretch">
        {/* Left side: feature list */}
        <Box className={classes.left}>
          {features.map((feature, idx) => (
            <Box
              key={feature.title}
              className={classes.feature + (selected === idx ? ' ' + classes.selected : '')}
              onClick={() => setSelected(idx)}
              role="button"
              tabIndex={0}
            >
              <Group>
                <feature.icon size={24} />
                <Box>
                  <Text fw={500}>{feature.title}</Text>
                  <Text size="sm" c="dimmed">{feature.description}</Text>
                </Box>
              </Group>
            </Box>
          ))}
        </Box>
        {/* Right side: content */}
        <Box className={classes.right}>
          <Text className={classes.contentTitle} >
            {features[selected].contentTitle}
          </Text>
          <Text mb={20} c="dimmed">
            {features[selected].contentDesc}
          </Text>
          <Box className={classes.imageBox}>
            <Image
              src={features[selected].image}
              alt={features[selected].contentTitle}
              radius="md"
              className={classes.image}
            />
            <Button className={classes.playButton} radius="xl" size="lg" variant="white">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="20" fill="white" />
                <polygon points="16,13 29,20 16,27" fill="#222" />
              </svg>
            </Button>
          </Box>
        </Box>
      </Group>
    </Card>
    </Flex>
  );
}

export default ApplicationFeatureCard;

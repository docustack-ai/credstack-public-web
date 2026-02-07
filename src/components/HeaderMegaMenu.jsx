'use client';

import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconNotification,
  IconMessageUser,
} from '@tabler/icons-react';
import {
  Anchor,
  Tabs,
  Box,
  Burger,
  Button,
  Center,
  Collapse,
  Divider,
  Drawer,
  Group,
  HoverCard,
  // px,
  ScrollArea,
  SimpleGrid,
  Text,
  ThemeIcon,
  UnstyledButton,
  useMantineTheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useState } from 'react';
// import blackLogo from '/assets/black.svg';
import classes from './HeaderMegaMenu.module.css';
import layoutStyles from '../app/layout.module.css';
import Link from 'next/link';
import Image from 'next/image';

// Mobile features: match desktop tabs and panels
const feature_list = [
  // CredLens.ai features
  {
    section: 'CredLens.ai',
    features: [
      {
        icon: IconChartPie3,
        title: 'Classification',
        description: 'AI-powered document classification for due diligence.',
        url: '#',
      },
      {
        icon: IconNotification,
        title: 'Extraction',
        description: 'Extract key data points from documents with high accuracy.',
        url: '#',
      },
      {
        icon: IconCode,
        title: 'Decisioning',
        description: 'Automate decision-making with custom rules and LLMs.',
        url: '#',
      },
    ],
  },
  // CredExperience.ai features
  {
    section: 'CredExperience.ai',
    features: [
      {
        icon: IconChartPie3,
        title: 'Agents.ai',
        description: 'Intelligent agents for workflow automation.',
        url: '#',
      },
      {
        icon: IconNotification,
        title: 'Assist.ai',
        description: 'AI-powered assistance for users and teams.',
        url: '#',
      },
      {
        icon: IconCode,
        title: 'Insights.ai',
        description: 'Actionable insights from your data and processes.',
        url: '#',
      },
    ],
  },
];

// Mobile solutions: match desktop tabs and panels
const solutions_list = [
  // Banking
  {
    section: 'Banking',
    solutions: [
      {
        icon: IconChartPie3,
        title: 'Co-Lending',
        description: 'AI-driven co-lending platform for banks and NBFCs',
        url: '/use_cases/co_lending',
      },
      {
        icon: IconNotification,
        title: 'Onboarding',
        description: 'Streamline customer onboarding and KYC for banks.',
        url: '/use_cases/banking_onboarding',
      },
      {
        icon: IconCode,
        title: 'Securitization',
        description: 'Digitize and manage asset-backed securities.',
        url: '/use_cases/securitization',
      },
    ],
  },
  // Insurance
  {
    section: 'Insurance',
    solutions: [
      {
        icon: IconChartPie3,
        title: 'Underwriting',
        description: 'AI-powered underwriting for insurance risk analysis.',
        url: '/use_cases/insurance_underwriting',
      },
      {
        icon: IconNotification,
        title: 'Onboarding',
        description: 'Automate policyholder onboarding and verification.',
        url: '/use_cases/insurance_onboarding',
      },
    ],
  },
];
  

function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [featuresOpened, { toggle: toggleFeatures }] = useDisclosure(false);
  const [solutionsOpened, { toggle: toggleSolutions }] = useDisclosure(false);
  const [selectedFeaturesTab, setSelectedFeaturesTab] = useState('credlens');
  const [selectedSolutionsTab, setSelectedSolutionsTab] = useState('banking');
  const theme = useMantineTheme();


  
return (
  <Box >
    <header className={classes.header}>
      <Group justify="space-between" h="100%">
        <div className={classes.logo}>
          {/* Logo added here */}
          <Image src="/assets/black.svg" alt="CredStack" width={120} height={32} style={{ height: 32, width: 'auto' }} />
        </div>

        <Group h="100%" gap={0} visibleFrom="sm">
          <Link href="/" className={classes.link}>
            Home
          </Link>
          {/* Features Dropdown */}
          <HoverCard width={700} position="bottom" radius="md" shadow="md" withinPortal>
            <HoverCard.Target>
              <a href="#" className={classes.link}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Features
                  </Box>
                  <IconChevronDown size={16} color={theme.colors.blue[6]} />
                </Center>
              </a>
            </HoverCard.Target>
            <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
              <Group justify="space-between" px="md">
                <Text fw={500}>Features</Text>
              </Group>
              <Divider my="sm" />
              {(() => {
                const navTabs = [
                { title: 'CredLens.ai', key: 'credlens', icon: IconBook },
                { title: 'CredExperience.ai', key: 'credexp', icon: IconMessageUser },
                ];
                const credlensFeatures = [
                { icon: IconChartPie3, title: 'Classification', description: 'AI-powered document classification for due diligence.' },
                { icon: IconNotification, title: 'Extraction', description: 'Extract key data points from documents with high accuracy.' },
                { icon: IconCode, title: 'Decisioning', description: 'Automate decision-making with custom rules and LLMs.' },
                ];
                const credexpFeatures = [
                { icon: IconChartPie3, title: 'Agents.ai', description: 'Intelligent agents for workflow automation.' },
                { icon: IconNotification, title: 'Assist.ai', description: 'AI-powered assistance for users and teams.' },
                { icon: IconCode, title: 'Insights.ai', description: 'Actionable insights from your data and processes.' },
                ];
                return (
                <Tabs variant="outline" orientation="vertical" defaultValue="credlens" value={selectedFeaturesTab} onChange={setSelectedFeaturesTab} style={{ display: 'flex' }}>
                  <Tabs.List>
                  {navTabs.map(tab => (
                    <Tabs.Tab key={tab.key} value={tab.key} leftSection={<tab.icon size={16} />}>
                    {tab.title}
                    </Tabs.Tab>
                  ))}
                  </Tabs.List>
                  <Tabs.Panel value="credlens" style={{ flex: 1, paddingLeft: 24 }}>
                  <SimpleGrid cols={2} spacing={0}>
                    {credlensFeatures.map(item => (
                    <UnstyledButton className={classes.subLink} key={item.title}>
                      <Group wrap="nowrap" align="flex-start">
                      <ThemeIcon size={34} variant="default" radius="md">
                        <item.icon size={22} color={theme.colors.blue[6]} />
                      </ThemeIcon>
                      <div>
                        <Text size="sm" fw={500}>{item.title}</Text>
                        <Text size="xs" c="dimmed">{item.description}</Text>
                      </div>
                      </Group>
                    </UnstyledButton>
                    ))}
                  </SimpleGrid>
                  </Tabs.Panel>
                  <Tabs.Panel value="credexp" style={{ flex: 1, paddingLeft: 24 }}>
                  <SimpleGrid cols={2} spacing={0}>
                    {credexpFeatures.map(item => (
                    <UnstyledButton className={classes.subLink} key={item.title}>
                      <Group wrap="nowrap" align="flex-start">
                      <ThemeIcon size={34} variant="default" radius="md">
                        <item.icon size={22} color={theme.colors.blue[6]} />
                      </ThemeIcon>
                      <div>
                        <Text size="sm" fw={500}>{item.title}</Text>
                        <Text size="xs" c="dimmed">{item.description}</Text>
                      </div>
                      </Group>
                    </UnstyledButton>
                    ))}
                  </SimpleGrid>
                  </Tabs.Panel>
                </Tabs>
                );
              })()}
              <div className={classes.dropdownFooter}>
                <Group justify="space-between">
                  <div>
                    <Text fw={500} fz="sm">
                      Get started
                    </Text>
                    <Text size="xs" c="dimmed">
                      See our features in action with a personalized demo
                    </Text>
                  </div>
                  <Button size="sm" variant="default" href="/demo">Get a Demo</Button>
                </Group>
              </div>
            </HoverCard.Dropdown>
          </HoverCard>

          {/* Solutions Dropdown */}
          <HoverCard width={700} position="bottom" radius="md" shadow="md" withinPortal>
            <HoverCard.Target>
              <a href="#" className={classes.link}>
                <Center inline>
                  <Box component="span" mr={5}>
                    Solutions
                  </Box>
                  <IconChevronDown size={16} color={theme.colors.blue[6]} />
                </Center>
              </a>
            </HoverCard.Target>
            <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
              <Group justify="space-between" px="md">
                <Text fw={500}>Solutions</Text>
              </Group>
              <Divider my="sm" />
              {(() => {
                const navTabs = [
                { title: 'Banking', key: 'banking', icon: IconCoin },
                { title: 'Insurance', key: 'insurance', icon: IconFingerprint },
                // { title: 'Legal', key: 'legal', icon: IconBook },
                ];
                // Replace your existing solutionsData with this (add url fields)
                const solutionsData = {
                  banking: [
                    { icon: IconChartPie3, title: 'Co-Lending', description: 'AI-driven co-lending platform for banks and NBFCs', url: '/use_cases/co_lending' },
                    { icon: IconNotification, title: 'Onboarding', description: 'Streamline customer onboarding and KYC for banks.', url: '/use_cases/banking_onboarding' },
                    { icon: IconCode, title: 'Securitization', description: 'Digitize and manage asset-backed securities.', url: '/use_cases/securitization' },
                  ],
                  insurance: [
                    { icon: IconChartPie3, title: 'Underwriting', description: 'AI-powered underwriting for insurance risk analysis.', url: '/use_cases/insurance_underwriting' },
                    { icon: IconNotification, title: 'Onboarding', description: 'Automate policyholder onboarding and verification.', url: '/use_cases/insurance_onboarding' },
                  ],
                  // legal: [
                  //   { icon: IconBook, title: 'Drafting', description: 'Generate legal documents and contracts efficiently.', url: '/solutions/legal-drafting' },
                  //   { icon: IconFingerprint, title: 'Compliance', description: 'Ensure regulatory compliance and audit readiness.', url: '/solutions/legal-compliance' },
                  // ],
                };

                return (
                <Tabs
    variant="outline"
    orientation="vertical"
    defaultValue="banking"
    value={selectedSolutionsTab}
    onChange={setSelectedSolutionsTab}
    style={{ display: 'flex' }}
  >
    <Tabs.List>
      {navTabs.map((tab) => (
        <Tabs.Tab key={tab.key} value={tab.key} leftSection={<tab.icon size={16} />}>
          {tab.title}
        </Tabs.Tab>
      ))}
    </Tabs.List>

    {navTabs.map((tab) => (
      <Tabs.Panel key={tab.key} value={tab.key} style={{ flex: 1, paddingLeft: 24 }}>
        <SimpleGrid cols={2} spacing={0}>
          {solutionsData[tab.key].map((item) => (
            // Use Link so every item navigates. Using Link keeps Next.js client routing.
            <Link
              href={item.url}
              key={item.title}
              className={classes.subLink}
              style={{ textDecoration: 'none' }}
            >
              <Group wrap="nowrap" align="flex-start">
                <ThemeIcon size={34} variant="default" radius="md">
                  <item.icon size={22} color={theme.colors.blue[6]} />
                </ThemeIcon>
                <div>
                  <Text size="sm" fw={500}>{item.title}</Text>
                  <Text size="xs" c="dimmed">{item.description}</Text>
                </div>
              </Group>
            </Link>
          ))}
        </SimpleGrid>
      </Tabs.Panel>
    ))}
  </Tabs>
                );
                })()}
                <div className={classes.dropdownFooter}>
                <Group justify="space-between">
                  <div>
                  <Text fw={500} fz="sm">
                    Get started
                  </Text>
                  <Text size="xs" c="dimmed">
                    Check out our solutions and use cases
                  </Text>
                  </div>
                  <Button
                  variant="default"
                  size="sm"
                  component={Link}
                  href="/demo"
                  >
                  Talk to Us
                  </Button>
                </Group>
                </div>
              </HoverCard.Dropdown>
              </HoverCard>
              <Link href="/blogs" className={classes.link}>
              Blog
              </Link>
            
            </Group>

            <Group visibleFrom="sm">
              <Button
              size="sm"
              component={Link}
              href="/demo"
              >
              Get a demo
              </Button>
            </Group>

            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" size="md" />
            </Group>
          </header>

          <Drawer
            opened={drawerOpened}
            onClose={closeDrawer}
            size="100%"
            padding="md"
            title={
            <Group>
              {/* Logo added to Drawer title */}
              <Image src="/assets/black.svg" alt="CredStack" width={80} height={20} style={{ height: 20, width: 'auto', marginRight: 8 }} />
            </Group>
          }
      hiddenFrom="sm"
      zIndex={1000000}
  className={layoutStyles.fullWidthDrawer}
    >
      <ScrollArea h="calc(100vh - 80px" mx="-md">
        <Divider/>

        <Link href="/" className={classes.link} onClick={closeDrawer}>
          Home
        </Link>
        <UnstyledButton className={classes.link} onClick={toggleFeatures}>
          <Center inline>
            <Box component="span" mr={5}>
              Features
            </Box>
            <IconChevronDown size={16} color={theme.colors.blue[6]} />
          </Center>
        </UnstyledButton>
        <Collapse in={featuresOpened}>
          <Box pl="lg">
            {feature_list.map((section) => (
              <Box key={section.section} mb="sm">
                <Text fw={600} size="sm" mb={4}>{section.section}</Text>
                {section.features.map((item) => (
                  <Link href={item.url} key={item.title} className={classes.subLink} style={{ textDecoration: 'none' }} onClick={closeDrawer}>
                    <Group wrap="nowrap" align="flex-start">
                      <ThemeIcon size={34} variant="default" radius="md">
                        <item.icon size={22} color={theme.colors.blue[6]} />
                      </ThemeIcon>
                      <div>
                        <Text size="sm" fw={500}>{item.title}</Text>
                        <Text size="xs" c="dimmed">{item.description}</Text>
                      </div>
                    </Group>
                  </Link>
                ))}
              </Box>
            ))}
          </Box>
        </Collapse>
        <UnstyledButton className={classes.link} onClick={toggleSolutions}>
          <Center inline>
            <Box component="span" mr={5}>
              Solutions
            </Box>
            <IconChevronDown size={16} color={theme.colors.blue[6]} />
          </Center>
        </UnstyledButton>
        <Collapse in={solutionsOpened}>
          <Box pl="lg">
            {solutions_list.map((section) => (
              <Box key={section.section} mb="sm">
                <Text fw={600} size="sm" mb={4}>{section.section}</Text>
                {section.solutions.map((item) => (
                  <Link href={item.url} key={item.title} className={classes.subLink} style={{ textDecoration: 'none' }} onClick={closeDrawer}>
                    <Group wrap="nowrap" align="flex-start">
                      <ThemeIcon size={34} variant="default" radius="md">
                        <item.icon size={22} color={theme.colors.blue[6]} />
                      </ThemeIcon>
                      <div>
                        <Text size="sm" fw={500}>{item.title}</Text>
                        <Text size="xs" c="dimmed">{item.description}</Text>
                      </div>
                    </Group>
                  </Link>
                ))}
              </Box>
            ))}
          </Box>
        </Collapse>
        <Link href="/blogs" className={classes.link} onClick={closeDrawer}>
          Blog
        </Link>

        <Divider my="sm" />

        <Group justify="center" grow pb="xl" px="md">
          <Button
            variant="default"
            size="md"
            component={Link}
            href="/contact"
            onClick={closeDrawer}
          >
            Contact Us
          </Button>
          <Button
            size="md"
            component={Link}
            href="/demo"
            onClick={closeDrawer}
          >
            Get Demo
          </Button>
        </Group>
      </ScrollArea>
    </Drawer>
  </Box>
);
}

export default HeaderMegaMenu;

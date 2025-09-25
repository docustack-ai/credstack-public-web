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

const feature_list = [
  {
    icon: IconCode,
    title: 'Open source',
    description: 'This Pokémon’s cry is very loud and distracting',
    url: '/open-source',
  },
  {
    icon: IconCoin,
    title: 'Free for everyone',
    description: 'The fluid of Smeargle’s tail secretions changes',
    url: '/free',
  },
  {
    icon: IconBook,
    title: 'Documentation',
    description: 'Yanma is capable of seeing 360 degrees without',
    url: '/docs',
  },
  
];

const solutions_list = [
  {
    icon: IconCoin,
    title: 'Banking Underwriting',
    description: 'Automate risk assessment and loan approvals for banking.',
    url: '/solutions/banking-underwriting',
  },
  {
    icon: IconNotification,
    title: 'Banking Onboarding',
    description: 'Streamline customer onboarding and KYC for banks.',
    url: '/solutions/banking-onboarding',
  },
  {
    icon: IconCode,
    title: 'Securitization',
    description: 'Digitize and manage asset-backed securities.',
    url: '/use_cases/securitization',
  },
  {
    icon: IconChartPie3,
    title: 'Insurance Underwriting',
    description: 'AI-powered underwriting for insurance risk analysis.',
    url: '/solutions/insurance-underwriting',
  },
  {
    icon: IconNotification,
    title: 'Insurance Onboarding',
    description: 'Automate policyholder onboarding and verification.',
    url: '/solutions/insurance-onboarding',
  },
  {
    icon: IconBook,
    title: 'Legal Drafting',
    description: 'Generate legal documents and contracts efficiently.',
    url: '/solutions/legal-drafting',
  },
  {
    icon: IconFingerprint,
    title: 'Legal Compliance',
    description: 'Ensure regulatory compliance and audit readiness.',
    url: '/solutions/legal-compliance',
  },
];
  

function HeaderMegaMenu() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
  const [featuresOpened, { toggle: toggleFeatures }] = useDisclosure(false);
  const [solutionsOpened, { toggle: toggleSolutions }] = useDisclosure(false);
  const [selectedFeaturesTab, setSelectedFeaturesTab] = useState('credlens');
  const [selectedSolutionsTab, setSelectedSolutionsTab] = useState('banking');
  const theme = useMantineTheme();

  const links = feature_list.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group wrap="nowrap" align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={22} color={theme.colors.blue[6]} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" c="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  
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
                      Their food sources have decreased, and their numbers
                    </Text>
                  </div>
                  <Button variant="default" size="md">Get started</Button>
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
                { title: 'Legal', key: 'legal', icon: IconBook },
                ];
                const solutionsData = {
                banking: [
                  { icon: IconChartPie3, title: 'Underwriting', description: 'Automate risk assessment and loan approvals for banking.' },
                  { icon: IconNotification, title: 'Onboarding', description: 'Streamline customer onboarding and KYC for banks.' },
                  { icon: IconCode, title: 'Securitization', description: 'Digitize and manage asset-backed securities.' },
                ],
                insurance: [
                  { icon: IconChartPie3, title: 'Underwriting', description: 'AI-powered underwriting for insurance risk analysis.' },
                  { icon: IconNotification, title: 'Onboarding', description: 'Automate policyholder onboarding and verification.' },
                ],
                legal: [
                  { icon: IconBook, title: 'Drafting', description: 'Generate legal documents and contracts efficiently.' },
                  { icon: IconFingerprint, title: 'Compliance', description: 'Ensure regulatory compliance and audit readiness.' },
                ],
                };
                return (
                <Tabs variant="outline" orientation="vertical" defaultValue="banking" value={selectedSolutionsTab} onChange={setSelectedSolutionsTab} style={{ display: 'flex' }}>
                  <Tabs.List>
                  {navTabs.map(tab => (
                    <Tabs.Tab key={tab.key} value={tab.key} leftSection={<tab.icon size={16} />}>
                    {tab.title}
                    </Tabs.Tab>
                  ))}
                  </Tabs.List>
                  {navTabs.map(tab => (
                  <Tabs.Panel key={tab.key} value={tab.key} style={{ flex: 1, paddingLeft: 24 }}>
                    <SimpleGrid cols={2} spacing={0}>
                    {solutionsData[tab.key].map(item => (
                      item.title === 'Securitization' ? (
                        <Link href="/use_cases/securitization" key={item.title} className={classes.subLink} style={{ textDecoration: 'none' }}>
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
                      ) : (
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
                      )
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
                    Their food sources have decreased, and their numbers
                  </Text>
                  </div>
                  <Button
                  variant="default"
                  size="md"
                  component={Link}
                  href="/contact"
                  >
                  Contact us
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
              size="md"
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
            {feature_list.map((item) => (
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
            {solutions_list.map((item) => (
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

import { IconBrandLinkedin, IconMapPin2 } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text, Image } from '@mantine/core';
// import { MantineLogo } from '@mantinex/mantine-logo';
import classes from './FooterLinks.module.css';
// import blackLogo from '/assets/black.svg';
import Link from 'next/link';

const data = [
  {
    title: 'Pages',
    links: [
      { label: 'Home', link: '/' },
      // { label: 'Features', link: '/features' },
      { label: 'Blog', link: '/blogs' },
      { label: 'Contact', link: '/contact' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Our Story', link: '/about/our-story' },
      { label: 'Teams', link: '/teams' },
      {label: 'Careers', link: '/careers' }
    ],
  },
  {
    title: 'Resources',
    links: [
      
      { label: 'Terms & Conditions', link: '/legal/terms' },
      { label: 'Privacy Policy', link: '/legal/privacy' }
    ],
  },
];

function FooterLinks() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text
        key={index}
        className={classes.link}
        component={Link}
        href={link.link || '#'}
      >
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src="/assets/black.svg" alt="CredStack logo" />
          <Text size="sm" className={classes.description}>
            Due dilligence and underwriting, reimagined with AI
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © 2026 CredStack. All rights reserved. <br />
            CredStack.ai is a product of October Technologies Private Limited.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon
            component="a"
            href="https://www.linkedin.com/company/credstack-ai"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CredStack LinkedIn"
            size="lg"
            color="gray"
            variant="subtle"
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
          {/* <ActionIcon size="lg" color="gray" variant="subtle">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon> */}
          <ActionIcon
            component="a"
            href="https://share.google/Oul0XAdF8hpaZx4jn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CredStack location"
            size="lg"
            color="gray"
            variant="subtle"
          >
            <IconMapPin2 size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}

export default FooterLinks;

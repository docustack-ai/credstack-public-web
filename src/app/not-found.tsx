'use client';

import { Button, Group, Text, Title, Container } from '@mantine/core';
import { useRouter } from 'next/navigation';
import classes from './NotFoundImage.module.css';

export default function NotFound() {
  const router = useRouter();
  return (
    <Container className={classes.root}>
      <div className={classes.image} />
      <Title className={classes.title}>Nothing to see here</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        The page you are trying to open does not exist. You may have mistyped the address, or the page has been moved to another URL.
      </Text>
      <Group justify="center">
        <Button variant="subtle" size="md" onClick={() => router.push('/')}>Take me back to home page</Button>
      </Group>
    </Container>
  );
}

import type { Metadata } from 'next';
import { Button, Card, Container, SimpleGrid, Text, Title } from '@mantine/core';
import { featureList } from '../../data/features';

export const metadata: Metadata = {
  title: 'Product Features | CredStack.ai',
  description:
    'Explore CredStack product features for AI-powered underwriting, document intelligence, and risk automation.',
  alternates: {
    canonical: '/features',
  },
};

export default function FeaturesPage() {
  return (
    <Container size="lg" py="xl">
      <div>
        <Title order={1} ta="center">
          CredStack Features
        </Title>
        <Text c="dimmed" ta="center" mt="md">
          Explore dedicated feature pages built for lenders, NBFCs, and fintech teams.
        </Text>

        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="xl">
          {featureList.map((feature) => (
            <Card key={feature.slug} withBorder radius="md" padding="lg">
              <Text fw={700}>{feature.hero.h1}</Text>
              <Text c="dimmed" mt="sm">
                {feature.seo.description}
              </Text>
              <Button component="a" href={`/features/${feature.slug}`} mt="lg" variant="light">
                View Feature
              </Button>
            </Card>
          ))}
        </SimpleGrid>
      </div>
    </Container>
  );
}

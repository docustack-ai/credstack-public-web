import { Badge, Card, SimpleGrid, Text, Title } from '@mantine/core';
import StyledContainer from '../StyledContainer';

type ProblemPoint = {
  title: string;
  description: string;
  visualHint?: string;
};

type ProblemInfographicsProps = {
  title: string;
  points: ProblemPoint[];
};

export function ProblemInfographics({ title, points }: ProblemInfographicsProps) {
  if (!points.length) {
    return null;
  }

  return (
    <StyledContainer>
      <div style={{ padding: 24 }}>
        <Title order={2} ta="center">
          {title}
        </Title>
        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg" mt="xl">
          {points.map((point) => (
            <Card key={point.title} withBorder radius="md" padding="lg">
              {point.visualHint ? <Badge variant="light">{point.visualHint}</Badge> : null}
              <Text fw={600} mt={point.visualHint ? 'md' : 0}>
                {point.title}
              </Text>
              <Text c="dimmed" mt="xs">
                {point.description}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </div>
    </StyledContainer>
  );
}

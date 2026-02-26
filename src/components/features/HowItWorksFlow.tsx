import { Badge, Card, Image, SimpleGrid, Text, Title } from '@mantine/core';
import StyledContainer from '../StyledContainer';

type FlowStep = {
  title: string;
  description: string;
  image?: string;
};

type HowItWorksFlowProps = {
  title: string;
  steps: FlowStep[];
};

export function HowItWorksFlow({ title, steps }: HowItWorksFlowProps) {
  if (!steps.length) {
    return null;
  }

  return (
    <StyledContainer>
      <div style={{ padding: 24 }}>
        <Title order={2} ta="center">
          {title}
        </Title>
        <SimpleGrid cols={{ base: 1, md: 5 }} spacing="md" mt="xl">
          {steps.map((step, index) => (
            <Card key={step.title} withBorder radius="md" padding="md" h="100%">
              <Badge variant="light">Step {index + 1}</Badge>
              <Text fw={600} mt="sm">
                {step.title}
              </Text>
              <Text c="dimmed" mt="xs" size="sm">
                {step.description}
              </Text>
              {step.image ? (
                <Image src={step.image} alt={step.title} radius="sm" mt="md" />
              ) : null}
            </Card>
          ))}
        </SimpleGrid>
      </div>
    </StyledContainer>
  );
}

import { Card, List, SimpleGrid, Text, Title } from '@mantine/core';
import StyledContainer from '../StyledContainer';

type TechArchitectureProps = {
  title: string;
  points: string[];
  apiNotes: string[];
};

export function TechArchitecture({ title, points, apiNotes }: TechArchitectureProps) {
  if (!points.length && !apiNotes.length) {
    return null;
  }

  return (
    <StyledContainer>
      <div style={{ padding: 24 }}>
        <Title order={2} ta="center">
          {title}
        </Title>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="xl">
          {points.length ? (
            <Card withBorder radius="md" padding="lg">
              <Text fw={700} mb="sm">
                Architecture Overview
              </Text>
              <List spacing="xs">
                {points.map((point) => (
                  <List.Item key={point}>{point}</List.Item>
                ))}
              </List>
            </Card>
          ) : null}
          {apiNotes.length ? (
            <Card withBorder radius="md" padding="lg">
              <Text fw={700} mb="sm">
                API Integration Notes
              </Text>
              <List spacing="xs">
                {apiNotes.map((note) => (
                  <List.Item key={note}>{note}</List.Item>
                ))}
              </List>
            </Card>
          ) : null}
        </SimpleGrid>
      </div>
    </StyledContainer>
  );
}

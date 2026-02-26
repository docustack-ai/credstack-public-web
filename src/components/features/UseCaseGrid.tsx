import { Card, SimpleGrid, Text, Title } from '@mantine/core';
import StyledContainer from '../StyledContainer';

type UseCaseItem = {
  title: string;
  description: string;
};

type UseCaseGridProps = {
  title: string;
  items: UseCaseItem[];
};

export function UseCaseGrid({ title, items }: UseCaseGridProps) {
  if (!items.length) {
    return null;
  }

  return (
    <StyledContainer>
      <div style={{ padding: 24 }}>
        <Title order={2} ta="center">
          {title}
        </Title>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="xl">
          {items.map((item) => (
            <Card key={item.title} withBorder radius="md" padding="lg">
              <Text fw={600}>{item.title}</Text>
              <Text c="dimmed" mt="xs">
                {item.description}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </div>
    </StyledContainer>
  );
}

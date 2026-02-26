import { Badge, Group, Text, Title } from '@mantine/core';
import StyledContainer from '../StyledContainer';

type AudienceChipsProps = {
  title: string;
  items: string[];
};

export function AudienceChips({ title, items }: AudienceChipsProps) {
  if (!items.length) {
    return null;
  }

  return (
    <StyledContainer>
      <div style={{ padding: 24 }}>
        <Title order={2} ta="center">
          {title}
        </Title>
        <Group justify="center" gap="sm" mt="xl">
          {items.map((item) => (
            <Badge key={item} size="lg" variant="light" radius="xl">
              {item}
            </Badge>
          ))}
        </Group>
        <Text c="dimmed" ta="center" mt="lg">
          Built for high-throughput lending and underwriting operations where consistency and risk visibility are critical.
        </Text>
      </div>
    </StyledContainer>
  );
}

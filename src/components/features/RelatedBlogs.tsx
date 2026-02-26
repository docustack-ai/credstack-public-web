import { Card, Group, Text, Title } from '@mantine/core';
import StyledContainer from '../StyledContainer';

type BlogItem = {
  title: string;
  href: string;
};

type RelatedBlogsProps = {
  title: string;
  items: BlogItem[];
};

export function RelatedBlogs({ title, items }: RelatedBlogsProps) {
  return (
    <StyledContainer>
      <div style={{ padding: 24 }}>
        <Title order={2} ta="center" mb="xl">
          {title}
        </Title>
        {items.length ? (
          <Group grow align="stretch">
            {items.map((item) => (
              <Card key={item.title} withBorder radius="md" padding="lg">
                <Text fw={600}>{item.title}</Text>
                <Text component="a" href={item.href} c="blue" mt="sm" style={{ display: 'inline-block' }}>
                  Read article
                </Text>
              </Card>
            ))}
          </Group>
        ) : (
          <Text c="dimmed" ta="center">
            More resources coming soon.
          </Text>
        )}
      </div>
    </StyledContainer>
  );
}

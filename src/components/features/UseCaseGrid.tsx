import { Card, SimpleGrid, Stack, Text, Title } from '@mantine/core';
import StyledContainer from '../StyledContainer';
import classes from './UseCaseGrid.module.css';

type UseCaseItem = {
  title: string;
  description: string;
};

type UseCaseGridProps = {
  title: string;
  items: UseCaseItem[];
  layout?: 'grid' | 'split';
};

export function UseCaseGrid({ title, items, layout = 'grid' }: UseCaseGridProps) {
  if (!items.length) {
    return null;
  }

  if (layout === 'split') {
    return (
      <StyledContainer>
        <section className={classes.section}>
          <Text className={classes.splitTitle}>{title}</Text>

          <Stack gap="xl" mt="xl">
            {items.map((item, index) => (
              <article
                key={item.title}
                className={`${classes.altRow} ${index % 2 === 1 ? classes.altRowReverse : ''}`}
              >
                <div className={classes.altMedia} aria-hidden="true" />

                <div className={classes.altCopyContent}>
                  <Text className={classes.altCardTitle}>{item.title}</Text>
                  <Text mt="xs">
                    {item.description}
                  </Text>
                </div>
              </article>
            ))}
          </Stack>
        </section>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer>
      <section className={classes.section}>
        <Title order={2} ta="center">
          {title}
        </Title>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="xl">
          {items.map((item) => (
            <Card key={item.title} radius="md" padding="lg">
              <Text fw={600}>{item.title}</Text>
              <Text c="dimmed" mt="xs">
                {item.description}
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </section>
    </StyledContainer>
  );
}

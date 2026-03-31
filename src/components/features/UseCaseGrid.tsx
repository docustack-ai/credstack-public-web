import { Card, Image, SimpleGrid, Text, ThemeIcon, Stack, Title } from '@mantine/core';
import { IconSparkles } from '@tabler/icons-react';
import StyledContainer from '../StyledContainer';
import classes from './UseCaseGrid.module.css';

type UseCaseItem = {
  title: string;
  description: string;
  image?: string;
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
          <Title order={2} ta="center">
            {title}
          </Title>

          <Stack gap="xl" mt="xl">
            {items.map((item, index) => (
              <article
                key={item.title}
                className={`${classes.altRow} ${index % 2 === 1 ? classes.altRowReverse : ''}`}
              >
                <div className={classes.altMedia}>
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.title}
                      radius="md"
                      fit="contain"
                      className={classes.altImage}
                    />
                  ) : null}
                </div>

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
        <Title order={2} >
          {title}
        </Title>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="xl">
          {items.map((item) => (
            <Card key={item.title} radius="md" padding="lg" className={classes.useCaseCard}>
              <ThemeIcon
                size={34}
                radius="md"
                variant="light"
                color="green"
                className={classes.useCaseIcon}
              >
                <IconSparkles size={18} />
              </ThemeIcon>
              <Text fw={600} mt="sm" className={classes.useCaseCardTitle}>{item.title}</Text>
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

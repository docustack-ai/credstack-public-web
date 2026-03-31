import { Card, List, SimpleGrid, Text, ThemeIcon, Title } from '@mantine/core';
import { IconBuildingBank, IconPlugConnected } from '@tabler/icons-react';
import StyledContainer from '../StyledContainer';
import classes from './TechArchitecture.module.css';

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
      <section className={classes.section}>
        <Title order={2} ta="center">
          {title}
        </Title>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg" mt="xl">
          {points.length ? (
            <Card withBorder radius="md" padding="lg" className={classes.flatCard}>
              <ThemeIcon size={36} radius="md" variant="light" color="green" className={classes.icon}>
                <IconBuildingBank size={18} />
              </ThemeIcon>
              <Text fw={700} mb="sm" className={classes.cardTitle}>
                Architecture Overview
              </Text>
              <List spacing="xs">
                {points.map((point) => (
                  <List.Item key={point} className={classes.listItem}>{point}</List.Item>
                ))}
              </List>
            </Card>
          ) : null}
          {apiNotes.length ? (
            <Card withBorder radius="md" padding="lg" className={classes.flatCard}>
              <ThemeIcon size={36} radius="md" variant="light" color="teal" className={classes.icon}>
                <IconPlugConnected size={18} />
              </ThemeIcon>
              <Text fw={700} mb="sm" className={classes.cardTitle}>
                API Integration Notes
              </Text>
              <List spacing="xs">
                {apiNotes.map((note) => (
                  <List.Item key={note} className={classes.listItem}>{note}</List.Item>
                ))}
              </List>
            </Card>
          ) : null}
        </SimpleGrid>
      </section>
    </StyledContainer>
  );
}

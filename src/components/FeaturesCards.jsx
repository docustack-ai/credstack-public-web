import { IconCookie, IconGauge, IconUser } from '@tabler/icons-react';
import {
  Badge,
  Card,
  Container,
  Group,
  SimpleGrid,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core';
import classes from './FeaturesCards.module.css';

export function FeaturesCards({ features, productName }) {
  const theme = useMantineTheme();
  const featuresList = features.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
      {feature.icon && typeof feature.icon === 'string' ? (
        feature.icon === 'IconGauge' ? <IconGauge size={50} stroke={1.5} color={theme.colors.blue[6]} /> :
        feature.icon === 'IconUser' ? <IconUser size={50} stroke={1.5} color={theme.colors.blue[6]} /> :
        feature.icon === 'IconCookie' ? <IconCookie size={50} stroke={1.5} color={theme.colors.blue[6]} /> : null
      ) : null}
      <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text fz="sm" c="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));

  return (
    <Container size="lg" py="xl">
      <Group justify="center">
        <Badge variant="filled" size="lg">
          {productName ? `${productName} Features` : 'Best company ever'}
        </Badge>
      </Group>

      <Title order={2} className={classes.title} ta="center" mt="sm">
        Integrate effortlessly with any technology stack
      </Title>

      <Text c="dimmed" className={classes.description} ta="center" mt="md">
        Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when
        hunger drives it to try biting a Steel-type Pokémon.
      </Text>

      <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
        {featuresList}
      </SimpleGrid>
    </Container>
  );
}

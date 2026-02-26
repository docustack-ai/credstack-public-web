import { Button, Grid, Image, Paper, Text, Title } from '@mantine/core';
import StyledContainer from '../StyledContainer';

type FeatureHeroProps = {
  h1: string;
  intro: string;
  ctaLabel: string;
  ctaHref?: string;
  image?: string;
};

export function FeatureHero({
  h1,
  intro,
  ctaLabel,
  ctaHref = '/demo',
  image,
}: FeatureHeroProps) {
  return (
    <StyledContainer>
      <Paper
        p={{ base: 'lg', md: 'xl' }}
        radius="xl"
        shadow="sm"
        style={{
          margin: 16,
          background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)',
        }}
      >
        <Grid align="center">
          <Grid.Col span={{ base: 12, md: image ? 7 : 12 }}>
            <Title order={1}>{h1}</Title>
            <Text c="dimmed" mt="md">
              {intro}
            </Text>
            <Button component="a" href={ctaHref} mt="xl" size="sm">
              {ctaLabel}
            </Button>
          </Grid.Col>
          {image ? (
            <Grid.Col span={{ base: 12, md: 5 }}>
              <Image src={image} alt={h1} radius="md" />
            </Grid.Col>
          ) : null}
        </Grid>
      </Paper>
    </StyledContainer>
  );
}

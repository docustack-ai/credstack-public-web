import { Button, Image, Paper, Stack, Text, Title } from '@mantine/core';
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
          margin: 0,
          background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)',
        }}
      >
        <Stack align="center" gap="xl">
          <Stack align="center" gap="md" maw={image ? 780 : 860}>
            <Title order={1} ta="center">
              {h1}
            </Title>
            <Text c="dimmed" ta="center">
              {intro}
            </Text>
            <Button component="a" href={ctaHref} mt="sm" size="sm">
              {ctaLabel}
            </Button>
          </Stack>
          <Paper withBorder radius="md" p="md" mt="xl">
            {image ? <Image src={image} alt={h1} radius="md" maw={820} w="100%" /> : null}
          </Paper>
        </Stack>
      </Paper>
    </StyledContainer>
  );
}

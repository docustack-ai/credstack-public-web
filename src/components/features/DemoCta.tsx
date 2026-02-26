import { Button, Card, Group, Text, Title } from '@mantine/core';
import StyledContainer from '../StyledContainer';

type DemoCtaProps = {
  title: string;
  text: string;
  primaryLabel: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function DemoCta({
  title,
  text,
  primaryLabel,
  primaryHref = '/demo',
  secondaryLabel,
  secondaryHref = '/contact',
}: DemoCtaProps) {
  return (
    <StyledContainer>
      <div style={{ padding: 24 }}>
        <Card withBorder radius="md" padding="xl">
          <Title order={2} ta="center">
            {title}
          </Title>
          <Text c="dimmed" ta="center" mt="md">
            {text}
          </Text>
          <Group justify="center" mt="xl">
            <Button component="a" href={primaryHref}>
              {primaryLabel}
            </Button>
            {secondaryLabel ? (
              <Button component="a" href={secondaryHref} variant="light">
                {secondaryLabel}
              </Button>
            ) : null}
          </Group>
        </Card>
      </div>
    </StyledContainer>
  );
}

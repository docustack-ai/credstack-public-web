import { Card, Grid, Text, Title } from '@mantine/core';
import StyledContainer from '../StyledContainer';

type DefinitionBlockProps = {
  title?: string;
  whatIs: string;
  whyUse: string;
};

export function DefinitionBlock({
  title = 'What is this feature?',
  whatIs,
  whyUse,
}: DefinitionBlockProps) {
  if (!whatIs && !whyUse) {
    return null;
  }

  return (
    <StyledContainer>
      <div style={{ padding: 24 }}>
        <Title order={2} ta="center" mb="xl">
          {title}
        </Title>
        <Grid>
          {whatIs ? (
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder radius="md" padding="lg" h="100%">
                <Text fw={700}>Definition</Text>
                <Text c="dimmed" mt="sm">
                  {whatIs}
                </Text>
              </Card>
            </Grid.Col>
          ) : null}
          {whyUse ? (
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Card withBorder radius="md" padding="lg" h="100%">
                <Text fw={700}>Why lenders use it</Text>
                <Text c="dimmed" mt="sm">
                  {whyUse}
                </Text>
              </Card>
            </Grid.Col>
          ) : null}
        </Grid>
      </div>
    </StyledContainer>
  );
}

import { Card, Group, Image, RingProgress, Text, Badge, Button, Flex, Container } from '@mantine/core';
import classes from './CardWithStats.module.css';
import StyledContainer from './StyledContainer';


const stats = [
    { title: 'Accuracy', value: '97% +' },
    { title: 'Checkpoints', value: '130+' },
    { title: 'Decisions Taken', value: '1,60,00,000+' },
];

function CardWithStats() {
  const items = stats.map((stat) => (
    <div key={stat.title}>
      <Text size="md" color="dimmed">
        {stat.title}
      </Text>
      <Text fw={500} size="xl">
        {stat.value}
      </Text>
    </div>
  ));

return (
  <StyledContainer>
          
  <Flex direction="column" align="center">
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20, marginTop: 20 }}>
      <Button variant="light" radius="xl" size="md">
        Why CredStack.ai
      </Button>
    </div>
    <Card w="100%" radius="md" className={classes.card} shadow='sm' mb="md">
      <Group justify="left" mt="lg">
        <Text className={classes.title}>Unmatched accuracy in document extraction, risk evaluation and decisioning</Text>
      </Group>
      <Text mt="sm" mb="md" c="dimmed" fz="md">
        CredStack processes hand written, scanned documents with human like decisioning
      </Text>
      <Card.Section
        className={classes.footer}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'flex-start',
          gap:50,
        }}
      >
        {items}
      </Card.Section>
    </Card>
  </Flex>
  </StyledContainer>
);
}

export default CardWithStats;

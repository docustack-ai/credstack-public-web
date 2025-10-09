import { Card, Group, Image, RingProgress, Text, Badge, Button, Flex } from '@mantine/core';
import classes from './CardWithStats.module.css';
import { IconFlag} from '@tabler/icons-react';



/**
 * @param {Object} props
 * @param {string} [props.buttonLabel]
 * @param {React.ReactNode} [props.buttonIcon]
 * @param {string} [props.title]
 * @param {string} [props.subtitle]
 * @param {{title: string, value: string}[]} [props.stats]
 */
function CardWithStats({
  buttonLabel = 'Why CredStack.ai',
  buttonIcon = <IconFlag size={18} />,
  title = 'Unmatched accuracy in document extraction, risk evaluation and decisioning',
  subtitle = 'CredStack processes hand written, scanned documents with human like decisioning',
  stats = [
    { title: 'Accuracy', value: '99.5% +' },
    { title: 'Checkpoints', value: '130+' },
    { title: 'Decisions Taken', value: '1,60,00,000+' },
  ],
}) {
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
    <Flex direction="column" align="center" className={classes.root} >
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0, marginTop: 20 }}>
        <Button leftSection={buttonIcon} variant="light" radius="xl" size="md">
          {buttonLabel}
        </Button>
      </div>
      <Card w="100%" radius="md" className={classes.card}>
        <Group justify="left" mt="lg">
          <Text className={classes.title}>{title}</Text>
        </Group>
        <Text mt="sm" mb="md" c="dimmed" fz="md">
          {subtitle}
        </Text>
        <Card.Section
          className={classes.footer}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'flex-start',
            gap: 50,
          }}
        >
          {items}
        </Card.Section>
      </Card>
    </Flex>
  );
}

export default CardWithStats;

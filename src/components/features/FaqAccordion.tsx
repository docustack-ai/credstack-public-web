import { Accordion, Text, Title } from '@mantine/core';
import StyledContainer from '../StyledContainer';

type FaqItem = {
  q: string;
  a: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  if (!items.length) {
    return null;
  }

  return (
    <StyledContainer>
      <div style={{ padding: 24 }}>
        <Title order={2} ta="center" mb="xl">
          FAQs
        </Title>
        <Accordion variant="separated" radius="md">
          {items.map((item) => (
            <Accordion.Item key={item.q} value={item.q}>
              <Accordion.Control>
                <Text fw={500}>{item.q}</Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text>{item.a}</Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </StyledContainer>
  );
}

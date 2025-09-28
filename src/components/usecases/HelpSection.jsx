import React from "react";
import styles from "./HelpSection.module.css";
import { Container, Title, Text, SimpleGrid, Paper, ThemeIcon } from "@mantine/core";

export default function HelpSection({ title, description, items }) {
  return (
    <section className={styles.helpSection}>
      <Container size="md" py="xl">
        <Title order={2} mb="md">{title}</Title>
        {description && <Text mb="xl" c="dimmed">{description}</Text>}
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          {items && items.map((item, idx) => (
            <Paper key={idx} radius="md" p="md" withBorder className={styles.helpCard}>
              {item.icon && (
                <ThemeIcon size={48} radius="xl" variant="light" color="blue">
                  {React.createElement(item.icon, { size: 32 })}
                </ThemeIcon>
              )}
              <Text fw={700} mt="md">{item.title}</Text>
              <Text c="dimmed" fz="sm">{item.description}</Text>
            </Paper>
          ))}
        </SimpleGrid>
      </Container>
    </section>
  );
}

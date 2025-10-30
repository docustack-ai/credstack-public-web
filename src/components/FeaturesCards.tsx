// src/components/FeaturesCards.tsx
import React from 'react';
import { Badge, Card, Container, Group, SimpleGrid, Text, Title, Button } from '@mantine/core';
import classes from './FeaturesCards.module.css';
import StyledContainer from './StyledContainer';


export type FeaturesCardsFeature = {
    title: string;
    description: string;
    icon: React.ComponentType<{ size?: number; stroke?: number; color?: string }> | React.ReactElement | any;
};

export type FeaturesCardsProps = {
    title?: string;
    description?: string;
    badge?: string;
    features: FeaturesCardsFeature[];
};

export function FeaturesCards({
    title = 'Integrate effortlessly with any technology stack',
    description = "Every once in a while, you’ll see a Golbat that’s missing some fangs. This happens when hunger drives it to try biting a Steel-type Pokémon.",
    badge = 'Our Capabilities',
    features,
}: FeaturesCardsProps) {


    const items = features.map((feature) => {
        const icon = feature.icon as any;
        let iconNode: React.ReactNode = null;

        // 1) If it's already a valid React element (the safest)
        if (React.isValidElement(icon)) {
            iconNode = icon;
        }
        // 2) If it's a component type (function / class) — render it
        else if (typeof icon === 'function') {
            try {
                const IconComponent = icon as React.ComponentType<any>;
                iconNode = <IconComponent size={50} stroke={1.5} color="black" />;
            } catch (err) {
                console.warn('Error rendering icon component for feature', feature.title, err);
                iconNode = null;
            }
        }
        // 3) If it's an object that looks element-like coming from some other source,
        //    try React.createElement as a last resort (wrapped in try/catch).
        else if (icon && typeof icon === 'object') {
            try {
                iconNode = React.createElement(icon, { size: 50, stroke: 1.5, color: 'black' });
            } catch (err) {
                // log full shape to inspect later
                console.warn('Unsupported feature.icon shape for', feature.title, icon, ' — could not create element:', err);
                iconNode = null;
            }
        } else {
            iconNode = null;
        }

        return (


            <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="sm">
                {iconNode}
                <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                    {feature.title}
                </Text>
                <Text fz="sm" c="dimmed" mt="sm">
                    {feature.description}
                </Text>
            </Card>

        );
    });

    return (
        <StyledContainer>
            <Container fluid size="lg" py="md">
                <Group justify="center">

                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0, marginTop: 20 }}>
                        <Button variant="light" radius="xl" size="md">
                            {badge}
                        </Button>
                    </div>
                </Group>
                <Title order={2} className={classes.title} ta="center" mt="sm">
                    {title}
                </Title>
                <Text c="dimmed" className={classes.description} ta="center" mt="md">
                    {description}
                </Text>
                <SimpleGrid cols={{ base: 2, md: 4 }} spacing="xl" mt={10}>
                    {items}
                </SimpleGrid>
            </Container>
        </StyledContainer >

    );
}

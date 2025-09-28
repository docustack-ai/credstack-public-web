// src/components/FeaturesTitle.tsx
import React from 'react';
import { Button, Grid, SimpleGrid, Text, ThemeIcon, Title, Container } from '@mantine/core';
import classes from './FeaturesTitle.module.css';

export type FeaturesTitleFeature = {
    icon: React.ComponentType<{ size?: number; stroke?: number }> | React.ReactElement | any;
    title: string;
    description: string;
};

export type FeaturesTitleProps = {
    title: string;
    description: string;
    features: FeaturesTitleFeature[];
    buttonLabel?: string;
    buttonIcon?: React.ReactNode;
    buttonGradient?: { deg: number; from: string; to: string };
    buttonOnClick?: () => void;
};

export function FeaturesTitle({
    title,
    description,
    features,
    buttonLabel = 'Get started',
    buttonIcon,
    buttonGradient = { deg: 133, from: 'blue', to: 'cyan' },
    buttonOnClick,
}: FeaturesTitleProps) {
    const items = features.map((feature) => {
        let iconNode: React.ReactNode = null;
        const icon = feature.icon as any;

        // 1) If it's already a valid React element
        if (React.isValidElement(icon)) {
            iconNode = icon;
        }
        // 2) If it's a component type (function or class)
        else if (typeof icon === 'function') {
            try {
                // render component type with props
                const IconComponent = icon as React.ComponentType<any>;
                iconNode = <IconComponent size={26} stroke={1.5} />;
            } catch (err) {
                console.warn('Error rendering icon component for feature', feature.title, err);
                iconNode = null;
            }
        }
        // 3) If it's an object that *looks* element-like (exotic cases), try createElement
        else if (icon && typeof icon === 'object') {
            // sometimes third-party libs produce objects that aren't recognized as valid elements by this React instance—
            // attempt to create an element from that object as a last resort.
            try {
                iconNode = React.createElement(icon, { size: 26, stroke: 1.5 });
            } catch (err) {
                // fallback — give a helpful console warning so you can inspect the bad shape
                console.warn('Could not create element from feature.icon for', feature.title, icon, err);
                iconNode = null;
            }
        } else {
            // not provided or unsupported
            iconNode = null;
        }

        return (
            <div key={feature.title}>
                <ThemeIcon size={44} radius="md" variant="gradient" gradient={buttonGradient}>
                    {iconNode}
                </ThemeIcon>

                <Text fz="lg" mt="sm" fw={500}>
                    {feature.title}
                </Text>
                <Text c="dimmed" fz="sm">
                    {feature.description}
                </Text>
            </div>
        );
    });

    return (
        <Container className={classes.wrapper} size="lg">
            <Grid gutter={80}>
                <Grid.Col span={{ base: 12, md: 5 }}>
                    <Title className={classes.title} order={2}>
                        {title}
                    </Title>
                    <Text c="dimmed">{description}</Text>
                    <Button
                        variant="gradient"
                        gradient={buttonGradient}
                        size="lg"
                        radius="md"
                        mt="xl"
                        leftSection={buttonIcon ?? null}
                        onClick={buttonOnClick}
                    >
                        {buttonLabel}
                    </Button>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 7 }}>
                    <SimpleGrid cols={{ base: 1, md: 2 }} spacing={30}>
                        {items}
                    </SimpleGrid>
                </Grid.Col>
            </Grid>
        </Container>
    );
}

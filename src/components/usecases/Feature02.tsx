'use client';

import { JumboTitle } from './JumboTitle';
import { Box, Card, Container, Flex, Grid, Stack, Text } from '@mantine/core';
import { Button } from '@mantine/core';
import {
    IconBook,
    IconBrandTypescript,
    IconComponents,
    IconDevices,
    IconKeyframes,
    IconMasksTheater,
    IconMoon,
    IconRocket,
    IconTool,
} from '@tabler/icons-react';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import classes from './index.module.css';

type Feature = {
    icon: ReactNode;
    title: string;
    description: ReactNode;
    impact?: string | number;
};


const FeatureCell = ({
    icon,
    title,
    description,
    impact,
    index = 1,
    iconSize,
}: Feature & {
    index?: number;
    iconSize?: number;
}) => (
    <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 * index, ease: 'easeInOut' }}
        viewport={{ once: true }}
        style={{ height: '100%' }}
    >
        <motion.div
            whileHover={{ scale: 1.05, boxShadow: 'var(--mantine-shadow-xl)' }}
            transition={{ type: 'spring' }}
            style={{
                borderRadius: 'var(--mantine-radius-lg)',
                height: '100%',
            }}
        >
            <Card radius="lg" p="xl" className={classes.cell} h="100%">
                <Stack gap="xs">
                    <Flex w={iconSize} h={iconSize} justify="center" align="center">
                        {icon}
                    </Flex>
                    <Box>
                        <Text fz="xl">{title}</Text>
                        <Text fz="md" c="dimmed">
                            {description}
                        </Text>
                        {impact && (
                            <Text fz={20} fw={600} ta="center" mt={16} style={{ color: '#fa5252' }}>
                                {impact}
                            </Text>
                        )}
                    </Box>
                </Stack>
            </Card>
        </motion.div>
    </motion.div>
);

type Feature02Props = {
    title?: string;
    features?: Feature[];
    iconSize?: number;
    buttonLabel?: string;
    buttonIcon?: ReactNode;
};

export const Feature02 = ({


    features = [],
    iconSize = 20,
    buttonLabel,
    buttonIcon,
}: Feature02Props) => {
    return (
        <Container
            bg="var(--mantine-color-body)"
            py={{
                base: 'calc(var(--mantine-spacing-lg) * 4)',
                xs: 'calc(var(--mantine-spacing-lg) * 5)',
                lg: 'calc(var(--mantine-spacing-lg) * 6)',
            }}
            fluid
        >
            <Container size="lg" px={0}>
                {buttonLabel && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0, marginTop: 20 }}>
                        <Button leftSection={buttonIcon ?? null} variant="light" radius="xl" size="md">
                            {buttonLabel}
                        </Button>
                    </div>
                )}
            </Container>
            <Container size="lg" p={0} mt="xl">
                <Grid gutter="xl">
                    {features.map((feature, index) => (
                        <Grid.Col key={feature.title} span={{ base: 12, xs: 6, md: 4 }} mih="100%">
                            <FeatureCell
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                impact={feature.impact}
                                index={index}
                                iconSize={iconSize}
                            />
                        </Grid.Col>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};

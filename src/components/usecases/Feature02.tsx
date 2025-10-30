'use client';

import { Box, Card, Container, Flex, Grid, Stack, Text, SimpleGrid } from '@mantine/core';
import { Button } from '@mantine/core';
import { ReactNode } from 'react';
import StyledContainer from '../StyledContainer';

type Feature = {
    icon: ReactNode;
    title: string;
    description: ReactNode;
    impact?: string | number;
};



type Feature02Props = {
    title?: string;
    features?: Feature[];
    iconSize?: number;
    buttonLabel?: string;
    buttonIcon?: ReactNode;
};

export const Feature02 = ({


    features = [],

    buttonLabel,
    buttonIcon,
}: Feature02Props) => {
    return (

        <StyledContainer>
            <Container size="lg" p={0} >
                {buttonLabel && (
                    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20, paddingTop: 20 }}>
                        <Button leftSection={buttonIcon ?? null} variant="light" radius="xl" size="md">
                            {buttonLabel}
                        </Button>
                    </div>
                )}
            </Container>
            <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg" style={{ borderTop: '1px solid ${theme.other.userDefinedColors.border}' }}>
                {(features.length ? features.slice(0, 3) : [
                    { title: 'Heading 1', description: 'Sample text for column 1.', impact: '+10%' },
                    { title: 'Heading 2', description: 'Sample text for column 2.', impact: '+25%' },
                    { title: 'Heading 3', description: 'Sample text for column 3.', impact: '+40%' },
                ]).map((f, i) => (
                    <Box
                        key={`${f.title}-${i}`}
                        style={{
                            flex: 1,
                            padding: 20,
                            borderLeft: i === 0 ? 'none' : '1px solid rgba(0,0,0,0.08)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: 140,
                        }}
                    >
                        <Text fz="lg" fw={700} ta="center" mb={8}>
                            {f.title}
                        </Text>
                        <Text c="dimmed" ta="center">
                            {f.description}
                        </Text>
                        {f.impact && (
                            <Text fz={20} fw={600} ta="center" mt={12} style={{ color: '#fa5252' }}>
                                {f.impact}
                            </Text>
                        )}
                    </Box>
                ))}
            </SimpleGrid>


        </StyledContainer>



    );
};

'use client';

import {
    Accordion,
    AccordionProps,
    Container,
    ContainerProps,
    Flex,
    Image,
    MantineBreakpoint,
    MantineRadius,
    Text,
    TextProps,
    Title,
    Button,
} from '@mantine/core';
import { IconChevronUp } from '@tabler/icons-react';
import { ReactNode, useState } from 'react';
import classes from './Feature01.module.css';

type Item = {
    value: string;
    title: ReactNode;
    description: ReactNode;
    descriptionProps?: TextProps;
    image: {
        src: string;
        alt: string;
        w: number;
        h: number;
    };
};

type FeatureProps = {
    accordionProps?: AccordionProps;
    collapseBreakpoint?: MantineBreakpoint;
    containerProps?: ContainerProps;
    items: Item[];
    radius?: MantineRadius;
};

export const Feature01 = ({
    accordionProps,
    collapseBreakpoint = 'md',
    containerProps,
    items,
    radius = 'lg',
}: FeatureProps) => {
    const [selectedValue, setSelectedValue] = useState<string>(items[0].value);
    const maxImageHeight = items.reduce((max, item) => Math.max(max, item.image.h), 0);

    return (
        <Container
            className={classes.container}
            size="lg"
            py="lg"
            styles={{
                root: {
                    overflow: 'hidden',
                    borderRadius: radius
                        ? `var(--mantine-radius-${radius})`
                        : 'var(--mantine-radius-default)',
                },
            }}
            {...containerProps}
        >
            <Flex direction="column" align="center">
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 0, marginTop: 20 }}>
                    <Button variant="light" radius="xl" size="md">
                        Our Features
                    </Button>
                </div>


                <Flex
                    justify="space-between"
                    gap="calc(var(--mantine-spacing-lg) * 3)"
                    p={{
                        base: 0,
                        sm: 'calc(var(--mantine-spacing-lg) * 2)',
                    }}
                    wrap={{
                        base: 'wrap',
                        lg: 'nowrap',
                    }}
                    maw="100%"
                >

                    <Flex justify="center" align="center">
                        <Accordion
                            classNames={classes}
                            chevron={<IconChevronUp color="var(--mantine-color-dimmed)" size={24} />}
                            chevronSize={24}
                            value={selectedValue}
                            onChange={(value) => {
                                if (value === null) return;
                                setSelectedValue(value);
                            }}
                            styles={{
                                control: {
                                    height: 60,
                                },
                            }}
                            {...accordionProps}
                        >
                            {items.map((item) => (
                                <Accordion.Item key={item.value} value={item.value}>
                                    <Accordion.Control>
                                        <Title c="var(--mantine-color-text)" order={4} fz="md">
                                            {item.title}
                                        </Title>
                                    </Accordion.Control>
                                    <Accordion.Panel>
                                        <Text
                                            fz={{
                                                base: 'sm',
                                                sm: 'md',
                                            }}
                                            {...item.descriptionProps}
                                        >
                                            {item.description}
                                        </Text>
                                        <Image
                                            my="xl"
                                            w="100%"
                                            h="auto"
                                            hiddenFrom={collapseBreakpoint}
                                            alt={item.image.alt}
                                            src={item.image.src}
                                        />
                                    </Accordion.Panel>
                                </Accordion.Item>
                            ))}
                        </Accordion>
                    </Flex>
                    <Flex visibleFrom={collapseBreakpoint} maw="60%" align="center" h={maxImageHeight}>
                        {items.map((item) => (
                            <Flex
                                key={item.value}
                                visibleFrom={collapseBreakpoint}
                                justify="flex-start"
                                align="center"
                                ml="xl"
                                style={{
                                    display: selectedValue === item.value ? 'initial' : 'none',
                                }}
                            >
                                <Image {...item.image} />
                            </Flex>
                        ))}
                    </Flex>
                </Flex>
            </Flex>
        </Container>
    );
};

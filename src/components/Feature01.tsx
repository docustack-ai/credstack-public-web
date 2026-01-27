"use client";

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
} from "@mantine/core";
import { IconChevronUp } from "@tabler/icons-react";
import { ReactNode, useState } from "react";
import classes from "./Feature01.module.css";
import StyledContainer from "./StyledContainer";

type Item = {
    value: string;
    title: ReactNode;
    description: ReactNode;
    descriptionProps?: TextProps;
    image: {
        src: string;
        alt: string;
        w: number;
        h: number | "auto";
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
    // Helper to check if image src is valid (non-empty, non-whitespace, not a placeholder, and has a valid extension)
    const validImageExtensions = ['.png', '.jpg', '.jpeg', '.gif', '.webp', '.avif', '.svg'];
    const hasValidImage = (img?: Item['image']) => {
        if (!img || typeof img.src !== 'string') return false;
        const src = img.src.trim();
        if (!src) return false;
        // Exclude common placeholders
        if (src === '#' || src === 'about:blank' || src.startsWith('data:') || src.startsWith('javascript:')) return false;
        // Check for valid image extension
        if (!validImageExtensions.some(ext => src.toLowerCase().endsWith(ext))) return false;
        return true;
    };

    // Track which images failed to load
    const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});
    const handleImageError = (value: string) => {
        setBrokenImages(prev => ({ ...prev, [value]: true }));
    };

    const maxImageHeight = items.reduce<number>((max: number, item: Item) => {
        if (hasValidImage(item.image) && typeof item.image.h === 'number') {
            return Math.max(max, item.image.h);
        }
        return max;
    }, 0);

    return (
        <StyledContainer>
            <Container
                fluid
                className={classes.container}
                size="lg"
                m={0}


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
                        gap="calc(var(--mantine-spacing-lg) * 2)" /* Reduced gap */
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

                        <Flex
                            justify="center"
                            align="center"
                            style={{ flex: 1 }} /* Reduced width */
                        >
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
                                            {hasValidImage(item.image) && !brokenImages[item.value] ? (
                                                <Image
                                                    my="xl"
                                                    w="100%"
                                                    h={item.image.h === 'auto' ? undefined : item.image.h}
                                                    style={item.image.h === 'auto' ? { height: 'auto' } : undefined}
                                                    hiddenFrom={collapseBreakpoint}
                                                    alt={item.image.alt && item.image.alt.trim() ? item.image.alt : 'Feature image'}
                                                    src={item.image.src}
                                                    onError={() => handleImageError(item.value)}
                                                />
                                            ) : null}
                                        </Accordion.Panel>
                                    </Accordion.Item>
                                ))}
                            </Accordion>
                        </Flex>
                        <Flex
                            visibleFrom={collapseBreakpoint}
                            maw="70%" /* Increased width */
                            align="center"
                            justify="center"
                            h={maxImageHeight}
                        >
                            {items.map((item) => (
                                hasValidImage(item.image) && !brokenImages[item.value] ? (
                                    <Flex
                                        key={item.value}
                                        visibleFrom={collapseBreakpoint}
                                        justify="center"
                                        align="center"
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            display: selectedValue === item.value ? "flex" : "none",
                                        }}
                                    >
                                        <Image
                                            src={item.image.src}
                                            alt={item.image.alt && item.image.alt.trim() ? item.image.alt : 'Feature image'}
                                            fit="contain"
                                            w="100%"
                                            h="100%"
                                            style={{
                                                objectFit: "contain",
                                                borderRadius: 12,
                                            }}
                                            onError={() => handleImageError(item.value)}
                                        />
                                    </Flex>
                                ) : null
                            ))}
                        </Flex>

                    </Flex>
                </Flex>
            </Container>
        </StyledContainer>
    );
};

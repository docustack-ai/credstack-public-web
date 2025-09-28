"use client";

import { Button, Group, Text, Title, Container } from '@mantine/core';
import { useRouter } from 'next/navigation';
import classes from '../NotFoundImage.module.css';

export default function NotFound() {
    const router = useRouter();
    return (
        <Container className={classes.root}>
            <div
                className={classes.image}
                style={{
                    backgroundImage: "url(/assets/page_images/coming_soon.png)",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                }}
            />
            <Title className={classes.title}>Nothing to see here</Title>
            <Text c="dimmed" size="lg" ta="center" className={classes.description}>
                We&apos;re working hard behind the scenes! 🚀<br />
                This page is coming soon—stay tuned for something awesome.
            </Text>
            <Group justify="center">
                <Button variant="subtle" size="md" onClick={() => router.push('/')}>Take me back to home page</Button>
            </Group>
        </Container>
    );
}

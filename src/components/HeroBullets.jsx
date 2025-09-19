import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title, Flex } from '@mantine/core';
// import image from '../assets/hero_image.png';
import classes from './HeroBullets.module.css';

function HeroBullets() {
return (
    <Container size="xl">
        <div className={classes.inner}>
            <div className={classes.content}>
                <Title className={classes.title}>
                    AI Agents for <span className={classes.highlight}>due diligence & underwriting</span>
                </Title>
                <Text c="dimmed" mt="md">
                    Automate document-heavy underwriting, due-dilligence checks, and onboarding with an LLM-powered workflow builder.
                </Text>

                <List
                    mt={30}
                    spacing="sm"
                    size="sm"
                    icon={
                        <ThemeIcon size={20} radius="xl">
                            <IconCheck size={12} stroke={1.5} />
                        </ThemeIcon>
                    }
                >
                    <List.Item>
                        <b>Explainable by design</b> — every flag and approval comes with a traceable rationale
                    </List.Item>
                    <List.Item>
                        <b>130+ parameters</b> — credit, legal, operational, and technical checks out-of-the-box
                    </List.Item>
                    <List.Item>
                        <b>API-first & plug-and-play</b> — integrates with LOS/LMS/core systems in days, not months
                    </List.Item>
                </List>

                <Group mt={30}>
                    <Button  size="md" className={classes.control}>
                        Get started
                    </Button>
                    <Button variant="default"  size="md" className={classes.control}>
                        Source code
                    </Button>
                </Group>
            </div>
            <Image src="/assets/hero_image.png" className={classes.image} alt="Hero image" />
        </div>
    </Container>
);
}

export default HeroBullets;

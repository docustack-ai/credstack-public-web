import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title, Flex, Paper, SimpleGrid, px } from '@mantine/core';
import { useRouter } from 'next/navigation';
// import image from '../assets/hero_image.png';
import classes from './HeroBullets.module.css';


function HeroBullets() {
    const router = useRouter();
    const handleDemoClick = () => {
        router.push('/demo');
    };

return (
    <Container fluid className={classes.root} >
        <Container fluid p={0} style={{border: '1px solid rgb(228, 224, 217)', maxWidth: '1200px' }}>
            <Paper  p={0} radius="xl" shadow="sm" style={{ overflow: 'hidden', background: 'linear-gradient(135deg, #f8fafc 60%, #e0e7ff 100%)' }}>
              <SimpleGrid cols={{ base: 1, md: 5 }} spacing={0}>
        
        <div className={classes.inner} style={{gridColumn: 'span 3'}}>
            <div className={classes.content}>
                <Title className={classes.title}>
                    Due diligence and Risk Intelligence Platform 
                </Title>
                <Text c="dimmed" mt="md">
                    AI Agents for automating document-heavy underwriting, due-diligence checks, and onboarding with an LLM-powered workflow builder.
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

                
                <Group mt={20}>
                    <Button size="sm" className={classes.control} onClick={handleDemoClick}>
                        Get Started
                    </Button>
                    {/* <Button variant="default"  size="md" className={classes.control}>
                        Source code
                    </Button> */}
                </Group>
                <Group mt={30} mb={10} gap={30} >
                    <Image src="/assets/page_images/soc.jpg" alt="SOC 2 Certified" w={80}  style={{ borderRadius: 8, background: '#fff' }} />
                    <Image src="/assets/page_images/iso.png" alt="ISO 27001 Certified" w={80}  style={{ borderRadius: 8, background: '#fff' }} />
                </Group>
            </div>
            
        </div>
        <div style={{gridColumn: 'span 2', justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
            <Container justify="center" align="center" style={{ display: 'flex', padding: px(20) }}>
                <Image src="/assets/page_images/hero_1.png" className={classes.image} alt="Hero image" />
            </Container>
        </div>
        </SimpleGrid>
        </Paper>
        </Container>
    </Container>
);
}

export default HeroBullets;

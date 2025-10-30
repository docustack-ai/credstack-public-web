import { IconCheck } from '@tabler/icons-react';
import { Button, Container, Group, Image, List, Text, ThemeIcon, Title, Flex } from '@mantine/core';
import { useRouter } from 'next/navigation';
// import image from '../assets/hero_image.png';
import classes from './HeroBullets.module.css';
import StyledContainer from '../StyledContainer';


/**
 * @param {Object} props
 * @param {string} [props.title]
 * @param {string} [props.highlight]
 * @param {string} [props.description]
 * @param {string[]} [props.bullets]
 * @param {string} [props.image]
 * @param {string} [props.buttonLabel]
 * @param {() => void} [props.onButtonClick]
 */
function HeroBullets({
    title = '',
    highlight = '',
    description = '',
    bullets = [],
    image = '/assets/approval.png',
    buttonLabel = 'Get Started',
    onButtonClick = undefined,
}) {
    const router = useRouter();
    const handleClick = () => {
        if (onButtonClick) {
            onButtonClick();
        } else {
            router.push('/demo');
        }
    };

    return (
        <StyledContainer>
        <Container size="xl">
            <div className={classes.inner}>
                <div className={classes.content}>
                    <Title className={classes.title}>
                        {title}{' '}
                        {highlight && <span className={classes.highlight}>{highlight}</span>}
                    </Title>
                    {description && (
                        <Text c="dimmed" mt="md">{description}</Text>
                    )}

                    {bullets.length > 0 && (
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
                            {bullets.map((item, idx) => (
                                <List.Item key={idx}>{item}</List.Item>
                            ))}
                        </List>
                    )}

                    <Group mt={30}>
                        <Button size="sm" className={classes.control} onClick={handleClick}>
                            {buttonLabel}
                        </Button>
                    </Group>
                </div>
                <Image src={image} className={classes.image} alt="Hero image" />
            </div>
        </Container>
        </StyledContainer>
    );
}

export default HeroBullets;

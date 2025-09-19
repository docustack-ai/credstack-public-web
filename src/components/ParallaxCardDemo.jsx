import { Parallax } from '@gfazioli/mantine-parallax';
import { Card, Image, Container } from '@mantine/core';
// import frontpage_image from '../assets/fontpage_image.webp';

export default function ParallaxCardDemo() {
  return (
    <Container w="100%" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '0px', marginBottom: '20px' }}>
      <Parallax
        lightEffect
        lightOverlay
        // initialRotationX={-5} // Added initial skew
        // initialPerspective={500} // Added initial perspective
        style={{ width: '100%', maxWidth: 900 }}
      >
        <Card shadow="xl" radius="md" withBorder style={{ maxWidth: 900, border: '1px solid rgba(0, 0, 0, 1)', boxShadow: '0 10px 30px rgba(0, 0, 0, .25)', backdropFilter: 'blur(10px)' }}>
          <Card.Section>
            <Image
              src="/assets/fontpage_image.webp"
              alt="CredSStack.ai Platform"
              style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
            />
          </Card.Section>
        </Card>
      </Parallax>
    </Container>
  );
}

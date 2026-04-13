import { IconShare } from '@tabler/icons-react';
import {
  ActionIcon,
  Avatar,
  Badge,
  Card,
  Center,
  Group,
  Image,
  Text,
  useMantineTheme,
} from '@mantine/core';
import { useState } from 'react';
import classes from './ArticleCard.module.css';

export default function ArticleCard({
  title = 'Resident Evil Village review',
  author = 'Bill Wormeater',
  excerpt = '',
  image = 'https://i.imgur.com/Cij5vdL.png',
  badge = 'outstanding',
  slug = '',
}) {
  const theme = useMantineTheme();
  const [shared, setShared] = useState(false);

  const stopNavigation = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleShare = async (event) => {
    stopNavigation(event);

    if (typeof window === 'undefined') return;

    const shareUrl = slug
      ? `${window.location.origin}/blogs/${slug}`
      : window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: excerpt,
          url: shareUrl,
        });
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(shareUrl);
      }

      setShared(true);
      window.setTimeout(() => setShared(false), 1600);
    } catch {
      // Sharing can be cancelled by users; keep it silent.
    }
  };

  return (
    <Card withBorder radius="md" className={classes.card} m={0} p={0}>
      <Card.Section>
        <Image src={image} height={180} alt={title} />
      </Card.Section>
    

      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        {badge}
      </Badge>
      <div style={{ padding: '1rem' }}>
        <Text className={classes.title} fw={500}>
          {title}
        </Text>

      <Text fz="sm" c="dimmed" lineClamp={4}>
        {excerpt}
      </Text>

      <Group justify="space-between" className={classes.footer}>
        <Center>
          <Avatar
            src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-1.png"
            size={24}
            radius="xl"
            mr="xs"
          />
          <Text fz="sm" inline>
            {author}
          </Text>
        </Center>

        <Group gap={8} mr={0}>
          <ActionIcon
            aria-label="Share article"
            className={`${classes.action} ${shared ? classes.actionActive : ''}`}
            onClick={handleShare}
          >
            <IconShare size={16} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group>
      </Group>
      </div>
    </Card>
  );
}

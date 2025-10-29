import { IconBookmark, IconHeart, IconShare } from '@tabler/icons-react';
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
import classes from './ArticleCard.module.css';

export default function ArticleCard({
  title = 'Resident Evil Village review',
  author = 'Bill Wormeater',
  excerpt = '',
  image = 'https://i.imgur.com/Cij5vdL.png',
}) {
  const theme = useMantineTheme();

  return (
    <Card withBorder radius="md" className={classes.card} m={0} p={0}>
      <Card.Section>
        <Image src={image} height={180} alt={title} />
      </Card.Section>
    

      <Badge className={classes.rating} variant="gradient" gradient={{ from: 'yellow', to: 'red' }}>
        outstanding
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
          <ActionIcon className={classes.action}>
            <IconHeart size={16} color={theme.colors.red[6]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconBookmark size={16} color={theme.colors.yellow[7]} />
          </ActionIcon>
          <ActionIcon className={classes.action}>
            <IconShare size={16} color={theme.colors.blue[6]} />
          </ActionIcon>
        </Group>
      </Group>
      </div>
    </Card>
  );
}

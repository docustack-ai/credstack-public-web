"use client";

import { useEffect, useState } from 'react';
import { Card, SimpleGrid, Text, Title, Button, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import StyledContainer from '../StyledContainer';

type RelatedBlogsProps = {
  title: string;
  items: string[]; // slugs
};

export function RelatedBlogs({ title, items }: RelatedBlogsProps) {
  const [blogsMap, setBlogsMap] = useState<Record<string, any>>({});
  const isSmall = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (!items || items.length === 0) return;
    fetch('/blogs.json')
      .then((res) => res.json())
      .then((blogs) => {
        const map: Record<string, any> = {};
        blogs.forEach((b: any) => (map[b.slug] = b));
        setBlogsMap(map);
      })
      .catch(() => setBlogsMap({}));
  }, [items]);

  return (
    <StyledContainer>
      <div style={{ padding: 24 }}>
        <Title order={2} ta="center" mb="xl">
          {title}
        </Title>
        {items.length ? (
          <SimpleGrid cols={isSmall ? 1 : 2} spacing="md">
            {items.map((slug) => {
              const blog = blogsMap[slug];
              return (
                <Card key={slug} withBorder radius="sm" padding="sm" shadow="sm" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', backgroundColor: '#ffffff' }}>
                  <Text fw={600}>{blog ? blog.title : slug}</Text>
                  <Text mt="sm" mb="md" c="dimmed">
                    {blog ? blog.excerpt : ''}
                  </Text>
                  <Image
                    src={blog?.image}
                    alt={blog?.title}
                    radius="sm"
                    h={150}
                  />
                  <Button
                    component="a"
                    variant="outline"
                    href={blog ? `/blogs/${blog.slug}` : `/blogs/${slug}`}
                    size="sm"
                    mt="md"
                    style={{ alignSelf: 'flex-start', width: 'auto' }}
                  >
                    Read article
                  </Button>
                </Card>
              );
            })}
          </SimpleGrid>
        ) : (
          <Text c="dimmed" ta="center">
            More resources coming soon.
          </Text>
        )}
      </div>
    </StyledContainer>
  );
}

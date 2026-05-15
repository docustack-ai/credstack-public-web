"use client";

import { useEffect, useState } from 'react';
import { Card, Group, Text, Title, Button } from '@mantine/core';
import StyledContainer from '../StyledContainer';

type RelatedBlogsProps = {
  title: string;
  items: string[]; // slugs
};

export function RelatedBlogs({ title, items }: RelatedBlogsProps) {
  const [blogsMap, setBlogsMap] = useState<Record<string, any>>({});

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
          <Group grow align="stretch">
            {items.map((slug) => {
              const blog = blogsMap[slug];
              return (
                <Card key={slug} withBorder radius="none" padding="lg" shadow="sm" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', backgroundColor: '#ffffff' }}>
                  <Text fw={600}>{blog ? blog.title : slug}</Text>
                  <Text mt="sm" mb="md" c="dimmed">
                    {blog ? blog.excerpt : ''}
                  </Text>
                  <img src={blog?.image} alt={blog?.title} style={{ width: '100%', height: 150, objectFit: 'cover', borderRadius: 4 }} />
                  <Button
                    component="a"
                    variant='outline'
                    fullWidth={false}
                    href={blog ? `/blogs/${blog.slug}` : `/blogs/${slug}`}
                    size="sm"
                    style={{ marginTop: 8 }}
                  >
                    Read article
                  </Button>
                </Card>
              );
            })}
          </Group>
        ) : (
          <Text c="dimmed" ta="center">
            More resources coming soon.
          </Text>
        )}
      </div>
    </StyledContainer>
  );
}

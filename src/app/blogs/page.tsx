'use client';

import ArticleCard from '../../components/ArticleCard';
import { useEffect, useState } from 'react';
import { Container } from '@mantine/core';
import Link from 'next/link';
import classes from './BlogListPage.module.css';

export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/blogs.json')
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  return (
    <Container fluid style={{ border: '1px solid rgb(228, 224, 217)', backgroundColor: 'rgb(249, 246, 241)' }}>
      <Container fluid p={20} style={{ border: '1px solid rgb(228, 224, 217)', maxWidth: '1200px', backgroundColor: 'white' }}>
        <div className={classes.listContainer}>
          <h1 className={classes.title}>Blogs</h1>
          <div className={classes.grid}>
            {blogs.map((blog: any) => (
              <Link key={blog.slug} href={`/blogs/${blog.slug}`} className={classes.cardLink}>
                <ArticleCard {...blog} />
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </Container>
  );
}

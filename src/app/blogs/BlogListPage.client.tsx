'use client';

import ArticleCard from '../../components/ArticleCard';
import { useEffect, useState } from 'react';
import { Container } from '@mantine/core';
import Link from 'next/link';
import classes from './BlogListPage.module.css';
import StyledContainer from '../../components/StyledContainer';


export default function BlogListPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/blogs.json')
      .then((res) => res.json())
      .then(setBlogs);
  }, []);

  return (
    <StyledContainer>
      <div className={classes.listContainer}>
        <h1 className={classes.title}>Blogs</h1>
        <p className={classes.description}>
          Discover how AI is transforming financial due diligence and credit underwriting. Learn how platforms like CredStack automate document analysis, risk checks, and decision-making.
        </p>
        <div className={classes.grid}>
          {blogs.map((blog: any) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} className={classes.cardLink}>
              <ArticleCard {...blog} />
            </Link>
          ))}
        </div>
      </div>
    </StyledContainer>
  );
}

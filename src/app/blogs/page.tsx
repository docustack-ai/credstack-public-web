'use client';

import ArticleCard from '../../components/ArticleCard';
import { useEffect, useState } from 'react';
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
  );
}

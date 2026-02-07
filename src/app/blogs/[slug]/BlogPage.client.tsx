'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import classes from './BlogPage.module.css';

type BlogPageClientProps = {
  slug: string;
};

export default function BlogPageClient({ slug }: BlogPageClientProps) {
  const [blog, setBlog] = useState<any>(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/blogs.json')
      .then((res) => res.json())
      .then((blogs) => {
        const found = blogs.find((b: any) => b.slug === slug);
        setBlog(found);
        if (found) {
          fetch(`/${found.markdown}`)
            .then((res) => res.text())
            .then(setContent);
        }
      });
  }, [slug]);

  if (!blog) return <div>Blog not found</div>;

  return (
    <div className={classes.pageContainer}>
      <div className={classes.topBar}>
        <Link href="/blogs" className={classes.backButton}>&larr; Back to all blogs</Link>
      </div>
      <h1 className={classes.title}>{blog.title}</h1>
      <div className={classes.meta}>
        <span>{blog.author}</span> | <span>{blog.date}</span>
      </div>
      <Image src={blog.image} alt={blog.title} className={classes.image} width={800} height={400} style={{ width: '100%', height: 'auto' }} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

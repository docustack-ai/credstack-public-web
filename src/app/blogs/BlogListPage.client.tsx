'use client';

import ArticleCard from '../../components/ArticleCard';
import Link from 'next/link';
import classes from './BlogListPage.module.css';
import StyledContainer from '../../components/StyledContainer';

type BlogItem = {
  title: string;
  author: string;
  date: string;
  badge: string;
  excerpt: string;
  image: string;
  slug: string;
  markdown: string;
};

type BlogListPageProps = {
  blogs: BlogItem[];
};

export default function BlogListPage({ blogs }: BlogListPageProps) {

  return (
    <StyledContainer>
      <div className={classes.listContainer}>
        <h1 className={classes.title}>Blogs</h1>
        <p className={classes.description}>
          Discover how AI is transforming financial due diligence and credit underwriting. Learn how platforms like CredStack automate document analysis, risk checks, and decision-making.
        </p>
        <div className={classes.grid}>
          {blogs.map((blog) => (
            <Link key={blog.slug} href={`/blogs/${blog.slug}`} className={classes.cardLink}>
              <ArticleCard {...blog} />
            </Link>
          ))}
        </div>
      </div>
    </StyledContainer>
  );
}

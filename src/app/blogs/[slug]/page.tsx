import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import classes from "./BlogPage.module.css";

type BlogEntry = {
  slug: string;
  title: string;
  author: string;
  date: string;
  image: string;
  markdown: string;
  excerpt?: string;
};

export const dynamic = "force-static";

function getBlogs(): BlogEntry[] {
  const filePath = path.join(process.cwd(), "public/blogs.json");
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as BlogEntry[];
}

export async function generateStaticParams() {
  return getBlogs().map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blogs = getBlogs();
  const blog = blogs.find((entry) => entry.slug === slug);
  const title = blog?.title
    ? `${blog.title} | CredStack.ai`
    : "Blog | CredStack.ai";
  const description =
    blog?.excerpt ||
    "Read CredStack insights on AI-powered due diligence, underwriting, and financial operations.";

  return {
    title,
    description,
    alternates: {
      canonical: `/blogs/${slug}`,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogs = getBlogs();
  const blog = blogs.find((entry) => entry.slug === slug);

  if (!blog) {
    notFound();
  }

  const markdownPath = path.join(process.cwd(), "public", blog.markdown);
  const content = fs.readFileSync(markdownPath, "utf8");

  return (
    <div className={classes.pageContainer}>
      <div className={classes.topBar}>
        <Link href="/blogs" className={classes.backButton}>
          &larr; Back to all blogs
        </Link>
      </div>
      <h1 className={classes.title}>{blog.title}</h1>
      <div className={classes.meta}>
        <span>{blog.author}</span> | <span>{blog.date}</span>
      </div>
      <Image
        src={blog.image}
        alt={blog.title}
        className={classes.image}
        width={800}
        height={400}
        style={{ width: "100%", height: "auto" }}
      />
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}

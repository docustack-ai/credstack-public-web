import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import BlogPageClient from "./BlogPage.client";

type BlogEntry = {
  slug: string;
  title: string;
  excerpt?: string;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "public/blogs.json");
  const blogs = JSON.parse(fs.readFileSync(filePath, "utf8")) as BlogEntry[];
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

  return <BlogPageClient slug={slug} />;
}

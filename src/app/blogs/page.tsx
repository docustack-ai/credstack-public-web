import type { Metadata } from "next";
import fs from "fs";
import path from "path";
import BlogListPageClient from "./BlogListPage.client";

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

export const metadata: Metadata = {
  title: "Blogs | CredStack.ai",
  description:
    "Insights on AI-powered due diligence, underwriting automation, and risk operations for lenders and financial institutions.",
  alternates: {
    canonical: "/blogs",
  },
};

export const dynamic = "force-static";

export default function Page() {
  const filePath = path.join(process.cwd(), "public/blogs.json");
  const blogs = JSON.parse(fs.readFileSync(filePath, "utf8")) as BlogItem[];

  return <BlogListPageClient blogs={blogs} />;
}

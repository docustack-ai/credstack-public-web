import type { Metadata } from "next";
import BlogListPageClient from "./BlogListPage.client";

export const metadata: Metadata = {
  title: "Blogs | CredStack.ai",
  description:
    "Insights on AI-powered due diligence, underwriting automation, and risk operations for lenders and financial institutions.",
  alternates: {
    canonical: "/blogs",
  },
};

export default function Page() {
  return <BlogListPageClient />;
}

import type { Metadata } from "next";
import fs from 'fs';
import path from 'path';
import TermsMarkdown from './TermsMarkdown.client';

export const metadata: Metadata = {
  title: "Terms of Use | CredStack.ai",
  description:
    "Review CredStack’s Terms of Use to understand your rights, responsibilities, and conditions for accessing and using our AI-powered platform.",
  alternates: {
    canonical: "/legal/terms",
  },
};

export default function TermsPage() {
  const filePath = path.join(process.cwd(), 'src/app/legal/terms/terms.md');
  const markdown = fs.readFileSync(filePath, 'utf8');
  return <TermsMarkdown markdown={markdown} />;
}

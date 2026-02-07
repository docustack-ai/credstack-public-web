import type { Metadata } from "next";
import fs from 'fs';
import path from 'path';
import TermsMarkdown from './TermsMarkdown.client';

export const metadata: Metadata = {
  title: "Terms of Use | CredStack.ai",
  description:
    "Review the terms of use for accessing and using CredStack's website and services.",
  alternates: {
    canonical: "/legal/terms",
  },
};

export default function TermsPage() {
    const filePath = path.join(process.cwd(), 'src/app/legal/terms/terms.md');
    const markdown = fs.readFileSync(filePath, 'utf8');
    return <TermsMarkdown markdown={markdown} />;
}

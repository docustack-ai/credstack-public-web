import type { Metadata } from "next";
import fs from 'fs';
import path from 'path';
import PrivacyMarkdown from './PrivacyMarkdown.client';

export const metadata: Metadata = {
  title: "Privacy Policy | CredStack.ai",
  description:
    "Read CredStack’s Terms of Use covering user obligations, platform access, acceptable usage, and legal conditions for using our services.",
  alternates: {
    canonical: "/legal/privacy",
  },
};

export default function PrivacyPage() {
  const filePath = path.join(process.cwd(), 'src/app/legal/privacy/privacy.md');
  const markdown = fs.readFileSync(filePath, 'utf8');
  return <PrivacyMarkdown markdown={markdown} />;
}

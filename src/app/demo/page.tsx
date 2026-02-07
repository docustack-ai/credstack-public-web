import type { Metadata } from "next";
import DemoPageClient from "./DemoPage.client";

export const metadata: Metadata = {
  title: "Request a Demo | CredStack.ai",
  description:
    "Book a CredStack demo to see AI-powered due diligence, onboarding, underwriting, and workflow automation in action.",
  alternates: {
    canonical: "/demo",
  },
};

export default function Page() {
  return <DemoPageClient />;
}

import type { Metadata } from "next";
import HomePageClient from "./HomePage.client";

export const metadata: Metadata = {
  title: "CredStack.ai | AI Agents for Due Diligence and Underwriting",
  description:
    "CredStack helps BFSI institutions automate due diligence, underwriting, and document workflows with AI agents.",
  alternates: {
    canonical: "/",
  },
};

export default function Page() {
  return <HomePageClient />;
}

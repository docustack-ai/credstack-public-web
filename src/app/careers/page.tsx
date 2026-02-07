import type { Metadata } from "next";
import CareersPageClient from "./CareersPage.client";

export const metadata: Metadata = {
  title: "Careers | CredStack.ai",
  description:
    "Explore open roles at CredStack and help build AI-driven products for due diligence and underwriting automation.",
  alternates: {
    canonical: "/careers",
  },
};

export default function Page() {
  return <CareersPageClient />;
}

import type { Metadata } from "next";
import TeamsPageClient from "./TeamsPage.client";

export const metadata: Metadata = {
  title: "Team | CredStack.ai",
  description:
    "Meet the CredStack team and advisors building AI-powered due diligence and underwriting platforms for BFSI.",
  alternates: {
    canonical: "/teams",
  },
};

export default function Page() {
  return <TeamsPageClient />;
}

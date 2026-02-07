import type { Metadata } from "next";
import SecuritizationUseCaseClient from "./SecuritizationUseCase.client";

export const metadata: Metadata = {
  title: "Securitization Use Case | CredStack.ai",
  description:
    "Understand how CredStack streamlines securitization due diligence with AI classification, validation, risk scoring, and audit-ready outputs.",
  alternates: {
    canonical: "/use_cases/securitization",
  },
};

export default function Page() {
  return <SecuritizationUseCaseClient />;
}

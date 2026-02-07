import type { Metadata } from "next";
import InsuranceUnderwritingUseCaseClient from "./InsuranceUnderwritingUseCase.client";

export const metadata: Metadata = {
  title: "Insurance Underwriting Use Case | CredStack.ai",
  description:
    "See how CredStack automates insurance underwriting with evidence validation, medical intelligence, and explainable risk scoring.",
  alternates: {
    canonical: "/use_cases/insurance_underwriting",
  },
};

export default function Page() {
  return <InsuranceUnderwritingUseCaseClient />;
}

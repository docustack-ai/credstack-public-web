import type { Metadata } from "next";
import InsuranceOnboardingUseCaseClient from "./InsuranceOnboardingUseCase.client";

export const metadata: Metadata = {
  title: "AI Powered Onboarding for Insurance | CredStack.ai",
  description:
    "Learn how CredStack accelerates insurance onboarding with no-form intake, risk checks, and compliant communication workflows.",
  alternates: {
    canonical: "/use_cases/insurance_onboarding",
  },
};

export default function Page() {
  return <InsuranceOnboardingUseCaseClient />;
}

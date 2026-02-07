import type { Metadata } from "next";
import BankingOnboardingUseCaseClient from "./BankingOnboardingUseCase.client";

export const metadata: Metadata = {
  title: "Banking Onboarding Use Case | CredStack.ai",
  description:
    "See how CredStack automates banking onboarding with zero-form capture, instant due diligence, and faster underwriting handoff.",
  alternates: {
    canonical: "/use_cases/banking_onboarding",
  },
};

export default function Page() {
  return <BankingOnboardingUseCaseClient />;
}

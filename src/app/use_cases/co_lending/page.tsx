import type { Metadata } from "next";
import CoLendingUseCaseClient from "./CoLendingUseCase.client";

export const metadata: Metadata = {
  title: "AI Powered Co-Lending | CredStack.ai",
  description:
    "Explore how CredStack enables RBI-aligned co-lending workflows with automated onboarding, validations, and portfolio monitoring.",
  alternates: {
    canonical: "/use_cases/co_lending",
  },
};

export default function Page() {
  return <CoLendingUseCaseClient />;
}

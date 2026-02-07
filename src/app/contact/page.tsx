import type { Metadata } from "next";
import ContactUsClient from "./ContactUs.client";

export const metadata: Metadata = {
  title: "Contact Us | CredStack.ai",
  description:
    "Contact CredStack to discuss AI-powered due diligence, underwriting automation, and document intelligence for your team.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Page() {
  return <ContactUsClient />;
}

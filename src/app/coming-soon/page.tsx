import type { Metadata } from "next";
import ComingSoonPage from "./coming-soon";

export const metadata: Metadata = {
  title: "Coming Soon | CredStack.ai",
  description:
    "This CredStack page is under development. Check back soon for new updates and product content.",
  alternates: {
    canonical: "/coming-soon",
  },
};

export default function Page() {
  return <ComingSoonPage />;
}

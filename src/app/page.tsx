"use client";

import HeroBullets from "../components/HeroBullets.jsx";
import ParallaxCardDemo from "../components/ParallaxCardDemo.jsx";
import CardWithStats from "../components/CardWithStats.jsx";
import ApplicationFeatureCard from "../components/ApplicationFeatureCard.jsx";
import DocumentAutomationFeatures from "../components/DocumentAutomationFeatures.jsx";
import { PrivacyCapabilitiesCard } from "../components/PrivacyCapabilitiesCard";

export default function HomePage() {
  return (
    <>

      <HeroBullets />
      <div style={{ height: 48 }} />
      <ParallaxCardDemo />
      <div style={{ height: 48 }} />
      <CardWithStats />
      {/* <ApplicationFeatureCard /> */}
      <div style={{ height: 48 }} />
      <DocumentAutomationFeatures />
      <div style={{ height: 48 }} />
      <PrivacyCapabilitiesCard />

    </>
  );
}

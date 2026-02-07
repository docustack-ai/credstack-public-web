"use client";

import HeroBullets from "../components/HeroBullets.jsx";
import ParallaxCardDemo from "../components/ParallaxCardDemo.jsx";
import CardWithStats from "../components/CardWithStats.jsx";
import ApplicationFeatureCard from "../components/ApplicationFeatureCard.jsx";
import DocumentAutomationFeatures from "../components/DocumentAutomationFeatures.jsx";
import SpaceComponent from "../components/SpaceComponent.jsx";
import { PrivacyCapabilitiesCard } from "../components/PrivacyCapabilitiesCard";

export default function HomePage() {
  return (
    <>

      <HeroBullets />
      <SpaceComponent />
      <ParallaxCardDemo />
      <SpaceComponent />
      <CardWithStats />
      {/* <ApplicationFeatureCard /> */}
      <SpaceComponent />
      <DocumentAutomationFeatures />
      <SpaceComponent />
      <PrivacyCapabilitiesCard />

    </>
  );
}

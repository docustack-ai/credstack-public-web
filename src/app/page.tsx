"use client";
import HeroBullets from "../components/HeroBullets.jsx";
import ParallaxCardDemo from "../components/ParallaxCardDemo.jsx";
import CardWithStats from "../components/CardWithStats.jsx";
import ApplicationFeatureCard from "../components/ApplicationFeatureCard.jsx";
import DocumentAutomationFeatures from "../components/DocumentAutomationFeatures.jsx";

export default function HomePage() {
  return (
    <>
      <HeroBullets />
      <ParallaxCardDemo />
      <CardWithStats />
      {/* <ApplicationFeatureCard /> */}
      <DocumentAutomationFeatures />
    </>
  );
}

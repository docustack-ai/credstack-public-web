'use client';

import { Text } from '@mantine/core';
import { FeaturePageData } from '../../../data/features/types';
import { FeatureHero } from '../../../components/features/FeatureHero';
import { ProblemInfographics } from '../../../components/features/ProblemInfographics';
import { DefinitionBlock } from '../../../components/features/DefinitionBlock';
import { HowItWorksFlow } from '../../../components/features/HowItWorksFlow';
import { UseCaseGrid } from '../../../components/features/UseCaseGrid';
import { AudienceChips } from '../../../components/features/AudienceChips';
import { ComparisonTable } from '../../../components/features/ComparisonTable';
import { TechArchitecture } from '../../../components/features/TechArchitecture';
import { FaqAccordion } from '../../../components/features/FaqAccordion';
import { DemoCta } from '../../../components/features/DemoCta';
import { RelatedBlogs } from '../../../components/features/RelatedBlogs';
import SpaceComponent from '../../../components/SpaceComponent';

type FeaturePageClientProps = {
  feature: FeaturePageData;
};

export default function FeaturePageClient({ feature }: FeaturePageClientProps) {
  return (
    <>
      <FeatureHero
        h1={feature.hero.h1}
        intro={feature.hero.intro}
        ctaLabel={feature.hero.ctaLabel}
        ctaHref={feature.hero.ctaHref || '/demo'}
        image={feature.hero.image}
      />
      <SpaceComponent />

      {feature.problem?.points?.length ? (
        <>
          <ProblemInfographics title={feature.problem.title} points={feature.problem.points} />
          <SpaceComponent />
        </>
      ) : null}

      {feature.definition?.whatIs || feature.definition?.whyUse ? (
        <>
          <DefinitionBlock
            title={feature.definition.title}
            whatIs={feature.definition.whatIs}
            whyUse={feature.definition.whyUse}
          />
          <SpaceComponent />
        </>
      ) : null}

      {feature.howItWorks?.steps?.length ? (
        <>
          <HowItWorksFlow title={feature.howItWorks.title} steps={feature.howItWorks.steps} />
          <SpaceComponent />
        </>
      ) : null}

      {feature.useCases?.items?.length ? (
        <>
          <UseCaseGrid title={feature.useCases.title} items={feature.useCases.items} />
          <SpaceComponent />
        </>
      ) : null}

      {feature.audience?.items?.length ? (
        <>
          <AudienceChips title={feature.audience.title} items={feature.audience.items} />
          <SpaceComponent />
        </>
      ) : null}

      {feature.differentiators?.items?.length ? (
        <>
          <UseCaseGrid title={feature.differentiators.title} items={feature.differentiators.items} />
          <SpaceComponent />
        </>
      ) : null}

      {feature.comparison?.rows?.length ? (
        <>
          <ComparisonTable columns={feature.comparison.columns} rows={feature.comparison.rows} />
          <SpaceComponent />
        </>
      ) : null}

      {(feature.architecture?.points?.length || feature.architecture?.apiNotes?.length) ? (
        <>
          <TechArchitecture
            title={feature.architecture.title}
            points={feature.architecture.points}
            apiNotes={feature.architecture.apiNotes}
          />
          <SpaceComponent />
        </>
      ) : null}

      {feature.faqs?.length ? (
        <>
          <FaqAccordion items={feature.faqs} />
          <SpaceComponent />
        </>
      ) : null}

      {feature.demo?.title ? (
        <>
          <DemoCta
            title={feature.demo.title}
            text={feature.demo.text}
            primaryLabel={feature.demo.primaryLabel}
            primaryHref={feature.demo.primaryHref || '/demo'}
            secondaryLabel={feature.demo.secondaryLabel}
            secondaryHref={feature.demo.secondaryHref || '/contact'}
          />
          <SpaceComponent />
        </>
      ) : null}

      {feature.relatedBlogs ? (
        <>
          <RelatedBlogs title={feature.relatedBlogs.title} items={feature.relatedBlogs.items} />
          <SpaceComponent />
        </>
      ) : null}

      {feature.complianceNote ? (
        <Text size="sm" c="dimmed" ta="center" px="md" pb="xl">
          {feature.complianceNote}
        </Text>
      ) : null}
    </>
  );
}

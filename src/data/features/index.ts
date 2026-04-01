import { bankStatementAnalyzerFeature } from './bank-statement-analyzer';
import { camAutomationFeature } from './dynamic-cam';
import { emailLeadManagementFeature } from './email-lead-management';
import { incomeAssessmentFeature } from './income-projector';
import { agentsAiFeature } from './agents-ai';
import { insightsAiFeature } from './insights-ai';
import { FeaturePageData } from './types';

const features: FeaturePageData[] = [
  bankStatementAnalyzerFeature,
  incomeAssessmentFeature,
  camAutomationFeature,
  emailLeadManagementFeature,
  agentsAiFeature,
  insightsAiFeature,
];

export const featureBySlug: Record<string, FeaturePageData> = features.reduce(
  (acc, feature) => {
    acc[feature.slug] = feature;
    return acc;
  },
  {} as Record<string, FeaturePageData>
);

export const featureList = features;

export const getFeatureBySlug = (slug: string): FeaturePageData | undefined => {
  return featureBySlug[slug];
};

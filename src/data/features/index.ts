import { bankStatementAnalyzerFeature } from './bank-statement-analyzer';
import { FeaturePageData } from './types';

const features: FeaturePageData[] = [bankStatementAnalyzerFeature];

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

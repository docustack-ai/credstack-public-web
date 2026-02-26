import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import FeaturePageClient from './FeaturePage.client';
import { featureList, getFeatureBySlug } from '../../../data/features';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return featureList.map((feature) => ({ slug: feature.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    return {
      title: 'Feature Not Found | CredStack.ai',
      description: 'The requested feature page is not available.',
    };
  }

  return {
    title: feature.seo.title,
    description: feature.seo.description,
    alternates: {
      canonical: feature.seo.canonical,
    },
  };
}

export default async function FeaturePage({ params }: PageProps) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  return <FeaturePageClient feature={feature} />;
}

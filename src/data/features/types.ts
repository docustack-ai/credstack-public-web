export type FeatureProblemPoint = {
  title: string;
  description: string;
  visualHint?: string;
};

export type FeatureStep = {
  title: string;
  description: string;
  image?: string;
};

export type FeatureUseCase = {
  title: string;
  description: string;
};

export type FeatureDifferentiator = {
  title: string;
  description: string;
};

export type FeatureComparisonRow = {
  feature: string;
  traditional: string;
  credstack: string;
};

export type FeatureFaq = {
  q: string;
  a: string;
};

export type FeatureBlog = {
  title: string;
  href: string;
};

export type FeaturePageData = {
  slug: string;
  seo: {
    title: string;
    description: string;
    canonical: string;
  };
  hero: {
    h1: string;
    intro: string;
    ctaLabel: string;
    ctaHref: string;
    image?: string;
  };
  problem: {
    title: string;
    points: FeatureProblemPoint[];
  };
  definition: {
    title?: string;
    whatIs: string;
    whyUse: string;
  };
  howItWorks: {
    title: string;
    steps: FeatureStep[];
  };
  useCases: {
    title: string;
    items: FeatureUseCase[];
  };
  audience: {
    title: string;
    items: string[];
  };
  differentiators: {
    title: string;
    items: FeatureDifferentiator[];
  };
  comparison: {
    columns: [string, string, string];
    rows: FeatureComparisonRow[];
  };
  architecture: {
    title: string;
    points: string[];
    apiNotes: string[];
  };
  faqs: FeatureFaq[];
  demo: {
    title: string;
    text: string;
    primaryLabel: string;
    primaryHref: string;
    secondaryLabel?: string;
    secondaryHref?: string;
  };
  relatedBlogs: {
    title: string;
    items: FeatureBlog[];
  };
  complianceNote?: string;
};

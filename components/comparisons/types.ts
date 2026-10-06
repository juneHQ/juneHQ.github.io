export interface ISocialProof {
  quote: string;
  fullName: string;
  roleCompany: string;
  logo: string;
  profile: string;
}

export interface IFeatureSection {
  header: string;
  title: string;
  subtitle: string;
  mainAsset: string;
  features: IFeature[];
}

export interface IFeature {
  name: string;
  description: string;
  iconName: string;
}

export interface IAlternative {
  slug: string;
    name: string;
    fullArticle: string;
    hero: {
      heading: string;
      heroImage: string;
      title: string;
      subtitle: string;
    };
    socialProof: ISocialProof;
    testimonials: {
      companyLogo: string;
      quote: string;
      image: string;
      name: string;
      title: string;
    }[];
    uniqueFeatures: IFeatureSection;
    secondFeature: IFeatureSection;
    comparisonFeatures: {
      feature: string;
      june: boolean;
    competitor: boolean;
  }[];
}

export interface IAlternativePageProps {
  alternative: IAlternative;
}
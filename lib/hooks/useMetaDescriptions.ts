import content from "../../public/cms/content.json";

export interface ICMSMetaDescription {
  route: string;
  title: string;
  description: string;
  canonical: string;
  hasAccordion: boolean;
  accordionTitle: string;
  accordionBody: string;
}

export const useMetaDescriptions = ({route}: {route: string}) => {

  const metaDescriptions =  content.metaDescriptions;

  const metaDescription: ICMSMetaDescription = metaDescriptions.find((item: any) => item.route === route);

  return metaDescription;
};

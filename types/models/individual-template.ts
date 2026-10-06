import { Role } from '../enums';

/**
 * Copy of an individual template
 * This holds additional data for ITemplateConfig
 */
export interface IndividualTemplate {
  route: string;
  roles: Role[];
  /**
   * Example: Feature audit
   */
  name: string;
  /**
   * Example: Map your features, analyze their usage
   */
  title: React.ReactNode;
  aboutThisTemplate: {
    /**
     * Example:
     * Analyze your current product and see which features are used
     */
    aboutText: string;
    /**
     * Example: ["Popularity and frequency", "Intensity of usage", "Total users"]
     */
    features: string[];
  };
  /**
   * Example: ["Core events for your product"]
   */
  requiredEvents: string[];
  /**
   * Example: ["Visitors", "Users"]
   */
  userTypes: string[];
  creatorAvatarSrc: string;
  hidePlaybook?: boolean;
  /**
   * Example:
   * - What is a Feature Audit?
   * - How to use it
   * - Where to Focus
   * - Where to Experiment
   */
  playbooks: {
    text: string;
    link: string;
  }[];
}

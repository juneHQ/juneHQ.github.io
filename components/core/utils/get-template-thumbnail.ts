import { TEMPLATE_CONFIGS } from 'unbundled-core/constants/report-configurations';

export function getTemplateThumbnail(templateRoute: typeof TEMPLATE_CONFIGS[number]['route']) {
  switch (templateRoute) {
    case 'audit':
      return '/templates/audit.svg';
    case 'retention':
      return '/templates/user-retention.svg';
    case 'funnel':
      return '/templates/funnel.svg';
    case 'company-funnel':
      return '/templates/funnel.svg';
    case 'engagement':
      return '/templates/top-feature-users.svg';
    case 'active-users':
      return '/templates/active-users.svg';
    case 'slipping':
      return '/templates/slipping-away-users.svg';
    case 'power-users':
      return '/templates/power-users.svg';
    case 'active-groups':
      return '/templates/active-companies.svg';
    case 'feature-release':
      return '/templates/feature-adoption.svg';
    case 'feature-retention':
      return '/templates/feature-retention.svg';
    case 'activation':
      return '/templates/activation.svg';
    case 'slipping-groups':
      return '/templates/slipping-away-companies.svg';
    case 'company-retention':
      return '/templates/company-retention.svg';
    case 'new-users':
      return '/templates/new-users.svg';
    case 'power-groups':
      return '/templates/power-groups.svg';
    case 'new-groups':
      return '/templates/new-groups.svg';
    case 'explorer':
      return '/templates/explorer.svg';
    case 'control-center':
    default:
      return '';
  }
}

import { BusinessType, FilterConfig, MonthType, RatioType, StageType } from '../types';

export const METRIC_CONFIG_LIBRARY = {
  median: {
    title: 'Median WoW growth',
    suffix: '%',
    description: 'The median change of growth as a percentage compared to the previous week’s value',
  },
  firstQuartile: {
    title: '1st quartile',
    suffix: '%',
    description: 'The value under which 25% of data points are found when they are arranged in increasing order',
  },
  thirdQuartile: {
    title: '3rd quartile',
    suffix: '%',
    description: 'The value under which 75% of data points are found when arranged in increasing order',
  },
  sampleSize: { title: 'Sample size', suffix: '', description: '' },
};

export const BUSINESS_TYPE_CONFIG_LIBRARY: { [key in BusinessType]: FilterConfig } = {
  B2B: { title: 'B2B', icon: '🏢' },
  B2C: { title: 'B2C', icon: '😃' },
};

export const STAGE_CONFIG_LIBRARY: { [key in StageType]: FilterConfig } = {
  PRE_SEED: {
    title: 'Pre-seed',
    icon: '🌰',
    description: "The period where a company's founders are getting operations off the ground",
  },
  SEED: {
    title: 'Seed',
    icon: '🌱',
    description: 'The period where a company’s venture capital financing often begins',
  },
  SERIES_A: {
    title: 'Series A',
    icon: '🌿',
    description: 'The period of a company’s first significant round of venture capital financing',
  },
};

export const RATIO_CONFIG_LIBRARY: { [key in RatioType]: FilterConfig } = {
  DAU_WAU: { title: 'DAU / WAU' },
  DAU_MAU: { title: 'DAU / MAU' },
  WAU_MAU: { title: 'WAU / MAU' },
};

export const MONTH_CONFIG_LIBRARY: { [key in MonthType]: FilterConfig } = {
  '1MO': { icon: '', title: '1 month' },
  '2MO': { icon: '', title: '2 month' },
  '6MO': { icon: '', title: '6 month' },
};

export const BUSINESS_TYPE_FILTERS = Object.keys(BUSINESS_TYPE_CONFIG_LIBRARY).map((key) => ({
  value: key,
  group: 'businessType',
  ...BUSINESS_TYPE_CONFIG_LIBRARY[key],
}));

export const STAGE_TYPE_FILTERS = Object.keys(STAGE_CONFIG_LIBRARY).map((key) => ({
  value: key,
  group: 'stageType',
  ...STAGE_CONFIG_LIBRARY[key],
}));

export const RATIO_TYPE_FILTERS = Object.keys(RATIO_CONFIG_LIBRARY).map((key) => ({
  value: key,
  group: 'ratioType',
  ...RATIO_CONFIG_LIBRARY[key],
}));

export const MONTH_TYPE_FILTERS = Object.keys(MONTH_CONFIG_LIBRARY).map((key) => ({
  value: key,
  group: 'monthType',
  ...MONTH_CONFIG_LIBRARY[key],
}));

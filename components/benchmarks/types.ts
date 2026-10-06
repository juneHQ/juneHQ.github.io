import { ReactNode } from 'react';
import { SidePanelFormState } from './side-panel';

export type BenchmarkType =
  | 'ACQUISITION'
  | 'ACTIVATION'
  | 'ACTIVE_USERS'
  | 'USER_RETENTION'
  | 'STICKINESS'
  | 'POWER_USERS';

export type BusinessType = 'B2B' | 'B2C';

export type StageType = 'PRE_SEED' | 'SEED' | 'SERIES_A';

export type RatioType = 'DAU_WAU' | 'DAU_MAU' | 'WAU_MAU';

export type MonthType = '1MO' | '2MO' | '6MO';

export interface FilterConfig {
  title: string;
  icon?: string;
  description?: string;
}

export interface BenchmarkConfig {
  icon: ReactNode;
  title: string;
  definition: ReactNode;
  methodDescription: ReactNode;
  filters?: (FilterConfig & { value: string })[];
  getDataPresentations: (this: BenchmarkConfig, options: { filters: SidePanelFormState }) => void;
}

export interface StageTableData {
  type: 'stage';
  data: {
    [key in BusinessType]: ({ [key in StageType]: string | number | null } & { name: string })[];
  };
}

export interface RetentionTableData {
  type: 'retention';
  data: {
    [key in BusinessType]: {
      [key in StageType]: { name: string; '1mo': number; '2mo': number; '6mo': number }[];
    };
  };
}

export type BenchmarkTableData = StageTableData | RetentionTableData;

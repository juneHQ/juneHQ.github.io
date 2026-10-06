import { BenchmarkConfig, BenchmarkType } from '../types';
import { ACQUISITION } from './configs/acquisition-config';
import { ACTIVATION } from './configs/activation-config';
import { ACTIVE_USERS } from './configs/active-users-config';
import { USER_RETENTION } from './configs/user-retention-config';

export const BENCHMARK_LIBRARY: { [key in BenchmarkType]: BenchmarkConfig } = {
  ACQUISITION,
  ACTIVATION,
  ACTIVE_USERS,
  USER_RETENTION,
};

export const BENCHMARK_TYPE_FILTERS = Object.keys(BENCHMARK_LIBRARY).map((key) => ({
  value: key,
  group: 'benchmarkType',
  ...BENCHMARK_LIBRARY[key],
}));

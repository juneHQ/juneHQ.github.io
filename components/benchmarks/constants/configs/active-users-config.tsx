import { Box, Text, VStack } from '@chakra-ui/react';
import { METRIC_CONFIG_LIBRARY, STAGE_CONFIG_LIBRARY, STAGE_TYPE_FILTERS } from '../metadata-library';
import { BenchmarkConfig } from '../../types';
import { SummaryDataPoints } from '../../summary-data-points';
import { BenchmarkTable } from '../../benchmark-table';
import { BenchmarkChart } from '../../benchmark-chart';
import { JAnchor } from '../../../core/j-anchor';

export const ACTIVE_USERS: BenchmarkConfig = {
  icon: '📈',
  title: 'Active users',
  methodDescription:
    'For this benchmark we consider as active users, the number of users that performed at least one action in a given week.',
  definition: (
    <VStack alignItems="start">
      <Text>
        Active users are users who come back and get the unique value from a product. For instance on Uber you're active
        if you book a cab. Weekly Active Users (WAU) measures the unique users who completed an action each week. DAU
        and MAU is the same but daily and monthly. If you had 190 active users last week and 210 this week, you WoW
        growth is 10.5%
      </Text>
      <JAnchor href="https://help.june.so/en/articles/5978684-active-users">📘 Help doc on active users</JAnchor>
    </VStack>
  ),
  getDataPresentations({ filters }) {
    const data = {
      B2B: [
        { suffix: '%', name: 'Median WoW growth', PRE_SEED: 5.5, SEED: 2.36, SERIES_A: 0.81, SERIES_B: 0.22 },
        { suffix: '%', name: '1st quartile', PRE_SEED: 8.71, SEED: 3.9, SERIES_A: 2.7, SERIES_B: 0.51 },
        { suffix: '%', name: '3rd quartile', PRE_SEED: 2.26, SEED: 1.27, SERIES_A: 0.25, SERIES_B: 0.12 },
        { name: 'Sample size', PRE_SEED: 50, SEED: 50, SERIES_A: 30, SERIES_B: 30 },
      ],
      B2C: [
        { suffix: '%', name: 'Median WoW growth', PRE_SEED: 4.72, SEED: 3.81, SERIES_A: 4.21, SERIES_B: null },
        { suffix: '%', name: '1st quartile', PRE_SEED: 7.98, SEED: 7.91, SERIES_A: 8.13, SERIES_B: null },
        { suffix: '%', name: '3rd quartile', PRE_SEED: 2.48, SEED: 0.88, SERIES_A: 1.24, SERIES_B: null },
        { name: 'Sample sizes', PRE_SEED: 50, SEED: 50, SERIES_A: 30, SERIES_B: '<10' },
      ],
    };

    const currentData = data[filters.businessType];
    const chartData = currentData.slice(0, -1);
    const [median, q1, q3, sampleSize] = currentData;

    return (
      <>
        <SummaryDataPoints
          summary="Week over week growth of weekly active users for SaaS companies"
          sampleSize={sampleSize[filters.stageType]}
          dataPoints={[
            { value: q1[filters.stageType], ...METRIC_CONFIG_LIBRARY.firstQuartile },
            { value: median[filters.stageType], ...METRIC_CONFIG_LIBRARY.median },
            { value: q3[filters.stageType], ...METRIC_CONFIG_LIBRARY.thirdQuartile },
          ]}
        />
        <Box my={[16, 16, '105px']} />
        <BenchmarkTable
          activeColumn={filters.stageType}
          headers={[{ title: 'Founding stage', value: 'name' }, ...STAGE_TYPE_FILTERS]}
          rows={currentData}
        />
        <Box my={16} />
        <BenchmarkChart dataKeyLibrary={STAGE_CONFIG_LIBRARY} data={chartData} />
      </>
    );
  },
};

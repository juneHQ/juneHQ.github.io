import { Box, Text, VStack } from '@chakra-ui/react';
import { METRIC_CONFIG_LIBRARY, MONTH_TYPE_FILTERS } from '../metadata-library';
import { BenchmarkConfig } from '../../types';
import { SummaryDataPoints } from '../../summary-data-points';
import { BenchmarkTable } from '../../benchmark-table';
import { BenchmarkChart } from '../../benchmark-chart';
import { JAnchor } from '../../../core/j-anchor';

export const USER_RETENTION: BenchmarkConfig = {
  icon: '🧲',
  title: 'User retention',
  methodDescription: `For this survey we used ""N day retention"" at a user level.

  N Day retention shows the percent of users who return to the app on a specified day after their first launch.
  For example, if Day 2 retention is 50 percent, it means that 50 percent of new users launched the app on day 2.
  
  By comparison, unbounded (rolling) retention measures the percentage of users who return to the app on a specified day or any day after that.
  If Day 2 unbounded retention is 50 percent, it means that 50 percent of new users returned to the app on day 2 or later.`,
  definition: (
    <VStack alignItems="start">
      <Text>
        Retention is the measure of how many users return to your product over time. It’s the percentage of active users
        at any time after X days of signing up or installing your app. Retention refers to continuous usage, which means
        your solution keeps generating value over time.
      </Text>
      <JAnchor href="https://www.june.so/blog/user-retention-playbook">
        📘 Here is a full playbook on user retention
      </JAnchor>
    </VStack>
  ),
  filters: MONTH_TYPE_FILTERS,
  getDataPresentations({ filters }) {
    const data = {
  B2B: {
    PRE_SEED: [
      { suffix: '%', name: 'Median retention', '1MO': 21.5, '2MO': 15.0, '6MO': 12.2 },
      { suffix: '%', name: '1st quartile', '1MO': 26.5, '2MO': 16.2, '6MO': 14.4 },
      { suffix: '%', name: '3rd quartile', '1MO': 17.2, '2MO': 10.0, '6MO': 8.7 },
      { name: 'Sample size', '1MO': 50, '2MO': 50, '6MO': 50 },
    ],
    SEED: [
      { suffix: '%', name: 'Median retention', '1MO': 11.8, '2MO': 6.5, '6MO': 9.9 },
      { suffix: '%', name: '1st quartile', '1MO': 17.1, '2MO': 9.5, '6MO': 12.3 },
      { suffix: '%', name: '3rd quartile', '1MO': 5.3, '2MO': 5.0, '6MO': 2.6 },
      { name: 'Sample size', '1MO': 50, '2MO': 50, '6MO': 50 },
    ],
    SERIES_A: [
      { suffix: '%', name: 'Median retention', '1MO': 43.2, '2MO': 28.2, '6MO': 30.5 },
      { suffix: '%', name: '1st quartile', '1MO': 50.6, '2MO': 36.1, '6MO': 35.6 },
      { suffix: '%', name: '3rd quartile', '1MO': 29.1, '2MO': 15.8, '6MO': 10.9 },
      { name: 'Sample size', '1MO': 30, '2MO': 30, '6MO': 30 },
    ],
    SERIES_B: [
      { suffix: '%', name: 'Median retention', '1MO': 65.2, '2MO': 51.2, '6MO': 32.6 },
      { suffix: '%', name: '1st quartile', '1MO': 71.5, '2MO': 58.5, '6MO': 34.4 },
      { suffix: '%', name: '3rd quartile', '1MO': 59.0, '2MO': 43.9, '6MO': 30.7 },
      { name: 'Sample size', '1MO': 30, '2MO': 30, '6MO': 30 },
    ],
  },
  B2C: {
    PRE_SEED: [
      { suffix: '%', name: 'Median retention', '1MO': 8.5, '2MO': 5.8, '6MO': 5.0 },
      { suffix: '%', name: '1st quartile', '1MO': 9.3, '2MO': 5.6, '6MO': 5.6 },
      { suffix: '%', name: '3rd quartile', '1MO': 7.7, '2MO': 4.7, '6MO': 4.5 },
      { name: 'Sample size', '1MO': 50, '2MO': 50, '6MO': 50 },
    ],
    SEED: [
      { suffix: '%', name: 'Median retention', '1MO': 36.8, '2MO': 33.9, '6MO': 29.4 },
      { suffix: '%', name: '1st quartile', '1MO': 38.8, '2MO': 39.8, '6MO': 34.0 },
      { suffix: '%', name: '3rd quartile', '1MO': 29.6, '2MO': 23.8, '6MO': 21.2 },
      { name: 'Sample size', '1MO': 50, '2MO': 50, '6MO': 50 },
    ],
    SERIES_A: [
      { suffix: '%', name: 'Median retention', '1MO': 30.4, '2MO': 16.5, '6MO': 14.5 },
      { suffix: '%', name: '1st quartile', '1MO': 31.5, '2MO': 16.9, '6MO': 14.6 },
      { suffix: '%', name: '3rd quartile', '1MO': 29.2, '2MO': 16.2, '6MO': 14.3 },
      { name: 'Sample size', '1MO': 30, '2MO': 30, '6MO': 30 },
    ],
    SERIES_B: [
      { suffix: '%', name: 'Median retention', '1MO': null, '2MO': null, '6MO': null },
      { suffix: '%', name: '1st quartile', '1MO': null, '2MO': null, '6MO': null },
      { suffix: '%', name: '3rd quartile', '1MO': null, '2MO': null, '6MO': null },
      { name: 'Sample size', '1MO': null, '2MO': null, '6MO': null },
    ],
  },
};


    const currentData = data[filters.businessType][filters.stageType];
    const chartData = currentData.slice(0, -1);
    const [median, q1, q3, sampleSize] = currentData;

    return (
      <>
        <SummaryDataPoints
          summary="User retention benchmark for SaaS companies"
          sampleSize={sampleSize[filters.monthType]}
          dataPoints={[
            { value: q1[filters.monthType], ...METRIC_CONFIG_LIBRARY.firstQuartile },
            { value: median[filters.monthType], ...METRIC_CONFIG_LIBRARY.median, title: 'Median retention' },
            { value: q3[filters.monthType], ...METRIC_CONFIG_LIBRARY.thirdQuartile },
          ]}
        />
        <Box my={[16, 16, '105px']} />
        <BenchmarkTable
          activeColumn={filters.monthType}
          headers={[
            { title: 'Month after sign up', value: 'name' },
            { title: '1 month retention', value: '1MO' },
            { title: '2 month retention', value: '2MO' },
            { title: '6 month retention', value: '6MO' },
          ]}
          rows={currentData}
        />
        <Box my={16} />
        <BenchmarkChart
          dataKeyLibrary={{
            '1MO': { title: '1 month retention' },
            '2MO': { title: '2 month retention' },
            '6MO': { title: '6 month retention' },
          }}
          data={chartData}
        />
      </>
    );
  },
};

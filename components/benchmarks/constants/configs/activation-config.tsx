import { Box, Text, VStack } from '@chakra-ui/react';
import { METRIC_CONFIG_LIBRARY, STAGE_CONFIG_LIBRARY, STAGE_TYPE_FILTERS } from '../metadata-library';
import { BenchmarkConfig } from '../../types';
import { SummaryDataPoints } from '../../summary-data-points';
import { BenchmarkTable } from '../../benchmark-table';
import { BenchmarkChart } from '../../benchmark-chart';
import { JAnchor } from '../../../core/j-anchor';

export const ACTIVATION: BenchmarkConfig = {
  icon: '🌗',
  title: 'Activation',
  methodDescription:
    'For this benchmark we used retention after one week at a user level to compare activation across venture backed SaaS companies. We consider activation as the retention after one week of users signing up.',
  definition: (
    <VStack alignItems="start">
      <Text>
        Activation is the % of signed up users that come back to the product after 7 days (also called "week 1
        retention"). In other words its the % of new sign up that get hooked after they started using a product.
      </Text>
      <JAnchor href="https://www.june.so/blog/activation-playbook">📘 Full playbook on Activation</JAnchor>
    </VStack>
  ),
  getDataPresentations({ filters }) {
    const data = {
      B2B: [
        { suffix: '%', name: 'Median activation', PRE_SEED: 43.18, SEED: 27.32, SERIES_A: 43.41, SERIES_B: 63.18 },
        { suffix: '%', name: '1st quartile', PRE_SEED: 51.31, SEED: 47.29, SERIES_A: 55.62, SERIES_B: 74.59 },
        { suffix: '%', name: '3rd quartile', PRE_SEED: 33.24, SEED: 17.32, SERIES_A: 33.29, SERIES_B: 51.72 },
        { name: 'Sample size', PRE_SEED: 50, SEED: 50, SERIES_A: 30, SERIES_B: 30 },
      ],
      B2C: [
        { suffix: '%', name: 'Median activation', PRE_SEED: 31.42, SEED: 34.42, SERIES_A: 33.72, SERIES_B: null },
        { suffix: '%', name: '1st quartile', PRE_SEED: 34.17, SEED: 42.35, SERIES_A: 35.7, SERIES_B: null },
        { suffix: '%', name: '3rd quartile', PRE_SEED: 29.13, SEED: 22.21, SERIES_A: 29.41, SERIES_B: null },
        { name: 'Sample size', PRE_SEED: 50, SEED: 50, SERIES_A: 30, SERIES_B: '<10' },
      ],
    };

    const currentData = data[filters.businessType];
    const chartData = currentData.slice(0, -1);
    const [median, q1, q3, sampleSize] = currentData;

    return (
      <>
        <SummaryDataPoints
          summary="Activation benchmarks for SaaS companies"
          sampleSize={sampleSize[filters.stageType]}
          dataPoints={[
            { value: q1[filters.stageType], ...METRIC_CONFIG_LIBRARY.firstQuartile },
            { value: median[filters.stageType], ...METRIC_CONFIG_LIBRARY.median, title: 'Median activation' },
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

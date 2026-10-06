import { Box } from '@chakra-ui/react';
import { METRIC_CONFIG_LIBRARY, STAGE_CONFIG_LIBRARY, STAGE_TYPE_FILTERS } from '../metadata-library';
import { BenchmarkConfig } from '../../types';
import { SummaryDataPoints } from '../../summary-data-points';
import { BenchmarkTable } from '../../benchmark-table';
import { BenchmarkChart } from '../../benchmark-chart';

export const ACQUISITION: BenchmarkConfig = {
  icon: '🆕',
  title: 'Acquisition',
  methodDescription:
    'For this benchmark we used "User base growth" at a user level to compare growth across venture backed Saas companies. User base growth is the percentage of users across the whole user base of a product that were acquired in a given week.',
  definition:
    'Acquisition is the pace at which you grow your overall user base. For instance if you acquire 10 users this week and had 100 users in total (active or not), you grew 10% Week over Week (WoW).\n' +
    'Startups observe this metric to make sure they fuel their startup with new users.\n' +
    '\n' +
    'Paul Graham noted that a good growth rate is 5 to 7 percent per week, while an exceptional growth rate is 10 percent per week.',
  getDataPresentations({ filters }) {
    const data = {
      B2B: [
        { suffix: '%', name: 'Median WoW growth', PRE_SEED: 1.43, SEED: 2.01, SERIES_A: 1.65, SERIES_B: 1.63 },
        { suffix: '%', name: '1st quartile', PRE_SEED: 2.52, SEED: 2.28, SERIES_A: 1.85, SERIES_B: 1.63 },
        { suffix: '%', name: '3rd quartile', PRE_SEED: 1.01, SEED: 1.22, SERIES_A: 0.93, SERIES_B: 1.14 },
        { name: 'Sample size', PRE_SEED: 50, SEED: 50, SERIES_A: 30, SERIES_B: 30 },
      ],
      B2C: [
        { suffix: '%', name: 'Median WoW growth', PRE_SEED: 3.21, SEED: 2.84, SERIES_A: 1.83, SERIES_B: null },
        { suffix: '%', name: '1st quartile', PRE_SEED: 3.45, SEED: 4.82, SERIES_A: 2.99, SERIES_B: null },
        { suffix: '%', name: '3rd quartile', PRE_SEED: 3.02, SEED: 1.31, SERIES_A: 1.03, SERIES_B: null },
        { name: 'Sample sizes', PRE_SEED: 50, SEED: 50, SERIES_A: 30, SERIES_B: '<10' },
      ],
    };
    const currentData = data[filters.businessType];
    const chartData = currentData.slice(0, -1);
    const [median, q1, q3, sampleSize] = currentData;

    return (
      <>
        <SummaryDataPoints
          summary={'User base growth week over week benchmark for Saas companies'}
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

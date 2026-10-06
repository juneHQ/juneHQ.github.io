import { useState } from 'react';
import Head from 'next/head';
import { defaultPx } from 'components/core/utils/default-container-px';
import { pageStyles } from 'components/core/page-styles';
import { PageHeader } from 'components/core/page-header';
import { Navbar } from 'components/core/navbar/navbar';
import { Footer } from 'components/core/footer/footer';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import { BenchmarkConfig } from '../../components/benchmarks/types';
import { SidePanel, SidePanelFormState } from '../../components/benchmarks/side-panel';
import { MetricDefinition } from '../../components/benchmarks/metric-definition';
import { DataCollectionAdvisory } from '../../components/benchmarks/data-collection-advisory';
import { BENCHMARK_LIBRARY } from '../../components/benchmarks/constants/config-library';

export default function Benchmarks(props) {
  const businessType = props.slug.split('+')[0];
  const metricName = props.slug.split('+')[1];

  const getDefaultFilters = (): SidePanelFormState => {
    if (metricName === 'acquisition') {
      return {
        benchmarkType: 'ACQUISITION',
        businessType: businessType.toUpperCase(),
        stageType: 'SEED',
        ratioType: 'DAU_WAU',
        monthType: '1MO',
      };
    } else if (metricName === 'activation') {
      return {
        benchmarkType: 'ACTIVATION',
        businessType: businessType.toUpperCase(),
        stageType: 'SEED',
        ratioType: 'DAU_WAU',
        monthType: '1MO',
      };
    } else if (metricName === 'user-retention') {
      return {
        benchmarkType: 'USER_RETENTION',
        businessType: businessType.toUpperCase(),
        stageType: 'SEED',
        ratioType: 'DAU_WAU',
        monthType: '1MO',
      };
    } else {
      return {
        benchmarkType: 'ACTIVE_USERS',
        businessType: businessType.toUpperCase(),
        stageType: 'SEED',
        ratioType: 'DAU_WAU',
        monthType: '1MO',
      };
    }
  };

  const defaultFilters: SidePanelFormState = getDefaultFilters();
  const [filters, setFilters] = useState<SidePanelFormState>(defaultFilters);

  const currentBenchmark: BenchmarkConfig = BENCHMARK_LIBRARY[filters.benchmarkType];

  const getReadableMetricName = (): string => {
    switch (filters.benchmarkType) {
      case 'ACQUISITION':
        return 'Acquisition';
      case 'ACTIVATION':
        return 'Activation';
      case 'USER_RETENTION':
        return 'User Retention';
      case 'ACTIVE_USERS':
        return 'Active Users';
      default:
        return 'Acquisition';
    }
  };
  const readableMetricName = getReadableMetricName();

  return (
    <>
      <Head>
        <title>
          {filters.businessType} {readableMetricName} Saas Product Benchmarks 2022
        </title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={`2022 ${filters.businessType} ${readableMetricName} Saas benchmark`} />
        <meta
          name="description"
          content="Product metrics benchmarks to help you know where you are compared to products like you."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://june.so/" />
        <meta property="og:title" content={`2022 ${filters.businessType} ${readableMetricName} Saas benchmark`} />
        <meta
          property="og:description"
          content="Product metrics benchmarks to help you know where you are compared to products like you."
        />
        <meta property="twitter:url" content="https://june.so/" />
        <meta property="twitter:title" content={`2022 ${filters.businessType} ${readableMetricName} Saas benchmark`} />
        <meta
          property="twitter:description"
          content="Product metrics benchmarks to help you know where you are compared to products like you."
        />
      </Head>
      <Navbar />
      <Box position="absolute" w="100%" maxW="100vw" zIndex="docked">
        <Container maxW="landingMax" px={defaultPx(32)} {...pageStyles.firstSection}>
          <Grid templateColumns={['1fr', '1fr', '1fr 3fr']} gap={['45px']}>
            <GridItem />
            <GridItem>
              <PageHeader
                title={`${filters.businessType} ${readableMetricName} product metrics benchmark`}
                description="Product metric benchmarks to help you compare your product metrics to products at your stage."
              />
            </GridItem>
          </Grid>
          <Grid mt="16" templateColumns={['1fr', '1fr', '1fr 3fr']} gap={['45px']}>
            <GridItem>
              <SidePanel form={filters} onFormChange={setFilters} />
            </GridItem>
            <GridItem>
              {currentBenchmark.getDataPresentations({ filters })}
              <Box my={16} />
              <MetricDefinition
                title={currentBenchmark.title}
                description={currentBenchmark.definition}
                methodDescription={currentBenchmark.methodDescription}
                icon={currentBenchmark.icon}
              />
              <Box my={16} />
              <DataCollectionAdvisory />
            </GridItem>
          </Grid>
        </Container>
        <Footer _wrapper={pageStyles.lastSection} />
      </Box>
    </>
  );
}

const generateSlugs = () => {
  const metricNames = ['acquisition', 'activation', 'user-retention', 'active-users'];

  // Generate slugs for each metric with the format /benchmarks/[business-type]+[metric-name]
  return ['b2b', 'b2c']
    .map((businessType) => {
      return metricNames.map((metricName) => `${businessType}+${metricName}`);
    })
    .flat();
};

export async function getStaticPaths() {
  console.log();
  const paths = generateSlugs().map((slug) => ({
    params: { slug },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  return {
    // Passed to the page component as props
    props: { slug: context.params.slug },
  };
}

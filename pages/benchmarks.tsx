import { useState } from 'react';
import Head from 'next/head';
import { defaultPx } from 'components/core/utils/default-container-px';
import { pageStyles } from 'components/core/page-styles';
import { PageHeader } from 'components/core/page-header';
import { Navbar } from 'components/core/navbar/navbar';
import { Footer } from 'components/core/footer/footer';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import { BenchmarkConfig } from '../components/benchmarks/types';
import { SidePanel, SidePanelFormState } from '../components/benchmarks/side-panel';
import { MetricDefinition } from '../components/benchmarks/metric-definition';
import { DataCollectionAdvisory } from '../components/benchmarks/data-collection-advisory';
import { BENCHMARK_LIBRARY } from '../components/benchmarks/constants/config-library';

export default function Benchmarks() {
  const [filters, setFilters] = useState<SidePanelFormState>({
    benchmarkType: 'ACQUISITION',
    businessType: 'B2B',
    stageType: 'PRE_SEED',
    ratioType: 'DAU_WAU',
    monthType: '1MO',
  });

  const currentBenchmark: BenchmarkConfig = BENCHMARK_LIBRARY[filters.benchmarkType];

  return (
    <>
      <Head>
        <title>SaaS Product Benchmarks 2023</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content="SaaS Product Benchmarks 2023" />
        <meta
          name="description"
          content="Explore the 2023 SaaS Product Benchmarks to understand how your product measures up against the industry. Gain insights on key metrics across acquisition, activation, retention, and more, to strategize your product's growth effectively."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://june.so/benchmarks" />
        <meta property="og:title" content="SaaS Product Benchmarks 2023" />
        <meta
          property="og:description"
          content="Discover where your SaaS product stands with our 2023 Benchmarks. Dive into detailed comparisons on crucial metrics like user acquisition, activation, and retention, and leverage these insights to outperform your competition."
        />
        <meta property="og:image" content="https://june.so/benchmarks-social-share.png" />
        <meta property="twitter:url" content="https://june.so/benchmarks" />
        <meta property="twitter:title" content="SaaS Product Benchmarks 2023" />
        <meta
          property="twitter:description"
          content="See how your SaaS product stacks up with the 2023 Benchmarks. Get the scoop on acquisition, activation, retention, and more. Perfect your growth strategy today!"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image" content="https://june.so/benchmarks-social-share.png" />
        <meta name="twitter:creator" content="@JuneDotSo" />
      </Head>

      <Navbar />
      <Box position="absolute" w="100%" maxW="100vw" zIndex="docked">
        <Container maxW="landingMax" px={defaultPx(32)} {...pageStyles.firstSection}>
          <Grid templateColumns={['1fr', '1fr', '1fr 3fr']} gap={['45px']}>
            <GridItem />
            <GridItem>
              <PageHeader
                title="SaaS product metrics benchmark"
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

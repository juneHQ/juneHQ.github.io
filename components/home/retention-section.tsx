import { Container, SimpleGrid } from '@chakra-ui/react';
import { defaultPx } from 'components/core/utils/default-container-px';
import { PageSectionProps } from '../../types/page-section-props';
import { SectionHeader } from 'components/core/section-header';
import { Retention } from 'components/animated-cards/Retention';
import { FeatureInsight } from 'components/animated-cards/FeatureInsight';
import { FeatureAudit } from 'components/animated-cards/FeatureAudit';
import { MonitorCompanies } from 'components/animated-cards/MonitorCompanies';

export const RetentionSection = (props: PageSectionProps) => {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <SectionHeader
        subtitle="Build a compounding user base"
        title={<>Retain</>}
        _wrapper={{ mb: [4, 4, 8] }}
        _description={{ maxW: '85%' }}
      />
      <SimpleGrid columns={[1, 1, 2]} gap={[12]} rowGap={[8, 8, 12]}>
        <Retention />
        <FeatureInsight />
        <FeatureAudit />
        <MonitorCompanies />
      </SimpleGrid>
    </Container>
  );
};

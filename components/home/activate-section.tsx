import { Container, SimpleGrid } from '@chakra-ui/react';
import { defaultPx } from 'components/core/utils/default-container-px';
import { PageSectionProps } from '../../types/page-section-props';
import { SectionHeader } from 'components/core/section-header';
import { Milestone } from 'components/animated-cards/Milestone';
import { SlackLive } from 'components/animated-cards/SlackLive';
import { ImproveOnboarding } from '../animated-cards/ImproveOnboarding';
import { IdentifyActivation } from '../animated-cards/IdentifyActivation';

export const ActivateSection = (props: PageSectionProps) => {
  return (
    <Container maxW="landingMax" px={defaultPx(32)} {...props._wrapper}>
      <SectionHeader
        subtitle="Get the most out of your signups"
        title={<>Activate</>}
        _wrapper={{ mb: [4, 4, 8] }}
        _description={{ maxW: '85%' }}
      />
      <SimpleGrid columns={[1, 1, 2]} gap={[12]} rowGap={[8, 8, 12]}>
        <SlackLive />
        <Milestone />
        <ImproveOnboarding />
        <IdentifyActivation />
      </SimpleGrid>
    </Container>
  );
};

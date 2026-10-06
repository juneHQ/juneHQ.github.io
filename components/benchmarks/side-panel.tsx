import { Flex, HStack, Text, VStack } from '@chakra-ui/react';
import { BenchmarkType, BusinessType, MonthType, RatioType, StageType } from './types';
import { SidePanelButton } from './side-panel-button';
import { BUSINESS_TYPE_FILTERS, STAGE_TYPE_FILTERS } from './constants/metadata-library';
import { BENCHMARK_TYPE_FILTERS } from './constants/config-library';

export interface SidePanelFormState {
  benchmarkType: BenchmarkType;
  businessType: BusinessType;
  stageType: StageType;
  ratioType: RatioType;
  monthType: MonthType;
}

export interface SidePanelProps {
  form: SidePanelFormState;
  onFormChange: (form: SidePanelFormState) => void;
}

export const SidePanel = (props: SidePanelProps) => {
  return (
    <VStack alignItems="start" spacing="6">
      <VStack alignItems="start" spacing="4">
        <Text fontWeight="medium" fontSize="md" color="landing.almostBlack.500">
          Benchmark
        </Text>
        <Flex flexWrap="wrap">
          {BENCHMARK_TYPE_FILTERS.map((item) => {
            const isActive = item.value === props.form.benchmarkType;
            return (
              <>
                <SidePanelButton
                  key={item.value}
                  isActive={isActive}
                  label={`${item.icon} ${item.title}`}
                  onClick={() => props.onFormChange({ ...props.form, benchmarkType: item.value })}
                />
                {isActive && !!item.filters?.length && (
                  <HStack p="2" bg="purple.50" rounded="base" mr="2" mb="2">
                    {item.filters.map((filter) => {
                      const isActive = filter.value === props.form[filter.group];
                      return (
                        <SidePanelButton
                          key={filter.value}
                          isActive={isActive}
                          label={`${filter.icon} ${filter.title}`}
                          _button={{ m: 0 }}
                          onClick={() =>
                            props.onFormChange({
                              ...props.form,
                              [filter.group]: filter.value,
                            })
                          }
                        />
                      );
                    })}
                  </HStack>
                )}
              </>
            );
          })}
        </Flex>
      </VStack>
      <VStack alignItems="start" spacing="4">
        <Text fontWeight="medium" fontSize="md" color="landing.almostBlack.500">
          Business
        </Text>
        <Flex flexWrap="wrap">
          {BUSINESS_TYPE_FILTERS.map((item) => {
            const isActive = item.value === props.form.businessType;
            return (
              <SidePanelButton
                key={item.value}
                isActive={isActive}
                label={`${item.icon} ${item.title}`}
                onClick={() => props.onFormChange({ ...props.form, businessType: item.value })}
              />
            );
          })}
        </Flex>
      </VStack>
      <VStack alignItems="start" spacing="4">
        <Text fontWeight="medium" fontSize="md" color="landing.almostBlack.500">
          Stage
        </Text>
        <Flex flexWrap="wrap">
          {STAGE_TYPE_FILTERS.map((item) => {
            const isActive = item.value === props.form.stageType;
            return (
              <SidePanelButton
                key={item.value}
                isActive={isActive}
                label={`${item.icon} ${item.title}`}
                onClick={() => props.onFormChange({ ...props.form, stageType: item.value })}
              />
            );
          })}
        </Flex>
      </VStack>
    </VStack>
  );
};

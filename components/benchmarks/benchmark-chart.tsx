import { Box, HStack, Text, useToken } from '@chakra-ui/react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { sortConfigData } from './sorter.util';

export interface BenchmarkChartProps {
  dataKeyLibrary: { [key: string]: { title: string } };
  data: Array<unknown>;
}

export const BenchmarkChart = (props: BenchmarkChartProps) => {
  const [purple100, purple300, purple600, purple800, almostBlack] = useToken('colors', [
    'purple.100',
    'purple.300',
    'purple.600',
    'purple.800',
    'landing.almostBlack.500',
  ]);

  const barColors = [purple100, purple300, purple600, purple800];

  const dataKeys = Object.keys(props.dataKeyLibrary);

  const sortedData = sortConfigData(props.data);

  return (
    <Box border="1px solid #EEEEEE" w="full" rounded="lg" px={[1, 1, '6']} py={[6, 6, '12']}>
      <ResponsiveContainer width="100%" height={444}>
        <BarChart data={sortedData}>
          <CartesianGrid stroke="#eeeeee" />
          <XAxis dataKey="name" axisLine={false} tickLine={false} stroke={almostBlack} tickMargin={16} />
          <YAxis axisLine={false} tickLine={false} unit="%" stroke={almostBlack} />
          {dataKeys.map((key, i) => (
            <Bar key={key} radius={[4, 4, 0, 0]} fill={barColors[i]} dataKey={key} />
          ))}
          <Legend
            wrapperStyle={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 32 }}
            content={(contentProps) => {
              return (
                <HStack spacing={[2, 2, '12']}>
                  {contentProps.payload.map((entry, i) => {
                    return (
                      <HStack key={i}>
                        <Box boxSize="4" rounded="full" bg={entry.color} />
                        <Text whiteSpace="nowrap" fontSize={['xs', 'xs', 'md']} color="landing.almostBlack.500">
                          {props.dataKeyLibrary[entry.value].title}
                        </Text>
                      </HStack>
                    );
                  })}
                </HStack>
              );
            }}
          />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

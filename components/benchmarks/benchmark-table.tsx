import { Box, HStack, Image, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react';
import { JTooltip } from '../core/j-tooltip';
import { sortConfigData } from './sorter.util';

export interface BenchmarkTableProps {
  activeColumn: string;
  headers: Array<{ value: string; title: string; description?: string }>;
  rows: Array<any>;
}

export const BenchmarkTable = (props: BenchmarkTableProps) => {
  const sortedRows = sortConfigData(props.rows);

  return (
    <Box maxW={['90vw', '90vw', 'auto']} w="full" overflowX="auto">
      <TableContainer w="full" border="1px solid #EEEEEE" rounded="lg">
        <Table variant="simple">
          <Thead bg="rgba(238, 238, 238, 0.2);">
            <Tr>
              {props.headers.map((item) => {
                const isActive = item.value === props.activeColumn;
                return (
                  <Th
                    key={item.value}
                    textTransform="initial"
                    fontSize="md"
                    color={isActive ? 'primary' : 'landing.almostBlack.500'}
                    letterSpacing="normal"
                    fontWeight={isActive ? 'semibold' : 'normal'}
                    py="6"
                  >
                    <HStack spacing="1" alignItems="center">
                      <Text>{item.title}</Text>
                      {!!item.description && (
                        <JTooltip label={item.description}>
                          <Image boxSize="17px" src="/info-trigger.svg" alt="info trigger" />
                        </JTooltip>
                      )}
                    </HStack>
                  </Th>
                );
              })}
            </Tr>
          </Thead>
          <Tbody>
            {sortedRows.map((row, i) => {
              const columns = Object.entries(row)
                .map(([key, value]) => ({ key, value }))
                .filter((column) => props.headers.some((h) => h.value === column.key)); // filter out columns that are not in headers
              return (
                <Tr key={i}>
                  {columns.map((column, i) => {
                    const isActive = column.key === props.activeColumn;
                    return (
                      <Td
                        key={column.key}
                        fontSize="md"
                        fontWeight={isActive ? 'semibold' : 'normal'}
                        color={isActive ? 'primary' : 'landing.almostBlack.500'}
                        py="6"
                      >
                        {column.value}
                        {column.key !== 'name' && row.suffix}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};
